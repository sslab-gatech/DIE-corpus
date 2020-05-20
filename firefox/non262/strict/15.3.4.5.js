/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function strict() {
  'use strict';

  return this;
}

function lenient() {
  return this;
}

var obj = {};
strict.bind(true)();
true;
strict.bind(42)();
42;
strict.bind("")();
"";
strict.bind(null)();
null;
strict.bind(undefined)();
undefined;
strict.bind(obj)();
obj;
lenient.bind(true)() instanceof Boolean;
true;
lenient.bind(42)() instanceof Number;
true;
lenient.bind("")() instanceof String;
true;
lenient.bind(null)();
this;
lenient.bind(undefined)();
this;
lenient.bind(obj)();
obj;
reportCompare(true, true);
