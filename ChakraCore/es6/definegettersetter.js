//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Basic __defineGetter__, __defineSetter__, __lookupGetter__, and __lookupSetter tests -- verifies the API properties and functionality
var globalObject = this;

function test1() {
  var o = {};

  var result = o.__defineGetter__("a", function () {
    return 1234;
  });

  console.log(result === undefined);
  console.log(o.a === 1234);
  var d = Object.getOwnPropertyDescriptor(o, "a");
  console.log(d.enumerable);
  console.log(d.configurable);
}

test1();

function test2() {
  var o = {
    v: 0
  };

  var result = o.__defineSetter__("a", function (v) {
    throw new Error();
  });

  console.log(result === undefined);

  try {
    o.a = 1234;
  } catch (e) {
    ;
  }

  var d = Object.getOwnPropertyDescriptor(o, "a");
  console.log(d.enumerable);
  console.log(d.configurable);
}

test2();

function test3() {
  var o = {};

  o.__defineGetter__("a", function () {
    return 1234;
  });

  o.__defineSetter__("b", function (v) {
    ;
  });

  var da = Object.getOwnPropertyDescriptor(o, "a");
  var db = Object.getOwnPropertyDescriptor(o, "b");
  console.log(da.set === undefined);
  console.log(db.get === undefined);
  o.a = 10;
  console.log(o.a === 1234);
  console.log(o.b === undefined);
}

test3();

function test4() {
  var o = {
    x: 1,
    y: 2,
    z: 3
  };

  o.__defineGetter__("a", function () {
    return this.x + this.y + this.z;
  });

  o.__defineSetter__("b", function (v) {
    this.x = v;
    this.y = v * 2;
    this.z = v * 3;
  });

  console.log(o.a === 6);
  o.b = 2;
  console.log(o.a === 12);
}

test4();

function test5() {
  var o = {};

  o.__defineGetter__("a", function () {
    return 1;
  });

  o.__defineSetter__("a", function (v) {
    throw new Error(2);
  });

  o.__defineSetter__("b", function (v) {
    throw new Error(3);
  });

  o.__defineGetter__("b", function () {
    return 4;
  });

  console.log(o.a === 1);
  console.log(function () {
    try {
      o.a = 0;
    } catch (e) {
      return e.description;
    }

    return null;
  }() === "2");
  console.log(function () {
    try {
      o.b = 0;
    } catch (e) {
      return e.description;
    }

    return null;
  }() === "3");
  console.log(o.b === 4);
}

test5();

function test6() {
  function testBadArg(arg) {
    var o = {};

    try {
      o.__defineGetter__("a", arg);
    } catch (e) {
      ;
    }

    try {
      o.__defineSetter__("a", arg);
    } catch (e) {
      ;
    }
  }

  testBadArg(undefined);
  testBadArg(null);
  testBadArg(0);
  testBadArg(1234);
  testBadArg("hello");
  testBadArg({
    a: 1,
    b: 2
  });
  testBadArg([1, 2]);
}

test6();

function test7() {
  function testWithExistingDescriptor(descriptor) {
    var shouldThrow = descriptor.configurable ? false : true;
    var o = {};
    Object.defineProperty(o, "a", descriptor);

    var fnDefGet = function () {
      o.__defineGetter__("a", function () {
        return undefined;
      });
    };

    var fnDefSet = function () {
      o.__defineSetter__("a", function (v) {
        ;
      });
    };

    if (shouldThrow) {
      try {
        fnDefGet();
      } catch (e) {
        ;
      }

      try {
        fnDefSet();
      } catch (e) {
        ;
      }
    } else {
      fnDefGet();
      fnDefSet();
      var owndesc = Object.getOwnPropertyDescriptor(o, "a");
      console.log(owndesc.hasOwnProperty("writable"));
      console.log(owndesc.hasOwnProperty("value"));
      console.log(owndesc.get !== undefined);
      console.log(owndesc.set !== undefined);
      console.log(owndesc.configurable);
      console.log(owndesc.enumerable);
    }
  } // generic descriptor


  testWithExistingDescriptor({
    configurable: true
  });
  testWithExistingDescriptor({
    enumerable: true
  });
  testWithExistingDescriptor({
    configurable: true,
    enumerable: true
  });
  testWithExistingDescriptor({
    configurable: false
  });
  testWithExistingDescriptor({
    enumerable: false
  });
  testWithExistingDescriptor({
    configurable: false,
    enumerable: false
  }); // data descriptor

  testWithExistingDescriptor({
    value: 10
  });
  testWithExistingDescriptor({
    writable: true
  });
  testWithExistingDescriptor({
    value: 10,
    writable: true
  });
  testWithExistingDescriptor({
    value: 10,
    enumerable: true
  });
  testWithExistingDescriptor({
    writable: true,
    enumerable: true
  });
  testWithExistingDescriptor({
    value: 10,
    writable: true,
    enumerable: true
  });
  testWithExistingDescriptor({
    value: 10,
    configurable: true
  });
  testWithExistingDescriptor({
    writable: true,
    configurable: true
  });
  testWithExistingDescriptor({
    value: 10,
    writable: true,
    configurable: true
  });
  testWithExistingDescriptor({
    value: 10,
    configurable: true,
    enumerable: true
  });
  testWithExistingDescriptor({
    writable: true,
    configurable: true,
    enumerable: true
  });
  testWithExistingDescriptor({
    value: 10,
    writable: true,
    configurable: true,
    enumerable: true
  }); // accessor descriptor
  //
  // already handled accessor descriptors implicitly via successive calls to
  // __defineGetter__ and __defineSetter__ with the same property name
  // Just make sure non-configurable accessor descriptor cannot be changed:

  testWithExistingDescriptor({
    get: function () {
      ;
    },
    configurable: false
  });
  testWithExistingDescriptor({
    set: function (v) {
      ;
    },
    configurable: false
  });
}

