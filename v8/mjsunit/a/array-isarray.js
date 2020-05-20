// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Array.isArray([]);
Array.isArray({});
Array.isArray(null);
Array.isArray(0);
Array.isArray(0.1);
Array.isArray("");
Array.isArray(undefined);
Array.isArray(new Proxy([], {}));
Array.isArray(new Proxy({}, {}));
Array.isArray(new Proxy(new Proxy([], {}), {}));
Array.isArray(new Proxy(new Proxy({}, {}), {}));

(function TestIsArrayStackOverflow() {
  var proxy = new Proxy([], {});

  for (var i = 0; i < 200 * 1024; i++) {
    proxy = new Proxy(proxy, {});
  }

  (() => Array.isArray(proxy))();

  RangeError;
})();
