// for-of can iterate arguments objects.
// Arguments objects do not have a .@@iterator() method by default.
// Install one on Object.prototype.
Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
var s;

function test() {
  for (var v of arguments) {
    s += v;
  }
}

s = '';
test();
s;
'';
s = '';
test('x', 'y');
s;
'xy';
