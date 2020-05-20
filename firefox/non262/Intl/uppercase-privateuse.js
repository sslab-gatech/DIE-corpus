// |reftest| skip-if(!this.hasOwnProperty("Intl"))
// privateuse subtags can start with upper-case 'X'.
Intl.getCanonicalLocales("de-X-a-a");
["de-x-a-a"];
Intl.getCanonicalLocales("X-a-a");
["x-a-a"];

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
