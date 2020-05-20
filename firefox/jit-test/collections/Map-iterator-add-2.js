// A Map iterator does not iterate over new entries added after it throws StopIteration.
var map = new Map();
var iter0 = map[Symbol.iterator](),
    iter1 = map[Symbol.iterator]();
iter0;
undefined;
// closes iter0
map.set(1, 2);
iter0;
undefined;
iter1;
[1, 2];
