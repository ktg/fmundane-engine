"use strict";(self.webpackChunkfmundane_docs=self.webpackChunkfmundane_docs||[]).push([[3601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||l[f]||a;return r?o.createElement(m,c(c({ref:t},u),{},{components:r})):o.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={},c="QRCodes",i={unversionedId:"troubleshooting/qrcodes",id:"troubleshooting/qrcodes",title:"QRCodes",description:"QRCodes don't work",source:"@site/docs/troubleshooting/qrcodes.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/qrcodes",permalink:"/docs/troubleshooting/qrcodes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting/qrcodes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Media in browser",permalink:"/docs/troubleshooting/media"},next:{title:"Twine",permalink:"/docs/category/twine"}},s={},d=[{value:"QRCodes don&#39;t work",id:"qrcodes-dont-work",level:3}],u={toc:d};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"qrcodes"},"QRCodes"),(0,n.kt)("h3",{id:"qrcodes-dont-work"},"QRCodes don't work"),(0,n.kt)("p",null,"Check that the device that is reading the QRCode is on the network. Apparently some QRCode readers need Internet connectivity to work. No way around this other that have the Caravan on the network or provide a QRcode reader that works without Internet connectivity."))}l.isMDXComponent=!0}}]);