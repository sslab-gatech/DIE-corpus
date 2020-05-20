// Latin1
s = "a%2b%20def%00A0";
res = decodeURI(s);
res;
"a%2b def\x00A0";
isLatin1(res);
true;
res = decodeURIComponent(s);
res;
"a+ def\x00A0";
isLatin1(res);
true;
// TwoByte
s += "\u1200";
decodeURI(s);
"a%2b def\x00A0\u1200";
decodeURIComponent(s);
"a+ def\x00A0\u1200";

// Latin1 malformed
try {
  decodeURI("abc%80");
  0;
  1;
} catch (e) {
  e instanceof URIError;
  true;
} // TwoByte malformed


try {
  decodeURI("abc%80\u1200");
  0;
  1;
} catch (e) {
  e instanceof URIError;
  true;
} // Latin1


res = encodeURI("a%2b def\x00A0");
res;
"a%252b%20def%00A0";
isLatin1(res);
true;
res = encodeURIComponent("a+ def\x00A0");
res;
"a%2B%20def%00A0";
isLatin1(res);
true;
// TwoByte
res = encodeURI("a%2b def\x00A0\u1200");
res;
"a%252b%20def%00A0%E1%88%80";
isLatin1(res);
true;
res = encodeURIComponent("a+ def\x00A0\u1200");
res;
"a%2B%20def%00A0%E1%88%80";
isLatin1(res);
true;

// TwoByte malformed
try {
  encodeURI("a\uDB00");
  0;
  1;
} catch (e) {
  e instanceof URIError;
  true;
}
