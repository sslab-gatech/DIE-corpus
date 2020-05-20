// Copyright 2011 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// We change the stack size for the ARM64 simulator because at one point this
// test enters an infinite recursion which goes through the runtime and we
// overflow the system stack before the simulator stack.
// Flags: --sim-stack-size=500 --allow-natives-syntax
// Helper.
function TestWithProxies(test, x, y, z) {
  // Separate function for nicer stack traces.
  TestWithObjectProxy(test, x, y, z);
  TestWithFunctionProxy(test, x, y, z);
}

function TestWithObjectProxy(test, x, y, z) {
  test(handler => {
    return new Proxy({}, handler);
  }, x, y, z);
}

function TestWithFunctionProxy(test, x, y, z) {
  test(handler => {
    return new Proxy(() => {
      ;
    }, handler);
  }, x, y, z);
} // ---------------------------------------------------------------------------
// Test Proxy constructor properties


(function TestProxyProperties() {
  2;
  Proxy.length;
  Function.__proto__;
  Proxy.__proto__;
  undefined;
  Proxy.prototype;
  undefined;
  Object.getOwnPropertyDescriptor(Proxy, "arguments");

  (() => Proxy.arguments)();

  TypeError;
  undefined;
  Object.getOwnPropertyDescriptor(Proxy, "caller");

  (() => Proxy.caller)();

  TypeError;
})(); // ---------------------------------------------------------------------------
// Getting property descriptors (Object.getOwnPropertyDescriptor).


var key;

function TestGetOwnProperty(handler) {
  TestWithProxies(TestGetOwnProperty2, handler);
}

function TestGetOwnProperty2(create, handler) {
  var p = create(handler);
  42;
  Object.getOwnPropertyDescriptor(p, "a").value;
  "a";
  key;
  42;
  Object.getOwnPropertyDescriptor(p, 99).value;
  "99";
  key;
}

TestGetOwnProperty({
  getOwnPropertyDescriptor(target, k) {
    key = k;
    return {
      value: 42,
      configurable: true
    };
  }

});
TestGetOwnProperty({
  getOwnPropertyDescriptor(target, k) {
    return this.getOwnPropertyDescriptor2(k);
  },

  getOwnPropertyDescriptor2(k) {
    key = k;
    return {
      value: 42,
      configurable: true
    };
  }

});
TestGetOwnProperty({
  getOwnPropertyDescriptor(target, k) {
    key = k;
    return {
      get value() {
        return 42;
      },

      get configurable() {
        return true;
      }

    };
  }

});
TestGetOwnProperty(new Proxy({}, {
  get(target, pk, receiver) {
    return function (t, k) {
      key = k;
      return {
        value: 42,
        configurable: true
      };
    };
  }

})); // ---------------------------------------------------------------------------

function TestGetOwnPropertyThrow(handler) {
  TestWithProxies(TestGetOwnPropertyThrow2, handler);
}

function TestGetOwnPropertyThrow2(create, handler) {
  var p = create(handler);

  (() => Object.getOwnPropertyDescriptor(p, "a"))();

  "myexn";

  (() => Object.getOwnPropertyDescriptor(p, 77))();

  "myexn";
}

TestGetOwnPropertyThrow({
  getOwnPropertyDescriptor: function (k) {
    throw "myexn";
  }
});
TestGetOwnPropertyThrow({
  getOwnPropertyDescriptor: function (k) {
    return this.getOwnPropertyDescriptor2(k);
  },
  getOwnPropertyDescriptor2: function (k) {
    throw "myexn";
  }
});
TestGetOwnPropertyThrow({
  getOwnPropertyDescriptor: function (k) {
    return {
      get value() {
        throw "myexn";
      }

    };
  }
});
TestGetOwnPropertyThrow(new Proxy({}, {
  get: function (pr, pk) {
    return function (k) {
      throw "myexn";
    };
  }
})); // ---------------------------------------------------------------------------
// Getters (dot, brackets).

var key;

function TestGet(handler) {
  TestWithProxies(TestGet2, handler);
}

function TestGet2(create, handler) {
  var p = create(handler);
  42;
  p.a;
  "a";
  key;
  42;
  p["b"];
  "b";
  key;
  42;
  p[99];
  "99";
  key;
  42;

  (function (n) {
    return p[n];
  })("c");

  "c";
  key;
  42;

  (function (n) {
    return p[n];
  })(101);

  "101";
  key;
  var o = Object.create(p, {
    x: {
      value: 88
    }
  });
  42;
  o.a;
  "a";
  key;
  42;
  o["b"];
  "b";
  key;
  42;
  o[99];
  "99";
  key;
  88;
  o.x;
  88;
  o["x"];
  42;

  (function (n) {
    return o[n];
  })("c");

  "c";
  key;
  42;

  (function (n) {
    return o[n];
  })(101);

  "101";
  key;
  88;

  (function (n) {
    return o[n];
  })("x");
}

TestGet({
  get(t, k, r) {
    key = k;
    return 42;
  }

});
TestGet({
  get(t, k, r) {
    return this.get2(r, k);
  },

  get2(r, k) {
    key = k;
    return 42;
  }

});
TestGet(new Proxy({}, {
  get(pt, pk, pr) {
    return function (t, k, r) {
      key = k;
      return 42;
    };
  }

})); // ---------------------------------------------------------------------------

function TestGetCall(handler) {
  TestWithProxies(TestGetCall2, handler);
}

