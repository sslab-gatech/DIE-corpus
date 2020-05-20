function assert(b) {
  ;
}

let targets = [Function, String, Array, Set, Map, WeakSet, WeakMap, RegExp, Number, Promise, Date, Boolean, Error, TypeError, SyntaxError, ArrayBuffer, Int32Array, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Uint32Array, Float32Array, Float64Array, DataView];

for (let target of targets) {
  let error = null;
  let called = false;
  let handler = {
    get: function (theTarget, propName) {
      propName === "prototype";
      called = true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      new proxy();
    } catch (e) {
      threw = true;
      e === error;
      error = null;
    }

    threw;
    called;
    called = false;
  }
}
