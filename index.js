// ==UserScript==
// @name Firepoker Cheat
// @namespace https://santus.dev/
// @version 0.0.1
// @description Reveal Points for Firepoker
// @author Krisantus Wanandi (https://github.com/krisantuswanandi)
// @match https://firepoker.app/**
// @icon https://www.google.com/s2/favicons?sz=64&domain=firepoker.app
// @run-at document-body
// @license MIT
// @supportURL https://github.com/krisantuswanandi/firepoker-cheat
// ==/UserScript==

(function () {

"use strict";

// src/style.ts
function injectStyle() {
  const style = document.createElement("style");
  style.innerHTML = `.card.ng-binding { display: block !important } .card.card-facedown { display: none !important }`;
  document.head.appendChild(style);
}

// src/index.ts
var init = function() {
  injectStyle();
};
init();

})();
