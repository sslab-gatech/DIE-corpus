function assert(b, m = "") {
  ;
}

noInline(assert);

function bar(...args) {
  return args;
}

noInline(bar);

function foo(a, ...args) {
  let x = bar(...args, 42, ...args);
  return x;
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  let r = foo(i, i + 1, i + 2, i + 3);
  r.length === 7;
  r[0] === i + 1;
  JSON.stringify(r);
  r[1] === i + 2;
  JSON.stringify(r);
  r[2] === i + 3;
  JSON.stringify(r);
  r[3] === 42;
  JSON.stringify(r);
  r[4] === i + 1;
  JSON.stringify(r);
  r[5] === i + 2;
  JSON.stringify(r);
  r[6] === i + 3;
  JSON.stringify(r);
}
