function assert(b) {
  ;
}

function test(f, n = 1000) {
  for (let i = 0; i < n; ++i) {
    f();
  }
}

let o1 = {
  get foo() {
    return this;
  }

};
let o2 = {
  __proto__: o1,

  a() {
    "use strict";

    return super.foo;
  },

  aa() {
    "use strict";

    let arr = () => super.foo;

    return arr();
  }

};
var A = o2.a;
var AA = o2.aa;
let globalObj = this;
AA();
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
  AA() === globalObj;
  o2.a.call(undefined) === globalObj;
  o2.a.call(null) === globalObj;
  o2.aa.call(undefined) === globalObj;
  o2.aa.call(null) === globalObj;
});