function TestGetCall2(create, handler) {
  var p = create(handler);
  55;
  p.f();
  55;
  p["f"]();
  55;
  p.f("unused", "arguments");
  55;
  p.f.call(p);
  55;
  p["f"].call(p);
  55;
  p[101].call(p);
  55;
  p.withargs(45, 5);
  55;
  p.withargs.call(p, 11, 22);
  55;

  (function (n) {
    return p[n]();
  })("f");

  55;

  (function (n) {
    return p[n].call(p);
  })("f");

  55;

  (function (n) {
    return p[n](15, 20);
  })("withargs");

  55;

  (function (n) {
    return p[n].call(p, 13, 21);
  })("withargs");

  "6655";
  "66" + p;
  // calls p.toString
  var o = Object.create(p, {
    g: {
      value: function (x) {
        return x + 88;
      }
    }
  });
  55;
  o.f();
  55;
  o["f"]();
  55;
  o.f("unused", "arguments");
  55;
  o.f.call(o);
  55;
  o.f.call(p);
  55;
  o["f"].call(p);
  55;
  o[101].call(p);
  55;
  o.withargs(45, 5);
  55;
  o.withargs.call(p, 11, 22);
  90;
  o.g(2);
  91;
  o.g.call(o, 3);
  92;
  o.g.call(p, 4);
  55;

  (function (n) {
    return o[n]();
  })("f");

  55;

  (function (n) {
    return o[n].call(o);
  })("f");

  55;

  (function (n) {
    return o[n](15, 20);
  })("withargs");

  55;

  (function (n) {
    return o[n].call(o, 13, 21);
  })("withargs");

  93;

  (function (n) {
    return o[n](5);
  })("g");

  94;

  (function (n) {
    return o[n].call(o, 6);
  })("g");

  95;

  (function (n) {
    return o[n].call(p, 7);
  })("g");

  "6655";
  "66" + o;
}

TestGetCall({
  get(t, k, r) {
    return () => {
      return 55;
    };
  }

});
TestGetCall({
  get(t, k, r) {
    return this.get2(t, k, r);
  },

  get2(t, k, r) {
    return () => {
      return 55;
    };
  }

});
TestGetCall({
  get(t, k, r) {
    if (k == "gg") {
      return () => {
        return 55;
      };
    } else {
      if (k == "withargs") {
        return (n, m) => {
          return n + m * 2;
        };
      } else {
        return () => {
          return r.gg();
        };
      }
    }
  }

});
TestGetCall(new Proxy({}, {
  get(pt, pk, pr) {
    return (t, k, r) => {
      return () => {
        return 55;
      };
    };
  }

})); // ---------------------------------------------------------------------------

function TestGetThrow(handler) {
  TestWithProxies(TestGetThrow2, handler);
}

function TestGetThrow2(create, handler) {
  var p = create(handler);

  (function () {
    p.a;
  })();

  "myexn";

  (function () {
    p["b"];
  })();

  "myexn";

  (function () {
    p[3];
  })();

  "myexn";

  (function () {
    (function (n) {
      p[n];
    })("c");
  })();

  "myexn";

  (function () {
    (function (n) {
      p[n];
    })(99);
  })();

  "myexn";
  var o = Object.create(p, {
    x: {
      value: 88
    },
    '4': {
      value: 89
    }
  });

  (function () {
    o.a;
  })();

  "myexn";

  (function () {
    o["b"];
  })();

  "myexn";

  (function () {
    o[3];
  })();

  "myexn";

  (function () {
    (function (n) {
      o[n];
    })("c");
  })();

  "myexn";

  (function () {
    (function (n) {
      o[n];
    })(99);
  })();

  "myexn";
}

TestGetThrow({
  get(r, k) {
    throw "myexn";
  }

});
TestGetThrow({
  get(r, k) {
    return this.get2(r, k);
  },

  get2(r, k) {
    throw "myexn";
  }

});
TestGetThrow(new Proxy({}, {
  get(pr, pk) {
    throw "myexn";
  }

}));
TestGetThrow(new Proxy({}, {
  get(pr, pk) {
    return function (r, k) {
      throw "myexn";
    };
  }

})); // ---------------------------------------------------------------------------
// Setters.

var key;
var val;

function TestSet(handler) {
  TestWithProxies(TestSet2, handler);
}

function TestSet2(create, handler) {
  var p = create(handler);
  42;
  p.a = 42;
  "a";
  key;
  42;
  val;
  43;
  p["b"] = 43;
  "b";
  key;
  43;
  val;
  44;
  p[77] = 44;
  "77";
  key;
  44;
  val;
  45;

  (function (n) {
    return p[n] = 45;
  })("c");

  "c";
  key;
  45;
  val;
  46;

  (function (n) {
    return p[n] = 46;
  })(99);

  "99";
  key;
  46;
  val;
  47;
  p["0"] = 47;
  "0";
  key;
  47;
  val;
}

TestSet({
  set: function (r, k, v) {
    key = k;
    val = v;
    return true;
  }
});
TestSet({
  set: function (r, k, v) {
    return this.set2(r, k, v);
  },
  set2: function (r, k, v) {
    key = k;
    val = v;
    return true;
  }
});
TestSet(new Proxy({}, {
  get(pk, pr) {
    return (r, k, v) => {
      key = k;
      val = v;
      return true;
    };
  }

})); // ---------------------------------------------------------------------------

function TestSetThrow(handler) {
  TestWithProxies(TestSetThrow2, handler);
}

function TestSetThrow2(create, handler) {
  var p = create(handler);

  (function () {
    p.a = 42;
  })();

  "myexn";

  (function () {
    p["b"] = 42;
  })();

  "myexn";

  (function () {
    p[22] = 42;
  })();

  "myexn";

  (function () {
    (function (n) {
      p[n] = 45;
    })("c");
  })();

  "myexn";

  (function () {
    (function (n) {
      p[n] = 46;
    })(99);
  })();

  "myexn";
}

