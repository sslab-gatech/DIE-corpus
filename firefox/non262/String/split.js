var BUGNUMBER = 887016;
var summary = "Call RegExp.prototype[@@split] from String.prototype.split.";
print(BUGNUMBER + ": " + summary);
var called = 0;
var myRegExp = {
  [Symbol.split](S, limit) {
    S;
    "abcAbcABC";
    limit;
    10;
    called++;
    return ["X", "Y", "Z"];
  }

};
"abcAbcABC".split(myRegExp, 10).join(",");
"X,Y,Z";
called;
1;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
