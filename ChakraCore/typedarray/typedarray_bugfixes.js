//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("undefined", typeof new Int8Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Int8Array");
print("undefined", typeof new Uint8Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Uint8Array");
print("undefined", typeof new Uint8ClampedArray()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Uint8ClampedArray");
print("undefined", typeof new Int16Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Int16Array");
print("undefined", typeof new Uint16Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Uint16Array");
print("undefined", typeof new Int32Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Int32Array");
print("undefined", typeof new Uint32Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Uint32Array");
print("undefined", typeof new Float32Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Float32Array");
print("undefined", typeof new Float64Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Float64Array");

var test = function (TypedArrayCtor) {
  class A extends TypedArrayCtor {
    static get [Symbol.species]() {
      return function () {
        return new TypedArrayCtor(1);
      };
    }

  }

  class B extends TypedArrayCtor {
    static get [Symbol.species]() {
      return function () {
        return new Array(1);
      };
    }

  }

  var a = new A(1000);

  () => a.map(() => 0);

  () => a.slice();

  () => a.subarray();

  () => a.filter(() => true);

  var b = new B(1000);

  () => b.map(() => 0);

  () => b.slice();

  () => b.subarray();

  () => b.filter(() => true);

  var ctor = function () {
    return new TypedArrayCtor(1);
  };

  TypedArrayCtor.from.apply(ctor, [{
    "0": 1,
    "1": 2,
    "2": 3,
    "length": 3
  }]);

  () => TypedArrayCtor.of.apply(ctor, [1, 2, 3]);
};

test(Int8Array);
test(Uint8Array);
test(Uint8ClampedArray);
test(Int16Array);
test(Uint16Array);
test(Int32Array);
test(Uint32Array);
test(Float32Array);
test(Float64Array);
