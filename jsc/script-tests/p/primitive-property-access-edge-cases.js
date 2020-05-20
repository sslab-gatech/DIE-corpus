console.log("This page tests for assertion failures in edge cases of property lookup on primitive values.");
var didNotCrash = true;

(function () {
  delete String.prototype.constructor;

  for (var i = 0; i < 3; ++i) {
    "".replace;
  }
})();

(function () {
  String.prototype.__proto__ = {
    x: 1,
    y: 1
  };
  delete String.prototype.__proto__.x;

  for (var i = 0; i < 3; ++i) {
    "".y;
  }
})();

(function () {
  function f(x) {
    x.y;
  }

  String.prototype.x = 1;
  String.prototype.y = 1;
  delete String.prototype.x;
  Number.prototype.x = 1;
  Number.prototype.y = 1;
  delete Number.prototype.x;

  for (var i = 0; i < 3; ++i) {
    f("");
  }

  for (var i = 0; i < 3; ++i) {
    f(.5);
  }
})();

var checkOkay;

function checkGet(x, constructor) {
  checkOkay = false;
  Object.defineProperty(constructor.prototype, "foo", {
    get: function () {
      checkOkay = typeof this === 'object';
    },
    configurable: true
  });
  x.foo;
  delete constructor.prototype.foo;
  return checkOkay;
}

function checkSet(x, constructor) {
  checkOkay = false;
  Object.defineProperty(constructor.prototype, "foo", {
    set: function () {
      checkOkay = typeof this === 'object';
    },
    configurable: true
  });
  x.foo = null;
  delete constructor.prototype.foo;
  return checkOkay;
}

function checkGetStrict(x, constructor) {
  checkOkay = false;
  Object.defineProperty(constructor.prototype, "foo", {
    get: function () {
      "use strict";

      checkOkay = typeof this !== 'object';
    },
    configurable: true
  });
  x.foo;
  delete constructor.prototype.foo;
  return checkOkay;
}

function checkSetStrict(x, constructor) {
  checkOkay = false;
  Object.defineProperty(constructor.prototype, "foo", {
    set: function () {
      "use strict";

      checkOkay = typeof this !== 'object';
    },
    configurable: true
  });
  x.foo = null;
  delete constructor.prototype.foo;
  return checkOkay;
}

checkGet(1, Number);
checkGet('hello', String);
checkGet(true, Boolean);
checkSet(1, Number);
checkSet('hello', String);
checkSet(true, Boolean);
checkGetStrict(1, Number);
checkGetStrict('hello', String);
checkGetStrict(true, Boolean);
checkSetStrict(1, Number);
checkSetStrict('hello', String);
checkSetStrict(true, Boolean);

function checkRead(x, constructor) {
  return x.foo === undefined;
}

function checkWrite(x, constructor) {
  x.foo = null;
  return x.foo === undefined;
}

function checkReadStrict(x, constructor) {
  "use strict";

  return x.foo === undefined;
}

function checkWriteStrict(x, constructor) {
  "use strict";

  x.foo = null;
  return x.foo === undefined;
}

checkRead(1, Number);
checkRead('hello', String);
checkRead(true, Boolean);
checkWrite(1, Number);
checkWrite('hello', String);
checkWrite(true, Boolean);
checkReadStrict(1, Number);
checkReadStrict('hello', String);
checkReadStrict(true, Boolean);

try {
  checkWriteStrict(1, Number);
} catch (e) {
  ;
}

try {
  checkWriteStrict('hello', String);
} catch (e) {
  ;
}

try {
  checkWriteStrict(true, Boolean);
} catch (e) {
  ;
}

function checkNumericGet(x, constructor) {
  checkOkay = false;
  Object.defineProperty(constructor.prototype, 42, {
    get: function () {
      checkOkay = typeof this === 'object';
    },
    configurable: true
  });
  x[42];
  delete constructor.prototype[42];
  return checkOkay;
}

function checkNumericSet(x, constructor) {
  checkOkay = false;
  Object.defineProperty(constructor.prototype, 42, {
    set: function () {
      checkOkay = typeof this === 'object';
    },
    configurable: true
  });
  x[42] = null;
  delete constructor.prototype[42];
  return checkOkay;
}

function checkNumericGetStrict(x, constructor) {
  checkOkay = false;
  Object.defineProperty(constructor.prototype, 42, {
    get: function () {
      "use strict";

      checkOkay = typeof this !== 'object';
    },
    configurable: true
  });
  x[42];
  delete constructor.prototype[42];
  return checkOkay;
}

function checkNumericSetStrict(x, constructor) {
  checkOkay = false;
  Object.defineProperty(constructor.prototype, 42, {
    set: function () {
      "use strict";

      checkOkay = typeof this !== 'object';
    },
    configurable: true
  });
  x[42] = null;
  delete constructor.prototype[42];
  return checkOkay;
}

checkNumericGet(1, Number);
checkNumericGet('hello', String);
checkNumericGet(true, Boolean);
checkNumericSet(1, Number);
checkNumericSet('hello', String);
checkNumericSet(true, Boolean);
checkNumericGetStrict(1, Number);
checkNumericGetStrict('hello', String);
checkNumericGetStrict(true, Boolean);
checkNumericSetStrict(1, Number);
checkNumericSetStrict('hello', String);
checkNumericSetStrict(true, Boolean);

function checkNumericRead(x, constructor) {
  return x[42] === undefined;
}

function checkNumericWrite(x, constructor) {
  x[42] = null;
  return x[42] === undefined;
}

function checkNumericReadStrict(x, constructor) {
  "use strict";

  return x[42] === undefined;
}

function checkNumericWriteStrict(x, constructor) {
  "use strict";

  x[42] = null;
  return x[42] === undefined;
}

checkNumericRead(1, Number);
checkNumericRead('hello', String);
checkNumericRead(true, Boolean);
checkNumericWrite(1, Number);
checkNumericWrite('hello', String);
checkNumericWrite(true, Boolean);
checkNumericReadStrict(1, Number);
checkNumericReadStrict('hello', String);
checkNumericReadStrict(true, Boolean);

try {
  checkNumericWriteStrict(1, Number);
} catch (e) {
  ;
}

try {
  checkNumericWriteStrict('hello', String);
} catch (e) {
  ;
}

try {
  checkNumericWriteStrict(true, Boolean);
} catch (e) {
  ;
}

didNotCrash;
