Object.prototype.blah = 42;

function g(a, b, c) {
  a;
  1;
  b;
  2;
  c;
  3;
  return 43;
}

function f() {
  var a = arguments;
  var b = a;
  var s = "blah";
  a[s];
  42;
  b[s];
  42;
  a[s];
  42;
  b.length;
  3;
  a.length;
  3;
  g.apply(null, b);
  43;
}

for (var i = 0; i < 10; ++i) {
  f(1, 2, 3);
}
