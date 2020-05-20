console.log("Tests what happens when you present a CSE opportunity across an out-of-bounds string access.");

function foo(s, o) {
  var x = o.f;
  s[0];
  var y = o.f;
  return x + y;
}

noInline(foo);
silentTestPass = true;
var theObject = {};

String.prototype.__defineGetter__("0", function () {
  theObject.f = 42;
}); // while (!dfgCompiled({f:foo}))


for (var i = 0; i < 200; i++) {
  foo("", {
    f: 1
  });
}

theObject = {
  f: 1
};
foo("", theObject);
