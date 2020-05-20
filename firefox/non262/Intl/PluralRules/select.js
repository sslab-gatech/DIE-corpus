// |reftest| skip-if(!this.hasOwnProperty('Intl'))
// Tests the format function with a diverse set of locales and options.
var pr;
pr = new Intl.PluralRules("en-us");
pr.select(0);
"other";
pr.select(0.5);
"other";
pr.select(1.2);
"other";
pr.select(1.5);
"other";
pr.select(1.7);
"other";
pr.select(-1);
"one";
pr.select(1);
"one";
pr.select("1");
"one";
pr.select(123456789.123456789);
"other";
pr = new Intl.PluralRules("de", {
  type: "cardinal"
});
pr.select(0);
"other";
pr.select(0.5);
"other";
pr.select(1.2);
"other";
pr.select(1.5);
"other";
pr.select(1.7);
"other";
pr.select(-1);
"one";
pr = new Intl.PluralRules("de", {
  type: "ordinal"
});
pr.select(0);
"other";
pr.select(0.5);
"other";
pr.select(1.2);
"other";
pr.select(1.5);
"other";
pr.select(1.7);
"other";
pr.select(-1);
"other";
pr = new Intl.PluralRules("pl", {
  type: "cardinal"
});
pr.select(0);
"many";
pr.select(0.5);
"other";
pr.select(1);
"one";
pr = new Intl.PluralRules("pl", {
  type: "cardinal",
  maximumFractionDigits: 0
});
pr.select(1.1);
"one";
pr = new Intl.PluralRules("pl", {
  type: "cardinal",
  maximumFractionDigits: 1
});
pr.select(1.1);
"other";
pr = new Intl.PluralRules("en", {
  type: "cardinal",
  minimumFractionDigits: 0
});
pr.select(1);
"one";
pr = new Intl.PluralRules("en", {
  type: "cardinal",
  minimumFractionDigits: 2
});
pr.select(1);
"other";
var weirdCases = [NaN, Infinity, "word", [0, 2], {}];

for (let c of weirdCases) {
  pr.select(c);
  "other";
}

;
reportCompare(0, 0, 'ok');
