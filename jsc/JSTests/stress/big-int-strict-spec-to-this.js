//@ runDefault("--useBigInt=true", "--useConcurrentJIT=false")
function assert(a) {
  ;
}

function foo() {
  "use strict";

  return typeof this;
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  foo.apply(10n) === "bigint";
}

for (let i = 0; i < 10000; i++) {
  foo.apply(300) === "number";
}
