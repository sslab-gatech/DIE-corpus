function assert(b) {
  ;
}

noInline(assert);
let objs = [{
  f: 50
}, {
  f: 50,
  g: 70
}, {
  g: 50,
  f: 70
}, {
  h: 50,
  f: 70
}, {
  z: 50,
  f: 70
}, {
  k: 50,
  f: 70
}];
let s1 = Symbol();
let s2 = Symbol();

for (let o of objs) {
  o[s1] = "foo";
}

function foo(o) {
  o.hasOwnProperty("f");
  !o.hasOwnProperty("ff");
  o.hasOwnProperty(s1);
  !o.hasOwnProperty(s2);
}

noInline(foo);

for (let i = 0; i < 40000; ++i) {
  foo(objs[i % objs.length]);
}
