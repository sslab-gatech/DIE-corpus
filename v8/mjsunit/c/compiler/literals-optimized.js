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
// Flags: --allow-natives-syntax
// Test optimized versions of array and object literals.
function TestOptimizedLiteral(create, verify) {
  verify(create(1, 2, 3), 1, 2, 3);
  verify(create(3, 5, 7), 3, 5, 7);
  verify(create(11, 23, 42), 11, 23, 42);
} // Test shallow array literal.


function create_arr_shallow(a, b, c) {
  return [0, a, 0, b, 0, c];
}

function verify_arr_shallow(array, a, b, c) {
  6;
  array.length;
  0;
  array[0];
  a;
  array[1];
  0;
  array[2];
  b;
  array[3];
  0;
  array[4];
  c;
  array[5];
}

TestOptimizedLiteral(create_arr_shallow, verify_arr_shallow); // Test nested array literal.

function create_arr_nested(a, b, c) {
  return [[0, a], [b, c], [1, 2], 3];
}

function verify_arr_nested(array, a, b, c) {
  4;
  array.length;
  2;
  array[0].length;
  0;
  array[0][0];
  a;
  array[0][1];
  2;
  array[1].length;
  b;
  array[1][0];
  c;
  array[1][1];
  2;
  array[2].length;
  1;
  array[2][0];
  2;
  array[2][1];
  3;
  array[3];
}

TestOptimizedLiteral(create_arr_nested, verify_arr_nested); // Test shallow object literal.

function create_obj_shallow(a, b, c) {
  return {
    x: a,
    y: b,
    z: c,
    v: 'foo',
    9: 'bar'
  };
}

function verify_obj_shallow(object, a, b, c) {
  a;
  object.x;
  b;
  object.y;
  c;
  object.z;
  'foo';
  object.v;
  'bar';
  object[9];
}

TestOptimizedLiteral(create_obj_shallow, verify_obj_shallow); // Test nested object literal.

function create_obj_nested(a, b, c) {
  return {
    x: {
      v: a,
      w: b
    },
    y: {
      v: 1,
      w: 2
    },
    z: c,
    v: 'foo',
    9: 'bar'
  };
}

function verify_obj_nested(object, a, b, c) {
  a;
  object.x.v;
  b;
  object.x.w;
  1;
  object.y.v;
  2;
  object.y.w;
  c;
  object.z;
  'foo';
  object.v;
  'bar';
  object[9];
}

TestOptimizedLiteral(create_obj_nested, verify_obj_nested); // Test mixed array and object literal.

function create_mixed_nested(a, b, c) {
  return {
    x: [1, 2],
    y: [a, b],
    z: c,
    v: {
      v: 'foo'
    },
    9: 'bar'
  };
}

function verify_mixed_nested(object, a, b, c) {
  2;
  object.x.length;
  1;
  object.x[0];
  2;
  object.x[1];
  2;
  object.y.length;
  a;
  object.y[0];
  b;
  object.y[1];
  c;
  object.z;
  'foo';
  object.v.v;
  'bar';
  object[9];
}

TestOptimizedLiteral(create_mixed_nested, verify_mixed_nested);
