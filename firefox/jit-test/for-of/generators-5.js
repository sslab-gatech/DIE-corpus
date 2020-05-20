// Breaking out of a for-of loop over a generator-iterator closes the generator.
function* range(n) {
  for (var i = 0; i < n; i++) {
    yield i;
  }
}

var r = range(10);
var s = '';

for (var x of r) {
  s += x;

  if (x == 4) {
    break;
  }
}

s += '/';

for (var y of r) {
  s += y;
}

s;
'01234/';
