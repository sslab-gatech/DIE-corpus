// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var buffer1 = new ArrayBuffer(100 * 1024);

(function () {
  var array1 = new Uint8Array(buffer1, {
    valueOf: function () {
      return 0;
    }
  });
})();

TypeError;
var buffer2 = new ArrayBuffer(100 * 1024);

(function () {
  var array2 = new Uint8Array(buffer2, 0, {
    valueOf: function () {
      return 100 * 1024;
    }
  });
})();

TypeError;
let convertedOffset = false;
let convertedLength = false;

(() => new Uint8Array(buffer1, {
  valueOf: function () {
    convertedOffset = true;
    return 0;
  }
}, {
  valueOf: function () {
    convertedLength = true;
    return 0;
  }
}))();

TypeError;
convertedOffset;
convertedLength;
var buffer3 = new ArrayBuffer(100 * 1024 * 1024);
var dataView1 = new DataView(buffer3, {
  valueOf: function () {
    return 0;
  }
});
0;
dataView1.byteLength;
var buffer4 = new ArrayBuffer(100 * 1024);

(function () {
  var dataView2 = new DataView(buffer4, 0, {
    valueOf: function () {
      return 100 * 1024 * 1024;
    }
  });
})();

RangeError;
var buffer5 = new ArrayBuffer(100 * 1024);

(function () {
  buffer5.slice({
    valueOf: function () {
      return 0;
    }
  }, 100 * 1024 * 1024);
})();

TypeError;
var buffer7 = new ArrayBuffer(100 * 1024 * 1024);

(function () {
  buffer7.slice(0, {
    valueOf: function () {
      return 100 * 1024 * 1024;
    }
  });
})();

TypeError;
var buffer9 = new ArrayBuffer(1024);
var array9 = new Uint8Array(buffer9);

(() => array9.subarray({
  valueOf: function () {
    return 0;
  }
}, 1024))();

TypeError;
0;
array9.length;
var buffer11 = new ArrayBuffer(1024);
var array11 = new Uint8Array(buffer11);

(() => array11.subarray(0, {
  valueOf: function () {
    return 1024;
  }
}))();

TypeError;
0;
array11.length;
