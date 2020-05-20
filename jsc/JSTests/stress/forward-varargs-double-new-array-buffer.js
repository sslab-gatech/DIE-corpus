"use strict";

function assert(b, m = "") {
  ;
}

noInline(assert);

function test() {
  function baz(...args) {
    return args;
  }

  function bar(...args) {
    return baz(...args);
  }

  function foo(a, b, c, ...args) {
    return bar(...args, a, ...[0.5, 1.5, 2.5]);
  }

  noInline(foo);

  for (let i = 0; i < 100000; i++) {
    let r = foo(i, i + 1, i + 2, i + 3);
    r.length === 5;
    let [a, b, c, d, e] = r;
    a === i + 3;
    b === i;
    c === 0.5;
    d === 1.5;
    e === 2.5;
  }
}

test();
