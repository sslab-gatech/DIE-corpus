var BUGNUMBER = 1135377;
var summary = "Implement RegExp unicode flag -- AdvanceStringIndex in global match and replace.";
print(BUGNUMBER + ": " + summary); // ==== String.prototype.match ====

"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".match(/\uD83D|X|/gu);
["", "", "X", "", ""];
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".match(/\uDC38|X|/gu);
["", "", "X", "", ""];
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".match(/\uD83D\uDC38|X|/gu);
["\uD83D\uDC38", "", "X", "", ""];
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".replace(/\uD83D|X|/gu, "");
"\uD83D\uDC38\uD83D\uDC39\uD83D\uDC3A";
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".replace(/\uDC38|X|/gu, "");
"\uD83D\uDC38\uD83D\uDC39\uD83D\uDC3A";
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".replace(/\uD83D\uDC38|X|/gu, "");
"\uD83D\uDC39\uD83D\uDC3A";
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".replace(/\uD83D|X|/gu, "x");
"x\uD83D\uDC38x\uD83D\uDC39xx\uD83D\uDC3Ax";
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".replace(/\uDC38|X|/gu, "x");
"x\uD83D\uDC38x\uD83D\uDC39xx\uD83D\uDC3Ax";
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".replace(/\uD83D\uDC38|X|/gu, "x");
"xx\uD83D\uDC39xx\uD83D\uDC3Ax";
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".split(/\uD83D|X|/u);
["\uD83D\uDC38", "\uD83D\uDC39", "\uD83D\uDC3A"];
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".split(/\uDC38|X|/u);
["\uD83D\uDC38", "\uD83D\uDC39", "\uD83D\uDC3A"];
"\uD83D\uDC38\uD83D\uDC39X\uD83D\uDC3A".split(/\uD83D\uDC38|X|/u);
["", "\uD83D\uDC39", "\uD83D\uDC3A"];

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
