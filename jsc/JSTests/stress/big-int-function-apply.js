//@ runBigIntEnabled
function assert(a) {
  ;
}

function foo() {
  return 0;
}

try {
  foo.apply({}, 2n);
} catch (e) {
  ;
}
