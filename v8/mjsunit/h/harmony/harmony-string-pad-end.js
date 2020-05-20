// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function TestMeta() {
  1;
  String.prototype.padEnd.length;
  "function";
  typeof String.prototype.padEnd;
  Object.getPrototypeOf(Function);
  Object.getPrototypeOf(String.prototype.padEnd);
  "padEnd";
  String.prototype.padEnd.name;
  var desc = Object.getOwnPropertyDescriptor(String.prototype, "padEnd");
  desc.enumerable;
  desc.configurable;
  desc.writable;
  undefined;
  desc.get;
  undefined;
  desc.set;

  (() => new Function(`${String.prototype.padEnd}`))();

  SyntaxError;
})();

(function TestRequireObjectCoercible() {
  var padEnd = String.prototype.padEnd;

  (() => padEnd.call(null, 4, "test"))();

  TypeError;

  (() => padEnd.call(undefined, 4, "test"))();

  TypeError;
  "123   ";
  padEnd.call({
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
  "6.7   ";
  padEnd.call(proxy, 6, " ");
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
  "6.7   ";
  padEnd.call(proxy, 6, " ");
})();

(function TestToLength() {
  (() => "123".padEnd(Symbol("16")))();

  TypeError;
  "123";
  "123".padEnd(-1);
  "123";
  "123".padEnd({
    toString() {
      return -1;
    }

  });
  "123";
  "123".padEnd(-0);
  "123";
  "123".padEnd({
    toString() {
      return -0;
    }

  });
  "123";
  "123".padEnd(+0);
  "123";
  "123".padEnd({
    toString() {
      return +0;
    }

  });
  "123";
  "123".padEnd(NaN);
  "123";
  "123".padEnd({
    toString() {
      return NaN;
    }

  });
})();

(function TestFillerToString() {
  ".         ";
  ".".padEnd(10);
  ".         ";
  ".".padEnd(10, undefined);
  ".nullnulln";
  ".".padEnd(10, null);
  ".XXXXXXXXX";
  ".".padEnd(10, {
    toString() {
      return "X";
    }

  });
  ".111111111";
  ".".padEnd(10, {
    toString: undefined,

    valueOf() {
      return 1;
    }

  });
})();

(function TestFillerEmptyString() {
  ".";
  ".".padEnd(10, "");
  ".";
  ".".padEnd(10, {
    toString() {
      return "";
    }

  });
  ".";
  ".".padEnd(10, {
    toString: undefined,

    valueOf() {
      return "";
    }

  });
})();

(function TestFillerRepetition() {
  for (var i = 2000; i > 0; --i) {
    var expected = "123" + "xoxo".repeat(i / 4).slice(0, i - 3);
    var actual = "123".padEnd(i, "xoxo");
    expected;
    actual;
    i > "123".length ? i : 3;
    actual.length;
  }
})();

(function TestTruncation() {
  "ab";
  "a".padEnd(2, "bc");
})();

(function TestMaxLength() {
  (() => "123".padEnd(Math.pow(2, 40)))();

  RangeError;

  (() => "123".padEnd(1 << 30))();

  RangeError;
})();

(function TestNoArguments() {
  "abc";
  "abc".padEnd();
})();
