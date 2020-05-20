/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Reflect.deleteProperty deletes properties.
var obj = {
  x: 1,
  y: 2
};
Reflect.deleteProperty(obj, "x");
true;
obj;
({
  y: 2
});
var arr = [1, 1, 2, 3, 5];
Reflect.deleteProperty(arr, "3");
true;
arr;
[1, 1, 2,, 5];
Reflect.deleteProperty({}, "q");
true;
// Or if it's inherited.
var proto = {
  x: 1
};
Reflect.deleteProperty(Object.create(proto), "x");
true;
proto.x;
1;
// Return false if asked to delete a non-configurable property.
var arr = [];
Reflect.deleteProperty(arr, "length");
false;
arr.hasOwnProperty("length");
true;
Reflect.deleteProperty(this, "undefined");
false;
this.undefined;
void 0;
// Return false if a Proxy's deleteProperty handler returns a false-y value.
var value;
var proxy = new Proxy({}, {
  deleteProperty(t, k) {
    return value;
  }

});

for (value of [true, false, 0, "something", {}]) {
  Reflect.deleteProperty(proxy, "q");
  !!value;
} // If a Proxy's handler method throws, the error is propagated.


proxy = new Proxy({}, {
  deleteProperty(t, k) {
    throw "vase";
  }

});

(() => Reflect.deleteProperty(proxy, "prop"))();

"vase";
// Throw a TypeError if a Proxy's handler method returns true in violation of
// the object invariants.
proxy = new Proxy(Object.freeze({
  prop: 1
}), {
  deleteProperty(t, k) {
    return true;
  }

});

(() => Reflect.deleteProperty(proxy, "prop"))();

TypeError;

// === Deleting elements from `arguments`
// Non-strict arguments element becomes unmapped
function f(x, y, z) {
  Reflect.deleteProperty(arguments, "0");
  true;
  arguments.x = 33;
  return x;
}

f(17, 19, 23);
17;

// Frozen non-strict arguments element
function testFrozenArguments() {
  Object.freeze(arguments);
  Reflect.deleteProperty(arguments, "0");
  false;
  arguments[0];
  "zero";
  arguments[1];
  "one";
}

testFrozenArguments("zero", "one"); // For more Reflect.deleteProperty tests, see target.js and propertyKeys.js.

reportCompare(0, 0);
