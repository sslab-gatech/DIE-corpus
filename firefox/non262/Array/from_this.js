/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// The third argument to Array.from is passed as the 'this' value to the
// mapping function.
var hits = 0,
    obj = {};

function f(x) {
  this;
  obj;
  hits++;
}

Array.from(["a", "b", "c"], f, obj);
hits;
3;
// Without an argument, undefined is passed...
hits = 0;

function gs(x) {
  "use strict";

  this;
  undefined;
  hits++;
}

Array.from("def", gs);
hits;
3;
// ...and if the mapping function is non-strict, that means the global is
// passed.
var global = this;
hits = 0;

function g(x) {
  this;
  global;
  hits++;
}

Array.from("ghi", g);
hits;
3;

// A primitive value can be passed.
for (var v of [0, "str", undefined]) {
  hits = 0;

  var mapfn = function h(x) {
    "use strict";

    this;
    v;
    hits++;
  };

  Array.from("pq", mapfn, v);
  hits;
  2;
}

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
