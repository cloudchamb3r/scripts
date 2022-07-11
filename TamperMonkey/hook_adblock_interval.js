// ==UserScript==
// @name         hook adblock interval
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hook adblock interval for some sites..
// @author       jjajjajja
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at        document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var originalSetInterval = window.setInterval;

  window.setInterval = function (f, d) {
    var funcString = f.toString();
    var blockKeywords = ["ins.adsbygoogle"];
    for (let keyword of blockKeywords) {
      if (!funcString.includes(keyword)) {
        originalSetInterval(f, d);
      }
    }
  };
})();
