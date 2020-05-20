function foo(a) {
  if (true) {
    (function () {
      a = 43;
    })();

    return arguments;
  }

  return a;
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  var result = foo();
}
