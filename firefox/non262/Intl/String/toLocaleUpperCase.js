// |reftest| skip-if(!this.hasOwnProperty("Intl"))
// Test language dependent special casing with different language tags.
for (let locale of ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"]) {
  "i\u0307".toLocaleUpperCase(locale);
  "I";
  "i\u0307".toLocaleUpperCase([locale]);
  "I";
  "i\u0307".toLocaleUpperCase([locale, "und"]);
  "I";
  "i\u0307".toLocaleUpperCase(["und", locale]);
  "I\u0307";
} // Ensure "lti" (Leti) isn't misrecognized as "lt", even though both share the
// same prefix.


"i\u0307".toLocaleUpperCase("lti");
"I\u0307";
"i\u0307".toLocaleUpperCase(["lti"]);
"I\u0307";

// Language tag is always verified.
for (let locale of ["no_locale", "lt-invalid_ext", ["no_locale"], ["en", "no_locale"]]) {
  // Empty input string.
  (() => "".toLocaleUpperCase(locale))();

  RangeError;

  (() => "a".toLocaleUpperCase(locale))();

  RangeError;
} // The language tag fast-path for String.prototype.toLocaleUpperCase doesn't
// trip up on three element private-use only language tags.


"a".toLocaleUpperCase("x-x");
"A";
"a".toLocaleUpperCase("x-0");
"A";
"a".toLocaleUpperCase();
"A";
"a".toLocaleUpperCase(undefined);
"A";
"a".toLocaleUpperCase([]);
"A";
"a".toLocaleUpperCase({});
"A";
"a".toLocaleUpperCase({
  length: 0
});
"A";
"a".toLocaleUpperCase({
  length: -1
});
"A";

// Test with incorrect locale type.
for (let locale of [null, 0, Math.PI, NaN, Infinity, true, false, Symbol()]) {
  // Empty input string.
  (() => "".toLocaleUpperCase([locale]))();

  TypeError;

  (() => "a".toLocaleUpperCase([locale]))();

  TypeError;
} // Primitives are converted with ToObject and then queried for .length property.


for (let locale of [null]) {
  // Empty input string.
  (() => "".toLocaleUpperCase([locale]))();

  TypeError;

  (() => "a".toLocaleUpperCase([locale]))();

  TypeError;
} // ToLength(ToObject(<primitive>)) returns 0.


for (let locale of [0, Math.PI, NaN, Infinity, true, false, Symbol()]) {
  // Empty input string.
  "".toLocaleUpperCase(locale);
  "";
  "a".toLocaleUpperCase(locale);
  "A";
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0, "ok");
}
