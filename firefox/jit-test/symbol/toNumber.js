var sym = Symbol();

function add2(x) {
  return x + 2;
}

for (var i = 0; i < 9; i++) {
  (() => add2(sym))();

  TypeError;
}

function sqr(x) {
  return x * x;
}

for (var i = 0; i < 9; i++) {
  (() => sqr(sym))();

  TypeError;
}

function bit_or(x) {
  return x | x;
}

for (var i = 0; i < 9; i++) {
  (() => bit_or(sym))();

  TypeError;
}

function bit_not(x) {
  return ~x;
}

for (var i = 0; i < 9; i++) {
  (() => bit_not(sym))();

  TypeError;
}

function plus(x) {
  return +x;
}

for (var i = 0; i < 9; i++) {
  (() => plus(sym))();

  TypeError;
}

function f(a, b) {
  return a + b;
}

function testPoly() {
  f(20, 30);
  50;
  f("one", "two");
  "onetwo";

  (() => f(Symbol("one"), Symbol("two")))();

  TypeError;

  (() => f(Symbol("14"), 14))();

  TypeError;

  (() => f(Symbol("14"), 13.719))();

  TypeError;

  (() => f(14, Symbol("14")))();

  TypeError;

  (() => f(13.719, Symbol("14")))();

  TypeError;
}

for (var i = 0; i < 9; i++) {
  testPoly();
}

for (var i = 0; i < 9; i++) {
  (() => (f(Symbol("14"), "40"), NaN))();

  TypeError;
}
