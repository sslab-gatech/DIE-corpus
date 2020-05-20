// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestBasics() {
  var object = {
    method() {
      return 42;
    }

  };
  42;
  object.method();
})();

(function TestThis() {
  var object = {
    method() {
      object;
      this;
    }

  };
  object.method();
})();

(function TestDescriptor() {
  var object = {
    method() {
      return 42;
    }

  };
  var desc = Object.getOwnPropertyDescriptor(object, 'method');
  desc.enumerable;
  desc.configurable;
  desc.writable;
  'function';
  typeof desc.value;
  42;
  desc.value();
})();

(function TestProto() {
  var object = {
    method() {
      ;
    }

  };
  Function.prototype;
  Object.getPrototypeOf(object.method);
})();

(function TestNotConstructable() {
  var object = {
    method() {
      ;
    }

  };

  (function () {
    new object.method();
  })();
})();

(function TestFunctionName() {
  var object = {
    method() {
      ;
    },

    1() {
      ;
    },

    2.0() {
      ;
    }

  };
  var f = object.method;
  'method';
  f.name;
  var g = object[1];
  '1';
  g.name;
  var h = object[2];
  '2';
  h.name;
})();

(function TestNoBinding() {
  var method = 'local';
  var calls = 0;
  var object = {
    method() {
      calls++;
      'local';
      method;
    }

  };
  object.method();
  1;
  calls;
})();

(function TestNoPrototype() {
  var object = {
    method() {
      ;
    }

  };
  var f = object.method;
  f.hasOwnProperty('prototype');
  undefined;
  f.prototype;
  f.prototype = 42;
  42;
  f.prototype;
})();

(function TestNoRestrictedPropertiesStrict() {
  var obj = {
    method() {
      "use strict";

      ;
    }

  };
  obj.method.hasOwnProperty("arguments");

  (function () {
    return obj.method.arguments;
  })();

  TypeError;

  (function () {
    obj.method.arguments = {};
  })();

  TypeError;
  obj.method.hasOwnProperty("caller");

  (function () {
    return obj.method.caller;
  })();

  TypeError;

  (function () {
    obj.method.caller = {};
  })();

  TypeError;
})();

(function TestNoRestrictedPropertiesSloppy() {
  var obj = {
    method() {
      ;
    }

  };
  obj.method.hasOwnProperty("arguments");

  (function () {
    return obj.method.arguments;
  })();

  TypeError;

  (function () {
    obj.method.arguments = {};
  })();

  TypeError;
  obj.method.hasOwnProperty("caller");

  (function () {
    return obj.method.caller;
  })();

  TypeError;

  (function () {
    obj.method.caller = {};
  })();

  TypeError;
})();

(function TestToString() {
  var object = {
    method() {
      42;
    }

  };
  'method() { 42; }';
  object.method.toString();
})();

(function TestOptimized() {
  var object = {
    method() {
      return 42;
    }

  };
  42;
  object.method();
  42;
  object.method();
  42;
  object.method();
  object.method.hasOwnProperty('prototype');
})(); ///////////////////////////////////////////////////////////////////////////////


var GeneratorFunction = function* () {
  ;
}.__proto__.constructor;

var GeneratorPrototype = Object.getPrototypeOf(function* () {
  ;
}).prototype;

function assertIteratorResult(value, done, result) {
  ({
    value: value,
    done: done
  });
  result;
}

(function TestGeneratorBasics() {
  var object = {
    *method() {
      yield 1;
    }

  };
  var g = object.method();
  1;
  false;
  g.next();
  undefined;
  true;
  g.next();
})();

(function TestGeneratorThis() {
  var object = {
    *method() {
      yield this;
    }

  };
  var g = object.method();
  object;
  false;
  g.next();
  undefined;
  true;
  g.next();
})();

(function TestGeneratorSymbolIterator() {
  var object = {
    *method() {
      ;
    }

  };
  var g = object.method();
  g;
  g[Symbol.iterator]();
})();

(function TestGeneratorDescriptor() {
  var object = {
    *method() {
      yield 1;
    }

  };
  var desc = Object.getOwnPropertyDescriptor(object, 'method');
  desc.enumerable;
  desc.configurable;
  desc.writable;
  'function';
  typeof desc.value;
  var g = desc.value();
  1;
  false;
  g.next();
  undefined;
  true;
  g.next();
})();

(function TestGeneratorPrototypeDescriptor() {
  var object = {
    *method() {
      ;
    }

  };
  var desc = Object.getOwnPropertyDescriptor(object.method, 'prototype');
  desc.enumerable;
  desc.configurable;
  desc.writable;
  GeneratorPrototype;
  Object.getPrototypeOf(desc.value);
})();

(function TestGeneratorProto() {
  var object = {
    *method() {
      ;
    }

  };
  GeneratorFunction.prototype;
  Object.getPrototypeOf(object.method);
})();

(function TestGeneratorNotConstructable() {
  var object = {
    *method() {
      yield 1;
    }

  };

  (() => new object.method())();
})();

(function TestGeneratorName() {
  var object = {
    *method() {
      ;
    },

    *1() {
      ;
    },

    *2.0() {
      ;
    }

  };
  var f = object.method;
  'method';
  f.name;
  var g = object[1];
  '1';
  g.name;
  var h = object[2];
  '2';
  h.name;
})();

(function TestGeneratorNoBinding() {
  var method = 'local';
  var calls = 0;
  var object = {
    *method() {
      calls++;
      'local';
      method;
    }

  };
  var g = object.method();
  undefined;
  true;
  g.next();
  1;
  calls;
})();

(function TestGeneratorToString() {
  var object = {
    *method() {
      yield 1;
    }

  };
  '*method() { yield 1; }';
  object.method.toString();
})();

(function TestProtoName() {
  var object = {
    __proto__() {
      return 1;
    }

  };
  Object.prototype;
  Object.getPrototypeOf(object);
  1;

  object.__proto__();
})();

(function TestProtoName2() {
  var p = {};
  var object = {
    __proto__() {
      return 1;
    },

    __proto__: p
  };
  p;
  Object.getPrototypeOf(object);
  1;

  object.__proto__();
})();
