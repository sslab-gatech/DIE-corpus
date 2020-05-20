function toLatin1(s) {
  isLatin1(s);
  true;
  return s;
}

function testSearchFlat() {
  var s1 = toLatin1("fooBar12345");
  var s2 = toLatin1("Bar1"); // Latin1 + Latin1

  s1.search(s2);
  3;
  s2.search(s1);
  -1;
  s1.search(s1);
  0;
  s1.search(s2 + "\u1200");
  -1;
  s1.search("12345\u1200".slice(0, -1));
  6;
  "fooBar12345\u1200".search(s1);
  0;
  "fooBar12345\u1200".search(s2);
  3;
  "fooBar12345\u1200".search("5\u1200");
  10;
  "fooBar12345\u1200".search("5\u1201");
  -1;
}

testSearchFlat();

function testSearchRope() {
  // Tests for the RopeMatch algorithm.
  var s1 = "foobarbaz0123456789".repeat(10);
  s1.indexOf("333"); // flatten

  s1 = toLatin1(s1);
  var ropeMixed = s1 + "abcdef\u1200";
  isLatin1(ropeMixed);
  false;
  var abc = toLatin1("abc");
  var baz = toLatin1("baz"); // Mixed + Latin1

  ropeMixed.search(abc);
  190;
  ropeMixed.search(baz);
  6;
  ropeMixed.search("def\u1200");
  193;
  // Latin1 + Latin1
  s1 = "foobarbaz0123456789".repeat(10);
  s1.indexOf("333"); // flatten

  s1 = toLatin1(s1);
  var ropeLatin1 = s1 + toLatin1("abcdef\u00AA");
  isLatin1(ropeLatin1);
  true;
  ropeLatin1.search(abc);
  190;
  ropeLatin1.search("\u1200bc".substr(1));
  191;
  // TwoByte + Latin1
  s1 = "foobarbaz0123456789\u11AA".repeat(10);
  var ropeTwoByte = s1 + "abcdef\u1200";
  ropeTwoByte.search(abc);
  200;
  ropeTwoByte.search("def\u1200");
  203;
}

testSearchRope();

function testSearchStringMatch() {
  var re = /bar/; // Latin1

  toLatin1("foobar1234").search(re);
  3;
  toLatin1("foo1234").search(re);
  -1;
  "\u1200bar".search(re);
  1;
  "\u12001234".search(re);
  -1;
}

testSearchStringMatch();
