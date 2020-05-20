console.log("Tests that CheckArray(NonArray) actually proves that the input isn't an array.");

function foo(a, i) {
  return a[i];
}

function bar(o, p, q) {
  if (q) {
    o = 42;
  }

  if (p) {
    return o[0];
  } else {
    return 42;
  }
}

function baz(o, p) {
  var result = foo(o, 0);
  result += bar(o, p, false);
  return result;
}

noInline(baz); // Get bar's profiling to claim that it sees a particular original array.

for (var i = 0; i < 100; ++i) {
  bar(["fizz"], true, false);
} // while (!dfgCompiled({f:baz})) {


for (var i = 0; i < 200; i++) {
  var o = {};
  o[0] = "buzz";
  baz(o, false);
}

baz(["blah"], true);
