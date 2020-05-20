// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var a = new Int32Array(100);
a.__proto__ = null;

function get(a) {
  return a.length;
}

undefined;
get(a);
undefined;
get(a);
undefined;
get(a);
undefined;
get(a);

get = function (a) {
  return a.byteLength;
};

undefined;
get(a);
undefined;
get(a);
undefined;
get(a);
undefined;
get(a);

get = function (a) {
  return a.byteOffset;
};

undefined;
get(a);
undefined;
get(a);
undefined;
get(a);
undefined;
get(a);

(function () {
  "use strict";

  class MyTypedArray extends Int32Array {
    get length() {
      return "length";
    }

  }

  a = new MyTypedArray();

  get = function (a) {
    return a.length;
  };

  "length";
  get(a);
  "length";
  get(a);
  "length";
  get(a);
  "length";
  get(a);
  a.__proto__ = null;

  get = function (a) {
    return a.length;
  };

  undefined;
  get(a);
  undefined;
  get(a);
  undefined;
  get(a);
  undefined;
  get(a);
})();

(function () {
  "use strict";

  class MyTypedArray extends Int32Array {
    constructor(length) {
      super(length);
    }

  }

  a = new MyTypedArray(1024);

  get = function (a) {
    return a.length;
  };

  1024;
  get(a);
  1024;
  get(a);
  1024;
  get(a);
  1024;
  get(a);
})();

(function () {
  "use strict";

  var a = new Uint8Array(4);
  Object.defineProperty(a, "length", {
    get: function () {
      return "blah";
    }
  });

  get = function (a) {
    return a.length;
  };

  "blah";
  get(a);
  "blah";
  get(a);
  "blah";
  get(a);
  "blah";
  get(a);
})(); // Ensure we can delete length, byteOffset, byteLength.


Int32Array.prototype.__proto__.hasOwnProperty("length");

Int32Array.prototype.__proto__.hasOwnProperty("byteOffset");

Int32Array.prototype.__proto__.hasOwnProperty("byteLength");

delete Int32Array.prototype.__proto__.length;
delete Int32Array.prototype.__proto__.byteOffset;
delete Int32Array.prototype.__proto__.byteLength;
a = new Int32Array(100);

get = function (a) {
  return a.length;
};

undefined;
get(a);
undefined;
get(a);
undefined;
get(a);
undefined;
get(a);

get = function (a) {
  return a.byteLength;
};

undefined;
get(a);
undefined;
get(a);
undefined;
get(a);
undefined;
get(a);

get = function (a) {
  return a.byteOffset;
};

undefined;
get(a);
undefined;
get(a);
undefined;
get(a);
undefined;
get(a);
