// |reftest| skip-if(!this.hasOwnProperty("Intl"))

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Tests the getCanonicalLocales function with a diverse set of arguments.
let gCL = Intl.getCanonicalLocales;
Intl.getCanonicalLocales.length;
1;
gCL();
[];
gCL('ab-cd');
['ab-CD'];
gCL(['ab-cd']);
['ab-CD'];
gCL(['ab-cd', 'FF']);
['ab-CD', 'ff'];
gCL({
  'a': 0
});
[];
gCL({});
[];
gCL(['ar-ma-u-ca-islamicc']);
['ar-MA-u-ca-islamicc'];
gCL(['th-th-u-nu-thai']);
['th-TH-u-nu-thai'];
gCL(NaN);
[];
gCL(1);
[];
Number.prototype[0] = "en-US";
Number.prototype.length = 1;
gCL(NaN);
["en-US"];

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
