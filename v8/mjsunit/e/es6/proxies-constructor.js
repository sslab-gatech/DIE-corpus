// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testNonObjectTargetTypes() {
  (function () {
    new Proxy(undefined, {});
  })();

  TypeError;

  (function () {
    new Proxy(null, {});
  })();

  TypeError;

  (function () {
    new Proxy('', {});
  })();

  TypeError;

  (function () {
    new Proxy(0, {});
  })();

  TypeError;

  (function () {
    new Proxy(0.5, {});
  })();

  TypeError;

  (function () {
    new Proxy(false, {});
  })();

  TypeError;
})();

(function testRevokedTarget() {
  var revocable = Proxy.revocable({}, {});
  revocable.revoke();

  (function () {
    new Proxy(revocable.proxy, {});
  })();

  TypeError;
})();

(function testNonObjectHandlerTypes() {
  (function () {
    new Proxy({}, undefined);
  })();

  TypeError;

  (function () {
    new Proxy({}, null);
  })();

  TypeError;

  (function () {
    new Proxy({}, '');
  })();

  TypeError;

  (function () {
    new Proxy({}, 0);
  })();

  TypeError;

  (function () {
    new Proxy({}, 0.5);
  })();

  TypeError;

  (function () {
    new Proxy({}, false);
  })();

  TypeError;
})();

(function testRevokedHandler() {
  var revocable = Proxy.revocable({}, {});
  revocable.revoke();

  (function () {
    new Proxy({}, revocable.proxy);
  })();

  TypeError;
})();

(function testConstructionWithoutArguments() {
  (function () {
    new Proxy();
  })();

  TypeError;

  (function () {
    new Proxy(42);
  })();

  TypeError;

  (function () {
    new Proxy({});
  })();

  TypeError;
})();

(function testConstructionFromArray() {
  var p = new Proxy([42], {});
  p instanceof Array;
  p[0];
  42;
})();

(function testConstructionFromObject() {
  var p = new Proxy({
    prop: 42
  }, {});
  p instanceof Object;
  p.prop;
  42;
})();

(function testConstructionFromCallable() {
  var p = new Proxy(() => {
    return 42;
  }, {});
  p instanceof Function;
  p();
  42;
})();

(function testConstructionFromConstructor() {
  class foo {}

  ;
  var p = new Proxy(foo, {});
  p instanceof Function;
  new p() instanceof foo;
})();

(function testConstructionFromProxy() {
  var q = new Proxy({}, {});
  var p = new Proxy(q, {});
  p instanceof Object;
})();
