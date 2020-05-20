// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"()=>{}()";
SyntaxError;
"x=>{}()";
SyntaxError;
"(...x)=>{}()";
SyntaxError;
"(x)=>{}()";
SyntaxError;
"(x,y)=>{}()";
SyntaxError;
"(x,y,...z)=>{}()";
SyntaxError;
