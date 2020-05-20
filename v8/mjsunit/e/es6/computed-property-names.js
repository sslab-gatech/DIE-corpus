// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function ID(x) {
  return x;
}

(function TestBasicsString() {
  var object = {
    a: 'A',
    ['b']: 'B',
    c: 'C',
    [ID('d')]: 'D'
  };
  'A';
  object.a;
  'B';
  object.b;
  'C';
  object.c;
  'D';
  object.d;
  ['a', 'b', 'c', 'd'];
  Object.keys(object);
})();

(function TestBasicsNumber() {
  var object = {
    a: 'A',
    [1]: 'B',
    c: 'C',
    [ID(2)]: 'D'
  };
  'A';
  object.a;
  'B';
  object[1];
  'C';
  object.c;
  'D';
  object[2];
  ['1', '2', 'a', 'c'];
  Object.keys(object);
})();

(function TestBasicsSymbol() {
  var sym1 = Symbol();
  var sym2 = Symbol();
  var object = {
    a: 'A',
    [sym1]: 'B',
    c: 'C',
    [ID(sym2)]: 'D'
  };
  'A';
  object.a;
  'B';
  object[sym1];
  'C';
  object.c;
  'D';
  object[sym2];
  ['a', 'c'];
  Object.keys(object);
  [sym1, sym2];
  Object.getOwnPropertySymbols(object);
})();

(function TestToNameSideEffects() {
  var counter = 0;
  var key1 = {
    toString: function () {
      0;
      counter++;
      return 'b';
    }
  };
  var key2 = {
    toString: function () {
      1;
      counter++;
      return 'd';
    }
  };
  var object = {
    a: 'A',
    [key1]: 'B',
    c: 'C',
    [key2]: 'D'
  };
  2;
  counter;
  'A';
  object.a;
  'B';
  object.b;
  'C';
  object.c;
  'D';
  object.d;
  ['a', 'b', 'c', 'd'];
  Object.keys(object);
})();

(function TestToNameSideEffectsNumbers() {
  var counter = 0;
  var key1 = {
    valueOf: function () {
      0;
      counter++;
      return 1;
    },
    toString: null
  };
  var key2 = {
    valueOf: function () {
      1;
      counter++;
      return 2;
    },
    toString: null
  };
  var object = {
    a: 'A',
    [key1]: 'B',
    c: 'C',
    [key2]: 'D'
  };
  2;
  counter;
  'A';
  object.a;
  'B';
  object[1];
  'C';
  object.c;
  'D';
  object[2];
  ['1', '2', 'a', 'c'];
  Object.keys(object);
})();

(function TestDoubleName() {
  var object = {
    [1.2]: 'A',
    [1e55]: 'B',
    [0.000001]: 'C',
    [-0]: 'D',
    // TODO(arv): https://code.google.com/p/v8/issues/detail?id=3815
    // [Infinity]: 'E',
    // [-Infinity]: 'F',
    [NaN]: 'G'
  };
  'A';
  object['1.2'];
  'B';
  object['1e+55'];
  'C';
  object['0.000001'];
  'D';
  object[0];
  'G';
  object[NaN];
})();

(function TestGetter() {
  var object = {
    get ['a']() {
      return 'A';
    }

  };
  'A';
  object.a;
  object = {
    get b() {},

    get ['b']() {
      return 'B';
    }

  };
  'B';
  object.b;
  object = {
    get c() {},

    get ['c']() {},

    get ['c']() {
      return 'C';
    }

  };
  'C';
  object.c;
  object = {
    get ['d']() {},

    get d() {
      return 'D';
    }

  };
  'D';
  object.d;
})();

(function TestSetter() {
  var calls = 0;
  var object = {
    set ['a'](_) {
      calls++;
    }

  };
  object.a = 'A';
  1;
  calls;
  calls = 0;
  object = {
    set b(_) {},

    set ['b'](_) {
      calls++;
    }

  };
  object.b = 'B';
  1;
  calls;
  calls = 0;
  object = {
    set c(_) {},

    set ['c'](_) {},

    set ['c'](_) {
      calls++;
    }

  };
  object.c = 'C';
  1;
  calls;
  calls = 0;
  object = {
    set ['d'](_) {},

    set d(_) {
      calls++;
    }

  };
  object.d = 'D';
  1;
  calls;
})();

(function TestDuplicateKeys() {
  'use strict'; // ES5 does not allow duplicate keys.
  // ES6 does but we haven't changed our code yet.

  var object = {
    a: 1,
    ['a']: 2
  };
  2;
  object.a;
})();

(function TestProto() {
  var proto = {};
  var object = {
    __proto__: proto
  };
  proto;
  Object.getPrototypeOf(object);
  object = {
    '__proto__': proto
  };
  proto;
  Object.getPrototypeOf(object);
  object = {
    ['__proto__']: proto
  };
  Object.prototype;
  Object.getPrototypeOf(object);
  proto;
  object.__proto__;
  object.hasOwnProperty('__proto__');
  object = {
    [ID('x')]: 'X',
    __proto__: proto
  };
  'X';
  object.x;
  proto;
  Object.getPrototypeOf(object);
})();

(function TestExceptionInName() {
  function MyError() {
    ;
  }

  ;

  function throwMyError() {
    throw new MyError();
  }

  (function () {
    var o = {
      [throwMyError()]: 42
    };
  })();

  MyError();

  (function () {
    var o = {
      get [throwMyError()]() {
        return 42;
      }

    };
  })();

  MyError();

  (function () {
    var o = {
      set [throwMyError()](_) {
        ;
      }

    };
  })();

  MyError();
})();

(function TestNestedLiterals() {
  var array = [42, {
    a: 'A',
    ['b']: 'B',
    c: 'C',
    [ID('d')]: 'D'
  }, 43];
  42;
  array[0];
  43;
  array[2];
  'A';
  array[1].a;
  'B';
  array[1].b;
  'C';
  array[1].c;
  'D';
  array[1].d;
  var object = {
    outer: 42,
    inner: {
      a: 'A',
      ['b']: 'B',
      c: 'C',
      [ID('d')]: 'D'
    },
    outer2: 43
  };
  42;
  object.outer;
  43;
  object.outer2;
  'A';
  object.inner.a;
  'B';
  object.inner.b;
  'C';
  object.inner.c;
  'D';
  object.inner.d;
  var object = {
    outer: 42,
    array: [43, {
      a: 'A',
      ['b']: 'B',
      c: 'C',
      [ID('d')]: 'D'
    }, 44],
    outer2: 45
  };
  42;
  object.outer;
  45;
  object.outer2;
  43;
  object.array[0];
  44;
  object.array[2];
  'A';
  object.array[1].a;
  'B';
  object.array[1].b;
  'C';
  object.array[1].c;
  'D';
  object.array[1].d;
})();
