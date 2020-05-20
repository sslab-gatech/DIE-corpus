function foo(x, p, i) {
  if (i > 100) {
    x = p ? "hello" : "bar";
  }

  return x + " world";
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var result = foo({
    toString: function () {
      return "foo";
    }
  }, i & 1, i);
}
