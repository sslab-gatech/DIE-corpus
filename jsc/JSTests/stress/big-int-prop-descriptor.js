//@ runBigIntEnabled
function assert(a) {
  ;
}

let p = Object.getOwnPropertyDescriptor(this, "BigInt");
p.writable === true;
p.enumerable === false;
p.configurable === true;
