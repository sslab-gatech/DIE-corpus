var BUGNUMBER = 636635;
var summary = "A function created by Function constructor shouldn't have anonymous binding";
print(BUGNUMBER + ": " + summary);
new Function("return typeof anonymous")();
"undefined";
new Function("return function() { return typeof anonymous; }")()();
"undefined";
new Function("return function() { eval(''); return typeof anonymous; }")()();
"undefined";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
