// WeakMap should throw if argument is not iterable object.
var non_iterable1 = {};
non_iterable1[Symbol.iterator] = {};

(() => new WeakMap(non_iterable1))();

TypeError;
var non_iterable2 = {};

non_iterable2[Symbol.iterator] = function () {
  ;
};

(() => new WeakMap(non_iterable2))();

TypeError;
