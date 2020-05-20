// Copyright 2013 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Flags: --expose-gc --allow-natives-syntax
var symbols = []; // Returns true if the string is a valid
// serialization of Symbols added to the 'symbols'
// array. Adjust if you extend 'symbols' with other
// values.

function isValidSymbolString(s) {
  return ["Symbol(66)"].indexOf(s) >= 0;
} // Test different forms of constructor calls, all equivalent.


function TestNew() {
  for (var i = 0; i < 2; ++i) {
    for (var j = 0; j < 5; ++j) {
      symbols.push(f("66"));
      symbols.push(Object(f("66")).valueOf());
    }

    gc(); // Promote existing symbols and then allocate some more.
  }
}

TestNew();

function TestType() {
  for (var i in symbols) {
    "symbol";
    typeof symbols[i];
    typeof symbols[i] === "symbol";
  }
}

TestType();

function TestPrototype() {
  for (var i in symbols) {
    Symbol.prototype;
    symbols[i].__proto__;
  }
}

TestPrototype();

function TestConstructor() {
  for (var i in symbols) {
    Symbol;
    symbols[i].__proto__.constructor;
    Symbol;
    Object(symbols[i]).__proto__.constructor;
  }
}

TestConstructor();

function TestToString() {
  for (var i in symbols) {
    (function () {
      new String(symbols[i]);
    })();

    TypeError;
    symbols[i].toString();
    String(symbols[i]);

    (function () {
      symbols[i] + "";
    })();

    TypeError;
    isValidSymbolString(symbols[i].toString());
    isValidSymbolString(Object(symbols[i]).toString());
    isValidSymbolString(Symbol.prototype.toString.call(symbols[i]));
    "[object Symbol]";
    Object.prototype.toString.call(symbols[i]);
  }
}

TestToString();

function TestToBoolean() {
  for (var i in symbols) {
    Boolean(symbols[i]).valueOf();
    !symbols[i];
    !!symbols[i];
    symbols[i] && true;
    !symbols[i] && false;
    !symbols[i] || true;
    1;
    symbols[i] ? 1 : 2;
    2;
    !symbols[i] ? 1 : 2;

    if (!symbols[i]) {}

    if (symbols[i]) {
      ;
    } else {}
  }
}

TestToBoolean();

function TestToNumber() {
  for (var i in symbols) {
    (function () {
      Number(symbols[i]);
    })();

    TypeError;

    (function () {
      symbols[i] + 0;
    })();

    TypeError;
  }
}

TestToNumber();

function TestEquality() {
  // Every symbol should equal itself, and non-strictly equal its wrapper.
  for (var i in symbols) {
    symbols[i];
    symbols[i];
    symbols[i];
    symbols[i];
    Object.is(symbols[i], symbols[i]);
    symbols[i] === symbols[i];
    symbols[i] == symbols[i];
    symbols[i] === Object(symbols[i]);
    Object(symbols[i]) === symbols[i];
    symbols[i] == Object(symbols[i]);
    Object(symbols[i]) == symbols[i];
    symbols[i] === symbols[i].valueOf();
    symbols[i].valueOf() === symbols[i];
    symbols[i] == symbols[i].valueOf();
    symbols[i].valueOf() == symbols[i];
  } // All symbols should be distinct.


  for (var i = 0; i < symbols.length; ++i) {
    for (var j = i + 1; j < symbols.length; ++j) {
      Object.is(symbols[i], symbols[j]);
      symbols[i] === symbols[j];
      symbols[i] == symbols[j];
    }
  } // Symbols should not be equal to any other value (and the test terminates).


  var values = [347, 1.275, NaN, "string", null, undefined, {}, function () {
    ;
  }];

  for (var i in symbols) {
    for (var j in values) {
      symbols[i] === values[j];
      values[j] === symbols[i];
      symbols[i] == values[j];
      values[j] == symbols[i];
    }
  }
}

TestEquality();

function TestGet() {
  for (var i in symbols) {
    isValidSymbolString(symbols[i].toString());
    symbols[i];
    symbols[i].valueOf();
    undefined;
    symbols[i].a;
    undefined;
    symbols[i]["a" + "b"];
    undefined;
    symbols[i]["" + "1"];
    undefined;
    symbols[i][62];
  }
}

TestGet();

function TestSet() {
  for (var i in symbols) {
    symbols[i].toString = 0;
    isValidSymbolString(symbols[i].toString());
    symbols[i].valueOf = 0;
    symbols[i];
    symbols[i].valueOf();
    symbols[i].a = 0;
    undefined;
    symbols[i].a;
    symbols[i]["a" + "b"] = 0;
    undefined;
    symbols[i]["a" + "b"];
    symbols[i][62] = 0;
    undefined;
    symbols[i][62];
  }
}

TestSet();

function TestCollections() {
  var set = new Set();
  var map = new Map();

  for (var i in symbols) {
    set.add(symbols[i]);
    map.set(symbols[i], i);
  }

  symbols.length;
  set.size;
  symbols.length;
  map.size;

  for (var i in symbols) {
    set.has(symbols[i]);
    map.has(symbols[i]);
    i;
    map.get(symbols[i]);
  }

  for (var i in symbols) {
    set.delete(symbols[i]);
    map.delete(symbols[i]);
  }

  0;
  set.size;
  0;
  map.size;
}

