// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// In sloppy mode we allow function redeclarations within blocks for webcompat.
(function () {
  undefined;
  f();

  // Annex B
  if (true) {
    2;
    f();

    function f() {
      return 1;
    }

    2;
    f();

    function f() {
      return 2;
    }

    2;
    f();
  }

  2;
  f();
})(); // Should still fail in strict mode


`
  (function() {
    "use strict";
    if (true) {
      function f() { return 1 }
      function f() { return 2 }
    }
  })();
`;
SyntaxError;
`
  (function() {
    if (true) {
      let f;
      function f() { return 2 }
    }
  })();
`;
SyntaxError;
`
  (function() {
    if (true) {
      function f() { return 2 }
      let f;
    }
  })();
`;
SyntaxError;
`
  (function() {
    if (true) {
      const f;
      function f() { return 2 }
    }
  })();
`;
SyntaxError;
`
  (function() {
    if (true) {
      function f() { return 2 }
      const f;
    }
  })();
`;
SyntaxError;

// Annex B redefinition semantics still apply with more blocks
(function () {
  undefined;
  f();

  // Annex B
  if (true) {
    undefined;
    f();
    {
      function f() {
        return 1;
      }
    }
    1;
    f();
    {
      function f() {
        return 2;
      }
    }
    2;
    f();
  }

  2;
  f();
})();
