//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  console.log(8, 2 ** 3);
  console.log(Math.pow(-2, -4), (-2) ** -4);
  console.log(Math.pow(-0, -4), (-0) ** -4);
  console.log(Math.pow(4, 0), 4 ** -0);
  console.log(Math.pow(0, -0), 0 ** -0);
  console.log(Math.pow(Infinity, 0), Infinity ** 0);
  console.log(Math.pow(Infinity, -Infinity), Infinity ** -Infinity);
  console.log(Math.pow(NaN, 2), NaN ** 2);
  console.log(Math.pow(3.4, 2.2), 3.4 ** 2.2);
  console.log(Math.pow({}, 2.2), {} ** 2.2);
}

t1();

function t2() {
  console.log(Math.pow(2, Math.pow(3, 2)), 2 ** 3 ** 2);
}

t2();

function t3() {
  var a = 2;
  a **= 4;
  console.log(Math.pow(2, 4), a);
  var b = -2;
  b **= -4;
  console.log(Math.pow(-2, -4), b);
  var c = -3;
  var d = 0;
  d = ++c ** 3;
  console.log(Math.pow(-2, 3), d);
  c = -3;
  d = --c ** 3;
  console.log(Math.pow(-4, 3), d);
  c = -3;
  d = c++ ** 3;
  console.log(Math.pow(-3, 3), d);
  c = -3;
  d = 2 ** ++c;
  console.log(Math.pow(2, -2), d);
  c = -3;
  d = 2 ** c++;
  console.log(Math.pow(2, -3), d);
}

t3();

function t4() {
  console.log(2 * 3 ** 4, 2 * 3 ** 4);
  console.log(2 * 3 ** 4 * 5, 2 * 3 ** 4 * 5);
  console.log(2 + 3 ** 2, 2 + 3 ** 2);
}

t4();

function t6() {
  Number.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < this; ++i) {
      yield i;
    }
  };

  console.log("0,1,2,3,4,5,6,7", [...(2 ** 3)].toString());
  Number.prototype[Symbol.iterator] = null;
}

t6();
