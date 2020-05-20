// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --harmony-string-matchall
class MyRegExp {
  exec() {
    return null;
  }

}

var r = /c/;
["ab", ""];
"abc".split(r);
[["c"]];
[..."c".matchAll(r)];
r.constructor = {
  [Symbol.species]: MyRegExp
};
["abc"];
"abc".split(r);
[];
[..."c".matchAll(r)];
["ab", ""];
"abc".split(/c/);
[["c"]];
[..."c".matchAll(/c/)];
RegExp.prototype.constructor = {
  [Symbol.species]: MyRegExp
};
["abc"];
"abc".split(/c/);
[];
[..."c".matchAll(/c/)];
