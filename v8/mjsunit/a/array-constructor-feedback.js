// Copyright 2012 the V8 project authors. All rights reserved.
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
// Flags: --allow-natives-syntax --expose-gc --no-always-opt --opt
// Test element kind of objects.
var elements_kind = {
  fast_smi_only: 'fast smi only elements',
  fast: 'fast elements',
  fast_double: 'fast double elements',
  dictionary: 'dictionary elements',
  external_byte: 'external byte elements',
  external_unsigned_byte: 'external unsigned byte elements',
  external_short: 'external short elements',
  external_unsigned_short: 'external unsigned short elements',
  external_int: 'external int elements',
  external_unsigned_int: 'external unsigned int elements',
  external_float: 'external float elements',
  external_double: 'external double elements',
  external_pixel: 'external pixel elements'
};

function getKind(obj) {
  ;
}

function isHoley(obj) {
  return false;
}

function assertKind(expected, obj, name_opt) {
  expected;
  getKind(obj);
  name_opt;
} // Test: ensure that crankshafted array constructor sites are deopted
// if another function is used.


(function () {
  function bar0(t) {
    return new t();
  }

  a = bar0(Array);
  a[0] = 3.5;
  b = bar0(Array);
  elements_kind.fast_double;
  b;
  b = bar0(Array);
  elements_kind.fast_double;
  b;
  bar0();
  // bar0 should deopt
  b = bar0(Object);
  bar0();
  // When it's re-optimized, we should call through the full stub
  bar0(Array);
  b = bar0(Array); // We also lost our ability to record kind feedback, as the site
  // is megamorphic now.

  elements_kind.fast_smi_only;
  b;
  bar0();
  b[0] = 3.5;
  c = bar0(Array);
  elements_kind.fast_smi_only;
  c;
})(); // Test: Ensure that inlined array calls in crankshaft learn from deopts
// based on the move to a dictionary for the array.


(function () {
  function bar(len) {
    return new Array(len);
  }

  a = bar(10);
  a[0] = "a string";
  a = bar(10);
  elements_kind.fast;
  a;
  a = bar(10);
  elements_kind.fast;
  a;
  bar();
  bar(10000);
  bar();

  function barn(one, two, three) {
    return new Array(one, two, three);
  }

  a = barn(1, 2, 3);
  a[1] = "a string";
  a = barn(1, 2, 3);
  elements_kind.fast;
  a;
  a = barn(1, 2, 3);
  elements_kind.fast;
  a;
  barn();
  a = barn(1, "oops", 3);
  barn();
})(); // Test: When a method with array constructor is crankshafted, the type
// feedback for elements kind is baked in. Verify that transitions don't
// change it anymore


(function () {
  function bar() {
    return new Array();
  }

  a = bar();
  bar();
  b = bar();
  bar();
  b[0] = 3.5;
  c = bar();
  elements_kind.fast_smi_only;
  c;
  bar();
})(); // Test: create arrays in two contexts, verifying that the correct
// map for Array in that context will be used.


(function () {
  function bar() {
    return new Array();
  }

  bar();
  bar();
  a = bar();
  a instanceof Array;
})(); // Test: create array with packed feedback, then optimize function, which
// should deal with arguments that create holey arrays.


(function () {
  function bar(len) {
    return new Array(len);
  }

  bar(0);
  bar(0);
  a = bar(0);
  bar();
  isHoley(a);
  a = bar(1); // ouch!

  bar();
  isHoley(a);
  a = bar(100);
  isHoley(a);
  a = bar(0);
  bar();
  isHoley(a);
})(); // Test: Make sure that crankshaft continues with feedback for large arrays.


(function () {
  function bar(len) {
    return new Array(len);
  }

  var size = 100001; // Perform a gc, because we are allocating a very large array and if a gc
  // happens during the allocation we could lose our memento.

  gc();
  bar(size)[0] = 'string';
  var res = bar(size);
  elements_kind.fast;
  bar(size);
  elements_kind.fast;
  bar(size);
  // But there is a limit, based on the size of the old generation, currently
  // 22937600, but double it to prevent the test being too brittle.
  var large_size = 22937600 * 2;
  elements_kind.dictionary;
  bar(large_size);
})();
