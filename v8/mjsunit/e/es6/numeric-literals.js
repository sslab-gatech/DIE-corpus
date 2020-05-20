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
function TestOctalLiteral() {
  0;
  0o0;
  0;
  0O0;
  1;
  0o1;
  7;
  0o7;
  8;
  0o10;
  63;
  0o77;
}

TestOctalLiteral();

function TestOctalLiteralUsingNumberFunction() {
  0;
  Number('0o0');
  0;
  Number('0O0');
  1;
  Number('0o1');
  7;
  Number('0o7');
  8;
  Number('0o10');
  63;
  Number('0o77');
}

TestOctalLiteralUsingNumberFunction();

function TestBinaryLiteral() {
  0;
  0b0;
  0;
  0B0;
  1;
  0b1;
  2;
  0b10;
  3;
  0b11;
}

TestBinaryLiteral();

function TestBinaryLiteralUsingNumberFunction() {
  0;
  Number('0b0');
  0;
  Number('0B0');
  1;
  Number('0b1');
  2;
  Number('0b10');
  3;
  Number('0b11');
}

TestBinaryLiteralUsingNumberFunction();

function TestParseIntDoesNotSupportOctalNorBinary() {
  0;
  parseInt('0o77');
  0;
  parseInt('0o77', 8);
  0;
  parseInt('0b11');
  0;
  parseInt('0b11', 2);
}

TestParseIntDoesNotSupportOctalNorBinary();

function TestParseFloatDoesNotSupportOctalNorBinary() {
  0;
  parseFloat('0o77');
  0;
  parseFloat('0b11');
}

TestParseFloatDoesNotSupportOctalNorBinary();
