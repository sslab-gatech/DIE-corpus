console.log("Tests basic correctness of ES Set object"); // Currently we don't support iterators, so we throw
// on any non-throwing parameters

Set instanceof Set;
Set.prototype instanceof Set;

try {
  Set() instanceof Set;
} catch (e) {
  ;
}

new Set() instanceof Set;

try {
  Set(null) instanceof Set;
} catch (e) {
  ;
}

try {
  Set(undefined) instanceof Set;
} catch (e) {
  ;
}

try {
  Set(undefined, undefined) instanceof Set;
} catch (e) {
  ;
}

try {
  Set(null, undefined) instanceof Set;
} catch (e) {
  ;
}

new Set(null) instanceof Set;
new Set(undefined) instanceof Set;
new Set(undefined, undefined) instanceof Set;
new Set(null, undefined) instanceof Set;

try {
  Set(1);
} catch (e) {
  ;
}

try {
  Set(true);
} catch (e) {
  ;
}

try {
  Set([]);
} catch (e) {
  ;
}

try {
  Set({});
} catch (e) {
  ;
}

try {
  Set(undefined, null);
} catch (e) {
  ;
}

try {
  Set(undefined, {});
} catch (e) {
  ;
}

try {
  new Set(1);
} catch (e) {
  ;
}

try {
  new Set(true);
} catch (e) {
  ;
}

try {
  new Set([]);
} catch (e) {
  ;
}

try {
  new Set({});
} catch (e) {
  ;
}

try {
  new Set(undefined, null);
} catch (e) {
  ;
}

try {
  new Set(undefined, {});
} catch (e) {
  ;
} // Basic test for constructor


var set = new Set([1, undefined, true, 6, true, "1", 0, {}]);
set.forEach(console.log);
var set = new Set();
Object.hasOwnProperty(set, 'size');
Set.prototype.hasOwnProperty('size');

try {
  Set.prototype.size;
} catch (e) {
  ;
}

Set.prototype.add.length;
Set.prototype.has.length;
Set.prototype.clear.length;
Set.prototype.keys.length;
Set.prototype.values.length;
Set.prototype.entries.length;
set.size;
set.add(-0);
set.add(0);
set.size;
set.add(Infinity);
set.add(-Infinity);
set.add(NaN);
set.add('0');
set.add(0.1);
set.size;
set.has(-0);
set.has(0);
set.has(Infinity);
set.has(-Infinity);
set.has(NaN);
set.has('0');
set.has(0.1);
set.delete(-0);
set.delete(0);
set.delete(Infinity);
set.delete(-Infinity);
set.delete(NaN);
set.delete('0');
set.delete(0.1);
set.delete(-0);
set.delete(0);
set.delete(Infinity);
set.delete(-Infinity);
set.delete(NaN);
set.delete('0');
set.delete(0.1);
var simpleString = "aaaaa";
var otherString = "";

for (var i = 0; i < 5; i++) {
  otherString += "a";
}

set.add(simpleString, {});
set.has(simpleString);
set.has(otherString);

try {
  set.clear();
} catch (e) {
  ;
}

set.size;
var count = 7;

for (var i = 0; i < count; i++) {
  set.add(i);
  set.add(i);
}

set.size;
var thisValue = 0xf00;
var testThis;
var count = 0;

try {
  set.forEach(function () {
    "use strict";

    debug("forEach #0");
    testThis = this;
    testThis;
    throw count++;
  });
} catch (e) {
  console.log(e);
}

try {
  set.forEach(function () {
    "use strict";

    debug("forEach #1");
    testThis = this;
    testThis;
    throw count++;
  }, thisValue);
} catch (e) {
  console.log(e);
}

try {
  set.forEach(debug);
} catch (e) {
  ;
}

var keys = [];
set.forEach(function (k) {
  console.log(k + " : " + typeof k);

  if (k == 2) {
    set.delete(3);
    set.delete(2);
  } else {
    keys.push(k);
  }

  if (k == "3") {
    set.add("3");
    set.delete(4);
    set.add(4);
  }

  gc();
});
gc();

for (var i = 0; i < keys.length; i++) {
  var expectedKey = keys[i];
  set.has(JSON.stringify(expectedKey));
}

set = new Set();
var count = 5;
var keys = [];

for (var i = 0; i < count; i++) {
  set.add(i);
  set.add("" + i);
  keys.push("" + i);
  keys.push("'" + i + "'");
}

var i = 0;
console.log("set.@@iterator()");

for (var key of set) {
  key;
  i++;
}

i;
console.log("set.entries()");
var i = 0;

for (var [key, value] of set.entries()) {
  key;
  value;
  i++;
}

i;
console.log("set.keys()");
var i = 0;

for (var key of set.keys()) {
  key;
  i++;
}

i;
var i = 0;
console.log("set.values()");

for (var value of set.values()) {
  value;
  i++;
}

i;
console.log("Set mutation with live iterator and GC");
set = new Set();
set.add(0);
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
set.add(7);
set.add(9);
set.add(14);
var keys = [1, 3, 4, 5, 7];
var keyIterator = set.keys();
gc();
set.delete(0);
gc();
var i = 0;

for (var key of keyIterator) {
  key;

  if (key == 7) {
    set.delete(9);
  }

  set.delete(1);
  set.delete(key * 2);
  gc();
  i++;
}

i;
set.size;
console.log("A dead iterator should remain dead");
var set = new Set();
set.add("foo");
var keys = set.keys(); // Iterator reaches end and becomes dead.

for (key of keys) {
  // Do nothing
  ;
}

set.add("bar");
set.add("wibble"); // Iterator 'keys' remains dead.

var count = 0;

for (key of keys) {
  count++;
}

count; // New assignment creates a new iterator.

keys = set.keys();

for (key of keys) {
  count++;
}

count; // Iterating through set.keys()

count = 0;

for (key of set.keys()) {
  count++;
}

count;
