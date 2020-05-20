for (var constructor of anyTypedArrayConstructors) {
  constructor.of.length;
  0;
  Object.getOwnPropertyDescriptor(constructor.__proto__, "of");
  ({
    value: constructor.of,
    writable: true,
    enumerable: false,
    configurable: true
  });
  constructor.of().constructor;
  constructor;
  constructor.of() instanceof constructor;
  true;
  constructor.of(10);
  new constructor([10]);
  constructor.of(1, 2, 3);
  new constructor([1, 2, 3]);
  constructor.of("1", "2", "3");
  new constructor([1, 2, 3]);

  (() => constructor.of.call(Array))();

  TypeError;

  (() => constructor.of.call(Array, 1, 2, 3))();

  TypeError;
  var hits = 0;
  constructor.of.call(function (len) {
    arguments.length;
    1;
    len;
    3;
    hits++;
    return new constructor(len);
  }, 10, 20, 30);
  new constructor([10, 20, 30]);
  hits;
  1;

  // Behavior across compartments.
  if (typeof newGlobal === "function") {
    var newC = newGlobal()[constructor.name];
    newC.of() instanceof newC;
    true;
    newC.of() instanceof constructor;
    false;
    newC.of.call(constructor) instanceof constructor;
    true;
  } // Throws if `this` isn't a constructor.


  var invalidConstructors = [undefined, null, 1, false, "", Symbol(), [], {}, /./, constructor.of, () => {
    ;
  }];
  invalidConstructors.forEach(C => {
    (() => {
      constructor.of.call(C);
    })();

    TypeError;
  }); // Throw if `this` is a method definition or a getter/setter function.

  (() => {
    constructor.of.call({
      method() {
        ;
      }

    }.method);
  })();

  TypeError;

  (() => {
    constructor.of.call(Object.getOwnPropertyDescriptor({
      get getter() {
        ;
      }

    }, "getter").get);
  })();

  TypeError;

  (() => {
    constructor.of.call(function* (len) {
      return len;
    }, "a");
  })();

  TypeError;

  (() => {
    constructor.of.call(function () {
      return {
        get 0() {
          ;
        }

      };
    }, "a");
  })();

  TypeError;

  (() => {
    constructor.of.call(function () {
      return Object("1");
    }, "a");
  })();

  TypeError;

  (() => {
    constructor.of.call(function () {
      return Object.create({
        set 0(v) {
          throw new TypeError();
        }

      });
    }, "a");
  })();

  TypeError;
}

for (let constructor of anyTypedArrayConstructors.filter(isFloatConstructor)) {
  constructor.of(0.1, null, undefined, NaN);
  new constructor([0.1, 0, NaN, NaN]);
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
