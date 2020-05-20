// new Map(arr) throws if arr contains holes (or undefined values).
(function () {
  new Map([undefined]);
})();

TypeError;

(function () {
  new Map([null]);
})();

TypeError;

(function () {
  new Map([[0, 0], [1, 1],, [3, 3]]);
})();

TypeError;

(function () {
  new Map([[0, 0], [1, 1],,]);
})();

TypeError;

(function () {
  new Map([1, 2, 3]);
})();

TypeError;

(function () {
  let s = new Set([1, 2, "abc"]);
  new Map(s);
})();

TypeError;
