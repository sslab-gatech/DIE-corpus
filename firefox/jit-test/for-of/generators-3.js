// Nested for-of loops can use the same generator-iterator.
function* range(n) {
  for (var i = 0; i < n; i++) {
    yield i;
  }
}

var r = range(10);

for (var a of r) {
  for (var b of r) {
    for (var c of r) {
      for (var d of r) {
        ;
      }
    }
  }
}

a;
0;
b;
1;
c;
2;
d;
9;
