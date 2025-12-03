import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_5LwwAan2.mjs';
import { manifest } from './manifest_BXGWE3k5.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/bg.astro.mjs');
const _page1 = () => import('./pages/dev.astro.mjs');
const _page2 = () => import('./pages/index1.astro.mjs');
const _page3 = () => import('./pages/open-source.astro.mjs');
const _page4 = () => import('./pages/tools.astro.mjs');
const _page5 = () => import('./pages/wechat/detail/_title_.astro.mjs');
const _page6 = () => import('./pages/wechat.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/bg.astro", _page0],
    ["src/pages/dev/index.astro", _page1],
    ["src/pages/index1.astro", _page2],
    ["src/pages/open-source/index.astro", _page3],
    ["src/pages/tools/index.astro", _page4],
    ["src/pages/wechat/detail/[title].astro", _page5],
    ["src/pages/wechat/index.astro", _page6],
    ["src/pages/index.astro", _page7]
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
