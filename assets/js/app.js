!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){function n(){var e=setInterval(function(){window.scrollBy(0,15);var t=document.getElementById("container").clientHeight;(window.pageYOffset>=t||t+window.scrollY>=document.body.offsetHeight)&&clearInterval(e)},13)}function r(){var e=document.querySelector("#bingo-intro-slider"),t=e.dataset.delay;t||(t=3e3);var n=document.querySelectorAll("#bingo-intro-slider .slider"),r=document.querySelector(".slider-selector"),o=document.createElement("ul");r.appendChild(o);for(var c=0,l=0;l<n.length;l++){n[l].setAttribute("style","background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('"+n[l].dataset.img+"')");var a=document.createElement("li");o.appendChild(a)}r=document.querySelectorAll(".slider-selector ul li"),n[0].className+=" active",r[0].className+=" active";setInterval(function(){n[c].classList.remove("active"),r[c].classList.remove("active"),++c==n.length&&(c=0),n[c].className+=" active",r[c].className+=" active"},t)}document.getElementById("scroll-to-content").addEventListener("click",function(){n()}),r()}]);