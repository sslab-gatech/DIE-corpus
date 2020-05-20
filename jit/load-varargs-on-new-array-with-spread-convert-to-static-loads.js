function assert(b) {
  ;
}

noInline(assert);

function baz(...args) {
  return args;
}

function bar(a, ...args) {
  return baz(...args, 42, ...args);
}

function foo(a, b, c, d) {
  return bar(a, b, c, d);
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  let r = foo(i, i + 1, i + 2, i + 3);
  r.length === 7;
  r[0] === i + 1;
  r[1] === i + 2;
  r[2] === i + 3;
  r[3] === 42;
  r[4] === i + 1;
  r[5] === i + 2;
  r[6] === i + 3;
}
