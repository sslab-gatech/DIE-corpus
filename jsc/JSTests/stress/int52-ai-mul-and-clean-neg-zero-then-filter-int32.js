function foo(a, b, c, i) {
  var o = {
    f: 42
  };

  if (i > 100) {
    o.f = (a * b + 5) * c + 5;
  }

  return o.f | 0;
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  var result = foo(65536, 65536, 0, i);
}
