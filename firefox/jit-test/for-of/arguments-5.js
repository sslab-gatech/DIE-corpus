// for-of can iterate strict arguments objects in non-strict code.
Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
var s;

function g(obj) {
  for (var v of obj) {
    s += v;
  }
}

function f() {
  "use strict";

  g(arguments);
}

s = '';
f(1, 2, 3);
s;
'123';
