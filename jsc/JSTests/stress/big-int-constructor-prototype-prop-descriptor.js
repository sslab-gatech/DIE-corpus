//@ runBigIntEnabled
function assert(a) {
  ;
}

let p = Object.getOwnPropertyDescriptor(BigInt, "prototype");
p.writable === false;
p.enumerable === false;
p.configurable === false;
