//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function testGen(func, values, count) {
  const gen = func();
  let counter = 0;

  for (const value of gen) {
    console.log(value == values[counter]);
    ++counter;
  }

  console.log(counter, count);
}

function t1() {
  const arr = [0, 1, 2, 5];

  for (var a = () => {
    return "a";
  } in {}) {
    ;
  }

  console.log(a());

  for (var a = () => {
    return "a";
  } in arr) {
    ;
  }

  console.log(a == 3);
}

t1();

function t3() {
  function* gen1() {
    for (var a = yield 'a' in {
      b: 1
    }) {
      console.log(a);
    }
  }

  testGen(gen1, ["a"], 1);

  function* gen2() {
    for (var a = yield in {
      c: 1
    }) {
      console.log(a);
    }
  }

  testGen(gen2, [undefined], 1);

  function* gen3() {
    for (var a = yield 'd' in {} in {
      a: 1
    }) {
      console.log(false);
    }
  }

  testGen(gen3, ['d'], 1);
}

t3();
