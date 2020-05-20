/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
undefined;
void 0;
Function.prototype.hasOwnProperty('prototype');
false;
Function.prototype.prototype;
undefined;
var builtin_ctors = [Object, Function, Array, String, Boolean, Number, Date, RegExp, Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError];

for (var i = 0; i < builtin_ctors.length; i++) {
  var c = builtin_ctors[i];
  typeof c.prototype;
  c === Function ? "function" : "object";
  c.prototype.constructor;
  c;
}

var builtin_funcs = [eval, isFinite, isNaN, parseFloat, parseInt, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent];

for (var i = 0; i < builtin_funcs.length; i++) {
  builtin_funcs[i].hasOwnProperty('prototype');
  false;
  builtin_funcs[i].prototype;
  undefined;
}

var names = Object.getOwnPropertyNames(Math);

for (var i = 0; i < names.length; i++) {
  var m = Math[names[i]];

  if (typeof m === "function") {
    m.prototype;
    undefined;
  }
}

reportCompare(0, 0, "don't crash");
