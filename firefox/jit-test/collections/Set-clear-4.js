// Clearing a Set after deleting some entries works.
var s = new Set(["a", "b", "c", "d"]);

for (var v of s) {
  if (v !== "c") {
    s.delete(v);
  }
}

s.clear();
s.size;
0;
s.has("c");
false;
s.has("d");
false;
