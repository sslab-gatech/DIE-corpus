//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  var c = [];
  c[0] = 1;
  c[100] = 2;
  var oNeg = {
    length: -1,
    0: 3,
    1: 4,
    [Symbol.isConcatSpreadable]: true
  };
  c = c.concat(oNeg);
  console.log(1, c[0]);
  console.log(2, c[100]);
  console.log(undefined, c[101]);
}

t1();

function t2() {
  var a = [];
  a[4294967294] = 2;
  a[4294967295] = 3;
  a[4294967296] = 4;
  var o32 = {
    length: 4294967296,
    4294967294: 2,
    4294967295: 3
  };
  var maxLength64 = Math.pow(2, 53) - 1;
  var o64 = {
    length: maxLength64,
    [maxLength64 - 2]: 2,
    [maxLength64 - 1]: 3
  };
  var oNeg = {
    length: -1,
    [-5]: 2,
    [-2]: 3
  };
  console.log(4294967294, a.indexOf(2, 4294967290));
  console.log(-1, a.indexOf(3, 4294967290));
  console.log(-1, a.indexOf(4, 4294967290));
  console.log(4294967294, Array.prototype.indexOf.call(o32, 2, 4294967290));
  console.log(4294967295, Array.prototype.indexOf.call(o32, 3, 4294967290));
  var o32 = {
    length: 4294967297,
    4294967294: 2,
    4294967295: 3,
    4294967296: 4
  };
  console.log(4294967296, Array.prototype.indexOf.call(o32, 4, 4294967290));
  console.log(maxLength64 - 2, Array.prototype.indexOf.call(o64, 2, maxLength64 - 10));
  console.log(maxLength64 - 2, Array.prototype.indexOf.call(o64, 2, maxLength64 - 10));
  console.log(maxLength64 - 1, Array.prototype.indexOf.call(o64, 3, maxLength64 - 10));
  console.log(maxLength64 - 1, Array.prototype.indexOf.call(o64, 3, maxLength64 - 10));
  console.log(-1, Array.prototype.indexOf.call(oNeg, 2)); //Note a.indexOf(2) will spin for a very long time, we should probably Consider enumerating instead of walking all indices
}

t2();

function t3() {
  var a = [];
  a[0] = 0;
  a[4294967294] = 1;
  a.reverse();
  a[4294967295] = 2;
  a[4294967296] = 3;
  console.log(1, a[0]);
  console.log(0, a[4294967294]);
  a.reverse();
  console.log(0, a[0]);
  console.log(1, a[4294967294]);
  console.log(2, a[4294967295]);
  console.log(3, a[4294967296]);
  var o32 = {
    length: -1,
    4294967294: 1,
    0: 0
  };
  Array.prototype.reverse.call(o32);
  console.log(0, o32[0]);
  console.log(1, o32[4294967294]);
  console.log(-1, o32.length); // Note it is not practical to reverse an object length 4294967295 or larger since we will hit an
  // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
  // but at the moment it is not a real world scenario.
}

t3();

function t4() {
  var a = [];
  a[0] = 0;
  a[4294967294] = 2;
  a[4294967295] = 3;
  a[4294967296] = 4;
  var o32 = {
    length: -1,
    4294967294: 1,
    0: 0
  };
  var shifted = a.shift();
  console.log(0, shifted);
  console.log(undefined, a[0]);
  console.log(undefined, a[4294967294]);
  console.log(2, a[4294967293]);
  console.log(3, a[4294967295]);
  console.log(4, a[4294967296]);
  Array.prototype.shift.call(o32);
  console.log(0, o32[0]);
  console.log(1, o32[4294967294]); // Note it is not practical to shift an object length 4294967295 or larger since we will hit an
  // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
  // but at the moment it is not a real world scenario.
}

t4();

