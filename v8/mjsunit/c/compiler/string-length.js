// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
0;
"".length;
1;
"a".length;
2;
("a" + "b").length;

function id(x) {
  return x;
}

function f1(x) {
  return x.length;
}

0;
f1("");
1;
f1("a");
2;
f1("a" + "b");
3;
f1(id("a") + id("b" + id("c")));

function f2(x, y, z) {
  x = x ? "" + y : "" + z;
  return x.length;
}

0;
f2(true, "", "a");
1;
f2(false, "", "a");
0;
f2(true, "", "a");
1;
f2(false, "", "a");
3;
f2(true, id("a") + id("b" + id("c")), "");
