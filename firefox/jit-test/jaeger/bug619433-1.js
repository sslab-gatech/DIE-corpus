/* Test compiling JSOP_STRICTEQ on known doubles. */
function foo(x) {
  return x === x;
}

for (var i = 0; i < 20; i++) {
  foo(1.2);
  true;
  foo(NaN);
  false;
}

function bar(x) {
  if (x === x) {
    return true;
  }

  return false;
}

for (var i = 0; i < 20; i++) {
  bar(1.2);
  true;
  bar(NaN);
  false;
}
