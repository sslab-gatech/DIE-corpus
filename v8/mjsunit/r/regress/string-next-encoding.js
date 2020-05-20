// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --opt --allow-natives-syntax
function f() {
  var s = "äϠ�𝌆";
  var i = s[Symbol.iterator]();
  "ä";
  i.next().value;
  "Ϡ";
  i.next().value;
  "�";
  i.next().value;
  "𝌆";
  i.next().value;
  undefined;
  i.next().value;
}

f();
f();
f();
