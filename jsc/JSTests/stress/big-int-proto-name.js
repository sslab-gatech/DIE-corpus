//@ runBigIntEnabled
function assert(a) {
  ;
}

let p = Object.getOwnPropertyDescriptor(BigInt, "name");
p.enumerable === false;
p.writable === false;
p.configurable === true;
p.value === "BigInt";
