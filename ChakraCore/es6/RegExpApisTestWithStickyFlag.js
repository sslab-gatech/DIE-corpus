//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function createMessage(message, prefix) {
  prefix = prefix != undefined ? prefix + ": " : "";
  return prefix + message;
}

function assertSplit(re, messagePrefix) {
  var str = "a,ab,ba,b,";
  var result = str.split(re);
  console.log(3, result.length);
  console.log("", result[0]);
  console.log("ab,b", result[1]);
  console.log("b,", result[2]);
  console.log(0, re.lastIndex);
}

function assertSplitWithSingleCharacterPattern(re, messagePrefix) {
  var str = "abaca";
  var result = str.split(re);
  console.log(4, result.length);
  console.log("", result[0]);
  console.log("b", result[1]);
  console.log("c", result[2]);
  console.log("", result[3]);
  console.log(0, re.lastIndex);
}

function createReplaceValue(replaceValueType) {
  return replaceValueType === "string" ? "1" : function () {
    return "1";
  };
}

function t1() {
  var str = "abcababc";
  var re = /abc/y;
  console.log(re.test(str));
  console.log(re.lastIndex == 3);
  console.log(re.test(str));
  console.log(re.lastIndex == 0);
  console.log(re.test(str));
  console.log(re.lastIndex == 3);
}

t1();

function t2() {
  var str = "abcababc";
  var re = /abc/y;
  console.log(re.exec(str) == "abc");
  console.log(re.lastIndex == 3);
  console.log(re.exec(str) == null);
  console.log(re.lastIndex == 0);
}

t2();

function t3() {
  var str = "abcababc";
  var re = /abc/y;
  console.log(str.match(re) == "abc");
  console.log(re.lastIndex == 3);
  console.log(str.match(re) == null);
  console.log(re.lastIndex == 0);
}

t3();

function t4() {
  var str = "abcabcababc";
  var re = /abc/y;
  re.lastIndex = 3;
  console.log(str.match(re) == "abc");
  console.log(re.lastIndex == 6);
  console.log(str.match(re) == null);
  console.log(re.lastIndex == 0);
}

t4();

function t5() {
  var str = "ababcabc";
  var re = /abc/y;
  console.log(str.search(re) == -1);
  console.log(re.lastIndex == 0);
  console.log(str.search(re) == -1);
  console.log(re.lastIndex == 0);
}

t5();

function t6() {
  function assertReplace(replaceValueType) {
    var str = "abcabcababc";
    var re = /abc/y;
    var replaceValue = createReplaceValue(replaceValueType);
    console.log(str.replace(re, replaceValue) == "1abcababc");
    console.log(re.lastIndex == 3);
    console.log(str.replace(re, replaceValue) == "abc1ababc");
    console.log(re.lastIndex == 6);
    console.log(str.replace(re, replaceValue) == "abcabcababc");
    console.log(re.lastIndex == 0);
  }

  ["string", "function"].forEach(assertReplace);
}

t6();

function t7() {
  function assertReplace(replaceValueType) {
    var str = "abcabcababc";
    var re = /abc/y;
    re.lastIndex = 4;
    var replaceValue = createReplaceValue(replaceValueType);
    console.log(str.replace(re, replaceValue) == "abcabcababc");
    console.log(re.lastIndex == 0);
  }

  ["string", "function"].forEach(assertReplace);
}

t7();

function t8() {
  function assertReplace(replaceValueType) {
    var str = "abcabcababc";
    var re = /abc/gy;
    var replaceValue = createReplaceValue(replaceValueType);
    console.log(str.replace(re, replaceValue) == "11ababc");
    console.log(re.lastIndex == 0);
    console.log(str.replace(re, replaceValue) == "11ababc");
    console.log(re.lastIndex == 0);
  }

  ["string", "function"].forEach(assertReplace);
}

t8();

function t9() {
  function assertReplace(replaceValueType) {
    var str = "abcabcababc";
    var re = /abc/g;
    var replaceValue = createReplaceValue(replaceValueType);
    console.log(str.replace(re, replaceValue) == "11ab1");
    console.log(re.lastIndex == 0);
    console.log(str.replace(re, replaceValue) == "11ab1");
    console.log(re.lastIndex == 0);
  }

  ["string", "function"].forEach(assertReplace);
}

t9();

function t10() {
  function assertReplace(replaceValueType) {
    var str = "abc";
    var re = /a/y;
    var lastIndex = str.length;
    re.lastIndex = lastIndex;
    var replaceValue = createReplaceValue(replaceValueType);
    var result = str.replace(re, replaceValue);
    var messageBase = "Input length: " + str.length + ", lastIndex = " + lastIndex + ", replaceValue type = " + replaceValueType;
    var message = messageBase + ", result";
    console.log(str, result, message);
    var message = messageBase + ", lastIndex after replace()";
    console.log(0, re.lastIndex, message);
  }

  ["string", "function"].forEach(assertReplace);
}

t10();

function t11() {
  var re = /a,/y;
  re;
}

t11();

function t12() {
  var re = new RegExp("a,", "y");
  re;
  "Non-RegExp pattern";
  var re2 = new RegExp(re);
  re2;
  "RegExp pattern, 'flags' aren't present";
  var re3 = new RegExp(re, "y", "RegExp pattern, 'flags' are present");
  re3;
  var re4 = new RegExp("A,", "y");
  "asd".split(re);
  var re5 = new RegExp(re4, "i");
  re2;
  "Changed flags";
}

t12();

function t13() {
  var re = /./.compile("a,", "y");
  re;
  "Non-RegExp pattern";
  var re2 = /./.compile(re);
  re2;
  "RegExp pattern";
}

t13();

function t14() {
  var reCaseSensitive = /a/y;
  reCaseSensitive;
  "Case-sensitive";
  var reCaseInsensitive = /A/iy;
  reCaseInsensitive;
  "Case-insensitive";
}

t14();

function t15() {
  var str = "abac";
  var re = /(a[c]?)/y;
  var result = str.split(re); // If the actual result is "a", that means we propagated "re"s original pattern
  // as opposed to the separate one for split().

  console.log("ac", RegExp.$1);
}

t15();

function t16() {
  var re = /a,/y;
  re.lastIndex = 3;
  re;
}

t16();
