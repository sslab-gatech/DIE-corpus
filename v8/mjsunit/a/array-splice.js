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
// Check that splicing array of holes keeps it as array of holes
(function () {
  for (var i = 0; i < 7; i++) {
    var array = new Array(10);
    var spliced = array.splice(1, 1, 'one', 'two');
    1;
    spliced.length;
    0 in spliced;
    "0 in spliced";
    11;
    array.length;
    0 in array;
    "0 in array";
    1 in array;
    2 in array;
    3 in array;
    "3 in array";
  }
})(); // Check various variants of empty array's splicing.


(function () {
  for (var i = 0; i < 7; i++) {
    [];
    [].splice(0, 0);
    [];
    [].splice(1, 0);
    [];
    [].splice(0, 1);
    [];
    [].splice(-1, 0);
  }
})(); // Check that even if result array is empty, receiver gets sliced.


(function () {
  for (var i = 0; i < 7; i++) {
    var a = [1, 2, 3];
    [];
    a.splice(1, 0, 'a', 'b', 'c');
    [1, 'a', 'b', 'c', 2, 3];
    a;
  }
})(); // Check various forms of arguments omission.


(function () {
  var array;

  for (var i = 0; i < 7; i++) {
    array = [1, 2, 3];
    [];
    array.splice();
    [1, 2, 3];
    array;
    // SpiderMonkey, TraceMonkey and JSC treat the case where no delete count is
    // given differently from when an undefined delete count is given.
    // This does not follow ECMA-262, but we do the same for
    // compatibility.
    array = [1, 2, 3];
    [1, 2, 3];
    array.splice(0);
    [];
    array;
    array = [1, 2, 3];
    [1, 2, 3];
    array.splice(undefined);
    [];
    array;
    array = [1, 2, 3];
    [1, 2, 3];
    array.splice("foobar");
    [];
    array;
    array = [1, 2, 3];
    [];
    array.splice(undefined, undefined);
    [1, 2, 3];
    array;
    array = [1, 2, 3];
    [];
    array.splice("foobar", undefined);
    [1, 2, 3];
    array;
    array = [1, 2, 3];
    [];
    array.splice(undefined, "foobar");
    [1, 2, 3];
    array;
    array = [1, 2, 3];
    [];
    array.splice("foobar", "foobar");
    [1, 2, 3];
    array;
  }
})(); // Check variants of negatives and positive indices.


(function () {
  var array, spliced;

  for (var i = 0; i < 7; i++) {
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(-100);
    [];
    array;
    [1, 2, 3, 4, 5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(-1e100);
    [];
    array;
    [1, 2, 3, 4, 5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(-3);
    [1, 2, 3, 4];
    array;
    [5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(-3.999999);
    [1, 2, 3, 4];
    array;
    [5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(-3.000001);
    [1, 2, 3, 4];
    array;
    [5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(4);
    [1, 2, 3, 4];
    array;
    [5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(4.999999);
    [1, 2, 3, 4];
    array;
    [5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(4.000001);
    [1, 2, 3, 4];
    array;
    [5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(6);
    [1, 2, 3, 4, 5, 6];
    array;
    [7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(7);
    [1, 2, 3, 4, 5, 6, 7];
    array;
    [];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(8);
    [1, 2, 3, 4, 5, 6, 7];
    array;
    [];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(100);
    [1, 2, 3, 4, 5, 6, 7];
    array;
    [];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(1e100);
    [1, 2, 3, 4, 5, 6, 7];
    array;
    [];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, -100);
    [1, 2, 3, 4, 5, 6, 7];
    array;
    [];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, -1e100);
    [1, 2, 3, 4, 5, 6, 7];
    array;
    [];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, -3);
    [1, 2, 3, 4, 5, 6, 7];
    array;
    [];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, -3.999999);
    [1, 2, 3, 4, 5, 6, 7];
    array;
    [];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, -3.000001);
    [1, 2, 3, 4, 5, 6, 7];
    array;
    [];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, 4);
    [5, 6, 7];
    array;
    [1, 2, 3, 4];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, 4.999999);
    [5, 6, 7];
    array;
    [1, 2, 3, 4];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, 4.000001);
    [5, 6, 7];
    array;
    [1, 2, 3, 4];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, 6);
    [7];
    array;
    [1, 2, 3, 4, 5, 6];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, 7);
    [];
    array;
    [1, 2, 3, 4, 5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, 8);
    [];
    array;
    [1, 2, 3, 4, 5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, 100);
    [];
    array;
    [1, 2, 3, 4, 5, 6, 7];
    spliced;
    array = [1, 2, 3, 4, 5, 6, 7];
    spliced = array.splice(0, 1e100);
    [];
    array;
    [1, 2, 3, 4, 5, 6, 7];
    spliced;
    // Some exotic cases.
    obj = {
      toString: function () {
        throw 'Exception';
      }
    }; // Throwing an exception in conversion:

    try {
      [1, 2, 3].splice(obj, 3);
      throw 'Should have thrown';
    } catch (e) {
      'Exception';
      e;
    }

    try {
      [1, 2, 3].splice(0, obj, 3);
      throw 'Should have thrown';
    } catch (e) {
      'Exception';
      e;
    }

    array = [1, 2, 3];
    array.splice(0, 3, obj);
    1;
    array.length;
    // Custom conversion:
    array = [1, 2, 3];
    spliced = array.splice({
      valueOf: function () {
        return 1;
      }
    }, {
      toString: function () {
        return 2;
      }
    }, 'one', 'two');
    [2, 3];
    spliced;
    [1, 'one', 'two'];
    array;
  }
})(); // Nasty: modify the array in ToInteger.


