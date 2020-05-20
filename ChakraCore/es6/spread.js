//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function p(x) {
  console.log(x);
}

function t1() {
  var a = [1, 2];
  var b = [3];
  var c = [];
  var d = [4, 5, 6];
  var joined = [];
  joined[0] = [1, 2, 3, 4, 5, 6];
  joined[1] = [...a, ...b, ...c, ...d];
  joined[2] = [1, 2, ...b, ...d];
  joined[3] = [...[1, 2], ...b, ...[], ...[...d]];
  joined[4] = [...[], ...joined[2], ...[], ...c];
  joined[5] = [...a, ...b, ...c, 4, 5, 6];

  for (var i = 0; i < joined.length; ++i) {
    console.log(joined[i], joined[0]);
  }
}

t1();

function t2() {
  var a = [1, 2];
  var b = [3];
  var c = [];
  var d = [4, 5, 6];

  function quad(a, b, c, x) {
    return a * x * x + b * x + c;
  }

  var result = [];
  result[0] = quad(1, 2, 3, 4);
  result[1] = quad(...a, ...b, ...c, 4);
  result[2] = quad(...a, ...b, ...[4]);
  result[3] = quad(...[...a, ...b, ...c], 4);

  for (var j = 0; j < result.length; ++j) {
    console.log(result[j], result[0]);
  }
}

t2();

function t3() {
  function quad(a, b, c, x) {
    return a * x * x + b * x + c;
  }

  var e = [7, 8];
  var f = [12, 13];
  var largeLiteral = [1, 2, 3, 4, 5, 6, ...e, 9, 10, 11, ...f, 14, 15, 16, 17, 18, 19, 20];
  var largeLiteralFull = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  console.log(largeLiteral, largeLiteralFull);
  console.log(quad(1, 2, 3, 4, 5, 6, ...e, 9, 10, 11, ...f, 14, 15, 16, 17, 18, 19, 20), quad(1, 2, 3, 4, 5, 6));
}

t3();

function t4() {
  console.log([1, undefined, 3], [...[1,, 3]]);
  console.log([undefined, undefined, 1, undefined, 2, 3, 1, 2, 3, 3], [...[...[,, 1,, 2, 3], ...[1, 2, 3], 3]]);
}

t4();

function t5() {
  function spreadValid1(a, b, c, d) {
    console.log(1, a);
    console.log(undefined, b);
    console.log(3, c);
    console.log(undefined, d);
  }

  spreadValid1(...[1,, 3]);

  function spreadValid2(e, f, g, h) {
    console.log(4, e);
    console.log(undefined, f);
    console.log(undefined, g);
    console.log(8, h);
  }

  spreadValid2(...[4,, ...[, 8]]);
}

t5();

function t6() {
  console.log(["s", "t", "r", "i", "n", "g"], [..."string"]);
}

t6();

function t10() {
  function foo(bar) {
    return bar;
  }

  try {
    foo(...null);
  } catch (e) {
    ;
  }

  try {
    [...null];
  } catch (e) {
    ;
  }

  try {
    foo(...undefined);
  } catch (e) {
    ;
  }

  try {
    [...undefined];
  } catch (e) {
    ;
  }
}

t10();

function t11() {
  let b = {
    get x() {
      return "abc";
    }

  };
  a = [1, ...(b.x + "")];
  console.log([1, "a", "b", "c"], a);
}

t11();

function t12() {
  var shortArray = [1, 2, 3]; // Doesn't use _alloca()

  var longArray = [5, 3, 8, 2, 4, 8, 5, 3, 1, 912341234, 33543, 12987, 3476, -2134124, 3245235]; // Uses _alloca()
  // Ctor tests

  console.log(shortArray, new Array(...shortArray));
  console.log(longArray, new Array(...longArray));

  function Storage(a, b, c, d, e, f, g, h, i) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;
    this.g = g;
    this.h = h;
    this.i = i;
  }

  console.log(new Storage(1, 2, 3), new Storage(...shortArray));
  console.log(new Storage(5, 3, 8, 2, 4, 8, 5, 3, 1), new Storage(...longArray)); // Eval

  print(...['"hello"']);
  print(longArray[0]);
  print(...longArray);
}

t12();

function t15() {
  function badFunc() {
    function shapeyConstructor(iijcze) {
      if ((NaN += /x/).b) {
        iijcze.d = new 4277(new [1,,](/x/, ''), ...y);
      }
    }

    for (var z in [/x/, /x/, true]) {
      let drjotv = shapeyConstructor(z);
    }
  }

  badFunc();
  badFunc();
}

t15();

function t16() {
  function badFunc() {
    12345(...[]);
  }

  try {
    badFunc();
    badFunc();
  } catch (e) {
    ;
  }

  ;
}

t16();

function t19() {
  var x = [0x40];
  x.length = 0x9;
  Object.defineProperty(Array.prototype, 1, {
    get: function () {
      x.length = 0;
    }
  });

  var f = function () {
    console.log(arguments.length, 2);
  };

  f(...x);
}

t19();

