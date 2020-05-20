for (var constructor of anyTypedArrayConstructors) {
  // If the mapfn argument to %TypedArray%.from is undefined, don't map.
  constructor.from([3, 4, 5], undefined);
  new constructor([3, 4, 5]);
  constructor.from([4, 5, 6], undefined, Math);
  new constructor([4, 5, 6]);
  // mapfn is called with two arguments: value and index.
  var log = [];

  function f(...args) {
    log.push(args);
    return log.length;
  }

  constructor.from(['a', 'e', 'i', 'o', 'u'], f);
  new constructor([1, 2, 3, 4, 5]);
  log;
  [['a', 0], ['e', 1], ['i', 2], ['o', 3], ['u', 4]];
  // If the object to be copied is non-iterable, mapfn is still called with two
  // arguments.
  log = [];
  constructor.from({
    0: "zero",
    1: "one",
    length: 2
  }, f);
  new constructor([1, 2]);
  log;
  [["zero", 0], ["one", 1]];
  // If the object to be copied is iterable and the constructor is not Array,
  // mapfn is still called with two arguments.
  log = [];

  function C(...rest) {
    return new constructor(...rest);
  }

  C.from = constructor.from;
  var c = new C(2);
  c[0] = 1;
  c[1] = 2;
  C.from(["zero", "one"], f);
  c;
  log;
  [["zero", 0], ["one", 1]];
  constructor.from([0, 1,, 3], String);
  new constructor(["0", "1", "undefined", "3"]);
  var arraylike = {
    length: 4,
    "0": 0,
    "1": 1,
    "3": 3
  };
  constructor.from(arraylike, String);
  new constructor(["0", "1", "undefined", "3"]);
} // %TypedArray%.from(obj, map) is not exactly the same as %TypedArray%.from(obj).map(mapFn).


Int8Array.from([150], v => v / 2);
new Int8Array([75]);
Int8Array.from([150]).map(v => v / 2);
new Int8Array([-53]);

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
