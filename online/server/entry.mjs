import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Br8xhvHp.mjs';
import { manifest } from './manifest_D6UZ2C-e.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/bg.astro.mjs');
const _page1 = () => import('./pages/blognav.astro.mjs');
const _page2 = () => import('./pages/dev.astro.mjs');
const _page3 = () => import('./pages/media/lib/audio-meter.astro.mjs');
const _page4 = () => import('./pages/media/lib/essentia-engine.astro.mjs');
const _page5 = () => import('./pages/media/lib/essentia-modules.d.astro.mjs');
const _page6 = () => import('./pages/media/lib/permissions.astro.mjs');
const _page7 = () => import('./pages/media/lib/renderer.astro.mjs');
const _page8 = () => import('./pages/media/lib/settings.astro.mjs');
const _page9 = () => import('./pages/media/prd/plan/fs_ref_calibration_9d01ed27.plan.astro.mjs');
const _page10 = () => import('./pages/media/prd/plan/media_c-weighting_67cba848.plan.astro.mjs');
const _page11 = () => import('./pages/media/prd/plan/media_leq_algorithms_fe599354.plan.astro.mjs');
const _page12 = () => import('./pages/media/prd/plan/media_monitor_canvas_12db6bf5.plan.astro.mjs');
const _page13 = () => import('./pages/media/prd/plan/media_settings_panel_f32ccc7a.plan.astro.mjs');
const _page14 = () => import('./pages/media/prd/plan/noise_evidence_system_cec4ad85.plan.astro.mjs');
const _page15 = () => import('./pages/media/prd/plan/pro_slm_compute_86d24b86.plan.astro.mjs');
const _page16 = () => import('./pages/media/prd.astro.mjs');
const _page17 = () => import('./pages/media/prd2.astro.mjs');
const _page18 = () => import('./pages/media/prd3.astro.mjs');
const _page19 = () => import('./pages/media/prd4.astro.mjs');
const _page20 = () => import('./pages/media.astro.mjs');
const _page21 = () => import('./pages/noise-evidence/capture.astro.mjs');
const _page22 = () => import('./pages/noise-evidence/lib/capture/capture-session.astro.mjs');
const _page23 = () => import('./pages/noise-evidence/lib/capture/pcm-recorder.astro.mjs');
const _page24 = () => import('./pages/noise-evidence/lib/capture/pcm-wav.astro.mjs');
const _page25 = () => import('./pages/noise-evidence/lib/export-import/nrec.astro.mjs');
const _page26 = () => import('./pages/noise-evidence/lib/integrity/payload-files.astro.mjs');
const _page27 = () => import('./pages/noise-evidence/lib/integrity/report.astro.mjs');
const _page28 = () => import('./pages/noise-evidence/lib/integrity/sha256.astro.mjs');
const _page29 = () => import('./pages/noise-evidence/lib/local-time-stamp.astro.mjs');
const _page30 = () => import('./pages/noise-evidence/lib/playback-metrics.astro.mjs');
const _page31 = () => import('./pages/noise-evidence/lib/settings.astro.mjs');
const _page32 = () => import('./pages/noise-evidence/lib/storage/db.astro.mjs');
const _page33 = () => import('./pages/noise-evidence/lib/storage/metrics-codec.astro.mjs');
const _page34 = () => import('./pages/noise-evidence/lib/storage/recordingrepository.astro.mjs');
const _page35 = () => import('./pages/noise-evidence/lib/threshold.astro.mjs');
const _page36 = () => import('./pages/noise-evidence/lib/types.astro.mjs');
const _page37 = () => import('./pages/noise-evidence/lib/viz/evidence-renderer.astro.mjs');
const _page38 = () => import('./pages/noise-evidence/lib/viz/spectrum-bands.astro.mjs');
const _page39 = () => import('./pages/noise-evidence/lib/viz/timeline-map.astro.mjs');
const _page40 = () => import('./pages/noise-evidence/play.astro.mjs');
const _page41 = () => import('./pages/noise-evidence.astro.mjs');
const _page42 = () => import('./pages/open-source.astro.mjs');
const _page43 = () => import('./pages/tools.astro.mjs');
const _page44 = () => import('./pages/wechat/detail/_title_.astro.mjs');
const _page45 = () => import('./pages/wechat.astro.mjs');
const _page46 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/bg/index.astro", _page0],
    ["src/pages/blogNav/index.astro", _page1],
    ["src/pages/dev/index.astro", _page2],
    ["src/pages/media/lib/audio-meter.ts", _page3],
    ["src/pages/media/lib/essentia-engine.ts", _page4],
    ["src/pages/media/lib/essentia-modules.d.ts", _page5],
    ["src/pages/media/lib/permissions.ts", _page6],
    ["src/pages/media/lib/renderer.ts", _page7],
    ["src/pages/media/lib/settings.ts", _page8],
    ["src/pages/media/prd/plan/fs_ref_calibration_9d01ed27.plan.md", _page9],
    ["src/pages/media/prd/plan/media_c-weighting_67cba848.plan.md", _page10],
    ["src/pages/media/prd/plan/media_leq_algorithms_fe599354.plan.md", _page11],
    ["src/pages/media/prd/plan/media_monitor_canvas_12db6bf5.plan.md", _page12],
    ["src/pages/media/prd/plan/media_settings_panel_f32ccc7a.plan.md", _page13],
    ["src/pages/media/prd/plan/noise_evidence_system_cec4ad85.plan.md", _page14],
    ["src/pages/media/prd/plan/pro_slm_compute_86d24b86.plan.md", _page15],
    ["src/pages/media/prd.md", _page16],
    ["src/pages/media/prd2.md", _page17],
    ["src/pages/media/prd3.md", _page18],
    ["src/pages/media/prd4.md", _page19],
    ["src/pages/media/index.astro", _page20],
    ["src/pages/noise-evidence/capture.astro", _page21],
    ["src/pages/noise-evidence/lib/capture/capture-session.ts", _page22],
    ["src/pages/noise-evidence/lib/capture/pcm-recorder.ts", _page23],
    ["src/pages/noise-evidence/lib/capture/pcm-wav.ts", _page24],
    ["src/pages/noise-evidence/lib/export-import/nrec.ts", _page25],
    ["src/pages/noise-evidence/lib/integrity/payload-files.ts", _page26],
    ["src/pages/noise-evidence/lib/integrity/report.ts", _page27],
    ["src/pages/noise-evidence/lib/integrity/sha256.ts", _page28],
    ["src/pages/noise-evidence/lib/local-time-stamp.ts", _page29],
    ["src/pages/noise-evidence/lib/playback-metrics.ts", _page30],
    ["src/pages/noise-evidence/lib/settings.ts", _page31],
    ["src/pages/noise-evidence/lib/storage/db.ts", _page32],
    ["src/pages/noise-evidence/lib/storage/metrics-codec.ts", _page33],
    ["src/pages/noise-evidence/lib/storage/recordingRepository.ts", _page34],
    ["src/pages/noise-evidence/lib/threshold.ts", _page35],
    ["src/pages/noise-evidence/lib/types.ts", _page36],
    ["src/pages/noise-evidence/lib/viz/evidence-renderer.ts", _page37],
    ["src/pages/noise-evidence/lib/viz/spectrum-bands.ts", _page38],
    ["src/pages/noise-evidence/lib/viz/timeline-map.ts", _page39],
    ["src/pages/noise-evidence/play.astro", _page40],
    ["src/pages/noise-evidence/index.astro", _page41],
    ["src/pages/open-source/index.astro", _page42],
    ["src/pages/tools/index.astro", _page43],
    ["src/pages/wechat/detail/[title].astro", _page44],
    ["src/pages/wechat/index.astro", _page45],
    ["src/pages/index.astro", _page46]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/dist/client/",
    "server": "file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
