// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function TestGetter() {
  var o = {
    get x() {
      ;
    }

  };
  var desc = Object.getOwnPropertyDescriptor(o, 'x');
  'function';
  typeof desc.get;
  'prototype' in desc.get;

  (function () {
    new desc.get();
  })();

  TypeError;
})();

(function TestSetter() {
  var o = {
    set x(_) {
      ;
    }

  };
  var desc = Object.getOwnPropertyDescriptor(o, 'x');
  'function';
  typeof desc.set;
  'prototype' in desc.set;

  (function () {
    new desc.set();
  })();

  TypeError;
})();

(function TestBoth() {
  var o = {
    get x() {
      ;
    },

    set x(_) {
      ;
    }

  };
  var desc = Object.getOwnPropertyDescriptor(o, 'x');
  'function';
  typeof desc.get;
  'function';
  typeof desc.set;
  'prototype' in desc.get;
  'prototype' in desc.set;

  (function () {
    new desc.get();
  })();

  TypeError;

  (function () {
    new desc.set();
  })();

  TypeError;
})();
