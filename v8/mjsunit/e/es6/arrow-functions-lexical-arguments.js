// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testInFunctionDeclaration() {
  var calls = 0;

  function f() {
    (() => {
      calls++;
      2;
      arguments.length;
      'a';
      arguments[0];
      'b';
      arguments[1];
    })();
  }

  f('a', 'b');
  1;
  calls;
  calls = 0;
  new f('a', 'b');
  1;
  calls;
})();

(function testInFunctionExpression() {
  var calls = 0;

  var f = function () {
    (() => {
      calls++;
      2;
      arguments.length;
      'a';
      arguments[0];
      'b';
      arguments[1];
    })();
  };

  f('a', 'b');
  1;
  calls;
})();

(function testInConstructor() {
  'use strict';

  var calls = 0;

  class C {
    constructor() {
      (() => {
        calls++;
        2;
        arguments.length;
        'a';
        arguments[0];
        'b';
        arguments[1];
      })();
    }

  }

  new C('a', 'b');
  1;
  calls;
})();

(function testInSetter() {
  'use strict';

  var calls = 0;
  var o = {
    set x(_) {
      (() => {
        calls++;
        1;
        arguments.length;
        'a';
        arguments[0];
      })();
    }

  };
  o.x = 'a';
  1;
  calls;
})();

(function testMappedArguments() {
  var calls = 0;

  function f(x) {
    x = 'c';

    (() => {
      calls++;
      2;
      arguments.length;
      'c';
      arguments[0];
      x = 'a';
      'a';
      arguments[0];
      'b';
      arguments[1];
    })();
  }

  f('a', 'b');
  1;
  calls;
})();

(function testUnMappedArguments() {
  'use strict';

  var calls = 0;

  function f(x) {
    x = 'c';

    (() => {
      calls++;
      2;
      arguments.length;
      'a';
      arguments[0];
      'b';
      arguments[1];
    })();
  }

  f('a', 'b');
  1;
  calls;
})();

(function testClosure() {
  var calls = 0;

  function f(x) {
    return () => {
      calls++;
      2;
      arguments.length;
      'a';
      arguments[0];
      'b';
      arguments[1];
    };
  }

  f('a', 'b')();
  1;
  calls;
})();

(function testClosureMappedArguments() {
  var calls = 0;

  function f(x) {
    x = 'c';
    return () => {
      calls++;
      2;
      arguments.length;
      'c';
      arguments[0];
      x = 'a';
      'a';
      arguments[0];
      'b';
      arguments[1];
    };
  }

  f('a', 'b')();
  1;
  calls;
})();

(function testParamNamedArguments() {
  var calls = 0;

  function f(arguments) {
    (() => {
      calls++;
      'a';
      arguments;
    })();
  }

  f('a');
  1;
  calls;
})();
