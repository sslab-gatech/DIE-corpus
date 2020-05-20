// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let get = () => {
  ;
};

let set = () => {
  ;
};

let target = {};
let handler = {
  getOwnPropertyDescriptor(target, prop) {
    let configurable = true;

    if (prop == "both") {
      return {
        get,
        set,
        configurable
      };
    } else {
      if (prop == "get") {
        return {
          get,
          configurable
        };
      } else {
        if (prop == "set") {
          return {
            set,
            configurable
          };
        } else {
          if (prop == "data") {
            return {
              value: 42,
              configurable
            };
          } else {
            return Reflect.getOwnPropertyDescriptor(target, prop);
          }
        }
      }
    }
  }

}; // Test behavior on own properties.

let proxy = new Proxy(target, handler);
get;

proxy.__lookupGetter__("both");

get;

proxy.__lookupGetter__("get");

undefined;

proxy.__lookupGetter__("set");

undefined;

proxy.__lookupGetter__("data");

set;

proxy.__lookupSetter__("both");

undefined;

proxy.__lookupSetter__("get");

set;

proxy.__lookupSetter__("set");

undefined;

proxy.__lookupSetter__("data");

// Test behavior on the prototype chain.
let object = {
  __proto__: proxy
};
get;

object.__lookupGetter__("both");

get;

object.__lookupGetter__("get");

undefined;

object.__lookupGetter__("set");

undefined;

object.__lookupGetter__("data");

set;

object.__lookupSetter__("both");

undefined;

object.__lookupSetter__("get");

set;

object.__lookupSetter__("set");

undefined;

object.__lookupSetter__("data");

// Test being shadowed while on prototype chain.
let shadower = {
  __proto__: proxy,
  both: 1,
  get: 2,
  set: 3,
  data: 4
};
undefined;

shadower.__lookupGetter__("both");

undefined;

shadower.__lookupGetter__("get");

undefined;

shadower.__lookupGetter__("set");

undefined;

shadower.__lookupGetter__("data");

undefined;

shadower.__lookupSetter__("both");

undefined;

shadower.__lookupSetter__("get");

undefined;

shadower.__lookupSetter__("set");

undefined;

shadower.__lookupSetter__("data");

// Test getPrototypeOf trap.
let getFoo = () => {
  ;
};

let setFoo = () => {
  ;
};

let proto = {};
Reflect.defineProperty(proto, "foo", {
  get: getFoo,
  set: setFoo
});
Reflect.setPrototypeOf(target, proto);
getFoo;

proxy.__lookupGetter__("foo");

setFoo;

proxy.__lookupSetter__("foo");

handler.getPrototypeOf = () => null;

undefined;

proxy.__lookupGetter__("foo");

undefined;

proxy.__lookupSetter__("foo");

handler.getPrototypeOf = () => proto;

getFoo;

proxy.__lookupGetter__("foo");

setFoo;

proxy.__lookupSetter__("foo");

// Test shadowing the prototype.
Reflect.defineProperty(proto, "data", {
  get: getFoo,
  set: setFoo
});
undefined;

proxy.__lookupGetter__("data");

undefined;

proxy.__lookupSetter__("data");
