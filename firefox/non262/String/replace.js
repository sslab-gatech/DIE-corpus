var BUGNUMBER = 887016;
var summary = "Call RegExp.prototype[@@replace] from String.prototype.replace.";
print(BUGNUMBER + ": " + summary);
var called = 0;
var myRegExp = {
  [Symbol.replace](S, R) {
    S;
    "abcAbcABC";
    R;
    "foo";
    called++;
    return 42;
  }

};
"abcAbcABC".replace(myRegExp, "foo");
42;
called;
1;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
