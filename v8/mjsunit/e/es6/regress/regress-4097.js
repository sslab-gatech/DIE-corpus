// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function StoreToSuper() {
  "use strict";

  class A {
    s() {
      super.bla = 10;
    }

  }

  ;
  let a = new A();
  new A().s.call(a);
  10;
  a.bla;

  (function () {
    new A().s.call(undefined);
  })();

  TypeError;

  (function () {
    new A().s.call(42);
  })();

  TypeError;

  (function () {
    new A().s.call(null);
  })();

  TypeError;

  (function () {
    new A().s.call("abc");
  })();

  TypeError;
})();

(function LoadFromSuper() {
  "use strict";

  class A {
    s() {
      return super.bla;
    }

  }

  ;
  let a = new A();
  undefined;
  new A().s.call(a);
  undefined;
  new A().s.call(undefined);
  undefined;
  new A().s.call(42);
  undefined;
  new A().s.call(null);
  undefined;
  new A().s.call("abc");
})();
