//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  try {
    String.prototype.valueOf();
  } catch (e) {
    if (e instanceof TypeError && e.message === "String.prototype.valueOf: 'this' is not a String object") {
      console.log(true);
    }

    console.log(true);
  }
}

t1();

function t2() {
  try {
    Boolean.prototype.valueOf();
  } catch (e) {
    if (e instanceof TypeError && e.message === "Boolean.prototype.valueOf: 'this' is not a Boolean object") {
      console.log(true);
    }

    console.log(true);
  }
}

t2();

function t3() {
  try {
    Number.prototype.valueOf();
  } catch (e) {
    if (e instanceof TypeError && e.message === "Number.prototype.valueOf: 'this' is not a Number object") {
      console.log(true);
    }

    console.log(true);
  }
}

t3();
