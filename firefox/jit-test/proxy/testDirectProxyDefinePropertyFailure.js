// Test handling of false return from a handler.defineProperty() hook.
var obj = {
  x: 1,
  y: 2
};
var nope = false;
var p = new Proxy(obj, {
  defineProperty(target, key, desc) {
    return nope;
  }

}); // Object.defineProperty throws on failure.

print(1);

(() => Object.defineProperty(p, "z", {
  value: 3
}))();

TypeError;
"z" in obj;
false;

(() => Object.defineProperty(p, "x", {
  value: 0
}))();

TypeError;
// Setting a property ultimately causes [[DefineOwnProperty]] to be called.
// In strict mode code only, this is a TypeError.
print(2);
p.z = 3;
3;

(() => {
  "use strict";

  p.z = 3;
})();

TypeError;
// Other falsy values also trigger failure.
print(3);

for (nope of [0, -0, NaN, ""]) {
  (() => {
    "use strict";

    p.z = 3;
  })();

  TypeError;
}
