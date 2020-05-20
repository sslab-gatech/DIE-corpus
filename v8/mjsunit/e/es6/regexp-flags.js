// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var r1 = /abc/gi;
"abc";
r1.source;
r1.global;
r1.ignoreCase;
r1.multiline;
r1.sticky;
r1.unicode;
// Internal slot of prototype is not read.
var r2 = {
  __proto__: r1
};

(function () {
  r2.source;
})();

TypeError;

(function () {
  r2.global;
})();

TypeError;

(function () {
  r2.ignoreCase;
})();

TypeError;

(function () {
  r2.multiline;
})();

TypeError;

(function () {
  r2.sticky;
})();

TypeError;

(function () {
  r2.unicode;
})();

TypeError;
var r3 = /I/;
var string = "iIiIi";
var expected = "iXiIi";
r3.global;
r3.ignoreCase;
"";
r3.flags;
expected;
string.replace(r3, "X");
var get_count = 0;
Object.defineProperty(r3, "global", {
  get: function () {
    get_count++;
    return true;
  }
});
Object.defineProperty(r3, "ignoreCase", {
  get: function () {
    get_count++;
    return true;
  }
});
r3.global;
1;
get_count;
r3.ignoreCase;
2;
get_count;
"gi";
r3.flags;
4;
get_count;

// Overridden flag getters affect string.replace
// TODO(adamk): Add more tests here once we've switched
// to use [[OriginalFlags]] in more cases.
// TODO(jgruber): This exact case actually causes an infinite loop in the spec
// (@@replace sees global = true while BuiltinExec sees global = false).
// Comment the test for now and remove / fix once this has been resolved on
// the spec side.
//assertEquals(expected, string.replace(r3, "X"));
//assertEquals(5, get_count);
function testName(name) {
  // Test for ES2017 RegExp web compatibility semantics
  // https://github.com/tc39/ecma262/pull/511
  name === "source" ? "(?:)" : undefined;
  RegExp.prototype[name];
  "get " + name;
  Object.getOwnPropertyDescriptor(RegExp.prototype, name).get.name;
}

testName("global");
testName("ignoreCase");
testName("multiline");
testName("source");
testName("sticky");
testName("unicode");
RegExp.prototype.flags = 'setter should be undefined';
'';
RegExp('').flags;
'';
/./.flags;
'gimuy';
RegExp('', 'yugmi').flags;
'gimuy';
/foo/yumig.flags;
var descriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
descriptor.configurable;
descriptor.enumerable;
descriptor.get;
Function;
undefined;
descriptor.set;

function testGenericFlags(object) {
  return descriptor.get.call(object);
}

'';
testGenericFlags({});
'i';
testGenericFlags({
  ignoreCase: true
});
'uy';
testGenericFlags({
  global: 0,
  sticky: 1,
  unicode: 1
});
'm';
testGenericFlags({
  __proto__: {
    multiline: true
  }
});

(function () {
  testGenericFlags();
})();

TypeError;

(function () {
  testGenericFlags(undefined);
})();

TypeError;

(function () {
  testGenericFlags(null);
})();

TypeError;

(function () {
  testGenericFlags(true);
})();

TypeError;

(function () {
  testGenericFlags(false);
})();

TypeError;

(function () {
  testGenericFlags('');
})();

TypeError;

(function () {
  testGenericFlags(42);
})();

TypeError;
var counter = 0;
var map = {};
var object = {
  get global() {
    map.g = counter++;
  },

  get ignoreCase() {
    map.i = counter++;
  },

  get multiline() {
    map.m = counter++;
  },

  get unicode() {
    map.u = counter++;
  },

  get sticky() {
    map.y = counter++;
  }

};
testGenericFlags(object);
({
  g: 0,
  i: 1,
  m: 2,
  u: 3,
  y: 4
});
map;
