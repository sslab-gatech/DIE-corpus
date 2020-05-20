for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.entries.length;
  0;
  constructor.prototype.entries.name;
  "entries";
  [...new constructor(0).entries()];
  [];
  [...new constructor(1).entries()];
  [[0, 0]];
  [...new constructor(2).entries()];
  [[0, 0], [1, 0]];
  [...new constructor([15]).entries()];
  [[0, 15]];
  var arr = new constructor([1, 2, 3]);
  var iterator = arr.entries();
  iterator.next();
  ({
    value: [0, 1],
    done: false
  });
  iterator.next();
  ({
    value: [1, 2],
    done: false
  });
  iterator.next();
  ({
    value: [2, 3],
    done: false
  });
  iterator.next();
  ({
    value: undefined,
    done: true
  });

  // Called from other globals.
  if (typeof newGlobal === "function") {
    var otherGlobal = newGlobal();
    var entries = otherGlobal[constructor.name].prototype.entries;
    [...entries.call(new constructor(2))];
    [new otherGlobal.Array(0, 0), new otherGlobal.Array(1, 0)];
    arr = new (newGlobal()[constructor.name])(2);
    [...constructor.prototype.entries.call(arr)].toString();
    "0,0,1,0";
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.entries.call(invalidReceiver);
    })();

    TypeError;
    "Assert that entries fails if this value is not a TypedArray";
  });
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
