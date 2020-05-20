// Copyright 2019 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Parameters can't have parentheses (both patterns and identifiers)
"( ({x: 1}) ) => {};";
SyntaxError;
"( (x) ) => {}";
SyntaxError;
"( ({x: 1}) = y ) => {}";
SyntaxError;
"( (x) = y ) => {}";
SyntaxError;
"let [({x: 1})] = [];";
SyntaxError;
"let [(x)] = [];";
SyntaxError;
"let [({x: 1}) = y] = [];";
SyntaxError;
"let [(x) = y] = [];";
SyntaxError;
"var [({x: 1})] = [];";
SyntaxError;
"var [(x)] = [];";
SyntaxError;
"var [({x: 1}) = y] = [];";
SyntaxError;
"var [(x) = y] = [];";
SyntaxError;
"[({x: 1}) = y] = [];";
SyntaxError;
// Parentheses are fine around identifiers in assignments though, even inside a
// pattern
var x;
[x] = [2];
x;
2;
[x = 3] = [];
x;
3;
