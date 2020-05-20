//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  const r1 = /(abc)/;
  const r2 = /(def)/;
  const s1 = "abc";
  const s2 = " def";
  r1.test(s1);
  console.log("abc", RegExp.input);
  console.log("abc", RegExp['$_']);
  console.log("abc", RegExp.lastMatch);
  console.log("abc", RegExp['$&']);
  console.log("abc", RegExp.$1);
  console.log(0, RegExp.index);
  r2.test(s2);
  console.log(" def", RegExp.input);
  console.log(" def", RegExp['$_']);
  console.log("def", RegExp.lastMatch);
  console.log("def", RegExp['$&']);
  console.log("def", RegExp.$1);
  console.log(1, RegExp.index);
  r1.test(s1);
  console.log("abc", RegExp.input);
  console.log("abc", RegExp['$_']);
  console.log("abc", RegExp.lastMatch);
  console.log("abc", RegExp['$&']);
  console.log("abc", RegExp.$1);
  console.log(0, RegExp.index);
}

t1();
