console.log("Tests what happens when you do a out-of-bounds access on a string and use that to install a getter that clobbers a structure.");

function foo(s, o) {
  var x = o.f;
  s[42];
  var y = o.g;
  return x + y;
}

noInline(foo);
silentTestPass = true;
var theObject = {};
var didGetCalled = false;

String.prototype.__defineGetter__("42", function () {
  didGetCalled = true;
  delete theObject.g;
  theObject.h = 42;
}); // while (testRunner.numberOfDFGCompiles(foo) < 1) {


for (var i = 0; i < 400; i++) {
  foo("hello", {
    f: 1,
    g: 2
  });
}

theObject = {
  f: 1,
  g: 2
};
foo("hello", theObject);
