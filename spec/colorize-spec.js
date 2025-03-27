// SPDX-FileCopyrightText: Copyright (c) 2018 Yegor Bugayenko
// SPDX-License-Identifier: MIT

/**
(The MIT License)

Copyright (c) 2018 Yegor Bugayenko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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
