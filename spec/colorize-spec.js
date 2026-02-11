// SPDX-FileCopyrightText: Copyright (c) 2018 Yegor Bugayenko
// SPDX-License-Identifier: MIT

const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
global.$ = require('jquery')(window);
require('../src/colorizejs');

describe('colorizejs', () => {
  const div = $('<div/>');
  const settings = { 30: '.highest', 20: '.middle', 10: '.lowest' };
  it('should set the applicable class', () => {
    div.text('35').colorize(settings);
    expect(div.attr('class')).toBe('highest');
    div.text('25').colorize(settings);
    expect(div.attr('class')).toBe('middle');
    div.text('15').colorize(settings);
    expect(div.attr('class')).toBe('lowest');
    div.text('5').colorize(settings);
    expect(div.attr('class')).toBe('');
  });
});

describe('colorizejs', () => {
  const div = $('<div style="color:yellow;"/>');
  const settings = { 30: 'red', 20: '#ddd', 10: 'green' };
  it('should set the applicable color', () => {
    div.text('35').colorize(settings);
    expect(div.attr('style')).toBe('color: red;');
    div.text('25').colorize(settings);
    expect(div.attr('style')).toBe('color: rgb(221, 221, 221);');
    div.text('15').colorize(settings);
    expect(div.attr('style')).toBe('color: green;');
    div.text('5').colorize(settings);
    expect(div.attr('style')).toBe('color: green;');
  });
});
