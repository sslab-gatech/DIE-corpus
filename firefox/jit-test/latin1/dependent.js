function testSubstrLatin1() {
  var s1 = "abcdefghijklmnopqrstuvwxyz12345678900000a"; // Static strings.

  s1.substr(s1.length - 1);
  "a";
  s1.substr(s1.length - 2);
  "0a";
  s1.substr(26, 3);
  "123";
  // (Fat) inline strings.
  var s2 = s1.substr(3, 5);
  isLatin1(s2);
  true;
  s2;
  "defgh";
  s2 = s1.substr(0, 20);
  isLatin1(s2);
  true;
  s2;
  "abcdefghijklmnopqrst";
  // Dependent string.
  s2 = s1.substr(1, s1.length - 2);
  isLatin1(s2);
  true;
  s2.length;
  39;
  s2;
  "bcdefghijklmnopqrstuvwxyz12345678900000";
  s2 = s2.substr(2).substr(1);
  isLatin1(s2);
  true;
  s2;
  "efghijklmnopqrstuvwxyz12345678900000";
}

testSubstrLatin1();

function testSubstrTwoByte() {
  // Two byte string.
  var s1 = "abcdefghijklmnopqrstuvwxyz12345678900000a\u1480";
  isLatin1(s1);
  false;
  // Static string.
  var s2 = s1.substr(28, 1);
  s2;
  "3";
  // Inline string.
  s2 = s1.substr(3, 5);
  s2;
  "defgh";
  // Dependent string.
  s2 = s1.substr(2);
  isLatin1(s2);
  false;
  s2;
  "cdefghijklmnopqrstuvwxyz12345678900000a\u1480";
  s2 = s2.substr(2).substr(1);
  isLatin1(s2);
  false;
  s2;
  "fghijklmnopqrstuvwxyz12345678900000a\u1480";
}

testSubstrTwoByte();

function testSubstring() {
  var s1 = "abcdefghijklmnopqrstuvwxyz123456789000ab";
  var s2 = s1.substring(1, 8);
  isLatin1(s2);
  true;
  s2;
  "bcdefgh";
  s2 = s1.substring(0, s1.length - 1);
  isLatin1(s2);
  true;
  s2;
  "abcdefghijklmnopqrstuvwxyz123456789000a";
}

testSubstring();

function testSlice() {
  var s1 = "abcdefghijklmnopqrstuvwxyz123456789000ABC";
  var s2 = s1.slice(1, 8);
  isLatin1(s2);
  true;
  s2;
  "bcdefgh";
  s2 = s1.slice(0, -2);
  isLatin1(s2);
  true;
  s2;
  "abcdefghijklmnopqrstuvwxyz123456789000A";
}

testSlice();

function testUndepend() {
  // Latin1
  var s = "abcdefg".repeat(7);
  s.indexOf("def"); // flatten

  isLatin1(s);
  true;
  var dep = s.substr(7);
  var res = dep.replace(/abcdef/g, ""); // StrReplaceRegexpRemove undepends.

  res;
  "gggggg";
  // TwoByte
  var s = "abcdefg\u1200".repeat(6);
  s.indexOf("def"); // flatten

  var dep = s.substr(8);
  var res = dep.replace(/abcdefg/g, ""); // StrReplaceRegexpRemove undepends.

  res;
  "\u1200\u1200\u1200\u1200\u1200";
}

testUndepend();
