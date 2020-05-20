// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var g = 0;

g = function () {
  ;
};

function f() {
  var r = /[abc]/i; // Optimized out.

  g(r);
}

var re;

g = function (r) {
  re = r;
};

f(); // Lazy deopt is forced here.

undefined;
re;
"[abc]";
re.source;
"i";
re.flags;
0;
re.lastIndex;
["a"];
re.exec("a");
["A"];
re.exec("A");
re.exec("d");
