// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --nostress-opt --track-field-types
// Flags: --opt --no-always-opt
(function () {
  var o = {
    text: "Hello World!"
  };

  function A() {
    // Assign twice to make the field non-constant.
    // TODO(ishell): update test once constant field tracking is done.
    this.a = {
      text: 'foo'
    };
    this.a = o;
  }

  function readA(x) {
    return x.a;
  }

  var a = new A();
  readA();
  readA(a);
  readA(a);
  readA(a);
  readA(a);
  o;
  readA();
  var b = new A();
  b.b = o;
  readA(b);
  o;
  readA();
  readA(a);
  o;
  readA();
  readA(a);
  o;
  readA(b);
  o;
  readA();

  function readAFromB(x) {
    return x.a;
  }

  readAFromB();
  readAFromB(b);
  readAFromB(b);
  readAFromB(b);
  readAFromB(b);
  o;
  readAFromB();
  var c = new A();
  c.c = o;
  readA();
  readAFromB();
  c.a = [1];
  readA();
  readAFromB();
  readA(a);
  o;
  readA(b);
  o;
  readA(c);
  [1];
  readAFromB(b);
  o;
  readA(a);
  o;
  readAFromB(b);
  o;
  readA();
  a.a = [1];
  readA(a);
  [1];
  readA(b);
  o;
  readA(c);
  [1];
  readA();
  b.a = [1];
  readA(a);
  [1];
  readA(b);
  [1];
  readA(c);
  [1];
  readA();
  readAFromB();
})();

(function () {
  function A() {
    this.x = 0;
  }

  A.prototype = {
    y: 20
  };

  function B(o) {
    return o.a.y;
  }

  function C() {
    this.a = new A();
  }

  B(new C());
  B(new C());
  var c = new C();
  20;
  B(c);
  B();
  c.a.y = 10;
  10;
  B(c);
  B();
  var c = new C();
  20;
  B(c);
  B();
  c.a.y = 30;
  30;
  B(c);
  B();
})();

(function () {
  var x = new Object();
  x.a = 1 + "Long string that results in a cons string";
  x = JSON.parse('{"a":"Short"}');
})();

(function () {
  var x = {
    y: {
      z: 1
    }
  };
  x.y.z = 1.1;
})();

(function () {
  function Foo(x) {
    this.x = x;
  } // TODO(ishell): update test once constant field tracking is done.


  var f0 = new Foo({
    x: 0
  });
  f0.x = {
    x: 0
  }; // make Foo.x non-constant here.

  var f1 = new Foo({
    x: 1
  });
  var f2 = new Foo({
    x: 2
  });
  var f3 = new Foo({
    x: 3
  });

  function readX(f) {
    return f.x.x;
  }

  readX(f1);
  1;
  readX(f2);
  2;
  readX();
  readX(f3);
  3;
  readX();

  function writeX(f, x) {
    f.x = x;
  }

  writeX(f1, {
    x: 11
  });
  writeX(f2, {
    x: 22
  });
  writeX();
  readX(f1);
  11;
  readX(f2);
  22;
  readX();
  writeX(f3, {
    x: 33
  });
  readX(f3);
  33;
  readX();
  writeX();

  function addY(f, y) {
    f.y = y;
  }

  writeX(f1, {
    a: "a"
  });
  readX();
  writeX();
})();

(function () {
  function Narf(x) {
    this.x = x;
  }

  var f1 = new Narf(1);
  var f2 = new Narf(2);
  var f3 = new Narf(3);

  function baz(f, y) {
    f.y = y;
  }

  baz(f1, {
    y: 9
  });
  baz(f2, {
    y: 9
  });
  baz(f2, {
    y: 9
  });
  baz(f2, {
    y: 9
  });
  baz(f3, {
    a: -1
  });
  baz();
})();

(function () {
  function Foo(x) {
    this.x = x;
    this.a = x;
  }

  function Bar(x) {
    this.x = x;
    this.b = x;
  }

  function readA(o) {
    return o.x.a;
  }

  var f = new Foo({
    a: 1
  });
  var b = new Bar({
    a: 2
  });
  readA(f);
  1;
  readA(b);
  2;
  readA(f);
  1;
  readA(b);
  2;
  readA(f);
  1;
  readA(b);
  2;
  readA();
  f.a.y = 0;
  readA();
})();
