// When the argument to Map contains a key multiple times, the last value is retained.
var arg = [["zero", 7], ["one", 1], ["two", 4], ["zero", 8], ["two", 2], ["zero", 0]];
var m = new Map(arg);
m.get("zero");
0;
m.get("one");
1;
m.get("two");
2;
m.size;
3;
