for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.values.length;
  0;
  constructor.prototype.values.name;
  "values";
  constructor.prototype.values;
  constructor.prototype[Symbol.iterator];
  [...new constructor(0).values()];
  [];
  [...new constructor(1).values()];
  [0];
  [...new constructor(2).values()];
  [0, 0];
  [...new constructor([15]).values()];
  [15];
  var arr = new constructor([1, 2, 3]);
  var iterator = arr.values();
  iterator.next();
  ({
    value: 1,
    done: false
  });
  iterator.next();
  ({
    value: 2,
    done: false
  });
  iterator.next();
  ({
    value: 3,
    done: false
  });
  iterator.next();
  ({
    value: undefined,
    done: true
  });

  // Called from other globals.
  if (typeof newGlobal === "function") {
    var values = newGlobal()[constructor.name].prototype.values;
    [...values.call(new constructor([42, 36]))];
    [42, 36];
    arr = new (newGlobal()[constructor.name])([42, 36]);
    [...constructor.prototype.values.call(arr)].toString();
    "42,36";
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.values.call(invalidReceiver);
    })();

    TypeError;
    "Assert that values fails if this value is not a TypedArray";
  });
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
