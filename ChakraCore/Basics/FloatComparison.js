//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// This tests the fast path for cmxx where either src is type specialized to float
function test1() {
  print(NaN !== NaN);
  print(NaN !== 0.5);
  print(0.5 !== NaN);
  print(NaN != NaN);
  print(NaN != 0.5);
  print(0.5 != NaN);
  print(NaN === NaN);
  print(NaN === 0.5);
  print(0.5 === NaN);
  print(NaN == NaN);
  print(NaN == 0.5);
  print(0.5 == NaN);
  print(NaN > 0.5);
  print(NaN >= 0.5);
  print(NaN < 0.5);
  print(NaN <= 0.5);
}

test1();

function test2() {
  print('0.5' == 0.5);
  print('0.5' === 0.5);
  print('NaN' == NaN);
  print('NaN' != NaN);
}

test2();

function test3() {
  print(5 == 0.5);
  print(5 != 0.5);
  print(5 === 0.5);
  print(5 !== 0.5);
}

test3();

function test4() {
  print({} == 0.5);
  print({} === 0.5);
  print({} != 0.5);
  print({} !== 0.5);
  print({} > 0.5);
  print({} >= 0.5);
  print({} < 0.5);
  print({} <= 0.5);
}

test4();

function test5() {
  function test0() {
    var func2 = function () {
      return f32[1];
    };

    var f32 = new Float32Array();
    var f = 100;

    for (let i = 0; i < f; i++) {
      var id41 = 'caller';
      ({
        18: func2() === 'caller'
      });
    }
  }

  test0();
}

test5();
