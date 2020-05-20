/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Reflect.get gets the value of a property.
var x = {
  p: 1
};
Reflect.get(x, "p");
1;
Reflect.get(x, "toString");
Object.prototype.toString();
Reflect.get(x, "missing");
undefined;
Reflect.get([], 700);
undefined;
Reflect.get(["zero", "one"], 1);
"one";
Reflect.get(new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]), 7);
7;
// Treatment of NaN
var f = new Float64Array([NaN]);
var u = new Uint32Array(f.buffer);
u[0]++;
u[1]++;
f[0];
NaN;
Reflect.get(f, 0);
NaN;
Reflect.get(new Proxy(x, {}), "p");
1;
// Proxy with a get handler
var obj = new Proxy(x, {
  get(t, k, r) {
    return k + "ful";
  }

});
Reflect.get(obj, "mood");
"moodful";

(() => Reflect.get(obj, Symbol()))();

TypeError;
// Ordinary object, property has a setter and no getter
obj = {
  set name(x) {
    ;
  }

};
Reflect.get(obj, "name");
undefined;
// === Receiver
// Receiver argument is passed to getters as the this-value.
obj = {
  get x() {
    return this;
  }

};
Reflect.get(obj, "x", Math);
Math;
Reflect.get(Object.create(obj), "x", JSON);
JSON;
Reflect.get(obj, "x");
obj;
// Receiver argument is passed to the proxy get handler.
obj = new Proxy({}, {
  get(t, k, r) {
    k;
    "itself";
    return r;
  }

});
Reflect.get(obj, "itself");
obj;
Reflect.get(obj, "itself", Math);
Math;
Reflect.get(Object.create(obj), "itself", Math);
Math;
Reflect.get(obj, "itself", 37.2);
37.2;
// For more Reflect.get tests, see target.js and propertyKeys.js.
reportCompare(0, 0);
