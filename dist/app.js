!function(e){function t(t){for(var i,a,s=t[0],p=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(e[i]=p[i]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var p=n[s];0!==r[p]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={1:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var s=window.webpackJsonp=window.webpackJsonp||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=p;o.push([1,0]),n()}([,function(e,t,n){e.exports=n(3)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var i=n(0);var r=[function(e,t,n){return[".center",t,"{text-align:center}.link",t,"{border:none;padding:10px;border-radius:5px;text-decoration:none;background-color:#ff6000;color:#fff;margin-left:33%;margin-right:33%;display:inline-block;margin-top:1em}.info",t,"{color:#000;background-color:#e4f2f8;margin:auto;padding:15px 10px;text-align:left;width:300px;border-radius:5px}.code",t,"{font-family:monospace}.container",t,"{margin-top:30px}img",t,"{max-width:150px}.greeting",t,"{height:75px}"].join("")}];var o=[function(e,t,n){return[".greet",t,"{font-size:xx-large}.fade-fast",t,"{opacity:0;animation:fade-in 1s}.fade-slow",t,"{opacity:0;animation:fade-in 10s}.fade-medium",t,"{opacity:0;animation:fade-in 2s}@keyframes fade-in{0%{opacity:0}35%{opacity:1}65%{opacity:1}to{opacity:0}}.hide",t,"{opacity:0}"].join("")}];function a(e,t,n,i){const{d:r,h:o,b:a}=e,{_m0:s}=i;return[o("div",{className:t.animationClass,key:1,on:{animationend:s||(i._m0=a(t.handleAnimationEnd))}},[o("span",{classMap:{greet:!0},key:0},[r(t.greeting)])])]}var s=Object(i.registerTemplate)(a);a.stylesheets=[],o&&a.stylesheets.push.apply(a.stylesheets,o),a.stylesheetTokens={hostAttribute:"my-greeting-_greeting-host",shadowAttribute:"my-greeting-_greeting"};const p=["Little by little, one traveles far. - Tolkien","If you want to go fast, go alone. If you want to go far, go together."],l={slow:"fade-slow",fast:"fade-fast",medium:"fade-medium"};class c extends i.LightningElement{constructor(...e){super(...e),this.animationSpeed="slow",this.index=0,this.isAnimating=!0}set speed(e){this.animationSpeed=l[e]?e:"slow",this.isAnimating=!0}get speed(){return this.animationSpeed}get greeting(){return p[this.index]}get animationClass(){return this.isAnimating?l[this.speed]:"hide"}handleAnimationEnd(){this.isAnimating=!1,this.index=(this.index+1)%p.length,setTimeout(()=>this.updateGreeting(),500)}updateGreeting(){this.isAnimating=!0}}Object(i.registerDecorators)(c,{publicProps:{speed:{config:3}},fields:["animationSpeed","index","isAnimating"]});var u=Object(i.registerComponent)(c,{tmpl:s});function d(e,t,n,i){const{c:r,h:o}=e;return[o("div",{classMap:{center:!0,greeting:!0},key:1},[r("my-greeting",u,{props:{speed:"slow"},key:0},[])])]}var f=Object(i.registerTemplate)(d);d.stylesheets=[],r&&d.stylesheets.push.apply(d.stylesheets,r),d.stylesheetTokens={hostAttribute:"my-app-_app-host",shadowAttribute:"my-app-_app"};class g extends i.LightningElement{}var h=Object(i.registerComponent)(g,{tmpl:f});const m=Object(i.createElement)("my-app",{is:h});document.querySelector("#main").appendChild(m)}]);