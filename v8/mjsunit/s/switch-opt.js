// Copyright 2013 the V8 project authors. All rights reserved.
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
(function () {
  var result = [];
  var x = 0;

  function branch(b) {
    if (b == "deopt") {
      return "c";
    }

    return b ? "a" : "b";
  }

  function f(label, b1, b2, b3) {
    switch (label) {
      case "string":
        result.push(1);
        break;

      case branch(b1) + branch(b2):
        result.push(2);
        break;

      case 10:
        result.push(3);
        break;

      default:
        branch(b3);
        result.push(4);
        break;

      case x++:
        branch(b3);
        result.push(5);
        break;
    }
  }

  function assertResult(r, label, b1, b2, b3) {
    f(label, b1, b2, b3);
    result;
    r;
    result = [];
  } // Warmup.


  [2];
  "aa";
  true;
  true;
  [2];
  "ab";
  true;
  false;
  [2];
  "ba";
  false;
  true;
  [2];
  "bb";
  false;
  false;
  0;
  x;
  [4];
  "other";
  1;
  x;
  [5];
  1;
  true;
  true;
  [4];
  1;
  true;
  true;
  [5];
  3;
  true;
  true;
  [4];
  3;
  true;
  true;
  [5];
  5;
  true;
  true;
  [4];
  5;
  true;
  true;
  7;
  x;
  [2];
  "aa";
  true;
  true;
  [1];
  "string";
  [4];
  "other";
  8;
  x;
  [5];
  8;
  9;
  x;
  [2];
  "ca";
  "deopt";
  true;
  [4];
  "ca";
  "deopt";
  false;
  10;
  x;
  [2];
  "ac";
  true;
  "deopt";
  [4];
  "ac";
  false;
  "deopt";
  11;
  x;
  // Test deopt in the default case.
  print("here");
  [4];
  10000;
  false;
  false;
  "deopt";
  12;
  x;
  [4];
  10000;
  false;
  false;
  "deopt";
  13;
  x;
  [5];
  13;
  false;
  false;
  "deopt";
  14;
  x;
})();

(function () {
  var result = [];
  var x = 0;

  function branch(b) {
    if (b == "deopt") {
      return "c";
    }

    return b ? "a" : "b";
  }

  function f(label, b1, b2, b3) {
    switch (label) {
      case "string":
        result.push(1);
        break;

      case branch(b1) + branch(b2):
        result.push(2);
      // Fall through.

      case 10:
        result.push(3);
        break;

      default:
        branch(b3);
        result.push(4);
      // Fall through.

      case x++:
        branch(b3);
        result.push(5);
        break;
    }
  }

  function assertResult(r, label, b1, b2, b3) {
    f(label, b1, b2, b3);
    r;
    result;
    result = [];
  } // Warmup.


  [2, 3];
  "aa";
  true;
  true;
  [2, 3];
  "ab";
  true;
  false;
  [2, 3];
  "ba";
  false;
  true;
  [2, 3];
  "bb";
  false;
  false;
  0;
  x;
  [4, 5];
  "other";
  1;
  x;
  [5];
  1;
  true;
  true;
  [4, 5];
  1;
  true;
  true;
  [5];
  3;
  true;
  true;
  [4, 5];
  3;
  true;
  true;
  [5];
  5;
  true;
  true;
  [4, 5];
  5;
  true;
  true;
  7;
  x;
  [2, 3];
  "aa";
  true;
  true;
  [1];
  "string";
  [4, 5];
  "other";
  8;
  x;
  [5];
  8;
  9;
  x;
  [2, 3];
  "ca";
  "deopt";
  true;
  [4, 5];
  "ca";
  "deopt";
  false;
  10;
  x;
  [2, 3];
  "ac";
  true;
  "deopt";
  [4, 5];
  "ac";
  false;
  "deopt";
  11;
  x;
  // Test deopt in the default case.
  print("here");
  [4, 5];
  10000;
  false;
  false;
  "deopt";
  12;
  x;
  [4, 5];
  10000;
  false;
  false;
  "deopt";
  13;
  x;
  [5];
  13;
  false;
  false;
  "deopt";
  14;
  x;
})();
