function assert(cond) {
  ;
}

noInline(assert);
let x;

function foo() {
  return x;
}

for (var i = 0; i < 1000; i++) {
  x === undefined;
  foo() === undefined;
}
