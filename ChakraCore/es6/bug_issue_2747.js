//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var oldSet = Map.prototype.set;
var m;

function constructMap() {
  m = new Map([["a", 1], ["b", 2]]);
}

Object.defineProperty(Map.prototype, "set", {
  get: Map.prototype.get,
  // can be any Map.prototype method that depends on `this` being valid
  configurable: true
});

try {
  function a() {
    return Map.prototype.set;
  }

  a();
} catch (e) {
  ;
}

try {
  constructMap();
} catch (e) {
  ;
}

Object.defineProperty(Map.prototype, "set", {
  get: function () {
    return oldSet;
  }
});

function a() {
  return Map.prototype.set;
}

;
a();
constructMap();

function b() {
  m.set("a", 2);
}

b();
m.get("a") === 2; //
// Check Set
//

var oldAdd = Set.prototype.add;
var s;

function constructSet() {
  s = new Set([1, 2, 3, 2, 4, 1]);
}

Object.defineProperty(Set.prototype, "add", {
  get: Set.prototype.has,
  // can be any Set.prototype method that depends on `this` being valid
  configurable: true
});

try {
  function a() {
    return Set.prototype.add;
  }

  ;
  a();
} catch (e) {
  ;
}

try {
  constructSet();
} catch (e) {
  ;
}

Object.defineProperty(Set.prototype, "add", {
  get: function () {
    return oldAdd;
  }
});

function a() {
  return Set.prototype.add;
}

a();
constructSet();

function b() {
  s.add(6);
}

b();
s.has(6) === true;
