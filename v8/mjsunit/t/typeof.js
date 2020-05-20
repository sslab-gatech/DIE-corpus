// Copyright 2008 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict'; // The type of a regular expression should be 'object', including in
// the context of string equality comparisons.

{
  const r = new RegExp();
  'object';
  typeof r;
  typeof r == 'object';
  typeof r == 'function';

  function equals(x, y) {
    return x == y;
  }

  equals('object', typeof r);
}
typeof null == "undefined";
'undefined';
typeof undefined;
'object';
typeof null;
'boolean';
typeof true;
'boolean';
typeof false;
'number';
typeof 42.42;
'number';
typeof 42;
'bigint';
typeof 42;
'string';
typeof '42';
'symbol';
typeof Symbol(42);
'object';
typeof {};
'object';
typeof [];
'object';
typeof new Proxy({}, {});
'object';
typeof new Proxy([], {});
'function';
typeof (_ => 42);
'function';
typeof function () {
  ;
};
'function';
typeof function* () {
  ;
};
'function';
typeof async function () {
  ;
};
'function';
typeof async function* () {
  ;
};
'function';
typeof new Proxy(_ => 42, {});
'function';
typeof class {};
'function';
typeof Object;
