//@ runBigIntEnabled
function assert(a) {
  ;
}

let proto = Object.getPrototypeOf(BigInt);
proto === Function.prototype;
