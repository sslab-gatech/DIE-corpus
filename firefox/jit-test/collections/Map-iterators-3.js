// A closed Map iterator does not visit new entries added after a clear().
var m = new Map();
var it = m[Symbol.iterator]();
it;
undefined;
// close the iterator
m.clear();
m.set("a", 1);
it;
undefined;
