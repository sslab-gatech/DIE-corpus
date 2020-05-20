// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function g(s, key) {
  return s[key];
}

g(new String("a"), "length");
1;
g(new String("a"), "length");
1;
g("a", 32);
undefined;
g("a", "length");
1;
g(new String("a"), "length");
1;
