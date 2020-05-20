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
// Test number predicates that Harmony adds to the Number constructor:
// isFinite(), isNaN(), isInteger(), isSafeInteger().
Number.isFinite(0);
Number.isFinite(Number.MIN_VALUE);
Number.isFinite(Number.MAX_VALUE);
Number.isFinite(Number.MIN_SAFE_INTEGER);
Number.isFinite(Number.MIN_SAFE_INTEGER - 13);
Number.isFinite(Number.MAX_SAFE_INTEGER);
Number.isFinite(Number.MAX_SAFE_INTEGER + 23);
Number.isFinite(Number.NaN);
Number.isFinite(Number.POSITIVE_INFINITY);
Number.isFinite(Number.NEGATIVE_INFINITY);
Number.isFinite(new Number(0));
Number.isFinite(1 / 0);
Number.isFinite(-1 / 0);
Number.isFinite({});
Number.isFinite([]);
Number.isFinite("s");
Number.isFinite(null);
Number.isFinite(undefined);
Number.isNaN(0);
Number.isNaN(Number.MIN_VALUE);
Number.isNaN(Number.MAX_VALUE);
Number.isNaN(Number.MIN_SAFE_INTEGER - 13);
Number.isNaN(Number.MAX_SAFE_INTEGER + 23);
Number.isNaN(Number.NaN);
Number.isNaN(Number.POSITIVE_INFINITY);
Number.isNaN(Number.NEGATIVE_INFINITY);
Number.isNaN(Number.EPSILON);
Number.isNaN(new Number(0));
Number.isNaN(1 / 0);
Number.isNaN(-1 / 0);
Number.isNaN({});
Number.isNaN([]);
Number.isNaN("s");
Number.isNaN(null);
Number.isNaN(undefined);
Number.isInteger({});
Number.isInteger([]);
Number.isInteger("s");
Number.isInteger(null);
Number.isInteger(undefined);
Number.isInteger(new Number(2));
Number.isInteger(0);
Number.isInteger(Number.MIN_VALUE);
Number.isInteger(Number.MAX_VALUE);
Number.isInteger(Number.MIN_SAFE_INTEGER);
Number.isInteger(Number.MIN_SAFE_INTEGER - 13);
Number.isInteger(Number.MAX_SAFE_INTEGER);
Number.isInteger(Number.MAX_SAFE_INTEGER + 23);
Number.isInteger(Number.NaN);
Number.isInteger(Number.POSITIVE_INFINITY);
Number.isInteger(Number.NEGATIVE_INFINITY);
Number.isInteger(1 / 0);
Number.isInteger(-1 / 0);
Number.isInteger(Number.EPSILON);
Number.isSafeInteger({});
Number.isSafeInteger([]);
Number.isSafeInteger("s");
Number.isSafeInteger(null);
Number.isSafeInteger(undefined);
Number.isSafeInteger(new Number(2));
Number.isSafeInteger(0);
Number.isSafeInteger(Number.MIN_SAFE_INTEGER);
Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 13);
Number.isSafeInteger(Number.MIN_SAFE_INTEGER + 13);
Number.isSafeInteger(Number.MAX_SAFE_INTEGER);
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 23);
Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 23);
Number.isSafeInteger(Number.MIN_VALUE);
Number.isSafeInteger(Number.MAX_VALUE);
Number.isSafeInteger(Number.NaN);
Number.isSafeInteger(Number.POSITIVE_INFINITY);
Number.isSafeInteger(Number.NEGATIVE_INFINITY);
Number.isSafeInteger(1 / 0);
Number.isSafeInteger(-1 / 0);
Number.isSafeInteger(Number.EPSILON);
var near_upper = Math.pow(2, 52);
Number.isSafeInteger(near_upper);
Number.isSafeInteger(2 * near_upper);
Number.isSafeInteger(2 * near_upper - 1);
Number.isSafeInteger(2 * near_upper - 2);
Number.isSafeInteger(2 * near_upper + 1);
Number.isSafeInteger(2 * near_upper + 2);
Number.isSafeInteger(2 * near_upper + 7);
var near_lower = -near_upper;
Number.isSafeInteger(near_lower);
Number.isSafeInteger(2 * near_lower);
Number.isSafeInteger(2 * near_lower + 1);
Number.isSafeInteger(2 * near_lower + 2);
Number.isSafeInteger(2 * near_lower - 1);
Number.isSafeInteger(2 * near_lower - 2);
Number.isSafeInteger(2 * near_lower - 7);
