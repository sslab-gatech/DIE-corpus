// Removing and re-adding entries while an iterator is live causes the iterator to visit them again.
var map = new Map([['a', 1]]);
var n = 5;

for (let [k, v] of map) {
  k;
  'a';
  v;
  1;

  if (n === 0) {
    break;
  }

  map.delete('a');
  map.set('a', 1);
  n--;
}

n;
0;
