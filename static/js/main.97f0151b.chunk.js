(window.webpackJsonpswinfo=window.webpackJsonpswinfo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=(n(16),n(2)),l=n.n(i),s=n(5),d=n(6),u=n(7),m=n(9),h=n(8),f=n(1),g=n(10),v=(n(18),function(e){var t=e.name,n=e.handleCategorySelect;return r.a.createElement("button",{className:"navButton",onClick:function(){return n("https://swapi.dev/api/".concat(t,"/"))}},t)}),p=(n(19),function(e){var t=e.handleCategorySelect;return r.a.createElement("nav",null,r.a.createElement(v,{name:"films",handleCategorySelect:t}),r.a.createElement(v,{name:"people",handleCategorySelect:t}),r.a.createElement(v,{name:"planets",handleCategorySelect:t}),r.a.createElement(v,{name:"species",handleCategorySelect:t}),r.a.createElement(v,{name:"vehicles",handleCategorySelect:t}),r.a.createElement(v,{name:"starships",handleCategorySelect:t}))}),w=(n(20),function(e){var t=e.handleCategorySelect;return r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{id:"pageLogo"},"@ info"),r.a.createElement(p,{handleCategorySelect:t}))}),E=(n(21),function(e){var t=e.itemList,n=e.handleItemSelect;return e.isLoading?r.a.createElement("div",{className:"itemList loading"},"Loading..."):t.length?r.a.createElement("div",{className:"itemList"},r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t,onClick:function(){return n(e)}},e.title||e.name.toLowerCase())}))):r.a.createElement("div",null)}),S=(n(22),function(e){var t=e.selectedItem,n=Object.entries(t);return 0===n.length?r.a.createElement("div",null):r.a.createElement("div",{className:"shadow-5 infoCard"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n[0][1],"?100x100")}),n.filter(function(e){return!Array.isArray(e[1])&&"url"!==e[0]&&"homeworld"!==e[0]&&"created"!==e[0]&&"edited"!==e[0]}).map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("span",{className:"infoKey"},e[0],":")," ",e[1])}))}),y=function(e){var t=e.itemList,n=e.selectedItem,a=e.handleItemSelect,c=e.isLoading;return r.a.createElement("main",{className:"container-fluid row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(E,{itemList:t,handleItemSelect:a,isLoading:c})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(S,{selectedItem:n})))},b=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).handleItemSelect=function(t){e.setState({selectedItem:t})},e.state={itemList:[],selectedItem:{},isLoading:!1},e.handleCategorySelect=e.handleCategorySelect.bind(Object(f.a)(e)),e.handleItemSelect=e.handleItemSelect.bind(Object(f.a)(e)),e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"handleCategorySelect",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var n,a,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),this.setState({selectedItem:{}}),e.prev=2,n=[],e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:r=e.sent,n=n.concat(r.results);case 11:if(null===r.next){e.next=21;break}return e.next=14,fetch(r.next);case 14:return a=e.sent,e.next=17,a.json();case 17:r=e.sent,n=n.concat(r.results),e.next=11;break;case 21:this.setState({itemList:n}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(2),console.log("Big error",e.t0);case 27:this.setState({isLoading:!1});case 28:case"end":return e.stop()}},e,this,[[2,24]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.itemList,n=e.selectedItem,a=e.isLoading;return r.a.createElement("div",null,r.a.createElement(w,{handleCategorySelect:this.handleCategorySelect}),r.a.createElement(y,{itemList:t,isLoading:a,selectedItem:n,handleItemSelect:this.handleItemSelect}))}}]),t}(a.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(23);o.a.render(r.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/swinfo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/swinfo","/service-worker.js");C?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):L(t,e)})}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.97f0151b.chunk.js.map