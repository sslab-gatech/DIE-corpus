//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function bindFlagsGetter(thisArg) {
  var getter = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get;
  return getter.bind(thisArg);
}

var arr = [['global', 'g'], ['ignoreCase', 'i'], ['multiline', 'm'], ['sticky', 'y'], ['unicode', 'u'], ['dotAll', 's']];
arr.map(function ([propertyName, flag]) {
  var object = {};
  object[propertyName] = true;
  var flags = bindFlagsGetter(object)();
  console.log(flags.includes(flag));
});
arr.map(function ([propertyName, flag]) {
  var object = {};
  object[propertyName] = false;
  var flags = bindFlagsGetter(object)();
  console.log(flags.includes(flag));
});
arr.map(function ([propertyName, flag]) {
  var object = {};
  object[propertyName] = 123;
  var flags = bindFlagsGetter(object)();
  console.log(flags.includes(flag));
  object[propertyName] = null;
  var flags = bindFlagsGetter(object)();
  console.log(flags.includes(flag));
});

function t1() {
  console.log(undefined, RegExp.prototype.unicode);
  console.log(undefined, RegExp.prototype.sticky);
  console.log(undefined, RegExp.prototype.dotAll);

  function verifier(r, expectedUnicode, expectedSticky, expectedDotAll) {
    r.unicode = true; // no-op

    r.sticky = true; // no-op

    r.dotAll = true; // no-op

    console.log(expectedUnicode, r.unicode);
    console.log(expectedSticky, r.sticky);
    console.log(expectedDotAll, r.dotAll);
  }

  verifier(/.?\d+/, false, false, false);
  RegExp.prototype.unicode = true; // no-op

  verifier(/.?\d+/s, false, false, true);
  verifier(/.?\d+/gu, true, false, false);
  verifier(/.?\d+/gus, true, false, true);
  verifier(/.?\d+/iy, false, true, false);
  RegExp.prototype.sticky = true; // no-op

  RegExp.prototype.dotAll = true; // no-op

  console.log(undefined, RegExp.prototype.unicode);
  console.log(undefined, RegExp.prototype.sticky);
  console.log(undefined, RegExp.prototype.dotAll);
  verifier(new RegExp("a*bc", "g"), false, false, false);
  verifier(new RegExp("a*bc", "u"), true, false, false);
  verifier(new RegExp("a*bc?", "y"), false, true, false);
  verifier(new RegExp("a*bc?", "s"), false, false, true);
  verifier(new RegExp("a*b\d\s?", "iuys"), true, true, true);
}

t1();

function t2() {
  var pattern = /hello\d\s?/y;
  var text = "hello1 hello2 hello3";
  [["hello1 ", 7], ["hello2 ", 14], ["hello3", 20], [null, 0]].forEach(function ([expectedMatchedString, expectedLastIndex]) {
    var result = pattern.exec(text);

    if (expectedMatchedString !== null) {
      console.log(expectedMatchedString, result[0]);
    } else {
      console.log(null, result);
    }

    console.log(expectedLastIndex, pattern.lastIndex);
  });
}

t2();

function t3() {
  var pattern = /hello\d\s?/y;
  var text = "hello1 hello2 hello3";
  [[true, 7], [true, 14], [true, 20], [false, 0]].forEach(function ([expectedResult, expectedLastIndex]) {
    console.log(expectedResult, pattern.test(text));
    console.log(expectedLastIndex, pattern.lastIndex);
  });
}

t3();

function t4() {
  var pattern = /hello\d\s?/y;
  var text = "hello1 hello2 hello3";
  console.log(0, text.search(pattern));
  console.log(0, pattern.lastIndex);
}

t4();

function t5() {
  var pattern = /hello\d\s?/y;
  var text = "hello1 hello2 hello3"; // should replace 1st occurrence because global is false and last index should be at 7.

  console.log("world hello2 hello3", text.replace(pattern, "world "));
  console.log(7, pattern.lastIndex);
}

t5();

function t6() {
  var pattern = /hello\d\s?/g;
  var text = "hello1 hello2 hello3"; // should replace all occurrences because global is true and last index should be at 0.

  console.log("world world world ", text.replace(pattern, "world "));
  console.log(0, pattern.lastIndex);
}

t6();

function t7() {
  var pattern = /hello\d\s?/gy;
  var text = "hello1 hello2 hello3"; // should replace all occurrences because global is true irrespective of sticky bit and last index should be at 0.

  console.log("world world world ", text.replace(pattern, "world "));
  console.log(0, pattern.lastIndex);
}

t7();

function t8() {
  var pattern = /hello\d\s?/y;
  var text = "hello1 hello2 hello3"; // should match 1st occurrence because global is false and last index should be at 7.

  var result = text.match(pattern);
  console.log(1, result.length);
  console.log("hello1 ", result[0]);
  console.log(7, pattern.lastIndex);
}

t8();

function t9() {
  var pattern = /hello\d\s?/g;
  var text = "hello1 hello2 hello3"; // should match all occurrence because global is true and last index should be at 0.

  var result = text.match(pattern);
  console.log(3, result.length);
  console.log("hello1 ", result[0]);
  console.log("hello2 ", result[1]);
  console.log("hello3", result[2]);
  console.log(0, pattern.lastIndex);
}

t9();

function t10() {
  var pattern = /hello\d\s?/gy;
  var text = "hello1 hello2 hello3"; // should match all occurrence because global is true and last index should be at 0 irrespective of sticky bit flag.

  var result = text.match(pattern);
  console.log(3, result.length);
  console.log("hello1 ", result[0]);
  console.log("hello2 ", result[1]);
  console.log("hello3", result[2]);
  console.log(0, pattern.lastIndex);
}

t10();

function t11() {
  var pattern = /\d/y;
  var text = "hello1 hello2 hello3"; // sticky bit flag is ignored and lastIndex is set to 0.

  var result = text.split(pattern);
  console.log(4, result.length);
  console.log("hello", result[0]);
  console.log(" hello", result[1]);
  console.log(" hello", result[2]);
  console.log("", result[3]);
  console.log(0, pattern.lastIndex);
}

t11();

function t12() {
  var nonObject = "string";

  try {
    bindFlagsGetter(nonObject);
  } catch (e) {
    ;
  }
}

t12();

function t13() {
  bindFlagsGetter({});
}

t13();

function t14() {
  bindFlagsGetter({})();
}

t14();

function t15() {
  var object = {
    ignoreCase: true,
    unicode: true,
    sticky: true,
    multiline: true,
    dotAll: true,
    global: true
  };
  bindFlagsGetter(object)();
}

t15();
