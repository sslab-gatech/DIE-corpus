//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
(function () {
  var a;
  a <<= 1;
  a = 1 <= a;
  return a;
})();

(function () {
  var a;
  a <<= 1;
  a = 1 < a;
  return a;
})();

(function () {
  var a;
  a <<= 1;
  a = 1 == a;
  return a;
})();

(function () {
  var a;
  a <<= 1;
  a = 1 != a;
  return a;
})();

(function () {
  var a;
  a <<= 1;
  a = 1 > a;
  return a;
})();

(function () {
  var a;
  a <<= 1;
  a = 1 >= a;
  return a;
})();

(function () {
  var a;
  a <<= 1;
  a = 1 !== a;
  return a;
})();

(function () {
  var a;
  a <<= 1;
  a = 1 === a;
  return a;
})();

(function (b) {
  var a;
  a <<= 1;
  a = a <= b;
  return a;
})(1);

(function (b) {
  var a;
  a <<= 1;
  a = a < b;
  return a;
})(1);

(function (b) {
  var a;
  a <<= 1;
  a = a == b;
  return a;
})(1);

(function (b) {
  var a;
  a <<= 1;
  a = a != b;
  return a;
})(1);

(function (b) {
  var a;
  a <<= 1;
  a = a === b;
  return a;
})(1);

(function (b) {
  var a;
  a <<= 1;
  a = a !== b;
  return a;
})(1);

(function (b) {
  var a;
  a <<= 1;
  a = a >= b;
  return a;
})(1);

(function (b) {
  var a;
  a <<= 1;
  a = a > b;
  return a;
})(1);

(function (a) {
  a = a != a;
  return a;
})(1);

(function (a) {
  a = a === a;
  return a;
})(1);

(function (p2, p3) {
  return (p2 = p3 * 3) + p2;
})(10, 20);

(function (p2, p3) {
  return (p2 = p3 * 3) + (p2 = p3 * 4);
})(46, 2);

(function (p2, p3) {
  return (p2 = p3 * -8323432) + p3;
})(44, 23);

(function (p2, p3) {
  return p3 + (p3 = p2 * p2);
})(-46, -20);

(function (p2, p3) {
  return (p3 = p2 * p3) + p3;
})(-23, 20);

(function (p2, p3) {
  return (p3 = p2 * p3 * 4) + p3;
})(10, 20);

(function (p2, p3) {
  return (p3 = p2 * 23) + p3;
})(10, new Number(-234));

(function (p2, p3, p4) {
  return (p3 = p2 * p2) + p3 + (p4 = p3 * p2);
})(10, 20, 30);

function test27() {
  var obj0 = {};
  var arrObj0 = {};
  var ui32 = new Uint32Array(256);
  var c = 1;
  obj0.prop0 = 1;

  function bar1() {
    ;
  }

  if (ui32[1] == 1 > 1) {
    if (new bar1().prop0) {
      ;
    } else {
      c = arrObj0.prop0;
    }
  }
}

test27();

function test28(a) {
  a = String.fromCharCode(a);
}

test28(10);

function test29helper(_array2tmp) {
  for (var i in _array2tmp) {
    console.log(i);
  }
}

function test29() {
  var func0 = function () {
    test29helper([h]);
  };

  var h = -2147483648;
  func0();
  ++h;
  ++h; //creates a missing value

  func0();
}

function test30() {
  var floatary = [-1.5];

  if (floatary.length) {
    ;
  } else {
    // Array expression
    var _array1 = [-1 * -1 - 2147483647];
  }
}

test30();

(function test32() {
  var shouldBailout = false;

  function test0() {
    var arrObj0 = {};

    var func1 = function () {
      var __loopvar4 = 0;

      for (var strvar0 in i32) {
        if (strvar0.indexOf('method') != -1) {
          continue;
        }

        if (__loopvar4++ > 3) {
          break;
        }

        arrObj0.length = 1;
        continue;
        ary0 = arguments;
      }
    };

    Object.prototype.method0 = func1;
    var i32 = new Int32Array(1);
    var e = 1;
    e &= shouldBailout ? (Object.defineProperty(arrObj0, 'length', {
      set: function (_x) {
        console.log('arrObj0.length setter');
      },
      configurable: true
    }), arrObj0.method0()) : arrObj0.method0();
  }

  ; // generate profile

  test0();
  shouldBailout = true;
  test0();
})();

