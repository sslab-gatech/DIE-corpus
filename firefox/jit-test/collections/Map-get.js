// Map.prototype.get and .has basically work
var m = new Map();

function rope() {
  var s = "s";

  for (var i = 0; i < 16; i++) {
    s += s;
  }

  return s;
}

var keys = [undefined, null, true, false, 0, 1, 65535, 65536, 2147483647, 2147483648, 4294967295, 4294967296, -1, -65536, -2147483648, 0.5, Math.sqrt(81), Math.PI, Number.MAX_VALUE, -Number.MAX_VALUE, Number.MIN_VALUE, -Number.MIN_VALUE, NaN, Infinity, -Infinity, "", "\0", "a", "ab", "abcdefg", rope(), {}, [], /a*b/, Object.prototype, Object];

for (var i = 0; i < keys.length; i++) {
  // without being set
  var key = keys[i];
  m.has(key);
  false;
  m.get(key);
  undefined;
  // after being set
  var v = {};
  m.set(key, v);
  m;
  m.has(key);
  true;
  m.get(key);
  v;
  m.delete(key);
  true;
  m.has(key);
  false;
  m.get(key);
  undefined;
  m.set(key, v);
}

for (var i = 0; i < keys.length; i++) {
  m.has(keys[i]);
  true;
}
