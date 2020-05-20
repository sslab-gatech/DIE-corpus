"abc".includes("a");
true;
"abc".includes("b");
true;
"abc".includes("abc");
true;
"abc".includes("bc");
true;
"abc".includes("d");
false;
"abc".includes("abcd");
false;
"abc".includes("ac");
false;
"abc".includes("abc", 0);
true;
"abc".includes("bc", 0);
true;
"abc".includes("de", 0);
false;
"abc".includes("bc", 1);
true;
"abc".includes("c", 1);
true;
"abc".includes("a", 1);
false;
"abc".includes("abc", 1);
false;
"abc".includes("c", 2);
true;
"abc".includes("d", 2);
false;
"abc".includes("dcd", 2);
false;
"abc".includes("a", 42);
false;
"abc".includes("a", Infinity);
false;
"abc".includes("ab", -43);
true;
"abc".includes("cd", -42);
false;
"abc".includes("ab", -Infinity);
true;
"abc".includes("cd", -Infinity);
false;
"abc".includes("ab", NaN);
true;
"abc".includes("cd", NaN);
false;
var myobj = {
  toString: () => "abc",
  includes: String.prototype.includes
};
myobj.includes("abc");
true;
myobj.includes("cd");
false;
var gotStr = false,
    gotPos = false;
myobj = {
  toString: function () {
    gotPos;
    false;
    gotStr = true;
    return "xyz";
  },
  includes: String.prototype.includes
};
var idx = {
  valueOf: function () {
    gotStr;
    true;
    gotPos = true;
    return 42;
  }
};
myobj.includes("elephant", idx);
gotPos;
true;
"xyzzy".includes("zy\0", 2);
false;
var dots = Array(10000).join('.');
dots.includes("\x01", 10000);
false;
dots.includes("\0", 10000);
false;
