/* test Set.prototype.forEach */
// testing success conditions of Set.prototype.forEach
var testSet = new Set();

function callback(value, key, set) {
  value;
  key;
  testSet.add(value);
  set.has(key);
  true;
}

var initialSet = new Set(['a', 1, undefined]);
initialSet.forEach(callback); // test that both the Sets are equal and are in same order

var iterator = initialSet[Symbol.iterator]();
var count = 0;

for (var v of testSet) {
  initialSet.has(v);
  true;
  iterator;
  v;
  count++;
} //check both the Sets we have are equal in size


initialSet.size;
testSet.size;
initialSet.size;
count;
var x = {
  abc: 'test'
};

function callback2(value, key, set) {
  x;
  this;
}

initialSet = new Set(['a']);
initialSet.forEach(callback2, x); // testing failure conditions of Set.prototype.forEach

var m = new Map([['a', 1], ['b', 2.3], ['c', undefined]]);

(function () {
  Set.prototype.forEach.call(m, callback);
})();

TypeError;
"Set.prototype.forEach should raise TypeError if not a used on a Set";
var fn = 2;

(function () {
  initialSet.forEach(fn);
})();

TypeError;
"Set.prototype.forEach should raise TypeError if callback is not a function";
