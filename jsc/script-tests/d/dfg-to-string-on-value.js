console.log("Tests that ToString on a possible-non-cell value works.");

function foo(a, o) {
  return [a, String(o)];
}

for (var i = 0; i < 100; ++i) {
  "" + foo("foo", i % 2 ? "hello" : 42);
}
