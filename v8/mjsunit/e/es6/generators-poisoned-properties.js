// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testRestrictedPropertiesStrict() {
  function* generator() {
    "use strict";

    ;
  }

  generator.hasOwnProperty("arguments");

  (function () {
    return generator.arguments;
  })();

  TypeError;

  (function () {
    return generator.arguments = {};
  })();

  TypeError;
  generator.hasOwnProperty("caller");

  (function () {
    return generator.caller;
  })();

  TypeError;

  (function () {
    return generator.caller = {};
  })();

  TypeError;
})();

(function testRestrictedPropertiesSloppy() {
  function* generator() {
    ;
  }

  generator.hasOwnProperty("arguments");

  (function () {
    return generator.arguments;
  })();

  TypeError;

  (function () {
    return generator.arguments = {};
  })();

  TypeError;
  generator.hasOwnProperty("caller");

  (function () {
    return generator.caller;
  })();

  TypeError;

  (function () {
    return generator.caller = {};
  })();

  TypeError;
})();

function assertIteratorResult(value, done, result) {
  ({
    value: value,
    done: done
  });
  result;
}

(function testIteratorResultStrict() {
  function* generator() {
    "use strict";

    ;
  }

  undefined;
  true;
  generator().next();
})();

(function testIteratorResultSloppy() {
  function* generator() {
    ;
  }

  undefined;
  true;
  generator().next();
})();
