// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// ES6 extends the \uxxxx escape and also allows \u{xxxxx}.
function testRegexpHelper(r) {
  r.test("foo");
  r.test("boo");
  r.test("moo");
}

(function TestUnicodeEscapes() {
  testRegexpHelper(/(\u0066|\u0062)oo/);
  testRegexpHelper(/(\u0066|\u0062)oo/u);
  testRegexpHelper(/(\u{0066}|\u{0062})oo/u);
  testRegexpHelper(/(\u{66}|\u{000062})oo/u); // Note that we need \\ inside a string, otherwise it's interpreted as a
  // unicode escape inside a string.

  testRegexpHelper(new RegExp("(\\u0066|\\u0062)oo"));
  testRegexpHelper(new RegExp("(\\u0066|\\u0062)oo", "u"));
  testRegexpHelper(new RegExp("(\\u{0066}|\\u{0062})oo", "u"));
  testRegexpHelper(new RegExp("(\\u{66}|\\u{000062})oo", "u")); // Though, unicode escapes via strings should work too.

  testRegexpHelper(new RegExp("(\u0066|\u0062)oo"));
  testRegexpHelper(new RegExp("(\u0066|\u0062)oo", "u"));
  testRegexpHelper(new RegExp("(\u{0066}|\u{0062})oo", "u"));
  testRegexpHelper(new RegExp("(\u{66}|\u{000062})oo", "u"));
})();

(function TestUnicodeEscapesInCharacterClasses() {
  testRegexpHelper(/[\u0062-\u0066]oo/);
  testRegexpHelper(/[\u0062-\u0066]oo/u);
  testRegexpHelper(/[\u{0062}-\u{0066}]oo/u);
  testRegexpHelper(/[\u{62}-\u{00000066}]oo/u); // Note that we need \\ inside a string, otherwise it's interpreted as a
  // unicode escape inside a string.

  testRegexpHelper(new RegExp("[\\u0062-\\u0066]oo"));
  testRegexpHelper(new RegExp("[\\u0062-\\u0066]oo", "u"));
  testRegexpHelper(new RegExp("[\\u{0062}-\\u{0066}]oo", "u"));
  testRegexpHelper(new RegExp("[\\u{62}-\\u{00000066}]oo", "u")); // Though, unicode escapes via strings should work too.

  testRegexpHelper(new RegExp("[\u0062-\u0066]oo"));
  testRegexpHelper(new RegExp("[\u0062-\u0066]oo", "u"));
  testRegexpHelper(new RegExp("[\u{0062}-\u{0066}]oo", "u"));
  testRegexpHelper(new RegExp("[\u{62}-\u{00000066}]oo", "u"));
})();

(function TestBraceEscapesWithoutUnicodeFlag() {
  // \u followed by illegal escape will be parsed as u. {x} will be the
  // character count.
  function helper1(r) {
    r.test("fbar");
    r.test("fubar");
    r.test("fuubar");
    r.test("fuuubar");
  }

  helper1(/f\u{2}bar/);
  helper1(new RegExp("f\\u{2}bar"));

  function helper2(r) {
    r.test("fbar");
    r.test("fubar");
    r.test("fuubar");
    r.test("fuuubar");
  }

  helper2(/f\u{1,2}bar/);
  helper2(new RegExp("f\\u{1,2}bar"));

  function helper3(r) {
    r.test("u");
    r.test("{");
    r.test("2");
    r.test("}");
    r.test("q");
    r.test("(");
    r.test(")");
  }

  helper3(/[\u{2}]/);
  helper3(new RegExp("[\\u{2}]"));
})();

(function TestInvalidEscapes() {
  // Without the u flag, invalid unicode escapes and other invalid escapes are
  // treated as identity escapes.
  function helper1(r) {
    r.test("firstuxz89second");
  }

  helper1(/first\u\x\z\8\9second/);
  helper1(new RegExp("first\\u\\x\\z\\8\\9second"));

  function helper2(r) {
    r.test("u");
    r.test("x");
    r.test("z");
    r.test("8");
    r.test("9");
    r.test("q");
    r.test("7");
  }

  helper2(/[\u\x\z\8\9]/);
  helper2(new RegExp("[\\u\\x\\z\\8\\9]")); // However, with the u flag, these are treated as invalid escapes.

  "/\\u/u";
  SyntaxError;
  "/\\u12/u";
  SyntaxError;
  "/\\ufoo/u";
  SyntaxError;
  "/\\x/u";
  SyntaxError;
  "/\\xfoo/u";
  SyntaxError;
  "/\\z/u";
  SyntaxError;
  "/\\8/u";
  SyntaxError;
  "/\\9/u";
  SyntaxError;
  "new RegExp('\\\\u', 'u')";
  SyntaxError;
  "new RegExp('\\\\u12', 'u')";
  SyntaxError;
  "new RegExp('\\\\ufoo', 'u')";
  SyntaxError;
  "new RegExp('\\\\x', 'u')";
  SyntaxError;
  "new RegExp('\\\\xfoo', 'u')";
  SyntaxError;
  "new RegExp('\\\\z', 'u')";
  SyntaxError;
  "new RegExp('\\\\8', 'u')";
  SyntaxError;
  "new RegExp('\\\\9', 'u')";
  SyntaxError;
})();

(function TestTooBigHexEscape() {
  // The hex number inside \u{} has a maximum value.
  /\u{10ffff}/u;
  new RegExp("\\u{10ffff}", "u");
  "/\\u{110000}/u";
  SyntaxError;
  "new RegExp('\\\\u{110000}', 'u')";
  SyntaxError;
  // Without the u flag, they're of course fine ({x} is the count).
  /\u{110000}/;
  new RegExp("\\u{110000}");
})();

