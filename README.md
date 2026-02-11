# A jQuery Plugin for Conditional Colorization

[![DevOps By Rultor.com](https://www.rultor.com/b/yegor256/colorizejs)](https://www.rultor.com/p/yegor256/colorizejs)

[![gulp](https://github.com/yegor256/colorizejs/actions/workflows/gulp.yml/badge.svg)](https://github.com/yegor256/colorizejs/actions/workflows/gulp.yml)
[![PDD status](https://www.0pdd.com/svg?name=yegor256/colorizejs)](https://www.0pdd.com/p?name=yegor256/colorizejs)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/yegor256/colorizejs/blob/master/LICENSE.txt)
[![NPM version](https://badge.fury.io/js/colorizejs.svg)](https://badge.fury.io/js/colorizejs)

It's a simple [jQuery](https://jquery.com/) plugin
  to colorize data elements according to their values:

```javascript
$('#foo').colorizejs({ 500: 'green', 0: 'red' });
```

If the value of `#foo` is larger than 500, its color will be set to `green`,
  if it is larger than zero, it will be set to `red`,
  otherwise it won't be touched.

You can also use classes instead of colors by prepending them with a dot:

```javascript
$('#foo').colorizejs({ 500: '.green', 0: '.red' });
```

The easiest way is to just include it in your HTML from the
  [RawGit CDN](https://rawgit.com/):

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.rawgit.com/yegor256/colorizejs/gh-pages/colorizejs.min.js"/>
  </head>
</html>
```

Otherwise, you can download the
  [latest release](https://github.com/yegor256/colorizejs/releases).

You can also install it with npm:

```bash
npm install colorizejs
```

## Example

A minimal `example.html` file is included to demonstrate
  how ColorizeJS colours numeric values
  based on defined rules.

To try it:

1. Open `example.html` in a browser.
2. See the number "350" appear in red according to the rules.
3. The rules are: `{ 500: '.green', 0: '.red' }`.

This file is mainly for users or developers who want a quick way to verify
  that the plugin works after cloning the repository.

## How to Contribute

First, make sure you can build it locally:

```bash
npm install --global gulp-cli
gulp
```

The build has to be clean.
If it's not, [submit an issue](https://github.com/yegor256/colorizejs/issues).

Then, make your changes, make sure the build is still clean,
  and [submit a pull request][guidelines].

[guidelines]: https://www.yegor256.com/2014/04/15/github-guidelines.html
