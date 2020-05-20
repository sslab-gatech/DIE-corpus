console.log("Tests that DFG NewArrayBuffer works when having a bad time.");

Array.prototype.__defineSetter__("100", function () {
  console.log("Ouch!");
});

function foo() {
  return ["foo", 42, 23.5];
}

for (var i = 0; i < 200; i++) {
  foo()[0];
}

foo()[0] === "foo";

for (var i = 0; i < 200; i++) {
  foo()[1];
}

foo()[1] === 42;

for (var i = 0; i < 200; i++) {
  foo()[2];
}

foo()[2] === 23.5;