(function TestSyntaxEscapes() {
  // Syntax escapes work the same with or without the u flag.
  function helper(r) {
    r.test("foo[bar");
    r.test("foo]bar");
  }

  helper(/foo\[bar/);
  helper(new RegExp("foo\\[bar"));
  helper(/foo\[bar/u);
  helper(new RegExp("foo\\[bar", "u"));
})();

(function TestUnicodeSurrogates() {
  // U+10E6D corresponds to the surrogate pair [U+D803, U+DE6D].
  function helper(r) {
    r.test("foo\u{10e6d}bar");
  }

  helper(/foo\ud803\ude6dbar/u);
  helper(new RegExp("foo\\ud803\\ude6dbar", "u"));
})();

(function AllFlags() {
  // Test that we can pass all possible regexp flags and they work properly.
  function helper1(r) {
    r.global;
    r.ignoreCase;
    r.multiline;
    r.sticky;
    r.unicode;
  }

  helper1(/foo/gimyu);
  helper1(new RegExp("foo", "gimyu"));

  function helper2(r) {
    r.global;
    r.ignoreCase;
    r.multiline;
    r.sticky;
    r.unicode;
  }

  helper2(/foo/);
  helper2(new RegExp("foo"));
})();

(function DuplicatedFlags() {
  // Test that duplicating the u flag is not allowed.
  "/foo/ugu";
  "new RegExp('foo', 'ugu')";
})();

(function ToString() {
  // Test that the u flag is included in the string representation of regexps.
  function helper(r) {
    r.toString();
    "/foo/u";
  }

  helper(/foo/u);
  helper(new RegExp("foo", "u"));
})(); // Non-BMP patterns.
// Single character atom.


new RegExp("\u{12345}", "u").test("\u{12345}");
/\u{12345}/u.test("\u{12345}");
new RegExp("\u{12345}", "u").test("\ud808\udf45");
/\u{12345}/u.test("\ud808\udf45");
new RegExp("\u{12345}", "u").test("\udf45");
/\u{12345}/u.test("\udf45");
new RegExp("\u{12345}\u{23456}", "u").test("a\u{12345}\u{23456}b");
/\u{12345}\u{23456}/u.test("b\u{12345}\u{23456}c");
new RegExp("\u{12345}\u{23456}", "u").test("a\udf45\u{23456}b");
/\u{12345}\u{23456}/u.test("b\udf45\u{23456}c");
new RegExp("\u{12345}(?:\u{23456})", "u").test("a\u{12345}\u{23456}b");
/\u{12345}(?:\u{23456})/u.test("b\u{12345}\u{23456}c");
new RegExp("\u{12345}(?:\u{23456})", "u").test("a\udf45\u{23456}b");
/\u{12345}(?:\u{23456})/u.test("b\udf45\u{23456}c");
new RegExp("\u{12345}|\u{23456}", "u").test("a\u{12345}b");
/\u{12345}|\u{23456}/u.test("b\u{23456}c");
new RegExp("\u{12345}|\u{23456}", "u").test("a\udf45\ud84db");
/\u{12345}|\u{23456}/u.test("b\udf45\ud808c");
new RegExp("(\u{12345}|\u{23456}).\\1", "u").test("\u{12345}b\u{12345}");
/(\u{12345}|\u{23456}).\1/u.test("\u{12345}b\u{12345}");
new RegExp("(\u{12345}|\u{23456}).\\1", "u").test("\u{12345}b\u{23456}");
/(\u{12345}|\u{23456}).\1/u.test("\u{12345}b\u{23456}");
new RegExp("\u{12345}{3}", "u").test("\u{12345}\u{12345}\u{12345}");
/\u{12345}{3}/u.test("\u{12345}\u{12345}\u{12345}");
new RegExp("\u{12345}{3}").test("\u{12345}\udf45\udf45");
/\ud808\udf45{3}/u.test("\u{12345}\udf45\udf45");
/\ud808\udf45{3}/u.test("\u{12345}\u{12345}\u{12345}");
new RegExp("\u{12345}{3}", "u").test("\u{12345}\udf45\udf45");
/\u{12345}{3}/u.test("\u{12345}\udf45\udf45");
["\u{10000}\u{10000}"];
new RegExp("\ud800\udc00+", "u").exec("\u{10000}\u{10000}");
["\u{10000}\u{10000}"];
new RegExp("\\ud800\\udc00+", "u").exec("\u{10000}\u{10000}");
["\u{10003}\u{50001}"];
new RegExp("[\\ud800\\udc03-\\ud900\\udc01\]+", "u").exec("\u{10003}\u{50001}");
["\u{10003}\u{50001}"];
new RegExp("[\ud800\udc03-\u{50001}\]+", "u").exec("\u{10003}\u{50001}");

(() => new RegExp("[\\ud800\udc03-\ud900\\udc01\]+", "u"))();

(() => new RegExp("[\\ud800\udc03-\ud900\\udc01\]+", "u"))();

new RegExp("\\ud800\udc00+", "u").exec("\u{10000}\u{10000}");
new RegExp("\ud800\\udc00+", "u").exec("\u{10000}\u{10000}");
new RegExp("[\\ud800\udc00]", "u").exec("\u{10000}");
new RegExp("[\\{ud800}\udc00]", "u").exec("\u{10000}");
new RegExp("[\ud800\\udc00]", "u").exec("\u{10000}");
new RegExp("[\ud800\\{udc00}]", "u").exec("\u{10000}");
/\u{d800}\u{dc00}+/u.exec("\ud800\udc00\udc00");
/\ud800\u{dc00}+/u.exec("\ud800\udc00\udc00");
/\u{d800}\udc00+/u.exec("\ud800\udc00\udc00");
