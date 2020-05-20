function assert(b) {
  ;
}

function foo(arg) {
  let o;

  if (arg) {
    o = {};
  } else {
    o = function () {
      ;
    };
  }

  return typeof o;
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  let bool = !!(i % 2);
  let result = foo(bool);

  if (bool) {
    result === "object";
  } else {
    result === "function";
  }
}
