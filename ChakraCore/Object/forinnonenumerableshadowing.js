//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Tests for...in behavior when child object shadows a prototype property with a non-enumerable shadow
// See OS bug #850013
function forInKeysToArray(obj) {
  var s = [];

  for (key in obj) {
    s.push(key);
  }

  return s;
}

var proto = {
  x: 1
};
var child = Object.create(proto, {
  x: {
    value: 2,
    enumerable: false
  }
});
var result = forInKeysToArray(child);
print([], result, "for...in does not enumerate a key which is enumerable in a prototype but shadowed by a non-enumerable property");
var proto = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};
var child = Object.create(proto, {
  b: {
    value: 20,
    enumerable: false
  }
});
Object.defineProperty(child, 'c', {
  enumerable: false,
  value: 30
});
child['d'] = 4;
var result = forInKeysToArray(child);
print(['d', 'a', 'e'], result, "for...in does not enumerate a key which is enumerable in a prototype but shadowed by a non-enumerable property");
var o = [0, 1, 2];
o[4] = 4;
Object.defineProperty(o, 3, {
  enumerable: false,
  value: '3'
});
var result = forInKeysToArray(o);
print(['0', '1', '2', '4'], result, "for...in does not enumerate non-enumerable properties, even for array indices");

function test(obj, expected) {
  var result = forInKeysToArray(obj);
  result = result.concat(forInKeysToArray(obj));
  result = result.concat(forInKeysToArray(obj));
  print(expected, result, "for...in does not enumerate non-enumerable properties, even from the fast-path");
}

var o = Object.create(null);
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: false
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3,
  enumerable: false
});
test(o, []);
var o = Object.create(null);
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3,
  enumerable: false
});
test(o, ['a', 'a', 'a']);
var o = Object.create(null);
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: false
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3,
  enumerable: true
});
test(o, ['c', 'c', 'c']);
var o = Object.create(null);
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: false
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: true
});
Object.defineProperty(o, 'c', {
  value: 3,
  enumerable: false
});
test(o, ['b', 'b', 'b']);
var o = Object.create(null);
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3,
  enumerable: true
});
test(o, ['a', 'c', 'a', 'c', 'a', 'c']); // JSON is a delay-load object

test(JSON, []);
var proto = Object.create(null, {
  x: {
    value: 1,
    enumerable: false
  }
});
var child = Object.create(proto, {
  x: {
    value: 2,
    enumerable: true
  }
});
var result = forInKeysToArray(child);
print(['x'], result, "Child property shadows proto property");
var proto = Object.create(null, {
  x: {
    value: 1,
    enumerable: false
  }
});
var child = Object.create(proto, {
  x: {
    value: 2,
    enumerable: false
  }
});
var result = forInKeysToArray(child);
print([], result, "Child property shadows proto property with another non-enumerable property");
var result = forInKeysToArray(RegExp);
print(['$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', 'input', 'rightContext', 'leftContext', 'lastParen', 'lastMatch'], result, "for..in of RegExp constructor returns some special properties");
var result = Object.keys(RegExp);
print(['$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', 'input', 'rightContext', 'leftContext', 'lastParen', 'lastMatch'], result, "Object.keys returns the same set of properties for RegExp as for..in");
var result = Object.getOwnPropertyNames(RegExp);
print(['$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', 'input', 'rightContext', 'leftContext', 'lastParen', 'lastMatch', 'length', 'prototype', 'name', '$_', '$&', '$+', '$`', "$'", 'index'], result, "Object.getOwnPropertyNames returns special non-enumerable properties too");
var proto = Object.create(null, {
  a: {
    value: 1,
    enumerable: false
  },
  b: {
    value: 1,
    enumerable: true
  },
  c: {
    value: 1,
    enumerable: false
  },
  d: {
    value: 1,
    enumerable: false
  },
  w: {
    value: 1,
    enumerable: true
  },
  x: {
    value: 1,
    enumerable: false
  },
  y: {
    value: 1,
    enumerable: true
  },
  z: {
    value: 1,
    enumerable: true
  }
});
var child = Object.create(proto, {
  a: {
    value: 2,
    enumerable: false
  },
  b: {
    value: 2,
    enumerable: false
  },
  c: {
    value: 2,
    enumerable: true
  },
  d: {
    value: 2,
    enumerable: false
  },
  w: {
    value: 2,
    enumerable: true
  },
  x: {
    value: 2,
    enumerable: true
  },
  y: {
    value: 2,
    enumerable: false
  },
  z: {
    value: 2,
    enumerable: true
  }
});
var childchild = Object.create(child, {
  a: {
    value: 3,
    enumerable: false
  },
  b: {
    value: 3,
    enumerable: false
  },
  c: {
    value: 3,
    enumerable: false
  },
  d: {
    value: 3,
    enumerable: true
  },
  w: {
    value: 3,
    enumerable: false
  },
  x: {
    value: 3,
    enumerable: true
  },
  y: {
    value: 3,
    enumerable: true
  },
  z: {
    value: 3,
    enumerable: true
  }
});
var result = forInKeysToArray(childchild);
print(['d', 'x', 'y', 'z'], result, "childchild should shadow all properties and disable enumerable properties from the prototype chain leaking out");
var result = forInKeysToArray(child);
print(['c', 'w', 'x', 'z'], result, "child should shadow all properties and disable enumerable properties from the prototype chain leaking out");
var result = forInKeysToArray(proto);
print(['b', 'w', 'y', 'z'], result, "proto doesn't shadow any properties but non-enumerable properties should not show up in for..in loop");

function foo() {
  JSON.stringify(arguments);
}

foo();
var arr = [];

function foo2() {
  for (var i in arguments) {
    arr.push(i);
  }
}

foo2('a', 'b');
print(['0', '1'], arr, "Correct values are enumerated via for...in loop");
