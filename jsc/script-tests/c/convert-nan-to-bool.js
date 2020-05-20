console.log("This test ensures that NaN is handled correctly when converting numeric expressions to booleans.");
NaN ? true : false;
1 ? true : false;
0 ? true : false;
-1 ? true : false;
1 * -1 ? true : false;
1 * 0 ? true : false;
1 * 1 ? true : false;
1 / -1 ? true : false;
1 / 0 ? true : false;
1 / 1 ? true : false;
1 % 2 ? true : false;
1 % 1 ? true : false;
1 + -1 ? true : false;
1 + 0 ? true : false;
1 + 1 ? true : false;
1 - -1 ? true : false;
1 - 0 ? true : false;
1 - 1 ? true : false;
1 & -1 ? true : false;
1 & 0 ? true : false;
1 & 1 ? true : false;
1 | -1 ? true : false;
1 | 0 ? true : false;
1 | 1 ? true : false;
1 ^ -1 ? true : false;
1 ^ 0 ? true : false;
1 ^ 1 ? true : false;
NaN * -1 ? true : false;
NaN * 0 ? true : false;
NaN * 1 ? true : false;
NaN / -1 ? true : false;
NaN / 0 ? true : false;
NaN / 1 ? true : false;
NaN % -1 ? true : false;
NaN % 0 ? true : false;
NaN % 1 ? true : false;
NaN + -1 ? true : false;
NaN + 0 ? true : false;
NaN + 1 ? true : false;
NaN - -1 ? true : false;
NaN - 0 ? true : false;
NaN - 1 ? true : false;
NaN & -1 ? true : false;
NaN & 0 ? true : false;
NaN & 1 ? true : false;
NaN | -1 ? true : false;
NaN | 0 ? true : false;
NaN | 1 ? true : false;
NaN ^ -1 ? true : false;
NaN ^ 0 ? true : false;
NaN ^ 1 ? true : false;
+NaN ? true : false;
-NaN ? true : false;
NaN && true ? true : false;
NaN && false ? true : false;
NaN || true ? true : false;
NaN || false ? true : false;

(function () {
  var nan = NaN;
  return nan-- ? true : false;
})();

(function () {
  var nan = NaN;
  return nan++ ? true : false;
})();

(function () {
  var nan = NaN;
  return --nan ? true : false;
})();

(function () {
  var nan = NaN;
  return ++nan ? true : false;
})();

(function () {
  var Undefined = undefined;
  return Undefined-- ? true : false;
})();

(function () {
  var Undefined = undefined;
  return Undefined++ ? true : false;
})();

(function () {
  var Undefined = undefined;
  return --Undefined ? true : false;
})();

(function () {
  var Undefined = undefined;
  return ++Undefined ? true : false;
})();
