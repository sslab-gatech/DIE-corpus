var BUGNUMBER = 1016936;
var summary = "IteratorNext should throw if the value returned by iterator.next() is not an object.";
print(BUGNUMBER + ": " + summary);
var nonobjs = [null, undefined, 1, true, "a", Symbol.iterator];

function createIterable(v) {
  var iterable = {};

  iterable[Symbol.iterator] = function () {
    return {
      next: function () {
        return v;
      }
    };
  };

  return iterable;
}

function f() {
  ;
}

for (var nonobj of nonobjs) {
  var iterable = createIterable(nonobj);

  (() => [...iterable])();

  TypeError;

  (() => f(...iterable))();

  TypeError;

  (() => {
    for (var x of iterable) {
      ;
    }
  })();

  TypeError;

  (() => {
    var [a] = iterable;
  })();

  TypeError;

  (() => {
    var [...a] = iterable;
  })();

  TypeError;

  (() => Array.from(iterable))();

  TypeError;

  (() => new Map(iterable))();

  TypeError;

  (() => new Set(iterable))();

  TypeError;

  (() => new WeakMap(iterable))();

  TypeError;

  (() => new WeakSet(iterable))();

  TypeError;

  (() => Int8Array.from(iterable))();

  TypeError;

  (() => {
    var g = function* () {
      yield* iterable;
    };

    var v = g();
    v.next();
  })();

  TypeError;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
