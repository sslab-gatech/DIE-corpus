//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Verifies TypedArray builtin properties
var TypedArrayCtors = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];

function t1() {
  TypedArrayCtors.forEach(function (TA) {
    var o = new TA(10);
    Object.prototype[1.3] = 100;
    console.log(undefined, o[1.3]);
    console.log(false, Reflect.has(o, '1.3'));
    var p = new Proxy(o, {});
    console.log(undefined, p[1.3]);
    console.log(false, Reflect.has(p, '1.3'));
    delete Object.prototype[1.3];
  });
}

t1();

function t2() {
  TypedArrayCtors.forEach(function (TA) {
    var o = {};
    Object.setPrototypeOf(o, new TA(100));
    Object.prototype[1.3] = 100;
    console.log(undefined, o[1.3]);
    console.log(false, Reflect.has(o, '1.3'));
    var p = new Proxy(o, {});
    console.log(undefined, p[1.3]);
    console.log(false, Reflect.has(p, '1.3'));
    Object.setPrototypeOf(o, new Proxy(Object.getPrototypeOf(o), {}));
    console.log(undefined, o[1.3]);
    console.log(false, Reflect.has(o, '1.3'));
    console.log(undefined, p[1.3]);
    console.log(false, Reflect.has(p, '1.3'));
    delete Object.prototype[1.3];
  });
}

t2();

function t3() {
  TypedArrayCtors.forEach(function (TA) {
    var o = new TA(10);
    Object.prototype[NaN] = 100;
    console.log(undefined, o[NaN]);
    console.log(false, Reflect.has(o, 'NaN'));
    delete Object.prototype[NaN];
  });
}

t3();

function t4() {
  TypedArrayCtors.forEach(function (TA) {
    var arr = new TA();
    arr[1.2] = "xyz123"; // fails to assign (read below is undefined)

    Object.setPrototypeOf(arr, {
      "1.1": "abc"
    });
    console.log(undefined, arr[1.1]);
    console.log(undefined, arr[1.2]);
  });
}

t4();

function t5() {
  TypedArrayCtors.forEach(function (TA) {
    var tests = new TA(3);

    Object.prototype[1.3] = function () {
      throw Error("OrdinaryGet called");
    };

    var i = '1.3';

    try {
      tests[i]();
    } catch (e) {
      ;
    }

    delete Object.prototype[1.3];
  });
}

t5();

function t6() {
  var taProto = Object.getPrototypeOf(Uint8Array).prototype;
  var throwError = {
    configurable: true,
    get: function () {
      throw Error("OrdinaryGet called");
    }
  };
  TypedArrayCtors.forEach(function (TA) {
    var a = new TA(2);
    var props = ["-0", 0.1, "0.1", 0.000001, "0.000001", 1.1, "1.1", Infinity, "Infinity", -Infinity, "-Infinity", -1, "-1", 2, "2", 3, "3", NaN, "NaN"];

    var testProp = function (prop) {
      Object.defineProperty(taProto, prop, throwError);
      console.log(0, a[0]);
      console.log(0, a[1]);
      console.log(undefined, a[prop]);
      console.log(false, Reflect.has(a, prop));
      console.log(false, Reflect.defineProperty(a, prop, {
        value: 100,
        configurable: false,
        enumerable: true,
        writable: true
      }));
      console.log(false, Reflect.set(a, prop));
      console.log(false, Reflect.hasOwnProperty(a, prop));
      delete taProto[prop];
    };

    props.forEach(testProp);
  });
}

t6();
