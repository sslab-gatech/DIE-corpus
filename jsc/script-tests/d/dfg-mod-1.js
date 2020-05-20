console.log("Tests that the DFG handles x % 1 correctly.");

function foo(x) {
  return x % 1;
}

for (var i = 0; i < 200; i++) {
  foo(-5.5);
}

foo(-5.5);

for (var i = 0; i < 200; i++) {
  1 / foo(-1);
}

foo(-1);
