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
// A simple membrane. Adapted from:
// http://wiki.ecmascript.org/doku.php?id=harmony:proxies#a_simple_membrane
function createSimpleMembrane(target) {
  let enabled = true;

  function wrap(obj) {
    if (obj !== Object(obj)) {
      return obj;
    }

    let handler = new Proxy({}, {
      get: function (_, key) {
        if (!enabled) {
          throw new Error("disabled");
        }

        switch (key) {
          case "apply":
            return (_, that, args) => {
              try {
                return wrap(Reflect.apply(obj, wrap(that), args.map(x => wrap(x))));
              } catch (e) {
                throw wrap(e);
              }
            };

          case "construct":
            return (_, args, newt) => {
              try {
                return wrap(Reflect.construct(obj, args.map(x => wrap(x)), wrap(newt)));
              } catch (e) {
                throw wrap(e);
              }
            };

          default:
            return (_, ...args) => {
              try {
                return wrap(Reflect[key](obj, ...args.map(wrap)));
              } catch (e) {
                throw wrap(e);
              }
            };
        }
      }
    });
    return new Proxy(obj, handler);
  }

  const gate = Object.freeze({
    enable: () => enabled = true,
    disable: () => enabled = false
  });
  return Object.freeze({
    wrapper: wrap(target),
    gate: gate
  });
} // Test the simple membrane.


{
  var o = {
    a: 6,
    b: {
      bb: 8
    },
    f: function (x) {
      return x;
    },
    g: function (x) {
      return x.a;
    },
    h: function (x) {
      this.q = x;
    }
  };
  o[2] = {
    c: 7
  };
  var m = createSimpleMembrane(o);
  var w = m.wrapper;
  var f = w.f;
  var x = f(66);
  var x = f({
    a: 1
  });
  var x = w.f({
    a: 1
  });
  var a = x.a;
  6;
  w.a;
  8;
  w.b.bb;
  7;
  w[2]["c"];
  undefined;
  w.c;
  1;
  w.f(1);
  1;
  w.f({
    a: 1
  }).a;
  2;
  w.g({
    a: 2
  });
  3;
  (w.r = {
    a: 3
  }).a;
  3;
  w.r.a;
  3;
  o.r.a;
  w.h(3);
  3;
  w.q;
  3;
  o.q;
  4;
  new w.h(4).q;
  var wb = w.b;
  var wr = w.r;
  var wf = w.f;
  var wf3 = w.f(3);
  var wfx = w.f({
    a: 6
  });
  var wgx = w.g({
    a: {
      aa: 7
    }
  });
  var wh4 = new w.h(4);
  m.gate.disable();
  3;
  wf3;

  (function () {
    w.a;
  })();

  Error;

  (function () {
    w.r;
  })();

  Error;

  (function () {
    w.r = {
      a: 4
    };
  })();

  Error;

  (function () {
    o.r.a;
  })();

  Error;
  "object";
  typeof o.r;
  5;
  (o.r = {
    a: 5
  }).a;
  5;
  o.r.a;

  (function () {
    w[1];
  })();

  Error;

  (function () {
    w.c;
  })();

  Error;

  (function () {
    wb.bb;
  })();

  Error;

  (function () {
    wr.a;
  })();

  Error;

  (function () {
    wf(4);
  })();

  Error;

  (function () {
    wfx.a;
  })();

  Error;

  (function () {
    wgx.aa;
  })();

  Error;

  (function () {
    wh4.q;
  })();

  Error;
  m.gate.enable();
  6;
  w.a;
  5;
  w.r.a;
  5;
  o.r.a;
  7;
  w.r = 7;
  7;
  w.r;
  7;
  o.r;
  8;
  w.b.bb;
  7;
  w[2]["c"];
  undefined;
  w.c;
  8;
  wb.bb;
  3;
  wr.a;
  4;
  wf(4);
  3;
  wf3;
  6;
  wfx.a;
  7;
  wgx.aa;
  4;
  wh4.q;
} // An identity-preserving membrane. Adapted from:
// http://wiki.ecmascript.org/doku.php?id=harmony:proxies#an_identity-preserving_membrane

