// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Flags: --allow-unsafe-function-constructor
(function testReflectConstructArity() {
  2;
  Reflect.construct.length;
})();

(function testReflectConstructNonConstructor() {
  (function () {
    new Reflect.construct(function () {
      ;
    }, []);
  })();

  TypeError;
})();

(function testReflectConstructArg1NonConstructor() {
  try {
    Reflect.construct(() => {
      ;
    }, []);
  } catch (e) {
    e;
    TypeError;
    "() => {} is not a constructor";
    e.message;
    return;
  }

  "Exception expected";
})();

(function testReflectConstructArg3NonConstructor() {
  try {
    Reflect.construct(function () {
      ;
    }, [], () => {
      ;
    });
  } catch (e) {
    e;
    TypeError;
    "() => {} is not a constructor";
    e.message;
    return;
  }

  "Exception expected";
})();

(function testReflectConstructBasic() {
  function Constructor() {
    "use strict";

    ;
  }

  Reflect.construct(Constructor, []);
  Constructor();
})();

(function testReflectConstructBasicSloppy() {
  function Constructor() {
    ;
  }

  Reflect.construct(Constructor, []);
  Constructor();
})();

(function testReflectConstructReturnSomethingElseStrict() {
  var R = {};

  function Constructor() {
    "use strict";

    return R;
  }

  R;
  Reflect.construct(Constructor, []);
})();

(function testReflectConstructReturnSomethingElseSloppy() {
  var R = {};

  function Constructor() {
    return R;
  }

  R;
  Reflect.construct(Constructor, []);
})();

(function testReflectConstructNewTargetStrict() {
  "use strict";

  function Constructor() {
    this[9] = 1;
  }

  var O = Reflect.construct(Constructor, [], Array);
  1;
  O[9];
  Array.isArray(O);
  0;
  O.length;
  Array.prototype;
  Object.getPrototypeOf(O);
})();

(function testReflectConstructNewTargetSloppy() {
  function Constructor() {
    this[9] = 1;
  }

  var O = Reflect.construct(Constructor, [], Array);
  1;
  O[9];
  Array.isArray(O);
  0;
  O.length;
  Array.prototype;
  Object.getPrototypeOf(O);
})();

(function testReflectConstructNewTargetStrict2() {
  "use strict";

  function Constructor() {
    this[9] = 1;
  }

  Constructor.prototype.add = function (x) {
    this[this.length] = x;
    return this;
  };

  var O = Reflect.construct(Array, [1, 2, 3], Constructor); // Exotic Array object with Constructor.prototype

  Array.isArray(O);
  Constructor.prototype;
  Object.getPrototypeOf(O);
  O instanceof Array;
  3;
  O.length;
  undefined;
  O[9];
  O;
  O.add(4);
  4;
  O.length;
  4;
  O[3];
})();

(function testReflectConstructNewTargetSloppy2() {
  function Constructor() {
    this[9] = 1;
  }

  Constructor.prototype.add = function (x) {
    this[this.length] = x;
    return this;
  };

  var O = Reflect.construct(Array, [1, 2, 3], Constructor); // Exotic Array object with Constructor.prototype

  Array.isArray(O);
  Constructor.prototype;
  Object.getPrototypeOf(O);
  O instanceof Array;
  3;
  O.length;
  undefined;
  O[9];
  O;
  O.add(4);
  4;
  O.length;
  4;
  O[3];
})();

(function testReflectConstructNewTargetStrict3() {
  "use strict";

  function A() {
    ;
  }

  function B() {
    ;
  }

  var O = Reflect.construct(A, [], B); // TODO(caitp): bug: newTarget prototype is not used if it is not
  // explicitly set.
  //assertSame(B.prototype, Object.getPrototypeOf(O));
})();

(function testReflectConstructNewTargetSloppy3() {
  function A() {
    ;
  }

  function B() {
    ;
  }

  var O = Reflect.construct(A, [], B); // TODO(caitp): bug: newTarget prototype is not used if it is not
  // explicitly set.
  //assertSame(B.prototype, Object.getPrototypeOf(O));
})();

