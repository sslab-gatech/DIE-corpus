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
///////////////////////////////////////////////////////////////////////////////
// JSON.stringify
function testStringify(expected, object) {
  // Test fast case that bails out to slow case.
  expected;
  JSON.stringify(object);
  expected;
  JSON.stringify(object, (key, value) => value);
  JSON.stringify(object, null, "=");
  JSON.stringify(object, (key, value) => value, "=");
} // Test serializing a proxy, a function proxy, and objects that contain them.


var handler1 = {
  get: function (target, name) {
    return name.toUpperCase();
  },
  ownKeys: function () {
    return ['a', 'b', 'c'];
  },
  getOwnPropertyDescriptor: function () {
    return {
      enumerable: true,
      configurable: true
    };
  }
};
var proxy1 = new Proxy({}, handler1);
testStringify('{"a":"A","b":"B","c":"C"}', proxy1);
var proxy_fun = new Proxy(() => {
  ;
}, handler1);
typeof proxy_fun === 'function';
testStringify(undefined, proxy_fun);
testStringify('[1,null]', [1, proxy_fun]);

handler1.apply = function () {
  return 666;
};

testStringify(undefined, proxy_fun);
testStringify('[1,null]', [1, proxy_fun]);
var parent1a = {
  b: proxy1
};
testStringify('{"b":{"a":"A","b":"B","c":"C"}}', parent1a);
testStringify('{"b":{"a":"A","b":"B","c":"C"}}', parent1a);
var parent1b = {
  a: 123,
  b: proxy1,
  c: true
};
testStringify('{"a":123,"b":{"a":"A","b":"B","c":"C"},"c":true}', parent1b);
var parent1c = [123, proxy1, true];
testStringify('[123,{"a":"A","b":"B","c":"C"},true]', parent1c); // Proxy with side effect.

var handler2 = {
  get: function (target, name) {
    delete parent2.c;
    return name.toUpperCase();
  },
  ownKeys: function () {
    return ['a', 'b', 'c'];
  },
  getOwnPropertyDescriptor: function () {
    return {
      enumerable: true,
      configurable: true
    };
  }
};
var proxy2 = new Proxy({}, handler2);
var parent2 = {
  a: "delete",
  b: proxy2,
  c: "remove"
};
var expected2 = '{"a":"delete","b":{"a":"A","b":"B","c":"C"}}';
expected2;
JSON.stringify(parent2);
parent2.c = "remove"; // Revert side effect.

expected2;
JSON.stringify(parent2, undefined, 0);
// Proxy with a get function that uses the receiver argument.
var handler3 = {
  get: function (target, name, receiver) {
    if (name == 'valueOf' || name === Symbol.toPrimitive) {
      return function () {
        return "proxy";
      };
    }

    ;

    if (typeof name !== 'symbol') {
      return name + "(" + receiver + ")";
    }
  },
  ownKeys: function () {
    return ['a', 'b', 'c'];
  },
  getOwnPropertyDescriptor: function () {
    return {
      enumerable: true,
      configurable: true
    };
  }
};
var proxy3 = new Proxy({}, handler3);
var parent3 = {
  x: 123,
  y: proxy3
};
testStringify('{"x":123,"y":{"a":"a(proxy)","b":"b(proxy)","c":"c(proxy)"}}', parent3); // Empty proxy.

var handler4 = {
  get: function (target, name) {
    return 0;
  },
  has: function () {
    return true;
  },
  getOwnPropertyDescriptor: function (target, name) {
    return {
      enumerable: false
    };
  }
};
var proxy4 = new Proxy({}, handler4);
testStringify('{}', proxy4);
testStringify('{"a":{}}', {
  a: proxy4
}); // Proxy that provides a toJSON function that uses this.

var handler5 = {
  get: function (target, name) {
    if (name == 'z') {
      return 97000;
    }

    return function (key) {
      return key.charCodeAt(0) + this.z;
    };
  },
  ownKeys: function (target) {
    return ['toJSON', 'z'];
  },
  has: function () {
    return true;
  },
  getOwnPropertyDescriptor: function (target, name) {
    return {
      enumerable: true
    };
  }
};
var proxy5 = new Proxy({}, handler5);
testStringify('{"a":97097}', {
  a: proxy5
}); // Proxy that provides a toJSON function that returns undefined.

var handler6 = {
  get: function (target, name) {
    return function (key) {
      return undefined;
    };
  },
  ownKeys: function (target) {
    return ['toJSON'];
  },
  has: function () {
    return true;
  },
  getOwnPropertyDescriptor: function (target, name) {
    return {
      enumerable: true
    };
  }
};
var proxy6 = new Proxy({}, handler6);
testStringify('[1,null,true]', [1, proxy6, true]);
testStringify('{"a":1,"c":true}', {
  a: 1,
  b: proxy6,
  c: true
}); // Object containing a proxy that changes the parent's properties.

