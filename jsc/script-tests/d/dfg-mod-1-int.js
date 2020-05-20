console.log("Tests that the DFG handles x % 1, where x is an integer, correctly.");

function foo(x) {
  return x % 1;
}

for (var i = 0; i < 200; i++) {
  foo(1);
}

foo(1);
