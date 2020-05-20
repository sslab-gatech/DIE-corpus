console.log("This tests that an early return in the first basic block does not crash the DFG's bytecode parser whilst inlining.");

function foo(a) {
  {
    return a;
  }
}

function bar(a) {
  return foo(a);
}

for (var i = 0; i < 100; ++i) {
  bar(i);
}

foo(42);
bar(42);
var successfullyParsed = true;
