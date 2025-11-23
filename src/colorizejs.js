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

$.fn.colorize = function (colors) {
	const data = parseFloat(this.text());
	const sortedThresholds = getSortedThresholds(colors);
	const appliedColor = findAndApplyColor(this, data, sortedThresholds, colors);
	cleanupUnusedColors(this, sortedThresholds, colors, appliedColor);
	return this;
};
function getSortedThresholds(colors) {
	return Object.keys(colors)
		.map((key) => parseInt(key))
		.sort((a, b) => b - a);
}
function findAndApplyColor(element, data, thresholds, colors) {
	for (let i = 0; i < thresholds.length; i++) {
		const threshold = thresholds[i];
		if (data >= threshold) {
			const colorValue = colors[threshold];
			applyColor(element, colorValue);
			return colorValue;
		}
	}
	return '';
}
function applyColor(element, colorValue) {
	if (colorValue.startsWith('.')) {
		element.addClass(colorValue.substring(1));
	} else {
		element.css('color', colorValue);
	}
}
function cleanupUnusedColors(element, thresholds, colors, appliedColor) {
	for (let i = 0; i < thresholds.length; i++) {
		const colorValue = colors[thresholds[i]];
		if (appliedColor !== colorValue && colorValue.startsWith('.')) {
			element.removeClass(colorValue.substring(1));
		}
	}
}
