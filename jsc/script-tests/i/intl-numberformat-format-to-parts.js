//@ skip if $hostOS == "windows" or $hostOS == "darwin" or $hostOS == "linux"
//@ requireOptions("--useIntlNumberFormatToParts=true")
console.log("This test checks the behavior of Intl.NumberFormat.prototype.formatToParts as described in the ECMAScript Internationalization API Specification.");
Intl.NumberFormat.prototype.formatToParts;
Intl.NumberFormat.prototype.formatToParts.length;
Object.getOwnPropertyDescriptor(Intl.NumberFormat.prototype, 'formatToParts').writable;
Object.getOwnPropertyDescriptor(Intl.NumberFormat.prototype, 'formatToParts').enumerable;
Object.getOwnPropertyDescriptor(Intl.NumberFormat.prototype, 'formatToParts').configurable;
Object.getOwnPropertyDescriptor(Intl.NumberFormat.prototype, 'formatToParts').get;
Object.getOwnPropertyDescriptor(Intl.NumberFormat.prototype, 'formatToParts').set; // Handles non-finite and non-number

JSON.stringify(Intl.NumberFormat('en').formatToParts(-Infinity));
JSON.stringify(Intl.NumberFormat('en').formatToParts('one')); // Handles percents

JSON.stringify(Intl.NumberFormat('en-US', {
  style: 'percent'
}).formatToParts(1)); // Handles locale, currency, and number system

JSON.stringify(Intl.NumberFormat("pt-BR-u-nu-fullwide", {
  minimumFractionDigits: "3",
  style: "currency",
  currency: "USD",
  currencyDisplay: "name"
}).formatToParts(21069933563725.1));
+Intl.NumberFormat('en-US', {
  useGrouping: false
}).formatToParts(Number.MAX_SAFE_INTEGER)[0].value; // Exceed the 32 character default buffer size

Intl.NumberFormat('en-US', {
  useGrouping: false
}).formatToParts(Number.MAX_VALUE).length;
Intl.NumberFormat('en-US', {
  useGrouping: false
}).formatToParts(Number.MAX_VALUE)[0].value.length;
Intl.NumberFormat('en-US').formatToParts(Number.MAX_VALUE).length;