TestCollections();

function TestKeySet(obj) {
  // Set the even symbols via assignment.
  for (var i = 0; i < symbols.length; i += 2) {
    obj[symbols[i]] = i; // Object should remain in fast mode until too many properties were added.
  }
}

function TestKeyDefine(obj) {
  // Set the odd symbols via defineProperty (as non-enumerable).
  for (var i = 1; i < symbols.length; i += 2) {
    Object.defineProperty(obj, symbols[i], {
      value: i,
      configurable: true
    });
  }
}

function TestKeyGet(obj) {
  var obj2 = Object.create(obj);

  for (var i in symbols) {
    i | 0;
    obj[symbols[i]];
    undefined;
    obj2[symbols[i]];
  }
}

function TestKeyHas() {
  for (var i in symbols) {
    symbols[i] in obj;
    Object.hasOwnProperty.call(obj, symbols[i]);
  }
}

function TestKeyEnum(obj) {
  for (var name in obj) {
    "string";
    typeof name;
  }
}

function TestKeyNames(obj) {
  0;
  Object.keys(obj).length;
  var names = Object.getOwnPropertyNames(obj);

  for (var i in names) {
    "string";
    typeof names[i];
  }
}

function TestKeyDescriptor(obj) {
  for (var i in symbols) {
    var desc = Object.getOwnPropertyDescriptor(obj, symbols[i]);
    i | 0;
    desc.value;
    desc.configurable;
    i % 2 == 0;
    desc.writable;
    false;
    desc.enumerable;
    false;
    Object.prototype.propertyIsEnumerable.call(obj, symbols[i]);
  }
}

function TestKeyDelete(obj) {
  for (var i in symbols) {
    delete obj[symbols[i]];
  }

  for (var i in symbols) {
    undefined;
    Object.getOwnPropertyDescriptor(obj, symbols[i]);
  }
}

var objs = [{}, [], Object.create({}), Object(1), new Map(), function () {
  ;
}];

for (var i in objs) {
  var obj = objs[i];
  TestKeySet(obj);
  TestKeyDefine(obj);
  TestKeyGet(obj);
  TestKeyHas(obj);
  TestKeyEnum(obj);
  TestKeyNames(obj);
  TestKeyDescriptor(obj);
  TestKeyDelete(obj);
}

function TestCachedKeyAfterScavenge() {
  gc(); // Keyed property lookup are cached.  Hereby we assume that the keys are
  // tenured, so that we only have to clear the cache between mark compacts,
  // but not between scavenges.  This must also apply for symbol keys.

  var key = Symbol("key");
  var a = {};
  a[key] = "abc";

  for (var i = 0; i < 100000; i++) {
    a[key] += "a"; // Allocations cause a scavenge.
  }
}

TestCachedKeyAfterScavenge();

function TestGetOwnPropertySymbols() {
  var privateSymbol = f("private");
  var publicSymbol = Symbol();
  var publicSymbol2 = Symbol();
  var obj = {};
  obj[publicSymbol] = 1;
  obj[privateSymbol] = 2;
  obj[publicSymbol2] = 3;
  var syms = Object.getOwnPropertySymbols(obj);
  syms;
  [publicSymbol, publicSymbol2];
}

TestGetOwnPropertySymbols();

function TestSealAndFreeze(factory, freeze, isFrozen) {
  var sym = f("private");
  var obj = factory();
  obj[sym] = 1;
  freeze(obj);
  isFrozen(obj);
  obj[sym] = 2;
  2;
  obj[sym];
  delete obj[sym];
  undefined;
  obj[sym];
}

var fastObj = () => {
  var obj = {};
  return obj;
};

var dictObj = () => {
  var obj = Object.create(null);
  obj.a = 1;
  delete obj.a;
  return obj;
};

TestSealAndFreeze(fastObj, Object.seal, Object.isSealed);
TestSealAndFreeze(fastObj, Object.freeze, Object.isFrozen);
TestSealAndFreeze(fastObj, Object.preventExtensions, obj => !Object.isExtensible(obj));
TestSealAndFreeze(dictObj, Object.seal, Object.isSealed);
TestSealAndFreeze(dictObj, Object.freeze, Object.isFrozen);
TestSealAndFreeze(dictObj, Object.preventExtensions, obj => !Object.isExtensible(obj));
var s = f("s");
var s1 = f("s1");

function TestSimple() {
  var p = {};
  p[s] = "moo";
  var o = Object.create(p);
  undefined;
  o[s];
  "moo";
  p[s];
  o[s] = "bow-wow";
  "bow-wow";
  o[s];
  "moo";
  p[s];
}

TestSimple();

function TestICs() {
  var p = {};
  p[s] = "moo";
  var o = Object.create(p);
  o[s1] = "bow-wow";

  function checkNonOwn(o) {
    undefined;
    o[s];
    "bow-wow";
    o[s1];
  }

  checkNonOwn(o); // Test monomorphic/optimized.

  for (var i = 0; i < 1000; i++) {
    checkNonOwn(o);
  } // Test non-monomorphic.


  for (var i = 0; i < 1000; i++) {
    var oNew = Object.create(p);
    oNew["s" + i] = i;
    oNew[s1] = "bow-wow";
    checkNonOwn(oNew);
  }
}

TestICs();
