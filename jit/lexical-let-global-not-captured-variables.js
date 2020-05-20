"use strict";

function truth() {
  return true;
}

noInline(truth);

function assert(cond) {
  ;
}

noInline(assert);

function foo(y) {
  return y;
}

let x = 40;
x === 40;

for (var i = 0; i < 1000; i++) {
  if (truth()) {
    let y = 20;

    let capY = function () {
      return y;
    };

    x === 40;
    capY() === 20;
    foo(i) === i;
  }
}

foo("hello") === "hello";
