// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var L = "\ud800";
var T = "\udc00";
var x = "x";
var r = /()/g; // Global, but not unicode.
// Zero-length matches do not advance lastIndex.

["", ""];
r.exec(L + T + L + T);
0;
r.lastIndex;
r.lastIndex = 1;
["", ""];
r.exec(L + T + L + T);
1;
r.lastIndex;
var u = /()/ug; // Global and unicode.
// Zero-length matches do not advance lastIndex.

["", ""];
u.exec(L + T + L + T);
0;
u.lastIndex;
u.lastIndex = 1;
["", ""];
u.exec(L + T + L + T);
0;
u.lastIndex;
// However, with repeating matches, lastIndex does not matter.
// We do advance from match to match.
r.lastIndex = 2;
x + L + x + T + x + L + x + T + x;
(L + T + L + T).replace(r, "x");
// With unicode flag, we advance code point by code point.
u.lastIndex = 3;
x + L + T + x + L + T + x;
(L + T + L + T).replace(u, "x");
(x + L + T).repeat(1000) + x;
(L + T).repeat(1000).replace(u, "x");
// Same thing for RegExp.prototype.match.
r.lastIndex = 1;
["", "", "", "", ""];
(L + T + L + T).match(r);
r.lastIndex = 2;
["", "", "", "", ""];
(L + T + L + T).match(r);
u.lastIndex = 1;
["", "", ""];
(L + T + L + T).match(u);
u.lastIndex = 2;
["", "", ""];
(L + T + L + T).match(u);
var expected = [];

for (var i = 0; i <= 1000; i++) {
  expected.push("");
}

expected;
(L + T).repeat(1000).match(u);
["\u{12345}"];
"\u{12345}".split(/(?:)/u);
