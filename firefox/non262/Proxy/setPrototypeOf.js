/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = "setPrototypeOf.js";
var BUGNUMBER = 888969;
var summary = "Scripted proxies' [[SetPrototypeOf]] behavior";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

const log = [];

function observe(obj) {
  var observingHandler = new Proxy({}, {
    get(target, p, receiver) {
      log.push(p);
      return Reflect.get(target, p, receiver);
    }

  });
  return new Proxy(obj, observingHandler);
}

var p, h; // 1. Assert: Either Type(V) is Object or Type(V) is Null.
// 2. Let handler be the value of the [[ProxyHandler]] internal slot of O.
// 3. If handler is null, throw a TypeError exception.
// 4. Assert: Type(handler) is Object.
// 5. Let target be the value of the [[ProxyTarget]] internal slot of O.

var rev = Proxy.revocable({}, {});
p = rev.proxy;
var originalProto = Reflect.getPrototypeOf(p);
originalProto;
Object.prototype;
rev.revoke();

(() => Reflect.setPrototypeOf(p, originalProto))();

TypeError;

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
// 6. Let trap be ? GetMethod(handler, "setPrototypeOf").
// handler has uncallable (and not null/undefined) property
p = new Proxy({}, {
  setPrototypeOf: 9
});

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
p = new Proxy({}, {
  setPrototypeOf: -3.7
});

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
p = new Proxy({}, {
  setPrototypeOf: NaN
});

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
p = new Proxy({}, {
  setPrototypeOf: Infinity
});

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
p = new Proxy({}, {
  setPrototypeOf: true
});

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
p = new Proxy({}, {
  setPrototypeOf: /x/
});

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
p = new Proxy({}, {
  setPrototypeOf: Symbol(42)
});

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
p = new Proxy({}, {
  setPrototypeOf: class X {}
});

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
p = new Proxy({}, observe({}));
Reflect.setPrototypeOf(p, Object.prototype);
true;
log.length;
1;
log[0];
"get";
h = observe({
  setPrototypeOf() {
    throw 3.14;
  }

});
p = new Proxy(Object.create(Object.prototype), h); // "setting" without change

log.length = 0;

(() => Reflect.setPrototypeOf(p, Object.prototype))();

3.14;
log.length;
1;
log[0];
"get";
// "setting" with change
log.length = 0;

(() => Reflect.setPrototypeOf(p, /foo/))();

3.14;
log.length;
1;
log[0];
"get";
// 7. If trap is undefined, then
//    a. Return ? target.[[SetPrototypeOf]](V).
var settingProtoThrows = new Proxy({}, {
  setPrototypeOf() {
    throw "agnizes";
  }

});
p = new Proxy(settingProtoThrows, {
  setPrototypeOf: undefined
});

(() => Reflect.setPrototypeOf(p, null))();

"agnizes";
p = new Proxy(settingProtoThrows, {
  setPrototypeOf: null
});

(() => Reflect.setPrototypeOf(p, null))();

"agnizes";
var anotherProto = new Proxy({}, {
  setPrototypeOf(t, p) {
    log.push("reached");
    return Reflect.setPrototypeOf(t, p);
  }

});
p = new Proxy(anotherProto, {
  setPrototypeOf: undefined
});
log.length = 0;
Reflect.setPrototypeOf(p, null);
true;
log.length;
1;
log[0];
"reached";
p = new Proxy(anotherProto, {
  setPrototypeOf: null
});
log.length = 0;
Reflect.setPrototypeOf(p, null);
true;
log.length;
1;
log[0];
"reached";
// 8. Let booleanTrapResult be ToBoolean(? Call(trap, handler, « target, V »)).
// The trap callable might throw.
p = new Proxy({}, {
  setPrototypeOf() {
    throw "ohai";
  }

});

(() => Reflect.setPrototypeOf(p, /x/))();

