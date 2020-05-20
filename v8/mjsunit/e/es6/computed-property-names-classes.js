// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

function ID(x) {
  return x;
}

(function TestClassMethodString() {
  class C {
    a() {
      return 'A';
    }

    ['b']() {
      return 'B';
    }

    c() {
      return 'C';
    }

    [ID('d')]() {
      return 'D';
    }

  }

  'A';
  new C().a();
  'B';
  new C().b();
  'C';
  new C().c();
  'D';
  new C().d();
  [];
  Object.keys(C.prototype);
  ['constructor', 'a', 'b', 'c', 'd'];
  Object.getOwnPropertyNames(C.prototype);
})();

(function TestClassMethodNumber() {
  class C {
    a() {
      return 'A';
    }

    [1]() {
      return 'B';
    }

    c() {
      return 'C';
    }

    [ID(2)]() {
      return 'D';
    }

  }

  'A';
  new C().a();
  'B';
  new C()[1]();
  'C';
  new C().c();
  'D';
  new C()[2]();
  [];
  Object.keys(C.prototype);
  ['1', '2', 'constructor', 'a', 'c'];
  Object.getOwnPropertyNames(C.prototype);
})();

(function TestClassMethodSymbol() {
  var sym1 = Symbol();
  var sym2 = Symbol();

  class C {
    a() {
      return 'A';
    }

    [sym1]() {
      return 'B';
    }

    c() {
      return 'C';
    }

    [ID(sym2)]() {
      return 'D';
    }

  }

  'A';
  new C().a();
  'B';
  new C()[sym1]();
  'C';
  new C().c();
  'D';
  new C()[sym2]();
  [];
  Object.keys(C.prototype);
  ['constructor', 'a', 'c'];
  Object.getOwnPropertyNames(C.prototype);
  [sym1, sym2];
  Object.getOwnPropertySymbols(C.prototype);
})();

(function TestStaticClassMethodString() {
  class C {
    static a() {
      return 'A';
    }

    static ['b']() {
      return 'B';
    }

    static c() {
      return 'C';
    }

    static ['d']() {
      return 'D';
    }

  }

  'A';
  C.a();
  'B';
  C.b();
  'C';
  C.c();
  'D';
  C.d();
  [];
  Object.keys(C);
  ['length', 'prototype', 'a', 'b', 'c', 'd', 'name'];
  Object.getOwnPropertyNames(C);
})();

(function TestStaticClassMethodNumber() {
  class C {
    static a() {
      return 'A';
    }

    static [1]() {
      return 'B';
    }

    static c() {
      return 'C';
    }

    static [2]() {
      return 'D';
    }

  }

  'A';
  C.a();
  'B';
  C[1]();
  'C';
  C.c();
  'D';
  C[2]();
  [];
  Object.keys(C);
  ['1', '2', 'length', 'prototype', 'a', 'c', 'name'];
  Object.getOwnPropertyNames(C);
})();

(function TestStaticClassMethodSymbol() {
  var sym1 = Symbol();
  var sym2 = Symbol();

  class C {
    static a() {
      return 'A';
    }

    static [sym1]() {
      return 'B';
    }

    static c() {
      return 'C';
    }

    static [sym2]() {
      return 'D';
    }

  }

  'A';
  C.a();
  'B';
  C[sym1]();
  'C';
  C.c();
  'D';
  C[sym2]();
  [];
  Object.keys(C);
  ['length', 'prototype', 'a', 'c', 'name'];
  Object.getOwnPropertyNames(C);
  [sym1, sym2];
  Object.getOwnPropertySymbols(C);
})();

function assertIteratorResult(value, done, result) {
  ({
    value: value,
    done: done
  });
  result;
}

(function TestGeneratorComputedName() {
  class C {
    *['a']() {
      yield 1;
      yield 2;
    }

  }

  var iter = new C().a();
  1;
  false;
  iter.next();
  2;
  false;
  iter.next();
  undefined;
  true;
  iter.next();
  [];
  Object.keys(C.prototype);
  ['constructor', 'a'];
  Object.getOwnPropertyNames(C.prototype);
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

  class C {
    a() {
      return 'A';
    }

    [key1]() {
      return 'B';
    }

    c() {
      return 'C';
    }

    [key2]() {
      return 'D';
    }

  }

  2;
  counter;
  'A';
  new C().a();
  'B';
  new C().b();
  'C';
  new C().c();
  'D';
  new C().d();
  [];
  Object.keys(C.prototype);
  ['constructor', 'a', 'b', 'c', 'd'];
  Object.getOwnPropertyNames(C.prototype);
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

  class C {
    a() {
      return 'A';
    }

    [key1]() {
      return 'B';
    }

    c() {
      return 'C';
    }

    [key2]() {
      return 'D';
    }

  }

  2;
  counter;
  'A';
  new C().a();
  'B';
  new C()[1]();
  'C';
  new C().c();
  'D';
  new C()[2]();
  [];
  Object.keys(C.prototype);
  ['1', '2', 'constructor', 'a', 'c'];
  Object.getOwnPropertyNames(C.prototype);
})();

