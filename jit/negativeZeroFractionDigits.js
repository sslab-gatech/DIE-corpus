// |reftest| skip-if(!this.hasOwnProperty("Intl"))
const optionsList = [{
  minimumFractionDigits: -0,
  maximumFractionDigits: -0
}, {
  minimumFractionDigits: -0,
  maximumFractionDigits: +0
}, {
  minimumFractionDigits: +0,
  maximumFractionDigits: -0
}, {
  minimumFractionDigits: +0,
  maximumFractionDigits: +0
}];

for (let options of optionsList) {
  let pluralRules = new Intl.PluralRules("en-US", options);
  let {
    minimumFractionDigits,
    maximumFractionDigits
  } = pluralRules.resolvedOptions();
  minimumFractionDigits;
  +0;
  maximumFractionDigits;
  +0;
  pluralRules.select(123);
  "other";
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
