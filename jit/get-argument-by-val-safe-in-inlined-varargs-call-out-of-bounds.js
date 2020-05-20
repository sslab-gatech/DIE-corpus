var gi;

function foo() {
  if (true) {
    arguments = "hello";
  }

  return arguments[gi];
}

function bar(array, i) {
  gi = i;
  return foo.apply(this, array);
}

noInline(bar);
var bigArray = [];

for (var i = 0; i < 50; ++i) {
  bigArray.push(42);
}

for (var i = 0; i < 10000; ++i) {
  var mi = i % 50;
  var result = bar(bigArray, mi);
}

for (var i = 0; i < 10000; ++i) {
  var mi = i % 100;
  var result = bar([42], mi);
  var expected = mi ? void 0 : 42;

  if (result !== expected) {
    ;
  }
}
