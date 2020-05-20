function foo(a, b, i) {
  if (i > 200) {
    a = b = 2000000000;
  }

  var c = a + b;

  if (isFinalTier()) {
    OSRExit();
  }

  return c + 42;
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var result = foo(2000000001, 2000000001, i);
}
