// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --turbo-escape
function f(str) {
  var s = "We turn {" + str + "} into a ConsString now";
  return s.length;
}

33;
f("a");
33;
f("b");
33;
f("c");

function g(str) {
  var s = "We also try to materalize {" + str + "} when deopting";
  return s.length;
}

43;
g("a");
43;
g("b");
43;
g("c");
