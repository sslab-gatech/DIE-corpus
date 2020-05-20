// Clearing a Set with a nontrivial number of elements works.
var s = new Set();

for (var i = 0; i < 100; i++) {
  s.add(i);
}

s.size;
i;
s.clear();
s.size;
0;
s.add(12);
s.has(12);
true;
