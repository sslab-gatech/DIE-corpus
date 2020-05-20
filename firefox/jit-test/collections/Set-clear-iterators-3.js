// A closed Set iterator does not visit new entries added after a clear().
var s = new Set();
var it = s[Symbol.iterator]();
it;
undefined;
// close the iterator
s.clear();
s.add("a");
it;
undefined;