(function testAppliedArgumentsLength() {
  function lengthStrict() {
    'use strict';

    this.a = arguments.length;
  }

  function lengthSloppy() {
    this.a = arguments.length;
  }

  0;
  Reflect.construct(lengthStrict, []).a;
  0;
  Reflect.construct(lengthSloppy, []).a;
  0;
  Reflect.construct(lengthStrict, {}).a;
  0;
  Reflect.construct(lengthSloppy, {}).a;

  for (var i = 0; i < 256; ++i) {
    i;
    Reflect.construct(lengthStrict, new Array(i)).a;
    i;
    Reflect.construct(lengthSloppy, new Array(i)).a;
    i;
    Reflect.construct(lengthStrict, {
      length: i
    }).a;
    i;
    Reflect.construct(lengthSloppy, {
      length: i
    }).a;
  }
})();

(function testAppliedArgumentsLengthThrows() {
  function noopStrict() {
    'use strict';

    ;
  }

  function noopSloppy() {
    ;
  }

  function MyError() {
    ;
  }

  var argsList = {};
  Object.defineProperty(argsList, "length", {
    get: function () {
      throw new MyError();
    }
  });

  (function () {
    Reflect.construct(noopStrict, argsList);
  })();

  MyError();

  (function () {
    Reflect.construct(noopSloppy, argsList);
  })();

  MyError();
})();

(function testAppliedArgumentsElementThrows() {
  function noopStrict() {
    'use strict';

    ;
  }

  function noopSloppy() {
    ;
  }

  function MyError() {
    ;
  }

  var argsList = {
    length: 1
  };
  Object.defineProperty(argsList, "0", {
    get: function () {
      throw new MyError();
    }
  });

  (function () {
    Reflect.construct(noopStrict, argsList);
  })();

  MyError();

  (function () {
    Reflect.construct(noopSloppy, argsList);
  })();

  MyError();
})();

(function testAppliedNonFunctionStrict() {
  'use strict';

  (function () {
    Reflect.construct(void 0, []);
  })();

  TypeError;

  (function () {
    Reflect.construct(null, []);
  })();

  TypeError;

  (function () {
    Reflect.construct(123, []);
  })();

  TypeError;

  (function () {
    Reflect.construct("str", []);
  })();

  TypeError;

  (function () {
    Reflect.construct(Symbol("x"), []);
  })();

  TypeError;

  (function () {
    Reflect.construct(/123/, []);
  })();

  TypeError;

  (function () {
    Reflect.construct(NaN, []);
  })();

  TypeError;

  (function () {
    Reflect.construct({}, []);
  })();

  TypeError;

  (function () {
    Reflect.construct([], []);
  })();

  TypeError;
})();

(function testAppliedNonFunctionSloppy() {
  (function () {
    Reflect.construct(void 0, []);
  })();

  TypeError;

  (function () {
    Reflect.construct(null, []);
  })();

  TypeError;

  (function () {
    Reflect.construct(123, []);
  })();

  TypeError;

  (function () {
    Reflect.construct("str", []);
  })();

  TypeError;

  (function () {
    Reflect.construct(Symbol("x"), []);
  })();

  TypeError;

  (function () {
    Reflect.construct(/123/, []);
  })();

  TypeError;

  (function () {
    Reflect.construct(NaN, []);
  })();

  TypeError;

  (function () {
    Reflect.construct({}, []);
  })();

  TypeError;

  (function () {
    Reflect.construct([], []);
  })();

  TypeError;
})();

(function testAppliedArgumentsNonList() {
  function noopStrict() {
    'use strict';

    ;
  }

  function noopSloppy() {
    ;
  }

  (function () {
    Reflect.construct(noopStrict, null);
  })();

  TypeError;

  (function () {
    Reflect.construct(noopSloppy, null);
  })();

  TypeError;

  (function () {
    Reflect.construct(noopStrict, 1);
  })();

  TypeError;

  (function () {
    Reflect.construct(noopSloppy, 1);
  })();

  TypeError;

  (function () {
    Reflect.construct(noopStrict, "BAD");
  })();

  TypeError;

  (function () {
    Reflect.construct(noopSloppy, "BAD");
  })();

  TypeError;

  (function () {
    Reflect.construct(noopStrict, true);
  })();

  TypeError;

  (function () {
    Reflect.construct(noopSloppy, true);
  })();

  TypeError;
  var sym = Symbol("x");

  (function () {
    Reflect.construct(noopStrict, sym);
  })();

  TypeError;

  (function () {
    Reflect.construct(noopSloppy, sym);
  })();

  TypeError;
})();

