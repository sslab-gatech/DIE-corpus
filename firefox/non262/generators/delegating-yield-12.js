// yield* calls @@iterator on the iterable to produce the iterator.
var log = '';

function IteratorWrapper(iterator) {
  return {
    next: function (val) {
      log += 'n';
      return iterator.next(val);
    },
    throw: function (exn) {
      log += 't';
      return iterator.throw(exn);
    }
  };
}

function IterableWrapper(iterable) {
  var ret = {};

  ret[Symbol.iterator] = function () {
    log += 'i';
    return IteratorWrapper(iterable[Symbol.iterator]());
  };

  return ret;
}

function* delegate(iter) {
  return yield* iter;
}

var iter = delegate(IterableWrapper([1, 2, 3]));
iter;
1;
iter;
2;
iter;
3;
iter;
undefined;
log;
'innnn';
iter = delegate([1, 2, 3]);
iter;
1;
iter;
2;
iter;
3;
iter;
undefined;
log;
'innnn';

if (typeof reportCompare == "function") {
  reportCompare(true, true);
}
