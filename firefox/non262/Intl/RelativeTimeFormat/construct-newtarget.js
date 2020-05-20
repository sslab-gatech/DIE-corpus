// |reftest| skip-if(!this.hasOwnProperty("Intl"))

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
var obj = new Intl.RelativeTimeFormat(); // Test that new RTF produces an object with the right prototype.

Object.getPrototypeOf(obj);
Intl.RelativeTimeFormat.prototype;

// Test subclassing %Intl.RelativeTimeFormat% works correctly.
class MyRelativeTimeFormat extends Intl.RelativeTimeFormat {}

var obj = new MyRelativeTimeFormat();
obj instanceof MyRelativeTimeFormat;
true;
obj instanceof Intl.RelativeTimeFormat;
true;
Object.getPrototypeOf(obj);
MyRelativeTimeFormat.prototype;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
