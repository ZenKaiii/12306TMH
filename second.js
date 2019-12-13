// ==UserScript==
// @name         12306_secondstep
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://kyfw.12306.cn/otn/confirmPassenger/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

window.addEventListener('dblclick',function(){

  let ticketType = this.document.getElementById("ticketType_1");
  ticketType.click();
  // let options = ticketType.getElementsByTagName("option");
  // options[2].checked = true;
  // options[2].click();

  // let btn = this.document.getElementById("normalPassenger_0");
  // btn.click();
})
})();