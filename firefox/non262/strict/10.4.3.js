/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};

function strict() {
  "use strict";

  return this;
}

strict.call("");
"";
strict.call(true);
true;
strict.call(42);
42;
strict.call(null);
null;
strict.call(undefined);
undefined;
strict.call(obj);
obj;
new strict() instanceof Object;
true;

/* 
 * The compiler internally converts x['foo'] to x.foo. Writing x[s] where
 * s='foo' is enough to throw it off the scent for now.
 */
var strictString = 'strict';
Boolean.prototype.strict = strict;
true.strict();
true;
true[strictString]();
true;
Number.prototype.strict = strict;
42;
42;
42[strictString]();
42;
String.prototype.strict = strict;
"".strict();
"";
""[strictString]();
"";

function lenient() {
  return this;
}

lenient.call("") instanceof String;
true;
lenient.call(true) instanceof Boolean;
true;
lenient.call(42) instanceof Number;
true;
lenient.call(null);
this;
lenient.call(undefined);
this;
lenient.call(obj);
obj;
new lenient() instanceof Object;
true;
var lenientString = 'lenient';
Boolean.prototype.lenient = lenient;
true.lenient() instanceof Boolean;
true;
true[lenientString]() instanceof Boolean;
true;
Number.prototype.lenient = lenient;
42[lenientString]() instanceof Number;
true;
String.prototype.lenient = lenient;
""[lenientString]() instanceof String;
true;
reportCompare(true, true);
