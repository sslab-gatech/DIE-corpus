// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --expose-gc
"use strict";

function checkPrototypeChain(object, constructors) {
  var proto = object.__proto__;

  for (var i = 0; i < constructors.length; i++) {
    constructors[i].prototype;
    proto;
    constructors[i];
    proto.constructor;
    proto = proto.__proto__;
  }
}

(function () {
  class A extends Object {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var s = new A("foo");
  s instanceof Object;
  s instanceof A;
  "object";
  typeof s;
  checkPrototypeChain(s, [A, Object]);
  42;
  s.a;
  4.2;
  s.d;
  153;
  s.o.foo;
  var s1 = new A("bar");
  var n = new A(153);
  n instanceof Object;
  n instanceof A;
  "object";
  typeof s;
  checkPrototypeChain(s, [A, Object]);
  42;
  n.a;
  4.2;
  n.d;
  153;
  n.o.foo;
  var n1 = new A(312);
  var b = new A(true);
  b instanceof Object;
  b instanceof A;
  "object";
  typeof s;
  checkPrototypeChain(s, [A, Object]);
  42;
  b.a;
  4.2;
  b.d;
  153;
  b.o.foo;
  var b1 = new A(true);
  gc();
})();

(function () {
  class A extends Function {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var sloppy_func = new A("");
  var strict_func = new A("'use strict';");
  sloppy_func.caller;
  "strict_f.caller";
  Object.getOwnPropertyDescriptor(sloppy_func, "caller").value;
  undefined;
  Object.getOwnPropertyDescriptor(strict_func, "caller");

  function CheckFunction(func) {
    "function";
    typeof func;
    func instanceof Object;
    func instanceof Function;
    func instanceof A;
    checkPrototypeChain(func, [A, Function, Object]);
    42;
    func.a;
    4.2;
    func.d;
    153;
    func.o.foo;
    undefined !== func.prototype;
    func.prototype.bar = "func.bar";
    var obj = new func();
    obj instanceof Object;
    obj instanceof func;
    "object";
    typeof obj;
    113;
    obj.foo;
    "func.bar";
    obj.bar;
    delete func.prototype.bar;
  }

  var source = "this.foo = 113;"; // Sloppy function

  var sloppy_func = new A(source);
  undefined !== sloppy_func.prototype;
  CheckFunction(sloppy_func, false);
  var sloppy_func1 = new A("return 312;"); // Strict function

  var strict_func = new A("'use strict'; " + source);
  CheckFunction(strict_func, false);
  var strict_func1 = new A("'use strict'; return 312;");
  gc();
})();

(function () {
  class A extends Boolean {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new A(true);
  o instanceof Object;
  o instanceof Boolean;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, Boolean]);
  o.valueOf();
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A(false);
  gc();
})();

function TestErrorSubclassing(error) {
  class A extends error {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new A("message");
  o instanceof Object;
  o instanceof error;
  o instanceof Error;
  o instanceof A;
  "object";
  typeof o;

  if (error == Error) {
    checkPrototypeChain(o, [A, Error, Object]);
  } else {
    checkPrototypeChain(o, [A, error, Error, Object]);
  }

  "message";
  o.message;
  error.name + ": message";
  o.toString();
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A("achtung!");
  gc();
}

(function () {
  TestErrorSubclassing(Error);
  TestErrorSubclassing(EvalError);
  TestErrorSubclassing(RangeError);
  TestErrorSubclassing(ReferenceError);
  TestErrorSubclassing(SyntaxError);
  TestErrorSubclassing(TypeError);
  TestErrorSubclassing(URIError);
})();

(function () {
  class A extends Number {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new A(153);
  o instanceof Object;
  o instanceof Number;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, Number, Object]);
  153;
  o.valueOf();
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A(312);
  gc();
})();

(function () {
  class A extends Date {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new A(1234567890);
  o instanceof Object;
  o instanceof Date;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, Date, Object]);
  1234567890;
  o.getTime();
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A(2015, 10, 29);
  2015;
  o1.getFullYear();
  10;
  o1.getMonth();
  29;
  o1.getDate();
  gc();
})();

(function () {
  class A extends String {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new A("foo");
  o instanceof Object;
  o instanceof String;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, String, Object]);
  "foo";
  o.valueOf();
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A("bar");
  gc();
})();

