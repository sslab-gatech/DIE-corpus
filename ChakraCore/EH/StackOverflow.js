// //-------------------------------------------------------------------------------------------------------
// // Copyright (C) Microsoft. All rights reserved.
// // Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
// //-------------------------------------------------------------------------------------------------------
function test1() {
  function recursive(a) {
    recursive(a + 1);
  }

  try {
    recursive(42);
  } catch (e) {
    ;
  }
}

test1();

function test2() {
  function recursive() {
    recursive();
  }

  try {
    recursive();
  } catch (e) {
    ;
  }
}

test2();

function test3() {
  var obj = {};
  var handler = {
    get: function () {
      return obj.x;
    }
  };
  obj = new Proxy(obj, handler);

  try {
    var y = obj.x;
  } catch (e) {
    ;
  }
}

test3();
