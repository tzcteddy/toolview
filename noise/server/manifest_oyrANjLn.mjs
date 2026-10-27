import { h as decodeKey } from './chunks/astro/server_CM_a4mVc.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_S2V6KcEX.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-noise/","cacheDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-noise/node_modules/.astro/","outDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-noise/dist/","srcDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-noise/src/","publicDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-noise/public/","buildClientDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-noise/dist/client/","buildServerDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-noise/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"capture/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/capture","isIndex":false,"type":"page","pattern":"^\\/capture\\/?$","segments":[[{"content":"capture","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capture.astro","pathname":"/capture","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"play/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/play","isIndex":false,"type":"page","pattern":"^\\/play\\/?$","segments":[[{"content":"play","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/play.astro","pathname":"/play","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/toolview/noise/client","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/xdf/dev/person/toolkit/packages/toolkit-noise/src/pages/capture.astro",{"propagation":"none","containsHead":true}],["/Users/xdf/dev/person/toolkit/packages/toolkit-noise/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/xdf/dev/person/toolkit/packages/toolkit-noise/src/pages/play.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/capture@_@astro":"pages/capture.astro.mjs","\u0000@astro-page:src/pages/play@_@astro":"pages/play.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_oyrANjLn.mjs","/Users/xdf/dev/person/toolkit/node_modules/.pnpm/unstorage@1.17.3/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-noise/src/noise-evidence/components/CaptureView.vue":"astro/CaptureView.CDkILav-.js","/Users/xdf/dev/person/toolkit/packages/toolkit-noise/src/noise-evidence/components/PlayerView.vue":"astro/PlayerView.CPDf6oWm.js","/Users/xdf/dev/person/toolkit/packages/toolkit-noise/src/noise-evidence/components/HomeView.vue":"astro/HomeView.PQpajgg1.js","@astrojs/vue/client.js":"astro/client.D6KZuOpm.js","/Users/xdf/dev/person/toolkit/node_modules/.pnpm/essentia.js@0.1.3/node_modules/essentia.js/dist/essentia-wasm.es.js":"astro/essentia-wasm.es.BmDwr4az.js","/Users/xdf/dev/person/toolkit/node_modules/.pnpm/essentia.js@0.1.3/node_modules/essentia.js/dist/essentia.js-core.es.js":"astro/essentia.js-core.es.DOSrF5_G.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/toolview/noise/client/favicon.svg","/toolview/noise/client/manifest.webmanifest","/toolview/noise/client/registerSW.js","/toolview/noise/client/astro/CaptureView.CDkILav-.js","/toolview/noise/client/astro/HomeView.PQpajgg1.js","/toolview/noise/client/astro/PlayerView.CPDf6oWm.js","/toolview/noise/client/astro/capture.D15EH-py.css","/toolview/noise/client/astro/capture.s0PInVeH.css","/toolview/noise/client/astro/client.D6KZuOpm.js","/toolview/noise/client/astro/essentia-wasm.es.BmDwr4az.js","/toolview/noise/client/astro/essentia.js-core.es.DOSrF5_G.js","/toolview/noise/client/astro/index.CWLTCjhS.css","/toolview/noise/client/astro/play.BNHRrt46.css","/toolview/noise/client/astro/recordingRepository.DtKtq3E0.js","/toolview/noise/client/astro/report.uYNpPdpR.js","/toolview/noise/client/astro/runtime-core.esm-bundler.C-Yh5PAc.js","/toolview/noise/client/astro/runtime-dom.esm-bundler.BYwVMTF5.js","/toolview/noise/client/astro/settings.BX1GZttg.js","/toolview/noise/client/media/meter-processor.js","/toolview/noise/client/media/essentia/essentia-wasm.es.js","/toolview/noise/client/media/essentia/essentia.js-core.es.js","/toolview/noise/client/capture/index.html","/toolview/noise/client/play/index.html","/toolview/noise/client/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"Sf06lsDQisyDzoXkQ0NVToVl8L4NJhBEDUvDNIecPUA=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/xdf/dev/person/toolkit/packages/toolkit-noise/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
