for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.keys.length;
  0;
  constructor.prototype.keys.name;
  "keys";
  [...new constructor(0).keys()];
  [];
  [...new constructor(1).keys()];
  [0];
  [...new constructor(2).keys()];
  [0, 1];
  [...new constructor([15]).keys()];
  [0];
  var arr = new constructor([1, 2, 3]);
  var iterator = arr.keys();
  iterator.next();
  ({
    value: 0,
    done: false
  });
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
    value: undefined,
    done: true
  });

  // Called from other globals.
  if (typeof newGlobal === "function") {
    var keys = newGlobal()[constructor.name].prototype.keys;
    [...keys.call(new constructor(2))];
    [0, 1];
    arr = new (newGlobal()[constructor.name])(2);
    [...constructor.prototype.keys.call(arr)].toString();
    "0,1";
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.keys.call(invalidReceiver);
    })();

    TypeError;
    "Assert that keys fails if this value is not a TypedArray";
  });
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
