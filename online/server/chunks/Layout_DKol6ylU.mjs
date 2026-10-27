import { c as createComponent, e as createAstro, r as renderTemplate, w as renderSlot, b as renderHead, a as renderScript, p as addAttribute, d as renderComponent, m as maybeRenderHead } from './astro/server_iJKEqrWx.mjs';
/* empty css                         */
import axios from 'axios';
import { reactive, computed, useSSRContext, ref, watch, onMounted, onUnmounted, mergeProps } from 'vue';
import { Icon } from '@iconify/vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';

function base64ToArrayBuffer(base64) {
  let binary_string;
  if (typeof Buffer !== "undefined") {
    binary_string = Buffer.from(base64, "base64").toString("binary");
  } else {
    binary_string = atob(base64);
  }
  let len = binary_string.length;
  let bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  const decoder = new TextDecoder("utf-8");
  const content = decoder.decode(bytes.buffer);
  return content;
}
class GiteeService {
  config;
  constructor(config) {
    this.config = config;
  }
  async get({ path = "" }) {
    return this.getFileContent({ path });
  }
  /**
   * 从 Gitee 获取类别数据
   */
  async getFileContent({ path = "" }) {
    try {
      const response = await axios.get(
        `https://gitee.com/api/v5/repos/${this.config.owner}/${this.config.repo}/contents/${path}`,
        {
          params: {
            ref: this.config.branch
          },
          headers: {
            "Authorization": `token ${this.config.token}`
          }
        }
      );
      const decodedContent = base64ToArrayBuffer(response.data.content);
      const data = JSON.parse(decodedContent);
      return data;
    } catch (error) {
      console.error("从 Gitee 获取类别数据失败:", error);
      throw error;
    }
  }
  async uploadImage(file, path) {
    try {
      const reader = new FileReader();
      const fileContent = await new Promise((resolve, reject) => {
        reader.onloadend = () => {
          if (reader.result) {
            const resultStr = reader.result.toString();
            const parts = resultStr.split(",");
            if (parts.length > 1 && parts[1] !== void 0) {
              const base64Content = parts[1];
              resolve(base64Content);
            } else {
              reject(new Error("文件格式不正确，无法提取Base64内容"));
            }
          } else {
            reject(new Error("文件读取失败"));
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      const timestamp = Date.now();
      const extension = file.name.split(".").pop();
      const filename = `${path}/${timestamp}.${extension}`;
      const response = await axios.post(
        `https://gitee.com/api/v5/repos/${this.config.owner}/${this.config.repo}/contents/${filename}`,
        {
          content: fileContent,
          message: `上传图片 ${filename}`,
          branch: this.config.branch
        },
        {
          headers: {
            "Authorization": `token ${this.config.token}`
          }
        }
      );
      return response.data.content.download_url;
    } catch (error) {
      console.error("上传图片到 Gitee 失败:", error);
      throw error;
    }
  }
}
const giteeRequest = () => {
  return new GiteeService({
    owner: "tzccode",
    repo: "data-space",
    path: "category.json",
    branch: "master",
    token: "11a3fd9a381d019f6c7c586cbc0048d3"
  });
};
const giteeService = giteeRequest();

// 获取标签
const getTag = async () => {
    const res = await giteeService.get({
        path: '/toolkit/tag.json'
    });
    return res;
};
// 获取工具列表
const getTools = async () => {
    const res = await giteeService.get({
        path: '/toolkit/tool.json'
    });
    return res || [];
};

const flatToTree=(
	flatArray,
	parentId = null,
	idKey = 'id',
	parentKey = 'parentId',
	childrenKey = 'children'
) =>{
	return flatArray
		.filter((item) => { 
           
            return item[parentKey] == parentId})
		.map((item) => {
			const children = flatToTree(
				flatArray,
				item[idKey],
				idKey,
				parentKey,
				childrenKey
			);
			if (children.length > 0) {
				return { ...item, [childrenKey]: children };
			}
			return { ...item };
		});
};

const treeToFlat=(
    treeArray,
    childrenKey = 'children'
) =>{
    return treeArray.flatMap((item) => {
        const children = item[childrenKey] || [];
        return [item, ...treeToFlat(children, childrenKey)];
    });
};

const store=reactive({
    tags: [],
});
const useTags = () => {
    const tags=computed(()=>store.tags);
    const getTags=async ()=>{
        if(tags.value.length==0){
            store.tags = await getTag();
        }
        return tags.value
    };
    const getTagsTree=async ()=>{
        const tags=await getTags();
        return flatToTree(tags)
    };
    const getChildrenTagIds=async (tagId)=>{
        //找id下所有子标签
        const tree=await getTagsTree();
        const tags=treeToFlat(tree);
        const tag=tags.find(tag=>tag.id==tagId);

        return treeToFlat(tag.children||[]).map(tag=>tag.id)
    };
    
    return {
        tags,
        getTags,
        getTagsTree,
        getChildrenTagIds
    }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { getTags } = useTags();
  const tags = await getTags();
  const base = "/toolview/online/client";
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-3zbxo6iv> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="generator"', '><meta name="description" content="Toolkit Online在线工具导航，提供办公、开发编程、AI、创作设计、图文素材、各类生成器，数据资源等工具，旨在满足工作、生活对于各种工具的需求。"><meta name="keywords"', '><meta name="referrer" content="no-referrer"><title>ToolKit Online在线工具</title><script', "></script><script", "></script>", "", "", '</head> <body data-astro-cid-3zbxo6iv> <div id="app" data-astro-cid-3zbxo6iv> ', " </div> </body></html>"])), addAttribute(`${base}/favicon.svg`, "href"), addAttribute(Astro2.generator, "content"), addAttribute(tags.map((tag) => tag.name).join(","), "content"), addAttribute(`${base}/lib/flexible.js`, "src"), addAttribute(`${base}/lib/theme.js`, "src"), renderScript($$result, "/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/PageLayout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/PageLayout.astro?astro&type=script&index=1&lang.ts"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/PageLayout.astro", void 0);

const wechatCodeJpg = new Proxy({"src":"/toolview/online/client/astro/wechatcode.ctGZV0ZH.jpg","width":258,"height":258,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/assets/wechatcode.jpg";
							}
							
							return target[name];
						}
					});

function isAllowedExternalUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}
function resolveIframeSrc(searchParams, sideList) {
  const rawUrl = searchParams.get("url");
  if (rawUrl) {
    const decoded = decodeURIComponent(rawUrl);
    return isAllowedExternalUrl(decoded) ? decoded : "";
  }
  const id = searchParams.get("id");
  if (id) {
    const item = sideList.find((s) => s.id === id);
    if (item?.url && isAllowedExternalUrl(item.url)) return item.url;
  }
  const fallback = sideList.find((s) => s.id === "iframe");
  return fallback?.url && isAllowedExternalUrl(fallback.url) ? fallback.url : "";
}
function navigateToMenuItem(item) {
  const base = "/toolview/online/client";
  const baseNorm = base.endsWith("/") ? base : `${base}/`;
  if (item.url && item.embed !== false) {
    window.location.href = `${baseNorm}iframe?id=${encodeURIComponent(item.id)}`;
    return;
  }
  if (item.link && /^https?:\/\//i.test(item.link)) {
    window.location.href = item.link;
    return;
  }
  if (item.link) {
    const path = item.link.startsWith("/") ? item.link.slice(1) : item.link;
    window.location.href = `${baseNorm}${path}`;
  }
}

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$3 = {
  __name: "v-side",
  props: {
    currentId: {
      type: String,
      default: ""
    },
    sideList: {
      type: Array,
      default: () => [
        {
          id: "home",
          icon: "material-symbols:home-app-logo",
          name: "首页"
        },
        {
          id: "office",
          icon: "",
          name: "办公"
        },
        {
          id: "design",
          icon: "",
          name: "设计"
        },
        {
          id: "material",
          icon: "",
          name: "素材"
        },
        {
          id: "font",
          icon: "",
          name: "字体"
        },
        {
          id: "graphic",
          icon: "",
          name: "图文"
        }
      ]
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    function menuIdFromLocation(sideList) {
      if (typeof window === "undefined") return "";
      const path = window.location.pathname;
      const qid = new URLSearchParams(window.location.search).get("id");
      if (path.includes("/iframe")) {
        if (qid && sideList.some((s) => s.id === qid)) return qid;
        return "";
      }
      const base = "/toolview/online/client".replace(/\/+$/, "");
      const pathNorm = path.replace(/\/+$/, "");
      const rel = base && pathNorm.startsWith(base) ? pathNorm.slice(base.length) : pathNorm;
      const normalized = rel.replace(/^\/+/, "").replace(/\/+$/, "");
      const hit = sideList.find((s) => {
        if (!s.link || /^https?:\/\//i.test(s.link)) return false;
        const linkPath = s.link.replace(/^\/+/, "").replace(/\/+$/, "");
        if (!linkPath || linkPath === "iframe") return false;
        return linkPath === normalized || normalized.startsWith(`${linkPath}/`);
      });
      return hit?.id || "";
    }
    const props = __props;
    const isCollapsed = ref(false);
    const current = ref("");
    const activeId = computed(() => {
      const fromUrl = menuIdFromLocation(props.sideList);
      if (fromUrl) return fromUrl;
      if (props.currentId) return props.currentId;
      return current.value;
    });
    function syncActiveFromRoute() {
      const fromUrl = menuIdFromLocation(props.sideList);
      if (fromUrl) {
        current.value = fromUrl;
        return;
      }
      if (props.currentId) current.value = props.currentId;
    }
    watch(() => props.currentId, syncActiveFromRoute, { immediate: true });
    onMounted(() => window.addEventListener("popstate", syncActiveFromRoute));
    onUnmounted(() => window.removeEventListener("popstate", syncActiveFromRoute));
    const handleCollapse = () => {
      isCollapsed.value = !isCollapsed.value;
    };
    const handleClick = (item) => {
      current.value = item.id;
      navigateToMenuItem(item);
    };
    const __returned__ = { menuIdFromLocation, props, isCollapsed, current, activeId, syncActiveFromRoute, handleCollapse, handleClick, get Icon() {
      return Icon;
    }, computed, onMounted, onUnmounted, ref, watch, get wechatCodeJpg() {
      return wechatCodeJpg;
    }, get navigateToMenuItem() {
      return navigateToMenuItem;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["side-list", { "side-list--collapsed": $setup.isCollapsed }]
  }, _attrs))} data-v-6ce1d67f><li class="side-collaps" data-v-6ce1d67f>`);
  if (!$setup.isCollapsed) {
    _push(ssrRenderComponent($setup["Icon"], {
      class: "collaps-icon",
      icon: "mdi:menu-open",
      onClick: $setup.handleCollapse
    }, null, _parent));
  } else {
    _push(ssrRenderComponent($setup["Icon"], {
      class: "collaps-icon",
      icon: "mdi:menu-close",
      onClick: $setup.handleCollapse
    }, null, _parent));
  }
  _push(`</li><!--[-->`);
  ssrRenderList($props.sideList, (side) => {
    _push(`<li class="side-item" data-v-6ce1d67f><button class="${ssrRenderClass([{ "side-button__active": side.id === $setup.activeId }, "side-button"])}"${ssrRenderAttr("data-id", side.id)} data-v-6ce1d67f>`);
    if (side.icon) {
      _push(ssrRenderComponent($setup["Icon"], {
        class: "icon",
        icon: side.icon
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="${ssrRenderClass([{ "side-name--collapsed": $setup.isCollapsed }, "side-name"])}" data-v-6ce1d67f>${ssrInterpolate(side.name)}</span></button></li>`);
  });
  _push(`<!--]--><li class="side-last-item" style="${ssrRenderStyle({ "flex": "1" })}" data-v-6ce1d67f><img style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("src", $setup.wechatCodeJpg.src)} alt="" data-v-6ce1d67f><p class="fork-wechat-text" data-v-6ce1d67f>关注微信公众号</p></li></ul>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/common/v-side.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const VSide = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-6ce1d67f"]]);

const sideList = [
    {
        id: 'home',
        icon: "material-symbols:home-app-logo",
        name: '首页',
        link: '/'
    },
    {
        id: 'wechat',
        icon: 'icon-park-outline:weixin-top-stories',
        name: '公众号',
        link: '/wechat'
    },
    {
        id: 'blogNav',
        icon: 'material-symbols:article-outline',
        name: '博客集',
        link: '/blogNav'
    },
    {
        id: 'tools',
        icon: 'simple-icons:macpaw',
        name: '工具',
        link: '/tools'
    },
    {
        id: 'dev',
        icon: 'material-symbols:api',
        name: '开发',
        link: '/iframe',
        url: 'https://tzcteddy.github.io/toolview/',
        embed: true,
    },
    {
        id: 'open-source',
        icon: 'line-md:github-loop',
        name: '开源',
        link: '/open-source'
    },
    {
        id: 'noise',
        icon: 'material-symbols:graphic-eq',
        name: '噪声取证',
        link: '/iframe',
        url: 'https://tzcteddy.github.io/toolview/noise/client/',
        embed: true,
    },
];

const $$Astro$1 = createAstro();
const $$Side = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Side;
  const { currentPage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "VSide", VSide, { "sideList": sideList, "currentId": currentPage, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/v-side.vue", "client:component-export": "default" })}`;
}, "/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/Side.astro", void 0);

const _sfc_main$2 = {
  computed: {
    base() {
      return "/toolview/online/client/";
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    class: "logo",
    href: $options.base
  }, _attrs))} data-v-d77a25b6></a>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/common/v-logo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const VLogo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d77a25b6"]]);

