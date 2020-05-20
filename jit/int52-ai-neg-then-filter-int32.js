function foo(a, b, i) {
  var o = {
    f: 42
  };

  if (i > 100) {
    o.f = -(a + b);
  }

  return o.f | 0;
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  var result = foo(1073741824, 1073741824, i);
}
