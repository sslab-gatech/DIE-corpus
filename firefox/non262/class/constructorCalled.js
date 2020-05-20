// The constructor specified should get called, regardless of order, or
// other distractions
var called = false;

class a {
  constructor(x) {
    x;
    4;
    called = true;
  }

}

new a(4);
called;
true;
called = false;
var aExpr = class {
  constructor(x) {
    x;
    4;
    called = true;
  }

};
new aExpr(4);
called;
true;
called = false;

class b {
  constructor() {
    called = true;
  }

  method() {
    ;
  }

}

new b();
called;
true;
called = false;
var bExpr = class {
  constructor() {
    called = true;
  }

  method() {
    ;
  }

};
new bExpr();
called;
true;
called = false;

class c {
  method() {
    ;
  }

  constructor() {
    called = true;
  }

}

new c();
called;
true;
called = false;
var cExpr = class {
  method() {
    ;
  }

  constructor() {
    called = true;
  }

};
new cExpr();
called;
true;
called = false;

class d {
  ["constructor"]() {
    throw new Error("NO");
  }

  constructor() {
    called = true;
  }

}

new d();
called;
true;
called = false;
var dExpr = class {
  ["constructor"]() {
    throw new Error("NO");
  }

  constructor() {
    called = true;
  }

};
new dExpr();
called;
true;

if (typeof reportCompare === "function") {
  reportCompare(0, 0, "OK");
}
