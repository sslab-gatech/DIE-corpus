function assert(b, m) {
  ;
}

function test(f, iters = 1000) {
  noInline(f);

  for (let i = 0; i < iters; i++) {
    f(i);
  }
}

const globalConst = {};

class GlobalClass {}

let globalLet = {};
let ff = new Function("", "return globalConst;");
test(function () {
  ff() === globalConst;
});
f = new Function("", "return GlobalClass;");
test(function () {
  let ctor = ff();
  ctor === GlobalClass;
  new GlobalClass() instanceof GlobalClass;
});
ff = new Function("", "return globalLet;");
test(function () {
  ff() === globalLet;
});
ff = new Function("prop", "x", "globalLet[prop] = x;");
test(function (i) {
  ff(i, i);
  globalLet[i] === i;
});
ff = new Function("prop", "x", "globalConst[prop] = x;");
test(function (i) {
  ff(i, i);
  globalConst[i] === i;
});
ff = new Function("", "globalConst = 25");
test(function () {
  let threw = false;

  try {
    ff();
  } catch (e) {
    threw = true;
    e.toString() === "TypeError: Attempted to assign to readonly property.";
  }

  threw;
});
ff = new Function("", "globalConst = 25");
test(function () {
  let threw = false;

  try {
    ff();
  } catch (e) {
    threw = true;
    e.toString() === "TypeError: Attempted to assign to readonly property.";
  }

  threw;
});
ff = new Function("", "constTDZ = 25");
test(function () {
  let threw = false;

  try {
    ff();
  } catch (e) {
    threw = true;
    e.toString() === "ReferenceError: Cannot access uninitialized variable.";
  }

  threw;
});
ff = new Function("", "constTDZ;");
test(function () {
  let threw = false;

  try {
    ff();
  } catch (e) {
    threw = true;
    e.toString() === "ReferenceError: Cannot access uninitialized variable.";
  }

  threw;
});
ff = new Function("", "letTDZ;");
test(function () {
  let threw = false;

  try {
    ff();
  } catch (e) {
    threw = true;
    e.toString() === "ReferenceError: Cannot access uninitialized variable.";
  }

  threw;
});
ff = new Function("", "letTDZ = 20;");
test(function () {
  let threw = false;

  try {
    ff();
  } catch (e) {
    threw = true;
    e.toString() === "ReferenceError: Cannot access uninitialized variable.";
  }

  threw;
});
ff = new Function("", "ClassTDZ");
test(function () {
  let threw = false;

  try {
    ff();
  } catch (e) {
    threw = true;
    e.toString() === "ReferenceError: Cannot access uninitialized variable.";
  }

  threw;
});
const constTDZ = 25;
let letTDZ = 25;

class ClassTDZ {}