TestSetThrow({
  set: function (r, k, v) {
    throw "myexn";
  }
});
TestSetThrow({
  set: function (r, k, v) {
    return this.set2(r, k, v);
  },
  set2: function (r, k, v) {
    throw "myexn";
  }
});
TestSetThrow({
  getOwnPropertyDescriptor: function (k) {
    throw "myexn";
  },
  defineProperty: function (k, desc) {
    key = k;
    val = desc.value;
  }
});
TestSetThrow({
  getOwnPropertyDescriptor: function (k) {
    return {
      configurable: true,
      writable: true
    };
  },
  defineProperty: function (k, desc) {
    throw "myexn";
  }
});
TestSetThrow({
  getOwnPropertyDescriptor: function (k) {
    return this.getOwnPropertyDescriptor2(k);
  },
  getOwnPropertyDescriptor2: function (k) {
    throw "myexn";
  },
  defineProperty: function (k, desc) {
    this.defineProperty2(k, desc);
  },
  defineProperty2: function (k, desc) {
    key = k;
    val = desc.value;
  }
});
TestSetThrow({
  getOwnPropertyDescriptor: function (k) {
    return this.getOwnPropertyDescriptor2(k);
  },
  getOwnPropertyDescriptor2: function (k) {
    return {
      configurable: true,
      writable: true
    };
  },
  defineProperty: function (k, desc) {
    this.defineProperty2(k, desc);
  },
  defineProperty2: function (k, desc) {
    throw "myexn";
  }
});
TestSetThrow({
  getOwnPropertyDescriptor: function (k) {
    throw "myexn";
  },
  defineProperty: function (k, desc) {
    key = k;
    val = desc.value;
  }
});
TestSetThrow({
  getOwnPropertyDescriptor: function (k) {
    return {
      get configurable() {
        return true;
      },

      get writable() {
        return true;
      }

    };
  },
  defineProperty: function (k, desc) {
    throw "myexn";
  }
});
TestSetThrow({
  getOwnPropertyDescriptor: function (k) {
    throw "myexn";
  }
});
TestSetThrow({
  getOwnPropertyDescriptor: function (k) {
    throw "myexn";
  },
  defineProperty: function (k, desc) {
    key = k;
    val = desc.value;
  }
});
TestSetThrow(new Proxy({}, {
  get: function (pr, pk) {
    throw "myexn";
  }
}));
TestSetThrow(new Proxy({}, {
  get: function (pr, pk) {
    return function (r, k, v) {
      throw "myexn";
    };
  }
})); // ---------------------------------------------------------------------------
// Evil proxy-induced side-effects shouldn't crash.

TestWithProxies(function (create) {
  var calls = 0;
  var handler = {
    getPropertyDescriptor: function () {
      ++calls;
      return calls % 2 == 1 ? {
        get: function () {
          return 5;
        },
        configurable: true
      } : {
        set: function () {
          return false;
        },
        configurable: true
      };
    }
  };
  var p = create(handler);
  var o = Object.create(p); // Make proxy prototype property read-only after CanPut check.

  try {
    o.x = 4;
  } catch (e) {
    e;
    Error;
  }
});
TestWithProxies(function (create) {
  var handler = {
    getPropertyDescriptor: function () {
      Object.defineProperty(o, "x", {
        get: function () {
          return 5;
        }
      });
      return {
        set: function () {
          ;
        }
      };
    }
  };
  var p = create(handler);
  var o = Object.create(p); // Make object property read-only after CanPut check.

  try {
    o.x = 4;
  } catch (e) {
    e;
    Error;
  }
}); // ---------------------------------------------------------------------------
// Property definition (Object.defineProperty and Object.defineProperties).

var key;
var desc;

function TestDefine(handler) {
  TestWithProxies(TestDefine2, handler);
}

function TestDefine2(create, handler) {
  var p = create(handler);
  p;
  Object.defineProperty(p, "a", {
    value: 44
  });
  "a";
  key;
  1;
  Object.getOwnPropertyNames(desc).length;
  44;
  desc.value;
  p;
  Object.defineProperty(p, "b", {
    value: 45,
    writable: false
  });
  "b";
  key;
  2;
  Object.getOwnPropertyNames(desc).length;
  45;
  desc.value;
  false;
  desc.writable;
  p;
  Object.defineProperty(p, "c", {
    value: 46,
    enumerable: false
  });
  "c";
  key;
  2;
  Object.getOwnPropertyNames(desc).length;
  46;
  desc.value;
  false;
  desc.enumerable;
  p;
  Object.defineProperty(p, 101, {
    value: 47,
    enumerable: false
  });
  "101";
  key;
  2;
  Object.getOwnPropertyNames(desc).length;
  47;
  desc.value;
  false;
  desc.enumerable;
  var attributes = {
    configurable: true,
    mine: 66,
    minetoo: 23
  };
  p;
  Object.defineProperty(p, "d", attributes);
  "d";
  key;
  // Modifying the attributes object after the fact should have no effect.
  attributes.configurable = false;
  attributes.mine = 77;
  delete attributes.minetoo;
  1;
  Object.getOwnPropertyNames(desc).length;
  true;
  desc.configurable;
  undefined;
  desc.mine;
  undefined;
  desc.minetoo;
  p;
  Object.defineProperty(p, "e", {
    get: function () {
      return 5;
    }
  });
  "e";
  key;
  1;
  Object.getOwnPropertyNames(desc).length;
  5;
  desc.get();
  p;
  Object.defineProperty(p, "zzz", {});
  "zzz";
  key;
  0;
  Object.getOwnPropertyNames(desc).length;
  var props = {
    '11': {},
    blub: {
      get: function () {
        return true;
      }
    },
    '': {
      get value() {
        return 20;
      }

    },
    last: {
      value: 21,
      configurable: true,
      mine: "eyes"
    }
  };
  Object.defineProperty(props, "hidden", {
    value: "hidden",
    enumerable: false
  });
  p;
  Object.defineProperties(p, props);
  "last";
  key;
  2;
  Object.getOwnPropertyNames(desc).length;
  21;
  desc.value;
  true;
  desc.configurable;
  undefined;
  desc.mine;
  // Arguably a bug in the spec...
  var props = {
    bla: {
      get value() {
        throw "myexn";
      }

    }
  };

  (function () {
    Object.defineProperties(p, props);
  })();

  "myexn";
}

