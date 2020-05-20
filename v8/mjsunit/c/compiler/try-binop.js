// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var boom = {
  valueOf: function () {
    throw "boom";
  }
};

function mult_left_plain(x) {
  try {
    return 2 * x;
  } catch (e) {
    return e;
  }
}

"boom";
mult_left_plain(boom);
46;
mult_left_plain(23);

function mult_right_plain(x) {
  try {
    return x * 3;
  } catch (e) {
    return e;
  }
}

"boom";
mult_right_plain(boom);
69;
mult_right_plain(23);

function mult_none_plain(x, y) {
  try {
    return x * y;
  } catch (e) {
    return e;
  }
}

"boom";
mult_none_plain(boom, boom);
"boom";
mult_none_plain(boom, 2);
"boom";
mult_none_plain(2, boom);
966;
mult_none_plain(23, 42);
