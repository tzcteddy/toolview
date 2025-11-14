import { k as decodeKey } from './chunks/astro/server_D-MzEGOW.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DUiogM8Y.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/","cacheDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/node_modules/.astro/","outDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/dist/","srcDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/src/","publicDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/public/","buildClientDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/dist/client/","buildServerDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"tools/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tools","isIndex":true,"type":"page","pattern":"^\\/tools\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tools/index.astro","pathname":"/tools","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"wechat/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/wechat","isIndex":true,"type":"page","pattern":"^\\/wechat\\/?$","segments":[[{"content":"wechat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/wechat/index.astro","pathname":"/wechat","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/toolkit-online/dist/online/client/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/wechat/detail/[title].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/wechat/detail/[title]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/wechat/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/wechat/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/tools/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/tools/index@_@astro":"pages/tools.astro.mjs","\u0000@astro-page:src/pages/wechat/detail/[title]@_@astro":"pages/wechat/detail/_title_.astro.mjs","\u0000@astro-page:src/pages/wechat/index@_@astro":"pages/wechat.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BXm0FCi5.mjs","/Users/xdf/dev/person/toolkit/node_modules/.pnpm/unstorage@1.17.2/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/components/common/v-virtlist/v-virtlist.vue":"astro-static/v-virtlist.DB_5efZP.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-online/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DcX3MeFg.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/components/common/v-waterfall/v-waterfall-wrapper.vue":"astro-static/v-waterfall-wrapper.jtqQVQOh.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/components/chat-coze/index.vue":"astro-static/index.Dv6jPOeG.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/components/common/v-carousel/v-carousel.vue":"astro-static/v-carousel.CVxxLjYq.js","/Users/xdf/dev/person/toolkit/node_modules/.pnpm/astro@5.15.5_@types+node@24.10.1_rollup@4.53.2_terser@5.44.1_typescript@5.9.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BrjGQxeo.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/wechat/components/Main.vue":"astro-static/Main.OOJf-nQW.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/tools/components/v-tools.vue":"astro-static/v-tools.7cDe2CWb.js","@/pages/components/home-main.vue":"astro-static/home-main.D1_qsrBP.js","@/components/chat-coze/index.js":"astro-static/index.BOl-NqwR.js","@/components/common/v-button.vue":"astro-static/v-button.DBbU5fcM.js","@/components/common/v-side.vue":"astro-static/v-side.28FaIkOc.js","@astrojs/vue/client.js":"astro-static/client.Cb6dBzJ7.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"astro-static/Layout.astro_astro_type_script_index_0_lang.CH6uHYKr.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"contextmenu\",t=>{t.preventDefault(),alert(\"住手\")});document.addEventListener(\"keydown\",t=>{t.key===\"F12\"&&t.preventDefault(),t.ctrlKey&&t.shiftKey&&t.key===\"I\"&&t.preventDefault(),t.ctrlKey&&t.shiftKey&&t.key===\"J\"&&t.preventDefault(),t.ctrlKey&&t.key===\"u\"&&t.preventDefault(),t.ctrlKey&&t.shiftKey&&t.key===\"C\"&&t.preventDefault()});setInterval(()=>{if(Math.random()>.95)debugger},10);"]],"assets":["/toolkit-online/dist/online/client/astro-static/banner.Dzf6w6Vn.jpg","/toolkit-online/dist/online/client/astro-static/wechat_code.AeUHoASf.png","/toolkit-online/dist/online/client/astro-static/logo.Dzs6dEdP.png","/toolkit-online/dist/online/client/astro-static/index.BRR2V92h.css","/toolkit-online/dist/online/client/favicon.svg","/toolkit-online/dist/online/client/astro-static/Main.OOJf-nQW.js","/toolkit-online/dist/online/client/astro-static/_plugin-vue_export-helper.DlAUqK2U.js","/toolkit-online/dist/online/client/astro-static/_title_.DSqdA5Uk.css","/toolkit-online/dist/online/client/astro-static/client.Cb6dBzJ7.js","/toolkit-online/dist/online/client/astro-static/home-main.D1_qsrBP.js","/toolkit-online/dist/online/client/astro-static/iconify.BINjRQMY.js","/toolkit-online/dist/online/client/astro-static/index.BOl-NqwR.js","/toolkit-online/dist/online/client/astro-static/index.D0SLiofX.css","/toolkit-online/dist/online/client/astro-static/index.D3UMJoWH.css","/toolkit-online/dist/online/client/astro-static/index.DBAQKt5E.css","/toolkit-online/dist/online/client/astro-static/index.Dv6jPOeG.js","/toolkit-online/dist/online/client/astro-static/index.sEGhHTRU.css","/toolkit-online/dist/online/client/astro-static/preload-helper.Cj5hA6x9.js","/toolkit-online/dist/online/client/astro-static/runtime-core.esm-bundler.Duurg4If.js","/toolkit-online/dist/online/client/astro-static/runtime-dom.esm-bundler.BVl38SEM.js","/toolkit-online/dist/online/client/astro-static/v-button.DBbU5fcM.js","/toolkit-online/dist/online/client/astro-static/v-carousel.CVxxLjYq.js","/toolkit-online/dist/online/client/astro-static/v-side.28FaIkOc.js","/toolkit-online/dist/online/client/astro-static/v-tools.7cDe2CWb.js","/toolkit-online/dist/online/client/astro-static/v-virtlist.DB_5efZP.js","/toolkit-online/dist/online/client/astro-static/v-waterfall-wrapper.jtqQVQOh.js","/toolkit-online/dist/online/client/tools/index.html","/toolkit-online/dist/online/client/wechat/index.html","/toolkit-online/dist/online/client/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"37gP+VZtC1IR9z8uY8K2umo+YTZ79TbKE0vRZmaGRVc=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/xdf/dev/person/toolkit/packages/toolkit-online/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
