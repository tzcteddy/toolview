import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter__sVnl2rU.mjs';
import { manifest } from './manifest_U2qMOkdc.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/bg.astro.mjs');
const _page1 = () => import('./pages/blognav.astro.mjs');
const _page2 = () => import('./pages/dev.astro.mjs');
const _page3 = () => import('./pages/media/lib/audio-meter.astro.mjs');
const _page4 = () => import('./pages/media/lib/permissions.astro.mjs');
const _page5 = () => import('./pages/media/lib/renderer.astro.mjs');
const _page6 = () => import('./pages/media/lib/settings.astro.mjs');
const _page7 = () => import('./pages/media/prd/plan/media_c-weighting_67cba848.plan.astro.mjs');
const _page8 = () => import('./pages/media/prd/plan/media_leq_algorithms_fe599354.plan.astro.mjs');
const _page9 = () => import('./pages/media/prd/plan/media_monitor_canvas_12db6bf5.plan.astro.mjs');
const _page10 = () => import('./pages/media/prd/plan/media_settings_panel_f32ccc7a.plan.astro.mjs');
const _page11 = () => import('./pages/media/prd.astro.mjs');
const _page12 = () => import('./pages/media/prd2.astro.mjs');
const _page13 = () => import('./pages/media/prd3.astro.mjs');
const _page14 = () => import('./pages/media/prd4.astro.mjs');
const _page15 = () => import('./pages/media.astro.mjs');
const _page16 = () => import('./pages/open-source.astro.mjs');
const _page17 = () => import('./pages/tools.astro.mjs');
const _page18 = () => import('./pages/wechat/detail/_title_.astro.mjs');
const _page19 = () => import('./pages/wechat.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/bg/index.astro", _page0],
    ["src/pages/blogNav/index.astro", _page1],
    ["src/pages/dev/index.astro", _page2],
    ["src/pages/media/lib/audio-meter.ts", _page3],
    ["src/pages/media/lib/permissions.ts", _page4],
    ["src/pages/media/lib/renderer.ts", _page5],
    ["src/pages/media/lib/settings.ts", _page6],
    ["src/pages/media/prd/plan/media_c-weighting_67cba848.plan.md", _page7],
    ["src/pages/media/prd/plan/media_leq_algorithms_fe599354.plan.md", _page8],
    ["src/pages/media/prd/plan/media_monitor_canvas_12db6bf5.plan.md", _page9],
    ["src/pages/media/prd/plan/media_settings_panel_f32ccc7a.plan.md", _page10],
    ["src/pages/media/prd.md", _page11],
    ["src/pages/media/prd2.md", _page12],
    ["src/pages/media/prd3.md", _page13],
    ["src/pages/media/prd4.md", _page14],
    ["src/pages/media/index.astro", _page15],
    ["src/pages/open-source/index.astro", _page16],
    ["src/pages/tools/index.astro", _page17],
    ["src/pages/wechat/detail/[title].astro", _page18],
    ["src/pages/wechat/index.astro", _page19],
    ["src/pages/index.astro", _page20]
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
