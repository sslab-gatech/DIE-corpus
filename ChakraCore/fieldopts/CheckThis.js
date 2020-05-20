//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Flavors of inlined LdThis, some of which will bail out if we force the optimization.
(function () {
  function f() {
    return this.foo();
  }

  var t = this;
  var x = {
    foo: function () {
      print(this);
    }
  };
  x.f = f;
  x.f();

  try {
    f();
  } catch (e) {
    print(e.message);
  }

  print(t === this);
})();

(function () {
  function f(o) {
    return o.foo();
  }

  var x = {
    foo: function () {
      print(this);
    }
  };
  f(x);
})();

function test() {
  Object.prototype['foo'] = function () {
    return this;
  };

  var c = {};
  var x;
  x + c.foo("a");
  (function () {
    return 1;
  })().foo();
}

;
print(test());
print(test());
