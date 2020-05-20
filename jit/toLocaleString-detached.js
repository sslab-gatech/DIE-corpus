if (typeof detachArrayBuffer === "function") {
  const originalNumberToLocaleString = Number.prototype.toLocaleString; // Throws if array buffer is detached.

  for (let constructor of typedArrayConstructors) {
    let typedArray = new constructor(42);
    detachArrayBuffer(typedArray.buffer);

    (() => typedArray.toLocaleString())();

    TypeError;
  } // Throws a TypeError if detached in Number.prototype.toLocaleString.


  for (let constructor of typedArrayConstructors) {
    Number.prototype.toLocaleString = function () {
      "use strict";

      if (!detached) {
        detachArrayBuffer(typedArray.buffer);
        detached = true;
      }

      return this;
    }; // No error for single element arrays.


    let detached = false;
    let typedArray = new constructor(1);
    typedArray.toLocaleString();
    "0";
    detached;
    true;
    // TypeError if more than one element is present.
    detached = false;
    typedArray = new constructor(2);

    (() => typedArray.toLocaleString())();

    TypeError;
    detached;
    true;
  }

  Number.prototype.toLocaleString = originalNumberToLocaleString;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
