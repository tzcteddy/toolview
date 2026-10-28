class PcmTapProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    const flushSec = Math.max(1, (options.processorOptions || {}).flushSec || 5);
    this.capacity = Math.max(2048, Math.floor(sampleRate * flushSec));
    this.buf = new Int16Array(this.capacity);
    this.filled = 0;
    this.port.onmessage = (event) => {
      if (event.data && event.data.type === "flush") {
        this.emit();
        this.port.postMessage({ type: "flushed" });
      }
    };
  }

  emit() {
    if (!this.filled) return;
    const out = this.buf.slice(0, this.filled);
    this.filled = 0;
    this.port.postMessage({ type: "pcm", samples: out }, [out.buffer]);
  }

  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (!ch) return true;
    for (let i = 0; i < ch.length; i++) {
      let s = ch[i];
      if (s > 1) s = 1;
      else if (s < -1) s = -1;
      this.buf[this.filled++] = s < 0 ? s * 0x8000 : s * 0x7fff;
      if (this.filled >= this.capacity) this.emit();
    }
    return true;
  }
}

registerProcessor("pcm-tap-processor", PcmTapProcessor);
