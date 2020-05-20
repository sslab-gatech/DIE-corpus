// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --no-always-opt
function foo(s) {
  return s[5];
}

"f";
foo("abcdef");
undefined;
foo("a");
"f";
foo("abcdef");
undefined;
foo("a");
foo();
// Now mess with the String.prototype.
String.prototype.__proto__ = new Proxy(String.prototype.__proto__, {
  get(target, property) {
    return "5";
  }

});
"f";
foo("abcdef");
"5";
foo("a");
"f";
foo("abcdef");
"5";
foo("a");
foo();
