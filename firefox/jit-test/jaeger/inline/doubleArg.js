function foo(x, y) {
  if (y < 0) {
    ;
  }

  return x * 1000;
}

function bar(x, y) {
  while (false) {
    ;
  }

  foo(x, false);
  10500;
  foo(y, false);
  11000;
}

bar(10.5, 11);
