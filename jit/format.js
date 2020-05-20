// |reftest| skip-if(!this.hasOwnProperty('Intl'))

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Tests the format function with a diverse set of locales and options.
var rtf;
{
  // Numeric format
  rtf = new Intl.RelativeTimeFormat("en-US");
  rtf.format(0, "second");
  "in 0 seconds";
  rtf.format(-0, "second");
  "0 seconds ago";
  rtf.format(-1, "second");
  "1 second ago";
  rtf.format(1, "second");
  "in 1 second";
  rtf.format(0, "minute");
  "in 0 minutes";
  rtf.format(-0, "minute");
  "0 minutes ago";
  rtf.format(-1, "minute");
  "1 minute ago";
  rtf.format(1, "minute");
  "in 1 minute";
  rtf.format(0, "hour");
  "in 0 hours";
  rtf.format(-0, "hour");
  "0 hours ago";
  rtf.format(-1, "hour");
  "1 hour ago";
  rtf.format(1, "hour");
  "in 1 hour";
  rtf.format(0, "day");
  "in 0 days";
  rtf.format(-0, "day");
  "0 days ago";
  rtf.format(-1, "day");
  "1 day ago";
  rtf.format(1, "day");
  "in 1 day";
  rtf.format(0, "week");
  "in 0 weeks";
  rtf.format(-0, "week");
  "0 weeks ago";
  rtf.format(-1, "week");
  "1 week ago";
  rtf.format(1, "week");
  "in 1 week";
  rtf.format(0, "month");
  "in 0 months";
  rtf.format(-0, "month");
  "0 months ago";
  rtf.format(-1, "month");
  "1 month ago";
  rtf.format(1, "month");
  "in 1 month";
  rtf.format(0, "year");
  "in 0 years";
  rtf.format(-0, "year");
  "0 years ago";
  rtf.format(-1, "year");
  "1 year ago";
  rtf.format(1, "year");
  "in 1 year";
}
{
  // Text format
  rtf = new Intl.RelativeTimeFormat("en-US", {
    numeric: "auto"
  });
  rtf.format(0, "second");
  "now";
  rtf.format(-0, "second");
  "now";
  rtf.format(-1, "second");
  "1 second ago";
  rtf.format(1, "second");
  "in 1 second";
  rtf.format(0, "minute");
  "in 0 minutes";
  rtf.format(-0, "minute");
  "0 minutes ago";
  rtf.format(-1, "minute");
  "1 minute ago";
  rtf.format(1, "minute");
  "in 1 minute";
  rtf.format(0, "hour");
  "in 0 hours";
  rtf.format(-0, "hour");
  "0 hours ago";
  rtf.format(-1, "hour");
  "1 hour ago";
  rtf.format(1, "hour");
  "in 1 hour";
  rtf.format(0, "day");
  "today";
  rtf.format(-0, "day");
  "today";
  rtf.format(-1, "day");
  "yesterday";
  rtf.format(1, "day");
  "tomorrow";
  rtf.format(0, "week");
  "this week";
  rtf.format(-0, "week");
  "this week";
  rtf.format(-1, "week");
  "last week";
  rtf.format(1, "week");
  "next week";
  rtf.format(0, "month");
  "this month";
  rtf.format(-0, "month");
  "this month";
  rtf.format(-1, "month");
  "last month";
  rtf.format(1, "month");
  "next month";
  rtf.format(0, "year");
  "this year";
  rtf.format(-0, "year");
  "this year";
  rtf.format(-1, "year");
  "last year";
  rtf.format(1, "year");
  "next year";
}
{
  // Plural specifier
  rtf = new Intl.RelativeTimeFormat("en-US");
  rtf.format(1, "seconds");
  "in 1 second";
  rtf.format(1, "minutes");
  "in 1 minute";
  rtf.format(1, "hours");
  "in 1 hour";
  rtf.format(1, "days");
  "in 1 day";
  rtf.format(1, "weeks");
  "in 1 week";
  rtf.format(1, "months");
  "in 1 month";
  rtf.format(1, "years");
  "in 1 year";
}
rtf = new Intl.RelativeTimeFormat("de", {
  numeric: "auto"
});
rtf.format(-1, "day");
"gestern";
rtf.format(1, "day");
"morgen";
rtf = new Intl.RelativeTimeFormat("ar", {
  numeric: "auto"
});
rtf.format(-1, "day");
"أمس";
rtf.format(1, "day");
"غدًا";
rtf = new Intl.RelativeTimeFormat("en-US");
var weirdValueCases = [Infinity, -Infinity, NaN, "word", [0, 2], {}];

for (let c of weirdValueCases) {
  (() => rtf.format(c, "year"))();

  RangeError;
}

;
var weirdUnitCases = ["test", "SECOND", "sEcOnD", 1, NaN, undefined, null, {}];

for (let u of weirdUnitCases) {
  (function () {
    var rtf = new Intl.RelativeTimeFormat("en-US");
    rtf.format(1, u);
  })();

  RangeError;
}

;
reportCompare(0, 0, 'ok');
