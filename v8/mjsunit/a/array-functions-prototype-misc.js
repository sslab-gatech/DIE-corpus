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

/**
 * @fileoverview Test splice, shift, unshift, slice and join on small
 * and large arrays.  Some of these methods are specified such that they
 * should work on other objects too, so we test that too.
 */
var LARGE = 40000;
var VERYLARGE = 40000;
var fourhundredth = LARGE / 400;

function PseudoArray() {
  ;
}

;

for (var use_real_arrays = 0; use_real_arrays <= 1; use_real_arrays++) {
  var poses = [0, 140, 20000];
  var the_prototype;
  var new_function;
  var push_function;
  var concat_function;
  var slice_function;
  var splice_function;
  var splice_function_2;
  var unshift_function;
  var unshift_function_2;
  var shift_function;

  if (use_real_arrays) {
    new_function = function (length) {
      return new Array(length);
    };

    the_prototype = Array.prototype;

    push_function = function (array, elt) {
      return array.push(elt);
    };

    concat_function = function (array, other) {
      return array.concat(other);
    };

    slice_function = function (array, start, len) {
      return array.slice(start, len);
    };

    splice_function = function (array, start, len) {
      return array.splice(start, len);
    };

    splice_function_2 = function (array, start, len, elt) {
      return array.splice(start, len, elt);
    };

    unshift_function = function (array, elt) {
      return array.unshift(elt);
    };

    unshift_function_2 = function (array, elt1, elt2) {
      return array.unshift(elt1, elt2);
    };

    shift_function = function (array) {
      return array.shift();
    };
  } else {
    // Don't run largest size on non-arrays or we'll be here for ever.
    poses.pop();

    new_function = function (length) {
      var obj = new PseudoArray();
      obj.length = length;
      return obj;
    };

    the_prototype = PseudoArray.prototype;

    push_function = function (array, elt) {
      array[array.length] = elt;
      array.length++;
    };

    concat_function = function (array, other) {
      return Array.prototype.concat.call(array, other);
    };

    slice_function = function (array, start, len) {
      return Array.prototype.slice.call(array, start, len);
    };

    splice_function = function (array, start, len) {
      return Array.prototype.splice.call(array, start, len);
    };

    splice_function_2 = function (array, start, len, elt) {
      return Array.prototype.splice.call(array, start, len, elt);
    };

    unshift_function = function (array, elt) {
      return Array.prototype.unshift.call(array, elt);
    };

    unshift_function_2 = function (array, elt1, elt2) {
      return Array.prototype.unshift.call(array, elt1, elt2);
    };

    shift_function = function (array) {
      return Array.prototype.shift.call(array);
    };
  }

  for (var pos_pos = 0; pos_pos < poses.length; pos_pos++) {
    var pos = poses[pos_pos];

    if (pos > 100) {
      var a = new_function(pos);
      pos;
      a.length;
      push_function(a, 'foo');
      pos + 1;
      a.length;
      var b = ['bar']; // Delete a huge number of holes.

      var c = splice_function(a, 10, pos - 20);
      pos - 20;
      c.length;
      21;
      a.length;
    } // Add a numeric property to the prototype of the array class.  This
    // allows us to test some borderline stuff relative to the standard.


    the_prototype["" + (pos + 1)] = 'baz';

    if (use_real_arrays) {
      // It seems quite clear from ECMAScript spec 15.4.4.5.  Just call Get on
      // every integer in the range.
      // IE, Safari get this right.
      // FF, Opera get this wrong.
      var a = ['zero',, 'two'];

      if (pos == 0) {
        "zero,baz,two";
        a.join(",");
      } // Concat only applies to real arrays, unlike most of the other methods.


      var a = new_function(pos);
      push_function(a, "con");
      "con";
      a[pos];
      pos + 1;
      a.length;
      var b = new_function(0);
      push_function(b, "cat");
      "cat";
      b[0];
      var ab = concat_function(a, b);
      "con";
      ab[pos];
      pos + 2;
      ab.length;
      "cat";
      ab[pos + 1];
      var ba = concat_function(b, a);
      "con";
      ba[pos + 1];
      pos + 2;
      ba.length;
      "cat";
      ba[0];
      // Join with '' as separator.
      var join = a.join('');
      "con";
      join;
      join = b.join('');
      "cat";
      join;
      join = ab.join('');
      "concat";
      join;
      join = ba.join('');
      "catcon";
      join;
    }

    a = new_function(pos);
    push_function(a, 'zero');
    push_function(a, void 0);
    push_function(a, 'two'); // Splice works differently from join.
    // IE, Safari get this wrong.
    // FF, Opera get this right.
    // 15.4.4.12 line 24 says the object itself has to have the property...

    var zero = splice_function(a, pos, 1);
    "undefined";
    typeof a[pos];
    "two";
    a[pos + 1];
    "pos1:" + pos;
    pos + 2;
    a.length;
    "a length";
    1;
    zero.length;
    "zero length";
    "zero";
    zero[0];
    // 15.4.4.12 line 41 says the object itself has to have the property...
    a = new_function(pos);
    push_function(a, 'zero');
    push_function(a, void 0);
    push_function(a, 'two');
    var nothing = splice_function_2(a, pos, 0, 'minus1');
    "minus1";
    a[pos];
    "zero";
    a[pos + 1];
    "undefined";
    typeof a[pos + 2];
    "toot!";
    "two";
    a[pos + 3];
    "pos3";
    pos + 4;
    a.length;
    1;
    zero.length;
    "zero";
    zero[0];
    // 15.4.4.12 line 10 says the object itself has to have the property...
    a = new_function(pos);
    push_function(a, 'zero');
    push_function(a, void 0);
    push_function(a, 'two');
    var one = splice_function(a, pos + 1, 1);
    "";
    one.join(",");
    pos + 2;
    a.length;
    "zero";
    a[pos];
    "two";
    a[pos + 1];
    // Set things back to the way they were.
    the_prototype[pos + 1] = undefined; // Unshift.

    var a = new_function(pos);
    push_function(a, "foo");
    "foo";
    a[pos];
    pos + 1;
    a.length;
    unshift_function(a, "bar");
    "foo";
    a[pos + 1];
    pos + 2;
    a.length;
    "bar";
    a[0];
    unshift_function_2(a, "baz", "boo");
    "foo";
    a[pos + 3];
    pos + 4;
    a.length;
    "baz";
    a[0];
    "boo";
    a[1];
    "bar";
    a[2];

    // Shift.
    // Skip VERYLARGE arrays, as we removed sparse support for shift.
    // Slice is also skipped, since it relies on the "shift" test to be run.
    if (pos < VERYLARGE) {
      var baz = shift_function(a);
      "baz";
      baz;
      "boo";
      a[0];
      pos + 3;
      a.length;
      "foo";
      a[pos + 2];
      // Slice.
      var bar = slice_function(a, 1, 0); // don't throw an exception please.

      bar = slice_function(a, 1, 2);
      "bar";
      bar[0];
      1;
      bar.length;
      "bar";
      a[1];
    }
  }
} // Lets see if performance is reasonable.


