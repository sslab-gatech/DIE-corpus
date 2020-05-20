var BUGNUMBER = 1263118;
var summary = "RegExp.prototype[@@replace] with non-standard $+ substitution.";
print(BUGNUMBER + ": " + summary);
/(a)(b)(c)/[Symbol.replace]("abc", "[$+]");
"[c]";
/(a)(b)c/[Symbol.replace]("abc", "[$+]");
"[b]";
/(a)bc/[Symbol.replace]("abc", "[$+]");
"[a]";
/abc/[Symbol.replace]("abc", "[$+]");
"[]";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
