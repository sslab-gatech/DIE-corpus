console.log("Tests basic correctness of ES Map object"); // Currently we don't support iterators, so we throw
// on any non-throwing parameters

Map instanceof Map;
Map.prototype instanceof Map;
new Map() instanceof Map;
new Map(null) instanceof Map;
new Map(undefined) instanceof Map;
new Map(undefined, undefined) instanceof Map;
new Map(null, undefined) instanceof Map;

try {
  Map();
} catch (e) {
  ;
}

try {
  Map(1);
} catch (e) {
  ;
}

try {
  Map(true);
} catch (e) {
  ;
}

try {
  Map('String');
} catch (e) {
  ;
}

try {
  Map([]);
} catch (e) {
  ;
}

try {
  Map({});
} catch (e) {
  ;
}

try {
  Map(undefined);
} catch (e) {
  ;
}

try {
  Map(null);
} catch (e) {
  ;
}

try {
  new Map(1);
} catch (e) {
  ;
}

try {
  new Map(true);
} catch (e) {
  ;
}

try {
  new Map([]);
} catch (e) {
  ;
}

try {
  new Map({});
} catch (e) {
  ;
}

try {
  new Map(undefined, null);
} catch (e) {
  ;
}

try {
  new Map(undefined, {});
} catch (e) {
  ;
}

var map = new Map();
Object.hasOwnProperty(map, 'size');
Map.prototype.hasOwnProperty('size');

try {
  Map.prototype.size;
} catch (e) {
  ;
}

Map.prototype.set.length;
Map.prototype.has.length;
Map.prototype.get.length;
Map.prototype.clear.length;
Map.prototype.keys.length;
Map.prototype.values.length;
Map.prototype.entries.length;
map.size;
map.set(-0, 1);
map.set(0, 2);
map.size;
map.set(Infinity, 3);
map.set(-Infinity, 4);
map.set(NaN, 5);
map.set('0', 6);
map.set(0.1, 7);
map.size;
map.get(-0);
map.get(0);
map.get(Infinity);
map.get(-Infinity);
map.get(NaN);
map.get('0');
map.get(0.1);
map.has(-0);
map.has(0);
map.has(Infinity);
map.has(-Infinity);
map.has(NaN);
map.has('0');
map.has(0.1);
map.delete(-0);
map.delete(0);
map.delete(Infinity);
map.delete(-Infinity);
map.delete(NaN);
map.delete('0');
map.delete(0.1);
map.delete(-0);
map.delete(0);
map.delete(Infinity);
map.delete(-Infinity);
map.delete(NaN);
map.delete('0');
map.delete(0.1);
var simpleString = "aaaaa";
var otherString = "";

for (var i = 0; i < 5; i++) {
  otherString += "a";
}

map.set(simpleString, {});
map.get(simpleString);

try {
  map.clear();
} catch (e) {
  ;
}

map.size;
var count = 7;

for (var i = 0; i < count; i++) {
  map.set(i, i * 2);
  map.set(i, i * 2 + 1);
}

map.size;
var thisValue = 0xf00;
var testThis;
var count = 0;

try {
  map.forEach(function () {
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
  map.forEach(function () {
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
  map.forEach(debug);
} catch (e) {
  ;
}

map.forEach(function (v, k) {
  console.log(k + " : " + typeof k + " => " + v);

  if (k == 2) {
    map.delete(3);
  }

  if (k == "3") {
    map.set("3", "replaced");
    map.delete(4);
    map.set(4, 11);
  }
});
var keys;
map.forEach(function (v, k) {
  keys = keys || [];
  keys.push([k, v]);
});
gc();

for (var i = 0; i < keys.length; i++) {
  var expectedKey = keys[i][0];
  var expectedValue = keys[i][1];
  map.get(JSON.stringify(expectedKey));
}

map = new Map();
var count = 5;
var keys = [];
var values = [];

for (var i = 0; i < count; i++) {
  map.set(i, i * 2);
  map.set("" + i, i * 2 + 1);
  keys.push("" + i);
  keys.push("'" + i + "'");
  values.push(i * 2);
  values.push(i * 2 + 1);
}

var i = 0;
console.log("map.@@iterator()");

for (var [key, value] of map) {
  key;
  value;
  i++;
}

console.log("map.entries()");
i;
var i = 0;

for (var [key, value] of map.entries()) {
  key;
  value;
  i++;
}

i;
console.log("map.keys()");
var i = 0;

for (var key of map.keys()) {
  key;
  i++;
}

i;
var i = 0;
console.log("map.values()");

for (var value of map.values()) {
  value;
  i++;
}

i;
console.log("Map mutation with live iterator and GC");
map = new Map();
map.set(0, 0);
map.set(1, 2);
map.set(2, 4);
map.set(3, 6);
map.set(4, 8);
map.set(5, 10);
map.set(6, 12);
map.set(7, 14);
map.set(9, 14);
map.set(14, "should be deleted");
var keys = [1, 3, 4, 5, 7];
var values = [2, 6, 8, 10, 14];
var entries = map.entries();
gc();
map.delete(0);
gc();
var i = 0;

for (var [key, value] of entries) {
  key;
  value;

  if (key == 7) {
    map.delete(9);
  }

  map.delete(1);
  map.delete(key * 2);
  gc();
  i++;
}

i;
map.size;
console.log("test forEach");
map = new Map();
map.set(0, 0);
map.set(1, 2);
map.set(2, 4);
map.set(3, 6);
map.set(4, 8);
map.set(5, 10);
map.set(6, 12);
map.set(7, 14);
map.set(9, 14);
map.set(14, "should be deleted");
var keys = [1, 3, 4, 5, 7];
var values = [2, 6, 8, 10, 14];
map.delete(0);
var i = 0;
map.forEach(function (v, k) {
  key = k;
  value = v;
  key;
  value;

  if (key == 7) {
    map.delete(9);
  }

  map.delete(1);
  map.delete(key * 2);
  gc();
  i++;
});
i;
map.size;
console.log("A dead iterator should remain dead");
var map = new Map();
map.set(1, "foo");
var keys = map.keys(); // Iterator reaches end and becomes dead.

for (key of keys) {
  // Do nothing
  ;
}

map.set(2, "bar");
map.set(3, "wibble"); // Iterator 'keys' remains dead.

var count = 0;

for (key of keys) {
  count++;
}

count; // New assignment creates a new iterator.

keys = map.keys();

for (key of keys) {
  count++;
}

count; // Iterating through map.keys()

count = 0;

for (key of map.keys()) {
  count++;
}

count;
