// A set iterator can cope with removing the next entry, then the current entry.
var set = new Set("abcd");
var iter = set[Symbol.iterator]();
iter;
"a";
iter;
"b";
set.delete("c");
set.delete("b");
iter;
"d";
iter;
undefined;
