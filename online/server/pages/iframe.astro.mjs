import { c as createComponent, e as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_iJKEqrWx.mjs';
import { r as resolveIframeSrc, s as sideList, _ as _export_sfc, $ as $$PageLayout, a as $$Layout } from '../chunks/Layout_DKol6ylU.mjs';
import { useSSRContext, ref, onMounted, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const _sfc_main = {
  __name: 'IframeEmbed',
  props: {
  initialSrc: { type: String, default: "" },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const src = ref(props.initialSrc || "");

onMounted(() => {
  if (!src.value) {
    src.value = resolveIframeSrc(new URLSearchParams(window.location.search), sideList);
  }
});

const __returned__ = { props, src, onMounted, ref, get sideList() { return sideList }, get resolveIframeSrc() { return resolveIframeSrc } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.src) {
    _push(`<iframe${ssrRenderAttrs(mergeProps({
      class: "embed",
      src: $setup.src,
      title: "外链内容",
      frameborder: "0"
    }, _attrs))} data-v-d8e84d4e></iframe>`);
  } else {
    _push(`<p${ssrRenderAttrs(mergeProps({ class: "empty" }, _attrs))} data-v-d8e84d4e>未配置有效的外链地址（需在 nav 中设置 url，或使用 ?url= / ?id=）</p>`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/IframeEmbed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const IframeEmbed = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-d8e84d4e"]]);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const requestUrl = new URL(Astro2.request.url);
  const idParam = requestUrl.searchParams.get("id");
  const currentPage = idParam && sideList.some((s) => s.id === idParam) ? idParam : sideList.find((s) => s.link === "/iframe")?.id || "home";
  const iframeSrc = resolveIframeSrc(requestUrl.searchParams, sideList);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "data-astro-cid-duor3a55": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout", $$Layout, { "currentPage": currentPage, "isFullScreen": true, "hideHeader": true, "data-astro-cid-duor3a55": true }, { "layout-main": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="iframe-main" data-astro-cid-duor3a55> ${renderComponent($$result3, "IframeEmbed", IframeEmbed, { "client:load": true, "initialSrc": iframeSrc, "client:component-hydration": "load", "client:component-path": "@/components/IframeEmbed.vue", "client:component-export": "default", "data-astro-cid-duor3a55": true })} </div>` })} ` })} `;
}, "/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/iframe/index.astro", void 0);

const $$file = "/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/pages/iframe/index.astro";
const $$url = "/toolview/online/client/iframe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
