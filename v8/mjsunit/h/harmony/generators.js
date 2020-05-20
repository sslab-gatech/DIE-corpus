// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function MaybeOptimizeOrDeoptimize(f) {
  let x = Math.random(); // --random-seed makes this deterministic

  if (x <= 0.33) {
    ;
  } else {
    if (x <= 0.66) {
      ;
    }
  }
}

function Next(generator, ...args) {
  return generator.next(...args);
}

function Return(generator, ...args) {
  return generator.return(...args);
}

function Throw(generator, ...args) {
  return generator.throw(...args);
}

{
  // yield in try-catch
  let g = function* () {
    try {
      yield 1;
    } catch (error) {
      "caught";
      error;
    }
  };

  (() => Throw(g(), "not caught"))();

  "not caught";
  {
    let x = g();
    ({
      value: 1,
      done: false
    });
    Next(x);
    ({
      value: undefined,
      done: true
    });
    Throw(x, "caught");
  }
  {
    let x = g();
    ({
      value: 1,
      done: false
    });
    Next(x);
    ({
      value: undefined,
      done: true
    });
    Next(x);

    (() => Throw(x, "not caught"))();

    "not caught";
  }
}
{
  // return that doesn't close
  let g = function* () {
    try {
      return 42;
    } finally {
      yield 43;
    }
  };

  {
    let x = g();
    ({
      value: 43,
      done: false
    });
    Next(x);
    ({
      value: 42,
      done: true
    });
    Next(x);
  }
}
{
  // return that doesn't close
  let x;

  let g = function* () {
    try {
      return 42;
    } finally {
      Throw(x, 666);
    }
  };

  {
    x = g();

    (() => Next(x))();

    TypeError;
  }
}
{
  // yield in try-finally, finally clause performs return
  let g = function* () {
    try {
      yield 42;
    } finally {
      return 13;
    }
  };

  {
    // "return" closes at suspendedStart
    let x = g();
    ({
      value: 666,
      done: true
    });
    Return(x, 666);
    ({
      value: undefined,
      done: true
    });
    Next(x, 42);

    (() => Throw(x, 43))();

    43;
    ({
      value: 42,
      done: true
    });
    Return(x, 42);
  }
  {
    // "throw" closes at suspendedStart
    let x = g();

    (() => Throw(x, 666))();

    666;
    ({
      value: undefined,
      done: true
    });
    Next(x, 42);
    ({
      value: 43,
      done: true
    });
    Return(x, 43);

    (() => Throw(x, 44))();

    44;
  }
  {
    // "next" closes at suspendedYield
    let x = g();
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 13,
      done: true
    });
    Next(x, 666);
    ({
      value: undefined,
      done: true
    });
    Next(x, 666);

    (() => Throw(x, 666))();

    666;
  }
  {
    // "return" closes at suspendedYield
    let x = g();
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 13,
      done: true
    });
    Return(x, 666);
    ({
      value: undefined,
      done: true
    });
    Next(x, 666);
    ({
      value: 666,
      done: true
    });
    Return(x, 666);
  }
  {
    // "throw" closes at suspendedYield
    let x = g();
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 13,
      done: true
    });
    Throw(x, 666);

    (() => Throw(x, 666))();

    666;
    ({
      value: undefined,
      done: true
    });
    Next(x, 666);
  }
}
{
  // yield in try-finally, finally clause doesn't perform return
  let g = function* () {
    try {
      yield 42;
    } finally {
      13;
    }
  };

  {
    // "return" closes at suspendedStart
    let x = g();
    ({
      value: 666,
      done: true
    });
    Return(x, 666);
    ({
      value: undefined,
      done: true
    });
    Next(x, 42);

    (() => Throw(x, 43))();

    43;
    ({
      value: 42,
      done: true
    });
    Return(x, 42);
  }
  {
    // "throw" closes at suspendedStart
    let x = g();

    (() => Throw(x, 666))();

    666;
    ({
      value: undefined,
      done: true
    });
    Next(x, 42);
    ({
      value: 43,
      done: true
    });
    Return(x, 43);

    (() => Throw(x, 44))();

    44;
  }
  {
    // "next" closes at suspendedYield
    let x = g();
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: undefined,
      done: true
    });
    Next(x, 666);
    ({
      value: undefined,
      done: true
    });
    Next(x, 666);

    (() => Throw(x, 666))();

    666;
    ({
      value: 42,
      done: true
    });
    Return(x, 42);
  }
  {
    // "return" closes at suspendedYield
    let x = g();
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 666,
      done: true
    });
    Return(x, 666);
    ({
      value: undefined,
      done: true
    });
    Next(x, 666);

    (() => Throw(x, 44))();

    44;
    ({
      value: 42,
      done: true
    });
    Return(x, 42);
  }
  {
    // "throw" closes at suspendedYield
    let x = g();
    ({
      value: 42,
      done: false
    });
    Next(x);

    (() => Throw(x, 666))();

    666;
    ({
      value: undefined,
      done: true
    });
    Next(x, 666);

    (() => Throw(x, 666))();

    666;
    ({
      value: 42,
      done: true
    });
    Return(x, 42);
  }
}
{
  // yield in try-finally, finally clause yields and performs return
  let g = function* () {
    try {
      yield 42;
    } finally {
      yield 43;
      return 13;
    }
  };

  {
    let x = g();
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 43,
      done: false
    });
    Return(x, 666);
    ({
      value: 13,
      done: true
    });
    Next(x);
    ({
      value: 666,
      done: true
    });
    Return(x, 666);
  }
  {
    let x = g();
    ({
      value: 666,
      done: true
    });
    Return(x, 666);
    ({
      value: undefined,
      done: true
    });
    Next(x);
    ({
      value: 666,
      done: true
    });
    Return(x, 666);
  }
}
{
  // yield in try-finally, finally clause yields and doesn't perform return
  let g = function* () {
    try {
      yield 42;
    } finally {
      yield 43;
      13;
    }
  };

  {
    let x = g();
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 43,
      done: false
    });
    Return(x, 666);
    ({
      value: 666,
      done: true
    });
    Next(x);
    ({
      value: 5,
      done: true
    });
    Return(x, 5);
  }
  {
    let x = g();
    ({
      value: 666,
      done: true
    });
    Return(x, 666);
    ({
      value: undefined,
      done: true
    });
    Next(x);
    ({
      value: 666,
      done: true
    });
    Return(x, 666);
  }
}
{
  // yield*, finally clause performs return
  let h = function* () {
    try {
      yield 42;
    } finally {
      yield 43;
      return 13;
    }
  };

  let g = function* () {
    yield 1;
    yield yield* h();
  };

  {
    let x = g();
    ({
      value: 1,
      done: false
    });
    Next(x);
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 43,
      done: false
    });
    Next(x, 666);
    ({
      value: 13,
      done: false
    });
    Next(x);
    ({
      value: undefined,
      done: true
    });
    Next(x);
  }
  {
    let x = g();
    ({
      value: 1,
      done: false
    });
    Next(x);
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 43,
      done: false
    });
    Return(x, 666);
    ({
      value: 13,
      done: false
    });
    Next(x);
    ({
      value: undefined,
      done: true
    });
    Next(x);
  }
  {
    let x = g();
    ({
      value: 1,
      done: false
    });
    Next(x);
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 43,
      done: false
    });
    Throw(x, 666);
    ({
      value: 13,
      done: false
    });
    Next(x);
    ({
      value: undefined,
      done: true
    });
    Next(x);
  }
}
{
  // yield*, finally clause does not perform return
  let h = function* () {
    try {
      yield 42;
    } finally {
      yield 43;
      13;
    }
  };

  let g = function* () {
    yield 1;
    yield yield* h();
  };

  {
    let x = g();
    ({
      value: 1,
      done: false
    });
    Next(x);
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 43,
      done: false
    });
    Next(x, 666);
    ({
      value: undefined,
      done: false
    });
    Next(x);
    ({
      value: undefined,
      done: true
    });
    Next(x);
  }
  {
    let x = g();
    ({
      value: 1,
      done: false
    });
    Next(x);
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 43,
      done: false
    });
    Return(x, 44);
    ({
      value: 44,
      done: false
    });
    Next(x);
    ({
      value: undefined,
      done: true
    });
    Next(x);
  }
  {
    let x = g();
    ({
      value: 1,
      done: false
    });
    Next(x);
    ({
      value: 42,
      done: false
    });
    Next(x);
    ({
      value: 43,
      done: false
    });
    Throw(x, 666);

    (() => Next(x))();

    666;
  }
}
{
  // yield*, .return argument is final result
  function* inner() {
    yield 2;
  }

  function* g() {
    yield 1;
    return yield* inner();
  }

  {
    let x = g();
    ({
      value: 1,
      done: false
    });
    Next(x);
    ({
      value: 2,
      done: false
    });
    Next(x);
    ({
      value: 42,
      done: true
    });
    Return(x, 42);
  }
} // More or less random tests from here on.

