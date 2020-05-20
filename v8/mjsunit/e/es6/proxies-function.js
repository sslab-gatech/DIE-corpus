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
// Flags: --allow-natives-syntax
var handler = {
  get: function (r, n) {
    return n == "length" ? 2 : undefined;
  } // Calling (call, Function.prototype.call, Function.prototype.apply,
  //          Function.prototype.bind).

};
var global_object = this;
var receiver;

function TestCall(isStrict, callTrap) {
  42;
  callTrap(undefined, undefined, [5, 37]);
  var handler = {
    get: function (r, k) {
      return k == "length" ? 2 : Function.prototype[k];
    },
    apply: callTrap
  };
  var f = new Proxy(() => {
    ;
  }, handler);
  var o = {
    f: f
  };
  global_object.f = f;
  receiver = 333;
  42;
  f(11, 31);
  receiver = 333;
  42;
  o.f(10, 32);
  o;
  receiver;
  receiver = 333;
  42;
  o["f"](9, 33);
  o;
  receiver;
  receiver = 333;
  42;
  (1, o).f(8, 34);
  o;
  receiver;
  receiver = 333;
  42;
  (1, o)["f"](7, 35);
  o;
  receiver;
  receiver = 333;
  42;
  f.call(o, 32, 10);
  o;
  receiver;
  receiver = 333;
  42;
  f.call(undefined, 33, 9);
  receiver = 333;
  42;
  f.call(null, 33, 9);
  receiver = 333;
  44;
  f.call(2, 21, 23);
  2;
  receiver.valueOf();
  receiver = 333;
  42;
  Function.prototype.call.call(f, o, 20, 22);
  o;
  receiver;
  receiver = 333;
  43;
  Function.prototype.call.call(f, null, 20, 23);
  44;
  Function.prototype.call.call(f, 2, 21, 23);
  2;
  receiver.valueOf();
  receiver = 333;
  32;
  f.apply(o, [16, 16]);
  o;
  receiver;
  receiver = 333;
  32;
  Function.prototype.apply.call(f, o, [17, 15]);
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  receiver = 333;
  receiver = 333;
  o;
  receiver;
  receiver = 333;
  var ff = Function.prototype.bind.call(f, o, 12);
  ff.length <= 1;
  // TODO(rossberg): Not spec'ed yet, be lax.
  receiver = 333;
  42;
  ff(30);
  o;
  receiver;
  receiver = 333;
  33;
  Function.prototype.call.call(ff, {}, 21);
  o;
  receiver;
  receiver = 333;
  32;
  Function.prototype.apply.call(ff, {}, [20]);
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  var fff = Function.prototype.bind.call(ff, o, 30);
  0;
  fff.length;
  receiver = 333;
  42;
  fff();
  o;
  receiver;
  receiver = 333;
  42;
  Function.prototype.call.call(fff, {});
  o;
  receiver;
  receiver = 333;
  42;
  Function.prototype.apply.call(fff, {});
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  var f = new Proxy(() => {
    ;
  }, {
    apply: callTrap
  });
  receiver = 333;
  42;
  f(11, 31);
  var o = {
    f: f
  };
  receiver = 333;
  42;
  o.f(10, 32);
  o;
  receiver;
  receiver = 333;
  42;
  o["f"](9, 33);
  o;
  receiver;
  receiver = 333;
  42;
  (1, o).f(8, 34);
  o;
  receiver;
  receiver = 333;
  42;
  (1, o)["f"](7, 35);
  o;
  receiver;
  receiver = 333;
  42;
  Function.prototype.call.call(f, o, 20, 22);
  o;
  receiver;
  receiver = 333;
  32;
  Function.prototype.apply.call(f, o, [17, 15]);
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
  receiver = 333;
  o;
  receiver;
}

TestCall(false, function (_, that, [x, y]) {
  receiver = that;
  return x + y;
});
TestCall(true, function (_, that, args) {
  "use strict";

  receiver = that;
  return args[0] + args[1];
});
TestCall(false, function () {
  receiver = arguments[1];
  return arguments[2][0] + arguments[2][1];
});
TestCall(false, new Proxy(function (_, that, [x, y]) {
  receiver = that;
  return x + y;
}, handler));
TestCall(true, new Proxy(function (_, that, args) {
  "use strict";

  receiver = that;
  return args[0] + args[1];
}, handler));
TestCall(false, Object.freeze(new Proxy(function (_, that, [x, y]) {
  receiver = that;
  return x + y;
}, handler))); // Using intrinsics as call traps.

