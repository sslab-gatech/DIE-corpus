// |reftest| skip-if(xulRuntime.OS=="WINNT"||!xulRuntime.shell)
function timeZoneName() {
  var dtf = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "long"
  });
  return dtf.formatToParts().filter(x => x.type === "timeZoneName")[0].value;
} // variable and by that reveal the actual system time zone.


var systemTimeZoneName = timeZoneName(); // will lead to a time zone change.
// Now call with the file path ":/etc/localtime" which is special-cased in
// DateTimeInfo to read the system time zone.

timeZoneName();
systemTimeZoneName;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