TestDefine({
  defineProperty(t, k, d) {
    key = k;
    desc = d;
    return true;
  }

});
TestDefine({
  defineProperty(t, k, d) {
    return this.defineProperty2(k, d);
  },

  defineProperty2(k, d) {
    key = k;
    desc = d;
    return true;
  }

}); // ---------------------------------------------------------------------------

function TestDefineThrow(handler) {
  TestWithProxies(TestDefineThrow2, handler);
}

function TestDefineThrow2(create, handler) {
  var p = create(handler);

  (() => Object.defineProperty(p, "a", {
    value: 44
  }))();

  "myexn";

  (() => Object.defineProperty(p, 0, {
    value: 44
  }))();

  "myexn";
  var d1 = create({
    get: function (r, k) {
      throw "myexn";
    },
    getOwnPropertyNames: function () {
      return ["value"];
    }
  });

  (function () {
    Object.defineProperty(p, "p", d1);
  })();

  "myexn";
  var d2 = create({
    get: function (r, k) {
      return 77;
    },
    getOwnPropertyNames: function () {
      throw "myexn";
    }
  });

  (function () {
    Object.defineProperty(p, "p", d2);
  })();

  "myexn";
  var props = {
    bla: {
      get value() {
        throw "otherexn";
      }

    }
  };

  (() => Object.defineProperties(p, props))();

  "otherexn";
}

TestDefineThrow({
  defineProperty: function (k, d) {
    throw "myexn";
  }
});
TestDefineThrow({
  defineProperty: function (k, d) {
    return this.defineProperty2(k, d);
  },
  defineProperty2: function (k, d) {
    throw "myexn";
  }
});
TestDefineThrow(new Proxy({}, {
  get: function (pr, pk) {
    throw "myexn";
  }
}));
TestDefineThrow(new Proxy({}, {
  get: function (pr, pk) {
    return function (k, d) {
      throw "myexn";
    };
  }
})); // ---------------------------------------------------------------------------
// Property deletion (delete).

var key;

function TestDelete(handler) {
  TestWithProxies(TestDelete2, handler);
}

function TestDelete2(create, handler) {
  var p = create(handler);
  true;
  delete p.a;
  "a";
  key;
  true;
  delete p["b"];
  "b";
  key;
  true;
  delete p[1];
  "1";
  key;
  false;
  delete p.z1;
  "z1";
  key;
  false;
  delete p["z2"];
  "z2";
  key;

  (function () {
    "use strict";

    true;
    delete p.c;
    "c";
    key;
    true;
    delete p["d"];
    "d";
    key;
    true;
    delete p[2];
    "2";
    key;

    (function () {
      delete p.z3;
    })();

    TypeError;
    "z3";
    key;

    (function () {
      delete p["z4"];
    })();

    TypeError;
    "z4";
    key;
  })();
}

TestDelete({
  deleteProperty(target, k) {
    key = k;
    return k < "z";
  }

});
TestDelete({
  deleteProperty(target, k) {
    return this.delete2(k);
  },

  delete2: function (k) {
    key = k;
    return k < "z";
  }
});
TestDelete(new Proxy({}, {
  get(pt, pk, pr) {
    return (target, k) => {
      key = k;
      return k < "z";
    };
  }

})); // ---------------------------------------------------------------------------

function TestDeleteThrow(handler) {
  TestWithProxies(TestDeleteThrow2, handler);
}

function TestDeleteThrow2(create, handler) {
  var p = create(handler);

  (function () {
    delete p.a;
  })();

  "myexn";

  (function () {
    delete p["b"];
  })();

  "myexn";

  (function () {
    delete p[3];
  })();

  "myexn";

  (function () {
    "use strict";

    (function () {
      delete p.c;
    })();

    "myexn";

    (function () {
      delete p["d"];
    })();

    "myexn";

    (function () {
      delete p[4];
    })();

    "myexn";
  })();
}

TestDeleteThrow({
  deleteProperty(t, k) {
    throw "myexn";
  }

});
TestDeleteThrow({
  deleteProperty(t, k) {
    return this.delete2(k);
  },

  delete2(k) {
    throw "myexn";
  }

});
TestDeleteThrow(new Proxy({}, {
  get(pt, pk, pr) {
    throw "myexn";
  }

}));
TestDeleteThrow(new Proxy({}, {
  get(pt, pk, pr) {
    return k => {
      throw "myexn";
    };
  }

})); // ---------------------------------------------------------------------------
// Property descriptors (Object.getOwnPropertyDescriptor).

function TestDescriptor(handler) {
  TestWithProxies(TestDescriptor2, handler);
}

function TestDescriptor2(create, handler) {
  var p = create(handler);
  var descs = [{
    configurable: true
  }, {
    value: 34,
    enumerable: true,
    configurable: true
  }, {
    value: 3,
    writable: false,
    mine: "eyes",
    configurable: true
  }, {
    get value() {
      return 20;
    },

    get configurable() {
      return true;
    }

  }, {
    get: function () {
      "get";

      ;
    },
    set: function () {
      "set";

      ;
    },
    configurable: true
  }];

  for (var i = 0; i < descs.length; ++i) {
    p;
    Object.defineProperty(p, i, descs[i]);
    var desc = Object.getOwnPropertyDescriptor(p, i);

    for (prop in descs[i]) {
      // TODO(rossberg): Ignore user attributes as long as the spec isn't
      // fixed suitably.
      if (prop != "mine") {
        descs[i][prop];
        desc[prop];
      }
    }

    undefined;
    Object.getOwnPropertyDescriptor(p, "absent");
  }
}

