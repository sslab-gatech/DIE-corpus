// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Non-unicode use toUpperCase mappings.
/[\u00e5]/i.test("\u212b");
/[\u212b]/i.test("\u00e5\u1234");
/[\u212b]/i.test("\u00e5");
"\u212b".toLowerCase() == "\u00e5";
"\u00c5".toLowerCase() == "\u00e5";
"\u00e5".toUpperCase() == "\u00c5";
/\u00e5/ui.test("\u212b");
/\u00e5/ui.test("\u00c5");
/\u00e5/ui.test("\u00e5");
/\u00e5/ui.test("\u212b");
/\u00c5/ui.test("\u00e5");
/\u00c5/ui.test("\u212b");
/\u00c5/ui.test("\u00c5");
/\u212b/ui.test("\u00c5");
/\u212b/ui.test("\u00e5");
/\u212b/ui.test("\u212b");
/\u{10400}/i.test("\u{10428}");
/\u{10400}/ui.test("\u{10428}");
/\ud801\udc00/ui.test("\u{10428}");
/[\u{10428}]/ui.test("\u{10400}");
/[\ud801\udc28]/ui.test("\u{10400}");
["\uff21\u{10400}"];
/[\uff40-\u{10428}]+/ui.exec("\uff21\u{10400}abc");
["abc"];
/[^\uff40-\u{10428}]+/ui.exec("\uff21\u{10400}abc\uff23");
["\uff53\u24bb"];
/[\u24d5-\uff33]+/ui.exec("\uff54\uff53\u24bb\u24ba");
/\u00df/ui.test("SS");
/\u1f8d/ui.test("\u1f05\u03b9");
/\u1f8d/ui.test("\u1f85");
/\u1f6b/ui.test("\u1f63");
["\u00e5\u212b\u00c5", "\u00e5"];
/(.)\1\1/ui.exec("\u00e5\u212b\u00c5");
["\u{118aa}\u{118ca}", "\u{118aa}"];
/(.)\1/ui.exec("\u{118aa}\u{118ca}");
/\u00e5\u00e5\u00e5/ui.test("\u212b\u00e5\u00c5");
/AB\u{10400}/ui.test("ab\u{10428}");
["s"];
/^\u017F/ui.exec("s");
["s"];
/^\u017F/ui.exec("s\u1234");
["as"];
/^a[\u017F]/ui.exec("as");
["as"];
/^a[\u017F]/ui.exec("as\u1234");
