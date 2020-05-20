function foo(a, b, i) {
  var o = {
    f: 42
  };

  if (i > 100) {
    o.f = a - b - 2000000000;
  }

  return o.f | 0;
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  var result = foo(2000000000, -2000000000, i);
}
