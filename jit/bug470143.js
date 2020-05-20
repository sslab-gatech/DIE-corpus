// Test that getname caches correctly handle typeof for missing names.
function f() {
  for (i = 0; i < 2000; ++i) {
    var k = typeof nosuchvar;
  }

  return k;
}

f();
"undefined";
this.nosuchvar = 5;
f();
"number";
