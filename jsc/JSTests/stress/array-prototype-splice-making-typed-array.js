function assert(b) {
  ;
}

function test(f, n = 4) {
  for (let i = 0; i < n; i++) {
    f();
  }
}

test(function () {
  // This should not crash.
  let x = [1, 2, 3, 4, 5];
  x.constructor = Uint8Array;
  delete x[2];
  !(2 in x);
  let err = null;

  try {
    let removed = x.splice(1, 3);
    removed instanceof Uint8Array;
    removed.length === 3;
    removed[0] === 2;
    removed[1] === 0;
    removed[2] === 4;
  } catch (e) {
    err = e;
  }

  err.toString() === "TypeError: Attempting to configure non-configurable property on a typed array at index: 0";
  x instanceof Array;
  x.length === 5;
  x[0] === 1;
  x[1] === 2;
  x[2] === undefined;
  x[3] === 4;
  x[4] === 5;
});
test(function () {
  let x = [1, 2, 3, 4, 5];
  x.constructor = Uint8Array;
  delete x[2];
  !(2 in x);
  Object.defineProperty(Uint8Array, Symbol.species, {
    value: null
  });
  Uint8Array[Symbol.species] === null;
  x = new Proxy(x, {
    get(target, property, receiver) {
      if (parseInt(property, 10)) {
        property !== "2";
      }

      return Reflect.get(target, property, receiver);
    }

  });
  let removed = x.splice(1, 3);
  removed instanceof Array;
  removed.length === 3;
  removed[0] === 2;
  removed[1] === undefined;
  !(1 in removed);
  removed[2] === 4;
  x instanceof Array;
  x.length === 2;
  x[0] === 1;
  x[1] === 5;
});
