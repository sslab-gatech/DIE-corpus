// Maps can hold at least 64K values.
var N = 1 << 16;
var m = new Map();

for (var i = 0; i < N; i++) {
  m.set(i, i);
  m;
}

for (var i = 0; i < N; i++) {
  m.get(i);
  i;
}
