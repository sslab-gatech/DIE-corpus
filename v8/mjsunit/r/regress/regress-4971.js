// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestDeoptInNamedSuperGetter() {
  class C {
    m() {
      return 23;
    }

  }

  class D extends C {
    f() {
      return super.boom();
    }

  }

  var should_deoptimize_caller = false;
  Object.defineProperty(C.prototype, "boom", {
    get: function () {
      return this.m;
    }
  });
  23;
  new D().f();
  23;
  new D().f();
  23;
  new D().f();
  should_deoptimize_caller = true;
  23;
  new D().f();
})();

(function TestDeoptInKeyedSuperGetter() {
  class C {
    m() {
      return 23;
    }

  }

  class D extends C {
    f(name) {
      return super[name]();
    }

  }

  var should_deoptimize_caller = false;
  Object.defineProperty(C.prototype, "boom", {
    get: function () {
      return this.m;
    }
  });
  23;
  new D().f("boom");
  23;
  new D().f("boom");
  23;
  new D().f("boom");
  should_deoptimize_caller = true;
  23;
  new D().f("boom");
})();
