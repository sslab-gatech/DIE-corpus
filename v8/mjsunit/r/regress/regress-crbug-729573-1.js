// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function () {
  function foo() {
    var a = foo.bind(this);

    if (!a) {
      return a;
    }

    return 0;
  }

  0;
  foo();
  0;
  foo();
  0;
  foo();
})();

(function () {
  "use strict";

  function foo() {
    var a = foo.bind(this);

    if (!a) {
      return a;
    }

    return 0;
  }

  0;
  foo();
  0;
  foo();
  0;
  foo();
})();

(function () {
  function foo() {
    var a = foo.bind(this);

    if (!a) {
      return a;
    }

    return 0;
  }

  foo.prototype = {
    custom: "prototype"
  };
  0;
  foo();
  0;
  foo();
  0;
  foo();
})();

(function () {
  "use strict";

  function foo() {
    var a = foo.bind(this);

    if (!a) {
      return a;
    }

    return 0;
  }

  foo.prototype = {
    custom: "prototype"
  };
  0;
  foo();
  0;
  foo();
  0;
  foo();
})();
