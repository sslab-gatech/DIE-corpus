console.log("Tests that doing repeated resolves of 'arguments' from some nested scope doesn't crash.");

function bar() {
  throw "omg";
}

function foo() {
  try {
    bar();
  } catch (e) {
    return arguments;
  }
}

for (var i = 0; i < 100; ++i) {
  foo(42)[0];
  foo(42).length;
  foo(42, 23)[1];
}
