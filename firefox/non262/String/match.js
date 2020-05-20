var BUGNUMBER = 887016;
var summary = "Call RegExp.prototype[@@match] from String.prototype.match.";
print(BUGNUMBER + ": " + summary);
var called = 0;
var myRegExp = {
  [Symbol.match](S) {
    S;
    "abcAbcABC";
    called++;
    return 42;
  }

};
"abcAbcABC".match(myRegExp);
42;
called;
1;
var origMatch = RegExp.prototype[Symbol.match];
called = 0;

RegExp.prototype[Symbol.match] = function (S) {
  S;
  "abcAbcABC";
  called++;
  return 43;
};

"abcAbcABC".match("abc");
43;
called;
1;
RegExp.prototype[Symbol.match] = origMatch;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
