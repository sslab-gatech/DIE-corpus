// map.iterator() and iter.next() are non-generic but work on cross-compartment wrappers.
var g = newGlobal();
var iterator_fn = Map.prototype[Symbol.iterator];

(function () {
  iterator_fn.call({});
})();

TypeError;

(function () {
  iterator_fn.call(new Set());
})();

TypeError;
var mapw = g.eval("new Map([['x', 1], ['y', 2]])");
iterator_fn.call(mapw).next().value;
["x", 1];
var next_fn = new Map()[Symbol.iterator]().next;

(function () {
  next_fn.call({});
})();

TypeError;

(function () {
  next_fn.call(new Set()[Symbol.iterator]());
})();

TypeError;
var iterw = mapw[Symbol.iterator]();
next_fn.call(iterw).value;
["x", 1];
next_fn.call(iterw).value;
["y", 2];
next_fn.call(iterw).done;
true;
