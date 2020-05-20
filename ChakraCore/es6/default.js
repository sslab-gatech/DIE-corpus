//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
try {
  function f(a = 1, b = class c {
    f() {
      return 2;
    }

  }) {
    ;
  }

  f();
} catch (e) {
  ;
}

function testa() {
  function foo(a, b = 2, c = 1, d = a + b + c, e) {
    return d;
  }

  foo();
  foo(undefined, undefined, undefined, undefined, undefined);
  console.log(foo(1), foo(1, 2));
  console.log(foo(1, 2), foo(1, 2, 1));
  console.log(foo(3, 5), foo(3, 5, 1));

  function sideEffects(a = 1, b = ++a, c = ++b, d = ++c) {
    return [a, b, c, d];
  }

  console.log(sideEffects());
  console.log(sideEffects(0, undefined, 0));

  function argsObj1(a = 15, b = arguments[1], c = arguments[0]) {
    return [a, b, c];
  }

  console.log([15, undefined, undefined], argsObj1());

  function argsObj2(a, b = 5 * arguments[0]) {
    return arguments[1];
  }

  console.log(undefined, argsObj2(5));
  this.val = {
    test: "test"
  };

  function thisTest(a = this.val, b = this.val = 1.1, c = this.val, d = this.val2 = 2, e = this.val2) {
    return [a, b, c, d, e];
  }

  console.log([{
    test: "test"
  }, 1.1, 1.1, 2, 2], thisTest());
  var expAValue, expBValue, expCValue;

  function f(a = 10, b = 20, c) {
    console.log(a, expAValue);
    console.log(b, expBValue);
    console.log(c, expCValue);
  }

  expAValue = null, expBValue = 20, expCValue = 1;
  f(null, undefined, 1);
  expAValue = null, expBValue = null, expCValue = null;
  f(null, null, null);
  expAValue = 10, expBValue = null, expCValue = 3;
  f(undefined, null, 3);

  function lambdaCapture() {
    this.propA = 1;

    var lambda = (a = this.propA++) => {
      a;
      this.propA;
    };

    lambda();
  }

  lambdaCapture(); // Function length with and without default

  function length1(a, b, c) {
    ;
  }

  function length2(a, b, c = 1) {
    ;
  }

  function length3(a, b = 1, c = 1) {
    ;
  }

  function length4(a, b = 1, c) {
    ;
  }

  function length5(a = 2, b, c) {
    ;
  }

  function length6(a = 2, b = 5, c = "str") {
    ;
  }

  console.log(length1.length);
  console.log(length2.length);
  console.log(length3.length);
  console.log(length4.length);
  console.log(length5.length);
  console.log(length6.length);
}

testa();

function testb() {
  function argsFoo(a = arguments[1] = 5, b) {
    return b;
  }

  ;
  console.log(undefined, argsFoo());
  console.log(undefined, argsFoo(1));
  console.log(2, argsFoo(1, 2));
}

testb();

function testc() {
  function foo1(a = x) {
    var x = 1;
    return a;
  }

  try {
    (function () {
      foo1();
    })();
  } catch (e) {
    ;
  }

  function foo2(a = () => x) {
    var x = 1;
    return a();
  }

  try {
    (function () {
      foo2();
    })();
  } catch (e) {
    ;
  }

  function foo3(a = () => x) {
    var x = 1;
    return a;
  } // a() undefined


  try {
    (function () {
      foo3()();
    })();
  } catch (e) {
    ;
  }

  function foo4(a = function () {
    return x;
  }) {
    var x = 1;
    return a();
  }

  try {
    (function () {
      foo4();
    })();
  } catch (e) {
    ;
  }

  function foo5(a = function bar() {
    return 1;
  }, b = bar()) {
    return [a(), b];
  }

  try {
    (function () {
      foo5();
    })();
  } catch (e) {
    ;
  }

  function foo6(a = b1) {
    {
      function b1() {
        return 2;
      }
    }
    console.log(1, a);
    console.log(2, b1());
  }

  var b1 = 1;
  foo6();
  var a1 = 10;

  function foo7(b = function () {
    return a1;
  }) {
    console.log(undefined, a1);
    var a1 = 20;
    console.log(20, a1);
    return b;
  }

  console.log(10, foo7()());

  function foo8(a = x1, b = function g() {
    return function h() {
      console.log(10, x1);
    };
  }) {
    var x1 = 100;
    b()();
  }

  ;
  var x1 = 10;
  foo8();
  var x2 = 1;

  function foo9(a = x2, b = function () {
    return x2;
  }) {
    {
      function x2() {
        ;
      }
    }
    var x2 = 2;
    return b;
  }

  console.log(1, foo9()());
  var x3 = 1;

  function foo10(a = x3, b = function (_x) {
    return x3;
  }) {
    var x3 = 2;
    return b;
  }

  console.log(1, foo10()());
}

testc();

function testd() {
  // These tests exercise logic in FindOrAddPidRef for when we need to look at parameter scope
  // Original sym in parameter scope
  var test0 = function (arg1 = _strvar0) {
    for (var _strvar0 in f32) {
      for (var _strvar0 in obj1) {
        ;
      }
    }
  }; // False positive PidRef (no decl) at parameter scope


  function test1() {
    for (var _strvar0 in a) {
      var f = function (b = _strvar0) {
        for (var _strvar0 in c) {
          ;
        }
      };
    }
  }

  function test2() {
    let l = z => {
      let w = {
        z
      };
      console.log(10, w.z);
      var z;
    };

    l(10);
  }

  ;
  test2();
}

