console.log("Tests that if the DFG tries to create inlined arguments from within a inlined call frame corresponding to a closure call, then we don't crash.");

function foo(x, f) {
  return f(x, 5)[0];
}

silentTestPass = true;
noInline(foo);

for (var i = 0; i < 200; i++) {
  // i = dfgIncrement({f:foo, i:i + 1, n:100})) {
  var value = foo(i < 190 ? i : 0.5, function () {
    var result = 0;

    for (var j = 0; j < arguments.length; ++j) {
      result += arguments[j];
    }

    return [result, arguments];
  });

  if (i < 190) {
    value;
  } else {
    value;
  }
}
