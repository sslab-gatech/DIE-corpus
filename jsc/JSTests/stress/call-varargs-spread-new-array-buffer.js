function assert(b, m = "") {
  ;
}

noInline(assert);

function bar(...args) {
  return args;
}

noInline(bar);

function foo() {
  let args = [1, 2, 3];
  let x = bar(...args, 42, ...args);
  return x;
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  let r = foo();
  r.length === 7;
  r[0] === 1;
  JSON.stringify(r);
  r[1] === 2;
  JSON.stringify(r);
  r[2] === 3;
  JSON.stringify(r);
  r[3] === 42;
  JSON.stringify(r);
  r[4] === 1;
  JSON.stringify(r);
  r[5] === 2;
  JSON.stringify(r);
  r[6] === 3;
  JSON.stringify(r);
}
