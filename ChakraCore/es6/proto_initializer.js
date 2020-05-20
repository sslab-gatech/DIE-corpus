//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function tx() {
  var p = {
    p: 123
  };
  var o = {
    __proto__: p
  };
  console.log(p, Object.getPrototypeOf(o));
  console.log(!o.hasOwnProperty);
  console.log(123, o.p);
  console.log(p, Object.getPrototypeOf(o));
}

tx();

function t1() {
  var o = {
    __proto__: null
  };
  console.log(null, Object.getPrototypeOf(o));
  console.log({}.hasOwnProperty.apply(o, ["__proto__"]));
  console.log(undefined, o.__proto__);
}

t1();

function t2() {
  function test(value) {
    var o = {
      __proto__: value
    };
    console.log(Object.prototype, Object.getPrototypeOf(o));
    console.log(o.hasOwnProperty);
  }

  [undefined, 0, 123, Infinity, true, false, "string value"].forEach(function (value) {
    test(value);
  });
}

t2();

function t3() {
  var o = {
    get __proto__() {
      return "proto";
    },

    set __proto__(value) {
      this.__proto__value = value;
    }

  };
  console.log(Object.prototype, Object.getPrototypeOf(o));
  console.log(o.hasOwnProperty);
  o.hasOwnProperty("__proto__");
  o.__proto__ = "a value";
  o.__proto__;
}

t3();

function t4() {
  function foo(p) {
    return {
      a: 100,
      __proto__: p
    };
  } // If we incorrectly shared Type, we'll have wrong [[prototype]].


  var o1 = foo({
    b: 1
  });
  var o2 = foo({
    b: 2
  });
  var o3 = foo({
    b: 3
  });
  console.log(1, o1.b);
  console.log(2, o2.b);
  console.log(3, o3.b);
}

t4();

function t5() {
  function foo(a, b, __proto__) {
    var o = arguments;
    console.log(Object.prototype, Object.getPrototypeOf(o));
    console.log(Object.prototype, o.__proto__);
    console.log(!o.hasOwnProperty);
    console.log(1, o[0]);
    console.log(3, o[2].a);
    console.log(4, __proto__.b);
  }

  foo(1, 2, {
    a: 3,
    b: 4,
    c: 5
  });
}

t5();

function t6() {
  var o = JSON.parse('{ "a": 1, "b": 2, "__proto__": {"c": 3, "d": 4} }');
  console.log(Object.prototype, Object.getPrototypeOf(o));
  console.log(o.hasOwnProperty);
  console.log(3, o.__proto__.c);
}

t6();

function t7() {
  // Check if we accidentally changed global's [[prototype]] to a function when declaring a global
  // function with name __proto__ (see bottom of this file). If yes, we'd have "length" property.
  console.log(undefined, this.length);
}

t7();

function t9() {
  function f1() {
    var o = {
      a: 100,
      __proto__: new Number(200),
      b: 300
    };
    Object.keys(o).toString();
  }

  f1();

  function f2() {
    // enabled: [[prototype]]
    var o = {
      a: 100,
      __proto__: {
        c: "p0",
        d: "p1"
      },
      b: 300
    };
    var names = [];

    for (var name in o) {
      names.push(name);
    }

    Object.keys(o).toString();
    names.toString();
  }

  f2();
}

t9();

function t10() {
  // Test in current engine to use switch -ForceSerialized
  var o = {
    a: 100,
    __proto__: {
      c: "p0",
      d: "p1"
    },
    b: 300
  };
  Object.keys(o).toString();
}

t10(); // Used by: Verify not accidentally share code with global InitFld

function __proto__() {
  ;
}
