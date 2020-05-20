//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function f() {
  var y = "before modification";

  var ret1 = function () {
    console.log(y);
  };

  y = "after modification";

  var ret2 = function () {
    console.log(y);
  };

  return [ret1, ret2];
}

(function () {
  function f() {
    ;
  }

  function g() {
    ;
  }

  var savef = f;
  f(f = g);
  f = savef;

  function foo() {
    typeof f;
    typeof g;
  }
})();

function g(funcs) {
  funcs[1]();
  funcs[0]();
}

var clo = f();
g(clo);
g(clo); // Side-effect through a closure without eval.

(function () {
  var f = function () {
    a = 2;
    return 1;
  };

  var a = 1;
  a + (f() + a);
})(); // Side-effect through a closure with eval.


(function () {
  var f = function () {
    a = 2;
    return 1;
  };

  var a = 1;
  a + (f() + a);
})(); // Side-effect through a closure inside eval.


(function () {
  var f = function () {
    return 1;
  };

  var a = 1;
  a + (f() + a);
})();
