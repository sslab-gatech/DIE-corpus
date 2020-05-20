// Removing and re-adding entries while an iterator is live causes the iterator to visit them again.
var set = new Set(['a']);
var n = 5;

for (let v of set) {
  v;
  'a';

  if (n === 0) {
    break;
  }

  set.delete('a');
  set.add('a');
  n--;
}

n;
0;