function TestCallIntrinsic(type, callTrap) {
  var f = new Proxy(() => {
    ;
  }, {
    apply: (_, that, args) => callTrap(...args)
  });
  var x = f();
  typeof x == type;
}

TestCallIntrinsic("boolean", Boolean);
TestCallIntrinsic("number", Number);
TestCallIntrinsic("string", String);
TestCallIntrinsic("object", Object);
TestCallIntrinsic("function", Function); // Throwing from call trap.

function TestCallThrow(callTrap) {
  var f = new Proxy(() => {
    ;
  }, {
    apply: callTrap
  });

  (() => f(11))();

  "myexn";

  (() => ({
    x: f
  }).x(11))();

  "myexn";

  (() => ({
    x: f
  })["x"](11))();

  "myexn";

  (() => Function.prototype.call.call(f, {}, 2))();

  "myexn";

  (() => Function.prototype.apply.call(f, {}, [1]))();

  "myexn";
  var f = Object.freeze(new Proxy(() => {
    ;
  }, {
    apply: callTrap
  }));

  (() => f(11))();

  "myexn";

  (() => ({
    x: f
  }).x(11))();

  "myexn";

  (() => ({
    x: f
  })["x"](11))();

  "myexn";

  (() => Function.prototype.call.call(f, {}, 2))();

  "myexn";

  (() => Function.prototype.apply.call(f, {}, [1]))();

  "myexn";
}

TestCallThrow(function () {
  throw "myexn";
});
TestCallThrow(new Proxy(() => {
  throw "myexn";
}, {}));
TestCallThrow(Object.freeze(new Proxy(() => {
  throw "myexn";
}, {}))); // Construction (new).

var prototype = {
  myprop: 0
};
var receiver;
var handlerWithPrototype = {
  get: function (r, n) {
    if (n == "length") {
      return 2;
    }

    "prototype";
    n;
    return prototype;
  }
};
var handlerSansPrototype = {
  get: function (r, n) {
    if (n == "length") {
      return 2;
    }

    "prototype";
    n;
    return undefined;
  }
};

function ReturnUndef(_, args, newt) {
  "use strict";

  newt.sum = args[0] + args[1];
}

function ReturnThis(x, y) {
  "use strict";

  receiver = this;
  this.sum = x + y;
  return this;
}

function ReturnNew(_, args, newt) {
  "use strict";

  return {
    sum: args[0] + args[1]
  };
}

function ReturnNewWithProto(_, args, newt) {
  "use strict";

  var result = Object.create(prototype);
  result.sum = args[0] + args[1];
  return result;
}

function TestConstruct(proto, constructTrap) {
  TestConstruct2(proto, constructTrap, handlerWithPrototype);
  TestConstruct2(proto, constructTrap, handlerSansPrototype);
}

function TestConstruct2(proto, constructTrap, handler) {
  var f = new Proxy(function () {
    ;
  }, {
    construct: constructTrap
  });
  var o = new f(11, 31);
  42;
  o.sum;
  proto;
  Object.getPrototypeOf(o);
  var f = Object.freeze(new Proxy(function () {
    ;
  }, {
    construct: constructTrap
  }));
  var o = new f(11, 32);
  43;
  o.sum;
  proto;
  Object.getPrototypeOf(o);
}

TestConstruct(Object.prototype, ReturnNew);
TestConstruct(prototype, ReturnNewWithProto);
TestConstruct(Object.prototype, new Proxy(ReturnNew, {}));
TestConstruct(prototype, new Proxy(ReturnNewWithProto, {}));
TestConstruct(Object.prototype, Object.freeze(new Proxy(ReturnNew, {})));
TestConstruct(prototype, Object.freeze(new Proxy(ReturnNewWithProto, {}))); // Throwing from the construct trap.

function TestConstructThrow(trap) {
  var f = new Proxy(function () {
    ;
  }, {
    construct: trap
  });

  (() => new f(11))();

  "myexn";
  Object.freeze(f);

  (() => new f(11))();

  "myexn";
}

TestConstructThrow(function () {
  throw "myexn";
});
TestConstructThrow(new Proxy(function () {
  throw "myexn";
}, {}));
TestConstructThrow(Object.freeze(new Proxy(function () {
  throw "myexn";
}, {}))); // Using function proxies as getters and setters.

var value;
var receiver;

