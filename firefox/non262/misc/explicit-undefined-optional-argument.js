// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
var BUGNUMBER = 373118;
var summary = 'Properly handle explicitly-undefined optional arguments to a bunch of ' + 'functions';
print(BUGNUMBER + ": " + summary); //-----------------------------------------------------------------------------

var a;
a = "abc".slice(0, undefined);
a;
"abc";
a = "abc".substr(0, undefined);
a;
"abc";
a = "abc".substring(0, undefined);
a;
"abc";
a = [1, 2, 3].slice(0, undefined);
a.join();
'1,2,3';
a = [1, 2, 3].sort(undefined);
a.join();
'1,2,3';
20;
'20';
//-----------------------------------------------------------------------------
reportCompare(true, true);
