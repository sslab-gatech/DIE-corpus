// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testDoubleElements() {
  function f(src) {
    return { ...src
    };
  }

  var src = [1.5];
  src[0] = 1; // Uninitialized

  ({
    0: 1
  });
  f(src);
  src[0] = 1.3; // Monomorphic

  ({
    0: 1.3
  });
  f(src);
})();

(function testInObjectProperties() {
  function f(src) {
    return { ...src
    };
  }

  function C() {
    this.foo = "foo";
  }

  var src;

  for (var i = 0; i < 10; ++i) {
    src = new C();
  } // Uninitialized


  ({
    foo: "foo"
  });
  f(src);
  ({
    foo: "foo"
  });
  f(src);
})();

(function testInObjectProperties2() {
  function f(src) {
    return { ...src
    };
  }

  function C() {
    this.foo = "foo";
    this.p0 = "0";
    this.p1 = "1";
    this.p2 = "2";
    this.p3 = "3";
  }

  var src;

  for (var i = 0; i < 10; ++i) {
    src = new C();
  } // Uninitialized


  ({
    foo: "foo",
    p0: "0",
    p1: "1",
    p2: "2",
    p3: "3"
  });
  f(src);
  ({
    foo: "foo",
    p0: "0",
    p1: "1",
    p2: "2",
    p3: "3"
  });
  f(src);
})();

(function testPolymorphicToMegamorphic() {
  function f(src) {
    return { ...src
    };
  }

  function C1() {
    this.foo = "foo";
    this.p0 = "0";
    this.p1 = "1";
    this.p2 = "2";
    this.p3 = "3";
  }

  function C2() {
    this.p0 = "0";
    this.p1 = "1";
    this[0] = 0;
  }

  function C3() {
    this.x = 774;
    this.y = 663;
    this.rgb = 0xFF00FF;
  }

  function C4() {
    this.qqq = {};
    this.v_1 = [];
    this.name = "C4";
    this.constructor = C4;
  } // Uninitialized


  ({
    foo: "foo",
    p0: "0",
    p1: "1",
    p2: "2",
    p3: "3"
  });
  f(new C1());
  ({
    foo: "foo",
    p0: "0",
    p1: "1",
    p2: "2",
    p3: "3"
  });
  f(new C1());
  ({
    0: 0,
    p0: "0",
    p1: "1"
  });
  f(new C2());
  ({
    0: 0,
    p0: "0",
    p1: "1"
  });
  f(new C2());
  ({
    x: 774,
    y: 663,
    rgb: 0xFF00FF
  });
  f(new C3());
  ({
    x: 774,
    y: 663,
    rgb: 0xFF00FF
  });
  f(new C3());
  ({
    qqq: {},
    v_1: [],
    name: "C4",
    constructor: C4
  });
  f(new C4());
  ({
    qqq: {},
    v_1: [],
    name: "C4",
    constructor: C4
  });
  f(new C4());
  ({
    boop: 1
  });
  f({
    boop: 1
  });
})(); // There are 2 paths in CloneObjectIC's handler which need to handle double
// fields specially --- in object properties, and copying the property array.


function testMutableInlineProperties() {
  function inobject() {
    "use strict";

    this.x = 1.1;
  }

  const src = new inobject();
  const x0 = src.x;
  const clone = { ...src,
    x: x0 + 1
  };
  x0;
  src.x;
  ({
    x: 2.1
  });
  clone;
}

testMutableInlineProperties();

function testMutableOutOfLineProperties() {
  const src = {
    a: 1,
    b: 2,
    c: 3
  };
  src.x = 2.3;
  const x0 = src.x;
  const clone = { ...src,
    x: x0 + 1
  };
  x0;
  src.x;
  ({
    a: 1,
    b: 2,
    c: 3,
    x: 3.3
  });
  clone;
}

testMutableOutOfLineProperties();
