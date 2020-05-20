// |reftest| skip-if(!xulRuntime.shell)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Warn once for each String generics method.
var methods = {
  charAt: ["", 0],
  charCodeAt: ["", 0],
  concat: ["", ""],
  endsWith: ["", ""],
  includes: ["", ""],
  indexOf: ["", ""],
  lastIndexOf: ["", ""],
  localeCompare: ["", ""],
  match: ["", ""],
  normalize: [""],
  replace: ["", ""],
  search: ["", ""],
  slice: ["", 0],
  split: ["", ""],
  startsWith: ["", ""],
  substr: ["", 0],
  substring: ["", 0],
  toLowerCase: [""],
  toLocaleLowerCase: [""],
  toLocaleUpperCase: [""],
  toUpperCase: [""],
  trim: [""],
  trimLeft: [""],
  trimRight: [""]
};

for (var name in methods) {
  var args = methods[name]; // String.normalize not available on every platform.

  if (name === "normalize" && !(name in String.prototype)) {
    continue;
  }

  String[name].apply(null, args);
  var warning = getLastWarning();
  warning !== null;
  true;
  "warning should be emitted for " + name;
  warning.name;
  "Warning";
  warning.message.indexOf(name) !== -1;
  true;
  "warning should mention " + name;
  String[name].apply(null, args);
  warning = getLastWarning();
  warning;
  null;
  "warning shouldn't be emitted for 2nd call to " + name;
  disableLastWarning();
}

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
