//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Date.parse must be able to parse the strings returned by Date.toString() for negative and zero-padded
// years. See https://github.com/Microsoft/ChakraCore/pull/4318
// This test is disabled on xplat because the time zone for negative years on xplat is different from
// time zone on Windows.
function testDate(isoDateString) {
  let Dateobj = new Date(isoDateString);
  let value = Dateobj.valueOf();
  let str = Dateobj.toString();
  console.log(value === Date.parse(str));
}

function test1() {
  testDate("0001-10-13T05:16:33Z");
  testDate("0011-10-13T05:16:33Z");
  testDate("0111-10-13T05:16:33Z");
  testDate("1111-10-13T05:16:33Z"); // test BC years

  testDate("-000001-11-13T19:40:33Z");
  testDate("-000011-11-13T19:40:33Z");
  testDate("-000111-11-13T19:40:33Z");
  testDate("-001111-11-13T19:40:33Z");
}

test1();
