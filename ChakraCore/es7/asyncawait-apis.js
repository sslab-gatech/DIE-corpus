//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
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
  console.log(globObj.hasOwnProperty("AsyncFunction"));
}

t1();

function t2() {
  async function af() {
    ;
  }

  console.log(af.hasOwnProperty("length"));
  console.log(af.hasOwnProperty("name"));
  checkAttributes("af", af, "length", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("af", af, "name", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  console.log(0, af.length);
  console.log("af", af.name);

  async function af2(a, b, c) {
    ;
  }

  console.log(3, af2.length);
}

t2();

function t3() {
  async function af() {
    ;
  }

  try {
    new af();
  } catch (e) {
    ;
  }

  console.log(af.hasOwnProperty("prototype"));
}

t3();

function t4() {
  async function af() {
    ;
  }

  console.log(af.hasOwnProperty("arguments"));
  console.log(af.hasOwnProperty("caller")); // Test JavascriptFunction APIs that special case PropertyIds::caller and ::arguments

  Object.setPrototypeOf(af, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations

  console.log("arguments" in af);
  console.log(undefined, af.arguments);
  console.log(undefined, Object.getOwnPropertyDescriptor(af, "arguments"));
  console.log(delete af.arguments);
  console.log(0, af.arguments = 0);
  console.log("arguments" in af);
  console.log(0, af.arguments);
  checkAttributes("af", af, "arguments", {
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(delete af.arguments);
  console.log(af.hasOwnProperty("arguments"));
  console.log("caller" in af);
  console.log(undefined, af.caller);
  console.log(undefined, Object.getOwnPropertyDescriptor(af, "caller"));
  console.log(delete af.caller);
  console.log(0, af.caller = 0);
  console.log("caller" in af);
  console.log(0, af.caller);
  checkAttributes("af", af, "caller", {
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(delete af.caller);
  console.log(af.hasOwnProperty("caller"));

  async function afstrict() {
    "use strict";

    ;
  }

  console.log(afstrict.hasOwnProperty("arguments"));
  console.log(afstrict.hasOwnProperty("caller"));
  Object.setPrototypeOf(afstrict, Object.prototype); // Remove Function.prototype so we don't find its 'caller' and 'arguments' in these operations

  console.log("arguments" in afstrict);
  console.log(undefined, afstrict.arguments);
  console.log(undefined, Object.getOwnPropertyDescriptor(afstrict, "arguments"));
  console.log(delete afstrict.arguments);
  console.log(0, afstrict.arguments = 0);
  console.log("arguments" in afstrict);
  console.log(0, afstrict.arguments);
  checkAttributes("afstrict", afstrict, "arguments", {
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(delete afstrict.arguments);
  console.log(afstrict.hasOwnProperty("arguments"));
  console.log("caller" in afstrict);
  console.log(undefined, afstrict.caller);
  console.log(undefined, Object.getOwnPropertyDescriptor(afstrict, "caller"));
  console.log(delete afstrict.caller);
  console.log(0, afstrict.caller = 0);
  console.log("caller" in afstrict);
  console.log(0, afstrict.caller);
  checkAttributes("afstrict", afstrict, "caller", {
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(delete afstrict.caller);
  console.log(afstrict.hasOwnProperty("caller"));
}

t4();

function t5() {
  async function af() {
    ;
  }

  var asyncFunctionPrototype = Object.getPrototypeOf(af);
  console.log(Function.prototype, Object.getPrototypeOf(asyncFunctionPrototype));
  console.log(asyncFunctionPrototype.hasOwnProperty("constructor"));
  console.log(asyncFunctionPrototype.hasOwnProperty(Symbol.toStringTag));
  checkAttributes("%AsyncFunctionPrototype%", asyncFunctionPrototype, "constructor", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("%AsyncFunctionPrototype%", asyncFunctionPrototype, Symbol.toStringTag, {
    writable: false,
    enumerable: false,
    configurable: true
  });
  console.log("AsyncFunction", asyncFunctionPrototype[Symbol.toStringTag]);
  console.log(asyncFunctionPrototype.hasOwnProperty("prototype"));
}

t5();

function t6() {
  async function af() {
    ;
  }

  var asyncFunctionPrototype = Object.getPrototypeOf(af);
  var asyncFunctionConstructor = asyncFunctionPrototype.constructor;
  console.log(Function, Object.getPrototypeOf(asyncFunctionConstructor));
  console.log(asyncFunctionConstructor.hasOwnProperty("name"));
  console.log(asyncFunctionConstructor.hasOwnProperty("length"));
  console.log(asyncFunctionConstructor.hasOwnProperty("prototype"));
  checkAttributes("%AsyncFunction%", asyncFunctionConstructor, "name", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("%AsyncFunction%", asyncFunctionConstructor, "length", {
    writable: false,
    enumerable: false,
    configurable: true
  });
  checkAttributes("%AsyncFunction%", asyncFunctionConstructor, "prototype", {
    writable: false,
    enumerable: false,
    configurable: false
  });
  console.log("AsyncFunction", asyncFunctionConstructor.name);
  console.log(asyncFunctionPrototype, asyncFunctionConstructor.prototype);
  console.log(1, asyncFunctionConstructor.length);
}

t6();

function t7() {
  var asyncFunctionPrototype = Object.getPrototypeOf(async function () {
    ;
  });
  var AsyncFunction = asyncFunctionPrototype.constructor;
  var af = new AsyncFunction('return await 1;');
  console.log(asyncFunctionPrototype, Object.getPrototypeOf(af));
  console.log("anonymous", af.name);
  console.log("async function anonymous(\n) {return await 1;\n}", af.toString());
  af = new AsyncFunction('a', 'b', 'c', 'await a; await b; await c;');
  console.log("async function anonymous(a,b,c\n) {await a; await b; await c;\n}", af.toString()); // Cannot verify behavior of async functions in conjunction with UnitTestFramework.js
  // due to callback nature of their execution. Instead, verification of behavior is
  // found in async-functionality.js test.
}

t7();
