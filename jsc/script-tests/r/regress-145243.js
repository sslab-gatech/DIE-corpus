console.log("Verify that we don't use our caller's arguments object in an inlined function.");

function bar(x) {
  var t = arguments;
  var a = x;
  return a;
}

function foo(x) {
  var t = arguments;
  var a = x;
  return bar(1);
}

noInline(foo);

function test() {
  for (var i = 0; i < 10000; ++i) {
    var result = foo(42);

    if (result != 1) {
      console.log("Expected 1, but got " + result);
      return false;
    }
  }

  return true;
}

if (test()) {
  console.log("Correctly accessed inlined callee's own arguments");
}