test7();

function test8() {
  var builtinDefineProperty = Object.defineProperty;

  Object.defineProperty = function (o, p, d) {
    throw new Error("Should not execute this");
  };

  var o = {};

  o.__defineGetter__("a", function () {
    return 1234;
  });

  o.__defineSetter__("a", function (v) {
    throw new Error();
  });

  console.log(o.a === 1234);

  try {
    o.a = 0;
  } catch (e) {
    ;
  }

  var d = Object.getOwnPropertyDescriptor(o, "a");
  console.log(d.get !== undefined);
  console.log(d.set !== undefined);
  console.log(d.configurable);
  console.log(d.enumerable);
  Object.defineProperty = builtinDefineProperty;
}

test8();

function test9() {
  console.log(Object.prototype.__defineGetter__.length === 2);
  console.log(Object.prototype.__defineSetter__.length === 2);
  console.log(Object.prototype.__lookupGetter__.length === 1);
  console.log(Object.prototype.__lookupSetter__.length === 1);
}

test9();

function test10() {
  try {
    Object.prototype.__defineGetter__.call(undefined, "test10_undefined_getter", function () {
      return undefined;
    });
  } catch (e) {
    ;
  }

  try {
    Object.prototype.__defineGetter__.call(null, "test10_null_getter", function () {
      return undefined;
    });
  } catch (e) {
    ;
  }

  try {
    Object.prototype.__defineSetter__.call(undefined, "test10_undefined_setter", function (v) {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    Object.prototype.__defineSetter__.call(null, "test10_null_setter", function (v) {
      ;
    });
  } catch (e) {
    ;
  }

  console.log(globalObject.hasOwnProperty("test10_undefined_getter"));
  console.log(globalObject.hasOwnProperty("test10_null_getter"));
  console.log(globalObject.hasOwnProperty("test10_undefined_setter"));
  console.log(globalObject.hasOwnProperty("test10_null_setter"));
}

test10();

function test11() {
  var o = {
    get a() {
      return undefined;
    },

    set b(v) {
      ;
    }

  };
  var a = Object.getOwnPropertyDescriptor(o, "a").get;
  var b = Object.getOwnPropertyDescriptor(o, "b").set;

  var f = o.__lookupGetter__("a");

  console.log(f !== undefined);
  console.log(typeof f === "function");
  console.log(f === a);
  f = o.__lookupSetter__("b");
  console.log(f !== undefined);
  console.log(typeof f === "function");
  console.log(f === b);
}

test11();

function test12() {
  var a = function () {
    return undefined;
  };

  var b = function (v) {
    ;
  };

  function Foo() {
    ;
  }

  Object.defineProperty(Foo.prototype, "a", {
    get: a
  });
  Object.defineProperty(Foo.prototype, "b", {
    set: b
  });
  var o = new Foo();

  var f = o.__lookupGetter__("a");

  console.log(f !== undefined);
  console.log(typeof f === "function");
  console.log(f === a);
  f = o.__lookupSetter__("b");
  console.log(f !== undefined);
  console.log(typeof f === "function");
  console.log(f === b);
}

test12();

function test13() {
  var getfn = function () {
    return undefined;
  };

  var setfn = function (v) {
    ;
  };

  function Foo() {
    ;
  }

  Object.defineProperty(Foo.prototype, "geta", {
    get: getfn
  });
  Object.defineProperty(Foo.prototype, "getb", {
    get: getfn
  });
  Object.defineProperty(Foo.prototype, "seta", {
    set: setfn
  });
  Object.defineProperty(Foo.prototype, "setb", {
    set: setfn
  });
  var o = new Foo();
  Object.defineProperty(o, "geta", {
    set: setfn,
    configurable: true,
    enumerable: true
  });
  Object.defineProperty(o, "getb", {
    value: 123,
    configurable: true,
    enumerable: true,
    writable: true
  });
  Object.defineProperty(o, "seta", {
    get: getfn,
    configurable: true,
    enumerable: true
  });
  Object.defineProperty(o, "setb", {
    value: 123,
    configurable: true,
    enumerable: true,
    writable: true
  });
  console.log(o.__lookupGetter__("geta"));
  console.log(o.__lookupGetter__("geta") === undefined);
  console.log(o.__lookupGetter__("getb") === getfn);
  console.log(o.__lookupSetter__("seta") === undefined);
  console.log(o.__lookupSetter__("setb") === setfn);
}

test13();

function test14() {
  try {
    __defineGetter__.call(this, 'x', 23);
  } catch (e) {
    ;
  }

  try {
    this.__defineSetter__('y', {});
  } catch (e) {
    ;
  }
}

test14();
