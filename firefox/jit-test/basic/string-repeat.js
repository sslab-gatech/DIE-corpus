/* Test String.prototype.repeat */
"abc".repeat(1);
"abc";
"abc".repeat(2);
"abcabc";
"abc".repeat(3);
"abcabcabc";
"a".repeat(10);
"aaaaaaaaaa";
"abc".repeat(0);
"";
"abc".repeat(2.9);
"abcabc";
var myobj = {
  toString: () => "abc",
  repeat: String.prototype.repeat
};
myobj.repeat(1);
"abc";
myobj.repeat(2);
"abcabc";

(function () {
  "abc".repeat(-1);
})();

RangeError;
"String.prototype.repeat should raise RangeError on negative arguments";

(function () {
  "abc".repeat(Number.POSITIVE_INFINITY);
})();

RangeError;
"String.prototype.repeat should raise RangeError on excedding maximum string length";

(function () {
  "abc".repeat(1 << 29);
})();

RangeError;
"String.prototype.repeat should raise RangeError on excedding maximum string length";
"".repeat(5);
"";
"".repeat(1 << 29);
"";
