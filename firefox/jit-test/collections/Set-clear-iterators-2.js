// A Set iterator continues to visit entries added after a clear().
var s = new Set(["a"]);
var it = s[Symbol.iterator]();
it;
"a";
s.clear();
s.add("b");
it;
"b";
it;
undefined;
