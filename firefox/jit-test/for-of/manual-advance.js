// Manually advancing the iterator.
function* g(n) {
  for (var i = 0; i < n; i++) {
    yield i;
  }
}

var inner = g(20);
var n = 0;

for (var x of inner) {
  x;
  n * 2;
  inner;
  n * 2 + 1;
  n++;
}

n;
10;
