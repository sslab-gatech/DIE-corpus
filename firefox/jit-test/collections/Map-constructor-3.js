// Map can take an argument that is an array of singleton arrays.
var arr = [["a"], ["b"], ["c"]];
var m = new Map(arr);
m.size;
3;

for (var [k, _] of arr) {
  m.has(k);
  true;
  m.get(k);
  undefined;
}
