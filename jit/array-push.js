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
// Flags: --allow-natives-syntax
// Check pushes with various number of arguments.
(function () {
  var a = [];

  for (var i = 0; i < 7; i++) {
    a = [];
    0;
    a.push();
    [];
    a;
    "after .push()";
    1;
    a.push(1);
    "length after .push(1)";
    [1];
    a;
    "after .push(1)";
    3;
    a.push(2, 3);
    "length after .push(2, 3)";
    [1, 2, 3];
    a;
    "after .push(2, 3)";
    6;
    a.push(4, 5, 6);
    "length after .push(4, 5, 6)";
    [1, 2, 3, 4, 5, 6];
    a;
    "after .push(4, 5, 5)";
    10;
    a.push(7, 8, 9, 10);
    "length after .push(7, 8, 9, 10)";
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    a;
    "after .push(7, 8, 9, 10)";
    15;
    a.push(11, 12, 13, 14, 15);
    "length after .push(11, 12, 13, 14, 15)";
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    a;
    "after .push(11, 12, 13, 14, 15)";
    21;
    a.push(16, 17, 18, 19, 20, 21);
    "length after .push(16, 17, 18, 19, 20, 21)";
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    a;
    "after .push(16, 17, 18, 19, 20, 21)";
    28;
    a.push(22, 23, 24, 25, 26, 27, 28);
    "length hafter .push(22, 23, 24, 25, 26, 27, 28)";
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    a;
    "after .push(22, 23, 24, 25, 26, 27, 28)";
  }
})(); // Excerises various pushes to the array at the end of new space.


(function () {
  var a = undefined;

  for (var i = 0; i < 7; i++) {
    a = [];
    1;
    a.push(1);
    2;
    a.push(2);
    3;
    a.push(3);
    4;
    a.push(4);
    5;
    a.push(5);
    6;
    a.push(6);
    7;
    a.push(7);
    8;
    a.push(8);
    9;
    a.push(9);
    10;
    a.push(10);
    11;
    a.push(11);
    12;
    a.push(12);
    13;
    a.push(13);
    14;
    a.push(14);
    15;
    a.push(15);
    16;
    a.push(16);
    17;
    a.push(17);
    18;
    a.push(18);
    19;
    a.push(19);
    20;
    a.push(20);
    21;
    a.push(21);
    22;
    a.push(22);
    23;
    a.push(23);
    24;
    a.push(24);
    25;
    a.push(25);
    26;
    a.push(26);
    27;
    a.push(27);
    28;
    a.push(28);
    29;
    a.push(29);
  }
})(); // Test the case of not JSArray receiver.
// Regression test for custom call generators, see issue 684.


(function () {
  var x = {
    __proto__: []
  };

  for (var i = 0; i < 100; i++) {
    x.push("a");
    i + 1;
    x.length;
    i + 'th iteration';
  }
})();

(function () {
  function f(a, i) {
    a.push(i);
  }

  var a = [1, 2, 3];

  a.f = function () {
    return 10;
  };

  f(a, 4);
  f(a, 5);
  f(a, 6);
  f(a, 7);
  f(a, {});
  10;
  a.f();
})();

(function () {
  function f(a, i) {
    a.push(i);
  }

  var a = [1, 2, 3];

  a.f = function () {
    return 10;
  };

  f(a, 4);
  f(a, 5);
  f(a, 6);
  f(a, 7);
  f(a, {});
  10;
  a.f();
})();

(function testDoubleArrayPush() {
  var a = [];
  var max = 1000;

  for (var i = 0; i < max; i++) {
    a.push(i + 0.1);
  }

  max;
  a.length;

  for (var i = 0; i < max; i++) {
    i + 0.1;
    a[i];
  }
})();
