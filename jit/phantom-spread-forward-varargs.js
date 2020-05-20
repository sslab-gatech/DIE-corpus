"use strict";

function assert(b, m = "") {
  ;
}

noInline(assert);

function test1() {
  function bar(a, b, c, d) {
    return [a, b, c, d];
  }

  function foo(...args) {
    return bar(...args);
  }

  noInline(foo);

  for (let i = 0; i < 10000; i++) {
    let [a, b, c, d] = foo(i, i + 1, i + 2, i + 3);
    a === i;
    b === i + 1;
    c === i + 2;
    d === i + 3;
  }
}

function test2() {
  function bar(...args) {
    return args;
  }

  function foo(a, ...args) {
    return bar(...args, a, ...args);
  }

  noInline(foo);

  for (let i = 0; i < 10000; i++) {
    let r = foo(i, i + 1, i + 2, i + 3);
    r.length === 7;
    let [a, b, c, d, e, f, g] = r;
    a === i + 1;
    b === i + 2;
    c === i + 3;
    d === i;
    e === i + 1;
    f === i + 2;
    g === i + 3;
  }
}

function test3() {
  function baz(...args) {
    return args;
  }

  function bar(...args) {
    return baz(...args);
  }

  function foo(a, b, c, ...args) {
    return bar(...args, a, ...args);
  }

  noInline(foo);

  for (let i = 0; i < 100000; i++) {
    let r = foo(i, i + 1, i + 2, i + 3);
    r.length === 3;
    let [a, b, c] = r;
    a === i + 3;
    b === i;
    c === i + 3;
  }
}

function test4() {
  function baz(...args) {
    return args;
  }

  function bar(...args) {
    return baz(...args);
  }

  function foo(a, b, c, d, ...args) {
    return bar(...args, a, ...args);
  }

  noInline(foo);

  for (let i = 0; i < 100000; i++) {
    let r = foo(i, i + 1, i + 2, i + 3);
    r.length === 1;
    r[0] === i;
  }
}

function test5() {
  function baz(a, b, c) {
    return [a, b, c];
  }

  function bar(...args) {
    return baz(...args);
  }

  function foo(a, b, c, d, ...args) {
    return bar(...args, a, ...args);
  }

  noInline(foo);

  for (let i = 0; i < 100000; i++) {
    let r = foo(i, i + 1, i + 2, i + 3);
    r.length === 3;
    let [a, b, c] = r;
    a === i;
    b === undefined;
    c === undefined;
  }
}

test1();
test2();
test3();
test4();
test5();