function t5() {
  /*var o = {
  0 : 0,
  4294967294 : 2,
  4294967295 : 3,
  4294967296 : 4,
  length : 4294967297
  }//consider property enumeration*/
  var o32 = {
    length: -1,
    4294967294: 1,
    0: 0
  };
  Array.prototype.unshift.call(o32, -1);
  console.log(-1, o32[0]);
  console.log(undefined, o32[1]);
  console.log(1, o32["length"]);
  console.log(1, o32[4294967294]); // Note it is not practical to unshift an object length 4294967295 or larger since we will hit an
  // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
  // but at the moment it is not a real world scenario.
}

t5();

function t6() {
  var o = {
    0: 0,
    4294967294: 2,
    4294967295: 3,
    4294967296: 4,
    length: 4294967297
  };
  console.log(4294967297, o.length);
  Array.prototype.push.call(o, 5);
  console.log(5, o[4294967297]);
  console.log(4294967298, o.length);
  Array.prototype.push.call(o, 6, 7);
  console.log(6, o[4294967298]);
  console.log(7, o[4294967299]);
  console.log(4294967300, o.length);
}

t6();

function t7() {
  var o = {
    0: 0,
    4294967294: 2,
    4294967295: 3,
    4294967296: 4,
    length: 4294967297
  };
  var popped = Array.prototype.pop.call(o);
  console.log(4, popped);
  console.log(4294967296, o.length);
  var popped = Array.prototype.pop.call(o);
  console.log(3, popped);
  console.log(4294967295, o.length);
  var popped = Array.prototype.pop.call(o);
  console.log(2, popped);
  console.log(4294967294, o.length);
  var popped = Array.prototype.pop.call(o);
  console.log(undefined, popped);
  console.log(4294967293, o.length);
  var o32 = {
    length: -1,
    4294967294: 1,
    0: 0
  };
  var popped = Array.prototype.pop.call(o32);
  console.log(undefined, popped);
  console.log(0, o32[0]);
  console.log(1, o32[4294967294]);
  console.log(0, o32.length);
  var a = [0];
  a[4294967294] = 2;
  a[4294967295] = 3;
  a[4294967296] = 4;
  console.log(4294967295, a.length);
  var popped = a.pop();
  console.log(2, popped);
  console.log(4294967294, a.length);
}

t7();

function t8() {
  var a = [];
  a[0] = 0;
  a[4294967294 / 2] = 1;
  a[4294967294] = 2;
  a[4294967295] = 3;
  a[4294967296] = 4;
  var o32 = {
    length: 4294967296,
    4294967294: 2,
    4294967295: 3
  };
  var oNeg = {
    length: -1,
    [-5]: 2,
    [-2]: 3
  };
  var aCopy = a.slice();
  var aFront = a.slice(0, 4294967294 / 2 + 1);
  var aBack = a.slice(4294967294 / 2, 4294967295);
  console.log(a[0], aCopy[0]);
  console.log(a[4294967294 / 2], aCopy[4294967294 / 2]);
  console.log(a[4294967294], aCopy[4294967294]);
  console.log(undefined, aCopy[4294967295]);
  console.log(undefined, aCopy[4294967296]);
  console.log(a[0], aFront[0]);
  console.log(a[4294967294 / 2], aFront[4294967294 / 2]);
  console.log(a[4294967294 / 2], aBack[0]);
  console.log(a[4294967294], aBack[4294967294 / 2]);

  try {
    Array.prototype.slice.call(o32);
  } catch (e) {
    ;
  }

  console.log([], Array.prototype.slice.call(oNeg)); // If we change the Array species it does not throw but its to slow to test

  /*
  class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Object; }
  }
  var myArr = new MyArray();
  myArr[0] = 0;
  myArr[4294967294] = 1;
  myArr[4294967295] = 2;
  Array.prototype.slice.call(myArr);*/
}

t8();

function t9() {
  var a = [];
  a[0] = 0;
  a[4294967294 / 2] = 1;
  a[4294967294] = 2;
  a[4294967295] = 3;

  function isEven(element, index, array) {
    return element % 2 == 0;
  } //a.every(isEven); // Note perf issue: spec says callback is invoked only for indexes of the array which have
  // assigned values; it is not invoked for indexes which have been deleted or
  // which have never been assigned values.
  // Sounds like we should do some kind of sparse array optimization or
  // enumerating instead of walking all indices


  var oNeg = {
    length: -1,
    [-5]: 2,
    [-2]: 3
  };
  console.log(true, Array.prototype.every.call(oNeg, isEven)); // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
}

