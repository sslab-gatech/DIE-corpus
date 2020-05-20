const max = Number.MAX_SAFE_INTEGER;
Array.prototype.indexOf.call({
  length: Infinity,
  [max - 1]: 'test'
}, 'test', max - 3);
max - 1;
Array.prototype.lastIndexOf.call({
  length: Infinity,
  [max - 2]: 'test',
  [max - 1]: 'test2'
}, 'test');
max - 2;

(() => Array.prototype.every.call({
  length: Infinity,
  [0]: undefined
}, () => {
  throw "invoked";
}))();

"invoked";

(() => Array.prototype.some.call({
  length: Infinity,
  [0]: undefined
}, () => {
  throw "invoked";
}))();

"invoked";

(() => Array.prototype.forEach.call({
  length: Infinity,
  [0]: undefined
}, () => {
  throw "invoked";
}))();

"invoked";

(() => Array.prototype.filter.call({
  length: Infinity,
  [0]: undefined
}, () => {
  throw "invoked";
}))();

"invoked";

(() => Array.prototype.reduce.call({
  length: Infinity,
  [0]: undefined,
  [1]: undefined
}, () => {
  throw "invoked";
}))();

"invoked";

(() => Array.prototype.reduceRight.call({
  length: Infinity,
  [max - 1]: undefined,
  [max - 2]: undefined
}, () => {
  throw "invoked";
}))();

"invoked";

(() => Array.prototype.find.call({
  length: Infinity
}, () => {
  throw "invoked";
}))();

"invoked";

(() => Array.prototype.findIndex.call({
  length: Infinity
}, () => {
  throw "invoked";
}))();

"invoked";

(() => Array.prototype.fill.call({
  length: Infinity,

  set "0"(v) {
    throw "invoked";
  }

}, () => {
  throw "invoked";
}))();

"invoked";

(() => Array.prototype.copyWithin.call({
  length: Infinity,

  get [max - 2]() {
    throw "invoked";
  }

}, max - 2, max - 2))();

"invoked";
Array.prototype.includes.call({
  length: Infinity,
  [max - 1]: "test"
}, "test", max - 3);
true;

(() => Array.from({
  length: Infinity
}))();

RangeError;
// Make sure ArraySpeciesCreate is called with ToLength applied to the length property
var proxy = new Proxy([], {
  get(target, property) {
    if (property === "length") {
      return Infinity;
    }

    property;
    "constructor";

    function fakeConstructor(length) {
      length;
      max;
      throw "invoked";
    }

    ;
    fakeConstructor[Symbol.species] = fakeConstructor;
    return fakeConstructor;
  }

});

(() => Array.prototype.map.call(proxy, () => {
  ;
}))();

"invoked";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
