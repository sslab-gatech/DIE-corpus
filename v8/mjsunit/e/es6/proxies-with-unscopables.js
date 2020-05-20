// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function TestBasics() {
  var log = [];
  var proxy = new Proxy({}, {
    get: function (target, key) {
      log.push("get " + String(key));

      if (key === 'x') {
        return 1;
      }
    },
    has: function (target, key) {
      log.push("has " + String(key));

      if (key === 'x') {
        return true;
      }

      return false;
    }
  });
  var x = 'local';
  with (proxy) {
    1;
    x;
  }
  ['has assertEquals', 'has x', 'get Symbol(Symbol.unscopables)', 'get x'];
  log;
}

TestBasics();

function TestInconsistent() {
  var log = [];
  var proxy = new Proxy({}, {
    get: function (target, key) {
      log.push("get " + String(key));
      return undefined;
    },
    has: function (target, key) {
      log.push("has " + String(key));

      if (key === 'x') {
        return true;
      }

      return false;
    }
  });
  var x = 'local';
  with (proxy) {
    void 0;
    x;
  }
  ['has assertEquals', 'has x', 'get Symbol(Symbol.unscopables)', 'get x'];
  log;
}

TestInconsistent();

function TestUseProxyAsUnscopables() {
  var x = 1;
  var object = {
    x: 2
  };
  var calls = 0;
  var proxy = new Proxy({}, {
    has: function () {},
    get: function (target, key) {
      'x';
      key;
      calls++;
      return calls === 2 ? true : undefined;
    }
  });
  object[Symbol.unscopables] = proxy;
  with (object) {
    2;
    x;
    1;
    x;
  } // HasBinding, HasBinding

  2;
  calls;
}

TestUseProxyAsUnscopables();

function TestThrowInHasUnscopables() {
  var x = 1;
  var object = {
    x: 2
  };

  function CustomError() {
    ;
  }

  var calls = 0;
  var proxy = new Proxy({}, {
    has: function () {},
    get: function (target, key) {
      if (calls++ === 0) {
        throw new CustomError();
      }
    }
  });
  object[Symbol.unscopables] = proxy;

  (function () {
    with (object) {
      x;
    }
  })();

  CustomError();
}

TestThrowInHasUnscopables();
var global = this;

function TestGlobalShouldIgnoreUnscopables() {
  global.x = 1;
  var proxy = new Proxy({}, {
    get: function () {},
    has: function () {}
  });
  global[Symbol.unscopables] = proxy;
  1;
  global.x;
  1;
  x;
  global.x = 2;
  2;
  global.x;
  2;
  x;
  x = 3;
  3;
  global.x;
  3;
  x;
}

TestGlobalShouldIgnoreUnscopables();
