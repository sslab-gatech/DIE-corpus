console.log("Tests that Arraify does good things when Object.preventExtensions() has been called.");

function foo(o) {
  o[0] = 42;
  return o[0];
}

var o = {};
Object.preventExtensions(o);

for (var i = 0; i < 200; i++) {
  foo(o);
}

foo(o);
