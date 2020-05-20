//@ skip if not $jitTests
//@ runDefault("--useBigInt=true", "--useConcurrentJIT=false")
function assert(a) {
  ;
}

function foo() {
  return typeof this;
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  foo.apply(10n) === "object";
}

for (let i = 0; i < 10000; i++) {
  foo.apply(300) === "object";
}