const _sfc_main$1 = {
  __name: 'v-theme',
  setup(__props, { expose: __expose }) {
  __expose();

const themeMode = ref('light');
onMounted(()=>{
  themeMode.value = localStorage.getItem('themeMode') || 'light';
});

const setThemeMode = (mode)=>{
    themeMode.value = mode;
  theme.toggleMode();
};


const __returned__ = { themeMode, setThemeMode, onMounted, ref, get Icon() { return Icon } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-mode" }, _attrs))} data-v-8aaa6887>`);
  if ($setup.themeMode === 'dark') {
    _push(ssrRenderComponent($setup["Icon"], {
      class: "theme-mode--icon",
      icon: "ls:dark",
      onClick: $event => ($setup.setThemeMode('light'))
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($setup.themeMode === 'light') {
    _push(ssrRenderComponent($setup["Icon"], {
      class: "theme-mode--icon",
      icon: "material-symbols:dark-mode",
      onClick: $event => ($setup.setThemeMode('dark'))
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/common/v-theme.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const VTheme = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1],['__scopeId',"data-v-8aaa6887"]]);

const _sfc_main = {
  __name: 'Header',
  props: {
  isTransparent:{
    type:Boolean,
    default:false
  },
  isSticky:{
    type:Boolean,
    default:false
  },
  currentId:{
    type:String,
    default:''
  },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const handleClick = (item) => {
    navigateToMenuItem(item);
};

const __returned__ = { props, handleClick, VLogo, VTheme, get sideList() { return sideList }, get navigateToMenuItem() { return navigateToMenuItem } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: ["header", {'transparent':$props.isTransparent,'sticky':$props.isSticky}]
  }, _attrs))} data-v-a29fb627><div class="header-container" data-v-a29fb627><div class="header-bar" data-v-a29fb627><div class="logo" data-v-a29fb627>`);
  _push(ssrRenderComponent($setup["VLogo"], null, null, _parent));
  _push(`</div><div class="nav-mode" data-v-a29fb627>`);
  _push(ssrRenderComponent($setup["VTheme"], null, null, _parent));
  _push(`</div></div><nav class="nav-mobile" data-v-a29fb627><ul class="nav-list" data-v-a29fb627><!--[-->`);
  ssrRenderList($setup.sideList, (menu) => {
    _push(`<li class="nav-item" data-v-a29fb627><p class="${
      ssrRenderClass([{'nav-link-active': menu.id === $props.currentId}, "nav-link"])
    }" data-v-a29fb627>${
      ssrInterpolate(menu.name)
    }</p></li>`);
  });
  _push(`<!--]--></ul></nav></div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Header = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-a29fb627"]]);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { currentPage, isFullScreen, hideHeader } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["layout-container", { "layout-fullscreen": isFullScreen }], "class:list")} data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["layout-top"])} <div class="layout" data-astro-cid-sckkx6r4> <div class="layout-side-left" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"], renderTemplate` ${renderComponent($$result, "Side", $$Side, { "currentPage": currentPage, "data-astro-cid-sckkx6r4": true })} `)} </div> <div${addAttribute(["layout-content", { "layout-content--fill": hideHeader }], "class:list")} data-astro-cid-sckkx6r4> ${!hideHeader && renderTemplate`${renderComponent($$result, "Header", Header, { "isTransparent": true, "isSticky": true, "currentId": currentPage, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Header.vue", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })}`} ${renderSlot($$result, $$slots["layout-main"])} </div> </div> </div> `;
}, "/Users/xdf/dev/person/toolkit/packages/toolkit-online/src/layouts/Layout.astro", void 0);

export { $$PageLayout as $, _export_sfc as _, $$Layout as a, getTools as g, resolveIframeSrc as r, sideList as s, useTags as u };
