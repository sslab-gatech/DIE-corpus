// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestGeneratorOSRSimple() {
  function* gen1() {
    for (var i = 0; i < 3; ++i) {
      ;
    }

    return 23;
  }

  var g = gen1();
  ({
    value: 23,
    done: true
  });
  g.next();
})();

(function TestGeneratorOSRYieldAfterArming() {
  function* gen2() {
    for (var i = 0; i < 3; ++i) {
      yield i;
    }

    return 23;
  }

  var g = gen2();
  ({
    value: 0,
    done: false
  });
  g.next();
  ({
    value: 1,
    done: false
  });
  g.next();
  ({
    value: 2,
    done: false
  });
  g.next();
  ({
    value: 23,
    done: true
  });
  g.next();
})();

(function TestGeneratorOSRYieldBeforeArming() {
  function* gen3() {
    for (var i = 0; i < 3; ++i) {
      yield i;
    }

    return 23;
  }

  var g = gen3();
  ({
    value: 0,
    done: false
  });
  g.next();
  ({
    value: 1,
    done: false
  });
  g.next();
  ({
    value: 2,
    done: false
  });
  g.next();
  ({
    value: 23,
    done: true
  });
  g.next();
})();

(function TestGeneratorOSRNested() {
  function* gen4() {
    for (var i = 0; i < 3; ++i) {
      for (var j = 0; j < 3; ++j) {
        for (var k = 0; k < 10; ++k) {
          ;
        }
      }

      yield i;
    }

    return 23;
  }

  var g = gen4();
  ({
    value: 0,
    done: false
  });
  g.next();
  ({
    value: 1,
    done: false
  });
  g.next();
  ({
    value: 2,
    done: false
  });
  g.next();
  ({
    value: 23,
    done: true
  });
  g.next();
})();
