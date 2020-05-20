//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function makeProperty(obj, prop) {
  Object.defineProperty(obj, prop, {
    configurable: false,
    writable: true,
    value: 'basic'
  });
}

function test1() {
  var obj = {
    length: 4
  };
  makeProperty(obj, '3');

  try {
    Array.prototype.copyWithin.call(obj, 3, 0);
  } catch (e) {
    ;
  }
}

test1();

function test2() {
  var ta = Int8Array.of(0, 1, 2); // Array's implementation of copyWithin uses 'length' property to determine the source items
  // to copy and it would attempt to delete the target items if the source items are missing,
  // which is not supported by TypedArrays.

  Object.defineProperty(ta, "length", {
    value: 4
  });

  try {
    Array.prototype.copyWithin.call(ta, 1, 2);
  } catch (e) {
    ;
  }
}

test2();

function test3() {
  var obj = {
    length: 4
  };
  makeProperty(obj, '3');

  try {
    Array.prototype.pop.call(obj);
  } catch (e) {
    ;
  }
}

test3();

function test4() {
  var obj = {
    length: 4
  };
  makeProperty(obj, '3');

  try {
    Array.prototype.shift.call(obj);
  } catch (e) {
    ;
  }
}

test4();

function test5() {
  var obj = {
    length: 4
  };
  makeProperty(obj, '3');

  try {
    Array.prototype.reverse.call(obj);
  } catch (e) {
    ;
  }
}

test5();
