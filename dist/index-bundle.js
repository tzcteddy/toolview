!function(e){function t(t){for(var o,r,a=t[0],c=t[1],l=t[2],p=0,m=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);m.length;)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={2:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;s.push([27,1,0]),n()}([,,,,,,function(e,t,n){"use strict";var o=n(2),i=n.n(o)()(!1);i.push([e.i,".main{\r\n    margin: auto;\r\n    padding: 0 10px;\r\n    width: 100%;\r\n    max-width: 750px;\r\n    box-sizing: border-box;\r\n}",""]),t.a=i},function(e,t,n){"use strict";var o=n(2),i=n.n(o)()(!1);i.push([e.i,".toolCard-wrap {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    width: 100px;\r\n    cursor: pointer;\r\n  }\r\n  .toolCard-icon {\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 20px;\r\n    /* background: linear-gradient(145deg, #ffffff, #e6e6e6); */\r\n    box-shadow:  5px 5px 11px #cfcfcf,\r\n                 -5px -5px 11px #ffffff;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    transition: 0.3s ease 0s;\r\n    \r\n  }\r\n  .gitIcon {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    width: 12px;\r\n    height: 12px;\r\n  }\r\n  .toolCard-icon:hover {\r\n    transform: scale(1.1);\r\n  }\r\n  .toolCard-icon-img {\r\n    width: 50%;\r\n    height: auto;\r\n  }\r\n  .toolCard-text {\r\n    display: -webkit-box;\r\n    width: 100px;\r\n    height: 24px;\r\n    line-height: 12px;\r\n    font-size: 12px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    text-align: center;\r\n    word-break: break-all;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\r\n  }\r\n  ",""]),t.a=i},function(e,t,n){"use strict";var o=n(2),i=n.n(o)()(!1);i.push([e.i,".toolList-wrap {\r\n    padding: 20px;\r\n    /* height: 122px; */\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    /* background: #e0e0e0; */\r\n  }\r\n  ",""]),t.a=i},function(e,t,n){"use strict";var o=n(2),i=n.n(o)()(!1);i.push([e.i,".button{\r\n    padding: 6px 10px;\r\n    background: transparent;\r\n    border: none;\r\n    border-radius: 0;\r\n    border-radius: 20px;\r\nbackground: linear-gradient(145deg, #162767, #1a2e7a);\r\nbox-shadow:  20px 20px 60px #142561,\r\n             -20px -20px 60px #1c3183;\r\n    color:#e8e8e8;\r\n    cursor: pointer;\r\n    transition: all 0.5s linear 0s;\r\n}\r\n.button:hover{\r\n    background: #182b72;\r\n    box-shadow:  20px 20px 60px #142561,\r\n                 -20px -20px 60px #1c3183;\r\n}",""]),t.a=i},function(e,t,n){"use strict";var o=n(2),i=n.n(o)()(!1);i.push([e.i,".head{\r\n    position: relative;\r\n    width: 100%;\r\n    /* height: 200px; */\r\n    max-height: 460px;\r\n    overflow-y: hidden;\r\n}\r\n.head-img{\r\n    width: 100%;\r\n    height: auto;\r\n    object-position: center;\r\n    object-fit: cover;\r\n}\r\n.head-ctn{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: rgba(255,255,255,0);\r\n    \r\n}\r\n.head-line{\r\n    margin-bottom: 20px;\r\n}\r\n.head-title{\r\n    font-size: 30px;\r\n    color: #FFFFFF;\r\n}\r\n.head-subtitle{\r\n    color: #e8e8e8;\r\n}\r\n.custom-shape-divider-bottom-1627224767 {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    line-height: 0;\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.custom-shape-divider-bottom-1627224767 svg {\r\n    position: relative;\r\n    display: block;\r\n    width: calc(138% + 1.3px);\r\n    height: 54px;\r\n}\r\n\r\n.custom-shape-divider-bottom-1627224767 .shape-fill {\r\n    fill: #FFFFFF;\r\n}\r\n\r\n\r\n/** For mobile devices **/\r\n@media (max-width: 767px) {\r\n    .custom-shape-divider-bottom-1627224767 svg {\r\n        width: calc(134% + 1.3px);\r\n        height: 40px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n",""]),t.a=i},function(e,t,n){"use strict";var o=n(2),i=n.n(o)()(!1);i.push([e.i,".footer{\r\n    padding: 20px 0;\r\n    width: 100%;\r\n    background: #0d1d3a;\r\n    color:#ffffff;\r\n}\r\n.footer a{\r\n    color: #ffffff;\r\n    font-size: 12px;\r\n    text-decoration: none;\r\n}\r\n.footer-content{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    padding:0 10px;\r\n    box-sizing: border-box;\r\n}\r\n.footer-content .footer-item{\r\n    flex: 1;\r\n}\r\n.footer-item-dt{\r\n    margin-bottom: 20px;\r\n}\r\n.footer-item-dd{\r\n    padding: 5px 0;\r\n}\r\n.copyright{\r\n    padding-top: 20px;\r\n    text-align: center;\r\n    opacity: 0.6;\r\n    font-size: 12px;\r\n}",""]),t.a=i},function(e,t,n){"use strict";var o=n(2),i=n.n(o)()(!1);i.push([e.i,".visit-title{\r\n    margin-bottom:10px;\r\n}\r\n.visit-github{\r\n    display:flex;\r\n    flex-direction:row;\r\n}\r\n.visit-url-wrap{\r\n    width:200px;\r\n    height:26px;\r\n    \r\n    border:1px solid #666;\r\n    border-radius:6px 0 0 6px;\r\n    overflow:hidden;\r\n    box-sizing:border-box;\r\n\r\n}\r\n.git-url{\r\n    padding:0 5px;\r\n    width:100%;\r\n    height:100%;\r\n    line-height:26px;\r\n    border:none;\r\n    outline:none;\r\n    box-sizing:border-box;\r\n}\r\n.visit-git-btn{\r\n    padding:0 5px;\r\n    height:26px;\r\n    line-height:26px;\r\n    text-align:center;\r\n    border:none;\r\n    background:#162767;\r\n    color:#ffffff;\r\n    border-radius:0 6px 6px 0;\r\n    cursor:pointer;\r\n\r\n}",""]),t.a=i},function(e,t,n){"use strict";var o=n(2),i=n.n(o)()(!1);i.push([e.i,"\r\n.app{\r\n    background: #FFFFFF;\r\n}\r\n.layout-wrap{\r\n    flex: 1;\r\n    min-height: 0;\r\n    display: flex;\r\n    align-items: stretch;\r\n    width: 100%;\r\n}\r\n.l-aside{\r\n    padding: 0 15px;\r\n    display: flex;\r\n    box-sizing: border-box;\r\n}\r\n.l-aside_left{\r\n    justify-content: flex-end;\r\n    flex: 1;\r\n}\r\n.l-aside_right{\r\n    justify-content: flex-start;\r\n    flex: 1;\r\n}\r\n\r\n.l-content{\r\n    \r\n    max-width: 750px;\r\n}\r\n@media screen and (min-width: 800px){\r\n   .l-content{\r\n   }\r\n}\r\n@media screen and (max-width: 800px){\r\n    .layout-wrap{\r\n        flex-direction: column;\r\n    }\r\n    .l-aside_left{\r\n        justify-content: flex-start;\r\n    }\r\n}\r\n\r\n.card-wrap{\r\n    \r\n}",""]),t.a=i},,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),s=n(4),r=n.n(s),a=n(1),c=n.n(a),l=n(6),d={insert:"head",singleton:!1},p=(c()(l.a,d),l.a.locals,function(e){return i.a.createElement("div",{className:"main"},e.children)});function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,i,s=[],r=!0,a=!1;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(s.push(o.value),!t||s.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==n.return||n.return()}finally{if(a)throw i}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u=function(e){var t=m(Object(o.useState)(""),2),n=t[0],i=t[1],s=new Image;return s.src=e,s.onload=function(){i(e)},s.onerror=function(){i("")},n},g=n(7),f={insert:"head",singleton:!1},w=(c()(g.a,f),g.a.locals,function(e){var t=e.tool,n=t.icon,o=void 0===n?"":n,s=t.desc,r=void 0===s?"":s,a=t.name,c=void 0===a?"":a,l=t.bgColor,d=void 0===l?"#ffffff":l,p=t.color,m=void 0===p?"#000000":p,h=t.git,g=void 0===h?"":h,f=t.url,w=void 0===f?"":f,v=t.url2,b=void 0===v?"":v,x=u(o),y=function(e){e&&window.open(e,"_blank")};return i.a.createElement("div",{className:"toolCard-wrap"},i.a.createElement("div",{className:"toolCard-icon",style:{background:d,color:m},onClick:function(){y(w||b)}},g?i.a.createElement("img",{className:"gitIcon",src:"https://github.githubassets.com/favicons/favicon.png",alt:"git",onClick:function(e){e.nativeEvent.stopImmediatePropagation(),y(g)}}):null,x?i.a.createElement("img",{className:"toolCard-icon-img",src:x,alt:"icon"}):c),i.a.createElement("p",{className:"toolCard-text",title:r},c))}),v=n(8),b={insert:"head",singleton:!1},x=(c()(v.a,b),v.a.locals,function(e){var t=e.tools,n=void 0===t?[]:t;return console.log("tools",n),i.a.createElement("div",{className:"toolList-wrap"},n.map((function(e,t){return i.a.createElement(w,{key:t,tool:e})})))}),y=function(e){var t=e.data;return i.a.createElement("div",null,t.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("h2",null,e.typeName),i.a.createElement(x,{tools:e.tools}))})))},j=n(9),S={insert:"head",singleton:!1},k=(c()(j.a,S),j.a.locals,function(e){var t=e.onClick,n=e.style;return i.a.createElement("button",{className:"button",style:n,onClick:function(e){t(e)}},e.children)}),N=n(10),E={insert:"head",singleton:!1},C=(c()(N.a,E),N.a.locals,function(){return i.a.createElement("div",{className:"head"},i.a.createElement("img",{className:"head-img",src:"https://cn.bing.com/th?id=OHR.MinokakeRocks_ZH-CN2474262090_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"}),i.a.createElement("div",{className:"custom-shape-divider-bottom-1627224767"},i.a.createElement("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},i.a.createElement("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",className:"shape-fill"}))),i.a.createElement("div",{className:"head-ctn"},i.a.createElement("p",{className:"head-line head-title"},i.a.createElement("strong",null,"Knows-Point")),i.a.createElement("p",{className:"head-line head-subtitle"},i.a.createElement("span",null,"世上无难事  只要肯攀登")),i.a.createElement(k,{onClick:function(){window.open("https://tzcteddy.github.io/knows-point/#/","_blank")}},"开始阅读")))}),A=n(11),M={insert:"head",singleton:!1},z=(c()(A.a,M),A.a.locals,function(){return i.a.createElement("div",{className:"footer"},i.a.createElement(p,null,i.a.createElement("div",{className:"footer-content"},i.a.createElement("dl",{className:"footer-item"},i.a.createElement("dt",{className:"footer-item-dt"},"友情链接"),i.a.createElement("dd",{className:"footer-item-dd"},i.a.createElement("a",{href:"https://ued.qunar.com/"},"去哪儿UED")),i.a.createElement("dd",{className:"footer-item-dd"},i.a.createElement("a",{href:"http://www.alloyteam.com/"},"腾讯alloyteam")),i.a.createElement("dd",{className:"footer-item-dd"},i.a.createElement("a",{href:"https://fed.taobao.org/"},"淘宝前端团队FED")),i.a.createElement("dd",{className:"footer-item-dd"},i.a.createElement("a",{href:"https://efe.baidu.com/"},"百度EFE")),i.a.createElement("dd",{className:"footer-item-dd"},i.a.createElement("a",{href:"https://fex.baidu.com/"},"百度EFX")),i.a.createElement("dd",{className:"footer-item-dd"},i.a.createElement("a",{href:"https://aotu.io/"},"凹凸实验室")),i.a.createElement("dd",{className:"footer-item-dd"},i.a.createElement("a",{href:"https://tech.meituan.com/"},"美团技术团队"))),i.a.createElement("dl",{className:"footer-item"},i.a.createElement("dt",{className:"footer-item-dt"},"博客"),i.a.createElement("dd",{className:"footer-item-dd"},i.a.createElement("a",{href:"http://www.ruanyifeng.com/home.html"},"阮一峰老师")),i.a.createElement("dd",{className:"footer-item-dd"},i.a.createElement("a",{href:"https://www.zhangxinxu.com/wordpress/"},"张鑫旭老师")))),i.a.createElement("p",{className:"copyright"},"Copyright © 2021 对点. All rights reserved. ")))}),I=n(12),J={insert:"head",singleton:!1},V=(c()(I.a,J),I.a.locals,function(){var e=Object(o.useRef)();return i.a.createElement("div",{className:"card-wrap "},i.a.createElement("h2",{className:"visit-title"},"github传送门"),i.a.createElement("div",{className:"visit-github"},i.a.createElement("p",{className:"visit-url-wrap"},i.a.createElement("input",{className:"git-url",placeholder:"访问的github地址",ref:e})),i.a.createElement("p",null,i.a.createElement("button",{className:"visit-git-btn",onClick:function(){var t=/^https:\/\/github.com/;console.log(e);var n=e.current.value;if(t.test(n)){var o=n.split(t)[1];window.open("".concat("https://github.com.cnpmjs.org").concat(o),"_blank")}}},"Go"))))}),D=[{type:1,typeName:"VSCode",tools:[{id:"",name:"CodeRunner",desc:"CodeRunner",icon:"https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/code-runner/0.11.5/1625846902825/Microsoft.VisualStudio.Services.Icons.Default",url:"https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",git:""},{id:"",name:"Draw.io",desc:"画流程图",icon:"https://hediet.gallerycdn.vsassets.io/extensions/hediet/vscode-drawio/1.5.0/1623925080890/Microsoft.VisualStudio.Services.Icons.Default",url:"https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio",git:"https://github.com/hediet/vscode-drawio"},{id:"",name:"GitLens",desc:"GitLens",icon:"https://gitlens.amod.io/assets/gitlens-logo.png",url:"https://gitlens.amod.io/",git:"https://github.com/eamodio/vscode-gitlens"},{id:"",name:"Git Graph",desc:"Git Graph",icon:"https://mhutchie.gallerycdn.vsassets.io/extensions/mhutchie/git-graph/1.30.0/1617594001998/Microsoft.VisualStudio.Services.Icons.Default",url:"https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph",git:"https://github.com/mhutchie/vscode-git-graph"},{id:"",name:"leetcode",desc:"力扣",icon:"https://static.leetcode-cn.com/cn-mono-assets/production/assets/favicon-notification-16x16.123721dc.png",url:"https://leetcode-cn.com/"},{id:"",name:"vscode-fileheader",desc:"vscode-fileheader",icon:"",url:""},{id:"",name:"vs code counter",desc:"统计代码行数",icon:"https://uctakeoff.gallerycdn.vsassets.io/extensions/uctakeoff/vscode-counter/2.3.0/1622645883536/Microsoft.VisualStudio.Services.Icons.Small",url:"https://marketplace.visualstudio.com/items?itemName=uctakeoff.vscode-counter"},{id:"",name:"SVGViewer",desc:"显示svg",icon:"",url:"https://www.svgviewer.dev/",git:"https://github.com/cssho/vscode-svgviewer"},{id:"",name:"Auto Close Tag",desc:"自动闭合HTML/XML标签",icon:"https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-close-tag/0.5.12/1627706442166/Microsoft.VisualStudio.Services.Icons.Small",url:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",git:""},{id:"",name:"Auto Rename Tag",desc:"自动完成另一侧标签的同步修改",icon:"https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-rename-tag/0.1.8/1627702411112/Microsoft.VisualStudio.Services.Icons.Small",url:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",git:""},{id:"",name:"Debugger for Chrome",desc:"映射vscode上的断点到chrome上，方便调试",icon:"https://msjsdiag.gallerycdn.vsassets.io/extensions/msjsdiag/debugger-for-chrome/4.12.12/1611687509515/Microsoft.VisualStudio.Services.Icons.Default",url:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome",git:""},{id:"",name:"TODO Highlight",desc:"TODO关键字高亮",icon:"https://wayou.gallerycdn.vsassets.io/extensions/wayou/vscode-todo-highlight/1.0.4/1532254554587/Microsoft.VisualStudio.Services.Icons.Small",url:"https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight",git:""},{id:"",name:"Simple React Snippets",desc:"React快速生成代码",icon:"https://burkeholland.gallerycdn.vsassets.io/extensions/burkeholland/simple-react-snippets/1.2.3/1592586160279/Microsoft.VisualStudio.Services.Icons.Small",url:"https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets",git:""},{id:"",name:"Live Server Preview",desc:"VS vode编辑器中live Server是用来实时预览代码编辑效果",icon:"https://negokaz.gallerycdn.vsassets.io/extensions/negokaz/live-server-preview/0.1.4/1547978629783/Microsoft.VisualStudio.Services.Icons.Default",url:"https://marketplace.visualstudio.com/items?itemName=negokaz.live-server-preview",git:""},{id:"",name:"cssrem",desc:"在VSCode中转换px和rem单位，并支持WXSS。",icon:"https://cipchk.gallerycdn.vsassets.io/extensions/cipchk/cssrem/2.4.3/1627112662373/Microsoft.VisualStudio.Services.Icons.Default",url:"https://marketplace.visualstudio.com/items?itemName=cipchk.cssrem",git:""},{id:"",name:"easyless",desc:"快速开发less",icon:"https://lemonzhang.gallerycdn.vsassets.io/extensions/lemonzhang/easy-less/0.21.0/1588062141213/Microsoft.VisualStudio.Services.Icons.Default",url:"https://marketplace.visualstudio.com/items?itemName=LemonZhang.easy-less",git:""}]},{type:2,typeName:"在线工具",tools:[{id:"",name:"katex",desc:"最快的数学排版图书馆网络。",icon:"",url:"https://katex.org/",bgColor:"#329894"},{id:"",name:"mathtype",desc:"数学公式编辑器",icon:"https://demo.wiris.com/mathtype/img/wiris-site-icon.png",url:"http://www.wiris.com/editor/demo/en/developers#mathml-latex"},{id:"",name:"Regulex",desc:"正则可视化工具",icon:"",url:"https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24",bgColor:"#303030",color:"#ffffff"},{id:"",name:"Luckysheet",desc:"再见excel,在线表格",icon:"https://mengshukeji.gitee.io/luckysheetdocs/img/logo.png",url:"https://mengshukeji.gitee.io/luckysheetdocs/zh/"},{id:"",name:"cubic-bezier",desc:"贝塞尔曲线",icon:"",url:"https://cubic-bezier.com/#.17,.67,.83,.67"},{id:"",name:"diagrams",desc:"在线画图流程图",icon:"https://app.diagrams.net/images/favicon-32x32.png",url:"https://app.diagrams.net/"},{id:"",name:"stackblitz",desc:"IDE",icon:"https://c.staticblitz.com/assets/favicon-7453cf0c12d349fb64b7aa2b69cc69c026f083a27f139f0839b1f4948bed6811.png",url:"https://stackblitz.com/"},{id:"",name:"asAST Explorer",desc:"AST",icon:"https://astexplorer.net/favicon.png",url:"https://astexplorer.net/"},{id:"",name:"linux-command",desc:"Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。",icon:"https://wangchujiang.com/linux-command/img/favicon.ico",url:"https://wangchujiang.com/linux-command/",url2:"https://man.linuxde.net/",git:"https://github.com/jaywcjlove/linux-command"},{id:"",name:"cron",desc:"Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。",icon:"",url:"https://1615450788.github.io/vue-cron/dist/index",git:"https://github.com/1615450788/vue-cron"},{id:"",name:"svgviewer",desc:"svg视图",icon:"https://www.svgviewer.dev/_next/static/images/logo-4f625c510fee66e35749982d778ece6d.png",url:"https://www.svgviewer.dev/"}]},{type:3,typeName:"node",tools:[{id:"",name:"node",desc:"Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时",icon:"http://static.nodejs.cn/_static/img/favicon.png",url:"http://nodejs.cn/",url2:"https://nodejs.org/zh-cn/"},{id:"",name:"NVM",desc:"Node.js版本控制",icon:"",url:"",git:"https://github.com/nvm-sh/nvm"},{id:"",name:"express",desc:"基于 Node.js 平台，快速、开放、极简的 Web 开发框架",icon:"",url:"https://www.expressjs.com.cn/"},{id:"",name:"koa",desc:"Koa -- 基于 Node.js 平台的下一代 web 开发框架",icon:"",url:"https://koa.bootcss.com/#introduction"},{id:"",name:"nest",desc:"Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架",icon:"https://nestjs.bootcss.com/img/favicon.ico",url:"https://nestjs.bootcss.com/"},{id:"",name:"concurrently",desc:"同时运行多个命令。",icon:"",url:"https://www.npmjs.com/package/concurrently"},{id:"",name:"nodemon",desc:"同时运行多个命令。",icon:"https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png",url:"https://github.com/remy/nodemon"},{id:"",name:"PM2",desc:"node进程管理",icon:"",url:"https://pm2.keymetrics.io/",bgColor:"#2b037a",color:"#ffffff"},{id:"",name:"graphql",desc:"一种 API 查询语言",icon:"https://graphql.js.cool/img/favicon.png",url:"https://graphql.js.cool/"},{id:"",name:"Alinode",desc:"Node.js 性能平台（Node.js Performance Platform）是面向中大型 Node.js 应用提供性能监控、安全提醒、故障排查、性能优化等服务的整体性解决方案。",icon:"",url:"https://www.aliyun.com/product/nodejs",bgColor:"#ff6a00"}]},{type:4,typeName:"CSS",tools:[{id:"",name:"Can I use",desc:"浏览器支持",icon:"",url:"https://caniuse.com/",bgColor:"#C75000",color:"#ffffff"},{id:"",name:"cssbattle",desc:"",icon:"",url:"https://cssbattle.dev/"},{id:"",name:"css-doodle",desc:"一个使用CSS绘图的web组件",icon:"https://css-doodle.com/favicon.png",url:"https://css-doodle.com/"},{id:"",name:"neumorphism",desc:"Generate Soft-UI CSS code",icon:"https://neumorphism.io/favicon.ico",url:"https://neumorphism.io/"},{id:"",name:"easings",desc:"界面上测试缓动曲线，或自定义贝塞尔曲线",icon:"https://easings.co/images/favicon.png",url:"https://easings.co"},{id:"",name:"Shape Dividers",desc:"自定义形状分割线",icon:"https://www.shapedivider.app/favicon.ico",url:"https://www.shapedivider.app",bgColor:"linear-gradient(90deg,#fc4a1a,#f7b733)"},{id:"",name:"animista",desc:"CSS动画库",icon:"https://animista.net/favicon.ico",url:"https://animista.net"},{id:"",name:"lottie",desc:"json动画方案",icon:"http://airbnb.io/lottie/images/logo.webp",url:"http://airbnb.io/lottie/#/web"},{id:"",name:"csstriggers",desc:"触发重绘重排",icon:"https://csstriggers.com/favicon.ico",url:"https://csstriggers.com/"},{id:"",name:"Less",desc:"Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。",icon:"https://lesscss.org/public/ico/favicon.ico",url:"https://less.bootcss.com/#",url2:"https://lesscss.org/"},{id:"",name:"Sass",desc:"世界上最成熟、最稳定、最强大的专业级CSS扩展语言！",icon:"https://www.sass.hk/images/sass.png",url:"https://www.sass.hk/"},{id:"",name:"PostCss",desc:"是一个用 JavaScript 工具和插件转换 CSS 代码的工具",icon:"https://www.postcss.com.cn/favicon.8a995d15.ico",url:"https://www.postcss.com.cn/"},{id:"",name:"Tailwindcss",desc:"Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。",icon:"https://www.tailwindcss.cn/favicon-32x32.png",url:"https://www.tailwindcss.cn/"}]},{type:5,typeName:"库",tools:[{id:"",name:"TweenMax.js",desc:"适用于移动端和现代互联网的超高性能专业级动画插件",icon:"https://www.tweenmax.com.cn/favicon.ico",url:"https://www.tweenmax.com.cn/"},{id:"",name:"SortableJS",desc:"功能强大的JavaScript 拖拽库",icon:"",url:"http://www.sortablejs.com/",bgColor:"linear-gradient(120deg,#7f70f5,#0ea0ff)"},{id:"",name:"popper.js",desc:"工具提示和弹出窗口定位引擎",icon:"https://popper.js.org/favicon-32x32.png?v=e8966dab7a9bda34fd13edd5fb997ff2",url:"https://popper.js.org/"},{id:"",name:"zxing",desc:"是一个开源 Java 类库用于解析多种格式的 1D/2D 条形码。目标是能够对 QR 编码、Data Matrix、UPC 的 1D 条形码进行解码。 其提供了多种平台下的客户端包括：J2ME、J2SE 和 Android。",icon:"",url:"https://zxing-js.github.io/library/"},{id:"",name:"ffmpeg",desc:"一个完整的跨平台解决方案，用于录制、转换和流式传输音频和视频。",icon:"https://www.ffmpeg.org/favicon.ico",url:"https://www.ffmpeg.org/"},{id:"",name:"RxJS",desc:"RxJS 是使用 Observables 的响应式编程的库，它使编写异步或基于回调的代码更容易。",icon:"https://cn.rx.js.org/manual/asset/Rx_Logo_S.png",url:"https://cn.rx.js.org/"},{id:"",name:"Moment.js",desc:"JavaScript 日期处理类库",icon:"http://momentjs.cn/static/img/moment-favicon.png",url:"http://momentjs.cn/"},{id:"",name:"highlightjs",desc:"代码高亮",icon:"https://highlightjs.org/static/favicon.png",url:"https://highlightjs.org/"},{id:"",name:"single-spa",desc:"a javascript framework for front-end microservices",icon:"https://zh-hans.single-spa.js.org/img/logo-white-bgblue.svg",url:"https://zh-hans.single-spa.js.org/"},{id:"",name:"x-render",desc:"飞猪中后台「表单/表格/图表」开箱即用解决方案",icon:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",url:"https://x-render.gitee.io/",git:"https://github.com/alibaba/form-render"},{id:"",name:"Systemjs",desc:"最小系统加载工具",icon:"",git:"https://github.com/systemjs/systemjs"},{id:"",name:"X6",desc:"X6 图编辑引擎",icon:"https://x6.antv.vision/favicon-32x32.png?v=9772447a8d07a8fe19894b5176c6cb0d",url:"https://x6.antv.vision/zh"}]},{type:6,typeName:"工程化",tools:[{id:"",name:"npm",desc:"npm 是 JavaScript 世界的包管理工具,并且是 Node.js 平台的默认包管理工具。",icon:"https://docs.npmjs.com/icons/icon-256x256.png?v=f44ec608ba91563f864a30a276cd9065",url:"https://www.npmjs.cn/",url2:"https://docs.npmjs.com/"},{id:"",name:"Webpack",desc:"",icon:"https://webpack.docschina.org/favicon.f326220248556af65f41.ico",url:"https://webpack.docschina.org/"},{id:"",name:"Rollup",desc:"",icon:"https://www.rollupjs.com/img/favicon.png",url:"https://www.rollupjs.com/"},{id:"",name:"Vite",desc:"",icon:"https://vitejs.cn/favicon.ico",url:"https://vitejs.cn/"},{id:"",name:"Eslint",desc:"可组装的JavaScript和JSX检查工具",icon:"https://eslint.bootcss.com/img/favicon.512x512.png",url:"https://eslint.bootcss.com/"},{id:"",name:"Babel",desc:"Babel 是一个 JavaScript 编译器",icon:"https://www.babeljs.cn/img/favicon.png",url:"https://www.babeljs.cn/"},{id:"",name:"TypeScript",desc:"TypeScript是JavaScript类型的超集，可以编译JavaScript",icon:"https://www.tslang.cn/assets/images/icons/apple-touch-icon-120x120.png",url:"https://www.tslang.cn/"},{id:"",name:"Sentry",desc:"Sentry 是一个实时的事件日志和聚合平台，基于 Django 构建",icon:"https://docs.sentry.io/meta-avatar.png",url:"https://docs.sentry.io/"},{id:"",name:"Phacility",desc:"Phabricator 可视化代码评审工具",icon:"https://d27urz3c38hyx4.cloudfront.net/res/corgi/a5850363/images/logos/phacility_header_logo.png",url:"https://www.phacility.com/",url2:"https://www.oschina.net/p/phabricator?hmsr=aladdin1e1",bgColor:"linear-gradient(165deg,#012852 0,#73c7dc)"},{id:"",name:"Lerna",desc:"用于管理带有多个包的JavaScript项目的工具。",icon:"https://lerna.js.org/images/lerna-hero.svg",url:"https://lerna.js.org/",url2:"https://www.oschina.net/p/phabricator?hmsr=aladdin1e1",git:"https://github.com/lerna/lerna",bgColor:"linear-gradient(40deg,#00fff0 0%,#677ef8 50%,#cc00ff 100%)"}]},{type:7,typeName:"React",tools:[{id:"",name:"react",desc:"用于构建用户界面的 JavaScript 库",icon:"https://reactjs.bootcss.com/favicon.ico",url:"https://reactjs.bootcss.com/",git:"https://github.com/facebook/react"},{id:"",name:"react-router",desc:"react路由工具",icon:"https://reactrouter.com/favicon-32x32.png",url:"https://reactrouter.com/web/guides/philosophy",git:"https://github.com/facebook/react"},{id:"",name:"redux",desc:"react路由工具",icon:"https://redux.js.org/img/favicon/favicon.ico",url:"https://redux.js.org/",git:"https://www.github.com/reduxjs/redux"},{id:"",name:"DavJs",desc:"",icon:"",url:"https://dvajs.com/"},{id:"",name:"nextjs",desc:"这是一个用于 生产环境的React 框架",icon:"https://www.nextjs.cn/static/images/nextjs-logo.png",url:"https://www.nextjs.cn/"},{id:"",name:"Dace",desc:" 一个简单易用的 JavaScript 同构框架",icon:"https://dacejs.com/img/favicon-dark.png",url:"https://dacejs.com/",git:"https://github.com/dacejs/dace"},{id:"",name:"ahooks",desc:"为 React Hooks 而生",icon:"https://ahooks.js.org/simple-logo.svg",url:"https://ahooks.js.org/zh-CN",git:"https://github.com/alibaba/hooks"}]},{type:8,typeName:"Vue",tools:[{id:"",name:"Vue",desc:"渐进式JavaScript框架",icon:"https://cn.vuejs.org/images/icons/favicon-96x96.png",url:"https://cn.vuejs.org/"},{id:"",name:"Vuex",desc:"Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。",icon:"",url:"https://vuex.vuejs.org/zh/",bgColor:"#476582",color:"#3eaf7c"},{id:"",name:"VueUse",desc:"这是一个Vue Composition API实用程序的集合",icon:"https://vueuse.org/favicon.svg",url:"https://vuex.vuejs.org/zh/"}]},{type:9,typeName:"小程序",tools:[{id:"",name:"Remax",desc:"使用真正的 React 构建跨平台小程序",icon:"https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ",url:"https://remaxjs.org/"},{id:"",name:"Taro",desc:"多端统一开发解决方案",icon:"",bgColor:"#1322d0",color:"#ffffff",url:"https://taro.aotu.io/"}]},{type:10,typeName:"跨平台",tools:[{id:"",name:"ReactNative",desc:"使用 React 来创建 Android 和 iOS 的原生应用",icon:"https://reactjs.bootcss.com/favicon.ico",url:"https://www.react-native.cn/"},{id:"",name:"Flutter",desc:"Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。",icon:"",url:"https://flutterchina.club/",url2:"https://flutter.dev/"},{id:"",name:"Electron",desc:"使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序",icon:"http://www.electronjs.org/images/favicon.b7a59262df48d6563400baf5671da548.ico",url:"http://www.electronjs.org/"},{id:"",name:"Expo",desc:"做任何应用程序。运行它无处不在",icon:"https://static.expo.dev/static/favicon-light-48x48.png",url:"https://expo.dev/"},{id:"",name:"uni-app",desc:"uni-app 是一个使用 Vue.js 开发所有前端应用的框架",icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/icon.png",url:"https://uniapp.dcloud.io/",bgColor:"#42b983",color:"#ffffff"}]},{type:11,typeName:"单元测试",tools:[{id:"",name:"Mocha",desc:"mocha是一个功能丰富的javascript测试框架，运行在node.js和浏览器中，使异步测试变得简单有趣。",icon:"https://mochajs.cn/favicon.ico",url:"https://mochajs.cn/"},{id:"",name:"Karma",desc:"",icon:"",url:""},{id:"",name:"Jest",desc:"Jest 是一个令人愉快的 JavaScript 测试框架，专注于 简洁明快。",icon:"https://www.jestjs.cn/img/favicon/favicon.ico",url:"https://www.jestjs.cn/"}]},{type:12,typeName:"数据库",tools:[{id:"",name:"Mysql",desc:"MySQL是一个关系型数据库管理系统",icon:"https://labs.mysql.com/common/logos/mysql-logo.svg?v2",url:"https://www.mysql.com/"},{id:"",name:"MongoDB",desc:"MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。",icon:"https://www.mongodb.org.cn/Application/Home/View/Public/img/favicon.ico",url:"https://www.mongodb.org.cn/",url2:"https://docs.mongodb.com/"},{id:"",name:"Redis",desc:"Redis（Remote Dictionary Server )，即远程字典服务，是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。",icon:"https://redis.io/images/favicon.png",url:"http://www.redis.cn/",url2:"https://redis.io/"}]},{type:13,typeName:"数据可视化",tools:[{id:"",name:"Echarts",desc:"一个基于 JavaScript 的开源可视化图表库",icon:"https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png?_v_=20200710_1",url:"https://echarts.apache.org/zh/index.html"},{id:"",name:"Echarts社区",desc:"Echarts社区，站在巨人的肩膀上",icon:"https://www.makeapie.com/assets/favicon.png",url:"https://www.makeapie.com/explore.html"},{id:"",name:"AntV",desc:"蚂蚁集团全新一代数据可视化解决方案",icon:"https://antv.vision/favicon-32x32.png?v=9772447a8d07a8fe19894b5176c6cb0d",url:"https://antv.vision/"},{id:"",name:"D3Js",desc:"",icon:"https://d3js.org/favicon.png",url:"https://d3js.org/"},{id:"",name:"highcharts",desc:"兼容 IE6+、完美支持移动端、图表类型丰富、方便快捷的 HTML5 交互性图表库",icon:"https://s1.jscdn.com.cn/highcharts/images/logo.svg",url:"https://www.highcharts.com.cn/"}]},{type:14,typeName:"环境搭建工具",tools:[{id:"",name:"Nginx",desc:"Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。",icon:"http://nginx.org/favicon.ico",url:"https://www.nginx.cn/doc/",url2:"http://nginx.org/en/"},{id:"",name:"Jenkins",desc:"Jenkins是开源CI&CD软件领导者， 提供超过1000个插件来支持构建、部署、自动化， 满足任何项目的需要。",icon:"https://www.jenkins.io/favicon.ico",url:"https://www.jenkins.io/zh/"},{id:"",name:"CentOS",desc:"社区驱动的自由软件致力于围绕Linux平台交付一个健壮的开源生态系统。",icon:"https://www.centos.org/assets/img/favicon.png",url:"https://www.centos.org/"},{id:"",name:"docker",desc:"Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。",icon:"https://www.docker.com/sites/default/files/d8/Docker-R-Logo-08-2018-Monochomatic-RGB_Moby-x1.png",url:"https://www.docker.com/"}]},{type:15,typeName:"其他",tools:[{id:"",name:"postman",desc:"API调试工具",icon:"https://st-ar.cdn.postman.com/images/favicon-1-48.png",url:"https://www.postman.com/"},{id:"",name:"SwitchHosts",desc:"SwitchHosts 是一个管理、切换多个 hosts 方案的工具。它是一个免费开源软件。",icon:"https://swh.app/favicon.ico",url:"https://swh.app/zh/"},{id:"",name:"SourceTree",desc:"git分支管理工具",icon:"https://wac-cdn.atlassian.com/assets/img/favicons/sourcetree/android-chrome-192x192.png",url:"https://www.sourcetreeapp.com/"},{id:"",name:"SwitchyOmega",desc:"代理",icon:"",url:"",git:"https://github.com/FelisCatus/SwitchyOmega"},{id:"",name:"grafana",desc:"",icon:"https://grafana.com/static/assets/img/fav32.png",url:"https://grafana.com/"},{id:"",name:"kibana",desc:"",icon:"https://www.elastic.co/favicon-32x32.png",url:"https://www.elastic.co/cn/kibana/"},{id:"",name:"kafka",desc:"Kafka 是一个消息系统，可以在系统之间安全地移动数据",icon:"https://kafka.js.org/img/favicon.png",url:"https://kafka.js.org/"},{id:"",name:"davinci",desc:"达芬奇",icon:"",url:"https://edp963.github.io/davinci/",git:"https://github.com/edp963/davinci"},{id:"",name:"sonar",desc:"Sonar（SonarQube）是一个开源平台，用于管理源代码的质量。",icon:"",url:"http://www.sonar.org.cn/"},{id:"",name:"kubernetes",desc:"K8s,生产级别的容器编排系统",icon:"https://kubernetes.io/images/favicon.png",url:"https://kubernetes.io/zh/"},{id:"",name:"Iterm2",desc:"Mac终端模拟",icon:"https://iterm2.com/favicon.ico",url:"https://iterm2.com/"},{id:"",name:"Genymotion",desc:"安卓终端模拟",icon:"https://www.genymotion.com/wp-content/themes/genymotion/images/favicon.png",url:"https://www.genymotion.com/"},{id:"",name:"XCode",desc:"IOS模拟器",icon:"https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96.png",url:"https://developer.apple.com/xcode/"},{id:"",name:"Sketch",desc:"Sketch 是一款轻量，易用的矢量设计工具。让 UI 设计更简单，更高效",icon:"https://www.sketch.com/favicon.ico",url:"https://www.sketch.com/favicon.ico",url2:"http://www.sketchcn.com/"}]},{type:16,typeName:"字体",tools:[{id:"",name:"iconfont",desc:"阿里字体库",icon:"https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",url:"https://www.iconfont.cn/"},{id:"",name:"fontello",desc:"自定义图标",icon:"https://fontello.com/favicon.ico",url:"https://fontello.com/"},{id:"",name:"dafont",desc:"字体库",icon:"https://www.dafont.com/img/favicon.ico",url:"https://www.dafont.com/"},{id:"",name:"fontsquirrel",desc:"字体格式，ttf转woff、woff2",icon:"https://www.fontsquirrel.com/favicon-32x32.png?v=2",url:"https://www.fontsquirrel.com/tools/webfont-generator"},{id:"",name:"Font Convert",desc:"字体格式，ttf转woff、woff2",icon:"http://www.freefontconverter.com/img/apple-touch-icon.png",url:"http://www.freefontconverter.com/#"}]},{type:17,typeName:"CI",tools:[{id:"",name:"Travis-CI",desc:"Travis CI 是目前新兴的开源持续集成构建项目",icon:"https://cdn.travis-ci.org/images/favicon-076a22660830dc325cc8ed70e7146a59.png",url:"https://travis-ci.org/"},{id:"",name:"circleci",desc:"持续集成",icon:"https://d3r49iyjzglexf.cloudfront.net/apple-touch-icon-f1ef1fb6f37fe36fdacd2dfdc11fb2edf1720083a9aa8648eeac81f0a69e8da8.png",url:"https://circleci.com/"},{id:"",name:"Appveyor",desc:"持续集成",icon:"https://ci.appveyor.com/assets/images/favicon-blue.ico",url:"https://ci.appveyor.com/login"}]},{type:18,typeName:"抓包工具",tools:[{id:"",name:"charles",desc:"",icon:"https://www.charlesproxy.com/static/img/icon.850a44d2.png",url:"https://www.charlesproxy.com/"},{id:"",name:"fiddler",desc:"",icon:"https://www.telerik.com/favicon.ico?v=rebv1",url:"https://www.telerik.com/fiddler"}]}],R=n(13),F={insert:"head",singleton:!1},O=(c()(R.a,F),R.a.locals,function(){return i.a.createElement("div",{className:"app"},i.a.createElement(C,null),i.a.createElement("div",{className:"layout-wrap"},i.a.createElement("div",{className:"l-aside l-aside_left"},i.a.createElement(V,null)),i.a.createElement("div",{className:"l-content"},i.a.createElement(p,null,i.a.createElement(y,{data:D}))),i.a.createElement("div",{className:"l-aside l-aside_right"})),i.a.createElement(z,null))});n(17);r.a.render(i.a.createElement(O,null),document.getElementById("app"))}]);