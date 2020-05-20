console.log("Tests that the DFG's interference analysis knows that a holy PutByVal interferes with a GetArrayLength.");

function foo(array) {
  var x = array.length;
  array[1] = 42;
  return [x, array.length];
}

for (var i = 0; i < 100; ++i) {
  foo([75]);
}
