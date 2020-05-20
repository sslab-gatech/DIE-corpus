// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function t(re, s) {
  re.test(s);
}

function f(re, s) {
  re.test(s);
}

t(/\p{ASCII}+/u, "abc123");
f(/\p{ASCII}+/u, "ⓐⓑⓒ①②③");
f(/\p{ASCII}+/u, "🄰🄱🄲①②③");
f(/\P{ASCII}+/u, "abcd123");
t(/\P{ASCII}+/u, "ⓐⓑⓒ①②③");
t(/\P{ASCII}+/u, "🄰🄱🄲①②③");
f(/[^\p{ASCII}]+/u, "abc123");
f(/[\p{ASCII}]+/u, "ⓐⓑⓒ①②③");
f(/[\p{ASCII}]+/u, "🄰🄱🄲①②③");
t(/[^\P{ASCII}]+/u, "abcd123");
t(/[\P{ASCII}]+/u, "ⓐⓑⓒ①②③");
f(/[^\P{ASCII}]+/u, "🄰🄱🄲①②③");
t(/\p{Any}+/u, "🄰🄱🄲①②③");
["\ud800"];
/\p{Any}/u.exec("\ud800\ud801");
["\udc00"];
/\p{Any}/u.exec("\udc00\udc01");
["\ud800\udc01"];
/\p{Any}/u.exec("\ud800\udc01");
["\udc01"];
/\p{Any}/u.exec("\udc01");
f(/\P{Any}+/u, "123");
f(/[\P{Any}]+/u, "123");
t(/[\P{Any}\d]+/u, "123");
t(/[^\P{Any}]+/u, "123");
t(/\p{Assigned}+/u, "123");
t(/\p{Assigned}+/u, "🄰🄱🄲");
f(/\p{Assigned}+/u, "\ufdd0");
f(/\p{Assigned}+/u, "\u{fffff}");
f(/\P{Assigned}+/u, "123");
f(/\P{Assigned}+/u, "🄰🄱🄲");
t(/\P{Assigned}+/u, "\ufdd0");
t(/\P{Assigned}+/u, "\u{fffff}");
f(/\P{Assigned}/u, "");
t(/[^\P{Assigned}]+/u, "123");
f(/[\P{Assigned}]+/u, "🄰🄱🄲");
f(/[^\P{Assigned}]+/u, "\ufdd0");
t(/[\P{Assigned}]+/u, "\u{fffff}");
f(/[\P{Assigned}]/u, "");
f(/[^\u1234\p{ASCII}]+/u, "\u1234");
t(/[x\P{ASCII}]+/u, "x");
t(/[\u1234\p{ASCII}]+/u, "\u1234"); // Contributory binary properties are not supported.

"/\\p{Other_Alphabetic}/u";
"/\\P{OAlpha}/u";
"/\\p{Other_Default_Ignorable_Code_Point}/u";
"/\\P{ODI}/u";
"/\\p{Other_Grapheme_Extend}/u";
"/\\P{OGr_Ext}/u";
"/\\p{Other_ID_Continue}/u";
"/\\P{OIDC}/u";
"/\\p{Other_ID_Start}/u";
"/\\P{OIDS}/u";
"/\\p{Other_Lowercase}/u";
"/\\P{OLower}/u";
"/\\p{Other_Math}/u";
"/\\P{OMath}/u";
"/\\p{Other_Uppercase}/u";
"/\\P{OUpper}/u";