TestDescriptor({
  defineProperty(t, k, d) {
    this["__" + k] = d;
    return true;
  },

  getOwnPropertyDescriptor(t, k) {
    return this["__" + k];
  }

});
TestDescriptor({
  defineProperty(t, k, d) {
    this["__" + k] = d;
    return true;
  },

  getOwnPropertyDescriptor(t, k) {
    return this.getOwnPropertyDescriptor2(k);
  },

  getOwnPropertyDescriptor2: function (k) {
    return this["__" + k];
  }
}); // ---------------------------------------------------------------------------

function TestDescriptorThrow(handler) {
  TestWithProxies(TestDescriptorThrow2, handler);
}

function TestDescriptorThrow2(create, handler) {
  var p = create(handler);

  (() => Object.getOwnPropertyDescriptor(p, "a"))();

  "myexn";
}

TestDescriptorThrow({
  getOwnPropertyDescriptor: function (k) {
    throw "myexn";
  }
});
TestDescriptorThrow({
  getOwnPropertyDescriptor: function (k) {
    return this.getOwnPropertyDescriptor2(k);
  },
  getOwnPropertyDescriptor2: function (k) {
    throw "myexn";
  }
}); // ---------------------------------------------------------------------------
// Comparison.

function TestComparison(eq) {
  TestWithProxies(TestComparison2, eq);
}

function TestComparison2(create, eq) {
  var p1 = create({});
  var p2 = create({});
  eq(p1, p1);
  eq(p2, p2);
  !eq(p1, p2);
  !eq(p1, {});
  !eq({}, p2);
  !eq({}, {});
}

TestComparison(function (o1, o2) {
  return o1 == o2;
});
TestComparison(function (o1, o2) {
  return o1 === o2;
});
TestComparison(function (o1, o2) {
  return !(o1 != o2);
});
TestComparison(function (o1, o2) {
  return !(o1 !== o2);
}); // Type (typeof).

function TestTypeof() {
  "object";
  typeof new Proxy({}, {});
  typeof new Proxy({}, {}) == "object";
  "object" == typeof new Proxy({}, {});
  "function";
  typeof new Proxy(function () {
    ;
  }, {});
  typeof new Proxy(function () {
    ;
  }, {}) == "function";
  "function" == typeof new Proxy(function () {
    ;
  }, {});
}

TestTypeof(); // ---------------------------------------------------------------------------
// Membership test (in).

var key;

function TestIn(handler) {
  TestWithProxies(TestIn2, handler);
}

function TestIn2(create, handler) {
  var p = create(handler);
  "a" in p;
  "a";
  key;
  99 in p;
  "99";
  key;
  "z" in p;
  "z";
  key;
  2;
  "a" in p ? 2 : 0;
  0;
  !("a" in p) ? 2 : 0;
  0;
  "zzz" in p ? 2 : 0;
  2;
  !("zzz" in p) ? 2 : 0;

  // Test compilation in conditionals.
  if ("b" in p) {
    ;
  } else {
    false;
  }

  "b";
  key;

  if ("zz" in p) {
    false;
  }

  "zz";
  key;

  if (!("c" in p)) {
    false;
  }

  "c";
  key;

  if (!("zzz" in p)) {
    ;
  } else {
    false;
  }

  "zzz";
  key;
}

TestIn({
  has(t, k) {
    key = k;
    return k < "z";
  }

});
TestIn({
  has(t, k) {
    return this.has2(k);
  },

  has2(k) {
    key = k;
    return k < "z";
  }

});
TestIn(new Proxy({}, {
  get(pt, pk, pr) {
    return (t, k) => {
      key = k;
      return k < "z";
    };
  }

})); // ---------------------------------------------------------------------------

function TestInThrow(handler) {
  TestWithProxies(TestInThrow2, handler);
}

function TestInThrow2(create, handler) {
  var p = create(handler);

  (function () {
    return "a" in p;
  })();

  "myexn";

  (function () {
    return 99 in p;
  })();

  "myexn";

  (function () {
    return !("a" in p);
  })();

  "myexn";

  (function () {
    return "a" in p ? 2 : 3;
  })();

  "myexn";

  (function () {
    if ("b" in p) {
      ;
    }
  })();

  "myexn";

  (function () {
    if (!("b" in p)) {
      ;
    }
  })();

  "myexn";

  (function () {
    if ("zzz" in p) {
      ;
    }
  })();

  "myexn";
}

TestInThrow({
  has: function (k) {
    throw "myexn";
  }
});
TestInThrow({
  has: function (k) {
    return this.has2(k);
  },
  has2: function (k) {
    throw "myexn";
  }
});
TestInThrow(new Proxy({}, {
  get: function (pr, pk) {
    throw "myexn";
  }
}));
TestInThrow(new Proxy({}, {
  get: function (pr, pk) {
    return function (k) {
      throw "myexn";
    };
  }
})); // ---------------------------------------------------------------------------
// Own Properties (Object.prototype.hasOwnProperty).

var key;

function TestHasOwn(handler) {
  TestWithProxies(TestHasOwn2, handler);
}

function TestHasOwn2(create, handler) {
  var p = create(handler);
  Object.prototype.hasOwnProperty.call(p, "a");
  "a";
  key;
  Object.prototype.hasOwnProperty.call(p, 99);
  "99";
  key;
  Object.prototype.hasOwnProperty.call(p, "z");
  "z";
  key;
}

TestHasOwn({
  getOwnPropertyDescriptor(t, k) {
    key = k;

    if (k < "z") {
      return {
        configurable: true
      };
    }
  },

  has() {}

});
TestHasOwn({
  getOwnPropertyDescriptor(t, k) {
    return this.getOwnPropertyDescriptor2(k);
  },

  getOwnPropertyDescriptor2(k) {
    key = k;

    if (k < "z") {
      return {
        configurable: true
      };
    }
  }

}); // ---------------------------------------------------------------------------

function TestHasOwnThrow(handler) {
  TestWithProxies(TestHasOwnThrow2, handler);
}

