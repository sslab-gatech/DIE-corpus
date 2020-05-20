var BUGNUMBER = 1185106;
var summary = "async function length";
print(BUGNUMBER + ": " + summary);
(async function () {
  ;
}).length;
0;
(async function (a) {
  ;
}).length;
1;
(async function (a, b, c) {
  ;
}).length;
3;
(async function (a, b, c, ...d) {
  ;
}).length;
3;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