(function test33() {
  try {
    function inlinee(arg0, arg1, arg2) {
      throw new Object();
    }

    function inliner(arg0, arg1) {
      ;
    }

    function func() {
      inliner(29, 39, inlinee(22, 33, 44, 55));
    }

    func(24, 42);
  } catch (e) {
    ;
  }

  ;
})();

(function test34() {
  var a;
  a = typeof a == "boolean";
  console.log(a);
})();

(function test34() {
  for (var x = 1; x >= 0; x--) {
    var f = [];
    var c = f[0];
    c = f.push(c);
    console.log(f[0]);
  }
})();

function test35() {
  if (typeof EvalError == "test") //use random comparison
    {
      return true;
    }

  return false;
}

test35();

function test36() {
  (function () {
    for (let hvkbnr in null) {
      throw 'u5623';
    }
  })();
}

try {
  test36();
} catch (e) {
  ;
}

try {
  test36();
} catch (e) {
  ;
}

var test37 = function () {
  ;
};

test37.prototype.B = function (a, b, c, d) {
  return a + b + c + d;
};

var A = new test37();

function F() {
  this.init.apply(this, arguments);
}

F.prototype.init = function () {
  A.B.apply(this, arguments);
};

function bar() {
  return new F(10, 30, 40, 50);
}

bar();
bar();

var test38 = function (d, j, a) {
  do {
    if (d >= j) {
      break;
    }
  } while (1);

  for (; d < j;) {
    ;
  }

  return 10;
};

(function test41() {
  var obj0 = {};
  var arrObj0 = {};

  var func1 = function () {
    ;
  };

  obj0.method0 = func1;
  var IntArr1 = new Array();
  Object.prototype.prop0 = 1;
  var __loopvar0 = 0;

  for (var _strvar20 in arrObj0) {
    if (_strvar20.indexOf('method') != -1) {
      continue;
    }

    if (__loopvar0++ > 3) {
      break;
    }

    arrObj0[_strvar20] = Math.pow(IntArr1.push(obj0.method0(), arrObj0.prop1 != arrObj0.prop0, typeof obj0.prop0 == 'number', typeof 781458996 != 'number', IntArr1[(Object.prototype.prop0 >= 0 ? Object.prototype.prop0 : 0) & 0XF], typeof this.prop0 == 'string', typeof this.prop0 == 'string'), 1);

    function func22() {
      Math.pow(IntArr1.push(obj0.method0(), arrObj0.prop1 != arrObj0.prop0, typeof obj0.prop0 == 'number', typeof 781458996 != 'number', IntArr1[(Object.prototype.prop0 >= 0 ? Object.prototype.prop0 : 0) & 0XF], typeof this.prop0 == 'string', typeof this.prop0 == 'string'), 1);
    }
  }
})();

(function test42() {
  var ary = new Array(10);
  arrObj0 = Object.prototype;
  arrObj0[5] = "temp";
  ary[1] * (ary.unshift() - ary[1]);
})();

(function test43() {
  //Bug seen with -prejit, adding a generic test case
  var obj0 = {};
  var arrObj0 = {};
  var VarArr0 = [arrObj0];
  var v58 = {
    init: function () {
      return function bar() {
        arrObj0.prop0;
      };
    }
  };
  gc();
  obj0.method1 = v58.init();
  obj0.method1.prototype = {}; //Property guard should get invalidated

  arrObj0 = new obj0.method1();
})();

(function test44() {
  function test0() {
    // Snippet : Native array profile information update
    function v2496(v2497) {
      var v2498 = new Array(v2497);

      for (var v2500 = 0; v2500 < v2497; v2500++) {
        v2498 = v2500;
      }

      return v2498;
    }

    function v2502(v2499) {
      var v2503 = 0;

      for (var v2501 in v2499) {
        v2503 += v2499[v2501];
      }

      return v2503;
    }

    var v2504 = v2496(5);
    v2502(v2504); // create missing value and transform the array

    if (1 % 5 <= 3) {
      v2504[v2504.length + 5] = 1;
    }

    var v2505 = v2496(10);
    v2502(v2505);
  }

  test0();
  test0();
  test0();
})();

(function test46() {
  function compare(a, b) {
    ;
  }

  var boundFunction = compare.bind();
  Object.getOwnPropertyNames(boundFunction);
})();

(function test48() {
  var a = Math.random();
})();
