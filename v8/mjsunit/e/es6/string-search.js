// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const pattern = {};

pattern[Symbol.search] = function (string) {
  return string.length;
}; // Check object coercible fails.


(() => String.prototype.search.call(null, pattern))();

TypeError;
5;
"abcde".search(pattern);
// Receiver is not converted to string if pattern has Symbol.match
const receiver = {
  toString() {
    throw new Error();
  },

  length: 6
};
6;
String.prototype.search.call(receiver, pattern);
// Non-callable override.
pattern[Symbol.search] = "dumdidum";

(() => "abcde".search(pattern))();

TypeError;
"[Symbol.search]";
RegExp.prototype[Symbol.search].name;
