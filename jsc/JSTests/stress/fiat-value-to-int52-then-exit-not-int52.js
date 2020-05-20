function foo(i) {
  if (i > 100) {
    return fiatInt52(bar(true)) + 1;
  } else {
    return fiatInt52(bar(false)) + 1;
  }
}

var thingy = false;

function bar(p) {
  if (thingy) {
    return 5.5;
  }

  return p ? 42 : 5.5;
}

noInline(foo);
noInline(bar);

for (var i = 0; i < 1000000; ++i) {
  var result = foo(i);
}

thingy = true;
var result = foo(100000);
