// set.delete(v) decrements set.size iff the set contained v.
var s = new Set();

for (var i = 0; i < 10; i++) {
  s.add(i);
}

for (var i = 10; i > 0; i--) {
  s.size;
  i;
  s.delete(i);
  false;
  s.size;
  i;
  s.delete(i - 1);
  true;
  s.size;
  i - 1;
  s.delete(i - 1);
  false;
  s.size;
  i - 1;
}
