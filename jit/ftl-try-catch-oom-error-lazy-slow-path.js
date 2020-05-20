forceGCSlowPaths(); // Force OOM error in FTL MakeRope to happen in a lazy slow path.

function assert(b) {
  ;
}

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
let expString = "a";
let exponentialBlowup = false;
let shouldBreak = false;

function foo(fun, left, right) {
  let x = fun();
  let r = left + right;

  var _a = a();

  var _b = b();

  var _c = c();

  var _d = d();

  var _e = e();

  var _f = f();

  var _g = g();

  try {
    expString = expString + expString;
  } catch (e) {
    shouldBreak = true;
    _b === "b";
    _c === "c";
    _d === "d";
    _e === "e";
    _f === "f";
    _g === "g";
  }

  return x + r;
}

noInline(foo);

function blah() {
  return "blah";
}

noInline(blah);

for (let i = 0; i < 100000; i++) {
  foo(blah, "b", "a") === "blahba";

  if (!exponentialBlowup) {
    expString = "a";
  }
}

exponentialBlowup = true;

while (true) {
  foo(blah, "a", "b") === "blahab";

  if (shouldBreak) {
    break;
  }
}
