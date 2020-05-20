// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 430133;
var summary = 'ES5 Object.defineProperty(O, P, Attributes)';
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var o = [];
Object.defineProperty(o, 0, {
  value: 17
});
var desc = Object.getOwnPropertyDescriptor(o, 0);
desc !== undefined;
true;
desc.value;
17;
desc.enumerable;
false;
desc.configurable;
false;
desc.writable;
false;
desc = Object.getOwnPropertyDescriptor(o, "length");
desc !== undefined;
true;
desc.enumerable;
false;
desc.configurable;
false;
desc.writable;
true;
desc.value;
1;
o.length;
1;
Object.defineProperty(o, "foobar", {
  value: 42,
  enumerable: false,
  configurable: true
});
o.foobar;
42;
desc = Object.getOwnPropertyDescriptor(o, "foobar");
desc !== undefined;
true;
desc.value;
42;
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
false;
var called = false;
o = {
  set x(a) {
    called = true;
  }

};
Object.defineProperty(o, "x", {
  get: function () {
    return "get";
  }
});
desc = Object.getOwnPropertyDescriptor(o, "x");
"set" in desc;
true;
"get" in desc;
true;
called;
false;
o.x = 13;
called;
true;

var toSource = Object.prototype.toSource || function () {
  ;
};

toSource.call(o); // a test for this not crashing

var called = false;
var o = Object.defineProperty({}, "foo", {
  get: function () {
    return 17;
  },
  set: function (v) {
    called = true;
  }
});
o.foo;
17;
o.foo = 42;
called;
true;

/*
 * XXX need tests for Object.defineProperty(array, "length", { ... }) when we
 * support it!
 */

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
