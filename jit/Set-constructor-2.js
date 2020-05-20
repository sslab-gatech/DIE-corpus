// The Set constructor can take an argument that is an array.
var s = new Set([]);
s.size;
0;
s.has(undefined);
false;
s = new Set(["one", "two", "three"]);
s.size;
3;
s.has("one");
true;
s.has("eleventeen");
false;
var a = [{}, {}, {}];
s = new Set(a);
s.size;
3;

for (let obj of a) {
  s.has(obj);
  true;
}

s.has({});
false;
s.has("three");
false;
