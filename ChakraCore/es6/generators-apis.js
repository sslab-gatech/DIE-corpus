//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Generators APIs tests -- verifies built-in API objects and properties
var globObj = this;

function checkAttributes(name, o, p, a) {
  var desc = Object.getOwnPropertyDescriptor(o, p);
  var msgPrefix = "Property " + p.toString() + " on " + name + " is ";
  console.log(!!desc);
  console.log(a.writable, desc.writable);
  console.log(a.enumerable, desc.enumerable);
  console.log(a.configurable, desc.configurable);
}

function t1() {
  console.log(globObj.hasOwnProperty("GeneratorFunction"));
}

t1();

function t2() {
  function* gf() {
    ;
  }

  console.log(gf.hasOwnProperty("length"));
  console.log(gf.hasOwnProperty("name"));
  console.log(gf.hasOwnProperty("prototype"));
  checkAttributes("gf", gf, "length", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("gf", gf, "name", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("gf", gf, "prototype", {
    writable: true,
    enumerable: false,
    configurable: false
  });

  function gf2(a, b, c) {
    ;
  }

  console.log(0, gf.length);
  console.log(3, gf2.length);
  console.log("gf", gf.name);
  console.log(gf.prototype.hasOwnProperty("constructor"));
}

t2(); // Regression Test GitHub Issue #3065: Generator length property is inconsistently configurable (+ assert failure in debug build)
// https://github.com/Microsoft/ChakraCore/issues/3065

function t3() {
  function* gf(x, y) {
    ;
  }

  checkAttributes("gf", gf, "length", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  console.log(2, gf.length);
  gf.length = 3;
  console.log(2, gf.length);
  var myLength = 4;
  var getCalled = false;
  var setCalled = false;
  Object.defineProperty(gf, 'length', {
    get: function () {
      getCalled = true;
      return myLength;
    },
    set: function (value) {
      setCalled = true;
      myLength = value;
    }
  });
  console.log(4, gf.length);
  console.log(getCalled, gf.length);
  getCalled = false;
  gf.length = 5;
  console.log(5, gf.length);
  console.log(getCalled, gf.length); // Writable attribute should not be specified on this property now as it has accessors.

  checkAttributes("gf", gf, "length", {
    writable: undefined,
    enumerable: false,
    configurable: true
  });
  getCalled = false;
  setCalled = true;
  var myName = "MyGeneratorFunction";
  Object.defineProperty(gf, 'myName', {
    get: function () {
      getCalled = true;
      return myName;
    },
    set: function (value) {
      setCalled = true;
      myName = value;
    }
  });
  console.log("MyGeneratorFunction", gf.myName);
  console.log(getCalled, gf.myName);
  gf.myName = "MyGeneratorFunctionRenamed";
  console.log("MyGeneratorFunctionRenamed", gf.myName);
  console.log(setCalled, gf.myName);
  checkAttributes("gf", gf, "myName", {
    writable: undefined,
    enumerable: false,
    configurable: false
  });
}

t3();

function t4() {
  function* gf() {
    ;
  }

  console.log(gf.hasOwnProperty("arguments"));
  console.log(gf.hasOwnProperty("caller")); // Test JavascriptGeneratorFunction APIs that special case PropertyIds::caller and ::arguments

  Object.setPrototypeOf(gf, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations

  console.log("arguments" in gf);
  console.log(undefined, gf.arguments);
  console.log(undefined, Object.getOwnPropertyDescriptor(gf, "arguments"));
  console.log(delete gf.arguments);
  console.log(0, gf.arguments = 0);
  console.log("arguments" in gf);
  console.log(0, gf.arguments);
  checkAttributes("gf", gf, "arguments", {
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(delete gf.arguments);
  console.log(gf.hasOwnProperty("arguments"));
  console.log("caller" in gf);
  console.log(undefined, gf.caller);
  console.log(undefined, Object.getOwnPropertyDescriptor(gf, "caller"));
  console.log(delete gf.caller);
  console.log(0, gf.caller = 0);
  console.log("caller" in gf);
  console.log(0, gf.caller);
  checkAttributes("gf", gf, "caller", {
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(delete gf.caller);
  console.log(gf.hasOwnProperty("caller"));

  function* gfstrict() {
    "use strict";

    ;
  }

  console.log(gfstrict.hasOwnProperty("arguments"));
  console.log(gfstrict.hasOwnProperty("caller"));
  Object.setPrototypeOf(gfstrict, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations

  console.log("arguments" in gfstrict);
  console.log(undefined, gfstrict.arguments);
  console.log(undefined, Object.getOwnPropertyDescriptor(gfstrict, "arguments"));
  console.log(delete gfstrict.arguments);
  console.log(0, gfstrict.arguments = 0);
  console.log("arguments" in gfstrict);
  console.log(0, gfstrict.arguments);
  checkAttributes("gfstrict", gfstrict, "arguments", {
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(delete gfstrict.arguments);
  console.log(gfstrict.hasOwnProperty("arguments"));
  console.log("caller" in gfstrict);
  console.log(undefined, gfstrict.caller);
  console.log(undefined, Object.getOwnPropertyDescriptor(gfstrict, "caller"));
  console.log(delete gfstrict.caller);
  console.log(0, gfstrict.caller = 0);
  console.log("caller" in gfstrict);
  console.log(0, gfstrict.caller);
  checkAttributes("gfstrict", gfstrict, "caller", {
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(delete gfstrict.caller);
  console.log(gfstrict.hasOwnProperty("caller"));
}

t4();

function t5() {
  function* gf0() {
    ;
  }

  function* gf1(a) {
    ;
  }

  function* gf5(a, b, c, d, e) {
    ;
  }

  console.log(0, gf0.length);
  console.log(1, gf1.length);
  console.log(5, gf5.length);
}

t5();

function t6() {
  function* gf() {
    ;
  }

  var generatorFunctionPrototype = Object.getPrototypeOf(gf);
  console.log(Function.prototype, Object.getPrototypeOf(generatorFunctionPrototype));
  console.log(generatorFunctionPrototype.hasOwnProperty("constructor"));
  console.log(generatorFunctionPrototype.hasOwnProperty("prototype"));
  console.log(generatorFunctionPrototype.hasOwnProperty(Symbol.toStringTag));
  checkAttributes("GeneratorFunction.prototype", generatorFunctionPrototype, "constructor", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("GeneratorFunction.prototype", generatorFunctionPrototype, "prototype", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("GeneratorFunction.prototype", generatorFunctionPrototype, Symbol.toStringTag, {
    writable: false,
    enumerable: false,
    configurable: true
  });
  console.log("GeneratorFunction", generatorFunctionPrototype[Symbol.toStringTag]);
}

t6();

function t7() {
  function* gf() {
    ;
  }

  var generatorFunctionPrototype = Object.getPrototypeOf(gf);
  var generatorFunctionConstructor = generatorFunctionPrototype.constructor;
  console.log(Function, Object.getPrototypeOf(generatorFunctionConstructor));
  console.log(generatorFunctionConstructor.hasOwnProperty("name"));
  console.log(generatorFunctionConstructor.hasOwnProperty("length"));
  console.log(generatorFunctionConstructor.hasOwnProperty("prototype"));
  checkAttributes("GeneratorFunction", generatorFunctionConstructor, "name", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("GeneratorFunction", generatorFunctionConstructor, "length", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("GeneratorFunction", generatorFunctionConstructor, "prototype", {
    writable: false,
    enumerable: false,
    configurable: false
  });
  console.log("GeneratorFunction", generatorFunctionConstructor.name);
  console.log(generatorFunctionPrototype, generatorFunctionConstructor.prototype);
  console.log(1, generatorFunctionConstructor.length);
}

t7();

function t8() {
  function* gf() {
    ;
  }

  var generatorFunctionPrototype = Object.getPrototypeOf(gf);
  var generatorPrototype = generatorFunctionPrototype.prototype;
  var iteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  console.log(iteratorPrototype, Object.getPrototypeOf(generatorPrototype));
  console.log(generatorPrototype.hasOwnProperty("constructor"));
  console.log(generatorPrototype.hasOwnProperty("next"));
  console.log(generatorPrototype.hasOwnProperty("throw"));
  console.log(generatorPrototype.hasOwnProperty("return"));
  console.log(generatorPrototype.hasOwnProperty(Symbol.iterator));
  console.log(generatorPrototype.hasOwnProperty(Symbol.toStringTag));
  checkAttributes("Generator prototype", generatorPrototype, "constructor", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("Generator prototype", generatorPrototype, "next", {
    writable: true,
    enumerable: false,
    configurable: true
  });
  checkAttributes("Generator prototype", generatorPrototype, "return", {
    writable: true,
    enumerable: false,
    configurable: true
  });
  checkAttributes("Generator prototype", generatorPrototype, "throw", {
    writable: true,
    enumerable: false,
    configurable: true
  });
  checkAttributes("Generator prototype", generatorPrototype, Symbol.toStringTag, {
    writable: false,
    enumerable: false,
    configurable: true
  });
  console.log(generatorFunctionPrototype, generatorPrototype.constructor);
  console.log("Generator", generatorPrototype[Symbol.toStringTag]);
}

t8();

function t9() {
  function* gf() {
    ;
  }

  var generatorFunctionPrototype = Object.getPrototypeOf(gf);
  var generatorPrototype = generatorFunctionPrototype.prototype;
  var g = gf();
  console.log(generatorPrototype, Object.getPrototypeOf(Object.getPrototypeOf(g)));
  console.log(Object.getPrototypeOf(g), gf.prototype);
  console.log(g instanceof gf);
}

t9();

function t10() {
  function* gf() {
    console.log(arguments.callee === gf);
  }

  gf().next();
}

t10();