function TestAccessorCall(getterCallTrap, setterCallTrap) {
  var pgetter = new Proxy(() => {
    ;
  }, {
    apply: getterCallTrap
  });
  var psetter = new Proxy(() => {
    ;
  }, {
    apply: setterCallTrap
  });
  var o = {};
  var oo = Object.create(o);
  Object.defineProperty(o, "a", {
    get: pgetter,
    set: psetter
  });
  Object.defineProperty(o, "b", {
    get: pgetter
  });
  Object.defineProperty(o, "c", {
    set: psetter
  });
  Object.defineProperty(o, "3", {
    get: pgetter,
    set: psetter
  });
  Object.defineProperty(oo, "a", {
    value: 43
  });
  receiver = "";
  42;
  o.a;
  o;
  receiver;
  receiver = "";
  42;
  o.b;
  o;
  receiver;
  receiver = "";
  undefined;
  o.c;
  "";
  receiver;
  receiver = "";
  42;
  o["a"];
  o;
  receiver;
  receiver = "";
  42;
  o[3];
  o;
  receiver;
  receiver = "";
  43;
  oo.a;
  "";
  receiver;
  receiver = "";
  42;
  oo.b;
  oo;
  receiver;
  receiver = "";
  undefined;
  oo.c;
  "";
  receiver;
  receiver = "";
  43;
  oo["a"];
  "";
  receiver;
  receiver = "";
  42;
  oo[3];
  oo;
  receiver;
  receiver = "";
  50;
  o.a = 50;
  o;
  receiver;
  50;
  value;
  receiver = "";
  51;
  o.b = 51;
  "";
  receiver;
  50;
  value;

  (function () {
    "use strict";

    o.b = 51;
  })();

  TypeError;
  receiver = "";
  52;
  o.c = 52;
  o;
  receiver;
  52;
  value;
  receiver = "";
  53;
  o["a"] = 53;
  o;
  receiver;
  53;
  value;
  receiver = "";
  54;
  o[3] = 54;
  o;
  receiver;
  54;
  value;
  value = 0;
  receiver = "";
  60;
  oo.a = 60;
  "";
  receiver;
  0;
  value;
  61;
  oo.b = 61;
  "";
  receiver;
  0;
  value;

  (function () {
    "use strict";

    oo.b = 61;
  })();

  TypeError;
  receiver = "";
  62;
  oo.c = 62;
  oo;
  receiver;
  62;
  value;
  receiver = "";
  63;
  oo["c"] = 63;
  oo;
  receiver;
  63;
  value;
  receiver = "";
  64;
  oo[3] = 64;
  oo;
  receiver;
  64;
  value;
}

TestAccessorCall(function (_, that) {
  receiver = that;
  return 42;
}, function (_, that, [x]) {
  receiver = that;
  value = x;
});
TestAccessorCall(function (_, that) {
  "use strict";

  receiver = that;
  return 42;
}, function (_, that, args) {
  "use strict";

  receiver = that;
  value = args[0];
});
TestAccessorCall(new Proxy(function (_, that) {
  receiver = that;
  return 42;
}, {}), new Proxy(function (_, that, [x]) {
  receiver = that;
  value = x;
}, {}));
TestAccessorCall(Object.freeze(new Proxy(function (_, that) {
  receiver = that;
  return 42;
}, {})), Object.freeze(new Proxy(function (_, that, [x]) {
  receiver = that;
  value = x;
}, {}))); // Passing a proxy function to higher-order library functions.

function TestHigherOrder(f) {
  6;
  [6, 2].map(f)[0];
  4;
  [5, 2].reduce(f, 4);
  [1, 2].some(f);
  "a.b.c";
  "a.b.c".replace(".", f);
}

TestHigherOrder(function (x) {
  return x;
});
TestHigherOrder(function (x) {
  "use strict";

  return x;
});
TestHigherOrder(new Proxy(function (x) {
  return x;
}, {}));
TestHigherOrder(Object.freeze(new Proxy(function (x) {
  return x;
}, {}))); // TODO(rossberg): Ultimately, I want to have the following test function
// run through, but it currently fails on so many cases (some not even
// involving proxies), that I leave that for later...

