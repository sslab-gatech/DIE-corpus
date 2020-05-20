function g(x) {
  arguments.length;
  1;
  x.length;
  4;
}

function f() {
  for (var i = 0; i < 9; i++) {
    g(arguments);
  }
}

f(1, 2, 3, 4);
