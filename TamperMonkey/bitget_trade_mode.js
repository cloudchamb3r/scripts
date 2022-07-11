// ==UserScript==
// @name         💸 TradeMode!
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  make trading view wider
// @author       You
// @run-at       context-menu
// @match        https://www.bitget.com/mix/usdt/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bitget.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  document.getElementsByClassName("btjemE")[0].remove();
  document.getElementsByClassName("gOZfAL")[0].remove();
  document.getElementsByClassName("fIUiIW")[0].remove();
  document.getElementsByClassName("liTBVH")[3].style.height = "750px";
  document.documentElement.requestFullscreen();
})();
