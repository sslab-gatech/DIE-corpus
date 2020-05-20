/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
Number.prototype.toFixed.call(-Infinity);
"-Infinity";
Number.prototype.toFixed.call(Infinity);
"Infinity";
Number.prototype.toFixed.call(NaN);
"NaN";

(() => Number.prototype.toFixed.call(-Infinity, 555))();

RangeError;

(() => Number.prototype.toFixed.call(Infinity, 555))();

RangeError;

(() => Number.prototype.toFixed.call(NaN, 555))();

RangeError;

(() => Number.prototype.toFixed.call("Hello"))();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
