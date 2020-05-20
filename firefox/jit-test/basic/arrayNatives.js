/* Array natives applied to non-arrays. */
var oa = {};
Array.pop(oa);
oa.length;
0;
var ob = {};
Array.push(ob, "twelve");
ob.length;
1;
var oc = {};
Array.shift(oc);
oc.length;
0;
var od = {};
Array.unshift(od, "eight");
od.length;
1;