t9();

function t10() {
  var a = [];
  a[0] = 1;
  a[4294967294 / 2] = 1;
  a[4294967294] = 2;
  a[4294967295] = 3;

  function isEven(element, index, array) {
    return element % 2 == 0;
  } //a.some(isEven); // same issue as Map, ForEach, Filter, & Every
  // not as bad as Array.prototype.every because we can quit as soon as we find a true case


  var oNeg = {
    length: -1,
    [-5]: 2,
    [-2]: 3
  };
  console.log(false, Array.prototype.some.call(oNeg, isEven)); // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
}

t10();

function t11() {
  var a = [];
  a[0] = 1;
  a[4294967294 / 2] = 2;
  a[4294967294] = 3;
  a[4294967295] = 4;
  var sum = 0;

  function summation(element, index, array) {
    sum += element;
  } //a.forEach(summation); // same issue as Map, Filter, Some, & Every
  //assert.areEqual(6,sum);


  sum = 0;
  var oNeg = {
    length: -1,
    [-5]: 2,
    [-2]: 3
  };
  Array.prototype.forEach.call(oNeg, summation);
  console.log(0, sum); // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
}

t11();

function t12() {
  var a = [];
  a[0] = 1;
  a[4294967294 / 2] = 4;
  a[4294967294] = 9;
  a[4294967295] = 16; //var b = a.map(Math.sqrt); // same issue as ForEach, Some, & Every

  var oNeg = {
    length: -1,
    [-5]: 2,
    [-2]: 3
  };
  console.log([], Array.prototype.map.call(oNeg, Math.sqrt));
  var o32 = {
    length: 4294967296,
    4294967294: 4,
    4294967295: 9
  };

  try {
    Array.prototype.map.call(o32, Math.sqrt);
  } catch (e) {
    ;
  } // If we change the Array species it does not throw but its to slow to test

  /*class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Object; }
  }
  var myArr = new MyArray();
  myArr[0] = 0;
  myArr[4294967294] = 1;
  myArr[4294967295] = 2;
  Array.prototype.map.call(myArr, Math.sqrt);*/

}

t12();

function t13() {
  var a = [];
  a[0] = 1;
  a[4294967294 / 2] = 4;
  a[4294967294] = 9;
  a[4294967295] = 16;

  function biggerThanFive(element) {
    return element > 5;
  } //a.filter(biggerThanFive); // same issue as Map, ForEach, Some, & Every


  var oNeg = {
    length: -1,
    [-5]: 2,
    [-2]: 3
  };
  console.log([], Array.prototype.filter.call(oNeg, biggerThanFive));
}

t13();

function t14() {
  var a = [];
  a[0] = 1;
  a[4294967294 / 2] = 2;
  a[4294967294] = 3;
  a[4294967295] = 4;

  var sum = function (a, b) {
    return a + b;
  }; // a.reduce(sum); // same issue as Map, ForEach, Filter, Some, & Every


  var oNeg = {
    length: -1,
    [-5]: 2,
    [-2]: 3
  };

  try {
    Array.prototype.reduce.call(oNeg, sum);
  } catch (e) {
    ;
  }
}

t14();

function t15() {
  var a = [];
  a[0] = 1;
  a[4294967294 / 2] = 2;
  a[4294967294] = 3;
  a[4294967295] = 4;

  var sum = function (a, b) {
    return a + b;
  }; // a.reduceRight(sum); // same issue as Reduce, Map, ForEach, Filter, Some, & Every


  var oNeg = {
    length: -1,
    [-5]: 2,
    [-2]: 3
  };

  try {
    Array.prototype.reduceRight.call(oNeg, sum);
  } catch (e) {
    ;
  }
}

t15();
