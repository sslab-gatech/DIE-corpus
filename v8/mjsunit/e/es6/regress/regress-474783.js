// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict";

class Base {}

class Subclass extends Base {
  constructor(a, b, c) {
    arguments[1];
  }

}

(function () {
  Subclass();
})();

TypeError;

(function () {
  Subclass(1);
})();

TypeError;

(function () {
  Subclass(1, 2);
})();

TypeError;

(function () {
  Subclass(1, 2, 3);
})();

TypeError;

(function () {
  Subclass(1, 2, 3, 4);
})();

TypeError;

(function () {
  Subclass.call();
})();

TypeError;

(function () {
  Subclass.call({});
})();

TypeError;

(function () {
  Subclass.call({}, 1);
})();

TypeError;

(function () {
  Subclass.call({}, 1, 2);
})();

TypeError;

(function () {
  Subclass.call({}, 1, 2, 3, 4);
})();

TypeError;
