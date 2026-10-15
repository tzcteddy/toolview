import { EssentiaWASM } from "./essentia/essentia-wasm.es.js";
import Essentia from "./essentia/essentia.js-core.es.js";

function aWeightLin(freq) {
  if (freq <= 0) return 1e-8;
  const f2 = freq * freq;
  const f4 = f2 * f2;
  const raNum = 12194 ** 2 * f4;
  const raDen =
    (f2 + 20.6 ** 2) *
    Math.sqrt((f2 + 107.7 ** 2) * (f2 + 737.9 ** 2)) *
    (f2 + 12194 ** 2);
  const ra = raNum / Math.max(raDen, 1e-20);
  return 10 ** ((20 * Math.log10(Math.max(ra, 1e-20)) + 2) / 10);
}

function cWeightLin(freq) {
  if (freq <= 0) return 1e-8;
  const f2 = freq * freq;
  const rcNum = 12194 ** 2 * f2;
  const rcDen = (f2 + 20.6 ** 2) * (f2 + 12194 ** 2);
  const rc = rcNum / Math.max(rcDen, 1e-20);
  return 10 ** ((20 * Math.log10(Math.max(rc, 1e-20)) + 0.06) / 10);
}

function buildWeights(sampleRate, bins, fn) {
  const weights = new Float32Array(bins);
  const nyquist = sampleRate / 2;
  for (let i = 0; i < bins; i++) {
    weights[i] = fn((i / Math.max(1, bins - 1)) * nyquist);
  }
  return weights;
}

function safeDelete(obj) {
  try {
    obj?.delete?.();
  } catch {
    /* wasm object already gone */
  }
}

class MediaMeterProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    const opts = options.processorOptions || {};
    this.frameSize = opts.frameSize === 2048 ? 2048 : 4096;
    this.sampleRateHz = sampleRate;
    this.frame = new Float32Array(this.frameSize);
    this.filled = 0;
    this.cEnabled = false;
    this.tauSec = 0.125;
    this.leqWindowSec = 10;
    this.msA = 1e-12;
    this.msC = 1e-12;
    this.msZ = 1e-12;
    this.leqA = [];
    this.leqC = [];
    this.leqASum = 0;
    this.leqCSum = 0;
    this.ready = false;
    try {
      this.essentia = new Essentia(EssentiaWASM);
      const bins = this.frameSize / 2 + 1;
      this.aWeights = buildWeights(this.sampleRateHz, bins, aWeightLin);
      this.cWeights = buildWeights(this.sampleRateHz, bins, cWeightLin);
      this.ready = true;
      this.port.postMessage({ type: "ready", engine: "essentia-worklet", frameSize: this.frameSize });
    } catch (err) {
      this.port.postMessage({ type: "error", message: String(err && err.message ? err.message : err) });
    }
    this.port.onmessage = (event) => {
      const msg = event.data || {};
      if (msg.type === "config") {
        if (typeof msg.cEnabled === "boolean") this.cEnabled = msg.cEnabled;
        if (msg.tauMs) this.tauSec = msg.tauMs / 1000;
        if (msg.leqWindowMs) {
          this.leqWindowSec = msg.leqWindowMs / 1000;
          this.resetLeq();
        }
      }
    };
  }

  resetLeq() {
    this.leqA = [];
    this.leqC = [];
    this.leqASum = 0;
    this.leqCSum = 0;
  }

  pushLeq(queue, sumKey, now, ms, dt) {
    const energy = ms * dt;
    queue.push({ t: now, e: energy });
    this[sumKey] += energy;
    const cutoff = now - this.leqWindowSec;
    while (queue.length && queue[0].t < cutoff) {
      this[sumKey] -= queue.shift().e;
    }
    const T = Math.max(dt, this.leqWindowSec);
    return this[sumKey] / T;
  }

  analyze(frame) {
    let acc = 0;
    for (let i = 0; i < frame.length; i++) acc += frame[i] * frame[i];
    const msZ = acc / frame.length;

    const vec = this.essentia.arrayToVector(frame);
    const win = this.essentia.Windowing(vec, false, this.frameSize, "hann", 0, false);
    const spec = this.essentia.PowerSpectrum(win.frame, this.frameSize);
    const power = this.essentia.vectorToArray(spec.powerSpectrum);

    let raw = 0;
    let aAcc = 0;
    let cAcc = 0;
    for (let i = 1; i < power.length; i++) {
      const p = power[i];
      raw += p;
      aAcc += p * this.aWeights[i];
      if (this.cEnabled) cAcc += p * this.cWeights[i];
    }
    safeDelete(vec);
    safeDelete(win.frame);
    safeDelete(spec.powerSpectrum);

    const scale = msZ / Math.max(raw, 1e-20);
    return {
      msZ,
      msA: Math.max(aAcc * scale, 1e-20),
      msC: this.cEnabled ? Math.max(cAcc * scale, 1e-20) : 1e-20,
    };
  }

  process(inputs) {
    if (!this.ready) return true;
    const channel = inputs[0] && inputs[0][0];
    if (!channel) return true;
    let offset = 0;
    while (offset < channel.length) {
      const take = Math.min(this.frameSize - this.filled, channel.length - offset);
      this.frame.set(channel.subarray(offset, offset + take), this.filled);
      this.filled += take;
      offset += take;
      if (this.filled < this.frameSize) break;
      const bands = this.analyze(this.frame);
      const dt = this.frameSize / this.sampleRateHz;
      const now = currentTime;
      const alpha = 1 - Math.exp(-dt / this.tauSec);
      this.msA += (bands.msA - this.msA) * alpha;
      this.msZ += (bands.msZ - this.msZ) * alpha;
      if (this.cEnabled) this.msC += (bands.msC - this.msC) * alpha;
      const leqA = this.pushLeq(this.leqA, "leqASum", now, bands.msA, dt);
      const leqC = this.cEnabled ? this.pushLeq(this.leqC, "leqCSum", now, bands.msC, dt) : 1e-20;
      this.port.postMessage({
        type: "bands",
        msA: this.msA,
        msC: this.msC,
        msZ: this.msZ,
        leqA,
        leqC,
        dt,
      });
      this.filled = 0;
    }
    return true;
  }
}

registerProcessor("media-meter-processor", MediaMeterProcessor);
