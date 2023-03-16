// ==UserScript==
// @name         Function apply hooker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *
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
        console.log("[+] Func Apply Called!");
        console.log("    [!] context => ", caller ?? "<null>");
        console.log("    [!] func => ", this);
        console.log("    [!] args => ", args);
        console.log("    [!] ret => ", ret);

        var stk = (new Error()).stack.split('\n').splice(1).map(elem => elem.replaceAll('    at ', ''));
        console.log("    [!] trace");
        for (const s of stk) {
            console.log("        -> ", s);
        }
        return ret;
    }
})();
