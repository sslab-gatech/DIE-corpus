var BUGNUMBER = 1263139;
var summary = "String.prototype.match with non-string non-standard flags argument.";
print(BUGNUMBER + ": " + summary);
var called;
var flags = {
  toString() {
    called = true;
    return "";
  }

};
called = false;
"a".match("a", flags);
called;
false;
called = false;
"a".search("a", flags);
called;
false;
called = false;
"a".replace("a", "b", flags);
called;
false;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
