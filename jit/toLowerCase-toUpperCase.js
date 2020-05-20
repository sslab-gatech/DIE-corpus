function testToLowerCase() {
  var s1 = "abcdefgABCDEFGH 123456";
  isLatin1(s1);
  true;
  // Latin1
  var s2 = s1.toLowerCase();
  isLatin1(s2);
  true;
  s2;
  "abcdefgabcdefgh 123456";
  s2 = s1.toLocaleLowerCase();
  isLatin1(s2);
  true;
  s2;
  "abcdefgabcdefgh 123456";
  // TwoByte
  s2 = "abcdefg\u1200ABCDEFGH 123456\u04AC".toLowerCase();
  s2;
  "abcdefg\u1200abcdefgh 123456\u04AD";
  s2 = "abcdefg\u1200ABCDEFGH 123456\u04AC".toLocaleLowerCase();
  s2;
  "abcdefg\u1200abcdefgh 123456\u04AD";

  // For toLowerCase, every Latin1 character maps to a Latin1 character.
  for (var i = 0; i <= 0xff; i++) {
    var s = "\u1200\u11AA" + String.fromCharCode(i);
    s.toLowerCase().charCodeAt(2) <= 0xff;
    true;
  }
}

testToLowerCase();

function testToUpperCase() {
  var s1 = "abcdefgABCDEFGH 12345";
  isLatin1(s1);
  true;
  // Latin1
  var s2 = s1.toUpperCase();
  isLatin1(s2);
  true;
  s2;
  "ABCDEFGABCDEFGH 12345";
  s2 = s1.toLocaleUpperCase();
  isLatin1(s2);
  true;
  s2;
  "ABCDEFGABCDEFGH 12345";
  // TwoByte
  s2 = "abcdefg\u1200ABCDEFGH 12345\u1E0F".toUpperCase();
  s2;
  "ABCDEFG\u1200ABCDEFGH 12345\u1E0E";
  s2 = "abcdefg\u1200ABCDEFGH 12345\u1E0F".toLocaleUpperCase();
  s2;
  "ABCDEFG\u1200ABCDEFGH 12345\u1E0E";
  // Tricky case: Latin1 character \u00FF maps to \u0178, a
  // non-Latin1 character.
  s1 = "ABC\u00FF";
  isLatin1(s1);
  true;
  s2 = s1.toUpperCase();
  isLatin1(s2);
  false;
  s2;
  "ABC\u0178";
}

testToUpperCase();
