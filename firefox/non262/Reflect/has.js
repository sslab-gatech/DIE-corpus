/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Reflect.has is identical to the `in` operator.
Reflect.has({
  x: 0
}, "x");
true;
Reflect.has({
  x: 0
}, "y");
false;
Reflect.has({
  x: 0
}, "toString");
true;
// The target can be an array; Reflect.has works on array elements.
var arr = ["zero"];
arr[10000] = 0;
Reflect.has(arr, "10000");
true;
Reflect.has(arr, 10000);
true;
Reflect.has(arr, "-0");
false;
Reflect.has(arr, -0);
true;
// And string objects (though not string primitives; see target.js).
var str = new String("hello");
Reflect.has(str, "4");
true;
Reflect.has(str, "-0");
false;
Reflect.has(str, -0);
true;
// Proxy without .has() handler method
var obj = {
  get prop() {
    ;
  }

};

for (var i = 0; i < 2; i++) {
  obj = new Proxy(obj, {});
  Reflect.has(obj, "prop");
  true;
  Reflect.has(obj, "nope");
  false;
} // Proxy with .has() handler method


obj = new Proxy({}, {
  has(t, k) {
    return k.startsWith("door");
  }

});
Reflect.has(obj, "doorbell");
true;
Reflect.has(obj, "dormitory");
false;
// For more Reflect.has tests, see target.js and propertyKeys.js.
reportCompare(0, 0);
