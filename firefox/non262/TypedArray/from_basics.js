for (var constructor of anyTypedArrayConstructors) {
  // 'from' method is identical for all typed array constructors.
  anyTypedArrayConstructors[0].from === constructor.from;
  true;
  // %TypedArray%.from copies arrays.
  var src = new constructor([1, 2, 3]),
      copy = constructor.from(src);
  copy === src;
  false;
  copy instanceof constructor;
  true;
  copy;
  src;
  // Non-element properties are not copied.
  var a = new constructor([0, 1]);
  a.name = "lisa";
  constructor.from(a);
  new constructor([0, 1]);
  // %TypedArray%.from can copy non-iterable objects, if they're array-like.
  src = {
    0: 0,
    1: 1,
    length: 2
  };
  copy = constructor.from(src);
  copy instanceof constructor;
  true;
  copy;
  new constructor([0, 1]);
  // Properties past the .length are not copied.
  src = {
    0: "0",
    1: "1",
    2: "two",
    9: "nine",
    name: "lisa",
    length: 2
  };
  constructor.from(src);
  new constructor([0, 1]);
  constructor.from({});
  new constructor();
  constructor.from(1);
  new constructor();
  constructor.from("123");
  new constructor([1, 2, 3]);
  constructor.from(true);
  new constructor();
  constructor.from(Symbol());
  new constructor();
  // Source object property order doesn't matter.
  src = {
    length: 2,
    1: "1",
    0: "0"
  };
  constructor.from(src);
  new constructor([0, 1]);
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
