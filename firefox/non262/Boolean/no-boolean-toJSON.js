/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Author: Tom Schuster
 */
JSON.stringify(new Boolean(false), function (k, v) {
  typeof v;
  "object";
});
Boolean.prototype.hasOwnProperty('toJSON');
false;

Object.prototype.toJSON = function () {
  return 2;
};

JSON.stringify(new Boolean(true));
"2";

if (typeof reportCompare === 'function') {
  reportCompare(true, true);
}