function t21() {
  var overrideCalled = false;
  var arrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
  var arrayIteratorProtoNext = arrayIteratorProto.next;

  function testArrayIteratorProto() {
    var a = [1];

    function f() {
      ;
    }

    f(...a);
    console.log(overrideCalled);
    overrideCalled = false;
    var b = [...a];
    console.log(overrideCalled);
    overrideCalled = false;
  }

  var overrideFunc = function () {
    overrideCalled = true;
    return arrayIteratorProtoNext.apply(this, arguments);
  };

  arrayIteratorProto.next = overrideFunc;
  testArrayIteratorProto(); // Restore the original prototype .next

  arrayIteratorProto.next = arrayIteratorProtoNext;

  function getIterableObjNextDesc() {
    return {
      get: function next() {
        overrideCalled = true;
        return function () {
          return {
            value: 0,
            done: 1
          };
        };
      }
    };
  } // Change built-in array iterator's next getter function


  var builtinArrayPrototypeIteratorNextDesc = Object.getOwnPropertyDescriptor(arrayIteratorProto, "next");
  Object.defineProperty(arrayIteratorProto, "next", getIterableObjNextDesc());
  testArrayIteratorProto();
  Object.defineProperty(arrayIteratorProto, "next", builtinArrayPrototypeIteratorNextDesc);
}

t21();

function t22() {
  var result = [];

  function foo(a, b, c, d) {
    result.push(a);
    result.push(b);
    result.push(c);
    result.push(d);
  }

  var a = [5, 6, 7];
  a.two = 7;
  Object.defineProperty(a, '2', {
    get: function () {
      this[3] = 8;
      return this.two;
    }
  });
  foo(...a);
  console.log(4, result.length);
  console.log(5, result[0]);
  console.log(6, result[1]);
  console.log(7, result[2]);
  console.log(8, result[3]);
  a = [5, 6, 7];
  a.two = 7;
  Object.defineProperty(a, '2', {
    get: function () {
      this[3] = 8;
      return this.two;
    }
  });
  var b = [...a];
  result = b;
  console.log(4, result.length);
  console.log(5, result[0]);
  console.log(6, result[1]);
  console.log(7, result[2]);
  console.log(8, result[3]);
}

t22();

function t23() {
  var result = [];

  function foo(a, b, c, d) {
    result.push(a);
    result.push(b);
    result.push(c);
    result.push(d);
  }

  function bar() {
    arguments.two = 7; // Note arguments object does not change its length like an array when new elements are added,
    // but its length is writable and we can change it ourselves

    Object.defineProperty(arguments, '2', {
      get: function () {
        this[3] = 8;
        this.length++;
        return this.two;
      }
    });
    foo(...arguments);
  }

  bar(5, 6, 7);
  console.log(4, result.length);
  console.log(5, result[0]);
  console.log(6, result[1]);
  console.log(7, result[2]);
  console.log(8, result[3]);
  result = [];

  function fuz() {
    arguments.two = 7; // Note arguments object does not change its length like an array when new elements are added,
    // but its length is writable and we can change it ourselves

    Object.defineProperty(arguments, '2', {
      get: function () {
        this[3] = 8;
        this.length++;
        return this.two;
      }
    });
    var b = [...arguments];
    result = b;
  }

  fuz(5, 6, 7);
  console.log(4, result.length);
  console.log(5, result[0]);
  console.log(6, result[1]);
  console.log(7, result[2]);
  console.log(8, result[3]);
}

t23();

function t25() {
  function foo() {
    var args = [...arguments];
    console.log([101, 102, 201], args);
  }

  var first = [101, 102];
  var obj = {};
  Object.defineProperty(obj, '2', {
    get: function () {
      assert.fail('this should not have called');
      return 103;
    }
  });
  var second = [];
  second.length = 1;
  var getterCalled = false;
  Object.defineProperty(second, '0', {
    get: function () {
      // Changing the state of the first spread
      first.__proto__ = obj;
      first.length = 3;
      getterCalled = true;
      return 201;
    }
  });
  foo(...first, ...second);
  console.log(getterCalled);
}

t25();

function t26() {
  var first = [101, 102];
  var obj = {};
  Object.defineProperty(obj, '2', {
    get: function () {
      assert.fail('this should not have called');
      return 103;
    }
  });
  var second = [];
  second.length = 1;
  var getterCalled = false;
  Object.defineProperty(second, '0', {
    get: function () {
      // Changing the state of the first spread
      first.__proto__ = obj;
      first.length = 3;
      getterCalled = true;
      return 201;
    }
  });
  var result = [...first, ...second];
  console.log([101, 102, 201], result);
  console.log(getterCalled);
}

t26();

function t27() {
  var first = new Uint32Array([101, 102]);
  var second = [];
  second.length = 1;
  var getterCalled = false;
  Object.defineProperty(second, '0', {
    get: function () {
      // Changing the state of the first spread
      first[0] = 11; // This should not affect the resultant spread.

      getterCalled = true;
      return 201;
    }
  });
  var result = [...first, ...second];
  console.log([101, 102, 201], result);
  console.log(getterCalled);
}

t27();
