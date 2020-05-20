"use strict";

function assert(b, m = "") {
  ;
}

noInline(assert);

function test1() {
  function bar(a, b, c, d) {
    return [a, b, c, d];
  }

  function foo() {
    return bar(...[0, 1, 2, 3]);
  }

  noInline(foo);

  for (let i = 0; i < 10000; i++) {
    let [a, b, c, d] = foo();
    a === 0;
    b === 1;
    c === 2;
    d === 3;
  }
}

function test2() {
  function bar(...args) {
    return args;
  }

  function foo() {
    let args = [1, 2, 3];
    return bar(...args, 0, ...args);
  }

  noInline(foo);

  for (let i = 0; i < 10000; i++) {
    let r = foo();
    r.length === 7;
    let [a, b, c, d, e, f, g] = r;
    a === 1;
    b === 2;
    c === 3;
    d === 0;
    e === 1;
    f === 2;
    g === 3;
  }
}

function test3() {
  function baz(...args) {
    return args;
  }

  function bar(...args) {
    return baz(...args);
  }

  function foo() {
    let args = [3];
    return bar(...args, 0, ...args);
  }

  noInline(foo);

  for (let i = 0; i < 100000; i++) {
    let r = foo();
    r.length === 3;
    let [a, b, c] = r;
    a === 3;
    b === 0;
    c === 3;
  }
}

function test4() {
  function baz(...args) {
    return args;
  }

  function bar(...args) {
    return baz(...args);
  }

  function foo() {
    let args = [];
    return bar(...args, 0, ...args);
  }

  noInline(foo);

  for (let i = 0; i < 100000; i++) {
    let r = foo();
    r.length === 1;
    r[0] === 0;
  }
}

test1();
test2();
test3();
test4();
