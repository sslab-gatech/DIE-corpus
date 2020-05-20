// map.iterator() and iter.next() are non-generic but work on cross-compartment wrappers.
var g = newGlobal();
var iterator_fn = Set.prototype[Symbol.iterator];

(function () {
  iterator_fn.call({});
})();

TypeError;

(function () {
  iterator_fn.call(new Map());
})();

TypeError;
var setw = g.eval("new Set(['x', 'y'])");
iterator_fn.call(setw);
"x";
var next_fn = new Set()[Symbol.iterator]().next;

(function () {
  next_fn.call({});
})();

TypeError;

(function () {
  next_fn.call(new Map()[Symbol.iterator]());
})();

TypeError;
var iterw = setw[Symbol.iterator]();
next_fn.call(iterw);
"x";
false;
next_fn.call(iterw);
"y";
false;
next_fn.call(iterw);
undefined;
true;
