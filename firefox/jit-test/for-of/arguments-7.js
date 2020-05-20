// Changing arguments.length during a for-of loop iterating over arguments affects the loop.
Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
var s;

function f() {
  for (var v of arguments) {
    s += v;
    arguments.length--;
  }
}

s = '';
f('a', 'b', 'c', 'd', 'e');
s;
'abc';
