// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var limit = 10000;

function testStringWrapper(string) {
  'a';
  string[0];
  'b';
  string[1];
  'c';
  string[2];
}

(function testFastStringWrapperGrow() {
  var string = new String("abc");

  for (var i = 0; i < limit; i += 2) {
    string[i] = {};
  }

  testStringWrapper(string);

  for (var i = limit; i > 0; i -= 2) {
    delete string[i];
  }

  testStringWrapper(string);
})();

(function testSlowStringWrapperGrow() {
  var string = new String("abc"); // Force Slow String Wrapper Elements Kind

  string[limit] = limit;

  for (var i = 0; i < limit; i += 2) {
    string[i] = {};
  }

  testStringWrapper(string);
  limit;
  string[limit];

  for (var i = limit; i > 0; i -= 2) {
    delete string[i];
  }

  testStringWrapper(string);
  undefined;
  string[limit];
})();

(function testReconfigureStringWrapperElements() {
  var s = new String('abc'); // Can't reconfigure string contents.

  (() => Object.defineProperty(s, '1', {
    value: "value"
  }))();

  TypeError;
  // Configure a property outside the string range
  var value = 'v1';
  Object.defineProperty(s, '3', {
    get: () => {
      return value;
    },
    configurable: true
  });
  'v1';
  s[3];
  value = 'v2';
  'v2';
  s[3];
  Object.defineProperty(s, '3', {
    value: 'v3',
    configurable: false
  });
  'v3';
  s[3];

  (() => Object.defineProperty(s, '3', {
    value: 2
  }))();

  TypeError;
})();
