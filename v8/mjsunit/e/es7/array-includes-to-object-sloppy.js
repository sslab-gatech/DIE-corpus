// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Ported from
// https://github.com/tc39/Array.prototype.includes/blob/master/test/number-this.js
// using https://www.npmjs.org/package/test262-to-mjsunit
// Array.prototype.includes should use ToObject on this, so that when called
// with a number, it picks up numeric properties from Number.prototype
(function () {
  Number.prototype[0] = "a";
  Number.prototype[1] = "b";
  Object.defineProperty(Number.prototype, 2, {
    get: function () {
      "object";
      typeof this;
      return "c";
    }
  });
  Number.prototype.length = 3;
  Array.prototype.includes.call(5, "a");
  Array.prototype.includes.call(5, "b");
  Array.prototype.includes.call(5, "c");
  Array.prototype.includes.call(5, "d");
})();
