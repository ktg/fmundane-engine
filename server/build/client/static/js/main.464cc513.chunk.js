(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,n){},135:function(e,t){},146:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(35),i=n.n(a),o=(n(105),n(3)),s=n.n(o),l=n(13),d=n(5),u=n(2),f=n(6),x=n(4),j=n(0);var b=function(e){var t=e.ready,n=e.names,c=e.handleAction,r=n.map((function(e){return Object(j.jsx)("button",{onClick:function(){return c(e)},className:"bg-blue-500 m-2 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:e},e)}));return t?Object(j.jsx)("div",{children:r}):Object(j.jsx)(j.Fragment,{})},h=n(14),p=n(9),m=n(39),y=n(75),g=n.n(y),O=n(8),v=n.n(O),w=n(147),k=n(77),N=g()(window.location.href),C=Object(m.b)({name:"experience",initialState:{layers:[],events:[],readyforinput:{},transcript:"",lastsenttranscript:"",authored:[],layerName:"",listening:{},rendering:!1},reducers:{setAuthored:function(e,t){e.authored=t.payload},setLayerName:function(e,t){e.layerName=t.payload},setLayers:function(e,t){e.layers=t.payload},setEvents:function(e,t){e.events=t.payload},setEvent:function(e,t){e.events=[].concat(Object(h.a)(e.events.filter((function(e){return e.id!==t.payload.id}))),[t.payload])},setTranscript:function(e,t){var n=t.payload,c=n.transcript;n.layerid;e.transcript=c},setReadyForInput:function(e,t){e.readyforinput=Object(u.a)(Object(u.a)({},e.readyforinput),t.payload)},setListening:function(e,t){var n=t.payload,c=n.layerid,r=n.listening;e.listening=Object(u.a)(Object(u.a)({},e.listening),{},Object(d.a)({},c,r))},sentTranscript:function(e){e.lastsenttranscript=e.transcript},resetReadiness:function(e){e.readyforinput={}},setRendering:function(e,t){e.rendering=t.payload}}}),S=C.actions,R=S.setRendering,A=S.setLayers,E=S.setLayerName,W=S.setEvent,L=S.setListening,M=S.setEvents,T=S.setTranscript,z=S.sentTranscript,q=S.setReadyForInput,F=S.setAuthored,I=S.resetReadiness;N.on("connect_error",(function(){console.log("attempting to reconnect!!"),setTimeout((function(){N.connect()}),1e3)}));var U=function(){return function(e){v.a.get("/author/authored").then((function(t){var n=t.body.layers;e(F(n))}))}},Z=function(e){return Object(h.a)(e.experience.events||[]).sort((function(e,t){return e.id<t.id?-1:e.id>t.id?1:-1}))},J=function(e){return e.experience.readyforinput},B=function(e){return e.experience.transcript},P=function(e){return e.experience.layers.reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},t.layerid,w.a().nodeSize([120,230])(k.b(t,(function(e){return e.children})))))}),{})},H=function(e){return e.experience.authored},_=function(e){return e.experience.layerName},$=function(e){return e.experience.rendering},D=C.reducer;function G(e){var t=e.rules,n=e.ready,r=e.handleAction,a=e.handleChange,i=Object(c.useState)(""),o=Object(f.a)(i,2),s=o[0],l=o[1],d=function(e){a(e),l(e)},u=function(){l(""),r()},b=Object(x.c)(B);return Object(j.jsxs)("div",{className:"flex flex-col h-full w-full",children:[Object(j.jsx)("div",{style:{height:50},className:"flex text-xs font-bold justify-center items-center",children:""==b.trim()?"[listening for speech]":'"'.concat(b,'"')}),n&&Object(j.jsxs)("div",{className:"p-6 bg-black flex flex-grow flex-col",children:[Object(j.jsx)("div",{className:"font-semibold text-white text-base pb-2",children:"override"}),function(){var e=t.reduce((function(e,t){return[].concat(Object(h.a)(e),Object(h.a)((t.rule.operand||[]).map((function(e){return{operand:e,next:t.next}}))))}),[]);return 0===e.length?Object(j.jsxs)("div",{className:"flex flex-col overflow-auto",children:[Object(j.jsx)("input",{onChange:function(e){return d(e.target.value)},value:s,className:"h-10 pl-2 m-4 rounded",type:"text",placeholder:"simulate some words"}),Object(j.jsx)("button",{onClick:function(){u()},className:"bg-blue-500 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"say it!"})]}):e.map((function(e){return Object(j.jsx)("button",{onClick:function(){d(e.operand),u()},className:"bg-blue-500 m-2 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2rounded",children:"".concat(e.operand," (").concat(e.next,")")},e.operand)}))}()]})]})}var K=function(e){var t=e.ready,n=e.names,c=e.handleAction,r=n.map((function(e){return Object(j.jsx)("button",{onClick:function(){return c(e)},className:"bg-green-500 m-2 text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded",children:e},e)}));return t?Object(j.jsx)("div",{children:r}):Object(j.jsx)(j.Fragment,{})};var Q=function(e){var t=e.id,n=Object(x.b)();return Object(j.jsxs)("div",{className:"w-full text-black  bg-gray-600 overflow-hidden shadow-lg flex flex-grow flex-col",style:{minHeight:280,overflow:"auto"},children:[Object(j.jsxs)("div",{className:"flex flex-row text-xs font-semibold p-4 bg-gray-400",children:[Object(j.jsxs)("div",{className:"flex flex-grow",children:["".concat(e.id," (").concat(e.data.type,")")," "]}),Object(j.jsx)("div",{onClick:function(){return e.toggleTree(e.id)},className:"flex",children:"tree"})]}),Object(j.jsx)("div",{className:"flex justify-center flex-grow",children:function(e){switch(e.type){case"button":return Object(j.jsx)(b,{ready:e.ready,names:e.data,handleAction:function(e){n(function(e,t){return function(n){console.log("button pressed!!",e,t),n(q(Object(d.a)({},t,!1))),v.a.get("/event/press").query({name:e,layer:t}).end((function(e,t){e&&console.log(e)}))}}(e,t))}});case"speech":return Object(j.jsx)(G,{rules:e.rules,ready:e.ready,handleChange:function(e){n(T({transcript:e,layerid:t}))},handleAction:function(){n((function(e,t){var n=t().experience.transcript,c=t().experience.listening,r=function(){var n=Object(l.a)(s.a.mark((function n(){var r,a,i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=0,a=Object.keys(c);case 1:if(!(r<a.length)){n.next=10;break}if(i=a[r],!c[i]){n.next=7;break}return n.next=6,v.a.get("/event/speech").query({layer:i,speech:t().experience.transcript});case 6:e(z());case 7:r++,n.next=1;break;case 10:e(T({transcript:""}));case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();""!==n.trim()&&r()}))}});case"webhook":return Object(j.jsx)(K,{ready:e.ready,names:e.data,handleAction:function(e){n(function(e,t){return function(){v.a.get("/event/webhook").query({trigger:e}).end((function(e,t){e&&console.log(e)}))}}(e))}});default:return JSON.stringify(e,null,4)}}(Object(u.a)(Object(u.a)({},e.data),{},{ready:e.ready||!1}))})]})},V=function(e){var t=e.start,n=e.authored,c=e.toggleCreate,r=e.twineExport,a=e.renderSpeech,i=e.rendering,o=Object(x.c)(_);return Object(j.jsxs)("nav",{className:"flex items-center flex-wrap bg-teal-500 p-1",children:[Object(j.jsx)("div",{className:"flex items-center text-white",children:Object(j.jsxs)("svg",{width:"66",height:"42",viewBox:"0 0 33 21",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},children:[Object(j.jsx)("path",{d:"M1.425,11.233c1.484,-2.368 3.867,-5.752 8.591,-8.263c4.267,-2.268 9.378,-2.597 10.538,-2.634c11.581,-0.375 11.745,9.075 11.758,9.983c0.149,2.891 -0.988,5.991 -2.709,6.365c-2.557,0.556 -5.645,0.675 -8.484,0.823c-0,-0 -0.485,-2.705 -3.147,-2.523c-3.078,0.211 -3.057,2.749 -3.057,2.749l-5.478,0.034c-3.169,-0.217 -6.251,-0.923 -9.112,-2.878c0.099,-1.076 0.424,-2.577 1.1,-3.656Z",style:{fill:"none",stroke:"#fff",strokeWidth:.65}}),Object(j.jsx)("path",{d:"M18.03,16.213c1.187,0 2.15,0.921 2.15,2.056c0,1.135 -0.963,2.056 -2.15,2.056c-1.187,0 -2.151,-0.921 -2.151,-2.056c-0,-1.135 0.964,-2.056 2.151,-2.056Zm-0,1.273c0.452,-0 0.819,0.351 0.819,0.783c0,0.433 -0.367,0.784 -0.819,0.784c-0.453,-0 -0.82,-0.351 -0.82,-0.784c-0,-0.432 0.367,-0.783 0.82,-0.783Z",style:{fill:"none",stroke:"#fff",strokeWidth:.61}}),Object(j.jsx)("path",{d:"M3.191,11.01c-0,0 5.163,-9.036 17.356,-9.416c10.119,-0.316 10.542,8.541 10.542,8.541c-0.983,0.081 -1.454,0.569 -1.498,0.911c-0.093,0.724 0.607,1.131 1.224,1.14c-0.301,1.964 -0.921,2.796 -2.169,3.24c-1.608,0.572 -6.789,0.413 -6.789,0.413c-0,-0 -0.524,-2.554 -3.759,-2.522c-2.696,0.027 -3.614,2.85 -3.614,2.85c-4.652,0.473 -8.768,-0.024 -12.101,-1.954c0.019,-0.386 0.149,-0.733 0.372,-1.045c-0,-0 1.62,-0.073 1.658,-1.111c0.035,-0.959 -1.222,-1.047 -1.222,-1.047Z",style:{fill:"none",stroke:"#fff",strokeWidth:.65}}),Object(j.jsx)("path",{d:"M21.831,5.29c0.027,-0.872 0.996,-1.574 2.185,-1.574c1.207,0 2.186,0.723 2.186,1.612c0,0.051 -0.003,0.101 -0.009,0.151l0.297,7.926l-4.358,0.089l-0.317,-8.204l0.016,0Z",style:{fill:"none",stroke:"#fff",strokeWidth:.68}}),Object(j.jsx)("ellipse",{cx:"24.137",cy:"6.687",rx:"1.042",ry:"1.013",style:{fill:"none",stroke:"#fff",strokeWidth:.54}}),Object(j.jsx)("path",{d:"M17.87,5.83c-0.004,-0.204 -0.147,-0.367 -0.319,-0.363c-1.828,-0.053 -3.673,-0.044 -5.557,0.109c-0.172,0.003 -0.309,0.171 -0.305,0.375c0.092,0.837 0.1,1.693 0.051,2.564c0.004,0.203 0.147,0.366 0.319,0.363c1.87,-0.146 3.715,-0.137 5.557,-0.11c0.172,-0.003 0.308,-0.171 0.304,-0.375c-0.045,-0.854 -0.062,-1.709 -0.05,-2.563Z",style:{fill:"none",stroke:"#fff",strokeWidth:.61}})]})}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:"font-semibold text-xl tracking-tight pl-4 text-white",children:"Future Mundane"})}),Object(j.jsx)("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto pl-10",children:Object(j.jsxs)("div",{className:"text-sm lg: flex-grow",children:[""!=o.trim()&&Object(j.jsx)("a",{onClick:t,className:"block mt-4 lg:inline-block lg:mt-0 text-white  hover:font-bold mr-4",children:"Start"}),""!=o.trim()&&Object(j.jsx)("a",{target:"_blank",href:encodeURI("/author?layers=".concat(o)),className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",children:"Edit"})]})}),Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("div",{className:"flex flex-row",children:n.map((function(e){var t=o==e?"font-bold":"font-normal";return Object(j.jsx)("a",{className:"p-2 text-white ".concat(t," text-xs"),style:{opacity:o==e?1:.6},href:encodeURI("?layers=".concat(e)),children:e},e)}))}),Object(j.jsxs)("div",{className:"flex flex-row justify-end",children:[Object(j.jsx)("a",{className:"p-2 text-xs font-bold text-white",onClick:c,children:"upload"}),""!=o.trim()&&Object(j.jsx)("a",{className:"p-2 text-xs font-bold text-white",onClick:r,children:"export (twine)"}),""!=o.trim()&&Object(j.jsx)("a",{className:"p-2 text-xs font-bold text-white",onClick:a,children:"".concat(i?"[rendering...]":"render speech")})]})]})]})},X=n(28),Y=n(38),ee={},te=function e(t){return t.reduce((function(t,n){return t.concat(Array.isArray(n)?e(n):n)}),[])},ne=function e(t){return te([{links:t.data.links,trigger:t.data.trigger,from:{name:t.data.id,x:ee[t.data.id].x,y:ee[t.data.id].y+60},to:(t.children||[]).map((function(e){return{trigger:e.data.trigger,name:e.data.id,x:ee[e.data.id].x,y:ee[e.data.id].y-60}}))}].concat(Object(h.a)((t.children||[]).map((function(t){return e(t)})))))},ce=function e(t){var n=Object.keys(t.data.links||{}).reduce((function(e,n){var c=t.data.links[n];return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},c.rid,c))}),{});return Object(u.a)(Object(u.a)({},n),(t.children||[]).reduce((function(t,n){return Object(u.a)(Object(u.a)({},t),e(n))}),{}))},re=function(e,t,n,c){return Object(j.jsx)("path",{d:"M ".concat(e," ").concat(t," C ").concat((e+n)/2," ").concat(t,", ").concat((e+n)/2," ").concat(c,", ").concat(n," ").concat(c),style:{stroke:"#000",strokeWidth:"2",fill:"none"}})},ae=function(e,t,n,c){return Object(j.jsx)("path",{d:"M ".concat(e," ").concat(t," C ").concat(e," ").concat(t+60,", ").concat(e-120," ").concat(c+60,", ").concat(n," ").concat(c),style:{stroke:"#444",strokeWidth:"1",fill:"none"}})},ie=function(e){return e.from.y>e.to.y};var oe=function(e){var t=c.useRef();c.useEffect((function(){!function(){var n=X.a(t.current),c=ee[e.id]||{x:0,y:0},r=c.x,a=c.y,i=0,o=0,s=n.select("g#dragbox").attr("transform");if(s){var l=s.split(/\s+/)[0].replace("translate(","").replace(")","").split(","),d=Object(f.a)(l,2);i=d[0],o=d[1]}n.transition().duration(2e3).attr("transform","translate(".concat(-a-i+200,",").concat(-r-o+e.height/2,")"))}()}),[e]);var n=function(e,t){var n=r.a.useRef();return r.a.useEffect((function(){return e(X.a(n.current)),function(){}}),t),n}((function(e){var t=e.select("g#dragbox");e.call(Y.a().on("zoom",(function(e){var n=e.transform,c=n.x,r=n.y;t.attr("transform","translate(".concat(c,",").concat(r,")"))})))}),[]);return ee={},function e(t){ee[t.data.id]||(ee[t.data.id]={x:t.x,y:t.y},(t.children||[]).map((function(t){return e(t)})))}(e),Object(j.jsx)("div",{className:"text-black bg-gray-200 rounded bg-white overflow-hidden shadow-lg",children:Object(j.jsxs)("svg",{ref:n,height:e.height,style:{width:"calc(100vw - 280px)"},children:[Object(j.jsx)("circle",{onClick:function(){!function(e,t){var n=X.a(e.current),c=ee[t.id]||{x:0,y:0},r=c.x,a=c.y,i=0,o=0,s=n.select("g#dragbox").attr("transform");if(s){var l=s.split(/\s+/)[0].replace("translate(","").replace(")","").split(","),d=Object(f.a)(l,2);i=d[0],o=d[1]}n.attr("transform","translate(".concat(-a-i+200,",").concat(-r-o+t.height/2,")"))}(t,e)},cx:50,cy:50,r:"10",fill:"white",strokeWidth:2,stroke:"#000"}),Object(j.jsx)("g",{ref:t,transform:"translate(120,".concat(e.height/2,")"),children:Object(j.jsxs)("g",{id:"dragbox",children:[function(e,t){var n={};return e.map((function(e){return e.to.map((function(c){if(n["".concat(e.from.name,",").concat(c.name)])return Object(j.jsx)("g",{});n["".concat(e.from.name,",").concat(c.name)]=!0;var r=(c.x-e.from.x)/2,a=(Math.max(c.y,e.from.y)-Math.min(c.y,e.from.y))/2,i="middle",o=t[c.trigger],s=20+20*(o.actions.length-1),l=o.actions.map((function(e,t){return Object(j.jsxs)("text",{fontSize:"x-small",textAnchor:"middle",x:c.y+60,y:c.x-s+18*t,children:[" ",Object(h.a)(new Set(e.map((function(e){return e.action})))).join(",")]},e.map((function(e){return e.action})).join(","))})),d=o.rule,u=void 0===d?{}:d,f=u.operator||"",x=u.operand||[],b="".concat(f,", ").concat(x),p=Object(j.jsxs)("g",{children:[Object(j.jsx)("rect",{x:e.from.y-20+a,y:e.from.x-13+r,width:40,height:12,style:{fill:"#edf2f7"}}),ie({from:e.from,to:c})?Object(j.jsx)("text",{fontSize:"x-small",fontWeight:"bold",fill:"#000",opacity:"0.5",textAnchor:i,y:e.from.x+r-5+70,x:e.from.y+(c.y-e.from.y)/2,children:b}):Object(j.jsx)("text",{fontSize:"x-small",fontWeight:"bold",fill:"black",textAnchor:i,y:e.from.x+r-5,x:e.from.y+a,children:b})]});return Object(j.jsxs)("g",{children:[ie({from:e.from,to:c})?ae(e.from.y,e.from.x,c.y,c.x):re(e.from.y,e.from.x,c.y,c.x),p,l]},"".concat(c.x,",").concat(c.y))}))}))}(ne(e),ce(e)),function e(t,n,c,r){var a=!1;if(ee[t.data.id].x===t.x&&ee[t.data.id].y==t.y)return a=c?n===t.data.id:n==t.data.id,Object(j.jsxs)("g",{children:[Object(j.jsx)("rect",{onClick:function(){return r(t.data.id)},x:t.y-60,y:t.x-10,width:120,height:20,rx:10,style:{fill:a?"#4299e1":"white",stroke:"black"}}),Object(j.jsx)("text",{onClick:function(){return r(t.data.id)},textAnchor:"middle",fontSize:"x-small",x:t.y,y:t.x+4,children:t.data.name}),(t.children||[]).map((function(t){return e(t,n,c,r)}))]},"".concat(t.x,",").concat(t.y))}(e,e.id,e.triggered,e.handleClick)]})})]})})};function se(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function le(e){var t=e.save,n=e.cancel,r=Object(x.b)(),a=Object(c.useState)({}),i=Object(f.a)(a,2),o=i[0],d=i[1],u=Object(c.useState)(""),b=Object(f.a)(u,2),h=b[0],p=b[1],m=Object(c.useState)(""),y=Object(f.a)(m,2),g=y[0],O=y[1],v=Object(c.useState)(),w=Object(f.a)(v,2),k=w[0],N=w[1],C=function(e){N(e.target.files[0])},S=function(){var e=new FileReader;e.readAsText(k,"UTF-8"),e.onload=function(e){try{d(JSON.parse(e.target.result))}catch(t){}}},R=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p(""),""!=g.trim()){e.next=5;break}return p("Please provide a name for this file"),e.abrupt("return");case 5:return e.next=7,t(g,o);case 7:r(U()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),p("Error with JSON file, please correct and try again");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"relative flex justify-end",children:Object(j.jsxs)("div",{className:"text-center shadow-lg flex flex-col",children:[Object.keys(o).length>0&&Object(j.jsxs)("div",{className:"flex flex-col text-center p-4 items-center justify-center",children:[Object(j.jsx)("input",{value:g,onChange:function(e){return O(e.target.value)},type:"text",placeholder:"give it a name",className:"w-64 p-2 bg-gray-400"}),Object(j.jsxs)("div",{className:"flex flex-row justify-center items-center",children:[Object(j.jsx)("div",{onClick:R,className:"m-2 p-2 bg-blue-500 text-white",children:"IMPORT!"}),Object(j.jsx)("div",{onClick:n,className:"m-2 p-2 bg-blue-500 text-white",children:"CANCEL"})]})]}),Object.keys(o).length<=0&&Object(j.jsxs)("div",{className:"flex flex-row p-4 items-center",children:[Object(j.jsx)("input",{type:"file",name:"file",onChange:C}),k&&Object(j.jsx)("div",{onClick:S,className:"m-2 p-2 bg-blue-500 text-white",children:"upload"}),Object(j.jsx)("div",{onClick:n,className:"m-2 p-2 bg-blue-500 text-white",children:"CANCEL"})]}),h&&Object(j.jsx)("div",{className:"text-red-600 p-4 text-bold justify-center",children:h})]})})}function de(){var e=Object(x.c)(Z),t=Object(x.c)(J),n=Object(x.c)(P),r=Object(x.c)(H),a=Object(x.c)(_),i=Object(x.c)($),o=Object(c.useState)({}),b=Object(f.a)(o,2),h=b[0],m=b[1],y=Object(c.useState)(!1),g=Object(f.a)(y,2),O=g[0],w=g[1],k=function(){var e=Object(c.useState)(se()),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){function e(){r(se())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().height,C=Object(x.b)(),S=function(e){w(void 0!=e?e:!O)},z=Object(c.useState)("start"),F=Object(f.a)(z,2),B=(F[0],F[1]);Object(c.useEffect)((function(){var e="undefined"!==typeof window&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition),t=e?new e:{start:function(){}};t.continous=!0,t.interimResults=!0,t.lang="en-US",C(U()),C((function(e,t){N.on("event",(function(t){e(T({transcript:""})),e(L({layerid:t.id,listening:!1})),e(W(t))})),N.on("ready",(function(t){var n=t.event,c=t.layer;e(T({transcript:""})),console.log("setting ready for inout",n,c),e(q(Object(d.a)({},c,!0))),"speech"===n.type&&e(L({layerid:c,listening:!0}))}))})),C((window,function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.on("action",function(){var e=Object(l.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(p.a)(t);try{for(n.s();!(c=n.n()).done;)c.value}catch(r){n.e(r)}finally{n.f()}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var n,c=new URLSearchParams(window.location.search),r=Object.fromEntries(c.entries()).layers,a=void 0===r?null:r;a&&C((n=a,function(e,t){v.a.get("/event/layers").query({layer:n}).then((function(t){var c=t.body.map((function(e){return Object(u.a)(Object(u.a)({},e.tree),{},{layerid:e.layerid})}));e(E(n)),e(A(c))})).catch((function(e){console.log("error resetting events",e)}))}))}),[]);var D=function(e){m(Object(u.a)(Object(u.a)({},h),{},Object(d.a)({},e,!h[e])))},G=function(e,t){C(function(e,t){return function(){v.a.get("/event/trigger").query({layer:e,node:t}).end((function(e,t){e&&console.log(e)}))}}(e,t))},K=Object.keys(h).reduce((function(e,t){return 1==h[t]?e+1:e}),0),X=(k-54-(e.length-K>0?280:0))/K-4*e.length,Y=e.sort((function(e,t){return h[e.id]&&!h[t.id]?-1:h[t.id]&&!h[e.id]?1:0})).map((function(e,c){return Object(j.jsxs)("div",{className:"flex flex-row m-1",children:[Object(j.jsx)("div",{className:"flex w-64 justify-center overflow-visible",style:{height:h[e.id]?X-2:280},children:Object(j.jsx)(Q,Object(u.a)({},Object(u.a)(Object(u.a)({},e),{},{ready:t[e.id]||!1,toggleTree:D})))}),h[e.id]&&Object(j.jsx)(oe,Object(u.a)({},Object(u.a)(Object(u.a)({},n[e.id]),{},{handleClick:function(t){G(e.id,t)},height:X,id:e.data.id,triggered:e.triggered})))]},e.id)})),ee=function(){var e=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/author/save").set("Content-Type","application/json").send({name:t,layer:n});case 2:S(!1);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(V,{rendering:i,authored:r,start:function(){C(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){v.a.get("/event/start").then((function(n){t(I()),t(M(n.body)),t(T({transcript:"",layerid:e}))})).catch((function(e){console.log("error resetting events",e)}))}}()),B("reset")},toggleCreate:S,twineExport:function(){v.a.get("/author/translate").query({name:a}).then((function(e){var t=e.body.html,n="data:text/html;chatset=utf-8,".concat(encodeURIComponent(t)),c=document.createElement("a");c.href=n,c.download="".concat(a,".html"),c.click()}))},renderSpeech:function(){C(function(){var e=Object(l.a)(s.a.mark((function e(t,n){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n().experience.layerName,t(R(!0)),e.next=4,v.a.get("/author/render").query({name:c});case 4:t(R(!1));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}),Object(j.jsx)("div",{className:"flex row mb-4 border-b-2 flex-wrap",children:Y}),O&&Object(j.jsx)(le,{save:function(e,t){return ee(e,t)},cancel:function(){return S(!1)}})]})}var ue=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(de,{})})})},fe=Object(m.a)({reducer:{experience:D}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x.a,{store:fe,children:Object(j.jsx)(ue,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);
//# sourceMappingURL=main.464cc513.chunk.js.map