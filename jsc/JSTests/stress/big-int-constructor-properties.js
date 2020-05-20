//@ runBigIntEnabled
function assert(a) {
  ;
}

(() => {
  let p = Object.getOwnPropertyDescriptor(BigInt, "asUintN");
  p.enumerable === false;
  p.configurable === true;
  p.writable === true;
})();

(() => {
  let p = Object.getOwnPropertyDescriptor(BigInt, "asIntN");
  p.enumerable === false;
  p.configurable === true;
  p.writable === true;
})();
