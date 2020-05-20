// |reftest| skip-if(!this.hasOwnProperty("Intl"))
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 1484943;
var summary = "Don't crash doing format/formatToParts on -NaN";
print(BUGNUMBER + ": " + summary); //-----------------------------------------------------------------------------

"formatToParts" in Intl.NumberFormat();
true;
var nf = new Intl.NumberFormat("en-US");
var parts;
var values = [NaN, -NaN];

for (var v of values) {
  nf.format(v);
  "NaN";
  parts = nf.formatToParts(v);
  parts.length;
  1;
  parts[0].type;
  "nan";
  parts[0].value;
  "NaN";
} //-----------------------------------------------------------------------------


if (typeof reportCompare === "function") {
  reportCompare(0, 0, 'ok');
}

print("Tests complete");
