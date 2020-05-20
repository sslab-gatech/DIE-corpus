console.log("Tests that defining a setter on the Array prototype works with ArrayPush.");
var ouches = 0;

Array.prototype.__defineSetter__("3", function () {
  ouches++;
});

function foo() {
  var result = [];

  for (var i = 0; i < 5; ++i) {
    result.push(i);
  }

  return result;
}

for (var i = 0; i < 200; i++) {
  foo().join(",");
}

foo().join(",");
ouches;
