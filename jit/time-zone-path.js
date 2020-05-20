// |reftest| skip-if(xulRuntime.OS=="WINNT"||!xulRuntime.shell)
function timeZoneName() {
  var dtf = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "long"
  });
  return dtf.formatToParts(Date.UTC(2017, 2, 31, 12, 0, 0)).filter(x => x.type === "timeZoneName")[0].value;
}

timeZoneName();
"Central European Summer Time";
timeZoneName();
"Eastern European Summer Time";
timeZoneName();
"Coordinated Universal Time";
timeZoneName();
"Central Daylight Time";
timeZoneName();
"Mountain Standard Time";
timeZoneName();
"Coordinated Universal Time";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
