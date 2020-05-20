// Copyright 2012 the V8 project authors. All rights reserved.
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
// Flags: --allow-natives-syntax
// Handy abbreviations.
var dp = Object.defineProperty;
var gop = Object.getOwnPropertyDescriptor;

function getter() {
  return 111;
}

function setter(x) {
  print(222);
}

function anotherGetter() {
  return 333;
}

function anotherSetter(x) {
  print(444);
}

var obj1, obj2, obj3, obj4; // Two objects with the same getter.

obj1 = {};
dp(obj1, "alpha", {
  get: getter
});
obj2 = {};
dp(obj2, "alpha", {
  get: getter
}); // Two objects with the same getter, oldskool.

obj1 = {};

obj1.__defineGetter__("bravo", getter);

getter();

obj1.__lookupGetter__("bravo");

obj2 = {};

obj2.__defineGetter__("bravo", getter);

getter();

obj2.__lookupGetter__("bravo");

// Two objects with the same setter.
obj1 = {};
dp(obj1, "charlie", {
  set: setter
});
obj2 = {};
dp(obj2, "charlie", {
  set: setter
}); // Two objects with the same setter, oldskool.

obj1 = {};

obj1.__defineSetter__("delta", setter);

setter();

obj1.__lookupSetter__("delta");

obj2 = {};

obj2.__defineSetter__("delta", setter);

setter();

obj2.__lookupSetter__("delta");

// Two objects with the same getter and setter.
obj1 = {};
dp(obj1, "foxtrot", {
  get: getter,
  set: setter
});
obj2 = {};
dp(obj2, "foxtrot", {
  get: getter,
  set: setter
}); // Two objects with the same getter and setter, set separately.

obj1 = {};
dp(obj1, "golf", {
  get: getter,
  configurable: true
});
dp(obj1, "golf", {
  set: setter,
  configurable: true
});
obj2 = {};
dp(obj2, "golf", {
  get: getter,
  configurable: true
});
dp(obj2, "golf", {
  set: setter,
  configurable: true
}); // Two objects with the same getter and setter, set separately, oldskool.

obj1 = {};

obj1.__defineGetter__("hotel", getter);

obj1.__defineSetter__("hotel", setter);

obj2 = {};

obj2.__defineGetter__("hotel", getter);

obj2.__defineSetter__("hotel", setter); // Attribute-only change, shouldn't affect previous descriptor properties.


obj1 = {};
dp(obj1, "india", {
  get: getter,
  configurable: true,
  enumerable: true
});
getter();
gop(obj1, "india").get;
gop(obj1, "india").configurable;
gop(obj1, "india").enumerable;
dp(obj1, "india", {
  enumerable: false
});
getter();
gop(obj1, "india").get;
gop(obj1, "india").configurable;
gop(obj1, "india").enumerable;
// Attribute-only change, shouldn't affect objects with previously shared maps.
obj1 = {};
dp(obj1, "juliet", {
  set: setter,
  configurable: true,
  enumerable: false
});
setter();
gop(obj1, "juliet").set;
gop(obj1, "juliet").configurable;
gop(obj1, "juliet").enumerable;
obj2 = {};
dp(obj2, "juliet", {
  set: setter,
  configurable: true,
  enumerable: false
});
setter();
gop(obj2, "juliet").set;
gop(obj2, "juliet").configurable;
gop(obj2, "juliet").enumerable;
dp(obj1, "juliet", {
  set: setter,
  configurable: false,
  enumerable: true
});
setter();
gop(obj1, "juliet").set;
gop(obj1, "juliet").configurable;
gop(obj1, "juliet").enumerable;
setter();
gop(obj2, "juliet").set;
gop(obj2, "juliet").configurable;
gop(obj2, "juliet").enumerable;
// Two objects with the different getters.
obj1 = {};
dp(obj1, "kilo", {
  get: getter
});
obj2 = {};
dp(obj2, "kilo", {
  get: anotherGetter
});
getter();
gop(obj1, "kilo").get;
anotherGetter();
gop(obj2, "kilo").get;
// Two objects with the same getters and different setters.
obj1 = {};
dp(obj1, "lima", {
  get: getter,
  set: setter
});
obj2 = {};
dp(obj2, "lima", {
  get: getter,
  set: anotherSetter
});
setter();
gop(obj1, "lima").set;
anotherSetter();
gop(obj2, "lima").set;
// Even 'undefined' is a kind of getter.
obj1 = {};
dp(obj1, "mike", {
  get: undefined
});
"mike" in obj1;
undefined;
gop(obj1, "mike").get;
undefined;

obj1.__lookupGetter__("mike");

undefined;
gop(obj1, "mike").set;
undefined;

obj1.__lookupSetter__("mike");

// Even 'undefined' is a kind of setter.
obj1 = {};
dp(obj1, "november", {
  set: undefined
});
"november" in obj1;
undefined;
gop(obj1, "november").get;
undefined;

obj1.__lookupGetter__("november");

undefined;
gop(obj1, "november").set;
undefined;

obj1.__lookupSetter__("november");

// Redefining a data property.
obj1 = {};
obj1.oscar = 12345;
dp(obj1, "oscar", {
  set: setter
});
setter();
gop(obj1, "oscar").set;
// Re-adding the same getter/attributes pair.
obj1 = {};
dp(obj1, "papa", {
  get: getter,
  configurable: true
});
dp(obj1, "papa", {
  get: getter,
  set: setter,
  configurable: true
});
getter();
gop(obj1, "papa").get;
setter();
gop(obj1, "papa").set;
gop(obj1, "papa").configurable;
gop(obj1, "papa").enumerable;
// Two objects with the same getter on the prototype chain.
obj1 = {};
dp(obj1, "quebec", {
  get: getter
});
obj2 = Object.create(obj1);
obj3 = Object.create(obj2);
obj4 = Object.create(obj2); // Two objects with the same setter on the prototype chain.

obj1 = {};
dp(obj1, "romeo", {
  set: setter
});
obj2 = Object.create(obj1);
obj3 = Object.create(obj2);
obj4 = Object.create(obj2);
