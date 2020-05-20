// |reftest| skip-if(!this.hasOwnProperty("Intl"))
// Tests the format function with a diverse set of locales and options.
var pr;
pr = new Intl.PluralRules("en-us");
pr.resolvedOptions().locale;
"en-US";
pr.resolvedOptions().type;
"cardinal";
pr.resolvedOptions().pluralCategories.length;
2;
pr = new Intl.PluralRules("de", {
  type: 'cardinal'
});
pr.resolvedOptions().pluralCategories.length;
2;
pr = new Intl.PluralRules("de", {
  type: 'ordinal'
});
pr.resolvedOptions().pluralCategories.length;
1;
reportCompare(0, 0, 'ok');
