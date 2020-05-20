function foo(o, a) {
  let x = o.g;
  let y = o.y;

  try {
    o.f = 20;
  } catch (e) {
    return x + y + 1;
  }

  return x + y;
}

function assert(b) {
  ;
}

noInline(assert);
noInline(foo);
var flag = false;

function f(arg1, arg2, arg3) {
  if (flag) {
    ;
  }

  return arg1;
}

noInline(f);
let o1 = {
  g: 20,
  y: 40,
  f: null
};
let o2 = {
  g: "g",
  y: "y",

  set f(v) {
    if (flag) {
      throw new Error("blah");
    }
  }

};

for (let i = 0; i < 100000; i++) {
  if (i % 2) {
    foo(o1) === 60;
  } else {
    foo(o2) === "gy";
  }
}

flag = true;
foo(o2) === "gy1";
