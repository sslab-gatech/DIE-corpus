console.log("Tests that storing into a negative array index works right.");

function foo(a, i) {
  a[i] = 42;
}

for (var i = 0; i < 100; ++i) {
  var array = [];
  foo(array, -1);
  array[-1];
}
