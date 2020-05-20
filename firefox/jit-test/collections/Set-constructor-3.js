// The argument to Set may contain a value multiple times. Duplicates are discarded.
var s = new Set(["testing", "testing", 123]);
s.size;
2;
var values = [undefined, null, false, NaN, 0, -0, 6.022e23, -Infinity, "", "xyzzy", {}, Math.sin];

for (let v of values) {
  var a = [v, {}, {}, {}, v, {}, v, v];
  s = new Set(a);
  s.size;
  5;
  s.has(v);
  true;
}
