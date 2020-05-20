function toLatin1(s) {
  isLatin1(s);
  true;
  return s;
}

var arrLatin1 = [toLatin1("abc1"), toLatin1("abc\u00A0")];
var res = arrLatin1.join(toLatin1("sep\u00ff"));
res;
"abc1sep\xFFabc\xA0";
isLatin1(res);
true;
var arrTwoByte = [toLatin1("abc2"), "def\u1200"];
arrTwoByte.join(toLatin1("sep\u00fe"));
"abc2sep\xFEdef\u1200";
res = arrLatin1.join(toLatin1("-"));
res;
"abc1-abc\xA0";
isLatin1(res);
true;
arrTwoByte.join(toLatin1("7"));
"abc27def\u1200";
arrLatin1.join("\u1200");
"abc1\u1200abc\xA0";
arrTwoByte.join("\u1200");
"abc2\u1200def\u1200";
arrLatin1.join("---\u1200");
"abc1---\u1200abc\xA0";
arrTwoByte.join("---\u1200");
"abc2---\u1200def\u1200";
