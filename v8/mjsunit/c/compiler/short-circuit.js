// Copyright 2009 the V8 project authors. All rights reserved.
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
// Test some expression contexts involving short-circuit boolean
// operations that did not otherwise have test coverage.
var x = 42; // Literals in value/test context.

x;

(function () {
  return 0 || x;
})();

1;

(function () {
  return 1 || x;
})();

0;

(function () {
  return 0 && x;
})();

x;

(function () {
  return 1 && x;
})();

x;

(function (y) {
  return y++ || x;
})(0);

1;

(function (y) {
  return y++ || x;
})(1);

0;

(function (y) {
  return y++ && x;
})(0);

x;

(function (y) {
  return y++ && x;
})(1);

0;
(function () {
  return {
    x: 0
  };
})().x;
0;
(function () {
  return {
    x: 0
  } || this;
})().x;
x;
(function () {
  return {
    x: 0
  } && this;
})().x;
0;
(function () {
  return [0, 1] || new Array(x, 1);
})()[0];
x;
(function () {
  return [0, 1] && new Array(x, 1);
})()[0];
x;

(function (y) {
  return (y = 0) || x;
})("?");

1;

(function (y) {
  return (y = 1) || x;
})("?");

0;

(function (y) {
  return (y = 0) && x;
})("?");

x;

(function (y) {
  return (y = 1) && x;
})("?");

void 0;

(function () {
  return void x;
})();

x;

(function () {
  return void x || x;
})();

void 0;

(function () {
  return void x && x;
})();

false;

(function () {
  return !x;
})();

true;

(function (y) {
  return !y || x;
})(0);

x;

(function (y) {
  return !y || x;
})(1);

x;

(function (y) {
  return !y && x;
})(0);

false;

(function (y) {
  return !y && x;
})(1);

false;

(function () {
  return x < x;
})();

x;

(function () {
  return x < x || x;
})();

true;

(function () {
  return x <= x || x;
})();

false;

(function () {
  return x < x && x;
})();

x;

(function () {
  return x <= x && x;
})();