function TestHasOwnThrow2(create, handler) {
  var p = create(handler);

  (function () {
    Object.prototype.hasOwnProperty.call(p, "a");
  })();

  "myexn";

  (function () {
    Object.prototype.hasOwnProperty.call(p, 99);
  })();

  "myexn";
}

TestHasOwnThrow({
  getOwnPropertyDescriptor(t, k) {
    throw "myexn";
  }

});
TestHasOwnThrow({
  getOwnPropertyDescriptor(t, k) {
    return this.getOwnPropertyDescriptor2(k);
  },

  getOwnPropertyDescriptor2(k) {
    throw "myexn";
  }

}); // ---------------------------------------------------------------------------
// Instanceof (instanceof)

(function TestProxyInstanceof() {
  var o1 = {};
  var p1 = new Proxy({}, {});
  var p2 = new Proxy(o1, {});
  var p3 = new Proxy(p2, {});
  var o2 = Object.create(p2);

  var f0 = function () {
    ;
  };

  f0.prototype = o1;

  var f1 = function () {
    ;
  };

  f1.prototype = p1;

  var f2 = function () {
    ;
  };

  f2.prototype = p2;

  var f3 = function () {
    ;
  };

  f3.prototype = o2;
  o1 instanceof Object;
  o1 instanceof f0;
  o1 instanceof f1;
  o1 instanceof f2;
  o1 instanceof f3;
  p1 instanceof Object;
  p1 instanceof f0;
  p1 instanceof f1;
  p1 instanceof f2;
  p1 instanceof f3;
  p2 instanceof Object;
  p2 instanceof f0;
  p2 instanceof f1;
  p2 instanceof f2;
  p2 instanceof f3;
  p3 instanceof Object;
  p3 instanceof f0;
  p3 instanceof f1;
  p3 instanceof f2;
  p3 instanceof f3;
  o2 instanceof Object;
  o2 instanceof f0;
  o2 instanceof f1;
  o2 instanceof f2;
  o2 instanceof f3;
  var f = new Proxy(function () {
    ;
  }, {});
  f instanceof Function;
})();

(function TestInstanceofProxy() {
  var o0 = Object.create(null);
  var o1 = {};
  var o2 = Object.create(o0);
  var o3 = Object.create(o1);
  var o4 = Object.create(o2);
  var o5 = Object.create(o3);

  function handler(o) {
    return {
      get: function (r, p) {
        // We want to test prototype lookup, so ensure the proxy
        // offers OrdinaryHasInstance behavior.
        if (p === Symbol.hasInstance) {
          return undefined;
        }

        return o;
      }
    };
  }

  var f0 = new Proxy(function () {
    ;
  }, handler(o0));
  var f1 = new Proxy(function () {
    ;
  }, handler(o1));
  var f2 = new Proxy(function () {
    ;
  }, handler(o2));
  var f3 = new Proxy(function () {
    ;
  }, handler(o3));
  var f4 = new Proxy(function () {
    ;
  }, handler(o4));
  var f5 = new Proxy(function () {
    ;
  }, handler(o4));
  null instanceof f0;
  o0 instanceof f0;
  o0 instanceof f1;
  o0 instanceof f2;
  o0 instanceof f3;
  o0 instanceof f4;
  o0 instanceof f5;
  o1 instanceof f0;
  o1 instanceof f1;
  o1 instanceof f2;
  o1 instanceof f3;
  o1 instanceof f4;
  o1 instanceof f5;
  o2 instanceof f0;
  o2 instanceof f1;
  o2 instanceof f2;
  o2 instanceof f3;
  o2 instanceof f4;
  o2 instanceof f5;
  o3 instanceof f0;
  o3 instanceof f1;
  o3 instanceof f2;
  o3 instanceof f3;
  o3 instanceof f4;
  o3 instanceof f5;
  o4 instanceof f0;
  o4 instanceof f1;
  o4 instanceof f2;
  o4 instanceof f3;
  o4 instanceof f4;
  o4 instanceof f5;
  o5 instanceof f0;
  o5 instanceof f1;
  o5 instanceof f2;
  o5 instanceof f3;
  o5 instanceof f4;
  o5 instanceof f5;
  var f = new Proxy(function () {
    ;
  }, {});
  var ff = new Proxy(function () {
    ;
  }, handler(Function));
  f instanceof Function;
  f instanceof ff;
})(); // ---------------------------------------------------------------------------
// Prototype (Object.getPrototypeOf, Object.prototype.isPrototypeOf).


(function TestPrototype() {
  var o1 = {};
  var p1 = new Proxy({}, {});
  var p2 = new Proxy(o1, {});
  var p3 = new Proxy(p2, {});
  var o2 = Object.create(p3);
  Object.getPrototypeOf(o1);
  Object.prototype;
  Object.getPrototypeOf(p1);
  Object.prototype;
  Object.getPrototypeOf(p2);
  Object.prototype;
  Object.getPrototypeOf(p3);
  Object.prototype;
  Object.getPrototypeOf(o2);
  p3;
  Object.prototype.isPrototypeOf(o1);
  Object.prototype.isPrototypeOf(p1);
  Object.prototype.isPrototypeOf(p2);
  Object.prototype.isPrototypeOf(p3);
  Object.prototype.isPrototypeOf(o2);
  Object.prototype.isPrototypeOf.call(Object.prototype, o1);
  Object.prototype.isPrototypeOf.call(Object.prototype, p1);
  Object.prototype.isPrototypeOf.call(Object.prototype, p2);
  Object.prototype.isPrototypeOf.call(Object.prototype, p3);
  Object.prototype.isPrototypeOf.call(Object.prototype, o2);
  Object.prototype.isPrototypeOf.call(o1, o1);
  Object.prototype.isPrototypeOf.call(o1, p1);
  Object.prototype.isPrototypeOf.call(o1, p2);
  Object.prototype.isPrototypeOf.call(o1, p3);
  Object.prototype.isPrototypeOf.call(o1, o2);
  Object.prototype.isPrototypeOf.call(p1, p1);
  Object.prototype.isPrototypeOf.call(p1, o1);
  Object.prototype.isPrototypeOf.call(p1, p2);
  Object.prototype.isPrototypeOf.call(p1, p3);
  Object.prototype.isPrototypeOf.call(p1, o2);
  Object.prototype.isPrototypeOf.call(p2, p1);
  Object.prototype.isPrototypeOf.call(p2, p2);
  Object.prototype.isPrototypeOf.call(p2, p3);
  Object.prototype.isPrototypeOf.call(p2, o2);
  Object.prototype.isPrototypeOf.call(p3, p2);
  Object.prototype.isPrototypeOf.call(p3, o2);
  Object.prototype.isPrototypeOf.call(o2, o1);
  Object.prototype.isPrototypeOf.call(o2, p1);
  Object.prototype.isPrototypeOf.call(o2, p2);
  Object.prototype.isPrototypeOf.call(o2, p3);
  Object.prototype.isPrototypeOf.call(o2, o2);
  var f = new Proxy(function () {
    ;
  }, {});
  Object.getPrototypeOf(f);
  Function.prototype;
  Object.prototype.isPrototypeOf(f);
  Object.prototype.isPrototypeOf.call(Function.prototype, f);
})(); // ---------------------------------------------------------------------------


