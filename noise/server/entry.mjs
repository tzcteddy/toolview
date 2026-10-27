import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DybVAYbn.mjs';
import { manifest } from './manifest_6tn_t5VS.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/capture.astro.mjs');
const _page1 = () => import('./pages/play.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/capture.astro", _page0],
    ["src/pages/play.astro", _page1],
    ["src/pages/index.astro", _page2]
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
    "client": "file:///Users/xdf/dev/person/toolkit/packages/toolkit-noise/dist/client/",
    "server": "file:///Users/xdf/dev/person/toolkit/packages/toolkit-noise/dist/server/",
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
