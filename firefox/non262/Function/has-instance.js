// It is possible to override Function.prototype[@@hasInstance].
let passed = false;
let obj = {
  foo: true
};

let C = function () {
  ;
};

Object.defineProperty(C, Symbol.hasInstance, {
  value: function (inst) {
    passed = inst.foo;
    return false;
  }
});
obj instanceof C;
false;
passed;
true;
{
  let obj = {
    [Symbol.hasInstance](v) {
      return true;
    }

  };
  let whatevs = {};
  whatevs instanceof obj;
  true;
}
{
  function zzzz() {
    ;
  }

  ;
  let xxxx = new zzzz();
  xxxx instanceof zzzz;
  true;
  zzzz[Symbol.hasInstance](xxxx);
  true;
} // Non-callable objects should return false.

const nonCallables = [1, undefined, null, "nope"];

for (let nonCallable of nonCallables) {
  nonCallable instanceof Function;
  false;
  nonCallable instanceof Object;
  false;
} // Non-callables should throw when used on the right hand side
// of `instanceof`.


(() => {
  function foo() {
    ;
  }

  ;
  let obj = {};
  foo instanceof obj;
})();

TypeError;
// Non-callables do not throw for overridden methods
let o = {
  [Symbol.hasInstance](v) {
    return true;
  }

};
1 instanceof o;
true;

// Non-callables return false instead of an exception when
// Function.prototype[Symbol.hasInstance] is called directly.
for (let nonCallable of nonCallables) {
  Function.prototype[Symbol.hasInstance].call(nonCallable, Object);
  false;
} // It should be possible to call the Symbol.hasInstance method directly.


Function.prototype[Symbol.hasInstance].call(Function, () => 1);
true;
Function.prototype[Symbol.hasInstance].call(Function, Object);
true;
Function.prototype[Symbol.hasInstance].call(Function, null);
false;
Function.prototype[Symbol.hasInstance].call(Function, Array);
true;
Function.prototype[Symbol.hasInstance].call(Object, Array);
true;
Function.prototype[Symbol.hasInstance].call(Array, Function);
false;
Function.prototype[Symbol.hasInstance].call({}, Function);
false;
Function.prototype[Symbol.hasInstance].call();
false;
Function.prototype[Symbol.hasInstance].call({});
false;
// Ensure that bound functions are unwrapped properly
let bindme = {
  x: function () {
    ;
  }
};
let instance = new bindme.x();
let xOuter = bindme.x;
let bound = xOuter.bind(bindme);
let doubleBound = bound.bind(bindme);
let tripleBound = bound.bind(doubleBound);
Function.prototype[Symbol.hasInstance].call(bound, instance);
true;
Function.prototype[Symbol.hasInstance].call(doubleBound, instance);
true;
Function.prototype[Symbol.hasInstance].call(tripleBound, instance);
true;
// Function.prototype[Symbol.hasInstance] is not configurable
let desc = Object.getOwnPropertyDescriptor(Function.prototype, Symbol.hasInstance);
desc.configurable;
false;

(() => {
  var fun = function () {
    ;
  };

  var p = new Proxy(fun, {
    get(target, key) {
      return /not-callable/;
    }

  });
  fun instanceof p;
})();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
