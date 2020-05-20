// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --harmony-string-matchall
class MyRegExp {
  exec() {
    return null;
  }

}

["ab", ""];
"abc".split(/c/);
[["a"]];
[..."a".matchAll(/a/)];
Object.defineProperty(RegExp, Symbol.species, {
  get() {
    return MyRegExp;
  }

});
["abc"];
"abc".split(/c/);
[];
[..."a".matchAll(/a/)];
