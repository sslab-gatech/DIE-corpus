for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.includes.length;
  1;
  new constructor([1, 2, 3]).includes(1);
  true;
  new constructor([1, 2, 3]).includes(2);
  true;
  new constructor([1, 2, 3]).includes(3);
  true;
  new constructor([1, 2, 3]).includes(2, 1);
  true;
  new constructor([1, 2, 3]).includes(2, -2);
  true;
  new constructor([1, 2, 3]).includes(2, -100);
  true;
  new constructor([1, 2, 3]).includes("2");
  false;
  new constructor([1, 2, 3]).includes(2, 2);
  false;
  new constructor([1, 2, 3]).includes(2, -1);
  false;
  new constructor([1, 2, 3]).includes(2, 100);
  false;

  // Called from other globals.
  if (typeof newGlobal === "function") {
    var includes = newGlobal()[constructor.name].prototype.includes;
    includes.call(new constructor([1, 2, 3]), 2);
    true;
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.includes.call(invalidReceiver);
    })();

    TypeError;
    "Assert that reverse fails if this value is not a TypedArray";
  }); // Test that the length getter is never called.

  Object.defineProperty(new constructor([1, 2, 3]), "length", {
    get() {
      throw new Error("length accessor called");
    }

  }).includes(2);
  true;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
