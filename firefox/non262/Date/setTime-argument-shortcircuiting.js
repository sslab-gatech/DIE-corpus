// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
print("Test for correct short-circuiting implementation of Date.set methods");
/**************
 * BEGIN TEST *
 **************/

var global = 0;
var date;
/* Test that methods don't short circuit argument evaluation. */

date = new Date(0).setSeconds(NaN, {
  valueOf: function () {
    global = 3;
  }
});
global;
3;
date = new Date(0).setUTCSeconds(NaN, {
  valueOf: function () {
    global = 4;
  }
});
global;
4;
date = new Date(0).setMinutes(NaN, {
  valueOf: function () {
    global = 5;
  }
});
global;
5;
date = new Date(0).setUTCMinutes(NaN, {
  valueOf: function () {
    global = 6;
  }
});
global;
6;
date = new Date(0).setHours(NaN, {
  valueOf: function () {
    global = 7;
  }
});
global;
7;
date = new Date(0).setUTCHours(NaN, {
  valueOf: function () {
    global = 8;
  }
});
global;
8;
date = new Date(0).setMonth(NaN, {
  valueOf: function () {
    global = 11;
  }
});
global;
11;
date = new Date(0).setUTCMonth(NaN, {
  valueOf: function () {
    global = 12;
  }
});
global;
12;
date = new Date(0).setFullYear(NaN, {
  valueOf: function () {
    global = 13;
  }
});
global;
13;
date = new Date(0).setUTCFullYear(NaN, {
  valueOf: function () {
    global = 14;
  }
});
global;
14;

/* Test that argument evaluation is not short circuited if Date == NaN */
date = new Date(NaN).setMilliseconds({
  valueOf: function () {
    global = 15;
  }
});
global;
15;
date = new Date(NaN).setUTCMilliseconds({
  valueOf: function () {
    global = 16;
  }
});
global;
16;
date = new Date(NaN).setSeconds({
  valueOf: function () {
    global = 17;
  }
});
global;
17;
date = new Date(NaN).setUTCSeconds({
  valueOf: function () {
    global = 18;
  }
});
global;
18;
date = new Date(NaN).setMinutes({
  valueOf: function () {
    global = 19;
  }
});
global;
19;
date = new Date(NaN).setUTCMinutes({
  valueOf: function () {
    global = 20;
  }
});
global;
20;
date = new Date(NaN).setHours({
  valueOf: function () {
    global = 21;
  }
});
global;
21;
date = new Date(NaN).setUTCHours({
  valueOf: function () {
    global = 22;
  }
});
global;
22;
date = new Date(NaN).setDate({
  valueOf: function () {
    global = 23;
  }
});
global;
23;
date = new Date(NaN).setUTCDate({
  valueOf: function () {
    global = 24;
  }
});
global;
24;
date = new Date(NaN).setMonth({
  valueOf: function () {
    global = 25;
  }
});
global;
25;
date = new Date(NaN).setUTCMonth({
  valueOf: function () {
    global = 26;
  }
});
global;
26;
date = new Date(NaN).setFullYear({
  valueOf: function () {
    global = 27;
  }
});
global;
27;
date = new Date(NaN).setUTCFullYear({
  valueOf: function () {
    global = 28;
  }
});
global;
28;

/* Test the combination of the above two. */
date = new Date(NaN).setSeconds(NaN, {
  valueOf: function () {
    global = 31;
  }
});
global;
31;
date = new Date(NaN).setUTCSeconds(NaN, {
  valueOf: function () {
    global = 32;
  }
});
global;
32;
date = new Date(NaN).setMinutes(NaN, {
  valueOf: function () {
    global = 33;
  }
});
global;
33;
date = new Date(NaN).setUTCMinutes(NaN, {
  valueOf: function () {
    global = 34;
  }
});
global;
34;
date = new Date(NaN).setHours(NaN, {
  valueOf: function () {
    global = 35;
  }
});
global;
35;
date = new Date(NaN).setUTCHours(NaN, {
  valueOf: function () {
    global = 36;
  }
});
global;
36;
date = new Date(NaN).setMonth(NaN, {
  valueOf: function () {
    global = 39;
  }
});
global;
39;
date = new Date(NaN).setUTCMonth(NaN, {
  valueOf: function () {
    global = 40;
  }
});
global;
40;
date = new Date(NaN).setFullYear(NaN, {
  valueOf: function () {
    global = 41;
  }
});
global;
41;
date = new Date(NaN).setUTCFullYear(NaN, {
  valueOf: function () {
    global = 42;
  }
});
global;
42;

/*Test two methods evaluation*/
var secondGlobal = 0;
date = new Date(NaN).setFullYear({
  valueOf: function () {
    global = 43;
  }
}, {
  valueOf: function () {
    secondGlobal = 1;
  }
});
global;
43;
secondGlobal;
1;
date = new Date(0).setFullYear(NaN, {
  valueOf: function () {
    global = 44;
  }
}, {
  valueOf: function () {
    secondGlobal = 2;
  }
});
global;
44;
secondGlobal;
2;

/* Test year methods*/
date = new Date(0).setYear({
  valueOf: function () {
    global = 45;
  }
});
global;
45;
date = new Date(NaN).setYear({
  valueOf: function () {
    global = 46;
  }
});
global;
46;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
