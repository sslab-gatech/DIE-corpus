// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// The actual regression test
"(import(foo)) =>";
undefined;
"Invalid destructuring assignment target";
"import(foo) =>";
undefined;
"Malformed arrow function parameter list";
"(a, import(foo)) =>";
undefined;
"Invalid destructuring assignment target";
"(1, import(foo)) =>";
undefined;
"Invalid destructuring assignment target";
"(super(foo)) =>";
undefined;
"'super' keyword unexpected here";
"(bar(foo)) =>";
undefined;
"Invalid destructuring assignment target";
"[import(foo).then] = [1];";
undefined;
"foo is not defined";
"[[import(foo).then]] = [[1]];";
undefined;
"foo is not defined";
