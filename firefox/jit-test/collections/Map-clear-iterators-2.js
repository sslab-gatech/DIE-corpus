// A Map iterator continues to visit entries added after a clear().
var m = new Map([["a", 1]]);
var it = m[Symbol.iterator]();
it;
["a", 1];
m.clear();
m.set("b", 2);
it;
["b", 2];
it;
undefined;
