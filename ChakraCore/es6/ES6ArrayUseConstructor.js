//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Array builtins using this['constructor'] property to construct their return values
function test1() {
  var arr = ['a', 'b', 'c'];
  arr['constructor'] = Number;
  var out = Array.prototype.concat.call(arr, [1, 2, 3]);
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(['a', 'b', 'c', 1, 2, 3], out);
  console.log(6, out.length);
}

test1();

function test2() {
  var arr = ['a', 'b', 'c'];
  arr['constructor'] = Number;
  var out = Array.prototype.filter.call(arr, function () {
    return true;
  });
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
}

test2();

function test3() {
  var arr = ['a', 'b', 'c'];
  arr['constructor'] = Number;
  var out = Array.prototype.map.call(arr, function (val) {
    return val;
  });
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
}

test3();

function test4() {
  var arr = ['a', 'b', 'c'];
  arr['constructor'] = Number;
  var out = Array.prototype.slice.call(arr);
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
}

test4();

function test5() {
  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  arr['constructor'] = Number;
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
}

test5();

function test6() {
  var arr = [1, 2, 3, 4, 5, 6];
  arr['constructor'] = Array;
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(out instanceof Array);
  console.log([1, 2, 3], out);
  console.log(3, out.length);
}

test6();

function test7() {
  var arr = [1, 2, 3, 4, 5, 6];
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(out instanceof Array);
  console.log([1, 2, 3], out);
  console.log(3, out.length);
}

test7();

function test8() {
  var arr = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    'length': 6
  };
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(out instanceof Array);
  console.log([1, 2, 3], out);
  console.log(3, out.length);
}

test8();

function test9() {
  var arr = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    'length': 6
  };
  arr['constructor'] = Number;
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(out instanceof Array);
  console.log([1, 2, 3], out);
  console.log(3, out.length);
}

test9();

function test10() {
  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  arr['constructor'] = null;

  try {
    Array.prototype.splice.call(arr, 0, 3);
  } catch (e) {
    ;
  }

  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  Object.defineProperty(arr, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: null
  });

  try {
    Array.prototype.splice.call(arr, 0, 3);
  } catch (e) {
    ;
  }

  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  arr['constructor'] = undefined;
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

  arr['constructor'] = function () {
    ;
  };

  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
  var builtinArraySpeciesDesc = Object.getOwnPropertyDescriptor(Array, Symbol.species);
  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Object
  });
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log({
    '0': 'a',
    '1': 'b',
    '2': 'c',
    "length": 3
  }, out);
  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: null
  });
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
  Object.defineProperty(Array, Symbol.species, builtinArraySpeciesDesc);
  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
}

test10();

function test11() {
  var arr = [1, 2, 3, 4, 5, 6];
  arr['constructor'] = null;

  try {
    Array.prototype.splice.call(arr, 0, 3);
  } catch (e) {
    ;
  }

  var arr = [1, 2, 3, 4, 5, 6];
  Object.defineProperty(arr, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: null
  });

  try {
    Array.prototype.splice.call(arr, 0, 3);
  } catch (e) {
    ;
  }

  var arr = [1, 2, 3, 4, 5, 6];
  arr['constructor'] = undefined;
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log([1, 2, 3], out);
  console.log(3, out.length);
  var arr = [1, 2, 3, 4, 5, 6];

  arr['constructor'] = function () {
    ;
  };

  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log([1, 2, 3], out);
  console.log(3, out.length);
  var builtinArraySpeciesDesc = Object.getOwnPropertyDescriptor(Array, Symbol.species);
  var arr = [1, 2, 3, 4, 5, 6];
  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Object
  });
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log({
    '0': 1,
    '1': 2,
    '2': 3,
    "length": 3
  }, out);
  var arr = [1, 2, 3, 4, 5, 6];
  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: null
  });
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log([1, 2, 3], out);
  console.log(3, out.length);
  Object.defineProperty(Array, Symbol.species, builtinArraySpeciesDesc);
  var arr = [1, 2, 3, 4, 5, 6];
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log([1, 2, 3], out);
  console.log(3, out.length);
}

test11();

function test12() {
  var f = function (val) {
    return val;
  };

  var arr = ['a', 'b', 'c'];
  arr['constructor'] = null;

  try {
    Array.prototype.map.call(arr, f);
  } catch (e) {
    ;
  }

  var arr = ['a', 'b', 'c'];
  Object.defineProperty(arr, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: null
  });

  try {
    Array.prototype.map.call(arr, f);
  } catch (e) {
    ;
  }

  var arr = ['a', 'b', 'c'];
  arr['constructor'] = undefined;
  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
  var arr = ['a', 'b', 'c'];

  arr['constructor'] = function () {
    ;
  };

  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
  var builtinArraySpeciesDesc = Object.getOwnPropertyDescriptor(Array, Symbol.species);
  var arr = ['a', 'b', 'c'];
  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Object
  });
  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log({
    '0': 'a',
    '1': 'b',
    '2': 'c'
  }, out);
  var arr = ['a', 'b', 'c'];
  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: null
  });
  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
  Object.defineProperty(Array, Symbol.species, builtinArraySpeciesDesc);
  var arr = ['a', 'b', 'c'];
  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log(['a', 'b', 'c'], out);
  console.log(3, out.length);
}

test12();

function test13() {
  var f = function (val) {
    return val;
  };

  var arr = [1, 2, 3];
  arr['constructor'] = null;

  try {
    Array.prototype.map.call(arr, f);
  } catch (e) {
    ;
  }

  var arr = [1, 2, 3];
  Object.defineProperty(arr, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: null
  });

  try {
    Array.prototype.map.call(arr, f);
  } catch (e) {
    ;
  }

  var arr = [1, 2, 3];
  arr['constructor'] = undefined;
  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log([1, 2, 3], out);
  console.log(3, out.length);
  var arr = [1, 2, 3];

  arr['constructor'] = function () {
    ;
  };

  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log([1, 2, 3], out);
  console.log(3, out.length);
  var builtinArraySpeciesDesc = Object.getOwnPropertyDescriptor(Array, Symbol.species);
  var arr = [1, 2, 3];
  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Object
  });
  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log({
    '0': 1,
    '1': 2,
    '2': 3
  }, out);
  var arr = [1, 2, 3];
  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: null
  });
  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log([1, 2, 3], out);
  console.log(3, out.length);
  Object.defineProperty(Array, Symbol.species, builtinArraySpeciesDesc);
  var arr = [1, 2, 3];
  var out = Array.prototype.map.call(arr, f);
  console.log(Array.isArray(out));
  console.log([1, 2, 3], out);
  console.log(3, out.length);
}

test13();

function test14() {
  var arr = ['a', 'b', 'c'];
  Object.defineProperty(arr, "3", {
    get: function () {
      return 0xff;
    },
    set: function () {
      ;
    }
  }); //Create an ES5 array

  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Object
  });
  var out = Array.prototype.filter.call(arr, function () {
    return true;
  });
  console.log(Array.isArray(out));
  console.log('a', out[0]);
  console.log(255, out[3]);
}

test14();
