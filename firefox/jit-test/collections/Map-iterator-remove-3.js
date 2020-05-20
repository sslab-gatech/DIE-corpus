// A map iterator can cope with removing the next entry, then the current entry.
var map = new Map([['a', 0], ['b', 1], ['c', 2], ['d', 3]]);
var iter = map[Symbol.iterator]();
iter;
['a', 0];
iter;
['b', 1];
map.delete('c');
map.delete('b');
iter;
['d', 3];
iter;
undefined;
