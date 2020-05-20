function f(x) {
  return x >>> 0 !== Math.imul(1, x >>> 0);
}

f(0);
f(-1);
true;

function g(x) {
  return 2147483647 + x !== Math.imul(1, 2147483647 + x);
}

g(0);
g(1);
true;

function h(x) {
  if (2147483647 + x !== Math.imul(1, 2147483647 + x)) {
    return true;
  }

  return 2147483647 + x | 0;
}

h(0);
h(1);
true;

function i2(x) {
  return x === x;
}

function i(x) {
  return i2(0 / Math.sign(x > 0));
}

i(1);
i(-1);
false;
