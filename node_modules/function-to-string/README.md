# function-to-string [![Build status](https://travis-ci.org/twolfson/function-to-string.png?branch=master)](https://travis-ci.org/twolfson/function-to-string)

Extract parameters and body of a function into strings

This was built as part of the [gifsockets][] project to pass arbitrary canvas commands with a callback to a [rgba generating PhantomJS server][].

[gifsockets]: https://github.com/twolfson/gifsockets-server
[rgba generating PhantomJS server]: https://github.com/twolfson/phantomjs-pixel-server

## Getting Started
Install the module with: `npm install function-to-string`

```javascript
var functionToString = require('function-to-string');
functionToString(function hello(world) {
  // This is a comment
  return 'some text';
});

// Returns:
{
  name: 'hello',
  params: ['world'],
  body: '\n  // This is a comment\n  return \'some text\';\n'
}
```

## Documentation
We chose to use [esprima][] over [regular expression][] magic. If you are interested in the regular expression route, checkout [AngularJS' source code][]

[esprima]: http://esprima.org/
[regular expression]: http://en.wikipedia.org/wiki/Regular_expression
[AngularJS' source code]: https://github.com/angular/angular.js/blob/61943276f026e632dccae6405a05f79d486ed898/src/auto/injector.js#L33-L74

`functionToString` exposes a single function

```
functionToString(fn)
/**
 * Parses function into AST, extracts parameters and body, and returns information
 * @param {Function|String} fn Function/Source code of function to parse
 * @returns {Object} retObj
 * @returns {String} retObj.name Name of `fn`
 * @returns {String[]} retObj.params Array of parameters for `fn`
 * @returns {String} retObj.body Content of `fn`
 */
```

### Reconstructing a function
Functions can be reconstructed via the [`Function`][] constructor:

[`Function`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

```
var info = {
  name: 'hello',
  params: ['world'],
  body: '\n  // This is a comment\n  return \'some text\';\n'
};
var hello = Function.apply({}, info.params.concat([info.body]));
console.log(hello()); // 'some text'
```

## Examples
`functionToString` accepts function source code as well

```js
// Equivalent to `var fn = (function (hello){return 'world';}).toString()`
var fn = 'function (hello){return \'world\';}';
functionToString(hello);

// Returns:
{
  name: '',
  params: ['hello'],
  body: 'return \'world\';'
}
```

## Donating
Support this project and [others by twolfson][gittip] via [gittip][].

[![Support via Gittip][gittip-badge]][gittip]

[gittip-badge]: https://rawgithub.com/twolfson/gittip-badge/master/dist/gittip.png
[gittip]: https://www.gittip.com/twolfson/

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt) and test via `npm test`.

## Unlicense
As of Nov 16 2013, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
