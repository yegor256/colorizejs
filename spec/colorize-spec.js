const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
global.$ = require('jquery')(window);
require('../src/colorize');

describe('colorize', () => {

  const div = $('<div/>');
  const settings = { 30: 'highest', 20: 'middle', 10: 'lowest' };

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
