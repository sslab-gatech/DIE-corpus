// |reftest| skip-if(!this.hasOwnProperty("Intl"))
var log;
var proxy = new Proxy({
  year: "numeric",
  hour: "numeric"
}, new Proxy({
  get(t, pk, r) {
    log.push(pk);
    return Reflect.get(t, pk, r);
  }

}, {
  get(t, pk, r) {
    pk;
    "get";
    return Reflect.get(t, pk, r);
  }

}));
var constructorAccesses = [// ToDateTimeOptions(options, "any", "date").
"weekday", "year", "month", "day", "hour", "minute", "second", // InitializeDateTimeFormat
"localeMatcher", "hour12", "hourCycle", "timeZone", // Table 5: Components of date and time formats
"weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", // InitializeDateTimeFormat
"formatMatcher"];
log = [];
new Intl.DateTimeFormat(undefined, proxy);
log;
constructorAccesses;
log = [];
new Date().toLocaleString(undefined, proxy);
log;
[// ToDateTimeOptions(options, "any", "all").
"weekday", "year", "month", "day", "hour", "minute", "second", ...constructorAccesses];
log = [];
new Date().toLocaleDateString(undefined, proxy);
log;
[// ToDateTimeOptions(options, "date", "date").
"weekday", "year", "month", "day", ...constructorAccesses];
log = [];
new Date().toLocaleTimeString(undefined, proxy);
log;
[// ToDateTimeOptions(options, "time", "time").
"hour", "minute", "second", ...constructorAccesses];

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
