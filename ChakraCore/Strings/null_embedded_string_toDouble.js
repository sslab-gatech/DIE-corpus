//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  let arr_tests = [Number("\x00"), Number(" \x00"), -" \x00", +"\x00", +"  \n\x00"];
  arr_tests.forEach(function (num, index) {
    console.log("number", typeof num);
    console.log(Number.isNaN(num));
  });
}

t1();

function t2() {
  let arr_tests = [Number(""), Number(" "), +"", -"", +"  ", +"\t\n\r\v\f\xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff"];
  arr_tests.forEach(function (num, index) {
    console.log("number", typeof num);
    console.log(0, num);
  });
}

t2();
