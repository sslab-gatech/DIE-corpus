function f() {
  var n;
  var k;

  for (var i = 0; i < 18; ++i) {
    n = undefined;
    k = n++;

    if (k) {
      ;
    }
  }

  return [k, n];
}

var [a, b] = f();
isNaN(a);
true;
isNaN(b);
true;
