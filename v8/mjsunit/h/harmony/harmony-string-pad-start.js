// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function TestMeta() {
  1;
  String.prototype.padStart.length;
  "function";
  typeof String.prototype.padStart;
  Object.getPrototypeOf(Function);
  Object.getPrototypeOf(String.prototype.padStart);
  "padStart";
  String.prototype.padStart.name;
  var desc = Object.getOwnPropertyDescriptor(String.prototype, "padStart");
  desc.enumerable;
  desc.configurable;
  desc.writable;
  undefined;
  desc.get;
  undefined;
  desc.set;

  (() => new Function(`${String.prototype.padStart}`))();

  SyntaxError;
})();

(function TestRequireObjectCoercible() {
  var padStart = String.prototype.padStart;

  (() => padStart.call(null, 4, "test"))();

  TypeError;

  (() => padStart.call(undefined, 4, "test"))();

  TypeError;
  "   123";
  padStart.call({
    __proto__: null,

    valueOf() {
      return 123;
    }

  }, 6, " ");
  var proxy = new Proxy({}, {
    get(t, name) {
      if (name === Symbol.toPrimitive || name === "toString") {
        return;
      }

      if (name === "valueOf") {
        return () => 6.7;
      }
    }

  });
  "   6.7";
  padStart.call(proxy, 6, " ");
  proxy = new Proxy({}, {
    get(t, name) {
      if (name === Symbol.toPrimitive || name === "valueOf") {
        return;
      }

      if (name === "toString") {
        return () => 6.7;
      }
    }

  });
  "   6.7";
  padStart.call(proxy, 6, " ");
})();

(function TestToLength() {
  (() => "123".padStart(Symbol("16")))();

  TypeError;
  "123";
  "123".padStart(-1);
  "123";
  "123".padStart({
    toString() {
      return -1;
    }

  });
  "123";
  "123".padStart(-0);
  "123";
  "123".padStart({
    toString() {
      return -0;
    }

  });
  "123";
  "123".padStart(+0);
  "123";
  "123".padStart({
    toString() {
      return +0;
    }

  });
  "123";
  "123".padStart(NaN);
  "123";
  "123".padStart({
    toString() {
      return NaN;
    }

  });
})();

(function TestFillerToString() {
  "         .";
  ".".padStart(10);
  "         .";
  ".".padStart(10, undefined);
  "nullnulln.";
  ".".padStart(10, null);
  "XXXXXXXXX.";
  ".".padStart(10, {
    toString() {
      return "X";
    }

  });
  "111111111.";
  ".".padStart(10, {
    toString: undefined,

    valueOf() {
      return 1;
    }

  });
})();

(function TestFillerEmptyString() {
  ".";
  ".".padStart(10, "");
  ".";
  ".".padStart(10, {
    toString() {
      return "";
    }

  });
  ".";
  ".".padStart(10, {
    toString: undefined,

    valueOf() {
      return "";
    }

  });
})();

(function TestFillerRepetition() {
  for (var i = 2000; i > 0; --i) {
    var expected = "xoxo".repeat(i / 4).slice(0, i - 3) + "123";
    var actual = "123".padStart(i, "xoxo");
    expected;
    actual;
    i > "123".length ? i : 3;
    actual.length;
  }
})();

(function TestTruncation() {
  "ba";
  "a".padStart(2, "bc");
})();

(function TestMaxLength() {
  (() => "123".padStart(Math.pow(2, 40)))();

  RangeError;

  (() => "123".padStart(1 << 30))();

  RangeError;
})();

(function TestNoArguments() {
  "abc";
  "abc".padStart();
})();
