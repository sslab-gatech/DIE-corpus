// Copyright 2011 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"/[\\p]/u";
"/[\\p{garbage}]/u";
"/[\\p{}]/u";
"/[\\p{]/u";
"/[\\p}]/u";
"/^[\\p{Lu}-\\p{Ll}]+$/u";
/^[\p{Lu}\p{Ll}]+$/u.test("ABCabc");
/^[\p{Lu}-]+$/u.test("ABC-");
/^[\P{Lu}\p{Ll}]+$/u.test("ABCabc");
/^[\P{Lu}\p{Ll}]+$/u.test("abc");
/^[\P{Lu}]+$/u.test("abc123");
/^[\P{Lu}]+$/u.test("XYZ");
/[\p{Math}]/u.test("+");
/[\P{Bidi_M}]/u.test(" ");
/[\p{Hex}]/u.test("A");
/^[^\P{Lu}]+$/u.test("XYZ");
/^[^\p{Lu}\p{Ll}]+$/u.test("abc");
/^[^\p{Lu}\p{Ll}]+$/u.test("ABC");
/^[^\p{Lu}\p{Ll}]+$/u.test("123");
/^[^\p{Lu}\P{Ll}]+$/u.test("abc");