(function TestGetter() {
  class C {
    get ['a']() {
      return 'A';
    }

  }

  'A';
  new C().a;

  class C2 {
    get b() {}

    get ['b']() {
      return 'B';
    }

  }

  'B';
  new C2().b;

  class C3 {
    get c() {}

    get ['c']() {}

    get ['c']() {
      return 'C';
    }

  }

  'C';
  new C3().c;

  class C4 {
    get ['d']() {}

    get d() {
      return 'D';
    }

  }

  'D';
  new C4().d;
})();

(function TestSetter() {
  var calls = 0;

  class C {
    set ['a'](_) {
      calls++;
    }

  }

  new C().a = 'A';
  1;
  calls;
  calls = 0;

  class C2 {
    set b(_) {}

    set ['b'](_) {
      calls++;
    }

  }

  new C2().b = 'B';
  1;
  calls;
  calls = 0;

  class C3 {
    set c(_) {}

    set ['c'](_) {}

    set ['c'](_) {
      calls++;
    }

  }

  new C3().c = 'C';
  1;
  calls;
  calls = 0;

  class C4 {
    set ['d'](_) {}

    set d(_) {
      calls++;
    }

  }

  new C4().d = 'D';
  1;
  calls;
})();

(function TestPrototype() {
  (function () {
    class C {
      static ['prototype']() {
        return 1;
      }

    }
  })();

  TypeError;

  (function () {
    class C2 {
      static get ['prototype']() {
        return 2;
      }

    }
  })();

  TypeError;

  (function () {
    class C3 {
      static set ['prototype'](x) {
        3;
        x;
      }

    }
  })();

  TypeError;

  (function () {
    class C4 {
      static *['prototype']() {
        yield 1;
        yield 2;
      }

    }
  })();

  TypeError;
})();

(function TestPrototypeConcat() {
  (function () {
    class C {
      static ['pro' + 'tot' + 'ype']() {
        return 1;
      }

    }
  })();

  TypeError;

  (function () {
    class C2 {
      static get ['pro' + 'tot' + 'ype']() {
        return 2;
      }

    }
  })();

  TypeError;

  (function () {
    class C3 {
      static set ['pro' + 'tot' + 'ype'](x) {
        3;
        x;
      }

    }
  })();

  TypeError;

  (function () {
    class C4 {
      static *['pro' + 'tot' + 'ype']() {
        yield 1;
        yield 2;
      }

    }
  })();

  TypeError;
})();

(function TestConstructor() {
  // Normally a constructor property is not allowed.
  class C {
    ['constructor']() {
      return 1;
    }

  }

  C !== C.prototype.constructor;
  1;
  new C().constructor();

  class C2 {
    get ['constructor']() {
      return 2;
    }

  }

  2;
  new C2().constructor;
  var calls = 0;

  class C3 {
    set ['constructor'](x) {
      3;
      x;
      calls++;
    }

  }

  new C3().constructor = 3;
  1;
  calls;

  class C4 {
    *['constructor']() {
      yield 1;
      yield 2;
    }

  }

  var iter = new C4().constructor();
  1;
  false;
  iter.next();
  2;
  false;
  iter.next();
  undefined;
  true;
  iter.next();
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
    class C {
      [throwMyError()]() {
        ;
      }

    }
  })();

  MyError();

  (function () {
    class C {
      get [throwMyError()]() {
        return 42;
      }

    }
  })();

  MyError();

  (function () {
    class C {
      set [throwMyError()](_) {
        ;
      }

    }
  })();

  MyError();
})();

(function TestTdzName() {
  (function () {
    class C {
      [C]() {
        ;
      }

    }
  })();

  ReferenceError;

  (function () {
    class C {
      get [C]() {
        return 42;
      }

    }
  })();

  ReferenceError;

  (function () {
    class C {
      set [C](_) {
        ;
      }

    }
  })();

  ReferenceError;
})();
