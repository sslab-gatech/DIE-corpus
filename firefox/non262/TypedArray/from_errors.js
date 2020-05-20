for (var constructor of anyTypedArrayConstructors) {
  // %TypedArray%.from throws if the argument is undefined or null.
  (() => constructor.from())();

  TypeError;

  (() => constructor.from(undefined))();

  TypeError;

  (() => constructor.from(null))();

  TypeError;

  // Unlike Array.from, %TypedArray%.from doesn't get or set the length property.
  function ObjectWithThrowingLengthGetterSetter(...rest) {
    var ta = new constructor(...rest);
    Object.defineProperty(ta, "length", {
      configurable: true,

      get() {
        throw new RangeError("getter!");
      },

      set() {
        throw new RangeError("setter!");
      }

    });
    return ta;
  }

  ObjectWithThrowingLengthGetterSetter.from = constructor.from;
  ObjectWithThrowingLengthGetterSetter.from([123])[0];
  123;

  (() => constructor.from([3, 4, 5], {}))();

  TypeError;

  (() => constructor.from([3, 4, 5], "also not a function"))();

  TypeError;

  (() => constructor.from([3, 4, 5], null))();

  TypeError;

  (() => constructor.from([], JSON))();

  TypeError;
  // If mapfn is not undefined and not callable, the error happens before anything else.
  // Before calling the constructor, before touching the arrayLike.
  var log = "";
  var obj;

  function C(...rest) {
    log += "C";
    obj = new constructor(...rest);
    return obj;
  }

  var p = new Proxy({}, {
    has: function () {
      log += "1";
    },
    get: function () {
      log += "2";
    },
    getOwnPropertyDescriptor: function () {
      log += "3";
    }
  });

  (() => constructor.from.call(C, p, {}))();

  TypeError;
  log;
  "";
  // If mapfn throws, the new object has already been created.
  var arrayish = {
    get length() {
      log += "l";
      return 1;
    },

    get 0() {
      log += "0";
      return "q";
    }

  };
  log = "";
  var exc = {
    surprise: "ponies"
  };

  (() => constructor.from.call(C, arrayish, () => {
    throw exc;
  }))();

  exc;
  log;
  "lC0";
  obj instanceof constructor;
  true;

  // It's a TypeError if the @@iterator property is a primitive (except null and undefined).
  for (var primitive of ["foo", 17, Symbol(), true]) {
    (() => constructor.from({
      [Symbol.iterator]: primitive
    }))();

    TypeError;
  }

  constructor.from({
    [Symbol.iterator]: null
  });
  new constructor();
  constructor.from({
    [Symbol.iterator]: undefined
  });
  new constructor();

  // It's a TypeError if the iterator's .next() method returns a primitive.
  for (var primitive of [undefined, null, "foo", 17, Symbol(), true]) {
    (() => constructor.from({
      [Symbol.iterator]() {
        return {
          next() {
            return primitive;
          }

        };
      }

    }))();

    TypeError;
  }
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
