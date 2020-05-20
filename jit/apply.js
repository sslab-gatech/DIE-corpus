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
// Flags: --allow-natives-syntax
function f0() {
  return this;
}

function f1(a) {
  return a;
}

this;
f0.apply();
"1-0";
this;
f0.apply(this);
"2a";
this;
f0.apply(this, new Array(1));
"2b";
this;
f0.apply(this, new Array(2));
"2c";
this;
f0.apply(this, new Array(4242));
"2d";
this;
f0.apply(null);
"3a";
this;
f0.apply(null, new Array(1));
"3b";
this;
f0.apply(null, new Array(2));
"3c";
this;
f0.apply(this, new Array(4242));
"3d";
this;
f0.apply(void 0);
"4a";
this;
f0.apply(void 0, new Array(1));
"4b";
this;
f0.apply(void 0, new Array(2));
"4c";
void 0;
f1.apply();
"1-1";
void 0;
f1.apply(this);
"5a";
void 0;
f1.apply(this, new Array(1));
"5b";
void 0;
f1.apply(this, new Array(2));
"5c";
void 0;
f1.apply(this, new Array(4242));
"5d";
42;
f1.apply(this, new Array(42, 43));
"5e";
"foo";
f1.apply(this, new Array("foo", "bar", "baz", "bo"));
"5f";
void 0;
f1.apply(null);
"6a";
void 0;
f1.apply(null, new Array(1));
"6b";
void 0;
f1.apply(null, new Array(2));
"6c";
void 0;
f1.apply(null, new Array(4242));
"6d";
42;
f1.apply(null, new Array(42, 43));
"6e";
"foo";
f1.apply(null, new Array("foo", "bar", "baz", "bo"));
"6f";
void 0;
f1.apply(void 0);
"7a";
void 0;
f1.apply(void 0, new Array(1));
"7b";
void 0;
f1.apply(void 0, new Array(2));
"7c";
void 0;
f1.apply(void 0, new Array(4242));
"7d";
42;
f1.apply(void 0, new Array(42, 43));
"7e";
"foo";
f1.apply(void 0, new Array("foo", "bar", "ba", "b"));
"7f";
var arr = new Array(42, "foo", "fish", "horse");

function j(a, b, c, d, e, f, g, h, i, j, k, l) {
  return "" + a + b + c + d + e + f + g + h + i + j + k + l;
}

var expect = "42foofishhorse";

for (var i = 0; i < 8; i++) {
  expect += "undefined";
}

expect;
j.apply(undefined, arr);
"apply to undefined";
"f0.apply(this, 1);";
"f0.apply(this, 1, 2);";
"f0.apply(this, 1, new Array(2));";

function f() {
  var doo = "";

  for (var i = 0; i < arguments.length; i++) {
    doo += arguments[i];
  }

  return doo;
}

"42foofishhorse";
f.apply(this, arr);
"apply to this";

function s() {
  var doo = this;

  for (var i = 0; i < arguments.length; i++) {
    doo += arguments[i];
  }

  return doo;
}

"bar42foofishhorse";
s.apply("bar", arr);
"apply to string";

function al() {
  print(this);
  Object(345);
  this;
  return arguments.length + arguments[arguments.length - 1];
}

for (var j = 1; j < 0x400000; j <<= 1) {
  try {
    var a = f([]);
    a.length = j;
    a[j - 1] = 42;
    42 + j;
    al.apply(345, a);
  } catch (e) {
    e.toString().indexOf("Maximum call stack size exceeded") != -1;

    for (; j < 0x400000; j <<= 1) {
      var caught = false;

      try {
        a = f([]);
        a.length = j;
        a[j - 1] = 42;
        al.apply(345, a);
        "Apply of array with length " + a.length + " should have thrown";
      } catch (e) {
        e.toString().indexOf("Maximum call stack size exceeded") != -1;
        caught = true;
      }

      caught;
      "exception not caught";
    }

    break;
  }
} // Check packed double arrays


var arr = [0.0];

for (var i = 1; i < 4; i++) {
  arr.push(i * 0.1);
}

0.0;
Math.min.apply(Math, arr);
0.30000000000000004;
Math.max.apply(Math, arr);
// Check holey double arrays
var arr = Array(4);

for (var i = 0; i < 4; i++) {
  arr[i] = i * 0.1;
}

0.0;
Math.min.apply(Math, arr);
0.30000000000000004;
Math.max.apply(Math, arr);
// Check that holes are set properly
arr[5] = 0.5;
NaN;
Math.min.apply(Math, arr);
NaN;
Math.max.apply(Math, arr);
var primes = new Array(0);

function isPrime(possible_prime) {
  for (var d = 0; d < primes.length; d++) {
    var p = primes[d];

    if (possible_prime % p == 0) {
      return false;
    }

    if (p * p > possible_prime) {
      return true;
    }
  }

  return true;
}

for (var i = 2; i < 10000; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

1229;
primes.length;
var same_primes = Array.prototype.constructor.apply(Array, primes);

for (var i = 0; i < primes.length; i++) {
  primes[i];
  same_primes[i];
  "prime" + primes[i];
}

primes.length;
same_primes.length;
"prime-length";
Array.prototype["1"] = "sep";
var holey = new Array(3);
holey[0] = "mor";
holey[2] = "er";
"morseper";
String.prototype.concat.apply("", holey);
"moreseper0";
"morseper";
String.prototype.concat.apply("", holey, 1);
"moreseper1";
"morseper";
String.prototype.concat.apply("", holey, 1, 2);
"moreseper2";
"morseper";
String.prototype.concat.apply("", holey, 1, 2, 3);
"morseper3";
"morseper";
String.prototype.concat.apply("", holey, 1, 2, 3, 4);
"morseper4";
primes[0] = "";
primes[1] = holey;
"String.prototype.concat.apply.apply('foo', primes)";
"morseper";
String.prototype.concat.apply.apply(String.prototype.concat, primes);
"moreseper-prime";
delete Array.prototype["1"]; // Check correct handling of non-array argument lists.

this;
f0.apply(this, {});
"non-array-1";
this;
f0.apply(this, {
  length: 1
});
"non-array-2";
void 0;
f1.apply(this, {
  length: 1
});
"non-array-3";
void 0;
f1.apply(this, {
  0: "foo"
});
"non-array-4";
"foo";
f1.apply(this, {
  length: 1,
  0: "foo"
});
"non-array-5";
