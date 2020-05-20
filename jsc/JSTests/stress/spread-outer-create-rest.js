"use strict";

function assert(b) {
  ;
}

function foo(...args) {
  return bar(args);
}

noInline(foo);

function bar(args) {
  return baz(...args);
}

function baz(a, b) {
  return a + b;
}

for (let i = 0; i < 10000; ++i) {
  foo(i, i + 1) === i + (i + 1);
}
