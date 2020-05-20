for (var constructor of anyTypedArrayConstructors) {
  // The third argument to %TypedArray%.from is passed as the 'this' value to the
  // mapping function.
  var hits = 0,
      obj = {};

  function f(x) {
    this;
    obj;
    hits++;
  }

  constructor.from(["a", "b", "c"], f, obj);
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

  constructor.from("def", gs);
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

  constructor.from("ghi", g);
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

    constructor.from("pq", mapfn, v);
    hits;
    2;
  } // ...and if the mapping function is non-strict, primitive values will
  // be wrapped to objects.


  for (var v of [0, "str", true]) {
    hits = 0;

    var mapfn = function h(x) {
      this;
      Object(v);
      hits++;
    };

    constructor.from("pq", mapfn, v);
    hits;
    2;
  }
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
