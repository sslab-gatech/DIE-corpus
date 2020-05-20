//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var reWordChar = /\w/;
var reNonWordChar = /\W/;
var reWordCharI = /\w/i;
var reNonWordCharI = /\W/i;
var reWordCharU = /\w/u;
var reNonWordCharU = /\W/u;
var reWordCharIU = /\w/iu;
var reNonWordCharIU = /\W/iu;
var reWordCharName = "word-char";
var reNonWordCharName = "NON-word-char";
basic_tests = ['s', 'S', 'k', 'K'];
basic_tests_names = ['lowercase s', 'uppercase S', 'lowercase k', 'uppercase K'];
u_tests = ['\u017F', // Sharp S
'\u212A'];
u_tests_names = ['Sharp S', 'Kelvin sign'];

function assert(a, msg) {
  if (!a) {
    console.log("FAIL: " + msg);
  }
}

function assertMatch(regex, reName, string, name) {
  var b = regex.test(string);
  var msg = "" + regex + " " + reName + " should match '" + string + "' (" + name + ")";
  b;
  msg;
}

function assertNonMatch(regex, reName, string, name) {
  var b = !regex.test(string);
  var msg = "" + regex + " " + reName + " should not match '" + string + "' (" + name + ")";
  b;
  msg;
}

for (i in basic_tests) {
  reWordChar;
  reWordCharName;
  basic_tests[i];
  basic_tests_names[i];
  reWordCharI;
  reWordCharName;
  basic_tests[i];
  basic_tests_names[i];
  reWordCharU;
  reWordCharName;
  basic_tests[i];
  basic_tests_names[i];
  reWordCharIU;
  reWordCharName;
  basic_tests[i];
  basic_tests_names[i];
  reNonWordChar;
  reNonWordCharName;
  basic_tests[i];
  basic_tests_names[i];
  reNonWordCharI;
  reNonWordCharName;
  basic_tests[i];
  basic_tests_names[i];
  reNonWordCharU;
  reNonWordCharName;
  basic_tests[i];
  basic_tests_names[i];
  reNonWordCharIU;
  reNonWordCharName;
  basic_tests[i];
  basic_tests_names[i];
}

for (i in u_tests) {
  reWordChar;
  reWordCharName;
  u_tests[i];
  u_tests_names[i];
  reWordCharI;
  reWordCharName;
  u_tests[i];
  u_tests_names[i];
  reWordCharU;
  reWordCharName;
  u_tests[i];
  u_tests_names[i];
  reWordCharIU;
  reWordCharName;
  u_tests[i];
  u_tests_names[i];
  reNonWordChar;
  reWordCharName;
  u_tests[i];
  u_tests_names[i];
  reNonWordCharI;
  reNonWordCharName;
  u_tests[i];
  u_tests_names[i];
  reNonWordCharU;
  reWordCharName;
  u_tests[i];
  u_tests_names[i];
  reNonWordCharIU;
  reNonWordCharName;
  u_tests[i];
  u_tests_names[i];
}

console.log("PASS");
