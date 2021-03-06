// Tests for detached ArrayBuffer checks in %TypedArray%.prototype.slice ( start, end ).
function* createTypedArrays(lengths = [0, 1, 4, 4096]) {
  // Test with eagerly created ArrayBuffer.
  for (let length of lengths) {
    let buffer = new ArrayBuffer(length * Int32Array.BYTES_PER_ELEMENT);
    let typedArray = new Int32Array(buffer);
    yield {
      typedArray,
      length,

      buffer() {
        return buffer;
      }

    };
  } // Test with lazily created ArrayBuffer.


  for (let length of lengths) {
    let typedArray = new Int32Array(length);
    yield {
      typedArray,
      length,

      buffer() {
        return typedArray.buffer;
      }

    };
  }
}

if (typeof detachArrayBuffer === "function") {
  // ArrayBuffer is detached when entering slice().
  for (let {
    typedArray,
    buffer
  } of createTypedArrays()) {
    detachArrayBuffer(buffer());

    (() => {
      typedArray.slice(0);
    })();

    TypeError;
    "ArrayBuffer is detached on function entry";
  } // ArrayBuffer is detached when computing ToInteger(start).


  for (let {
    typedArray,
    length,
    buffer
  } of createTypedArrays()) {
    let detached = false;
    let start = {
      valueOf() {
        detached;
        false;
        detachArrayBuffer(buffer());
        detached;
        false;
        detached = true;
        return 0;
      }

    }; // Doesn't throw an error when no bytes are copied.

    if (length === 0) {
      typedArray.slice(start);
    } else {
      (() => {
        typedArray.slice(start);
      })();

      TypeError;
      "ArrayBuffer is detached in ToInteger(start)";
    }

    detached;
    true;
    "detachArrayBuffer was called";
  } // ArrayBuffer is detached when computing ToInteger(end).


  for (let {
    typedArray,
    length,
    buffer
  } of createTypedArrays()) {
    let detached = false;
    let end = {
      valueOf() {
        detached;
        false;
        detachArrayBuffer(buffer());
        detached;
        false;
        detached = true;
        return length;
      }

    }; // Doesn't throw an error when no bytes are copied.

    if (length === 0) {
      typedArray.slice(0, end);
    } else {
      (() => {
        typedArray.slice(0, end);
      })();

      TypeError;
      "ArrayBuffer is detached in ToInteger(end)";
    }

    detached;
    true;
    "detachArrayBuffer was called";
  } // ArrayBuffer is detached in species constructor.


  for (let {
    typedArray,
    length,
    buffer
  } of createTypedArrays()) {
    let detached = false;
    typedArray.constructor = {
      [Symbol.species]: function (...args) {
        detached;
        false;
        detachArrayBuffer(buffer());
        detached;
        false;
        detached = true;
        return new Int32Array(...args);
      }
    }; // Doesn't throw an error when no bytes are copied.

    if (length === 0) {
      typedArray.slice(0);
    } else {
      (() => {
        typedArray.slice(0);
      })();

      TypeError;
      "ArrayBuffer is detached in TypedArraySpeciesCreate(...)";
    }

    detached;
    true;
    "detachArrayBuffer was called";
  }
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
