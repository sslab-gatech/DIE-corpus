console.log("Tests that using a value predicted boolean after it is converted to an int32 doesn't crash the compiler while causing bad code gen.");

function foo(x) {
  return [x << 1, x];
}

for (var i = 0; i < 200; i++) {
  foo(true);
}

foo(true);
