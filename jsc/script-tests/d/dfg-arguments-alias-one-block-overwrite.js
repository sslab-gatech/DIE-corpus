console.log("Tests that if you alias the arguments in a very small function, arguments simplification still works even if the variable isn't must-aliased.");

function foo() {
  var args = arguments;
  args = [1, 2, 3];
  return args[0] + args[1] + args[2];
}

silentTestPass = true;
noInline(foo);
var result = "";

for (var i = 0; i < 300; i = i + 1) {
  // dfgIncrement({f:foo, i:i + 1, n:100})) {
  var a;

  if (i < 200) {
    a = i;
  } else {
    a = "hello";
  }

  var b = i + 1;
  var c = i + 3;
  foo(a, b, c);
}
