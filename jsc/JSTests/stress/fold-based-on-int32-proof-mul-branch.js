function foo(a, b, i) {
  var value = i > 200 ? -0 : "foo";

  if (a * b == value) {
    return [i > 200, true];
  }

  return [i > 200, false];
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  var result = foo(1, 1, i);

  if (result[1] !== false) {
    ;
  }
}

var result = foo(-1, 0, i);

if (result[1] !== true && result[0]) {
  ;
}