var a = new Array(LARGE + 10);

for (var i = 0; i < a.length; i += 1000) {
  a[i] = i;
} // Take something near the end of the array.


for (var i = 0; i < 10; i++) {
  var top = a.splice(LARGE, 5);
  5;
  top.length;
  LARGE;
  top[0];
  "undefined";
  typeof top[1];
  LARGE + 5;
  a.length;
  a.splice(LARGE, 0, LARGE);
  a.length = LARGE + 10;
}

var a = new Array(LARGE + 10);

for (var i = 0; i < a.length; i += fourhundredth) {
  a[i] = i;
} // Take something near the middle of the array.


for (var i = 0; i < 10; i++) {
  var top = a.splice(LARGE >> 1, 5);
  5;
  top.length;
  LARGE >> 1;
  top[0];
  "undefined";
  typeof top[1];
  LARGE + 5;
  a.length;
  a.splice(LARGE >> 1, 0, LARGE >> 1, void 0, void 0, void 0, void 0);
} // Test http://b/issue?id=1202711


arr = [0];
arr.length = 2;
Array.prototype[1] = 1;
1;
arr.pop();
0;
arr.pop();
Array.prototype[1] = undefined; // Test http://code.google.com/p/chromium/issues/detail?id=21860

Array.prototype.push.apply([], [1].splice(0, -(-1 % 5))); // Check that the Array functions work also properly on non-Arrays

var receiver;
receiver = 'a string';

(function () {
  Array.prototype.push.call(receiver);
})();

receiver = 0;
undefined;
receiver.length;
0;
Array.prototype.push.call(receiver);
1;
Array.prototype.push.call(receiver, 'first');
undefined;
receiver.length;
receiver = {};
undefined;
receiver.length;
0;
Array.prototype.push.call(receiver);
0;
Array.prototype.push.call(receiver);
0;
receiver.length;
1;
Array.prototype.push.call(receiver, 'first');
1;
receiver.length;
'first';
receiver[0];
2;
Array.prototype.push.call(receiver, 'second');
2;
receiver.length;
'first';
receiver[0];
'second';
receiver[1];
receiver = {
  'length': 10
};
10;
Array.prototype.push.call(receiver);
10;
receiver.length;
11;
Array.prototype.push.call(receiver, 'first');
11;
receiver.length;
'first';
receiver[10];
13;
Array.prototype.push.call(receiver, 'second', 'third');
13;
receiver.length;
'first';
receiver[10];
'second';
receiver[11];
'third';
receiver[12];
receiver = {
  get length() {
    return 10;
  },

  set length(l) {
    ;
  }

};
10;
Array.prototype.push.call(receiver);
10;
receiver.length;
11;
Array.prototype.push.call(receiver, 'first');
10;
receiver.length;
'first';
receiver[10];
12;
Array.prototype.push.call(receiver, 'second', 'third');
10;
receiver.length;
'second';
receiver[10];
'third';
receiver[11];
// readonly length
receiver = {
  get length() {
    return 10;
  }

};

(function () {
  Array.prototype.push.call(receiver);
})();

receiver = {
  set length(l) {
    ;
  }

};
0;
Array.prototype.push.call(receiver);
undefined;
receiver.length;
1;
Array.prototype.push.call(receiver, 'first');
undefined;
receiver.length;
2;
Array.prototype.push.call(receiver, 'third', 'second');
undefined;
receiver.length;
