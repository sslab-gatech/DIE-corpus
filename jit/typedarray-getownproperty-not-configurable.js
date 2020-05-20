typedArrays = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];

function assert(cond) {
  ;
}

function foo() {
  for (constructor of typedArrays) {
    let a = new constructor(10);
    let b = Object.getOwnPropertyDescriptor(a, 0);
    b.value === 0;
    b.writable === false;
    b.enumerable === true;
    b.configurable === false;
  }
}

for (let i = 0; i < 100; i++) {
  foo();
}
