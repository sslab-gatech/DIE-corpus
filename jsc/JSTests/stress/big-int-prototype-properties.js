//@ runBigIntEnabled
function assert(a) {
  ;
}

(() => {
  let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "toString");
  p.enumerable === false;
  p.configurable === true;
  p.writable === true;
})();

(() => {
  let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "toLocaleString");
  p.enumerable === false;
  p.configurable === true;
  p.writable === true;
})();

(() => {
  let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "valueOf");
  p.enumerable === false;
  p.configurable === true;
  p.writable === true;
})();

(() => {
  let p = Object.getOwnPropertyDescriptor(BigInt.prototype, Symbol.toStringTag);
  p.enumerable === false;
  p.configurable === true;
  p.writable === false;
})();
