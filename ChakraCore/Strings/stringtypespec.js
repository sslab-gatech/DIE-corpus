//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test(s1, s2, s3, s4, s5, s6, s7, s8) {
  if (s1 == s2) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1 === s2) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1 != s2) {
    print("pass");
  } else {
    print("fail");
  }

  if (s1 !== s2) {
    print("pass");
  } else {
    print("fail");
  }

  if (s1 == s3) {
    print("pass");
  } else {
    print("fail");
  }

  if (s1 === s3) {
    print("pass");
  } else {
    print("fail");
  }

  if (s1 != s3) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1 !== s3) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1.charAt(0) == s4) {
    print("pass");
  } else {
    print("fail");
  }

  if (s1.charAt(0) === s4) {
    print("pass");
  } else {
    print("fail");
  }

  if (s1.charAt(0) != s4) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1.charAt(0) !== s4) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1.charAt(0) == s5) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1.charAt(0) === s5) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1.charAt(0) != s5) {
    print("pass");
  } else {
    print("fail");
  }

  if (s1.charAt(0) !== s5) {
    print("pass");
  } else {
    print("fail");
  }

  if (s1 == s6) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1 === s6) {
    print("fail");
  } else {
    print("pass");
  }

  if (s1 != s6) {
    print("pass");
  } else {
    print("fail");
  }

  if (s1 !== s6) {
    print("pass");
  } else {
    print("fail");
  }

  if (s7 == s1) {
    print("fail");
  } else {
    print("pass");
  }

  if (s7 === s1) {
    print("fail");
  } else {
    print("pass");
  }

  if (s7 != s1) {
    print("pass");
  } else {
    print("fail");
  }

  if (s7 !== s1) {
    print("pass");
  } else {
    print("fail");
  }

  if (s7 == s8) {
    print("pass");
  } else {
    print("fail");
  }

  if (s7 === s8) {
    print("pass");
  } else {
    print("fail");
  }

  if (s7 != s8) {
    print("fail");
  } else {
    print("pass");
  }

  if (s7 !== s8) {
    print("fail");
  } else {
    print("pass");
  }
}

var s1 = "This is a string";
var s2 = "This is another string";
var s3 = "This is a string";
var s4 = "T";
var s5 = "X";
var s6 = {};
var s7 = s1.slice(-1, 0);
var s8 = "";
test(s1, s2, s3, s4, s5, s6, s7, s8);
