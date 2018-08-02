[![DevOps By Rultor.com](http://www.rultor.com/b/yegor256/colorizejs)](http://www.rultor.com/p/yegor256/colorizejs)

[![Build Status](https://travis-ci.org/yegor256/colorizejs.svg)](https://travis-ci.org/yegor256/colorizejs)
[![PDD status](http://www.0pdd.com/svg?name=yegor256/colorizejs)](http://www.0pdd.com/p?name=yegor256/colorizejs)

It's a simple jQuery plugin to colorize data elements according to its value:

```javascript
$('#foo').colorizejs({ 500: 'green', 0: 'red' });
```

If the value of `#foo` is larger than 500, its color will be set to `green`,
if larger than zero, it will be set to `red`, otherwise it will not be touched.

You can also use classes instead of colors, but prepending them with a dot:

```javascript
$('#foo').colorizejs({ 500: '.green', 0: '.red' });
```

The easiest way is to just include it in your HTML from the CDN:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.rawgit.com/yegor256/colorizejs/gh-pages/colorizejs.min.js"/>
  </head>
</html>
```

Download the [latest release](https://github.com/yegor256/colorizejs/releases).

You can also install it with bower:

```bash
$ bower install colorizejs
```

Or with npm:

```bash
$ npm install colorizejs
```

## How to Contribute

First, make sure you can build it locally:

```bash
$ npm install gulp
$ gulp
```

The build has to be clean. If it's not, [submit an issue](https://github.com/yegor256/colorizejs/issues).

Then, make your changes, make sure the build is still clean,
and [submit a pull request](https://www.yegor256.com/2014/04/15/github-guidelines.html).
