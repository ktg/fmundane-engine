"use strict";(self.webpackChunkfmundane_docs=self.webpackChunkfmundane_docs||[]).push([[129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(c,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8},i="Using placeholders",l={unversionedId:"placeholders",id:"placeholders",title:"Using placeholders",description:"Placeholders are a new feature of the caravan, developed for the Adaptive podcasts project.  They allow us to attach variables to our experience scripts that will be evaluated at runtime.  The purpose is, for example to create an experience that has a few places in it that can be changed just before or even while an experience is running.  Examples include getting a voice to say something personal to a user (such as their name or address), or showing an image that has recently been taken (or provided by a participant).  At the moment the two places where placeholders are supported are with speech and images.",source:"@site/docs/placeholders.md",sourceDirName:".",slug:"/placeholders",permalink:"/fmundane-engine/docs/placeholders",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"QRCodes",permalink:"/fmundane-engine/docs/troubleshooting/qrcodes"},next:{title:"Twine",permalink:"/fmundane-engine/docs/category/twine"}},c={},p=[{value:"Using a speech placeholder",id:"using-a-speech-placeholder",level:2},{value:"Using an image placeholder",id:"using-an-image-placeholder",level:2},{value:"Setting placeholders in the Wizard of Oz interface.",id:"setting-placeholders-in-the-wizard-of-oz-interface",level:2}],s={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-placeholders"},"Using placeholders"),(0,r.kt)("p",null,"Placeholders are a new feature of the caravan, developed for the ",(0,r.kt)("strong",{parentName:"p"},"Adaptive podcasts")," project.  They allow us to attach variables to our experience scripts that will be evaluated at runtime.  The purpose is, for example to create an experience that has a few places in it that can be changed just before or even while an experience is running.  Examples include getting a voice to say something personal to a user (such as their name or address), or showing an image that has recently been taken (or provided by a participant).  At the moment the two places where placeholders are supported are with speech and images.  "),(0,r.kt)("h2",{id:"using-a-speech-placeholder"},"Using a speech placeholder"),(0,r.kt)("p",null,"Consider the speech action in Twine:"),(0,r.kt)("img",{src:"https://tlodge.github.io/fmundane-engine/img/placeholder1.png"}),(0,r.kt)("p",null,"You can create a placeholder by putting a placeholder name (you can choose anything) inbetween a | and |.  So in the image above we have a placeholder called ",(0,r.kt)("strong",{parentName:"p"},'"somemorethings"'),". This will be filled in with words at runtime."),(0,r.kt)("h2",{id:"using-an-image-placeholder"},"Using an image placeholder"),(0,r.kt)("p",null,"Similarly, consider the the screen-image action in Twine:"),(0,r.kt)("img",{src:"https://tlodge.github.io/fmundane-engine/img/placeholder2.png"}),(0,r.kt)("p",null,"Again, can create a placeholder by putting an image placeholder name inbetween | and |.  So here we are saying load up the image tagged with myimageplaceholder."),(0,r.kt)("h2",{id:"setting-placeholders-in-the-wizard-of-oz-interface"},"Setting placeholders in the Wizard of Oz interface."),(0,r.kt)("p",null,"When you load up an experience in the Wizard of Oz interface that has placeholders in it, you will see a bunch of pink dots.  These are show above all nodes that have placeholders in them:"),(0,r.kt)("img",{src:"https://tlodge.github.io/fmundane-engine/img/placeholder3.png"}),(0,r.kt)("p",null,"You can either click on a pink dot above a node to upadate the specific placeholder(s) for that node.  Else you can click on the ",(0,r.kt)("strong",{parentName:"p"},'"placeholders"')," circle on the top left of the screen.  When you click on it you will be shown a placeholder manager on the left-hand of the screen."),(0,r.kt)("img",{src:"https://tlodge.github.io/fmundane-engine/img/placeholder4.png"}),(0,r.kt)("p",null,"In our case we have already loaded up an image for the ",(0,r.kt)("strong",{parentName:"p"},"myimageplaceholder")," (the picture of the caravan), but if you click on ",(0,r.kt)("strong",{parentName:"p"},"upload image for myimageplaceholder placeholder")," and they you'll be shown a file upload dialogue.  Choose a file and this will be uploaded to the media directory and the placeholders file (in ",(0,r.kt)("inlineCode",{parentName:"p"},"fmundane-engine/placeholders"),").  "),(0,r.kt)("img",{src:"https://tlodge.github.io/fmundane-engine/img/placeholder5.png"}),(0,r.kt)("p",null,"It's a similar procedure for setting the ",(0,r.kt)("strong",{parentName:"p"},"somemorethings"),' placeholder, click on "current text" and you will be provided with a textarea to add the text.'),(0,r.kt)("img",{src:"https://tlodge.github.io/fmundane-engine/img/placeholder6.png"}),(0,r.kt)("p",null,"And that is it.  Now when you run the experience the chosen image will be shown and the chosen text will be spoken."))}h.isMDXComponent=!0}}]);