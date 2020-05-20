//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  print(/A/.exec({}));
}

;

function test2() {
  print("".match({}));
}

;

function test2() {
  print("".indexOf({}));
}

;

function test3() {
  print("".match());
}

;

function test4() {
  print("a".match(/a/g));
}

;

function test5() {
  print("A".replace("C", {}));
}

;

function test6() {
  print("A".replace("C"));
}

;

function test7() {
  print("A".replace());
}

;

function test8() {
  "A".replace({}, "C");
}

;

function test9() {
  print("ABCDEF".replace({}, "DEF"));
}

;

function test10() {
  print('fafafa'.replace({}, "X"));
}

;

function test11() {
  var a = {};
  print("Aundefined".replace(a.x, Array.isArray));
}

;

function test12() {
  print("Aundefined".replace("undefined", function (a) {
    return a == "Aundefined";
  }));
}

;

function test13() {
  var o = {};
  print(/A/.exec(o.x));
}

;

function test14() {
  var strvar7 = 'a';
  print(strvar7.replace(1, 1).replace(1, 1));
}

;

function test15() {
  var o = {};
  print("".match(o.x));
}

;

function test16() {
  try {
    print(String.prototype.match.call(null, o));
  } catch (ex) {
    print('expected : ' + ex.message);
  }
}

;

function test17() {
  try {
    print(String.prototype.match.apply(Array.a, "a"));
  } catch (ex) {
    print('expected : ' + ex.message);
  }
}

;

function test18() {
  try {
    print(String.prototype.match.call("a"));
  } catch (ex) {
    print('expected : ' + ex.message);
  }
}

;

function test19() {
  try {
    var o = {};
    print(String.prototype.replace.call(null, o));
  } catch (ex) {
    print('expected : ' + ex.message);
  }
}

;

function test20() {
  try {
    print(String.prototype.replace.call(Array.a, "a"));
  } catch (ex) {
    print('expected : ' + ex.message);
  }
}

;

function test21() {
  print(String.prototype.replace.call("a", String.foo));
}

;

function test22() {
  try {
    var o = {};
    print(RegExp.prototype.exec.call(null, o.x));
  } catch (ex) {
    print('expected : ' + ex.message);
  }
}

;

function test23() {
  try {
    print(RegExp.prototype.exec.apply(Array.a, "a"));
  } catch (ex) {
    print('expected : ' + ex.message);
  }
}

;

function test24() {
  try {
    print(RegExp.prototype.exec.call("a"));
  } catch (ex) {
    print('expected : ' + ex.message);
  }
}

;
test1();
test1();
test2();
test2();
test3();
test3();
test4();
test4();
test5();
test5();
test6();
test6();
test7();
test7();
test8();
test8();
test9();
test9();
test10();
test10();
test11();
test11();
test12();
test12();
test13();
test13();
test14();
test14();
test15();
test15();
test16();
test16();
test17();
test17();
test18();
test18();
test19();
test19();
test20();
test20();
test21();
test21();
test22();
test22();
test23();
test23();
test24();
test24();

String.prototype.match = function (x) {
  print(x instanceof RegExp);
  return [];
};

test2();

String.prototype.replace = function (x) {
  print(x instanceof Object);
  return [];
};

test9();