{
  function* foo() {
    ;
  }

  let g = foo();
  ({
    value: undefined,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo() {
    return new.target;
  }

  let g = foo();
  ({
    value: undefined,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo() {
    throw 666;
    return 42;
  }

  let g = foo();

  (() => Next(g))();

  666;
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo(a) {
    return a;
  }

  let g = foo(42);
  ({
    value: 42,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo(a) {
    a.iwashere = true;
    return a;
  }

  let x = {};
  let g = foo(x);
  ({
    value: {
      iwashere: true
    },
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  let a = 42;

  function* foo() {
    return a;
  }

  let g = foo();
  ({
    value: 42,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  let a = 40;

  function* foo(b) {
    return a + b;
  }

  let g = foo(2);
  ({
    value: 42,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  let a = 40;

  function* foo(b) {
    a--;
    b++;
    return a + b;
  }

  let g = foo(2);
  ({
    value: 42,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  let g;

  function* foo() {
    Next(g);
  }

  g = foo();

  (() => Next(g))();

  TypeError;
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo() {
    yield 2;
    yield 3;
    yield 4;
  }

  g = foo();
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
  ({
    value: 4,
    done: false
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo() {
    yield 2;

    if (true) {
      yield 3;
    }

    ;
    yield 4;
  }

  g = foo();
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
  ({
    value: 4,
    done: false
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo() {
    yield 2;

    if (true) {
      yield 3;
      yield 4;
    }
  }

  g = foo();
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
  ({
    value: 4,
    done: false
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo() {
    yield 2;

    if (false) {
      yield 3;
    }

    ;
    yield 4;
  }

  g = foo();
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 4,
    done: false
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo() {
    yield 2;

    while (true) {
      yield 3;
    }

    ;
    yield 4;
  }

  g = foo();
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
}
{
  function* foo() {
    yield 2;
    (yield 3) + 42;
    yield 4;
  }

  g = foo();
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
  ({
    value: 4,
    done: false
  });
  Next(g);
}
{
  function* foo() {
    yield 2;
    return (yield 3) + 42;
    yield 4;
  }

  g = foo();
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
  ({
    value: 42,
    done: true
  });
  Next(g, 0);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  let x = 42;

  function* foo() {
    yield x;

    for (let x in {
      a: 1,
      b: 2
    }) {
      let i = 2;
      yield x;
      yield i;

      do {
        yield i;
      } while (i-- > 0);
    }

    yield x;
    return 5;
  }

  g = foo();
  ({
    value: 42,
    done: false
  });
  Next(g);
  ({
    value: 'a',
    done: false
  });
  Next(g);
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 1,
    done: false
  });
  Next(g);
  ({
    value: 0,
    done: false
  });
  Next(g);
  ({
    value: 'b',
    done: false
  });
  Next(g);
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 1,
    done: false
  });
  Next(g);
  ({
    value: 0,
    done: false
  });
  Next(g);
  ({
    value: 42,
    done: false
  });
  Next(g);
  ({
    value: 5,
    done: true
  });
  Next(g);
}
{
  let a = 3;

  function* foo() {
    let b = 4;
    yield 1;
    {
      let c = 5;
      yield 2;
      yield a;
      yield b;
      yield c;
    }
  }

  g = foo();
  ({
    value: 1,
    done: false
  });
  Next(g);
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 3,
    done: false
  });
  Next(g);
  ({
    value: 4,
    done: false
  });
  Next(g);
  ({
    value: 5,
    done: false
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo() {
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
    yield 42;
  }

  g = foo();

  for (let i = 0; i < 100; ++i) {
    ({
      value: 42,
      done: false
    });
    i % 25 === 0 ? Next(g) : g.next();
  }

  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  function* foo() {
    for (let i = 0; i < 3; ++i) {
      let j = 0;
      yield i;

      do {
        yield i + 10;
      } while (++j < 2);
    }
  }

  g = foo();
  ({
    value: 0,
    done: false
  });
  Next(g);
  ({
    value: 10,
    done: false
  });
  Next(g);
  ({
    value: 10,
    done: false
  });
  Next(g);
  ({
    value: 1,
    done: false
  });
  Next(g);
  ({
    value: 11,
    done: false
  });
  Next(g);
  ({
    value: 11,
    done: false
  });
  Next(g);
  ({
    value: 2,
    done: false
  });
  Next(g);
  ({
    value: 12,
    done: false
  });
  Next(g);
  ({
    value: 12,
    done: false
  });
  Next(g);
  ({
    value: undefined,
    done: true
  });
  Next(g);
}
{
  let foo = function* () {
    while (true) {
      if (true || false) {
        yield 42;
      }

      continue;
    }
  };

  g = foo();
  ({
    value: 42,
    done: false
  });
  Next(g);
  ({
    value: 42,
    done: false
  });
  Next(g);
  ({
    value: 42,
    done: false
  });
  Next(g);
}
{
  let foo = function* () {
    yield* function* () {
      yield 42;
    }();
  };

  g = foo();
  ({
    value: 42,
    done: false
  });
  Next(g);
  ({
    value: 23,
    done: true
  });
  Return(g, 23);
}
{
  let iterable = {
    [Symbol.iterator]() {
      return {
        next() {
          return {};
        }

      };
    }

  };

  let foo = function* () {
    yield* iterable;
  };

  g = foo();
  g.next();

  (() => Throw(g))();

  TypeError;
}
