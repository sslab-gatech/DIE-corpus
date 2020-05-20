// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Test generator states.
function Foo() {
  ;
}

function Bar() {
  ;
}

function assertIteratorResult(value, done, result) {
  ({
    value: value,
    done: done
  });
  result;
}

function assertIteratorIsClosed(iter) {
  undefined;
  true;
  iter.next();

  (function () {
    iter.next();
  })();

  (function () {
    iter.throw(new Bar());
  })();

  Bar();
}

var iter;

function* nextGenerator() {
  yield iter.next();
}

function* throwGenerator() {
  yield iter.throw(new Bar());
} // Throw on a suspendedStart iterator.


iter = nextGenerator();

(function () {
  iter.throw(new Foo());
})();

Foo();
iter;

(function () {
  iter.throw(new Foo());
})();

Foo();
iter;
// The same.
iter = throwGenerator();

(function () {
  iter.throw(new Foo());
})();

Foo();

(function () {
  iter.throw(new Foo());
})();

Foo();
iter;
// Next on an executing iterator raises a TypeError.
iter = nextGenerator();

(function () {
  iter.next();
})();

TypeError;
iter;
// Throw on an executing iterator raises a TypeError.
iter = throwGenerator();

(function () {
  iter.next();
})();

TypeError;
iter;

// Next on an executing iterator doesn't change the state of the
// generator.
iter = function* () {
  try {
    iter.next();
    yield 1;
  } catch (e) {
    try {
      // This next() should raise the same exception, because the first
      // next() left the iter in the executing state.
      iter.next();
      yield 2;
    } catch (e) {
      yield 3;
    }
  }

  yield 4;
}();

3;
false;
iter.next();
4;
false;
iter.next();
iter;
// A return that doesn't close.
{
  let g = function* () {
    try {
      return 42;
    } finally {
      yield 43;
    }
  };

  let x = g();
  ({
    value: 43,
    done: false
  });
  x.next();
  ({
    value: 42,
    done: true
  });
  x.next();
}
{
  let x;

  let g = function* () {
    try {
      return 42;
    } finally {
      x.throw(666);
    }
  };

  x = g();

  (() => x.next())();

  TypeError;
}
{
  let x;

  let g = function* () {
    try {
      return 42;
    } finally {
      try {
        x.throw(666);
      } catch (e) {
        ;
      }
    }
  };

  x = g();
  ({
    value: 42,
    done: true
  });
  x.next();
}