function TestPropertyNamesThrow(handler) {
  TestWithProxies(TestPropertyNamesThrow2, handler);
}

function TestPropertyNamesThrow2(create, handler) {
  var p = create(handler);

  (function () {
    Object.getOwnPropertyNames(p);
  })();

  "myexn";
}

TestPropertyNamesThrow({
  ownKeys() {
    throw "myexn";
  }

});
TestPropertyNamesThrow({
  ownKeys() {
    return this.getOwnPropertyNames2();
  },

  getOwnPropertyNames2() {
    throw "myexn";
  }

}); // ---------------------------------------------------------------------------

function TestKeys(names, handler) {
  var p = new Proxy({}, handler);
  names;
  Object.keys(p);
}

TestKeys([], {
  ownKeys() {
    return [];
  }

});
TestKeys([], {
  ownKeys() {
    return ["a", "zz", " ", "0", "toString"];
  }

});
TestKeys(["a", "zz", " ", "0", "toString"], {
  ownKeys() {
    return ["a", "zz", " ", "0", "toString"];
  },

  getOwnPropertyDescriptor(t, p) {
    return {
      configurable: true,
      enumerable: true
    };
  }

});
TestKeys([], {
  ownKeys() {
    return this.keys2();
  },

  keys2() {
    return ["throw", "function "];
  }

});
TestKeys(["throw", "function "], {
  ownKeys() {
    return this.keys2();
  },

  keys2() {
    return ["throw", "function "];
  },

  getOwnPropertyDescriptor(t, p) {
    return {
      configurable: true,
      enumerable: true
    };
  }

});
TestKeys(["a", "0"], {
  ownKeys() {
    return ["a", "23", "zz", "", "0"];
  },

  getOwnPropertyDescriptor(t, k) {
    return k == "" ? undefined : {
      configurable: true,
      enumerable: k.length == 1
    };
  }

});
TestKeys(["23", "zz", ""], {
  ownKeys() {
    return this.getOwnPropertyNames2();
  },

  getOwnPropertyNames2() {
    return ["a", "23", "zz", "", "0"];
  },

  getOwnPropertyDescriptor(t, k) {
    return this.getOwnPropertyDescriptor2(k);
  },

  getOwnPropertyDescriptor2(k) {
    return {
      configurable: true,
      enumerable: k.length != 1
    };
  }

});
TestKeys([], {
  get ownKeys() {
    return function () {
      return ["a", "b", "c"];
    };
  },

  getOwnPropertyDescriptor: function (k) {
    return {
      configurable: true
    };
  }
}); // ---------------------------------------------------------------------------

function TestKeysThrow(handler) {
  TestWithProxies(TestKeysThrow2, handler);
}

function TestKeysThrow2(create, handler) {
  var p = create(handler);

  (function () {
    Object.keys(p);
  })();

  "myexn";
}

TestKeysThrow({
  ownKeys() {
    throw "myexn";
  }

});
TestKeysThrow({
  ownKeys() {
    return this.keys2();
  },

  keys2() {
    throw "myexn";
  }

});
TestKeysThrow({
  ownKeys() {
    return ['1'];
  },

  getOwnPropertyDescriptor: function () {
    throw "myexn";
  }
});
TestKeysThrow({
  ownKeys() {
    return this.getOwnPropertyNames2();
  },

  getOwnPropertyNames2() {
    return ['1', '2'];
  },

  getOwnPropertyDescriptor(k) {
    return this.getOwnPropertyDescriptor2(k);
  },

  getOwnPropertyDescriptor2(k) {
    throw "myexn";
  }

});
TestKeysThrow({
  get ownKeys() {
    throw "myexn";
  }

});
TestKeysThrow({
  get ownKeys() {
    return function () {
      throw "myexn";
    };
  }

});
TestKeysThrow({
  get ownKeys() {
    return function () {
      return ['1', '2'];
    };
  },

  getOwnPropertyDescriptor(k) {
    throw "myexn";
  }

}); // ---------------------------------------------------------------------------
// String conversion (Object.prototype.toString,
//                    Object.prototype.toLocaleString)

var key;

function TestToString(handler) {
  var p = new Proxy({}, handler);
  key = "";
  "[object Object]";
  Object.prototype.toString.call(p);
  Symbol.toStringTag;
  key;
  "my_proxy";
  Object.prototype.toLocaleString.call(p);
  "toString";
  key;
  var f = new Proxy(function () {
    ;
  }, handler);
  key = "";
  "[object Function]";
  Object.prototype.toString.call(f);
  Symbol.toStringTag;
  key;
  "my_proxy";
  Object.prototype.toLocaleString.call(f);
  "toString";
  key;
  var o = Object.create(p);
  key = "";
  "[object Object]";
  Object.prototype.toString.call(o);
  Symbol.toStringTag;
  key;
  "my_proxy";
  Object.prototype.toLocaleString.call(o);
  "toString";
  key;
}

