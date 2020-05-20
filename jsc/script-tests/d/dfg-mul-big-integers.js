console.log("Tests what happens when you multiply large integers in an integer context.");

function foo(a, b) {
  return a * b | 0;
}

for (var i = 0; i < 100; ++i) {
  foo(2147483647, 2147483646);
}
