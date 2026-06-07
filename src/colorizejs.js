// SPDX-FileCopyrightText: Copyright (c) 2018 Yegor Bugayenko
// SPDX-License-Identifier: MIT

$.fn.colorize = function(colors) {
  var data = parseFloat(this.text());
  var keys = Object.keys(colors)
    .map(function (k) { return parseInt(k); })
    .sort(function (a,b) { return a - b; })
    .reverse();
  var used = '';
  for (var i = 0; i < keys.length; ++i) {
    var max = keys[i];
    if (data >= max) {
      var c = colors[max];
      if (c.startsWith('.')) {
        this.addClass(c.substring(1));
      } else {
        this.css('color', c);
      }
      used = c;
      break;
    }
  }
  for (var i = 0; i < keys.length; ++i) {
    var u = colors[keys[i]];
    if (used != u) {
      if (u.startsWith('.')) {
        this.removeClass(u.substring(1));
      }
    }
  }
  return this;
};
