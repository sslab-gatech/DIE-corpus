// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// test262/data/test/language/literals/regexp/u-dec-esc
"/\\1/u";
SyntaxError;
"/[\\w-a]/u";
SyntaxError;
"/[a-\\w]/u";
SyntaxError;
"/\\c/u";
SyntaxError;
"/\\c0/u";
SyntaxError;
"/(?=.)*/u";
SyntaxError;
"/(?=.){1,2}/u";
SyntaxError;
"/[\\1]/u";
SyntaxError;
"/\\00/u";
SyntaxError;
"/\\09/u";
SyntaxError;
"/[\\c]/u";
SyntaxError;
"/[\\c0]/u";
SyntaxError;
"/a{/u";
SyntaxError;
"/a{1,/u";
SyntaxError;
"/{/u";
SyntaxError;
"/}/u";
SyntaxError;
"/]/u";
SyntaxError;
// test262/built-ins/RegExp/unicode_identity_escape
/\//u; // escaped \0 is allowed inside a character class.

["\0"];
/[\0]/u.exec("\0");
"/[\\00]/u";
SyntaxError;
"/[\\01]/u";
SyntaxError;
"/[\\09]/u";
SyntaxError;
["\u{0}1\u{0}a\u{0}"];
/[1\0a]+/u.exec("b\u{0}1\u{0}a\u{0}2");
["-"];
/[a\-z]/u.exec("12-34");
