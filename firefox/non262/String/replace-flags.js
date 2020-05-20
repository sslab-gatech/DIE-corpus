var BUGNUMBER = 1108382;
var summary = 'Remove non-standard flag argument from String.prototype.{search,match,replace}.';
printBugNumber(BUGNUMBER);
printStatus(summary);
var result = "bbbAa".match("a", "i");
result.index;
4;
result.length;
1;
result[0];
"a";
result = "bbbA".match("a", "i");
result;
null;
result = "bbbAa".search("a", "i");
result;
4;
result = "bbbA".search("a", "i");
result;
-1;
result = "bbbAaa".replace("a", "b", "g");
result;
"bbbAba";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
