!function(e){function t(t){for(var r,a,c=t[0],l=t[1],s=t[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([6,1]),n()}([,,function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(2);var r=n(0),o=n(1);o.a.registerPlugin();var i=document.querySelector(".menu"),a=document.querySelectorAll(".menu line"),c=document.querySelector(".nav-open"),l=document.querySelector(".contact"),s=document.querySelector(".social"),u=new r.c({paused:!0,reversed:!0});function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}u.to(c,.5,{y:0}),u.fromTo(l,.5,{opacity:0,y:10},{opacity:1,y:0},"-=0.1"),u.fromTo(s,.5,{opacity:0,y:10},{opacity:1,y:0},"-=0.5"),u.fromTo(a,.2,{stroke:"white"},{stroke:"black"},"-=1"),u.to(a[1],.2,{x:13.5},"-=0.5"),u.to(a[2],.2,{x:25},"-=0.5"),i.addEventListener("click",(function(){u.reversed()?u.play():u.reverse()}));var p=function(){function e(t){var n=t.img1,r=t.img2,o=t.name,i=t.title,a=t.date,c=t.classType,l=t.link;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.img1=n,this.img2=r,this.date=a,this.title=i,this.name=o,this.classType=c,this.link=l}var t,n,r;return t=e,(n=[{key:"render",value:function(e){var t=document.querySelector(e);if(t){var n=document.createElement("section"),r='\n    <div class="page '.concat(this.classType,'">\n        <figcaption class="details">\n          <h1>').concat(this.name,"</h1>\n          <h2>").concat(this.title,"</h2>\n          <p>").concat(this.date,'</p>\n        </figcaption>\n\n        <figure class="hero">\n        <a href="').concat(this.link,'">\n          <img class="model-left" src="').concat(this.img1,'" alt="model">\n          <img class="model-right" src="').concat(this.img2,'" alt="model">\n        </a>\n        </figure>\n    ');n.innerHTML=r,t.appendChild(n)}}}])&&f(t.prototype,n),r&&f(t,r),e}();new p({link:"photo.html",img1:"assets/img/model-left.jpg",img2:"assets/img/model-right.jpg",name:"Elena Morell",title:"Photographer",date:"02/08/2018",classType:"photographer"}).render("#main"),new p({link:"chef.html",img1:"assets/img/chef-left.jpg",img2:"assets/img/chef-right.jpg",name:"John Savos",title:"Pro Chef",date:"15/05/2015",classType:"chef"}).render("#main"),new p({link:"barber.html",img1:"assets/img/hair-left.jpg",img2:"assets/img/hair-right.jpg",name:"Andrew Mayer",title:"Pro Hairstylist",date:"06/04/2018",classType:"barber"}).render("#main"),o.a.registerPlugin(),function(){var e=new r.c({onStart:function(){t.forEach((function(e){e.style.pointerEvents="none"}))},onComplete:function(){t.forEach((function(e){e.style.pointerEvents="all"}))}}),t=document.querySelectorAll(".slide"),n=document.querySelectorAll(".page"),o=["radial-gradient(#2B3760, #0B1023)","radial-gradient(#4E3022, #161616)","radial-gradient(#4E4342, #151515)"],i=0,a=0;function c(t){var r=n[t],a=n[i],c=r.querySelector(".hero .model-left"),l=r.querySelector(".hero .model-right"),s=a.querySelector(".hero .model-left"),u=a.querySelector(".hero .model-right"),f=r.querySelector(".details"),p=document.querySelector(".portfolio");e.fromTo(s,.3,{y:"-10%"},{y:"-100%"}),e.fromTo(u,.3,{y:"10%"},{y:"-100%"},"-=0.2"),e.to(p,.3,{backgroundImage:o[t]}),e.fromTo(a,.3,{opacity:1,pointerEvents:"all"},{opacity:0,pointerEvents:"none"}),e.fromTo(r,.3,{opacity:0,pointerEvents:"none"},{opacity:1,pointerEvents:"all"}),e.fromTo(c,.3,{y:"-100%"},{y:"-10%"},"-=0.6"),e.fromTo(l,.3,{y:"-100%"},{y:"10%"},"-=0.8"),e.fromTo(f,.3,{opacity:0,y:200},{opacity:1,y:0}),e.set([c,l],{clearProps:"all"}),i=t}t.forEach((function(e,n){e.addEventListener("click",(function(){var e;e=this,t.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),c(n),a=n}))}));var l=function(e){var n,r;e.deltaY>0?a+=1:a-=1,a>2?a=0:a<0&&(a=2),n=a,r=document.querySelectorAll(".slide")[n],t.forEach((function(e){e.classList.remove("active")})),r.classList.add("active"),c(a)};function s(e,t){var n;return function(){var r=arguments,o=this;n||(e.apply(o,r),n=!0,setTimeout((function(){return n=!1}),t))}}document.addEventListener("wheel",s(l,1500)),document.addEventListener("touchmove",s(l,1500))}()}]);