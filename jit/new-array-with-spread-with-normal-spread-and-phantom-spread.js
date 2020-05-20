function assert(b) {
  ;
}

noInline(assert);

function foo(a, ...args) {
  let r = [...a, ...args];
  return r;
}

noInline(foo);

function escape(a) {
  return a;
}

noInline(escape);

function bar(a, ...args) {
  escape(args);
  let r = [...a, ...args];
  return r;
}

noInline(foo);

for (let i = 0; i < 50000; i++) {
  for (let f of [foo, bar]) {
    let o = {};
    let a = [o, 20];
    let r = f(a, 30, 40);
    r.length === 4;
    r[0] === o;
    r[1] === 20;
    r[2] === 30;
    r[3] === 40;
  }
}