testd();

function teste() {
  // Nested parameter scopes
  function arrow(a = ((x = 1) => x)()) {
    return a;
  }

  console.log(1, arrow());

  function nestedArrow(a = (b = x = () => 1) => 1) {
    return a;
  }

  console.log(1, nestedArrow()());
}

teste();

function testf() {
  var arguments;
}

testf();

function testg() {
  function f1(x = 10, y = 20, z) {
    x += 2;
    y += 2;
    z += 2;
    console.log(arguments[0], undefined);
    console.log(arguments[1], undefined);
    console.log(arguments[2], 30);
    arguments[0] = 1;
    arguments[1] = 2;
    arguments[2] = 3;
    console.log(x, 12);
    console.log(y, 22);
    console.log(z, 32);
  }

  f1(undefined, undefined, 30);

  function f2(x = 10, y = 20, z) {
    x += 2;
    y += 2;
    z += 2;
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    arguments[0] = 1;
    arguments[1] = 2;
    arguments[2] = 3;
    console.log(x);
    console.log(y);
    console.log(z);
  }

  f2(undefined, undefined, 30);

  function f3(x = 10, y = 20, z) {
    (function () {
      ;
    })();

    x += 2;
    y += 2;
    z += 2;
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    arguments[0] = 1;
    arguments[1] = 2;
    arguments[2] = 3;
    console.log(x, 12);
    console.log(y, 22);
    console.log(z, 32);
  }

  f3(undefined, undefined, 30);

  function f4(a, b, c, d = 1) {
    var e = 10;
    console.log(arguments[0]);

    (function () {
      ;
    })();
  }

  ;
  f4.call(1, 2);

  function f5(a, b, c, d = 1) {
    var e = 10;
    var d = 11;
    console.log(arguments[0]);

    (function () {
      ;
    })();
  }

  ;
  f5.call(1, 2);

  function f6() {
    return ((a, b = (c = arguments) => c) => b)(2);
  }

  ;
  console.log(f6(1)()[0]);
}

testg();

function testh() {
  function f1(a, b = arguments[0]) {
    var arguments = [10, 20];
    console.log(b);
    console.log(arguments[0]);
  }

  f1(1);

  function f2(a = 1, arguments) {
    console.log(2, arguments);
    var arguments = [10, 20];
    console.log(10, arguments[0]);
  }

  f2(undefined, 2);

  function f3(a, b = arguments[0]) {
    console.log(10, arguments());

    function arguments() {
      return 10;
    }

    console.log(1, b);
  }

  f3(1);

  function f4(a = 1, arguments, c = arguments) {
    console.log(10, arguments());
    console.log(2, c);

    function arguments() {
      return 10;
    }
  }

  f4(undefined, 2);

  function f5(a, b = arguments) {
    function arguments(c) {
      return arguments;
    }

    console.log(30, arguments(10, 20, 30)[2]);
    console.log(4, b[3]);
  }

  f5(1, undefined, 3, 4, 5);

  function f6(a, b = arguments) {
    function arguments(c) {
      if (!arguments.length) {
        return arguments.callee(10, 20, 30);
      }

      return arguments;
    }

    console.log(20, arguments()[1]);
    console.log(3, b[2]);
  }

  f6(1, undefined, 3, 4);

  function f7(a, b = function arguments(c) {
    if (!c) {
      return arguments.callee(10, 20);
    }

    return c + arguments[1];
  }) {
    console.log(30, b());
    console.log(1, arguments[0]);
  }

  f7(1);

  function f8(a, b = arguments) {
    var c = function arguments(c) {
      if (!arguments.length) {
        return arguments.callee(10, 20, 30);
      }

      return arguments;
    };

    console.log(30, c()[2]);
    console.log(1, b[0]);
  }

  f8(1);

  function f9(a = 0, b = {
    arguments() {
      return 10;
    }

  }, c = arguments) {
    with (b) {
      console.log(10, arguments());
    }
    console.log(1, arguments[0]);
    console.log(1, c[0]);
  }

  f9(1);

  function f10(a = 1, b = () => {
    console.log(undefined, arguments);
    var arguments = 100;
    console.log(100, arguments);
  }, c = arguments) {
    console.log(10, arguments[0]);
    console.log(10, c[0]);
    b();
  }

  f10(10);

  function f11(a = 1, b = () => {
    console.log(100, arguments());

    function arguments() {
      return 100;
    }
  }, c = arguments) {
    console.log(10, arguments[0]);
    b();
    console.log(10, c[0], "Arguments symbol is not affected in the param scope");
  }

  f11(10);

  function f12({
    a = 1,
    arguments
  }) {
    console.log(2, arguments);
    var arguments = [10, 20];
    console.log(10, arguments[0]);
  }

  f12({
    arguments: 2
  });

  function f13(a = 1, {
    arguments,
    c = arguments
  }) {
    console.log(10, arguments());
    console.log(2, c);

    function arguments() {
      return 10;
    }
  }

  f13(undefined, {
    arguments: 2
  });

  function f14(a, b = arguments[0]) {
    console.log(arguments[0]);
    {
      {
        function arguments() {
          return 10;
        }
      }
    }
    console.log(b);
    console.log(arguments());
  }

  f14(1);

  function f15() {
    function f16() {
      this.arguments = 1;
    }

    var obj = new f16();

    function arguments() {
      return 10;
    }

    console.log(1, obj.arguments);
  }

  ;
  f15();
}

testh();
