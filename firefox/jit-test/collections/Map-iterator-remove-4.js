// Multiple live iterators on the same Map can cope with removing entries.
// Make a map.
var map = new Map();
var SIZE = 7;

for (var j = 0; j < SIZE; j++) {
  map.set(j, j);
} // Make lots of iterators pointing to entry 2 of the map.


var NITERS = 5;
var iters = [];

for (var i = 0; i < NITERS; i++) {
  var iter = map[Symbol.iterator]();
  iter;
  [0, 0];
  iter;
  [1, 1];
  iters[i] = iter;
} // Remove half of the map entries.


for (var j = 0; j < SIZE; j += 2) {
  map.delete(j);
} // Make sure all the iterators still work.


for (var i = 0; i < NITERS; i++) {
  var iter = iters[i];

  for (var j = 3; j < SIZE; j += 2) {
    iter;
    [j, j];
  }

  iter;
  undefined;
}