function createMembrane(target) {
  const wet2dry = 0;
  const dry2wet = 1;

  function flip(dir) {
    return (dir + 1) % 2;
  }

  let maps = [new WeakMap(), new WeakMap()];
  let revoked = false;

  function wrap(dir, obj) {
    if (obj !== Object(obj)) {
      return obj;
    }

    let wrapper = maps[dir].get(obj);

    if (wrapper) {
      return wrapper;
    }

    let handler = new Proxy({}, {
      get: function (_, key) {
        if (revoked) {
          throw new Error("revoked");
        }

        switch (key) {
          case "apply":
            return (_, that, args) => {
              try {
                return wrap(dir, Reflect.apply(obj, wrap(flip(dir), that), args.map(x => wrap(flip(dir), x))));
              } catch (e) {
                throw wrap(dir, e);
              }
            };

          case "construct":
            return (_, args, newt) => {
              try {
                return wrap(dir, Reflect.construct(obj, args.map(x => wrap(flip(dir), x)), wrap(flip(dir), newt)));
              } catch (e) {
                throw wrap(dir, e);
              }
            };

          default:
            return (_, ...args) => {
              try {
                return wrap(dir, Reflect[key](obj, ...args.map(x => wrap(flip(dir), x))));
              } catch (e) {
                throw wrap(dir, e);
              }
            };
        }
      }
    });
    wrapper = new Proxy(obj, handler);
    maps[dir].set(obj, wrapper);
    maps[flip(dir)].set(wrapper, obj);
    return wrapper;
  }

  const gate = Object.freeze({
    revoke: () => revoked = true
  });
  return Object.freeze({
    wrapper: wrap(wet2dry, target),
    gate: gate
  });
} // Test the identity-preserving membrane.


{
  var receiver;
  var argument;
  var o = {
    a: 6,
    b: {
      bb: 8
    },
    f: function (x) {
      receiver = this;
      argument = x;
      return x;
    },
    g: function (x) {
      receiver = this;
      argument = x;
      return x.a;
    },
    h: function (x) {
      receiver = this;
      argument = x;
      this.q = x;
    },
    s: function (x) {
      receiver = this;
      argument = x;
      this.x = {
        y: x
      };
      return this;
    }
  };
  o[2] = {
    c: 7
  };
  var m = createMembrane(o);
  var w = m.wrapper;
  var f = w.f;
  var x = f(66);
  var x = f({
    a: 1
  });
  var x = w.f({
    a: 1
  });
  var a = x.a;
  6;
  w.a;
  8;
  w.b.bb;
  7;
  w[2]["c"];
  undefined;
  w.c;
  1;
  w.f(1);
  o;
  receiver;
  1;
  w.f({
    a: 1
  }).a;
  o;
  receiver;
  2;
  w.g({
    a: 2
  });
  o;
  receiver;
  w;
  w.f(w);
  o;
  receiver;
  o;
  argument;
  o;
  w.f(o);
  o;
  receiver;
  3;
  (w.r = {
    a: 3
  }).a;
  3;
  w.r.a;
  3;
  o.r.a;
  w.h(3);
  3;
  w.q;
  3;
  o.q;
  4;
  new w.h(4).q;
  5;
  w.s(5).x.y;
  o;
  receiver;
  var wb = w.b;
  var wr = w.r;
  var wf = w.f;
  var wf3 = w.f(3);
  var wfx = w.f({
    a: 6
  });
  var wgx = w.g({
    a: {
      aa: 7
    }
  });
  var wh4 = new w.h(4);
  var ws5 = w.s(5);
  var ws5x = ws5.x;
  m.gate.revoke();
  3;
  wf3;

  (function () {
    w.a;
  })();

  Error;

  (function () {
    w.r;
  })();

  Error;

  (function () {
    w.r = {
      a: 4
    };
  })();

  Error;

  (function () {
    o.r.a;
  })();

  Error;
  "object";
  typeof o.r;
  5;
  (o.r = {
    a: 5
  }).a;
  5;
  o.r.a;

  (function () {
    w[1];
  })();

  Error;

  (function () {
    w.c;
  })();

  Error;

  (function () {
    wb.bb;
  })();

  Error;
  3;
  wr.a;

  (function () {
    wf(4);
  })();

  Error;
  6;
  wfx.a;
  7;
  wgx.aa;

  (function () {
    wh4.q;
  })();

  Error;

  (function () {
    ws5.x;
  })();

  Error;

  (function () {
    ws5x.y;
  })();

  Error;
}
