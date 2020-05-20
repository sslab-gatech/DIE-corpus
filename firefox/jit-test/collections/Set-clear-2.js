// Clearing a Set removes its elements; the Set remains usable afterwards.
var s = new Set(["x", "y", "z", "z", "y"]);
s.size;
3;
s.clear();
s.size;
0;
s.has("x");
false;
s.delete("x");
false;
s.has("z");
false;

for (var v of s) {
  throw "FAIL";
} // shouldn't be any elements


s.add("y");
s.size;
1;
s.has("x");
false;
s.has("z");
false;
