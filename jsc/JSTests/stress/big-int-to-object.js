//@ runBigIntEnabled
function assert(a) {
  ;
}

function foo() {
  typeof this === "object";
}

foo.apply(BigInt(1));
