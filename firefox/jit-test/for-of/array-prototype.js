// for-of works on Array.prototype.
var v;

for (v of Array.prototype) {
  throw "FAIL";
}

var s = '';
Array.prototype.push('a', 'b');

for (v of Array.prototype) {
  s += v;
}

s;
'ab';
