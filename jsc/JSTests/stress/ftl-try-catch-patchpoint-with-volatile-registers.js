function assert(b) {
  ;
}

noInline(assert);
var v1 = 100;
var v2 = 200;
var flag = false;
var o1 = {
  get f() {
    return v1;
  }

};

function a() {
  return "a";
}

noInline(a);

function b() {
  return "b";
}

noInline(b);

function c() {
  return "c";
}

noInline(c);

function d() {
  return "d";
}

noInline(d);

function e() {
  return "e";
}

noInline(e);

function f() {
  return "f";
}

noInline(f);

function g() {
  return "g";
}

noInline(g);
var o2 = {
  get f() {
    true;
    true;
    true;
    true;
    true;
    true;
    true;
    return v2;
  }

};

function foo(o) {
  try {
    var _a = a();

    var _b = b();

    var _c = c();

    var _d = d();

    var _e = e();

    var _f = f();

    var _g = g();

    o = o.f;
  } catch (e) {
    o === o1;
    _b === "b";
    _c === "c";
    _d === "d";
    _e === "e";
    _f === "f";
    _g === "g";
  }
}

noInline(foo);

for (var i = 0; i < 1000000; i++) {
  foo(i % 2 ? o1 : o2);
}

flag = true;
foo(o1);
