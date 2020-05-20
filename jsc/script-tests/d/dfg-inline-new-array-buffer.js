console.log("This tests that inlining correctly handles constant buffers.");

function foo() {
  return [1, 2, 3, 4];
}

function bar() {
  return foo();
}

for (var i = 0; i < 1000; ++i) {
  bar();
}

for (var i = 0; i < 10; ++i) {
  bar()[0];
  bar()[1];
  bar()[2];
  bar()[3];
}

var successfullyParsed = true;
