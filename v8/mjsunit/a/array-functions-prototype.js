// Copyright 2008 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// This file contains a number of tests of array functions and their
// interaction with properties in the prototype chain.
//
// The behavior of SpiderMonkey is slightly different for arrays (see
// below).  Our behavior is consistent and matches the bahavior of
// KJS.
var proto = {
  length: 3,
  0: 'zero',
  1: 'one',
  2: 'two'
};

function constructor() {
  ;
}

;
constructor.prototype = proto; // Set elements on the array prototype.

Array.prototype[0] = 'zero';
Array.prototype[1] = 'one';
Array.prototype[2] = 'two'; // ----------------------------------------------------------------------
// Helper functions.
// ----------------------------------------------------------------------

function assertHasOwnProperties(object, limit) {
  for (var i = 0; i < limit; i++) {
    object.hasOwnProperty(i);
  }
} // ----------------------------------------------------------------------
// shift.
// ----------------------------------------------------------------------


function runTest1() {
  var nonArray = new constructor();
  var array = ['zero',, 'two']; // Shift away the zero.

  'zero';
  array.shift();
  'zero';
  Array.prototype.shift.call(nonArray);
  2;
  array.length;
  2;
  nonArray.length;
  array;
  2;
  nonArray;
  2;
  'one';
  array[0];
  'one';
  nonArray[0];
  'two';
  array[1];
  'two';
  nonArray[1];
  'two';
  array[2];
  'two';
  nonArray[2];
}

runTest1(); // ----------------------------------------------------------------------
// unshift.
// ----------------------------------------------------------------------

runTest2 = function () {
  var nonArray = new constructor();
  var array = ['zero',, 'two']; // Unshift a new 'zero'.

  4;
  array.unshift('zero');
  4;
  Array.prototype.unshift.call(nonArray, 'zero');
  4;
  array.length;
  4;
  nonArray.length;
  array;
  4;
  nonArray;
  4;
  'zero';
  array[0];
  'zero';
  nonArray[0];
  'zero';
  array[1];
  'zero';
  nonArray[1];
  'one';
  array[2];
  'one';
  nonArray[2];
  'two';
  array[3];
  'two';
  nonArray[3];
};

runTest2(); // ----------------------------------------------------------------------
// splice
// ----------------------------------------------------------------------

runTest3 = function () {
  var nonArray = new constructor();
  var array = ['zero',, 'two']; // Delete the first element by splicing in nothing.

  ['zero'];
  array.splice(0, 1);
  ['zero'];
  Array.prototype.splice.call(nonArray, 0, 1);
  2;
  array.length;
  2;
  nonArray.length;
  array;
  2;
  nonArray;
  2;
  'one';
  array[0];
  'one';
  nonArray[0];
  'two';
  array[1];
  'two';
  nonArray[1];
  'two';
  array[2];
  'two';
  nonArray[2];
};

runTest3(); // ----------------------------------------------------------------------
// slice
// ----------------------------------------------------------------------

runTest4 = function () {
  var nonArray = new constructor();
  var array = ['zero',, 'two']; // Again Spidermonkey is inconsistent.  (array.slice(0, 3))[1] is
  // undefined instead of 'one'.

  ['zero', 'one', 'two'];
  array.slice(0, 3);
  ['zero', 'one', 'two'];
  Array.prototype.slice.call(nonArray, 0, 3);
};

runTest4();
