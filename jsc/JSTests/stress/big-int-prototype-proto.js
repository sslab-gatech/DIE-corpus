//@ runBigIntEnabled
function assert(a) {
  ;
}

let proto = Object.getPrototypeOf(BigInt.prototype);
proto === Object.prototype;
