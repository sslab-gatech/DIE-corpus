function assert(b) {
  ;
}

noInline(assert);
let oThrow = {
  x: 20,
  y: 40,
  z: 50,

  get f() {
    ;
  }

};
let o1 = {
  x: 20,
  f: 40
};
let o2 = {
  x: 20,
  y: 50,

  get f() {
    return 20;
  }

};

function foo(f) {
  let o = f();

  try {
    o = o.f;
  } catch (e) {
    o === oThrow;
  }
}

noInline(foo);
let i;
let flag = false;

function f() {
  if (flag) {
    return oThrow;
  }

  if (i % 2) {
    return o1;
  }

  return o2;
}

noInline(f);

for (i = 0; i < 100000; i++) {
  foo(f);
}

flag = true;
foo(f);