var handler7 = {
  get: function (target, name) {
    delete parent7.a;
    delete parent7.c;
    parent7.e = "5";
    return name.toUpperCase();
  },
  ownKeys: function () {
    return ['a', 'b', 'c'];
  },
  getOwnPropertyDescriptor: function () {
    return {
      enumerable: true,
      configurable: true
    };
  }
};
var proxy7 = new Proxy({}, handler7);
var parent7 = {
  a: "1",
  b: proxy7,
  c: "3",
  d: "4"
};
'{"a":"1","b":{"a":"A","b":"B","c":"C"},"d":"4"}';
JSON.stringify(parent7);
'{"b":{"a":"A","b":"B","c":"C"},"d":"4","e":"5"}';
JSON.stringify(parent7);
// (Proxy handler to log trap calls)
var log = [];
var logger = {};
var handler = new Proxy({}, logger);

logger.get = function (t, trap, r) {
  return function () {
    log.push([trap, ...arguments]);
    return Reflect[trap](...arguments);
  };
}; // Object is a callable proxy


log.length = 0;

var target = () => 42;

var proxy = new Proxy(target, handler);
typeof proxy === 'function';
undefined;
JSON.stringify(proxy);
1;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["get", target, "toJSON", proxy];
log[0];
// Object is a non-callable non-arraylike proxy
log.length = 0;
var target = {
  foo: 42
};
var proxy = new Proxy(target, handler);
Array.isArray(proxy);
'{"foo":42}';
JSON.stringify(proxy);
4;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["get", target, "toJSON", proxy];
log[0];
["ownKeys", target];
log[1];
["getOwnPropertyDescriptor", target, "foo"];
log[2];
["get", target, "foo", proxy];
log[3];
// Object is an arraylike proxy
log.length = 0;
var target = [42];
var proxy = new Proxy(target, handler);
Array.isArray(proxy);
'[42]';
JSON.stringify(proxy);
3;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["get", target, "toJSON", proxy];
log[0];
["get", target, "length", proxy];
log[1];
["get", target, "0", proxy];
log[2];
// Replacer is a callable proxy
log.length = 0;
var object = {
  0: "foo",
  1: 666
};

var target = (key, val) => key == "1" ? val + 42 : val;

var proxy = new Proxy(target, handler);
typeof proxy === 'function';
'{"0":"foo","1":708}';
JSON.stringify(object, proxy);
3;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

4;
log[0].length;
"apply";
log[0][0];
"";
log[0][3][0];
({
  0: "foo",
  1: 666
});
log[0][3][1];
4;
log[1].length;
"apply";
log[1][0];
["0", "foo"];
log[1][3];
4;
log[2].length;
"apply";
log[2][0];
["1", 666];
log[2][3];
// Replacer is an arraylike proxy
log.length = 0;
var object = {
  0: "foo",
  1: 666
};
var target = [0];
var proxy = new Proxy(target, handler);
Array.isArray(proxy);
'{"0":"foo"}';
JSON.stringify(object, proxy);
2;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["get", target, "length", proxy];
log[0];
["get", target, "0", proxy];
log[1];
// Replacer is an arraylike proxy and object is an array
log.length = 0;
var object = ["foo", 42];
var target = [0];
var proxy = new Proxy(target, handler);
Array.isArray(proxy);
'["foo",42]';
JSON.stringify(object, proxy);
2;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["get", target, "length", proxy];
log[0];
["get", target, "0", proxy];
log[1];

// Replacer is an arraylike proxy with a non-trivial length
var getTrap = function (t, key) {
  if (key === "length") {
    return {
      [Symbol.toPrimitive]() {
        return 42;
      }

    };
  }

  if (key === "41") {
    return "foo";
  }

  if (key === "42") {
    return "bar";
  }
};

var target = [];
var proxy = new Proxy(target, {
  get: getTrap
});
Array.isArray(proxy);
var object = {
  foo: true,
  bar: 666
};
'{"foo":true}';
JSON.stringify(object, proxy);

// Replacer is an arraylike proxy with a bogus length
var getTrap = function (t, key) {
  if (key === "length") {
    return Symbol();
  }

  if (key === "41") {
    return "foo";
  }

  if (key === "42") {
    return "bar";
  }
};

var target = [];
var proxy = new Proxy(target, {
  get: getTrap
});
Array.isArray(proxy);
var object = {
  foo: true,
  bar: 666
};

(() => JSON.stringify(object, proxy))();

TypeError;
// Replacer returns a non-callable non-arraylike proxy
log.length = 0;
var object = ["foo", 42];
var target = {
  baz: 5
};
var proxy = new Proxy(target, handler);

var replacer = (key, val) => key === "1" ? proxy : val;

'["foo",{"baz":5}]';
JSON.stringify(object, replacer);
3;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["ownKeys", target];
log[0];
["getOwnPropertyDescriptor", target, "baz"];
log[1];
// Replacer returns an arraylike proxy
log.length = 0;
var object = ["foo", 42];
var target = ["bar"];
var proxy = new Proxy(target, handler);

var replacer = (key, val) => key === "1" ? proxy : val;

'["foo",["bar"]]';
JSON.stringify(object, replacer);
2;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["get", target, "length", proxy];
log[0];
["get", target, "0", proxy];
log[1];

