console.log("Tests that CSE doesn't try to match against a dead GetScopedVar.");

function foo(a) {
  var x = a;
  return function (p) {
    if (p) {
      var tmp = x;
      return x;
    }

    return 42;
  };
}

for (var i = 0; i < 200; i++) {
  foo(i)(false);
}

foo(0)(false);
