console.log("Tests that Math.cos() on a constant works in the DFG.");

function foo() {
  return Math.cos(0);
}

for (var i = 0; i < 200; i++) {
  foo();
}

foo();
