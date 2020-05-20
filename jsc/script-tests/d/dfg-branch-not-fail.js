console.log("Check that short-circuiting Branch(LogicalNot(@a)) and then failing speculation does not result in the branch being taken the wrong way.");

function foo(a) {
  if (a.f) {
    return 1;
  }

  return 0;
}

function bar(a) {
  var b = !a.f;

  if (b) {
    return 1;
  }

  return 0;
}

silentTestPass = true;
noInline(foo);
noInline(bar);
var True = true;
var False = false;

for (var i = 0; i < 200; i++) {
  // dfgIncrement({f:[foo, bar], i:i + 1, n:50})) {
  var x;

  if (i == 100) {
    True = "string";
    False = void 0;
  }

  foo({
    f: True
  });
  foo({
    f: False
  });
  bar({
    f: True
  });
  bar({
    f: False
  });
}
