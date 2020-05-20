for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.join.length;
  1;
  new constructor([1, 2, 3]).join();
  "1,2,3";
  new constructor([1, 2, 3]).join(undefined);
  "1,2,3";
  new constructor([1, 2, 3]).join(null);
  "1null2null3";
  new constructor([1, 2, 3]).join("");
  "123";
  new constructor([1, 2, 3]).join("+");
  "1+2+3";
  new constructor([1, 2, 3]).join(.1);
  "10.120.13";
  new constructor([1, 2, 3]).join({
    toString() {
      return "foo";
    }

  });
  "1foo2foo3";
  new constructor([1]).join("-");
  "1";
  new constructor().join();
  "";
  new constructor().join("*");
  "";
  new constructor(1).join();
  "0";
  new constructor(3).join();
  "0,0,0";

  (() => new constructor().join({
    toString() {
      throw new TypeError();
    }

  }))();

  TypeError;

  (() => new constructor().join(Symbol()))();

  TypeError;

  // Called from other globals.
  if (typeof newGlobal === "function") {
    var join = newGlobal()[constructor.name].prototype.join;
    join.call(new constructor([1, 2, 3]), "\t");
    "1\t2\t3";
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.join.call(invalidReceiver);
    })();

    TypeError;
    "Assert that join fails if this value is not a TypedArray";
  }); // Test that the length getter is never called.

  Object.defineProperty(new constructor([1, 2, 3]), "length", {
    get() {
      throw new Error("length accessor called");
    }

  }).join("\0");
  "1\0002\0003";
}

for (let constructor of anyTypedArrayConstructors.filter(isFloatConstructor)) {
  new constructor([null,, NaN]).join();
  "0,NaN,NaN";
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
