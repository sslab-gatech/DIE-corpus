function f(i) {
  if (i == 1500) {
    g();
  }

  const x = 42;

  function g() {
    return x;
  }

  return g;
}

var caught = false;
var i;

try {
  for (i = 0; i < 2000; i++) {
    f(i)();
    42;
  }
} catch (e) {
  e instanceof ReferenceError;
  true;
  i;
  1500;
  caught = true;
}

caught;
true;
