"foo".charCodeAt(-123);
NaN;
"foo".charCodeAt(-0);
102;
"foo".charCodeAt(0);
102;
"foo".charCodeAt(2);
111;
"foo".charCodeAt(3.4);
NaN;
"foo".charCodeAt();
102;
"".charCodeAt();
NaN;
"".charCodeAt(0);
NaN;

/* Inferred as string.charCodeAt(int). */
function charCodeAt1(x) {
  return "abc".charCodeAt(x);
}

charCodeAt1(-1);
NaN;
charCodeAt1(0);
97;
charCodeAt1(1);
98;
charCodeAt1(2);
99;
charCodeAt1(3);
NaN;
charCodeAt1(1234);
NaN;

/* Inferred as string.charCodeAt(double). */
function charCodeAt2(x) {
  return "abc".charCodeAt(x);
}

charCodeAt2(-1.3);
NaN;
charCodeAt2(-0);
97;
charCodeAt2(2);
99;
charCodeAt2(2.3);
99;
charCodeAt2(3.14);
NaN;
charCodeAt2(NaN);
97;

/* Test ropes. */
function charCodeAt3(s, i) {
  var s2 = "abcdef" + s + "12345";
  return s2.charCodeAt(i);
}

charCodeAt3("abcdef", 14);
51;
charCodeAt3("a" + "b", 1);
98;
charCodeAt3("abcdefg" + "hijklmnop", 10);
101;

/* Other 'this'. */
var n = new Number(123);
n.charCodeAt = String.prototype.charCodeAt;
n.charCodeAt(1);
50;
