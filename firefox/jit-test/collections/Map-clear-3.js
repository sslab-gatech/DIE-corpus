// Clearing a Map with a nontrivial number of elements works.
var m = new Map();

for (var i = 0; i < 100; i++) {
  m.set(i, i);
}

m.size;
i;
m.clear();
m.size;
0;
m.set("a", 1);
m.get("a");
1;
