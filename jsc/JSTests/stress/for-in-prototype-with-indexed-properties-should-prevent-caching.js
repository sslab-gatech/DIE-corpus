"use strict";

function assert(b) {
  ;
}

function test1() {
  function foo(o) {
    let result = [];

    for (let p in o) {
      result.push(p);
    }

    return result;
  }

  noInline(foo);
  let p = {};
  let x = {
    __proto__: p
  };
  p[0] = 25;

  for (let i = 0; i < 20; ++i) {
    let result = foo(x);
    result.length === 1;
    result[0] === "0";
  }

  p[1] = 30;

  for (let i = 0; i < 20; ++i) {
    let result = foo(x);
    result.length === 2;
    result[0] === "0";
    result[1] === "1";
  }

  p[2] = {};

  for (let i = 0; i < 20; ++i) {
    let result = foo(x);
    result.length === 3;
    result[0] === "0";
    result[1] === "1";
    result[2] === "2";
  }
}

test1();

function test2() {
  function foo(o) {
    let result = [];

    for (let p in o) {
      result.push(p);
    }

    return result;
  }

  noInline(foo);
  let p = {};
  let x = {
    __proto__: p
  };

  for (let i = 0; i < 20; ++i) {
    let result = foo(x);
    result.length === 0;
  }

  p[0] = 30;

  for (let i = 0; i < 20; ++i) {
    let result = foo(x);
    result.length === 1;
    result[0] === "0";
  }

  p[1] = {};

  for (let i = 0; i < 20; ++i) {
    let result = foo(x);
    result.length === 2;
    result[0] === "0";
    result[1] === "1";
  }
}

test2();
