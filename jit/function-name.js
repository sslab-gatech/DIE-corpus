// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testVariableDeclarationsFunction() {
  'use strict';

  var a = function () {
    ;
  };

  'a';
  a.name;

  let b = () => {
    ;
  };

  'b';
  b.name;

  const c = function () {
    ;
  };

  'c';
  c.name;

  var x = function () {
    ;
  },
      y = () => {
    ;
  },
      z = function withName() {
    ;
  };

  'x';
  x.name;
  'y';
  y.name;
  'withName';
  z.name;
})();

(function testVariableDeclarationsClass() {
  'use strict';

  var a = class {};
  'a';
  a.name;
  let b = class {};
  'b';
  b.name;
  // Should not overwrite name property.
  const c = class {
    static name() {
      ;
    }

  };
  'function';
  typeof c.name;
  var x = class {},
      y = class NamedClass {};
  'x';
  x.name;
  'NamedClass';
  y.name;
})();

(function testObjectProperties() {
  'use strict';

  var obj = {
    a: function () {
      ;
    },
    b: () => {
      ;
    },

    c() {
      ;
    },

    get d() {
      ;
    },

    set d(val) {
      ;
    },

    x: function withName() {
      ;
    },
    y: class {},
    z: class ClassName {},

    ''() {
      ;
    },

    42: function () {
      ;
    },
    4.2: function () {
      ;
    },
    __proto__: function () {
      ;
    }
  };
  'a';
  obj.a.name;
  'b';
  obj.b.name;
  'c';
  obj.c.name;
  var dDescriptor = Object.getOwnPropertyDescriptor(obj, 'd');
  'get d';
  dDescriptor.get.name;
  'set d';
  dDescriptor.set.name;
  'withName';
  obj.x.name;
  'y';
  obj.y.name;
  'ClassName';
  obj.z.name;
  '';
  obj[''].name;
  '42';
  obj[42].name;
  '4.2';
  obj[4.2].name;
  '';
  obj.__proto__.name;
})();

(function testClassProperties() {
  'use strict';

  class C {
    a() {
      ;
    }

    static b() {
      ;
    }

    get c() {
      ;
    }

    set c(val) {
      ;
    }

    ''() {
      ;
    }

    static ''() {
      ;
    }

    42() {
      ;
    }

    static 43() {
      ;
    }

    get 44() {
      ;
    }

    set 44(val) {
      ;
    }

    static get constructor() {
      ;
    }

    static set constructor(val) {
      ;
    }

  }

  ;
  'a';
  C.prototype.a.name;
  'b';
  C.b.name;
  var descriptor = Object.getOwnPropertyDescriptor(C.prototype, 'c');
  'get c';
  descriptor.get.name;
  'set c';
  descriptor.set.name;
  '';
  C.prototype[''].name;
  '';
  C[''].name;
  '42';
  C.prototype[42].name;
  '43';
  C[43].name;
  var descriptor = Object.getOwnPropertyDescriptor(C.prototype, '44');
  'get 44';
  descriptor.get.name;
  'set 44';
  descriptor.set.name;
  var descriptor = Object.getOwnPropertyDescriptor(C, 'constructor');
  'get constructor';
  descriptor.get.name;
  'set constructor';
  descriptor.set.name;
})();

(function testComputedProperties() {
  'use strict';

  var a = 'a';
  var b = 'b';
  var sym1 = Symbol('1');
  var sym2 = Symbol('2');
  var sym3 = Symbol('3');
  var symNoDescription = Symbol();
  var proto = "__proto__";
  var obj = {
    ['']: function () {
      ;
    },
    [a]: function () {
      ;
    },
    [sym1]: function () {
      ;
    },
    [sym2]: function withName() {
      ;
    },
    [symNoDescription]: function () {
      ;
    },
    [proto]: function () {
      ;
    },

    get [sym3]() {
      ;
    },

    set [b](val) {
      ;
    }

  };
  '';
  obj[''].name;
  'a';
  obj[a].name;
  '[1]';
  obj[sym1].name;
  'withName';
  obj[sym2].name;
  '';
  obj[symNoDescription].name;
  '__proto__';
  obj[proto].name;
  'get [3]';
  Object.getOwnPropertyDescriptor(obj, sym3).get.name;
  'set b';
  Object.getOwnPropertyDescriptor(obj, 'b').set.name;
  var objMethods = {
    ['']() {
      ;
    },

    [a]() {
      ;
    },

    [sym1]() {
      ;
    },

    [symNoDescription]() {
      ;
    },

    [proto]() {
      ;
    }

  };
  '';
  objMethods[''].name;
  'a';
  objMethods[a].name;
  '[1]';
  objMethods[sym1].name;
  '';
  objMethods[symNoDescription].name;
  '__proto__';
  objMethods[proto].name;

  class C {
    ['']() {
      ;
    }

    static ''() {
      ;
    }

    [a]() {
      ;
    }

    [sym1]() {
      ;
    }

    static [sym2]() {
      ;
    }

    [symNoDescription]() {
      ;
    }

    get [sym3]() {
      ;
    }

    static set [b](val) {
      ;
    }

  }

  '';
  C.prototype[''].name;
  '';
  C[''].name;
  'a';
  C.prototype[a].name;
  '[1]';
  C.prototype[sym1].name;
  '[2]';
  C[sym2].name;
  '';
  C.prototype[symNoDescription].name;
  'get [3]';
  Object.getOwnPropertyDescriptor(C.prototype, sym3).get.name;
  'set b';
  Object.getOwnPropertyDescriptor(C, 'b').set.name;
})();