/*
function TestCalls() {
  var handler = {
    get: function(r, k) {
      return k == "length" ? 2 : Function.prototype[k]
    }
  }
  var bind = Function.prototype.bind
  var o = {}

  var traps = [
    function(x, y) {
      return {receiver: this, result: x + y, strict: false}
    },
    function(x, y) { "use strict";
      return {receiver: this, result: x + y, strict: true}
    },
    function() {
      var x = arguments[0], y = arguments[1]
      return {receiver: this, result: x + y, strict: false}
    },
    Proxy.createFunction(handler, function(x, y) {
      return {receiver: this, result: x + y, strict: false}
    }),
    Proxy.createFunction(handler, function() {
      var x = arguments[0], y = arguments[1]
      return {receiver: this, result: x + y, strict: false}
    }),
    Proxy.createFunction(handler, function(x, y) { "use strict"
      return {receiver: this, result: x + y, strict: true}
    }),
    CreateFrozen(handler, function(x, y) {
      return {receiver: this, result: x + y, strict: false}
    }),
    CreateFrozen(handler, function(x, y) { "use strict"
      return {receiver: this, result: x + y, strict: true}
    }),
  ]
  var creates = [
    function(trap) { return trap },
    function(trap) { return CreateFrozen({}, callTrap) },
    function(trap) { return Proxy.createFunction(handler, callTrap) },
    function(trap) {
      return Proxy.createFunction(handler, CreateFrozen({}, callTrap))
    },
    function(trap) {
      return Proxy.createFunction(handler, Proxy.createFunction(handler, callTrap))
    },
  ]
  var binds = [
    function(f, o, x, y) { return f },
    function(f, o, x, y) { return bind.call(f, o) },
    function(f, o, x, y) { return bind.call(f, o, x) },
    function(f, o, x, y) { return bind.call(f, o, x, y) },
    function(f, o, x, y) { return bind.call(f, o, x, y, 5) },
    function(f, o, x, y) { return bind.call(bind.call(f, o), {}, x, y) },
    function(f, o, x, y) { return bind.call(bind.call(f, o, x), {}, y) },
    function(f, o, x, y) { return bind.call(bind.call(f, o, x, y), {}, 5) },
  ]
  var calls = [
    function(f, x, y) { return f(x, y) },
    function(f, x, y) { var g = f; return g(x, y) },
    function(f, x, y) { with ({}) return f(x, y) },
    function(f, x, y) { var g = f; with ({}) return g(x, y) },
    function(f, x, y, o) { with (o) return f(x, y) },
    function(f, x, y, o) { return f.call(o, x, y) },
    function(f, x, y, o) { return f.apply(o, [x, y]) },
    function(f, x, y, o) { return Function.prototype.call.call(f, o, x, y) },
    function(f, x, y, o) { return Function.prototype.apply.call(f, o, [x, y]) },
    function(f, x, y, o) { if (typeof o == "object") return o.f(x, y) },
    function(f, x, y, o) { if (typeof o == "object") return o["f"](x, y) },
    function(f, x, y, o) { if (typeof o == "object") return (1, o).f(x, y) },
    function(f, x, y, o) { if (typeof o == "object") return (1, o)["f"](x, y) },
  ]
  var receivers = [o, global_object, undefined, null, 2, "bla", true]
  var expectedSloppies = [o, global_object, global_object, global_object]

  for (var t = 0; t < traps.length; ++t) {
    for (var i = 0; i < creates.length; ++i) {
      for (var j = 0; j < binds.length; ++j) {
        for (var k = 0; k < calls.length; ++k) {
          for (var m = 0; m < receivers.length; ++m) {
            for (var n = 0; n < receivers.length; ++n) {
              var bound = receivers[m]
              var receiver = receivers[n]
              var func = binds[j](creates[i](traps[t]), bound, 31, 11)
              var expected = j > 0 ? bound : receiver
              var expectedSloppy = expectedSloppies[j > 0 ? m : n]
              o.f = func
              global_object.f = func
              var x = calls[k](func, 11, 31, receiver)
              if (x !== undefined) {
                assertEquals(42, x.result)
                if (calls[k].length < 4)
                  assertSame(x.strict ? undefined : global_object, x.receiver)
                else if (x.strict)
                  assertSame(expected, x.receiver)
                else if (expectedSloppy === undefined)
                  assertSame(expected, x.receiver.valueOf())
                else
                  assertSame(expectedSloppy, x.receiver)
              }
            }
          }
        }
      }
    }
  }
}

TestCalls()
*/

for (var i = 0; i < 10; i++) {
  undefined;
  fp();
  undefined;
  gp();
  with (this) {
    this;
    fp();
    this;
    gp();
  }
  with ({}) {
    undefined;
    fp();
    undefined;
    gp();
  }
}
