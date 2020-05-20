// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Without instance creation:
(function () {
  function Goo() {
    ;
  }

  ;
  const goo = {};

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  IsGoo(goo);
})();

(function () {
  function Goo() {
    ;
  }

  ;
  const goo = {};
  Goo.prototype = Object.prototype;

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  IsGoo(goo);
})();

(function () {
  function Goo() {
    ;
  }

  ;
  const goo = {};
  Goo.prototype = 42;

  function IsGoo(x) {
    return x instanceof Goo;
  }

  (_ => IsGoo(goo))();

  TypeError;

  (_ => IsGoo(goo))();

  TypeError;

  (_ => IsGoo(goo))();

  TypeError;
})();

(function () {
  function Goo() {
    ;
  }

  ;
  const goo = {};

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  IsGoo(goo);
  Goo.prototype = Object.prototype;
  IsGoo(goo);
})();

(function () {
  function Goo() {
    ;
  }

  ;
  const goo = {};

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  IsGoo(goo);
  Goo.prototype = 42;

  (_ => IsGoo(goo))();

  TypeError;
})(); // With instance creation:


(function () {
  function Goo() {
    ;
  }

  ;
  const goo = new Goo();

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  IsGoo(goo);
})();

(function () {
  function Goo() {
    ;
  }

  ;
  const goo = new Goo();
  Goo.prototype = {};

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  IsGoo(goo);
})();

(function () {
  function Goo() {
    ;
  }

  ;
  const goo = new Goo();
  Goo.prototype = 42;

  function IsGoo(x) {
    return x instanceof Goo;
  }

  (_ => IsGoo(goo))();

  TypeError;

  (_ => IsGoo(goo))();

  TypeError;

  (_ => IsGoo(goo))();

  TypeError;
})();

(function () {
  function Goo() {
    ;
  }

  ;
  const goo = new Goo();

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  IsGoo(goo);
  Goo.prototype = {};
  IsGoo(goo);
})();

(function () {
  function Goo() {
    ;
  }

  ;
  const goo = new Goo();

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  IsGoo(goo);
  Goo.prototype = 42;

  (_ => IsGoo(goo))();

  TypeError;
})();

(function () {
  function Goo() {
    ;
  }

  ;
  Goo.prototype = 42;
  const goo = new Goo();

  function IsGoo(x) {
    return x instanceof Goo;
  }

  (_ => IsGoo(goo))();

  TypeError;

  (_ => IsGoo(goo))();

  TypeError;

  (_ => IsGoo(goo))();

  TypeError;
  Goo.prototype = {};
  IsGoo(goo);
})();

(function () {
  function Goo() {
    ;
  }

  ;
  Goo.prototype = 42;
  const goo = new Goo();
  Goo.prototype = {};

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  IsGoo(goo);
  Goo.prototype = Object.prototype;
  IsGoo(goo);
})();

(function () {
  function Goo() {
    ;
  }

  ;
  Goo.prototype = {};
  const goo = new Goo();
  Goo.prototype = 42;

  function IsGoo(x) {
    return x instanceof Goo;
  }

  (_ => IsGoo(goo))();

  TypeError;

  (_ => IsGoo(goo))();

  TypeError;

  (_ => IsGoo(goo))();

  TypeError;
  Goo.prototype = Object.prototype;
  IsGoo(goo);
})();

(function () {
  function Goo() {
    ;
  }

  ;
  Goo.prototype = {};
  const goo = new Goo();
  Goo.prototype = {};

  function IsGoo(x) {
    return x instanceof Goo;
  }

  IsGoo(goo);
  IsGoo(goo);
  Goo.prototype = Object.prototype;
  IsGoo(goo);
})();
