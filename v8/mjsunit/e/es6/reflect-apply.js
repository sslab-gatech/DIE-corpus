// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testReflectApplyArity() {
  3;
  Reflect.apply.length;
})();

(function testReflectApplyNonConstructor() {
  (function () {
    new Reflect.apply(function () {
      ;
    }, null, []);
  })();

  TypeError;
})();

(function testAppliedReceiverSloppy() {
  function returnThis() {
    return this;
  }

  var receiver = {};
  this;
  Reflect.apply(returnThis, void 0, []);
  this;
  Reflect.apply(returnThis, null, []);
  this;
  Reflect.apply(returnThis, this, []);
  receiver;
  Reflect.apply(returnThis, receiver, []);
  String.prototype;
  Object.getPrototypeOf(Reflect.apply(returnThis, "str", []));
  Number.prototype;
  Object.getPrototypeOf(Reflect.apply(returnThis, 123, []));
  Boolean.prototype;
  Object.getPrototypeOf(Reflect.apply(returnThis, true, []));
  Symbol.prototype;
  Object.getPrototypeOf(Reflect.apply(returnThis, Symbol("test"), []));
})();

(function testAppliedReceiverStrict() {
  function returnThis() {
    'use strict';

    return this;
  }

  var receiver = {};
  void 0;
  Reflect.apply(returnThis, void 0, []);
  this;
  Reflect.apply(returnThis, this, []);
  receiver;
  Reflect.apply(returnThis, receiver, []);
  // Don't wrap value types
  var regexp = /123/;
  var symbol = Symbol("test");
  "str";
  Reflect.apply(returnThis, "str", []);
  123;
  Reflect.apply(returnThis, 123, []);
  true;
  Reflect.apply(returnThis, true, []);
  regexp;
  Reflect.apply(returnThis, regexp, []);
  symbol;
  Reflect.apply(returnThis, symbol, []);
})();

(function testAppliedArgumentsLength() {
  function returnLengthStrict() {
    'use strict';

    return arguments.length;
  }

  function returnLengthSloppy() {
    return arguments.length;
  }

  0;
  Reflect.apply(returnLengthStrict, this, []);
  0;
  Reflect.apply(returnLengthSloppy, this, []);
  0;
  Reflect.apply(returnLengthStrict, this, {});
  0;
  Reflect.apply(returnLengthSloppy, this, {});

  for (var i = 0; i < 256; ++i) {
    i;
    Reflect.apply(returnLengthStrict, this, new Array(i));
    i;
    Reflect.apply(returnLengthSloppy, this, new Array(i));
    i;
    Reflect.apply(returnLengthStrict, this, {
      length: i
    });
    i;
    Reflect.apply(returnLengthSloppy, this, {
      length: i
    });
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
    Reflect.apply(noopStrict, this, argsList);
  })();

  MyError();

  (function () {
    Reflect.apply(noopSloppy, this, argsList);
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
    Reflect.apply(noopStrict, this, argsList);
  })();

  MyError();

  (function () {
    Reflect.apply(noopSloppy, this, argsList);
  })();

  MyError();
})();

(function testAppliedNonFunctionStrict() {
  'use strict';

  (function () {
    Reflect.apply(void 0);
  })();

  TypeError;

  (function () {
    Reflect.apply(null);
  })();

  TypeError;

  (function () {
    Reflect.apply(123);
  })();

  TypeError;

  (function () {
    Reflect.apply("str");
  })();

  TypeError;

  (function () {
    Reflect.apply(Symbol("x"));
  })();

  TypeError;

  (function () {
    Reflect.apply(/123/);
  })();

  TypeError;

  (function () {
    Reflect.apply(NaN);
  })();

  TypeError;

  (function () {
    Reflect.apply({});
  })();

  TypeError;

  (function () {
    Reflect.apply([]);
  })();

  TypeError;
})();

