"foo".charAt(-123);
"";
"foo".charAt(-1);
"";
"foo".charAt(0);
"f";
"foo".charAt(1);
"o";
"foo".charAt(2);
"o";
"foo".charAt(3.4);
"";
"foo".charAt();
"f";
"".charAt();
"";
"".charAt(0);
"";
"abc\u9123".charAt(3);
"\u9123";

// char without unit string

/* Inferred as string.charAt(int). */
function charAt1(x) {
  return "abc".charAt(x);
}

charAt1(-1);
"";
charAt1(0);
"a";
charAt1(1);
"b";
charAt1(2);
"c";
charAt1(3);
"";
charAt1(1234);
"";

/* Inferred as string.charAt(double). */
function charAt2(x) {
  return "abc".charAt(x);
}

charAt2(-1.3);
"";
charAt2(-0);
"a";
charAt2(2);
"c";
charAt2(2.3);
"c";
charAt2(3.14);
"";
charAt2(NaN);
"a";

/* Test ropes. */
function charAt3(s, i) {
  var s2 = "abcdef" + s + "12345";
  return s2.charAt(i);
}

charAt3("abcdef", 14);
"3";
charAt3("a" + "b", 1);
"b";
charAt3("abcdefg" + "hijklmnop", 10);
"e";

/* Other 'this'. */
var arr = [1, 2];
arr.charAt = String.prototype.charAt;
arr.charAt(1);
",";