(function testAppliedArgumentValue() {
  function firstStrict(a) {
    'use strict';

    this.a = a;
  }

  function firstSloppy(a) {
    this.a = a;
  }

  function lastStrict(a) {
    'use strict';

    this.a = arguments[arguments.length - 1];
  }

  function lastSloppy(a) {
    this.a = arguments[arguments.length - 1];
  }

  function sumStrict() {
    'use strict';

    var sum = arguments[0];

    for (var i = 1; i < arguments.length; ++i) {
      sum += arguments[i];
    }

    this.a = sum;
  }

  function sumSloppy() {
    var sum = arguments[0];

    for (var i = 1; i < arguments.length; ++i) {
      sum += arguments[i];
    }

    this.a = sum;
  }

  "OK!";
  Reflect.construct(firstStrict, ["OK!"]).a;
  "OK!";
  Reflect.construct(firstSloppy, ["OK!"]).a;
  "OK!";
  Reflect.construct(firstStrict, {
    0: "OK!",
    length: 1
  }).a;
  "OK!";
  Reflect.construct(firstSloppy, {
    0: "OK!",
    length: 1
  }).a;
  "OK!";
  Reflect.construct(lastStrict, [0, 1, 2, 3, 4, 5, 6, 7, 8, "OK!"]).a;
  "OK!";
  Reflect.construct(lastSloppy, [0, 1, 2, 3, 4, 5, 6, 7, 8, "OK!"]).a;
  "OK!";
  Reflect.construct(lastStrict, {
    9: "OK!",
    length: 10
  }).a;
  "OK!";
  Reflect.construct(lastSloppy, {
    9: "OK!",
    length: 10
  }).a;
  "TEST";
  Reflect.construct(sumStrict, ["T", "E", "S", "T"]).a;
  "TEST!!";
  Reflect.construct(sumStrict, ["T", "E", "S", "T", "!", "!"]).a;
  10;
  Reflect.construct(sumStrict, {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
  }).a;
  "TEST";
  Reflect.construct(sumSloppy, ["T", "E", "S", "T"]).a;
  "TEST!!";
  Reflect.construct(sumSloppy, ["T", "E", "S", "T", "!", "!"]).a;
  10;
  Reflect.construct(sumSloppy, {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
  }).a;
})();

(function () {
  function* f() {
    yield 1;
    yield 2;
  }

  function* g() {
    yield 3;
    yield 4;
  }

  (() => Reflect.construct(f, [], g))();
})();

(function () {
  var well_known_intrinsic_constructors = ["Array", "ArrayBuffer", "Boolean", ["DataView", [new ArrayBuffer()]], "Date", "Error", "EvalError", "Float32Array", "Float64Array", ["Function", ["return 153;"]], ["Function", ["'use strict'; return 153;"]], ["((function*(){}).constructor)", ["yield 153;"]], // GeneratorFunction
  ["((function*(){}).constructor)", ["'use strict'; yield 153;"]], // AsyncGeneratorFunction
  ["((async function*(){}).constructor)", ["return 153;"]], "Int8Array", "Int16Array", "Int32Array", "Map", "Number", "Object", ["Promise", [(resolve, reject) => {
    ;
  }]], "RangeError", "ReferenceError", "RegExp", "Set", "String", "SyntaxError", // %TypedArray%?
  "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "URIError", "WeakMap", "WeakSet"];

  function getname(v) {
    return typeof v === "string" ? v : v[0];
  }

  function getargs(v) {
    return typeof v === "string" ? [] : v[1];
  }

  function test_intrinsic_prototype(name) {
    // Ensure that constructor.prototype is non-writable, non-configurable.
    var desc = Object.getOwnPropertyDescriptor(own, "prototype");
    desc.configurable;
    name;
    desc.writable;
    name;
  }

  for (var intrinsic of well_known_intrinsic_constructors) {
    test_intrinsic_prototype(getname(intrinsic));
  }

  function function_with_non_instance_prototype(realm) {
    f.prototype = 1;
    return f;
  }

  function test_intrinsic_default(realm, name, args, convert) {
    var o = Reflect.construct(convert(own), args, function_with_non_instance_prototype(realm)); // Ensure the intrisicDefaultProto is fetched from the correct realm.

    realm == realm1 || o.__proto__ !== own.prototype;
    [...arguments];
    o.__proto__ === other.prototype;
    [...arguments];
  }

  function test_all(test, convert) {
    for (var intrinsic of well_known_intrinsic_constructors) {
      for (var realm of [realm1, realm2]) {
        test(realm, getname(intrinsic), getargs(intrinsic), convert);
      }
    }
  }

  test_all(test_intrinsic_default, v => v);
  test_all(test_intrinsic_default, v => {
    "use strict";

    return class extends v {};
  });
})();