(function testAssignment() {
  var basicFn, arrowFn, generatorFn, classLit;

  basicFn = function () {
    return true;
  };

  'basicFn';
  basicFn.name;
  var basicFn2 = basicFn;
  'basicFn';
  basicFn2.name;

  basicFn = function functionWithName() {
    ;
  };

  "functionWithName";
  basicFn.name;

  arrowFn = x => x;

  'arrowFn';
  arrowFn.name;
  var arrowFn2 = arrowFn;
  'arrowFn';
  arrowFn2.name;

  generatorFn = function* () {
    yield true;
  };

  'generatorFn';
  generatorFn.name;
  var generatorFn2 = generatorFn;
  'generatorFn';
  generatorFn2.name;

  generatorFn = function* generatorWithName() {
    ;
  };

  "generatorWithName";
  generatorFn.name;
  classLit = class {
    constructor() {
      ;
    }

  };
  'classLit';
  classLit.name;
  var classLit2 = classLit;
  'classLit';
  classLit2.name;
  classLit = class classWithName {
    constructor() {
      ;
    }

  };
  'classWithName';
  classLit.name;
  classLit = class {
    constructor() {
      ;
    }

    static name() {
      ;
    }

  };
  'function';
  typeof classLit.name;
  classLit = class {
    constructor() {
      ;
    }

    static get name() {
      return true;
    }

  };
  classLit.name;
  classLit = class {
    constructor() {
      ;
    }

    static ['name']() {
      ;
    }

  };
  'function';
  typeof classLit.name;
  classLit = class {
    constructor() {
      ;
    }

    static get ['name']() {
      return true;
    }

  };
  classLit.name;
})();

(function testObjectBindingPattern() {
  var {
    a = function () {
      ;
    },
    b = () => {
      ;
    },
    x = function withName() {
      ;
    },
    y = class {},
    z = class ClassName {},
    q = class {
      static name() {
        return 42;
      }

    },
    foo: bar = function () {
      ;
    },
    inParens = () => {
      ;
    },
    inManyParens = () => {
      ;
    }
  } = {};
  'a';
  a.name;
  'b';
  b.name;
  'withName';
  x.name;
  'y';
  y.name;
  'ClassName';
  z.name;
  'function';
  typeof q.name;
  'bar';
  bar.name;
  'inParens';
  inParens.name;
  'inManyParens';
  inManyParens.name;
})();

(function testArrayBindingPattern() {
  var [a = function () {
    ;
  }, b = () => {
    ;
  }, x = function withName() {
    ;
  }, y = class {}, z = class ClassName {}, q = class {
    static name() {
      return 42;
    }

  }, inParens = () => {
    ;
  }, inManyParens = () => {
    ;
  }] = [];
  'a';
  a.name;
  'b';
  b.name;
  'withName';
  x.name;
  'y';
  y.name;
  'ClassName';
  z.name;
  'function';
  typeof q.name;
  'inParens';
  inParens.name;
  'inManyParens';
  inManyParens.name;
})();

(function testObjectAssignmentPattern() {
  var a, b, x, y, z, q;
  ({
    a = function () {
      ;
    },
    b = () => {
      ;
    },
    x = function withName() {
      ;
    },
    y = class {},
    z = class ClassName {},
    q = class {
      static name() {
        return 42;
      }

    },
    foo: bar = function () {
      ;
    },
    inParens = () => {
      ;
    },
    inManyParens = () => {
      ;
    }
  } = {});
  'a';
  a.name;
  'b';
  b.name;
  'withName';
  x.name;
  'y';
  y.name;
  'ClassName';
  z.name;
  'function';
  typeof q.name;
  'bar';
  bar.name;
  'inParens';
  inParens.name;
  'inManyParens';
  inManyParens.name;
})();

(function testArrayAssignmentPattern() {
  var a, b, x, y, z, q;
  [a = function () {
    ;
  }, b = () => {
    ;
  }, x = function withName() {
    ;
  }, y = class {}, z = class ClassName {}, q = class {
    static name() {
      return 42;
    }

  }, inParens = () => {
    ;
  }, inManyParens = () => {
    ;
  }] = [];
  'a';
  a.name;
  'b';
  b.name;
  'withName';
  x.name;
  'y';
  y.name;
  'ClassName';
  z.name;
  'function';
  typeof q.name;
  'inParens';
  inParens.name;
  'inManyParens';
  inManyParens.name;
})();

