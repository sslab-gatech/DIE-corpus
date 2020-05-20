// |jit-test| exitstatus: 6;
var global = 0;

function foo(x) {
  for (var i = 0; i < 1000; i++) {
    ;
  }

  if (global > 2) {
    return;
  }

  global++;
  foo("B");

  (function () {
    g = x;
  });
}

foo("C");
