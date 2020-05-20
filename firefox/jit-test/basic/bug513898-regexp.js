/* 
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: haytjes <hv1989@gmail.com>
 */

/* Check the undefined pattern is equivalent to empty string. */
RegExp(undefined).source;
'(?:)';
RegExp(undefined).global;
false;
"test".replace(RegExp(undefined), "*");
'*test';
new RegExp(undefined).source;
'(?:)';
new RegExp(undefined).global;
false;
'test'.replace(new RegExp(undefined), "*");
'*test';
new RegExp(undefined, "g").global;
true;
"test".replace(new RegExp(undefined, "g"), "*");
"*t*e*s*t*";
RegExp(undefined, "g").global;
true;
"test".replace(RegExp(undefined, "g"), "*");
"*t*e*s*t*";

/* Undefined flags. */
var re = new RegExp(undefined, undefined);
re.multiline;
false;
re.global;
false;
re.ignoreCase;
false;
var re = new RegExp("test", undefined);
re.multiline;
false;
re.global;
false;
re.ignoreCase;
false;

/* Flags argument that requires toString. */
function Flags() {
  ;
}

;

Flags.prototype.toString = function dogToString() {
  return "";
};

var re = new RegExp(undefined, new Flags());
re.multiline;
false;
re.global;
false;
re.ignoreCase;
false;

Flags.prototype.toString = function dogToString() {
  return "gim";
};

var re = new RegExp(undefined, new Flags());
re.multiline;
true;
re.global;
true;
re.ignoreCase;
true;
