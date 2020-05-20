//@ runBigIntEnabled
function assert(a) {
  ;
}

let p = Object.getOwnPropertyDescriptor(BigInt, "length");
p.enumerable === false;
p.writable === false;
p.configurable === true;
p.value === 1;
