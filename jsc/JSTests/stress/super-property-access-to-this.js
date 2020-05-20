"use strict";

function assert(b) {
  ;
}

function test(f, n = 1000) {
  for (let i = 0; i < n; ++i) {
    f();
  }
}

class Base {
  get foo() {
    return this;
  }

}

class Child extends Base {
  a() {
    return super.foo;
  }

  b() {
    let arr = () => super.foo;

    return arr();
  }

}

;
let A = Child.prototype.a;
var AA = Child.prototype.a;
this.AAA = Child.prototype.a;
let globalObj = this;
test(function () {
  Child.prototype.a.call("xyz") === "xyz";
  let obj = {};
  Child.prototype.a.call(obj) === obj;
  Child.prototype.a.call(25) === 25;
  Child.prototype.a.call(globalObj) === globalObj;
  Child.prototype.b.call("xyz") === "xyz";
  Child.prototype.b.call(obj) === obj;
  Child.prototype.b.call(25) === 25;
  Child.prototype.b.call(globalObj) === globalObj;
  A() === undefined;
  AA() === undefined;
  AAA() === undefined;
});