(function testAppliedNonFunctionSloppy() {
  (function () {
    Reflect.apply(void 0);
  })();

  TypeError;

  (function () {
    Reflect.apply(null);
  })();

  TypeError;

  (function () {
    Reflect.apply(123);
  })();

  TypeError;

  (function () {
    Reflect.apply("str");
  })();

  TypeError;

  (function () {
    Reflect.apply(Symbol("x"));
  })();

  TypeError;

  (function () {
    Reflect.apply(/123/);
  })();

  TypeError;

  (function () {
    Reflect.apply(NaN);
  })();

  TypeError;

  (function () {
    Reflect.apply({});
  })();

  TypeError;

  (function () {
    Reflect.apply([]);
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

  var R = void 0;

  (function () {
    Reflect.apply(noopStrict, R, null);
  })();

  TypeError;

  (function () {
    Reflect.apply(noopSloppy, R, null);
  })();

  TypeError;

  (function () {
    Reflect.apply(noopStrict, R, 1);
  })();

  TypeError;

  (function () {
    Reflect.apply(noopSloppy, R, 1);
  })();

  TypeError;

  (function () {
    Reflect.apply(noopStrict, R, "BAD");
  })();

  TypeError;

  (function () {
    Reflect.apply(noopSloppy, R, "BAD");
  })();

  TypeError;

  (function () {
    Reflect.apply(noopStrict, R, true);
  })();

  TypeError;

  (function () {
    Reflect.apply(noopSloppy, R, true);
  })();

  TypeError;
  var sym = Symbol("x");

  (function () {
    Reflect.apply(noopStrict, R, sym);
  })();

  TypeError;

  (function () {
    Reflect.apply(noopSloppy, R, sym);
  })();

  TypeError;
})();

(function testAppliedArgumentValue() {
  function returnFirstStrict(a) {
    'use strict';

    return a;
  }

  function returnFirstSloppy(a) {
    return a;
  }

  function returnLastStrict(a) {
    'use strict';

    return arguments[arguments.length - 1];
  }

  function returnLastSloppy(a) {
    return arguments[arguments.length - 1];
  }

  function returnSumStrict() {
    'use strict';

    var sum = arguments[0];

    for (var i = 1; i < arguments.length; ++i) {
      sum += arguments[i];
    }

    return sum;
  }

  function returnSumSloppy() {
    var sum = arguments[0];

    for (var i = 1; i < arguments.length; ++i) {
      sum += arguments[i];
    }

    return sum;
  }

  "OK!";
  Reflect.apply(returnFirstStrict, this, ["OK!"]);
  "OK!";
  Reflect.apply(returnFirstSloppy, this, ["OK!"]);
  "OK!";
  Reflect.apply(returnFirstStrict, this, {
    0: "OK!",
    length: 1
  });
  "OK!";
  Reflect.apply(returnFirstSloppy, this, {
    0: "OK!",
    length: 1
  });
  "OK!";
  Reflect.apply(returnLastStrict, this, [0, 1, 2, 3, 4, 5, 6, 7, 8, "OK!"]);
  "OK!";
  Reflect.apply(returnLastSloppy, this, [0, 1, 2, 3, 4, 5, 6, 7, 8, "OK!"]);
  "OK!";
  Reflect.apply(returnLastStrict, this, {
    9: "OK!",
    length: 10
  });
  "OK!";
  Reflect.apply(returnLastSloppy, this, {
    9: "OK!",
    length: 10
  });
  "TEST";
  Reflect.apply(returnSumStrict, this, ["T", "E", "S", "T"]);
  "TEST!!";
  Reflect.apply(returnSumStrict, this, ["T", "E", "S", "T", "!", "!"]);
  10;
  Reflect.apply(returnSumStrict, this, {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
  });
  "TEST";
  Reflect.apply(returnSumSloppy, this, ["T", "E", "S", "T"]);
  "TEST!!";
  Reflect.apply(returnSumSloppy, this, ["T", "E", "S", "T", "!", "!"]);
  10;
  Reflect.apply(returnSumSloppy, this, {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
  });
})();
