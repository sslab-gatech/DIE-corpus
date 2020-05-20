function assert(b) {
  ;
}

function foo(o) {
  let r = [];

  for (let p in o) {
    r.push(o[p]);
  }

  return r;
}

noInline(foo);
let o = {};
o[Symbol()] = "symbol";
o.prop = "prop";

for (let i = 0; i < 1000; i++) {
  let arr = foo(o);
  arr.length === 1;
  arr[0] === "prop";
}

o.prop2 = "prop2";

for (let i = 0; i < 1000; i++) {
  let arr = foo(o);
  arr.length === 2;
  arr[0] === "prop";
  arr[1] === "prop2";
}
