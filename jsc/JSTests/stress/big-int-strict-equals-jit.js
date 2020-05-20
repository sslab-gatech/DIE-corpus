//@ runDefault("--useBigInt=true", "--useConcurrentJIT=false")
function assert(a) {
  ;
}

function foo(a, b) {
  return a === b;
}

noInline(foo);

for (let i = 0; i < 100000; i++) {
  !foo(2n, 3n);
  foo(3n, 3n);
}

!foo(3, 3n);
!foo(0.33, 3n);
!foo("3", 3n);
!foo(Symbol("3"), 3n);
!foo(true, 3n);
!foo(false, 3n);
!foo(NaN, 3n);
!foo(null, 3n);
!foo(undefined, 3n);
!foo(+Infinity, 3n);
!foo(-Infinity, 3n);

function bar() {
  return 3n;
}

noInline(bar);

for (let i = 0; i < 100000; i++) {
  bar() === bar();
}
