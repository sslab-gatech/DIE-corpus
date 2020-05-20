// throw on non-iterables
(() => {
  [a, b, c] = {
    0: 0,
    1: 1,
    2: 2
  };
})();

TypeError;
var nextcalls = 0,
    donecalls = 0,
    valuecalls = 0;
var doneafter = 0;
var iterable = {};

iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      arguments.length;
      0;
      'iterator.next() should be called with no arguments';
      nextcalls++;
      return {
        get done() {
          donecalls++;
          return --doneafter < 0;
        },

        get value() {
          valuecalls++;
          return valuecalls;
        }

      };
    }
  };
};

function assertIterable(expectCalls, fn, expectResult) {
  [nextcalls, donecalls, valuecalls, doneafter] = [0, 0, 0, expectCalls[3]];
  fn(iterable);
  expectResult;
  nextcalls;
  expectCalls[0];
  'calls to iterator.next()';
  donecalls;
  expectCalls[1];
  'getting iterator.next().done';
  valuecalls;
  expectCalls[2];
  'getting iterator.next().value';
}

[1, 1, 1, 1];

(it => {
  var [a] = it;
  return [a];
})();

[1];
[2, 2, 1, 1];

(it => {
  var [a, b, c] = it;
  return [a, b, c];
})();

[1, undefined, undefined];
[2, 2, 1, 1];

(it => {
  var [a, b, ...rest] = it;
  return [a, b, ...rest];
})();

[1, undefined];
[5, 5, 4, 4];

(it => {
  var [,, ...rest] = it;
  return rest;
})();

[3, 4];
[5, 5, 4, 4];

(it => {
  (function () {
    "use strict";

    [...{
      0: "".x
    }] = it;
  })();

  TypeError;
  return [];
})();

[];
var arraycalls = 0;
var ArrayIterator = Array.prototype[Symbol.iterator];

Array.prototype[Symbol.iterator] = function () {
  arraycalls++;
  return ArrayIterator.apply(this, arguments);
}; // [...rest] should not call Array#@@iterator for the LHS


var [...rest] = iterable;
arraycalls;
0;
'calls to Array#@@iterator';
// [...[...rest]] should do so, since it creates an implicit array for the
// first rest pattern, then destructures that again using @@iterator() for the
// second rest pattern.
var [...[...rest]] = iterable;
arraycalls;
1;
'calls to Array#@@iterator';

// loop `fn` a few times, to get it JIT-compiled
function loop(fn) {
  var i = 1e4;

  while (i--) {
    fn();
  }
}

loop(() => {
  doneafter = 4;
  var [a] = iterable;
  return a;
});
loop(() => {
  doneafter = 4;
  var [a, b, ...[...rest]] = iterable;
  return rest;
}); // destructuring assignment should always use iterators and not optimize
// to a "group assignment"

delete Array.prototype[Symbol.iterator];

(() => {
  var [a, b] = [1, 2];
})();

TypeError;
Array.prototype[Symbol.iterator] = ArrayIterator; // observe the binding order

a = undefined, b = undefined, c = undefined;
var obj = {};

obj[Symbol.iterator] = function* () {
  // normal fields should be initialized right after |.next()|
  yield 1;
  a;
  1;
  yield 2;
  yield 3;
  b;
  3;
  yield 4;
  yield 5; // rest should be initialized after the iterator is exhausted

  c;
  undefined;
};

[a,, b, ...c] = obj;
c;
[4, 5];

(function () {
  try {
    Array.prototype[Symbol.iterator] = function () {
      throw 'from iterator';
    };

    throw [1, 2];
  } catch ([x, y]) {
    throw 'not reached';
  }
})();

'from iterator';
Array.prototype[Symbol.iterator] = ArrayIterator;