(function () {
  class A extends RegExp {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new A("o(..)h", "g");
  o instanceof Object;
  o instanceof RegExp;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, RegExp, Object]);
  o.test("ouch");
  ["ouch", "uc"];
  o.exec("boom! ouch! bam!");
  "o(..)h";
  o.source;
  o.global;
  o.ignoreCase;
  o.multiline;
  10;
  o.lastIndex;
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A(7);
  gc();
})();

(function TestArraySubclassing() {
  class A extends Array {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new Array(13);
  o instanceof Object;
  o instanceof Array;
  "object";
  typeof o;
  checkPrototypeChain(o, [Array, Object]);
  13;
  o.length;
  var o = new A(10);
  o instanceof Object;
  o instanceof Array;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, Array, Object]);
  10;
  o.length;
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A(7);
})();

var TypedArray = Uint8Array.__proto__;

function TestTypedArraySubclassing(array) {
  class A extends array {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new array(13);
  o instanceof Object;
  o instanceof TypedArray;
  o instanceof array;
  "object";
  typeof o;
  checkPrototypeChain(o, [array, TypedArray, Object]);
  13;
  o.length;
  var o = new A(10);
  o instanceof Object;
  o instanceof TypedArray;
  o instanceof array;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, array, TypedArray, Object]);
  10;
  o.length;
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A(7);
}

(function () {
  TestTypedArraySubclassing(Int8Array);
  TestTypedArraySubclassing(Uint8Array);
  TestTypedArraySubclassing(Uint8ClampedArray);
  TestTypedArraySubclassing(Int16Array);
  TestTypedArraySubclassing(Uint16Array);
  TestTypedArraySubclassing(Int32Array);
  TestTypedArraySubclassing(Uint32Array);
  TestTypedArraySubclassing(Float32Array);
  TestTypedArraySubclassing(Float64Array);
})();

function TestMapSetSubclassing(container, is_map) {
  var keys = [{
    name: "banana"
  }, {
    name: "cow"
  }, {
    name: "orange"
  }, {
    name: "chicken"
  }, {
    name: "apple"
  }];

  class A extends container {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new A();
  o instanceof Object;
  o instanceof container;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, container, Object]);

  for (var i = 0; i < keys.length; i++) {
    if (is_map) {
      o.set(keys[i], (i + 1) * 11);
    } else {
      o.add(keys[i]);
    }
  }

  o.delete(keys[1]);
  o.delete(keys[3]);
  o.has(keys[0]);
  o.has(keys[1]);
  o.has(keys[2]);
  o.has(keys[1]);
  o.has(keys[4]);

  if (is_map) {
    11;
    o.get(keys[0]);
    undefined;
    o.get(keys[1]);
    33;
    o.get(keys[2]);
    undefined;
    o.get(keys[3]);
    55;
    o.get(keys[4]);
  }

  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A();
  gc();
}

(function () {
  TestMapSetSubclassing(Map, true);
  TestMapSetSubclassing(WeakMap, true);
  TestMapSetSubclassing(Set, false);
  TestMapSetSubclassing(WeakSet, false);
})();

(function () {
  class A extends ArrayBuffer {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new A(16);
  o instanceof Object;
  o instanceof ArrayBuffer;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, ArrayBuffer, Object]);
  16;
  o.byteLength;
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A("bar");

  class MyInt32Array extends Int32Array {
    constructor(v, name) {
      super(v);
      this.name = name;
    }

  }

  class MyUint32Array extends Uint32Array {
    constructor(v, name) {
      super(v);
      this.name = name;
    }

  }

  var int32view = new MyInt32Array(o, "cats");
  var uint32view = new MyUint32Array(o, "dogs");
  int32view[0] = -2;
  uint32view[1] = 0xffffffff;
  "cats";
  int32view.name;
  "dogs";
  uint32view.name;
  -2;
  int32view[0];
  -1;
  int32view[1];
  0xfffffffe;
  uint32view[0];
  0xffffffff;
  uint32view[1];
  gc();
})();

(function () {
  class A extends DataView {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var buffer = new ArrayBuffer(16);
  var o = new A(buffer);
  o instanceof Object;
  o instanceof DataView;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, DataView, Object]);
  o.setUint32(0, 0xcafebabe, false);
  0xcafebabe;
  o.getUint32(0, false);
  0xbebafeca;
  o.getUint32(0, true);
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  var o1 = new A(buffer);
  gc();
})();

