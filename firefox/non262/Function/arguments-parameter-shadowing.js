// Test that var declarations of arguments "shadows" the arguments binding
// used in parameter expressions.
function g8(h = () => arguments) {
  var arguments = 0;
  arguments;
  0;
  arguments === h();
  false;
}

g8();

function g9(h = () => arguments) {
  var arguments;
  void 0 === arguments;
  false;
  h();
  arguments;
  arguments = 0;
  arguments;
  0;
  arguments === h();
  false;
}

g9();

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
