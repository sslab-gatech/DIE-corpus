// |reftest| skip-if(!this.hasOwnProperty("Intl")||!this.hasOwnProperty("addIntlExtras"))

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Tests the format function with a diverse set of locales and options.
// Always use UTC to avoid dependencies on test environment.
let mozIntl = {}; // Pattern

var dtf = new Intl.DateTimeFormat("en-US", {
  pattern: "HH:mm MM/dd/YYYY"
});
var mozDtf = new mozIntl.DateTimeFormat("en-US", {
  pattern: "HH:mm MM/dd/YYYY"
});
dtf.resolvedOptions().hasOwnProperty('pattern');
false;
mozDtf.resolvedOptions().pattern;
"HH:mm MM/dd/YYYY";
// Date style
var dtf = new Intl.DateTimeFormat("en-US", {
  dateStyle: 'long'
});
mozDtf.resolvedOptions().hasOwnProperty('dateStyle');
false;
var mozDtf = new mozIntl.DateTimeFormat("en-US", {
  dateStyle: 'long'
});
mozDtf.resolvedOptions().dateStyle;
'long';
mozDtf.resolvedOptions().hasOwnProperty('year');
true;
mozDtf.resolvedOptions().hasOwnProperty('month');
true;
mozDtf.resolvedOptions().hasOwnProperty('day');
true;
// Time style
var dtf = new Intl.DateTimeFormat("en-US", {
  timeStyle: 'long'
});
dtf.resolvedOptions().hasOwnProperty('dateStyle');
false;
var mozDtf = new mozIntl.DateTimeFormat("en-US", {
  timeStyle: 'long'
});
mozDtf.resolvedOptions().timeStyle;
'long';
mozDtf.resolvedOptions().hasOwnProperty('hour');
true;
mozDtf.resolvedOptions().hasOwnProperty('minute');
true;
mozDtf.resolvedOptions().hasOwnProperty('second');
true;
// Date/Time style
var dtf = new Intl.DateTimeFormat("en-US", {
  timeStyle: 'medium',
  dateStyle: 'medium'
});
dtf.resolvedOptions().hasOwnProperty('dateStyle');
false;
dtf.resolvedOptions().hasOwnProperty('timeStyle');
false;
var mozDtf = new mozIntl.DateTimeFormat("en-US", {
  dateStyle: 'medium',
  timeStyle: 'medium'
});
mozDtf.resolvedOptions().timeStyle;
'medium';
mozDtf.resolvedOptions().dateStyle;
'medium';
mozDtf.resolvedOptions().hasOwnProperty('hour');
true;
mozDtf.resolvedOptions().hasOwnProperty('minute');
true;
mozDtf.resolvedOptions().hasOwnProperty('second');
true;
mozDtf.resolvedOptions().hasOwnProperty('year');
true;
mozDtf.resolvedOptions().hasOwnProperty('month');
true;
mozDtf.resolvedOptions().hasOwnProperty('day');
true;
reportCompare(0, 0, 'ok');
