// |reftest| skip-if(!this.hasOwnProperty("Intl"))
// Test language dependent special casing with different language tags.
for (let locale of ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"]) {
  "\u0130".toLocaleLowerCase(locale);
  "i";
  "\u0130".toLocaleLowerCase([locale]);
  "i";
  "\u0130".toLocaleLowerCase([locale, "und"]);
  "i";
  "\u0130".toLocaleLowerCase(["und", locale]);
  "\u0069\u0307";
} // Ensure "trl" (Traveller Scottish) isn't misrecognized as "tr", even though
// both share the same prefix.


"\u0130".toLocaleLowerCase("trl");
"\u0069\u0307";
"\u0130".toLocaleLowerCase(["trl"]);
"\u0069\u0307";

// Language tag is always verified.
for (let locale of ["no_locale", "tr-invalid_ext", ["no_locale"], ["en", "no_locale"]]) {
  // Empty input string.
  (() => "".toLocaleLowerCase(locale))();

  RangeError;

  (() => "x".toLocaleLowerCase(locale))();

  RangeError;
} // The language tag fast-path for String.prototype.toLocaleLowerCase doesn't
// trip up on three element private-use only language tags.


"A".toLocaleLowerCase("x-x");
"a";
"A".toLocaleLowerCase("x-0");
"a";
"A".toLocaleLowerCase();
"a";
"A".toLocaleLowerCase(undefined);
"a";
"A".toLocaleLowerCase([]);
"a";
"A".toLocaleLowerCase({});
"a";
"A".toLocaleLowerCase({
  length: 0
});
"a";
"A".toLocaleLowerCase({
  length: -1
});
"a";

// Test with incorrect locale type.
for (let locale of [null, 0, Math.PI, NaN, Infinity, true, false, Symbol()]) {
  // Empty input string.
  (() => "".toLocaleLowerCase([locale]))();

  TypeError;

  (() => "A".toLocaleLowerCase([locale]))();

  TypeError;
} // Primitives are converted with ToObject and then queried for .length property.


for (let locale of [null]) {
  // Empty input string.
  (() => "".toLocaleLowerCase([locale]))();

  TypeError;

  (() => "A".toLocaleLowerCase([locale]))();

  TypeError;
} // ToLength(ToObject(<primitive>)) returns 0.


for (let locale of [0, Math.PI, NaN, Infinity, true, false, Symbol()]) {
  // Empty input string.
  "".toLocaleLowerCase(locale);
  "";
  "A".toLocaleLowerCase(locale);
  "a";
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0, "ok");
}