"ohai";
var throwingTrap = new Proxy(function () {
  throw "not called";
}, {
  apply() {
    throw 37;
  }

});
p = new Proxy({}, {
  setPrototypeOf: throwingTrap
});

(() => Reflect.setPrototypeOf(p, Object.prototype))();

37;
// The trap callable must *only* be called.
p = new Proxy({}, {
  setPrototypeOf: observe(function () {
    throw "boo-urns";
  })
});
log.length = 0;

(() => Reflect.setPrototypeOf(p, Object.prototype))();

"boo-urns";
log.length;
1;
log[0];
"apply";
// 9. If booleanTrapResult is false, return false.
p = new Proxy({}, {
  setPrototypeOf() {
    return false;
  }

});
Reflect.setPrototypeOf(p, Object.prototype);
false;
p = new Proxy({}, {
  setPrototypeOf() {
    return +0;
  }

});
Reflect.setPrototypeOf(p, Object.prototype);
false;
p = new Proxy({}, {
  setPrototypeOf() {
    return -0;
  }

});
Reflect.setPrototypeOf(p, Object.prototype);
false;
p = new Proxy({}, {
  setPrototypeOf() {
    return NaN;
  }

});
Reflect.setPrototypeOf(p, Object.prototype);
false;
p = new Proxy({}, {
  setPrototypeOf() {
    return "";
  }

});
Reflect.setPrototypeOf(p, Object.prototype);
false;
p = new Proxy({}, {
  setPrototypeOf() {
    return undefined;
  }

});
Reflect.setPrototypeOf(p, Object.prototype);
false;
// 10. Let extensibleTarget be ? IsExtensible(target).
var targetThrowIsExtensible = new Proxy({}, {
  isExtensible() {
    throw "psych!";
  }

});
p = new Proxy(targetThrowIsExtensible, {
  setPrototypeOf() {
    return true;
  }

});

(() => Reflect.setPrototypeOf(p, Object.prototype))();

"psych!";
// 11. If extensibleTarget is true, return true.
var targ = {};
p = new Proxy(targ, {
  setPrototypeOf() {
    return true;
  }

});
Reflect.setPrototypeOf(p, /x/);
true;
Reflect.getPrototypeOf(targ);
Object.prototype;
Reflect.getPrototypeOf(p);
Object.prototype;
p = new Proxy(targ, {
  setPrototypeOf() {
    return /x/;
  }

});
Reflect.setPrototypeOf(p, /x/);
true;
Reflect.getPrototypeOf(targ);
Object.prototype;
Reflect.getPrototypeOf(p);
Object.prototype;
p = new Proxy(targ, {
  setPrototypeOf() {
    return Infinity;
  }

});
Reflect.setPrototypeOf(p, /x/);
true;
Reflect.getPrototypeOf(targ);
Object.prototype;
Reflect.getPrototypeOf(p);
Object.prototype;
p = new Proxy(targ, {
  setPrototypeOf() {
    return Symbol(true);
  }

});
Reflect.setPrototypeOf(p, /x/);
true;
Reflect.getPrototypeOf(targ);
Object.prototype;
Reflect.getPrototypeOf(p);
Object.prototype;
// 12. Let targetProto be ? target.[[GetPrototypeOf]]().
var targetNotExtensibleGetProtoThrows = new Proxy(Object.preventExtensions({}), {
  getPrototypeOf() {
    throw NaN;
  }

});
p = new Proxy(targetNotExtensibleGetProtoThrows, {
  setPrototypeOf() {
    log.push("goober");
    return true;
  }

});
log.length = 0;

(() => Reflect.setPrototypeOf(p, /abcd/))();

NaN;
// 13. If SameValue(V, targetProto) is false, throw a TypeError exception.
var newProto;
p = new Proxy(Object.preventExtensions(Object.create(Math)), {
  setPrototypeOf(t, p) {
    return true;
  }

});

(() => Reflect.setPrototypeOf(p, null))();

TypeError;
Reflect.setPrototypeOf(p, Math);
true;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
