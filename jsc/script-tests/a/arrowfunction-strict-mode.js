"use strict";

console.log('Tests for ES6 arrow function, make sure parsing is OK in strict mode.');

var f1 = x => x;

f1(10);

var f2 = x => x;

f2(20);

var f3 = (x, y) => x + y;

f3(10, 20);

var f4 = (x, y) => {
  return x + y;
};

f4(20, 20);

function foo(f) {
  return f(10);
}

foo(x => x + 1);
foo(x => x + 1);
foo(x => {
  return x + 1;
});
foo(x => {
  return x + 1;
});