(function testParameterDestructuring() {
  (function ({
    a = function () {
      ;
    },
    b = () => {
      ;
    },
    x = function withName() {
      ;
    },
    y = class {},
    z = class ClassName {},
    q = class {
      static name() {
        return 42;
      }

    },
    foo: bar = function () {
      ;
    },
    inParens = () => {
      ;
    },
    inManyParens = () => {
      ;
    }
  }) {
    'a';
    a.name;
    'b';
    b.name;
    'withName';
    x.name;
    'y';
    y.name;
    'ClassName';
    z.name;
    'function';
    typeof q.name;
    'bar';
    bar.name;
    'inParens';
    inParens.name;
    'inManyParens';
    inManyParens.name;
  })({});

  (function ([a = function () {
    ;
  }, b = () => {
    ;
  }, x = function withName() {
    ;
  }, y = class {}, z = class ClassName {}, q = class {
    static name() {
      return 42;
    }

  }, inParens = () => {
    ;
  }, inManyParens = () => {
    ;
  }]) {
    'a';
    a.name;
    'b';
    b.name;
    'withName';
    x.name;
    'y';
    y.name;
    'ClassName';
    z.name;
    'function';
    typeof q.name;
    'inParens';
    inParens.name;
    'inManyParens';
    inManyParens.name;
  })([]);
})();

(function testDefaultParameters() {
  (function (a = function () {
    ;
  }, b = () => {
    ;
  }, x = function withName() {
    ;
  }, y = class {}, z = class ClassName {}, q = class {
    static name() {
      return 42;
    }

  }, inParens = () => {
    ;
  }, inManyParens = () => {
    ;
  }) {
    'a';
    a.name;
    'b';
    b.name;
    'withName';
    x.name;
    'y';
    y.name;
    'ClassName';
    z.name;
    'function';
    typeof q.name;
    'inParens';
    inParens.name;
    'inManyParens';
    inManyParens.name;
  })();
})();

(function testComputedNameNotShared() {
  function makeClass(propName) {
    return class {
      static [propName]() {
        ;
      }

    };
  }

  var sym1 = Symbol('1');
  var sym2 = Symbol('2');
  var class1 = makeClass(sym1);
  '[1]';
  class1[sym1].name;
  var class2 = makeClass(sym2);
  '[2]';
  class2[sym2].name;
  '[1]';
  class1[sym1].name;
})();

(function testComputedNamesOnlyAppliedSyntactically() {
  function factory() {
    return () => {
      ;
    };
  }

  var obj = {
    ['foo']: factory()
  };
  '';
  obj.foo.name;
})();

(function testNameNotReflectedInToString() {
  var f = function () {
    ;
  };

  var g = function* () {
    ;
  };

  var obj = {
    ['h']: function () {
      ;
    },
    i: () => {
      ;
    }
  };
  'function () {}';
  f.toString();
  'function* () {}';
  g.toString();
  'function () {}';
  obj.h.toString();
  '() => {}';
  obj.i.toString();
})();

(function testClassNameOrder() {
  ['length', 'prototype'];
  Object.getOwnPropertyNames(class {});
  var tmp = {
    '': class {}
  };
  var Tmp = tmp[''];
  ['length', 'prototype', 'name'];
  Object.getOwnPropertyNames(Tmp);

  var name = () => '';

  var tmp = {
    [name()]: class {}
  };
  var Tmp = tmp[name()];
  ['length', 'prototype', 'name'];
  Object.getOwnPropertyNames(Tmp);

  class A {}

  ['length', 'prototype', 'name'];
  Object.getOwnPropertyNames(A);

  class B {
    static foo() {
      ;
    }

  }

  ['length', 'prototype', 'foo', 'name'];
  Object.getOwnPropertyNames(B);

  class C {
    static name() {
      ;
    }

    static foo() {
      ;
    }

  }

  ['length', 'prototype', 'name', 'foo'];
  Object.getOwnPropertyNames(C);
})();

(function testStaticName() {
  class C {
    static name() {
      return 42;
    }

  }

  42;
  C.name();
  undefined;
  new C().name;

  class D {
    static get name() {
      return 17;
    }

  }

  17;
  D.name;
  undefined;
  new D().name;
  var c = class {
    static name() {
      return 42;
    }

  };
  42;
  c.name();
  undefined;
  new c().name;
  var d = class {
    static get name() {
      return 17;
    }

  };
  17;
  d.name;
  undefined;
  new d().name;
})();

(function testNonStaticName() {
  class C {
    name() {
      return 42;
    }

  }

  'C';
  C.name;
  42;
  new C().name();

  class D {
    get name() {
      return 17;
    }

  }

  'D';
  D.name;
  17;
  new D().name;
  var c = class {
    name() {
      return 42;
    }

  };
  'c';
  c.name;
  42;
  new c().name();
  var d = class {
    get name() {
      return 17;
    }

  };
  'd';
  d.name;
  17;
  new d().name;
})();
