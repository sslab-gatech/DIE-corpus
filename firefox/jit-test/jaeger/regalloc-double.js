// register allocation involving doubles.
function foo(a, b) {
  var c;

  if (a < b) {
    c = a + 1;
  } else {
    c = 0.5;
  }

  return c;
}

foo(0, 1);
1;