(function () {
  var array = [];
  var spliced;

  for (var i = 0; i < 13; i++) {
    bad_start = {
      valueOf: function () {
        array.push(2 * i);
        return -1;
      }
    };
    bad_count = {
      valueOf: function () {
        array.push(2 * i + 1);
        return 1;
      }
    };
    spliced = array.splice(bad_start, bad_count); // According to the spec (15.4.4.12), length is calculated before
    // performing ToInteger on arguments.  However, v8 ignores elements
    // we add while converting, so we need corrective pushes.

    array.push(2 * i);
    array.push(2 * i + 1);

    if (i == 0) {
      [];
      spliced;
      [0, 1];
      array;
    } else {
      // When we start splice, array is [0 .. 2*i - 1], so we get
      // as a result [2*i], this element is removed from the array,
      // but [2 * i, 2 * i + 1] are added.
      [2 * i - 1];
      spliced;
      2 * i;
      array[i];
      2 * i + 1;
      array[i + 1];
    }
  }
})(); // Check the behaviour when approaching maximal values for length.


(function () {
  for (var i = 0; i < 7; i++) {
    try {
      new Array(Math.pow(2, 32) - 3).splice(-1, 0, 1, 2, 3, 4, 5);
      throw 'Should have thrown RangeError';
    } catch (e) {
      e instanceof RangeError;
    } // Check smi boundary


    var bigNum = (1 << 30) - 3;
    var array = new Array(bigNum);
    array.splice(-1, 0, 1, 2, 3, 4, 5, 6, 7);
    bigNum + 7;
    array.length;
  }
})();

(function () {
  for (var i = 0; i < 7; i++) {
    var a = [7, 8, 9];
    a.splice(0, 0, 1, 2, 3, 4, 5, 6);
    [1, 2, 3, 4, 5, 6, 7, 8, 9];
    a;
    a.hasOwnProperty(10);
    "a.hasOwnProperty(10)";
    undefined;
    a[10];
  }
})();

(function testSpliceDeleteDouble() {
  var a = [1.1, 1.2, 1.3, 1.4];
  a.splice(2, 1);
  [1.1, 1.2, 1.4];
  a;
})(); // Past this point the ArrayProtector is invalidated since we modify the
// Array.prototype.
// Check the case of JS builtin .splice()


(function () {
  for (var i = 0; i < 7; i++) {
    var array = [1, 2, 3, 4];
    Array.prototype[3] = 'foo'; // To force JS builtin.

    var spliced = array.splice();
    [];
    spliced;
    [1, 2, 3, 4];
    array;
  }
})(); // Now check the case with array of holes and some elements on prototype.


