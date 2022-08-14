(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"/**\r\n * Body CSS\r\n */\r\n\r\n html,\r\n body {\r\n   height: 100%;\r\n }\r\n \r\n html,\r\n body,\r\n input,\r\n textarea,\r\n button {\r\n   -webkit-font-smoothing: antialiased;\r\n   -moz-osx-font-smoothing: grayscale;\r\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n }\r\n \r\n \r\n /**\r\n  * Sidebar CSS\r\n  */\r\n \r\n #sidebar {\r\n   background-color: #E57373;\r\n   padding: 15px;\r\n }\r\n \r\n @media (min-width: 768px) {\r\n   #sidebar {\r\n     position: fixed;\r\n     top: 0;\r\n     bottom: 0;\r\n     width: 180px;\r\n     height: 100%;\r\n     padding-top: 30px;\r\n   }\r\n }\r\n \r\n \r\n /**\r\n  * Content CSS\r\n  */\r\n @media (min-width: 768px) {\r\n   #content {\r\n     margin-left: 180px;\r\n   }\r\n }\r\n \r\n.floating-btn{\r\n  position: fixed;\r\n  margin-top: 20px;\r\n}\r\n\r\n.modal{\r\n  text-align: center;\r\n  border-radius: 8px;\r\n  max-width: 500px;\r\n  max-height: 600px;\r\n  background-color: #fff;\r\n  color: #000;\r\n  margin: 150px auto;\r\n  overflow-y: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.error{\r\n  color: red;\r\n}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var u=n(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{static create(n){return fetch("https://questions-app-c13e2-default-rtdb.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>(n.id=e.name,n))).then(t).then(e.renderList)}static fetch(e){return e?fetch(`https://questions-app-c13e2-default-rtdb.firebaseio.com/questions.json?auth=${e}`).then((e=>e.json())).then((e=>e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])):Promise.resolve('<p class="error">У вас нет токена</p>')}static renderList(){const e=r(),t=e.length?e.map(o).join(""):'<div class="mui--text-black-54 mui--text-body2">Вы ещё не спросили</div>';document.getElementById("list").innerHTML=t}static ListToHtml(e){return e.length?`<ol>${e.map((e=>`<li>${e.text}</li>`)).join("")}</ol>`:"<p>Not questions yet</p>"}}function t(e){const t=r();t.push(e),localStorage.setItem("questions",JSON.stringify(t))}function r(){return JSON.parse(localStorage.getItem("questions")||"[]")}function o(e){return`\n    <div class="mui--text-black-54 mui--text-body2">\n    ${new Date(e.date).toLocaleDateString()}\n    ${new Date(e.date).toLocaleTimeString()}\n    </div>\n    <div>${e.text}</div>`}function i(e){return e.length>=10}function a(e,t){const n=document.createElement("div");n.classList.add("modal"),n.innerHTML=`\n    <h1>${e}</h1>\n    <div class="content">${t}</div>\n    `,mui.overlay("on",n)}var s=n(379),c=n.n(s),d=n(795),u=n.n(d),l=n(569),p=n.n(l),f=n(565),m=n.n(f),h=n(216),v=n.n(h),b=n(589),y=n.n(b),g=n(426),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=v(),c()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;const S=document.getElementById("form"),w=S.querySelector("#btn"),L=S.querySelector("#question-input"),q=document.getElementById("plus-btn");function E(t){t.preventDefault();const n=t.target.querySelector("button"),r=t.target.querySelector("#email").value,o=t.target.querySelector("#password").value;disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[AIzaSyDZvAYXAlIE2d39WbLNJgFqipHGLWq78v8]",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>console.log(e)))}(r,o).then(e.fetch).then(T).then((()=>n.disabled=!1))}function T(e){a("string"==typeof e?"Error":"List of questions",e)}window.addEventListener("load",e.renderList),S.addEventListener("submit",(function(t){if(t.preventDefault(),i(L.value)){const t={text:L.value.trim(),date:(new Date).toJSON()};w.disabled=!0,e.create(t).then((()=>{L.value="",L.className="",w.disabled=!1}))}})),q.addEventListener("click",(function(){a("Авторизация",'\n    <form class="mui-form" id="auth-form">\n\n            <div class="mui-textfield">\n                <input type="text" placeholder="Ваша почта" id="email" required>\n                <label for="email">Введите вашу почту</label>\n            </div>\n\n            <div class="mui-textfield">\n              <input type="password" placeholder="Ваш пароль" id="password" required>\n              <label for="password">Введите ваш пароль</label>\n            </div>\n            \n            <button type="submit" class="mui-btn mui-btn--raised mui-btn--danger" id="btn">Отправить</button>\n          </form>\n    '),document.getElementById("auth-form").addEventListener("submit",E,{once:!0})})),L.addEventListener("input",(()=>{w.disabled=!i(L.value)}))})()})();