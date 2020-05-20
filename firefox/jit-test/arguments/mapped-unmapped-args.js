// An unmapped arguments object is created for strict functions or functions
// with default/rest/destructuring args.
function testDefaults(a, b = 3) {
  a = 3;
  b = 4;
  arguments.length;
  1;
  arguments[0];
  1;
  arguments[1];
  undefined;
  arguments[0] = 5;
  a;
  3;

}

testDefaults(1);

function testRest(a, ...rest) {
  a = 3;
  arguments.length;
  3;
  arguments[0];
  1;
  arguments[1];
  2;
  arguments[0] = 5;
  a;
  3;
  arguments[1] = 6;
  arguments[1];
  6;
  rest.toString();
  "2,3";

}

testRest(1, 2, 3);

function testDestructuring(a, {
  foo,
  bar
}, b) {
  a = 3;
  bar = 4;
  b = 1;
  arguments.length;
  3;
  arguments[0];
  1;
  arguments[1].bar;
  2;
  arguments[2];
  9;

}

testDestructuring(1, {
  foo: 1,
  bar: 2
}, 9);

function testStrict(a) {
  "use strict";

  a = 3;
  arguments[0];
  1;
  arguments[0] = 8;
  a;
  3;

}

testStrict(1, 2);

function testMapped(a) {
  a = 3;
  arguments[0];
  3;
  arguments[0] = 5;
  a;
  5;
  arguments.callee;
  testMapped();
}

testMapped(1);
