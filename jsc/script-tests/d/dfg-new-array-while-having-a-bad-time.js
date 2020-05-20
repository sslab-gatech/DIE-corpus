console.log("Tests that DFG NewArray works when having a bad time.");

Array.prototype.__defineSetter__("100", function () {
  console.log("Ouch!");
});

function foo() {
  return ["foo", 42, {
    f: 23
  }];
}

for (var i = 0; i < 200; i++) {
  foo()[0];
  foo()[1];
  foo()[2];
}

foo()[0];
foo()[1];
foo()[2];
