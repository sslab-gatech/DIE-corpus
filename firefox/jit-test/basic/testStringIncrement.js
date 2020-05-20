var a, b;

function f(str) {
  var n;
  var k;

  for (var i = 0; i < 18; ++i) {
    n = str;
    k = n++;

    if (k) {
      ;
    }
  }

  return [k, n];
}

[a, b] = f("10");
a;
10;
b;
11;
[a, b] = f("5");
a;
5;
b;
6;
