console.log("This test checks that toLowerCase and toUpperCase handle certain non-trivial cases correctly.");
String("A𐐀").toLowerCase();
String("a𐐨").toUpperCase();
String("ΚΟΣΜΟΣ ΚΟΣΜΟΣ").toLowerCase();
String("ß").toUpperCase();
String("ŉ").toUpperCase();
String("ǰ").toUpperCase();
String("ﬃ").toUpperCase();
String("FFI").toLowerCase();
String("Ĳ").toLowerCase(); // Test the toUpper and toLower changes made in Unicode versions 5.2 and 6.1
// Construct the tests so that it passes if the toLowerCase()/toUpperCase()
// either return the updated results for compliant platforms or the
// passed in arguments if not.  This should be changed when all platforms
// support Unicode 5.2 and Unicode 6.1.

function createExpected()
/* ... */
{
  expected = {};

  for (var i = 0; i < arguments.length; i++) {
    var s = String.fromCharCode(arguments[i]);
    expected[s] = true;
  }

  return expected;
} // Check Unicode additions in version 5.2.  From UnicodeData.txt:
// 0265;LATIN SMALL LETTER TURNED H;Ll;0;L;;;;;N;;;A78D;;A78D
// A78D;LATIN CAPITAL LETTER TURNED H;Lu;0;L;;;;;N;;;;0265;


var expected = createExpected(0xA78D, 0x0265);
expected[String.fromCharCode(0xA78D).toLowerCase()];
expected[String.fromCharCode(0x0265).toUpperCase()]; // Check Unicode additions in version 6.1 From UnicodeData.txt:
// 0266;LATIN SMALL LETTER H WITH HOOK;Ll;0;L;;;;;N;LATIN SMALL LETTER H HOOK;;A7AA;;A7AA
// 10C7;GEORGIAN CAPITAL LETTER YN;Lu;0;L;;;;;N;;;;2D27;
// 10CD;GEORGIAN CAPITAL LETTER AEN;Lu;0;L;;;;;N;;;;2D2D;
// 2CF2;COPTIC CAPITAL LETTER BOHAIRIC KHEI;Lu;0;L;;;;;N;;;;2CF3;
// 2CF3;COPTIC SMALL LETTER BOHAIRIC KHEI;Ll;0;L;;;;;N;;;2CF2;;2CF2
// 2D27;GEORGIAN SMALL LETTER YN;Ll;0;L;;;;;N;;;10C7;;10C7
// 2D2D;GEORGIAN SMALL LETTER AEN;Ll;0;L;;;;;N;;;10CD;;10CD
// A792;LATIN CAPITAL LETTER C WITH BAR;Lu;0;L;;;;;N;;;;A793;
// A793;LATIN SMALL LETTER C WITH BAR;Ll;0;L;;;;;N;;;A792;;A792
// A7AA;LATIN CAPITAL LETTER H WITH HOOK;Lu;0;L;;;;;N;;;;0266;

var expected = createExpected(0x10C7, 0x2D27);
expected[String.fromCharCode(0x10C7).toLowerCase()];
expected[String.fromCharCode(0x2D27).toUpperCase()];
var expected = createExpected(0x10CD, 0x2D2D);
expected[String.fromCharCode(0x2D2D).toLowerCase()];
expected[String.fromCharCode(0x10CD).toUpperCase()];
var expected = createExpected(0x2CF2, 0x2CF3);
expected[String.fromCharCode(0x2CF2).toLowerCase()];
expected[String.fromCharCode(0x2CF3).toUpperCase()];
var expected = createExpected(0xA792, 0xA793);
expected[String.fromCharCode(0xA792).toLowerCase()];
expected[String.fromCharCode(0xA793).toUpperCase()];
var expected = createExpected(0xA7AA, 0x0266);
expected[String.fromCharCode(0xA7AA).toLowerCase()];
expected[String.fromCharCode(0x0266).toUpperCase()];