TestToString({
  get: function (r, k) {
    key = k;
    return function () {
      return "my_proxy";
    };
  }
});
TestToString({
  get: function (r, k) {
    return this.get2(r, k);
  },
  get2: function (r, k) {
    key = k;
    return function () {
      return "my_proxy";
    };
  }
});
TestToString(new Proxy({}, {
  get: function (pr, pk) {
    return function (r, k) {
      key = k;
      return function () {
        return "my_proxy";
      };
    };
  }
}));

function TestToStringThrow(handler) {
  var p = new Proxy({}, handler);

  (() => Object.prototype.toString.call(p))();

  "myexn";

  (() => Object.prototype.toLocaleString.call(p))();

  "myexn";
  var f = new Proxy(function () {
    ;
  }, handler);

  (() => Object.prototype.toString.call(f))();

  "myexn";

  (() => Object.prototype.toLocaleString.call(f))();

  "myexn";
  var o = Object.create(p);

  (() => Object.prototype.toString.call(o))();

  "myexn";

  (() => Object.prototype.toLocaleString.call(o))();

  "myexn";
}

TestToStringThrow({
  get: function (r, k) {
    throw "myexn";
  }
});
TestToStringThrow({
  get: function (r, k) {
    return this.get2(r, k);
  },
  get2: function (r, k) {
    throw "myexn";
  }
});
TestToStringThrow(new Proxy({}, {
  get: function (pr, pk) {
    throw "myexn";
  }
}));
TestToStringThrow(new Proxy({}, {
  get: function (pr, pk) {
    return function (r, k) {
      throw "myexn";
    };
  }
})); // ---------------------------------------------------------------------------
// Value conversion (Object.prototype.toValue)

function TestValueOf(handler) {
  TestWithProxies(TestValueOf2, handler);
}

function TestValueOf2(create, handler) {
  var p = create(handler);
  p;
  Object.prototype.valueOf.call(p);
}

TestValueOf({}); // ---------------------------------------------------------------------------
// Enumerability (Object.prototype.propertyIsEnumerable)

var key;

function TestIsEnumerable(handler) {
  TestWithProxies(TestIsEnumerable2, handler);
}

function TestIsEnumerable2(create, handler) {
  var p = create(handler);
  Object.prototype.propertyIsEnumerable.call(p, "a");
  "a";
  key;
  Object.prototype.propertyIsEnumerable.call(p, 2);
  "2";
  key;
  Object.prototype.propertyIsEnumerable.call(p, "z");
  "z";
  key;
  var o = Object.create(p);
  key = "";
  Object.prototype.propertyIsEnumerable.call(o, "a");
  "";
  key;
}

TestIsEnumerable({
  getOwnPropertyDescriptor(t, k) {
    key = k;
    return {
      enumerable: k < "z",
      configurable: true
    };
  }

});
TestIsEnumerable({
  getOwnPropertyDescriptor: function (t, k) {
    return this.getOwnPropertyDescriptor2(k);
  },
  getOwnPropertyDescriptor2: function (k) {
    key = k;
    return {
      enumerable: k < "z",
      configurable: true
    };
  }
});
TestIsEnumerable({
  getOwnPropertyDescriptor: function (t, k) {
    key = k;
    return {
      get enumerable() {
        return k < "z";
      },

      configurable: true
    };
  }
});
TestIsEnumerable(new Proxy({}, {
  get: function (pt, pk, pr) {
    return function (t, k) {
      key = k;
      return {
        enumerable: k < "z",
        configurable: true
      };
    };
  }
})); // ---------------------------------------------------------------------------

function TestIsEnumerableThrow(handler) {
  TestWithProxies(TestIsEnumerableThrow2, handler);
}

function TestIsEnumerableThrow2(create, handler) {
  var p = create(handler);

  (() => Object.prototype.propertyIsEnumerable.call(p, "a"))();

  "myexn";

  (() => Object.prototype.propertyIsEnumerable.call(p, 11))();

  "myexn";
}

TestIsEnumerableThrow({
  getOwnPropertyDescriptor: function (k) {
    throw "myexn";
  }
});
TestIsEnumerableThrow({
  getOwnPropertyDescriptor: function (k) {
    return this.getOwnPropertyDescriptor2(k);
  },
  getOwnPropertyDescriptor2: function (k) {
    throw "myexn";
  }
});
TestIsEnumerableThrow({
  getOwnPropertyDescriptor: function (k) {
    return {
      get enumerable() {
        throw "myexn";
      },

      configurable: true
    };
  }
});
TestIsEnumerableThrow(new Proxy({}, {
  get: function (pr, pk) {
    throw "myexn";
  }
}));
TestIsEnumerableThrow(new Proxy({}, {
  get: function (pr, pk) {
    return function (k) {
      throw "myexn";
    };
  }
})); // ---------------------------------------------------------------------------
// Constructor functions with proxy prototypes.

(function TestConstructorWithProxyPrototype() {
  TestWithProxies(TestConstructorWithProxyPrototype2, {});
})();

function TestConstructorWithProxyPrototype2(create, handler) {
  function C() {
    ;
  }

  ;
  C.prototype = create(handler);
  var o = new C();
  C.prototype;
  Object.getPrototypeOf(o);
}

;

(function TestOptWithProxyPrototype() {
  var handler = {
    get(t, k) {
      return 10;
    }

  };

  function C() {
    ;
  }

  ;
  C.prototype = new Proxy({}, handler);
  var o = new C();

  function f() {
    return o.x;
  }

  10;
  f();
  10;
  f();
  10;
  f();
})();
