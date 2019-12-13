// ==UserScript==
// @name         12306
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://kyfw.12306.cn/otn/leftTicket/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

window.addEventListener('dblclick',function(){
  let info = {
    train: "Z129",
  }

  let table = this.document.getElementById("queryLeftTable");
  let trs = table.getElementsByTagName("tr");
  for(let i=0; i<trs.length; i++){
    if(!trs[i].hasChildNodes()){
      continue;
    }
    let trainName = trs[i].getElementsByClassName("number")[0].innerText;
    if (trainName===info.train){
      let btn = trs[i].getElementsByClassName("btn72")[0];
      btn.click();
    }
  }
})
})();