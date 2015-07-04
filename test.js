/* deps: mocha */
var assert = require('assert');
var isObject = require('./');

it('should be true when the value is an object.', function () {
  assert(isObject({}));
  assert(isObject(Object.create({})));
  assert(isObject(Object.create(Object.prototype)));
  assert(isObject(Object.create(null)));

  function Foo() {}
  assert(isObject(new Foo));
  assert(isObject(new Foo()));
});

it('should be false when the value is not an object.', function () {
  assert(!isObject('whatever'));
  assert(!isObject(/foo/));
  assert(!isObject(1));
  assert(!isObject(function () {}));
  assert(!isObject([]));
  assert(!isObject(['foo', 'bar']));
  assert(!isObject());
  assert(!isObject(undefined));
  assert(!isObject(null));
});
