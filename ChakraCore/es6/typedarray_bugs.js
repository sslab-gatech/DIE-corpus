//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  var a = new Int8Array(2);
  var speciesCalled = false;
  Object.defineProperty(a.constructor, Symbol.species, {
    get: function () {
      speciesCalled = true;
      return Int8Array;
    }
  });

  function mapFn() {
    throw new Error('Error from mapFn');
  }

  try {
    a.filter(mapFn);
  } catch (e) {
    ;
  }

  console.log(speciesCalled, 'species should not be called as the mapFn throws error');
}

t1();

function t2() {
  var count = 0;
  var obj = {
    toString: function () {
      count++;
      return ',';
    }
  };
  var a = new Int8Array();
  a.join(obj);
  console.log(count, 1);
  count = 0;
  a = new Int8Array(1);
  a.join(obj);
  console.log(count, 1);
}

t2();

function t3() {
  var a = new Int8Array([11, 22]);
  var ret = a.join(undefined);
  console.log(ret, "11,22");
}

t3();

function t4() {
  function test(fn) {
    var name = fn.name;

    try {
      fn();
    } catch (e) {
      ;
    }

    try {
      fn.call();
    } catch (e) {
      ;
    }

    try {
      fn.call({});
    } catch (e) {
      ;
    }

    try {
      fn.call(new ArrayBuffer(1));
    } catch (e) {
      ;
    }
  }

  test(Int8Array.prototype.keys);
  test(Int8Array.prototype.values);
  test(Int8Array.prototype.entries);
}

t4();

function t5() {
  var v = new Int8Array(4);

  try {
    v.set([1], -1);
  } catch (e) {
    ;
  }

  try {
    v.set([1], -1.001);
  } catch (e) {
    ;
  }

  try {
    v.set([1], -Infinity);
  } catch (e) {
    ;
  }

  try {
    v.set([1], v.length);
  } catch (e) {
    ;
  }

  try {
    v.set([1], Infinity);
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var v = new Int8Array([11, 22]);
  console.log(v.subarray(-Infinity), [11, 22]);
  console.log(v.subarray(Infinity), []);
  console.log(v.subarray(0, -Infinity), []);
  console.log(v.subarray(0, Infinity), [11, 22]);
}

t6();

function t7() {
  [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array].forEach(function (ctor) {
    var base = new ctor(8); // This should invoke the TypedArraySpeciesCreate and this will create new typedarray object with same prototype

    var test = base.subarray(0, 1);
    console.log(Object.getPrototypeOf(base), Object.getPrototypeOf(test));
  });
}

t7();

function t8() {
  var a = new Int8Array(4);
  Object.defineProperty(a, 'length', {
    value: 10
  });
  var b = a.keys();
  var counter = 0;

  for (var i of b) {
    counter++;
  }

  console.log(counter, 4);
}

t8();
