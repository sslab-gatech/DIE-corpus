// Latin1
s = "a%2b%20def%00A0";
res = unescape(s);
res;
"a+ def\x00A0";
isLatin1(res);
true;
s = "a%2b%20def%00A0%u1200";
unescape(s);
"a+ def\x00A0\u1200";
// TwoByte
s += "\u1200";
unescape(s);
"a+ def\x00A0\u1200\u1200";
// Latin1
s = "abc \u00ff";
res = escape(s);
res;
"abc%20%FF";
isLatin1(res);
true;
// TwoByte
s += "\u1200";
res = escape(s);
res;
"abc%20%FF%u1200";
isLatin1(res);
true;
