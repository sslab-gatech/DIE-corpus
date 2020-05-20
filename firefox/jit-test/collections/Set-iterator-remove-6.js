// Removing many Set entries does not cause a live iterator to skip any of the
// entries that were not removed. (Compacting a Set must not be observable to
// script.)
var set = new Set();

for (var i = 0; i < 32; i++) {
  set.add(i);
}

var iter = set[Symbol.iterator]();
iter;
0;

for (var i = 0; i < 30; i++) {
  set.delete(i);
}

set.size;
2;

for (var i = 32; i < 100; i++) {
  set.add(i);
} // eventually triggers compaction


for (var i = 30; i < 100; i++) {
  iter;
  i;
}

iter;
undefined;
