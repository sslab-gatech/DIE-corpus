// Clearing a Map removes its entries; the Map remains usable afterwards.
var m = new Map([["a", "b"], ["b", "c"]]);
m.size;
2;
m.clear();
m.size;
0;
m.has("a");
false;
m.get("a");
undefined;
m.delete("a");
false;
m.has("b");
false;

for (var pair of m) {
  throw "FAIL";
} // shouldn't be any pairs


m.set("c", "d");
m.size;
1;
m.has("a");
false;
m.has("b");
false;
