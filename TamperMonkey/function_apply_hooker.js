// ==UserScript==
// @name         Function apply hooker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';
    console.log('Function apply hooker is running...')

    window.Function.prototype.__apply = window.Function.prototype.apply;

    window.Function.prototype.apply = function (caller, ...args) {
        const ret = this.__apply(caller, ...args);
        console.log("[Func Apply]", caller ?? this, args, ret);
        return ret;
    }
    // Your code here...
})();
