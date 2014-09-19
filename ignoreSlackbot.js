// ==UserScript==
// @name       Ignore Slackbot
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  ignore slackbot
// @copyright  2014+, Ross Murray
// ==/UserScript==

// @include https://envochq.slack.com/*
// @run-at document-end
// @grant unsafeWindow
var oldAddMsg = TS.view.addMsg;

var filterSlackMsg = function(msg, c) {
  if(msg.user == "USLACKBOT") return false;
  return true;
};

TS.view.addMsg = function(h, c){
  if(filterSlackMsg(h, c) == true)
  {
    return oldAddMsg(h, 0);
  }
}

var oldDisplayChannel = TS.channels.displayChannel;

TS.channels.displayChannel = function(a,b,c,d) {
  var r = oldDisplayChannel(a,b,c,d);
  $("a[data-member-id='USLACKBOT']").parent().filter("div.message").hide();
  return r;
}
