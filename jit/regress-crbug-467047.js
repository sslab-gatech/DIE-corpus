// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --stack-size=100
function captureMatch(re) {
  var local_variable = 0;
  "abcd".replace(re, function () {
    ;
  });
  "abcd";
  RegExp.input;
  "a";
  RegExp.leftContext;
  "bc";
  RegExp.lastMatch;
  "d";
  RegExp.rightContext;
  "foo";
  captureMatch(/^bar/);
}

(function () {
  captureMatch(/(bc)/);
})();

RangeError;
