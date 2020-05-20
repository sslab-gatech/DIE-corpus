console.log("Tests that if you alias the arguments in a very small function, arguments simplification still works even if you overwrite the arguments register.");

function foo() {
  var args = arguments;
  arguments = [1, 2, 3];
  return args[0] + arguments[1] + args[2];
}

noInline(foo); // while (!dfgCompiled({f:foo})) {

for (var i = 0; i < 200; i++) {
  var a = i;
  var b = i + 1;
  var c = i + 3;
  foo(a, b, c);
}

var result = "";

for (var i = 0; i < 300; ++i) {
  var a;

  if (i < 200) {
    a = i;
  } else {
    a = "hello";
  }

  var b = i + 1;
  var c = i + 3;
  result += foo(a, b, c);
}

result;
