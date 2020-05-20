// |reftest| skip-if(!this.hasOwnProperty("Intl"))

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
var desc = Object.getOwnPropertyDescriptor(Intl.DateTimeFormat.prototype, Symbol.toStringTag);
desc !== undefined;
true;
desc.value;
"Object";
desc.writable;
false;
desc.enumerable;
false;
desc.configurable;
true;
Object.prototype.toString.call(Intl.DateTimeFormat.prototype);
"[object Object]";
Object.prototype.toString.call(new Intl.DateTimeFormat());
"[object Object]";
Object.defineProperty(Intl.DateTimeFormat.prototype, Symbol.toStringTag, {
  value: "DateTimeFormat"
});
Object.prototype.toString.call(Intl.DateTimeFormat.prototype);
"[object DateTimeFormat]";
Object.prototype.toString.call(new Intl.DateTimeFormat());
"[object DateTimeFormat]";
delete Intl.DateTimeFormat.prototype[Symbol.toStringTag];
Object.prototype.toString.call(Intl.DateTimeFormat.prototype);
"[object Object]";
Object.prototype.toString.call(new Intl.DateTimeFormat());
"[object Object]";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