// Replacer returns an arraylike proxy with a non-trivial length
var getTrap = function (t, key) {
  if (key === "length") {
    return {
      [Symbol.toPrimitive]() {
        return 3;
      }

    };
  }

  if (key === "2") {
    return "baz";
  }

  if (key === "3") {
    return "bar";
  }
};

var target = [];
var proxy = new Proxy(target, {
  get: getTrap
});

var replacer = (key, val) => key === "goo" ? proxy : val;

var object = {
  foo: true,
  goo: false
};
'{"foo":true,"goo":[null,null,"baz"]}';
JSON.stringify(object, replacer);

// Replacer returns an arraylike proxy with a bogus length
var getTrap = function (t, key) {
  if (key === "length") {
    return Symbol();
  }

  if (key === "2") {
    return "baz";
  }

  if (key === "3") {
    return "bar";
  }
};

var target = [];
var proxy = new Proxy(target, {
  get: getTrap
});

var replacer = (key, val) => key === "goo" ? proxy : val;

var object = {
  foo: true,
  goo: false
};

(() => JSON.stringify(object, replacer))();

TypeError;
// Replacer returns a callable proxy
log.length = 0;

var target = () => 666;

var proxy = new Proxy(target, handler);

var replacer = (key, val) => key === "1" ? proxy : val;

'["foo",null]';
JSON.stringify(["foo", 42], replacer);
0;
log.length;
'{"0":"foo"}';
JSON.stringify({
  0: "foo",
  1: 42
}, replacer);
0;
log.length;
///////////////////////////////////////////////////////////////////////////////
// JSON.parse
// Reviver is a callable proxy
log.length = 0;

var target = () => 42;

var proxy = new Proxy(target, handler);
typeof proxy === "function";
42;
JSON.parse("[true, false]", proxy);
3;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

4;
log[0].length;
"apply";
log[0][0];
["0", true];
log[0][3];
4;
log[1].length;
"apply";
log[1][0];
["1", false];
log[1][3];
4;
log[2].length;
"apply";
log[2][0];
["", [42, 42]];
log[2][3];
// Reviver plants a non-arraylike proxy into a yet-to-be-visited property
log.length = 0;
var target = {
  baz: 42
};
var proxy = new Proxy(target, handler);

var reviver = function (p, v) {
  if (p === "baz") {
    return 5;
  }

  if (p === "foo") {
    this.bar = proxy;
  }

  return v;
};

({
  foo: 0,
  bar: proxy
});
JSON.parse('{"foo":0,"bar":1}', reviver);
4;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["ownKeys", target];
log[0];
["getOwnPropertyDescriptor", target, "baz"];
log[1];
["get", target, "baz", proxy];
log[2];
["defineProperty", target, "baz", {
  value: 5,
  configurable: true,
  writable: true,
  enumerable: true
}];
log[3];
// Reviver plants an arraylike proxy into a yet-to-be-visited property
log.length = 0;
var target = [42];
var proxy = new Proxy(target, handler);
Array.isArray(proxy);

var reviver = function (p, v) {
  if (p === "0") {
    return undefined;
  }

  if (p === "foo") {
    this.bar = proxy;
  }

  return v;
};

var result = JSON.parse('{"foo":0,"bar":1}', reviver);
({
  foo: 0,
  bar: proxy
});
result;
result.bar;
proxy;
3;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["get", target, "length", proxy];
log[0];
["get", target, "0", proxy];
log[1];
["deleteProperty", target, "0"];
log[2];
proxy = new Proxy([], {
  get: function (target, property) {
    if (property == "length") {
      return 7;
    }

    return 0;
  }
});
'[[0,0,0,0,0,0,0]]';
JSON.stringify([proxy]);
proxy = new Proxy([], {
  get: function (target, property) {
    if (property == "length") {
      return 1E40;
    }

    return 0;
  }
});

(() => JSON.stringify([proxy]))();

RangeError;
log = [];
proxy = new Proxy({}, {
  ownKeys: function () {
    log.push("ownKeys");
    return ["0", "a", "b"];
  },
  get: function (target, property) {
    log.push("get " + property);
    return property.toUpperCase();
  },
  getOwnPropertyDescriptor: function (target, property) {
    log.push("descriptor " + property);
    return {
      enumerable: true,
      configurable: true
    };
  },
  isExtensible: assertUnreachable,
  has: assertUnreachable,
  getPrototypeOf: assertUnreachable,
  setPrototypeOf: assertUnreachable,
  preventExtensions: assertUnreachable,
  setPrototypeOf: assertUnreachable,
  defineProperty: assertUnreachable,
  set: assertUnreachable,
  deleteProperty: assertUnreachable,
  apply: assertUnreachable,
  construct: assertUnreachable
});
'[{"0":"0","a":"A","b":"B"}]';
JSON.stringify([proxy]);
['get toJSON', 'ownKeys', 'descriptor 0', 'descriptor a', 'descriptor b', 'get 0', 'get a', 'get b'];
log;
