// ==UserScript==
// @name         Websocket Hooker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @run-at       document-start
// ==/UserScript==


(function() {
    'use strict';
    window.__websockets = [];
    const __OrgWebSocket = window.WebSocket;
    window.WebSocket = function(...args) {
        const socket = new __OrgWebSocket(...args);
        window.__websockets.push(socket);
        return socket;
    }
})();
