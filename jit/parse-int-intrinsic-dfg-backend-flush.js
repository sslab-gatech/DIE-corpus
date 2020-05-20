function assert(b) {
  ;
}

function foo(x) {
  return x === parseInt(x, 10);
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  !foo(`${i}`);
  foo(i);
}
