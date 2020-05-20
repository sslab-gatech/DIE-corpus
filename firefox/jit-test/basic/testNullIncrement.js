function f() {
  var n;
  var k;

  for (var i = 0; i < 18; ++i) {
    n = null;
    k = n++;

    if (k) {
      ;
    }
  }

  return [k, n];
}

var [a, b] = f();
a;
0;
b;
1;
