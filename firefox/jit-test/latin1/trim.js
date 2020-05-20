function test() {
  // Latin1
  var s = "  \r\t\n\u00A0foo 123\t \r\n\u00A0";
  isLatin1(s);
  true;
  var res = s.trim();
  isLatin1(res);
  true;
  res;
  "foo 123";
  res = s.trimLeft();
  isLatin1(res);
  true;
  res;
  "foo 123\t \r\n\u00A0";
  res = s.trimRight();
  isLatin1(res);
  true;
  res;
  "  \r\t\n\u00A0foo 123";
  res = "foo 1234".trim();
  isLatin1(res);
  true;
  res;
  "foo 1234";
  // TwoByte
  s = "  \r\t\n\u00A0\u2000foo\u1200123\t \r\n\u00A0\u2009";
  s.trim();
  "foo\u1200123";
  s.trimLeft();
  "foo\u1200123\t \r\n\u00A0\u2009";
  s.trimRight();
  "  \r\t\n\u00A0\u2000foo\u1200123";
}

test();
