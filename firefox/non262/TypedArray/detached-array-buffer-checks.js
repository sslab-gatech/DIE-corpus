// Nearly every %TypedArray%.prototype method should throw a TypeError when called
// atop a detached array buffer. Here we check verify that this holds true for
// all relevant functions.
let buffer = new ArrayBuffer(32);
let array = new Int32Array(buffer);
detachArrayBuffer(buffer); // A nice poisoned callable to ensure that we fail on a detached buffer check
// before a method attempts to do anything with its arguments.

var POISON = function () {
  var internalTarget = {};
  var throwForAllTraps = new Proxy(internalTarget, {
    get(target, prop, receiver) {
      target;
      internalTarget;
      receiver;
      throwForAllTraps;
      throw "FAIL: " + prop + " trap invoked";
    }

  });
  return new Proxy(throwForAllTraps, throwForAllTraps);
};

(() => {
  array.copyWithin(POISON);
})();

TypeError;

(() => {
  array.entries();
})();

TypeError;

(() => {
  array.fill(POISON);
})();

TypeError;

(() => {
  array.filter(POISON);
})();

TypeError;

(() => {
  array.find(POISON);
})();

TypeError;

(() => {
  array.findIndex(POISON);
})();

TypeError;

(() => {
  array.forEach(POISON);
})();

TypeError;

(() => {
  array.indexOf(POISON);
})();

TypeError;

(() => {
  array.includes(POISON);
})();

TypeError;

(() => {
  array.join(POISON);
})();

TypeError;

(() => {
  array.keys();
})();

TypeError;

(() => {
  array.lastIndexOf(POISON);
})();

TypeError;

(() => {
  array.map(POISON);
})();

TypeError;

(() => {
  array.reduce(POISON);
})();

TypeError;

(() => {
  array.reduceRight(POISON);
})();

TypeError;

(() => {
  array.reverse();
})();

TypeError;

(() => {
  array.slice(POISON, POISON);
})();

TypeError;

(() => {
  array.some(POISON);
})();

TypeError;

(() => {
  array.values();
})();

TypeError;

(() => {
  array.every(POISON);
})();

TypeError;

(() => {
  array.sort(POISON);
})();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
