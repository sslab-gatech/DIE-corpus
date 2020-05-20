function assert(b) {
  if (!b) {
    throw new Error("Bad assertion");
  }
}

function test(f, n = 1000) {
  for (let i = 0; i < n; ++i) {
    f();
  }
}

let o1 = {
  get foo() {
    "use strict";

    return this;
  }

};
let o2 = {
  __proto__: o1,

  a() {
    return super.foo;
  },

  aa() {
    let arr = () => super.foo;

    return arr();
  },

  b() {
    "use strict";

    return super.foo;
  },

  bb() {
    "use strict";

    let arr = () => super.foo;

    return arr();
  }

};
var A = o2.a;
var AA = o2.aa;
var B = o2.b;
var BB = o2.b;
let globalObj = this;
test(function () {
  let num = o2.a.call(25);
  typeof num === "object";
  num instanceof Number;
  let str = o2.a.call("foo bar");
  typeof str === "object";
  str instanceof String;
  str == "foo bar";
  let o = {};
  o2.a.call(o) === o;
  A() === globalObj;
});
test(function () {
  let num = o2.aa.call(25);
  typeof num === "object";
  num instanceof Number;
  let str = o2.aa.call("foo bar");
  typeof str === "object";
  str instanceof String;
  str == "foo bar";
  let o = {};
  o2.aa.call(o) === o;
  AA() === globalObj;
});
test(function () {
  let num = o2.b.call(25);
  typeof num === "number";
  num === 25;
  let str = o2.b.call("foo bar");
  typeof str === "string";
  str === "foo bar";
  let o = {};
  o2.b.call(o) === o;
  B() === undefined;
});
test(function () {
  let num = o2.bb.call(25);
  typeof num === "number";
  num === 25;
  let str = o2.bb.call("foo bar");
  typeof str === "string";
  str === "foo bar";
  let o = {};
  o2.bb.call(o) === o;
  BB() === undefined;
});
