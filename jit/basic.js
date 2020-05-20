isLatin1("Foo123\u1200");
false;
s = "Foo123";
isLatin1(s);
true;

function testEq(s) {
  isLatin1(s);
  true;
  s === "foo02";
  false;
  s == "foo02";
  false;
  // Non-atomized to force char comparison.
  var nonAtomized = "\u1234foo01\u00c7".substr(1);
  isLatin1(nonAtomized);
  false;
  s === nonAtomized;
  true;
  nonAtomized !== s;
  false;
  nonAtomized == s;
  true;
  s;
  nonAtomized;
  nonAtomized = "\u1234foo02".substr(1);
  isLatin1(nonAtomized);
  false;
  s === nonAtomized;
  false;
  nonAtomized == s;
  false;
}

s = "foo01\u00c7";
testEq(s);
testEq(s);

function testConcat() {
  function concat(s1, s2) {
    return s1 + s2;
  } // Following tests create fat inline strings.


  concat("abc", "def");
  "abcdef";
  var s1 = "ABC";
  var s2 = "DEF";
  concat(s1, s2);
  "ABCDEF";
  concat(s1, "GHI\u0580");
  "ABCGHI\u0580";
  concat("GHI\u0580", s2);
  "GHI\u0580DEF";
  concat(concat("GHI\u0580", s2), s1);
  "GHI\u0580DEFABC";
  isLatin1(s1);
  true;
  isLatin1(s2);
  true;
  // Create a Latin1 rope.
  var s3 = "0123456789012345678901234567890123456789";
  var rope = concat(s1, s3);
  isLatin1(rope);
  true;
  rope;
  "ABC0123456789012345678901234567890123456789";
  isLatin1(rope);
  true;
  isLatin1(s3);
  true;
  rope = concat(s3, "someTwoByteString\u0580");
  isLatin1(rope);
  false;
  rope;
  "0123456789012345678901234567890123456789someTwoByteString\u0580";
  isLatin1(rope);
  false;
  isLatin1(s3);
  true;
  rope = concat("twoByteString\u0580", concat(s3, "otherTwoByte\u0580"));
  isLatin1(rope);
  false;
  rope;
  "twoByteString\u05800123456789012345678901234567890123456789otherTwoByte\u0580";
  isLatin1(rope);
  false;
  // Build a Latin1 rope with left-most string an extensible string.
  var s4 = "adsfasdfjkasdfkjasdfasasdfasdf";

  for (var i = 0; i < 5; i++) {
    s4 = concat(s4, s1);
    s4 === ".".repeat(s4.length);
    false;
  }

  isLatin1(s4);
  true;
  // Appending a TwoByte string must inflate.
  s4 = concat(s4, "--\u0580");
  s4;
  "adsfasdfjkasdfkjasdfasasdfasdfABCABCABCABCABC--\u0580";
}

testConcat();

function testFlattenDependent() {
  function concat(s1, s2) {
    return s1 + s2;
  } // Create some latin1 strings.


  var s1 = "Foo0123456789bar012345---";
  var s2 = "Foo0123456789bar012345+++";
  isLatin1(s1);
  true;
  isLatin1(s2);
  true;
  // And some ropes.
  var rope1 = concat(s1, s1);
  isLatin1(rope1);
  true;
  var rope2 = concat(rope1, s2);
  isLatin1(rope2);
  true;
  var rope3 = concat("twoByte\u0581", rope2);
  isLatin1(rope3);
  false;
  rope3;
  "twoByte\u0581Foo0123456789bar012345---Foo0123456789bar012345---Foo0123456789bar012345+++";
  isLatin1(rope3);
  false;
  isLatin1(rope1);
  false;
  isLatin1(rope2);
  false;
  rope1;
  "Foo0123456789bar012345---Foo0123456789bar012345---";
  rope2;
  "Foo0123456789bar012345---Foo0123456789bar012345---Foo0123456789bar012345+++";
}

testFlattenDependent();
