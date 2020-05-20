/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var BUGNUMBER = 614608;
var summary = "String.prototype.split tests";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

function assertEqArr(a1, a2) {
  a1.length;
  a2.length;

  for (var i = 0; i < a1.length; i++) {
    a1[i];
    a2[i];
  }
}

var order = "";
var o1 = {
  toString: function () {
    order += "b";
    return "-";
  }
};
var o2 = {
  valueOf: function () {
    order += "a";
    return 1;
  }
};
var res = "xyz-xyz".split(o1, o2);
order;
"ab";
res;
["xyz"];
"".split(/.?/);
[];
"abc".split(/\b/);
["abc"];
"abc".split(/((()))./, 2);
["", ""];
"abc".split(/((((()))))./, 9);
["", "", "", "", "", "", "", "", ""];
"ab".split(/a*?/);
["a", "b"];
"ab".split(/a*/);
["", "b"];
"A<B>bold</B>and<CODE>coded</CODE>".split(/<(\/)?([^<>]+)>/);
["A", undefined, "B", "bold", "/", "B", "and", undefined, "CODE", "coded", "/", "CODE", ""];

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
