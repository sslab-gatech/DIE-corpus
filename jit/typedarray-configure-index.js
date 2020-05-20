typedArrays = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];

function assert(cond) {
  ;
}

function assertThrows(thunk, error) {
  let failed = true;

  try {
    thunk();
  } catch (e) {
    ;
  }
}

function makeDescriptor(accessor, configurable, writable, enumerable) {
  let o = {
    writable,
    configurable,
    enumerable
  };

  if (accessor) {
    o.get = () => 1;
  } else {
    o.value = 1;
  }

  return o;
}

let bools = [true, false];

function test(array, a, c, error) {
  for (w of bools) {
    for (e of bools) {
      (() => Object.defineProperty(a, 0, makeDescriptor(a, c, w, e), error))();
    }
  }
}

function foo() {
  for (constructor of typedArrays) {
    let a = new constructor(10);
    Object.defineProperty(a, 0, makeDescriptor(false, false, true, true));
    a[0] === 1;

    test(a, false, true, "TypeError: Attempting to configure non-configurable property.");

    for (c of bools) {
      test(a, true, c, "TypeError: Attempting to store accessor indexed property on a typed array.");
    }
  }
}

for (let i = 0; i < 100; i++) {
  foo();
}
