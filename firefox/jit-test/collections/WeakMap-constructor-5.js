// new WeakMap(arr) throws if arr contains holes (or undefined values).
var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 43;
var k3 = {};
var v3 = {};

(function () {
  new WeakMap([undefined]);
})();

TypeError;

(function () {
  new WeakMap([null]);
})();

TypeError;

(function () {
  new WeakMap([[k1, v1], [k2, v2],, [k3, k3]]);
})();

TypeError;

(function () {
  new WeakMap([[k1, v1], [k2, v2],,]);
})();

TypeError;

(function () {
  new WeakMap([1, 2, 3]);
})();

TypeError;

(function () {
  let s = new Set([1, 2, "abc"]);
  new WeakMap(s);
})();

TypeError;
