# isobject [![NPM version](https://badge.fury.io/js/isobject.svg)](http://badge.fury.io/js/isobject)  [![Build Status](https://travis-ci.org/jonschlinkert/isobject.svg)](https://travis-ci.org/jonschlinkert/isobject)

> Returns true if the value is an object and not an array or null.

Use [is-plain-object](https://github.com/jonschlinkert/is-plain-object) if you want only objects that are created by the `Object` constructor.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i isobject --save
```

Install with [bower](http://bower.io/)

```sh
$ bower install isobject --save
```

## Usage

```js
var isObject = require('isobject');
```

**True**

All of the following return `true`:

```js
isObject({});
isObject(Object.create({}));
isObject(Object.create(Object.prototype));
isObject(Object.create(null));
isObject({});
isObject(new Foo);
```

**False**

All of the following return `false`:

```js
isObject();
isObject(/foo/);
isObject(function () {});
isObject(1);
isObject([]);
isObject(undefined);
isObject(null);
```

## Related projects

* [assign-deep](https://github.com/jonschlinkert/assign-deep): Deeply assign the enumerable properties of source objects to a destination object.
* [extend-shallow](https://github.com/jonschlinkert/extend-shallow): Extend an object with the properties of additional objects. node.js/javascript util.
* [is-plain-object](https://github.com/jonschlinkert/is-plain-object): Returns true if an object was created by the `Object` constructor.
* [is-extendable](https://github.com/jonschlinkert/is-extendable): Returns true if a value is any of the object types: array, regexp, plain object,… [more](https://github.com/jonschlinkert/is-extendable)
* [is-equal-shallow](https://github.com/jonschlinkert/is-equal-shallow): Does a shallow comparison of two objects, returning false if the keys or values differ.
* [kind-of](https://github.com/jonschlinkert/kind-of): Get the native type of a value.

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/isobject/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2014-2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the [MIT](https://github.com/jonschlinkert/isobject/blob/master/LICENSE) license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on July 04, 2015._