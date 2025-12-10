import { p as decodeKey } from './chunks/astro/server__U0hlDZ7.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CD62-K3o.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/","cacheDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/node_modules/.astro/","outDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/dist/","srcDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/src/","publicDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/public/","buildClientDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/dist/client/","buildServerDir":"file:///Users/xdf/dev/person/toolkit/packages/toolkit-online/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"bg/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/bg","isIndex":true,"type":"page","pattern":"^\\/bg\\/?$","segments":[[{"content":"bg","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bg/index.astro","pathname":"/bg","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"dev/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dev","isIndex":true,"type":"page","pattern":"^\\/dev\\/?$","segments":[[{"content":"dev","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dev/index.astro","pathname":"/dev","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"open-source/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/open-source","isIndex":true,"type":"page","pattern":"^\\/open-source\\/?$","segments":[[{"content":"open-source","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/open-source/index.astro","pathname":"/open-source","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"tools/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tools","isIndex":true,"type":"page","pattern":"^\\/tools\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tools/index.astro","pathname":"/tools","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"wechat/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/wechat","isIndex":true,"type":"page","pattern":"^\\/wechat\\/?$","segments":[[{"content":"wechat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/wechat/index.astro","pathname":"/wechat","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/toolview/dist/online/client","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/bg/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/wechat/detail/[title].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/wechat/detail/[title]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/wechat/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/wechat/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/dev/index.astro",{"propagation":"none","containsHead":true}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/open-source/index.astro",{"propagation":"none","containsHead":true}],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/tools/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/bg/index@_@astro":"pages/bg.astro.mjs","\u0000@astro-page:src/pages/dev/index@_@astro":"pages/dev.astro.mjs","\u0000@astro-page:src/pages/open-source/index@_@astro":"pages/open-source.astro.mjs","\u0000@astro-page:src/pages/tools/index@_@astro":"pages/tools.astro.mjs","\u0000@astro-page:src/pages/wechat/detail/[title]@_@astro":"pages/wechat/detail/_title_.astro.mjs","\u0000@astro-page:src/pages/wechat/index@_@astro":"pages/wechat.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_gNMAyqwc.mjs","/Users/xdf/dev/person/toolkit/node_modules/.pnpm/unstorage@1.17.3/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/components/common/v-virtlist/v-virtlist.vue":"astro/v-virtlist.CdGeltKi.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/components/common/v-virtlist/v-vir-grid-list.vue":"chunks/v-vir-grid-list_DiN_pxOC.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-online/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-online/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DqxnvmO2.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/components/common/v-waterfall/v-waterfall-wrapper.vue":"astro/v-waterfall-wrapper.DFguSySJ.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/components/common/v-waterfall/v-waterfall-container.vue":"astro/v-waterfall-container.D858w7Fz.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/components/chat-coze/index.vue":"astro/index.CRaXf2D6.js","/Users/xdf/dev/person/toolkit/node_modules/.pnpm/astro@5.16.4_@types+node@24.10.2_rollup@4.53.3_terser@5.44.1_typescript@5.9.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DtvGll8O.mjs","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/PageLayout.astro?astro&type=script&index=1&lang.ts":"astro/PageLayout.astro_astro_type_script_index_1_lang.l0sNRNKZ.js","@/components/common/v-navbar.vue":"astro/v-navbar.CPwAwCdI.js","@/components/chat-coze/index.js":"astro/index.OdW7WBnJ.js","@/pages/components/tag-card-list.vue":"astro/tag-card-list.KX6YbyJy.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/bg/index.astro?astro&type=script&index=0&lang.ts":"astro/index.astro_astro_type_script_index_0_lang.C54PmH4M.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/PageLayout.astro?astro&type=script&index=0&lang.ts":"astro/PageLayout.astro_astro_type_script_index_0_lang.DoaqlKc8.js","@/pages/components/tool-list.vue":"astro/tool-list.CHrLOaB6.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/tools/components/v-tools.vue":"astro/v-tools.QcKCGnnW.js","/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/wechat/components/Main.vue":"astro/Main.30ATbItQ.js","@/components/common/v-side.vue":"astro/v-side.W0LjCAWS.js","@/components/Header.vue":"astro/Header.BxBSK1C-.js","@astrojs/vue/client.js":"astro/client.TP6veToT.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/PageLayout.astro?astro&type=script&index=1&lang.ts",""],["/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/PageLayout.astro?astro&type=script&index=0&lang.ts","(function(){var e=document.createElement(\"script\");e.src=\"https://hm.baidu.com/hm.js?57436cb06562e03449a69728345bad77\";var t=document.getElementsByTagName(\"script\")[0];t.parentNode.insertBefore(e,t)})();"]],"assets":["/toolview/dist/online/client/astro/banner.Dzf6w6Vn.jpg","/toolview/dist/online/client/astro/wechatcode.ctGZV0ZH.jpg","/toolview/dist/online/client/astro/logo.Dzs6dEdP.png","/toolview/dist/online/client/astro/index.alYQoqIM.css","/toolview/dist/online/client/favicon.svg","/toolview/dist/online/client/lib/flexible.js","/toolview/dist/online/client/lib/theme.js","/toolview/dist/online/client/astro/Header.BxBSK1C-.js","/toolview/dist/online/client/astro/Main.30ATbItQ.js","/toolview/dist/online/client/astro/_plugin-vue_export-helper.DlAUqK2U.js","/toolview/dist/online/client/astro/_title_.DEN6dkmk.css","/toolview/dist/online/client/astro/client.TP6veToT.js","/toolview/dist/online/client/astro/iconify.Pn6tMpNO.js","/toolview/dist/online/client/astro/index.C4Z8x3J8.css","/toolview/dist/online/client/astro/index.CMgDiJ5i.css","/toolview/dist/online/client/astro/index.CRaXf2D6.js","/toolview/dist/online/client/astro/index.Cp88XYr0.css","/toolview/dist/online/client/astro/index.D2Nshtl3.js","/toolview/dist/online/client/astro/index.DVyqGFxF.css","/toolview/dist/online/client/astro/index.OdW7WBnJ.js","/toolview/dist/online/client/astro/index.astro_astro_type_script_index_0_lang.C54PmH4M.js","/toolview/dist/online/client/astro/index.h3R3Vyff.css","/toolview/dist/online/client/astro/index.igyPbbBp.css","/toolview/dist/online/client/astro/my-lib.es.lu5UEp_o.js","/toolview/dist/online/client/astro/preload-helper.BS46-MCq.js","/toolview/dist/online/client/astro/runtime-core.esm-bundler.Cxg0Yxpp.js","/toolview/dist/online/client/astro/runtime-dom.esm-bundler.-JQpxj4M.js","/toolview/dist/online/client/astro/tag-card-list.KX6YbyJy.js","/toolview/dist/online/client/astro/tool-list.CHrLOaB6.js","/toolview/dist/online/client/astro/useTags.DbS9ys_I.js","/toolview/dist/online/client/astro/useTools.DMo_rS7T.js","/toolview/dist/online/client/astro/v-list-item.TzB_FWjK.js","/toolview/dist/online/client/astro/v-navbar.CPwAwCdI.js","/toolview/dist/online/client/astro/v-side.W0LjCAWS.js","/toolview/dist/online/client/astro/v-tools.QcKCGnnW.js","/toolview/dist/online/client/astro/v-virtlist.CdGeltKi.js","/toolview/dist/online/client/astro/v-waterfall-container.D858w7Fz.js","/toolview/dist/online/client/astro/v-waterfall-wrapper.DFguSySJ.js","/toolview/dist/online/client/bg/index.html","/toolview/dist/online/client/dev/index.html","/toolview/dist/online/client/open-source/index.html","/toolview/dist/online/client/tools/index.html","/toolview/dist/online/client/wechat/index.html","/toolview/dist/online/client/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"HJkJ9fWfQDC9/HXDb+9RzLJz52IMcsNhXE1zZHBlz/w=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/xdf/dev/person/toolkit/packages/toolkit-online/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
