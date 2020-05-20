function toLatin1(s) {
  isLatin1(s);
  true;
  return s;
}

function testParseInt() {
  // Latin1
  parseInt(toLatin1("12345abc"));
  12345;
  parseInt(toLatin1("0x5"));
  0x5;
  parseInt(toLatin1("-123"));
  -123;
  parseInt(toLatin1("xyz"));
  NaN;
  parseInt(toLatin1("1234GHI"), 17);
  94298;
  parseInt(toLatin1("9007199254749999"));
  9007199254750000;
  parseInt(toLatin1("  9007199254749998"), 16);
  10378291982571444000;
  parseInt("12345abc\u1200");
  12345;
  parseInt("0x5\u1200");
  0x5;
  parseInt("  -123\u1200");
  -123;
  parseInt("\u1200");
  NaN;
  parseInt("1234GHI\u1200", 17);
  94298;
  parseInt("9007199254749999\u1200");
  9007199254750000;
  parseInt("  9007199254749998\u1200", 16);
  10378291982571444000;
}

testParseInt();

function testParseFloat() {
  // Latin1
  parseFloat(toLatin1("3.1415"));
  3.1415;
  parseFloat(toLatin1("  -1234"));
  -1234;
  parseFloat(toLatin1("\u00AA"));
  NaN;
  parseFloat(toLatin1("Infinityabc"));
  Infinity;
  parseFloat(toLatin1("-Infinity"));
  -Infinity;
  parseFloat(toLatin1("\t\t\t+Infinity"));
  Infinity;
  parseFloat("3.1415\u0FFF");
  3.1415;
  parseFloat("  -1234\u0FFF");
  -1234;
  parseFloat("\u00AA\u0FFF");
  NaN;
  parseFloat("Infinityabc\u0FFF");
  Infinity;
  parseFloat("-Infinity\u0FFF");
  -Infinity;
  parseFloat("\t\t\t+Infinity\u0FFF");
  Infinity;
}

testParseFloat();