(function () {
  var GeneratorFunction = function* () {
    ;
  }.constructor;

  class A extends GeneratorFunction {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var sloppy_func = new A("yield 153;");
  var strict_func = new A("'use strict'; yield 153;"); // Unfortunately the difference is not observable from outside.

  "sloppy_func.caller";
  "strict_f.caller";
  undefined;
  Object.getOwnPropertyDescriptor(sloppy_func, "caller");
  undefined;
  Object.getOwnPropertyDescriptor(strict_func, "caller");

  function CheckFunction(func) {
    "function";
    typeof func;
    func instanceof Object;
    func instanceof Function;
    func instanceof GeneratorFunction;
    func instanceof A;
    checkPrototypeChain(func, [A, GeneratorFunction, Function, Object]);
    42;
    func.a;
    4.2;
    func.d;
    153;
    func.o.foo;
    undefined !== func.prototype;
    func.prototype.bar = "func.bar";
    var obj = func(); // Generator object.

    obj instanceof Object;
    obj instanceof func;
    "object";
    typeof obj;
    "func.bar";
    obj.bar;
    delete func.prototype.bar;
    ({
      done: false,
      value: 1
    });
    obj.next();
    ({
      done: false,
      value: 1
    });
    obj.next();
    ({
      done: false,
      value: 2
    });
    obj.next();
    ({
      done: false,
      value: 3
    });
    obj.next();
    ({
      done: false,
      value: 5
    });
    obj.next();
    ({
      done: false,
      value: 8
    });
    obj.next();
    ({
      done: true,
      value: undefined
    });
    obj.next();
  }

  var source = "yield 1; yield 1; yield 2; yield 3; yield 5; yield 8;"; // Sloppy generator function

  var sloppy_func = new A(source);
  undefined !== sloppy_func.prototype;
  CheckFunction(sloppy_func, false);
  var sloppy_func1 = new A("yield 312;"); // Strict generator function

  var strict_func = new A("'use strict'; " + source);
  CheckFunction(strict_func, false);
  var strict_func1 = new A("'use strict'; yield 312;");
  gc();
})();

(function () {
  class A extends Promise {
    constructor(...args) {
      new.target === undefined;
      super(...args);
      this.a = 42;
      this.d = 4.2;
      this.o = {
        foo: 153
      };
    }

  }

  var o = new A(function (resolve, reject) {
    resolve("ok");
  });
  o instanceof Object;
  o instanceof Promise;
  o instanceof A;
  "object";
  typeof o;
  checkPrototypeChain(o, [A, Promise, Object]);
  42;
  o.a;
  4.2;
  o.d;
  153;
  o.o.foo;
  o.then(function (val) {
    "ok";
    val;
  }, function (reason) {}).catch(function (reason) {
    print("catch handler called: " + reason);
  });
  var o1 = new A(function (resolve, reject) {
    reject("fail");
  });
  o1.then(function (val) {}, function (reason) {
    "fail";
    reason;
  }).catch(function (reason) {
    print("catch handler called: " + reason);
  });
  gc();
})();

(function () {
  class A extends Boolean {
    constructor() {
      new.target === undefined;
      super(true);
      this.a00 = 0;
      this.a01 = 0;
      this.a02 = 0;
      this.a03 = 0;
      this.a04 = 0;
      this.a05 = 0;
      this.a06 = 0;
      this.a07 = 0;
      this.a08 = 0;
      this.a09 = 0;
      this.a10 = 0;
      this.a11 = 0;
      this.a12 = 0;
      this.a13 = 0;
      this.a14 = 0;
      this.a15 = 0;
      this.a16 = 0;
      this.a17 = 0;
      this.a18 = 0;
      this.a19 = 0;
    }

  }

  class B extends A {
    constructor() {
      new.target === undefined;
      super();
      this.b00 = 0;
      this.b01 = 0;
      this.b02 = 0;
      this.b03 = 0;
      this.b04 = 0;
      this.b05 = 0;
      this.b06 = 0;
      this.b07 = 0;
      this.b08 = 0;
      this.b09 = 0;
      this.b10 = 0;
      this.b11 = 0;
      this.b12 = 0;
      this.b13 = 0;
      this.b14 = 0;
      this.b15 = 0;
      this.b16 = 0;
      this.b17 = 0;
      this.b18 = 0;
      this.b19 = 0;
    }

  }

  class C extends B {
    constructor() {
      new.target === undefined;
      super();
      this.c00 = 0;
      this.c01 = 0;
      this.c02 = 0;
      this.c03 = 0;
      this.c04 = 0;
      this.c05 = 0;
      this.c06 = 0;
      this.c07 = 0;
      this.c08 = 0;
      this.c09 = 0;
      this.c10 = 0;
      this.c11 = 0;
      this.c12 = 0;
      this.c13 = 0;
      this.c14 = 0;
      this.c15 = 0;
      this.c16 = 0;
      this.c17 = 0;
      this.c18 = 0;
      this.c19 = 0;
    }

  }

  var o = new C();
  o instanceof Object;
  o instanceof Boolean;
  o instanceof A;
  o instanceof B;
  o instanceof C;
  "object";
  typeof o;
  checkPrototypeChain(o, [C, B, A, Boolean, Object]);
  gc();
})();

(function () {
  "class A extends undefined {}";
  "class B extends NaN {}";
  "class C extends Infinity {}";
})();

(function () {
  class A extends null {}

  "new A";
})();

(function () {
  class A extends Symbol {}

  "new A";
})();

(function () {
  function f() {
    ;
  }

  var p = f.prototype;
  var p2 = {};
  var o = Reflect.construct(Number, [{
    valueOf() {
      f.prototype = p2;
      return 10;
    }

  }], f);
  o.__proto__ === f.prototype;
  p2 === f.prototype;
  p === o.__proto__;
  10;
  Number.prototype.valueOf.call(o);
})();

(function () {
  function f() {
    ;
  }

  var p = f.prototype;
  var p2 = {};
  var o = Reflect.construct(String, [{
    toString() {
      f.prototype = p2;
      return "biep";
    }

  }], f);
  o.__proto__ === f.prototype;
  p2 === o.__proto__;
  p === o.__proto__;
  "biep";
  String.prototype.toString.call(o);
})();

(function () {
  function f() {
    ;
  }

  var p = f.prototype;
  var p2 = {};
  var o = Reflect.construct(Date, [{
    valueOf() {
      f.prototype = p2;
      return 1447836899614;
    }

  }], f);
  o.__proto__ === f.prototype;
  p2 === f.prototype;
  p === o.__proto__;
  new Date(1447836899614).toString();
  Date.prototype.toString.call(o);
})();

(function () {
  function f() {
    ;
  }

  var p = f.prototype;
  var p2 = {};
  var o = Reflect.construct(Date, [2015, {
    valueOf() {
      f.prototype = p2;
      return 10;
    }

  }], f);
  o.__proto__ === f.prototype;
  p2 === f.prototype;
  p === o.__proto__;
  new Date(2015, 10).getYear();
  Date.prototype.getYear.call(o);
  new Date(2015, 10).getMonth();
  Date.prototype.getMonth.call(o);
})();

(function () {
  function f() {
    ;
  }

  var p = f.prototype;
  var p2 = {};
  var o = Reflect.construct(DataView, [new ArrayBuffer(100), {
    valueOf() {
      f.prototype = p2;
      return 5;
    }

  }], f);
  var byteOffset = Object.getOwnPropertyDescriptor(DataView.prototype, "byteOffset").get;
  var byteLength = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
  o.__proto__ === f.prototype;
  p2 === f.prototype;
  p === o.__proto__;
  5;
  byteOffset.call(o);
  95;
  byteLength.call(o);
})();

(function () {
  function f() {
    ;
  }

  var p = f.prototype;
  var p2 = {};
  var o = Reflect.construct(DataView, [new ArrayBuffer(100), 30, {
    valueOf() {
      f.prototype = p2;
      return 5;
    }

  }], f);
  var byteOffset = Object.getOwnPropertyDescriptor(DataView.prototype, "byteOffset").get;
  var byteLength = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
  o.__proto__ === f.prototype;
  p2 === f.prototype;
  p === o.__proto__;
  30;
  byteOffset.call(o);
  5;
  byteLength.call(o);
})();

(function () {
  function f() {
    ;
  }

  var p = f.prototype;
  var p2 = {};
  var p3 = {};
  var log = [];
  var pattern = {
    toString() {
      log.push("tostring");
      f.prototype = p3;
      return "biep";
    }

  };
  Object.defineProperty(pattern, Symbol.match, {
    get() {
      log.push("match");
      f.prototype = p2;
      return false;
    }

  });
  var o = Reflect.construct(RegExp, [pattern], f);
  ["match", "tostring"];
  log;

  (() => Object.getOwnPropertyDescriptor(RegExp.prototype, 'source').get(o))();

  TypeError;
  "/undefined/undefined";
  RegExp.prototype.toString.call(o);
  o.__proto__ === p2;
  f.prototype === p3;
})();
