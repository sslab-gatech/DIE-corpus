// |reftest| skip-if(!this.hasOwnProperty("Intl"))

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Tests the format function with a diverse set of locales and options.
var rtf;
rtf = new Intl.RelativeTimeFormat("en-us");
rtf.resolvedOptions().locale;
"en-US";
rtf.resolvedOptions().style;
"long";
rtf.resolvedOptions().numeric;
"always";
reportCompare(0, 0, 'ok');
