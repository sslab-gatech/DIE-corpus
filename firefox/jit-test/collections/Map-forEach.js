/* test Map.prototype.forEach */
// testing success conditions of Map.prototype.forEach
var testMap = new Map();

function callback(value, key, map) {
  testMap.set(key, value);
  map.has(key);
  true;
  map.get(key);
  value;
}

var initialMap = new Map([['a', 1], ['b', 2.3], [false, undefined]]);
initialMap.forEach(callback); // test that both the Maps are equal and are in same order

var iterator = initialMap[Symbol.iterator]();
var count = 0;

for (var [k, v] of testMap) {
  initialMap.has(k);
  true;
  initialMap.get(k);
  testMap.get(k);
  iterator;
  [k, testMap.get(k)];
  count++;
} //check both the Maps we have are equal in size


initialMap.size;
testMap.size;
initialMap.size;
count;
var x = {
  abc: 'test'
};

function callback2(value, key, map) {
  x;
  this;
}

initialMap = new Map([['a', 1]]);
initialMap.forEach(callback2, x); // testing failure conditions of Map.prototype.forEach

var s = new Set([1, 2, 3]);

(function () {
  Map.prototype.forEach.call(s, callback);
})();

TypeError;
"Map.prototype.forEach should raise TypeError if not used on a Map";
var fn = 2;

(function () {
  initialMap.forEach(fn);
})();

TypeError;
"Map.prototype.forEach should raise TypeError if callback is not a function";
// testing that Map#forEach uses internal next() function.
var m = new Map([["one", 1]]);

Object.getPrototypeOf(m[Symbol.iterator]()).next = function () {
  throw "FAIL";
};

(function () {
  m.forEach(function () {
    throw Math;
  });
})();

Math;
"Map.prototype.forEach should use intrinsic next method.";
