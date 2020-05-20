// Copyright 2010 the V8 project authors. All rights reserved.
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
// Check that shifting array of holes keeps it as array of holes
(function () {
  var array = new Array(10);
  array.shift();
  0 in array;
})(); // Now check the case with array of holes and some elements on prototype.


(function () {
  var len = 9;
  var array = new Array(len);
  Array.prototype[3] = "@3";
  Array.prototype[7] = "@7";
  len;
  array.length;

  for (var i = 0; i < array.length; i++) {
    array[i];
    Array.prototype[i];
  }

  array.shift();
  len - 1;
  array.length;
  array[2];
  Array.prototype[3];
  array.hasOwnProperty(2);
  array[6];
  Array.prototype[7];
  array.hasOwnProperty(6);
  // ... but keeps the rest as holes:
  Array.prototype[5] = "@5";
  array[5];
  Array.prototype[5];
  array.hasOwnProperty(5);
  array[3];
  Array.prototype[3];
  array.hasOwnProperty(3);
  array[7];
  Array.prototype[7];
  array.hasOwnProperty(7);
  delete Array.prototype[3];
  delete Array.prototype[5];
  delete Array.prototype[7];
})(); // Now check the case with array of holes and some elements on prototype
// which is an array itself.


(function () {
  var len = 9;
  var array = new Array(len);
  var array_proto = new Array();
  array_proto[3] = "@3";
  array_proto[7] = "@7";
  array.__proto__ = array_proto;
  len;
  array.length;

  for (var i = 0; i < array.length; i++) {
    array[i];
    array_proto[i];
  }

  array.shift();
  len - 1;
  array.length;
  array[2];
  array_proto[3];
  array.hasOwnProperty(2);
  array[6];
  array_proto[7];
  array.hasOwnProperty(6);
  // ... but keeps the rest as holes:
  array_proto[5] = "@5";
  array[5];
  array_proto[5];
  array.hasOwnProperty(5);
  array[3];
  array_proto[3];
  array.hasOwnProperty(3);
  array[7];
  array_proto[7];
  array.hasOwnProperty(7);
})(); // Check that non-enumerable elements are treated appropriately


(function () {
  var array = [1, 2, 3];
  Object.defineProperty(array, '1', {
    enumerable: false
  });
  1;
  array.shift();
  [2, 3];
  array;
  array = [1,, 3];
  array.__proto__[1] = 2;
  Object.defineProperty(array.__proto__, '1', {
    enumerable: false
  });
  1;
  array.shift();
  [2, 3];
  array;
})();
