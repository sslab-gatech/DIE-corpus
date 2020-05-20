// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

(function TestDefaultConstructor() {
  class Stack extends Array {}

  {
    let s1 = new Stack();
    Stack.prototype;
    s1.__proto__;
    Array.isArray(s1);
    0;
    s1.length;
    s1[0] = 'xyz';
    1;
    s1.length;
    'xyz';
    s1[0];
    s1.push(42);
    2;
    s1.length;
    'xyz';
    s1[0];
    42;
    s1[1];
  }
  {
    let s2 = new Stack(10);
    Stack.prototype;
    s2.__proto__;
    Array.isArray(s2);
    10;
    s2.length;
    undefined;
    s2[0];
  }
  {
    let a = [1, 2, 3];
    let s3 = new Stack(a);
    Stack.prototype;
    s3.__proto__;
    Array.isArray(s3);
    1;
    s3.length;
    a;
    s3[0];
  }
  {
    let s4 = new Stack(1, 2, 3);
    Stack.prototype;
    s4.__proto__;
    Array.isArray(s4);
    3;
    s4.length;
    1;
    s4[0];
    2;
    s4[1];
    3;
    s4[2];
  }
  {
    let s5 = new Stack(undefined, undefined, undefined);
    Stack.prototype;
    s5.__proto__;
    Array.isArray(s5);
    3;
    s5.length;
    undefined;
    s5[0];
    undefined;
    s5[1];
    undefined;
    s5[2];
  }
})();

(function TestEmptyArgsSuper() {
  class Stack extends Array {
    constructor() {
      super();
    }

  }

  let s1 = new Stack();
  Stack.prototype;
  s1.__proto__;
  Array.isArray(s1);
  0;
  s1.length;
  s1[0] = 'xyz';
  1;
  s1.length;
  'xyz';
  s1[0];
  s1.push(42);
  2;
  s1.length;
  'xyz';
  s1[0];
  42;
  s1[1];
})();

(function TestOneArgSuper() {
  class Stack extends Array {
    constructor(x) {
      super(x);
    }

  }

  {
    let s2 = new Stack(10, 'ignored arg');
    Stack.prototype;
    s2.__proto__;
    Array.isArray(s2);
    10;
    s2.length;
    undefined;
    s2[0];
  }
  {
    let a = [1, 2, 3];
    let s3 = new Stack(a, 'ignored arg');
    Stack.prototype;
    s3.__proto__;
    Array.isArray(s3);
    1;
    s3.length;
    a;
    s3[0];
  }
})();

(function TestMultipleArgsSuper() {
  class Stack extends Array {
    constructor(x, y, z) {
      super(x, y, z);
    }

  }

  {
    let s4 = new Stack(1, 2, 3, 4, 5);
    Stack.prototype;
    s4.__proto__;
    Array.isArray(s4);
    3;
    s4.length;
    1;
    s4[0];
    2;
    s4[1];
    3;
    s4[2];
  }
  {
    let s5 = new Stack(undefined);
    Stack.prototype;
    s5.__proto__;
    Array.isArray(s5);
    s5.__proto__ == Stack.prototype;
    3;
    s5.length;
    undefined;
    s5[0];
    undefined;
    s5[1];
    undefined;
    s5[2];
  }
})();

(function TestArrayConcat() {
  class Stack extends Array {}

  let s1 = new Stack(1, 2, 3);
  [1, 2, 3, 4, 5, 6];
  s1.concat([4, 5, 6]);
  [4, 5, 6, 1, 2, 3];
  [4, 5, 6].concat(s1);
})();

(function TestJSONStringify() {
  class Stack extends Array {}

  let s1 = new Stack(1, 2, 3);
  "[1,2,3]";
  JSON.stringify(s1);
})();
