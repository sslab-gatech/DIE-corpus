/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var a = /undefined/.exec();
a[0];
'undefined';
a.length;
1;
a = /undefined/.exec(undefined);
a[0];
'undefined';
a.length;
1;
/undefined/.test();
true;
/undefined/.test(undefined);
true;
/aaaa/.exec();
null;
/aaaa/.exec(undefined);
null;
/aaaa/.test();
false;
/aaaa/.test(undefined);
false;
"undefined".search();
0;
"undefined".search(undefined);
0;
"aaaa".search();
0;
"aaaa".search(undefined);
0;
a = "undefined".match();
a[0];
"";
a.length;
1;
a = "undefined".match(undefined);
a[0];
"";
a.length;
1;
a = "aaaa".match();
a[0];
"";
a.length;
1;
a = "aaaa".match(undefined);
a[0];
"";
a.length;
1;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
