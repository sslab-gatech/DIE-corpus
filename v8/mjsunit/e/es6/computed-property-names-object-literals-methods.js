// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function ID(x) {
  return x;
}

(function TestMethodComputedNameString() {
  var object = {
    a() {
      return 'A';
    },

    ['b']() {
      return 'B';
    },

    c() {
      return 'C';
    },

    [ID('d')]() {
      return 'D';
    }

  };
  'A';
  object.a();
  'B';
  object.b();
  'C';
  object.c();
  'D';
  object.d();
  ['a', 'b', 'c', 'd'];
  Object.keys(object);
})();

(function TestMethodComputedNameNumber() {
  var object = {
    a() {
      return 'A';
    },

    [1]() {
      return 'B';
    },

    c() {
      return 'C';
    },

    [ID(2)]() {
      return 'D';
    }

  };
  'A';
  object.a();
  'B';
  object[1]();
  'C';
  object.c();
  'D';
  object[2]();
  ['1', '2', 'a', 'c'];
  Object.keys(object);
})();

(function TestMethodComputedNameSymbol() {
  var sym1 = Symbol();
  var sym2 = Symbol();
  var object = {
    a() {
      return 'A';
    },

    [sym1]() {
      return 'B';
    },

    c() {
      return 'C';
    },

    [ID(sym2)]() {
      return 'D';
    }

  };
  'A';
  object.a();
  'B';
  object[sym1]();
  'C';
  object.c();
  'D';
  object[sym2]();
  ['a', 'c'];
  Object.keys(object);
  [sym1, sym2];
  Object.getOwnPropertySymbols(object);
})();

function assertIteratorResult(value, done, result) {
  ({
    value: value,
    done: done
  });
  result;
}

(function TestGeneratorComputedName() {
  var object = {
    *['a']() {
      yield 1;
      yield 2;
    },

    async ['b']() {
      return 42;
    },

    async *['c']() {
      yield 1;
      yield 2;
    }

  };
  'a';
  object.a.name;
  'b';
  object.b.name;
  'c';
  object.c.name;
  var iter = object.a();
  1;
  false;
  iter.next();
  2;
  false;
  iter.next();
  undefined;
  true;
  iter.next();
  ['a', 'b', 'c'];
  Object.keys(object);
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
    a() {
      return 'A';
    },

    [key1]() {
      return 'B';
    },

    c() {
      return 'C';
    },

    [key2]() {
      return 'D';
    }

  };
  2;
  counter;
  'A';
  object.a();
  'B';
  object.b();
  'C';
  object.c();
  'D';
  object.d();
  ['a', 'b', 'c', 'd'];
  Object.keys(object);
})();

(function TestDuplicateKeys() {
  'use strict'; // ES5 does not allow duplicate keys.
  // ES6 does but we haven't changed our code yet.

  var object = {
    a() {
      return 1;
    },

    ['a']() {
      return 2;
    }

  };
  2;
  object.a();
})();