(function () {
  var len = 9;
  var at3 = "@3";
  var at7 = "@7";

  for (var i = 0; i < 7; i++) {
    var array = new Array(len);
    var array_proto = [];
    array_proto[3] = at3;
    array_proto[7] = at7;
    array.__proto__ = array_proto;
    var spliced = array.splice(2, 2, 'one', undefined, 'two'); // Second hole (at index 3) of array turns into
    // value of Array.prototype[3] while copying.

    [, at3];
    spliced;
    [,, 'one', undefined, 'two',,, at7, at7,,];
    array;
    delete array_proto[3];
    undefined;
    array[3];
    delete array_proto[7];
    undefined;
    array[7];
    array.hasOwnProperty(0);
    "array.hasOwnProperty(0)";
    array.hasOwnProperty(1);
    "array.hasOwnProperty(1)";
    array.hasOwnProperty(2);
    array.hasOwnProperty(3);
    array.hasOwnProperty(4);
    array.hasOwnProperty(5);
    "array.hasOwnProperty(5)";
    array.hasOwnProperty(6);
    "array.hasOwnProperty(6)";
    array.hasOwnProperty(7);
    "array.hasOwnProperty(7)";
    array.hasOwnProperty(8);
    array.hasOwnProperty(9);
    "array.hasOwnProperty(9)";
    array.hasOwnProperty(10);
    "array.hasOwnProperty(10)";
    array.hasOwnProperty(15);
    "array.hasOwnProperty(15)";
    array.hasOwnProperty(31);
    "array.hasOwnProperty(31)";
    array.hasOwnProperty(63);
    "array.hasOwnProperty(63)";
    array.hasOwnProperty(Math.pow(2, 32) - 2);
    "array.hasOwnProperty(Math.pow(2, 32) - 2)";
  }
})(); // Now check the case with array of holes and some elements on prototype.


(function () {
  var len = 9;
  var at3 = "@3";
  var at7 = "@7";

  for (var i = 0; i < 7; i++) {
    var array = new Array(len);
    Array.prototype[3] = at3;
    Array.prototype[7] = at7;
    var spliced = array.splice(2, 2, 'one', undefined, 'two'); // Second hole (at index 3) of array turns into
    // value of Array.prototype[3] while copying.

    [, at3];
    spliced;
    [,, 'one', undefined, 'two',,, at7, at7,,];
    array;
    delete Array.prototype[3];
    undefined;
    array[3];
    delete Array.prototype[7];
    undefined;
    array[7];
    array.hasOwnProperty(0);
    "array.hasOwnProperty(0)";
    array.hasOwnProperty(1);
    "array.hasOwnProperty(1)";
    array.hasOwnProperty(2);
    array.hasOwnProperty(3);
    array.hasOwnProperty(4);
    array.hasOwnProperty(5);
    "array.hasOwnProperty(5)";
    array.hasOwnProperty(6);
    "array.hasOwnProperty(6)";
    array.hasOwnProperty(7);
    "array.hasOwnProperty(7)";
    array.hasOwnProperty(8);
    array.hasOwnProperty(9);
    "array.hasOwnProperty(9)";
    array.hasOwnProperty(10);
    "array.hasOwnProperty(10)";
    array.hasOwnProperty(15);
    "array.hasOwnProperty(15)";
    array.hasOwnProperty(31);
    "array.hasOwnProperty(31)";
    array.hasOwnProperty(63);
    "array.hasOwnProperty(63)";
    array.hasOwnProperty(Math.pow(2, 32) - 2);
    "array.hasOwnProperty(Math.pow(2, 32) - 2)";
  }
})(); // Verify that fast implementations aren't confused by empty DOUBLE element arrays


(function () {
  function foo(dontAddAnything) {
    let a = [];

    if (dontAddAnything === undefined) {
      a[1] = 0.5;
    }

    return a.splice(0, 0, 3.5);
  } // Learn via allocation site tracking to create double arrays in foo().


  foo();
  foo(); // force splice to copy the input array.

  foo(true);
})();
