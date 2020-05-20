console.log("This test checks that n % 0 doesn't crash with a floating-point exception.");
2 % 0;
var n = 2;
n % 0;

function f() {
  return 2 % 0;
}

f();

function g() {
  var n = 2;
  return n % 0;
}

g(); // Test that reusing a floating point value after use in a modulus works correctly.

function nonSpeculativeModReuseInner(argument, o1, o2) {
  // The + operator on objects is a reliable way to avoid the speculative JIT path for now at least.
  o1 + o2;
  var knownDouble = argument - 0;
  return knownDouble % 1 + knownDouble;
}

function nonSpeculativeModReuse(argument) {
  return nonSpeculativeModReuseInner(argument, {}, {});
}

nonSpeculativeModReuse(0.5);
