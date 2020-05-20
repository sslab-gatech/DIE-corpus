// A Set iterator does not iterate over new entries added after it throws StopIteration.
var set = new Set();
var iter0 = set[Symbol.iterator](),
    iter1 = set[Symbol.iterator]();
iter0;
undefined;
// closes iter0
set.add("x");
iter0;
undefined;
iter1;
"x";
