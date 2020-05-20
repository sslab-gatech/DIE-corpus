//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var test = 1;

function fail(n, expected, result) {
  print("failure in test " + test + "; expected " + check + ", got " + result);
}

function test0() {
  var x;
  var y;
  var result;
  var check; // Test0

  print('begin test 0');

  for (var i = 0; i < 9; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test1


  print('begin test 1');

  for (var i = 0; i < 9; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test2


  print('begin test 2');

  for (var i = 0; i > -9; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test3


  print('begin test 3');

  for (var i = 0; i > -9; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test4


  print('begin test 4');

  for (var i = 0; i <= 9; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test1() {
  var x;
  var y;
  var result;
  var check; // Test5

  print('begin test 5');

  for (var i = 0; i <= 9; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test6


  print('begin test 6');

  for (var i = 0; i >= -9; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test7


  print('begin test 7');

  for (var i = 0; i >= -9; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test8


  print('begin test 8');

  for (var i = 0; i != 9; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test9


  print('begin test 9');

  for (var i = 0; i != 9; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test2() {
  var x;
  var y;
  var result;
  var check; // Test10

  print('begin test 10');

  for (var i = 0; i != -9; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test11


  print('begin test 11');

  for (var i = 0; i != -9; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test12


  print('begin test 12');

  for (var i = 0; i < 9; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test13


  print('begin test 13');

  for (var i = 0; i > -9; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test14


  print('begin test 14');

  for (var i = 0; i <= 9; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test3() {
  var x;
  var y;
  var result;
  var check; // Test15

  print('begin test 15');

  for (var i = 0; i >= -9; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test16


  print('begin test 16');

  for (var i = 0; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test17


  print('begin test 17');

  for (var i = 1; i < 10; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test18


  print('begin test 18');

  for (var i = 1; i < 10; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test19


  print('begin test 19');

  for (var i = 1; i > -8; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test4() {
  var x;
  var y;
  var result;
  var check; // Test20

  print('begin test 20');

  for (var i = 1; i > -8; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test21


  print('begin test 21');

  for (var i = 1; i <= 10; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test22


  print('begin test 22');

  for (var i = 1; i <= 10; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test23


  print('begin test 23');

  for (var i = 1; i >= -8; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test24


  print('begin test 24');

  for (var i = 1; i >= -8; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test5() {
  var x;
  var y;
  var result;
  var check; // Test25

  print('begin test 25');

  for (var i = 1; i != 10; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test26


  print('begin test 26');

  for (var i = 1; i != 10; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test27


  print('begin test 27');

  for (var i = 1; i != -8; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test28


  print('begin test 28');

  for (var i = 1; i != -8; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test29


  print('begin test 29');

  for (var i = 1; i < 10; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test6() {
  var x;
  var y;
  var result;
  var check; // Test30

  print('begin test 30');

  for (var i = 1; i > -8; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test31


  print('begin test 31');

  for (var i = 1; i <= 10; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test32


  print('begin test 32');

  for (var i = 1; i >= -8; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test33


  print('begin test 33');

  for (var i = 1; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test34


  print('begin test 34');

  for (var i = 1; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test7() {
  var x;
  var y;
  var result;
  var check; // Test35

  print('begin test 35');

  for (var i = 1; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test36


  print('begin test 36');

  for (var i = 1; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test37


  print('begin test 37');

  for (var i = 1; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test38


  print('begin test 38');

  for (var i = -1; i < 8; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test39


  print('begin test 39');

  for (var i = -1; i < 8; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test8() {
  var x;
  var y;
  var result;
  var check; // Test40

  print('begin test 40');

  for (var i = -1; i > -10; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test41


  print('begin test 41');

  for (var i = -1; i > -10; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test42


  print('begin test 42');

  for (var i = -1; i <= 8; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test43


  print('begin test 43');

  for (var i = -1; i <= 8; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test44


  print('begin test 44');

  for (var i = -1; i >= -10; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test9() {
  var x;
  var y;
  var result;
  var check; // Test45

  print('begin test 45');

  for (var i = -1; i >= -10; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test46


  print('begin test 46');

  for (var i = -1; i != 8; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test47


  print('begin test 47');

  for (var i = -1; i != 8; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test48


  print('begin test 48');

  for (var i = -1; i != -10; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test49


  print('begin test 49');

  for (var i = -1; i != -10; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test10() {
  var x;
  var y;
  var result;
  var check; // Test50

  print('begin test 50');

  for (var i = -1; i < 8; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test51


  print('begin test 51');

  for (var i = -1; i > -10; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test52


  print('begin test 52');

  for (var i = -1; i <= 8; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test53


  print('begin test 53');

  for (var i = -1; i >= -10; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test54


  print('begin test 54');

  for (var i = -1; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test11() {
  var x;
  var y;
  var result;
  var check; // Test55

  print('begin test 55');

  for (var i = 2; i < 11; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test56


  print('begin test 56');

  for (var i = 2; i < 11; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test57


  print('begin test 57');

  for (var i = 2; i > -7; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test58


  print('begin test 58');

  for (var i = 2; i > -7; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test59


  print('begin test 59');

  for (var i = 2; i <= 11; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test12() {
  var x;
  var y;
  var result;
  var check; // Test60

  print('begin test 60');

  for (var i = 2; i <= 11; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test61


  print('begin test 61');

  for (var i = 2; i >= -7; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test62


  print('begin test 62');

  for (var i = 2; i >= -7; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test63


  print('begin test 63');

  for (var i = 2; i != 11; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test64


  print('begin test 64');

  for (var i = 2; i != 11; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test13() {
  var x;
  var y;
  var result;
  var check; // Test65

  print('begin test 65');

  for (var i = 2; i != -7; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test66


  print('begin test 66');

  for (var i = 2; i != -7; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test67


  print('begin test 67');

  for (var i = 2; i < 11; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test68


  print('begin test 68');

  for (var i = 2; i > -7; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test69


  print('begin test 69');

  for (var i = 2; i <= 11; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test14() {
  var x;
  var y;
  var result;
  var check; // Test70

  print('begin test 70');

  for (var i = 2; i >= -7; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test71


  print('begin test 71');

  for (var i = 2; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test72


  print('begin test 72');

  for (var i = 2; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test73


  print('begin test 73');

  for (var i = 2; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test74


  print('begin test 74');

  for (var i = 2; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test15() {
  var x;
  var y;
  var result;
  var check; // Test75

  print('begin test 75');

  for (var i = 2; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test76


  print('begin test 76');

  for (var i = -2; i < 7; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test77


  print('begin test 77');

  for (var i = -2; i < 7; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test78


  print('begin test 78');

  for (var i = -2; i > -11; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test79


  print('begin test 79');

  for (var i = -2; i > -11; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test16() {
  var x;
  var y;
  var result;
  var check; // Test80

  print('begin test 80');

  for (var i = -2; i <= 7; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test81


  print('begin test 81');

  for (var i = -2; i <= 7; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test82


  print('begin test 82');

  for (var i = -2; i >= -11; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test83


  print('begin test 83');

  for (var i = -2; i >= -11; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test84


  print('begin test 84');

  for (var i = -2; i != 7; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test17() {
  var x;
  var y;
  var result;
  var check; // Test85

  print('begin test 85');

  for (var i = -2; i != 7; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test86


  print('begin test 86');

  for (var i = -2; i != -11; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test87


  print('begin test 87');

  for (var i = -2; i != -11; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test88


  print('begin test 88');

  for (var i = -2; i < 7; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test89


  print('begin test 89');

  for (var i = -2; i > -11; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test18() {
  var x;
  var y;
  var result;
  var check; // Test90

  print('begin test 90');

  for (var i = -2; i <= 7; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test91


  print('begin test 91');

  for (var i = -2; i >= -11; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test92


  print('begin test 92');

  for (var i = -2; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test93


  print('begin test 93');

  for (var i = 3; i < 12; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test94


  print('begin test 94');

  for (var i = 3; i < 12; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test19() {
  var x;
  var y;
  var result;
  var check; // Test95

  print('begin test 95');

  for (var i = 3; i > -6; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test96


  print('begin test 96');

  for (var i = 3; i > -6; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test97


  print('begin test 97');

  for (var i = 3; i <= 12; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test98


  print('begin test 98');

  for (var i = 3; i <= 12; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test99


  print('begin test 99');

  for (var i = 3; i >= -6; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test20() {
  var x;
  var y;
  var result;
  var check; // Test100

  print('begin test 100');

  for (var i = 3; i >= -6; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test101


  print('begin test 101');

  for (var i = 3; i != 12; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test102


  print('begin test 102');

  for (var i = 3; i != 12; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test103


  print('begin test 103');

  for (var i = 3; i != -6; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test104


  print('begin test 104');

  for (var i = 3; i != -6; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test21() {
  var x;
  var y;
  var result;
  var check; // Test105

  print('begin test 105');

  for (var i = 3; i < 12; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test106


  print('begin test 106');

  for (var i = 3; i > -6; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test107


  print('begin test 107');

  for (var i = 3; i <= 12; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test108


  print('begin test 108');

  for (var i = 3; i >= -6; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test109


  print('begin test 109');

  for (var i = 3; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test22() {
  var x;
  var y;
  var result;
  var check; // Test110

  print('begin test 110');

  for (var i = 3; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test111


  print('begin test 111');

  for (var i = 3; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test112


  print('begin test 112');

  for (var i = 3; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test113


  print('begin test 113');

  for (var i = 3; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test114


  print('begin test 114');

  for (var i = -3; i < 6; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test23() {
  var x;
  var y;
  var result;
  var check; // Test115

  print('begin test 115');

  for (var i = -3; i < 6; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test116


  print('begin test 116');

  for (var i = -3; i > -12; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test117


  print('begin test 117');

  for (var i = -3; i > -12; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test118


  print('begin test 118');

  for (var i = -3; i <= 6; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test119


  print('begin test 119');

  for (var i = -3; i <= 6; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test24() {
  var x;
  var y;
  var result;
  var check; // Test120

  print('begin test 120');

  for (var i = -3; i >= -12; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test121


  print('begin test 121');

  for (var i = -3; i >= -12; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test122


  print('begin test 122');

  for (var i = -3; i != 6; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test123


  print('begin test 123');

  for (var i = -3; i != 6; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test124


  print('begin test 124');

  for (var i = -3; i != -12; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test25() {
  var x;
  var y;
  var result;
  var check; // Test125

  print('begin test 125');

  for (var i = -3; i != -12; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test126


  print('begin test 126');

  for (var i = -3; i < 6; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test127


  print('begin test 127');

  for (var i = -3; i > -12; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test128


  print('begin test 128');

  for (var i = -3; i <= 6; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test129


  print('begin test 129');

  for (var i = -3; i >= -12; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test26() {
  var x;
  var y;
  var result;
  var check; // Test130

  print('begin test 130');

  for (var i = -3; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test131


  print('begin test 131');

  for (var i = 4; i < 13; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test132


  print('begin test 132');

  for (var i = 4; i < 13; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test133


  print('begin test 133');

  for (var i = 4; i > -5; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test134


  print('begin test 134');

  for (var i = 4; i > -5; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test27() {
  var x;
  var y;
  var result;
  var check; // Test135

  print('begin test 135');

  for (var i = 4; i <= 13; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test136


  print('begin test 136');

  for (var i = 4; i <= 13; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test137


  print('begin test 137');

  for (var i = 4; i >= -5; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test138


  print('begin test 138');

  for (var i = 4; i >= -5; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test139


  print('begin test 139');

  for (var i = 4; i != 13; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test28() {
  var x;
  var y;
  var result;
  var check; // Test140

  print('begin test 140');

  for (var i = 4; i != 13; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test141


  print('begin test 141');

  for (var i = 4; i != -5; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test142


  print('begin test 142');

  for (var i = 4; i != -5; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test143


  print('begin test 143');

  for (var i = 4; i < 13; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test144


  print('begin test 144');

  for (var i = 4; i > -5; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test29() {
  var x;
  var y;
  var result;
  var check; // Test145

  print('begin test 145');

  for (var i = 4; i <= 13; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test146


  print('begin test 146');

  for (var i = 4; i >= -5; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test147


  print('begin test 147');

  for (var i = 4; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test148


  print('begin test 148');

  for (var i = 4; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test149


  print('begin test 149');

  for (var i = 4; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test30() {
  var x;
  var y;
  var result;
  var check; // Test150

  print('begin test 150');

  for (var i = 4; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test151


  print('begin test 151');

  for (var i = 4; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test152


  print('begin test 152');

  for (var i = -4; i < 5; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test153


  print('begin test 153');

  for (var i = -4; i < 5; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test154


  print('begin test 154');

  for (var i = -4; i > -13; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test31() {
  var x;
  var y;
  var result;
  var check; // Test155

  print('begin test 155');

  for (var i = -4; i > -13; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test156


  print('begin test 156');

  for (var i = -4; i <= 5; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test157


  print('begin test 157');

  for (var i = -4; i <= 5; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test158


  print('begin test 158');

  for (var i = -4; i >= -13; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test159


  print('begin test 159');

  for (var i = -4; i >= -13; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test32() {
  var x;
  var y;
  var result;
  var check; // Test160

  print('begin test 160');

  for (var i = -4; i != 5; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test161


  print('begin test 161');

  for (var i = -4; i != 5; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test162


  print('begin test 162');

  for (var i = -4; i != -13; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test163


  print('begin test 163');

  for (var i = -4; i != -13; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test164


  print('begin test 164');

  for (var i = -4; i < 5; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test33() {
  var x;
  var y;
  var result;
  var check; // Test165

  print('begin test 165');

  for (var i = -4; i > -13; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test166


  print('begin test 166');

  for (var i = -4; i <= 5; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test167


  print('begin test 167');

  for (var i = -4; i >= -13; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test168


  print('begin test 168');

  for (var i = -4; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test169


  print('begin test 169');

  for (var i = 8; i < 17; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test34() {
  var x;
  var y;
  var result;
  var check; // Test170

  print('begin test 170');

  for (var i = 8; i < 17; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test171


  print('begin test 171');

  for (var i = 8; i > -1; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test172


  print('begin test 172');

  for (var i = 8; i > -1; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test173


  print('begin test 173');

  for (var i = 8; i <= 17; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test174


  print('begin test 174');

  for (var i = 8; i <= 17; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test35() {
  var x;
  var y;
  var result;
  var check; // Test175

  print('begin test 175');

  for (var i = 8; i >= -1; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test176


  print('begin test 176');

  for (var i = 8; i >= -1; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test177


  print('begin test 177');

  for (var i = 8; i != 17; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test178


  print('begin test 178');

  for (var i = 8; i != 17; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test179


  print('begin test 179');

  for (var i = 8; i != -1; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test36() {
  var x;
  var y;
  var result;
  var check; // Test180

  print('begin test 180');

  for (var i = 8; i != -1; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test181


  print('begin test 181');

  for (var i = 8; i < 17; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test182


  print('begin test 182');

  for (var i = 8; i > -1; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test183


  print('begin test 183');

  for (var i = 8; i <= 17; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test184


  print('begin test 184');

  for (var i = 8; i >= -1; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test37() {
  var x;
  var y;
  var result;
  var check; // Test185

  print('begin test 185');

  for (var i = 8; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test186


  print('begin test 186');

  for (var i = 8; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test187


  print('begin test 187');

  for (var i = 8; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test188


  print('begin test 188');

  for (var i = 8; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test189


  print('begin test 189');

  for (var i = 8; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test38() {
  var x;
  var y;
  var result;
  var check; // Test190

  print('begin test 190');

  for (var i = -8; i < 1; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test191


  print('begin test 191');

  for (var i = -8; i < 1; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test192


  print('begin test 192');

  for (var i = -8; i > -17; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test193


  print('begin test 193');

  for (var i = -8; i > -17; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test194


  print('begin test 194');

  for (var i = -8; i <= 1; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test39() {
  var x;
  var y;
  var result;
  var check; // Test195

  print('begin test 195');

  for (var i = -8; i <= 1; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test196


  print('begin test 196');

  for (var i = -8; i >= -17; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test197


  print('begin test 197');

  for (var i = -8; i >= -17; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test198


  print('begin test 198');

  for (var i = -8; i != 1; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test199


  print('begin test 199');

  for (var i = -8; i != 1; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test40() {
  var x;
  var y;
  var result;
  var check; // Test200

  print('begin test 200');

  for (var i = -8; i != -17; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test201


  print('begin test 201');

  for (var i = -8; i != -17; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test202


  print('begin test 202');

  for (var i = -8; i < 1; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test203


  print('begin test 203');

  for (var i = -8; i > -17; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test204


  print('begin test 204');

  for (var i = -8; i <= 1; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test41() {
  var x;
  var y;
  var result;
  var check; // Test205

  print('begin test 205');

  for (var i = -8; i >= -17; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test206


  print('begin test 206');

  for (var i = -8; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test207


  print('begin test 207');

  for (var i = 536870911; i < 536870920; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test208


  print('begin test 208');

  for (var i = 536870911; i < 536870920; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test209


  print('begin test 209');

  for (var i = 536870911; i > 536870902; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test42() {
  var x;
  var y;
  var result;
  var check; // Test210

  print('begin test 210');

  for (var i = 536870911; i > 536870902; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test211


  print('begin test 211');

  for (var i = 536870911; i <= 536870920; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test212


  print('begin test 212');

  for (var i = 536870911; i <= 536870920; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test213


  print('begin test 213');

  for (var i = 536870911; i >= 536870902; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test214


  print('begin test 214');

  for (var i = 536870911; i >= 536870902; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test43() {
  var x;
  var y;
  var result;
  var check; // Test215

  print('begin test 215');

  for (var i = 536870911; i != 536870920; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test216


  print('begin test 216');

  for (var i = 536870911; i != 536870920; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test217


  print('begin test 217');

  for (var i = 536870911; i != 536870902; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test218


  print('begin test 218');

  for (var i = 536870911; i != 536870902; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test219


  print('begin test 219');

  for (var i = 536870911; i < 536870920; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test44() {
  var x;
  var y;
  var result;
  var check; // Test220

  print('begin test 220');

  for (var i = 536870911; i > 536870902; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test221


  print('begin test 221');

  for (var i = 536870911; i <= 536870920; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test222


  print('begin test 222');

  for (var i = 536870911; i >= 536870902; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test223


  print('begin test 223');

  for (var i = 536870911; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test224


  print('begin test 224');

  for (var i = 536870911; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test45() {
  var x;
  var y;
  var result;
  var check; // Test225

  print('begin test 225');

  for (var i = 536870911; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test226


  print('begin test 226');

  for (var i = 536870911; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test227


  print('begin test 227');

  for (var i = 536870911; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test228


  print('begin test 228');

  for (var i = -536870912; i < -536870903; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test229


  print('begin test 229');

  for (var i = -536870912; i < -536870903; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test46() {
  var x;
  var y;
  var result;
  var check; // Test230

  print('begin test 230');

  for (var i = -536870912; i > -536870921; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test231


  print('begin test 231');

  for (var i = -536870912; i > -536870921; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test232


  print('begin test 232');

  for (var i = -536870912; i <= -536870903; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test233


  print('begin test 233');

  for (var i = -536870912; i <= -536870903; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test234


  print('begin test 234');

  for (var i = -536870912; i >= -536870921; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test47() {
  var x;
  var y;
  var result;
  var check; // Test235

  print('begin test 235');

  for (var i = -536870912; i >= -536870921; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test236


  print('begin test 236');

  for (var i = -536870912; i != -536870903; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test237


  print('begin test 237');

  for (var i = -536870912; i != -536870903; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test238


  print('begin test 238');

  for (var i = -536870912; i != -536870921; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test239


  print('begin test 239');

  for (var i = -536870912; i != -536870921; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test48() {
  var x;
  var y;
  var result;
  var check; // Test240

  print('begin test 240');

  for (var i = -536870912; i < -536870903; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test241


  print('begin test 241');

  for (var i = -536870912; i > -536870921; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test242


  print('begin test 242');

  for (var i = -536870912; i <= -536870903; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test243


  print('begin test 243');

  for (var i = -536870912; i >= -536870921; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test244


  print('begin test 244');

  for (var i = -536870912; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test49() {
  var x;
  var y;
  var result;
  var check; // Test245

  print('begin test 245');

  for (var i = 1073741822; i < 1073741831; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test246


  print('begin test 246');

  for (var i = 1073741822; i < 1073741831; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test247


  print('begin test 247');

  for (var i = 1073741822; i > 1073741813; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test248


  print('begin test 248');

  for (var i = 1073741822; i > 1073741813; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test249


  print('begin test 249');

  for (var i = 1073741822; i <= 1073741831; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test50() {
  var x;
  var y;
  var result;
  var check; // Test250

  print('begin test 250');

  for (var i = 1073741822; i <= 1073741831; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test251


  print('begin test 251');

  for (var i = 1073741822; i >= 1073741813; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test252


  print('begin test 252');

  for (var i = 1073741822; i >= 1073741813; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test253


  print('begin test 253');

  for (var i = 1073741822; i != 1073741831; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test254


  print('begin test 254');

  for (var i = 1073741822; i != 1073741831; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test51() {
  var x;
  var y;
  var result;
  var check; // Test255

  print('begin test 255');

  for (var i = 1073741822; i != 1073741813; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test256


  print('begin test 256');

  for (var i = 1073741822; i != 1073741813; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test257


  print('begin test 257');

  for (var i = 1073741822; i < 1073741831; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test258


  print('begin test 258');

  for (var i = 1073741822; i > 1073741813; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test259


  print('begin test 259');

  for (var i = 1073741822; i <= 1073741831; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test52() {
  var x;
  var y;
  var result;
  var check; // Test260

  print('begin test 260');

  for (var i = 1073741822; i >= 1073741813; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test261


  print('begin test 261');

  for (var i = 1073741822; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test262


  print('begin test 262');

  for (var i = 1073741822; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test263


  print('begin test 263');

  for (var i = 1073741822; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test264


  print('begin test 264');

  for (var i = 1073741822; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test53() {
  var x;
  var y;
  var result;
  var check; // Test265

  print('begin test 265');

  for (var i = 1073741822; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test266


  print('begin test 266');

  for (var i = 1073741823; i < 1073741832; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test267


  print('begin test 267');

  for (var i = 1073741823; i < 1073741832; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test268


  print('begin test 268');

  for (var i = 1073741823; i > 1073741814; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test269


  print('begin test 269');

  for (var i = 1073741823; i > 1073741814; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test54() {
  var x;
  var y;
  var result;
  var check; // Test270

  print('begin test 270');

  for (var i = 1073741823; i <= 1073741832; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test271


  print('begin test 271');

  for (var i = 1073741823; i <= 1073741832; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test272


  print('begin test 272');

  for (var i = 1073741823; i >= 1073741814; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test273


  print('begin test 273');

  for (var i = 1073741823; i >= 1073741814; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test274


  print('begin test 274');

  for (var i = 1073741823; i != 1073741832; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test55() {
  var x;
  var y;
  var result;
  var check; // Test275

  print('begin test 275');

  for (var i = 1073741823; i != 1073741832; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test276


  print('begin test 276');

  for (var i = 1073741823; i != 1073741814; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test277


  print('begin test 277');

  for (var i = 1073741823; i != 1073741814; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test278


  print('begin test 278');

  for (var i = 1073741823; i < 1073741832; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test279


  print('begin test 279');

  for (var i = 1073741823; i > 1073741814; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test56() {
  var x;
  var y;
  var result;
  var check; // Test280

  print('begin test 280');

  for (var i = 1073741823; i <= 1073741832; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test281


  print('begin test 281');

  for (var i = 1073741823; i >= 1073741814; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test282


  print('begin test 282');

  for (var i = 1073741823; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test283


  print('begin test 283');

  for (var i = 1073741823; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test284


  print('begin test 284');

  for (var i = 1073741823; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test57() {
  var x;
  var y;
  var result;
  var check; // Test285

  print('begin test 285');

  for (var i = 1073741823; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test286


  print('begin test 286');

  for (var i = 1073741823; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test287


  print('begin test 287');

  for (var i = 1073741824; i < 1073741833; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test288


  print('begin test 288');

  for (var i = 1073741824; i < 1073741833; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test289


  print('begin test 289');

  for (var i = 1073741824; i > 1073741815; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test58() {
  var x;
  var y;
  var result;
  var check; // Test290

  print('begin test 290');

  for (var i = 1073741824; i > 1073741815; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test291


  print('begin test 291');

  for (var i = 1073741824; i <= 1073741833; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test292


  print('begin test 292');

  for (var i = 1073741824; i <= 1073741833; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test293


  print('begin test 293');

  for (var i = 1073741824; i >= 1073741815; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test294


  print('begin test 294');

  for (var i = 1073741824; i >= 1073741815; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test59() {
  var x;
  var y;
  var result;
  var check; // Test295

  print('begin test 295');

  for (var i = 1073741824; i != 1073741833; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test296


  print('begin test 296');

  for (var i = 1073741824; i != 1073741833; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test297


  print('begin test 297');

  for (var i = 1073741824; i != 1073741815; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test298


  print('begin test 298');

  for (var i = 1073741824; i != 1073741815; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test299


  print('begin test 299');

  for (var i = 1073741824; i < 1073741833; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test60() {
  var x;
  var y;
  var result;
  var check; // Test300

  print('begin test 300');

  for (var i = 1073741824; i > 1073741815; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test301


  print('begin test 301');

  for (var i = 1073741824; i <= 1073741833; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test302


  print('begin test 302');

  for (var i = 1073741824; i >= 1073741815; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test303


  print('begin test 303');

  for (var i = 1073741824; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test304


  print('begin test 304');

  for (var i = 1073741824; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test61() {
  var x;
  var y;
  var result;
  var check; // Test305

  print('begin test 305');

  for (var i = 1073741824; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test306


  print('begin test 306');

  for (var i = 1073741824; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test307


  print('begin test 307');

  for (var i = 1073741824; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test308


  print('begin test 308');

  for (var i = 1073741825; i < 1073741834; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test309


  print('begin test 309');

  for (var i = 1073741825; i < 1073741834; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test62() {
  var x;
  var y;
  var result;
  var check; // Test310

  print('begin test 310');

  for (var i = 1073741825; i > 1073741816; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test311


  print('begin test 311');

  for (var i = 1073741825; i > 1073741816; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test312


  print('begin test 312');

  for (var i = 1073741825; i <= 1073741834; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test313


  print('begin test 313');

  for (var i = 1073741825; i <= 1073741834; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test314


  print('begin test 314');

  for (var i = 1073741825; i >= 1073741816; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test63() {
  var x;
  var y;
  var result;
  var check; // Test315

  print('begin test 315');

  for (var i = 1073741825; i >= 1073741816; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test316


  print('begin test 316');

  for (var i = 1073741825; i != 1073741834; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test317


  print('begin test 317');

  for (var i = 1073741825; i != 1073741834; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test318


  print('begin test 318');

  for (var i = 1073741825; i != 1073741816; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test319


  print('begin test 319');

  for (var i = 1073741825; i != 1073741816; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test64() {
  var x;
  var y;
  var result;
  var check; // Test320

  print('begin test 320');

  for (var i = 1073741825; i < 1073741834; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test321


  print('begin test 321');

  for (var i = 1073741825; i > 1073741816; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test322


  print('begin test 322');

  for (var i = 1073741825; i <= 1073741834; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test323


  print('begin test 323');

  for (var i = 1073741825; i >= 1073741816; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test324


  print('begin test 324');

  for (var i = 1073741825; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test65() {
  var x;
  var y;
  var result;
  var check; // Test325

  print('begin test 325');

  for (var i = 1073741825; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test326


  print('begin test 326');

  for (var i = 1073741825; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test327


  print('begin test 327');

  for (var i = 1073741825; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test328


  print('begin test 328');

  for (var i = 1073741825; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test329


  print('begin test 329');

  for (var i = -1073741823; i < -1073741814; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test66() {
  var x;
  var y;
  var result;
  var check; // Test330

  print('begin test 330');

  for (var i = -1073741823; i < -1073741814; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test331


  print('begin test 331');

  for (var i = -1073741823; i > -1073741832; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test332


  print('begin test 332');

  for (var i = -1073741823; i > -1073741832; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test333


  print('begin test 333');

  for (var i = -1073741823; i <= -1073741814; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test334


  print('begin test 334');

  for (var i = -1073741823; i <= -1073741814; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test67() {
  var x;
  var y;
  var result;
  var check; // Test335

  print('begin test 335');

  for (var i = -1073741823; i >= -1073741832; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test336


  print('begin test 336');

  for (var i = -1073741823; i >= -1073741832; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test337


  print('begin test 337');

  for (var i = -1073741823; i != -1073741814; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test338


  print('begin test 338');

  for (var i = -1073741823; i != -1073741814; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test339


  print('begin test 339');

  for (var i = -1073741823; i != -1073741832; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test68() {
  var x;
  var y;
  var result;
  var check; // Test340

  print('begin test 340');

  for (var i = -1073741823; i != -1073741832; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test341


  print('begin test 341');

  for (var i = -1073741823; i < -1073741814; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test342


  print('begin test 342');

  for (var i = -1073741823; i > -1073741832; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test343


  print('begin test 343');

  for (var i = -1073741823; i <= -1073741814; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test344


  print('begin test 344');

  for (var i = -1073741823; i >= -1073741832; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test69() {
  var x;
  var y;
  var result;
  var check; // Test345

  print('begin test 345');

  for (var i = -1073741823; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test346


  print('begin test 346');

  for (var i = -1073741824; i < -1073741815; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test347


  print('begin test 347');

  for (var i = -1073741824; i < -1073741815; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test348


  print('begin test 348');

  for (var i = -1073741824; i > -1073741833; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test349


  print('begin test 349');

  for (var i = -1073741824; i > -1073741833; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test70() {
  var x;
  var y;
  var result;
  var check; // Test350

  print('begin test 350');

  for (var i = -1073741824; i <= -1073741815; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test351


  print('begin test 351');

  for (var i = -1073741824; i <= -1073741815; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test352


  print('begin test 352');

  for (var i = -1073741824; i >= -1073741833; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test353


  print('begin test 353');

  for (var i = -1073741824; i >= -1073741833; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test354


  print('begin test 354');

  for (var i = -1073741824; i != -1073741815; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test71() {
  var x;
  var y;
  var result;
  var check; // Test355

  print('begin test 355');

  for (var i = -1073741824; i != -1073741815; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test356


  print('begin test 356');

  for (var i = -1073741824; i != -1073741833; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test357


  print('begin test 357');

  for (var i = -1073741824; i != -1073741833; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test358


  print('begin test 358');

  for (var i = -1073741824; i < -1073741815; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test359


  print('begin test 359');

  for (var i = -1073741824; i > -1073741833; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test72() {
  var x;
  var y;
  var result;
  var check; // Test360

  print('begin test 360');

  for (var i = -1073741824; i <= -1073741815; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test361


  print('begin test 361');

  for (var i = -1073741824; i >= -1073741833; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test362


  print('begin test 362');

  for (var i = -1073741824; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test363


  print('begin test 363');

  for (var i = -1073741825; i < -1073741816; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test364


  print('begin test 364');

  for (var i = -1073741825; i < -1073741816; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test73() {
  var x;
  var y;
  var result;
  var check; // Test365

  print('begin test 365');

  for (var i = -1073741825; i > -1073741834; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test366


  print('begin test 366');

  for (var i = -1073741825; i > -1073741834; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test367


  print('begin test 367');

  for (var i = -1073741825; i <= -1073741816; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test368


  print('begin test 368');

  for (var i = -1073741825; i <= -1073741816; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test369


  print('begin test 369');

  for (var i = -1073741825; i >= -1073741834; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test74() {
  var x;
  var y;
  var result;
  var check; // Test370

  print('begin test 370');

  for (var i = -1073741825; i >= -1073741834; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test371


  print('begin test 371');

  for (var i = -1073741825; i != -1073741816; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test372


  print('begin test 372');

  for (var i = -1073741825; i != -1073741816; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test373


  print('begin test 373');

  for (var i = -1073741825; i != -1073741834; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test374


  print('begin test 374');

  for (var i = -1073741825; i != -1073741834; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test75() {
  var x;
  var y;
  var result;
  var check; // Test375

  print('begin test 375');

  for (var i = -1073741825; i < -1073741816; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test376


  print('begin test 376');

  for (var i = -1073741825; i > -1073741834; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test377


  print('begin test 377');

  for (var i = -1073741825; i <= -1073741816; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test378


  print('begin test 378');

  for (var i = -1073741825; i >= -1073741834; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test379


  print('begin test 379');

  for (var i = -1073741825; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test76() {
  var x;
  var y;
  var result;
  var check; // Test380

  print('begin test 380');

  for (var i = -1073741826; i < -1073741817; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test381


  print('begin test 381');

  for (var i = -1073741826; i < -1073741817; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test382


  print('begin test 382');

  for (var i = -1073741826; i > -1073741835; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test383


  print('begin test 383');

  for (var i = -1073741826; i > -1073741835; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test384


  print('begin test 384');

  for (var i = -1073741826; i <= -1073741817; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test77() {
  var x;
  var y;
  var result;
  var check; // Test385

  print('begin test 385');

  for (var i = -1073741826; i <= -1073741817; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test386


  print('begin test 386');

  for (var i = -1073741826; i >= -1073741835; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test387


  print('begin test 387');

  for (var i = -1073741826; i >= -1073741835; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test388


  print('begin test 388');

  for (var i = -1073741826; i != -1073741817; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test389


  print('begin test 389');

  for (var i = -1073741826; i != -1073741817; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test78() {
  var x;
  var y;
  var result;
  var check; // Test390

  print('begin test 390');

  for (var i = -1073741826; i != -1073741835; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test391


  print('begin test 391');

  for (var i = -1073741826; i != -1073741835; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test392


  print('begin test 392');

  for (var i = -1073741826; i < -1073741817; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test393


  print('begin test 393');

  for (var i = -1073741826; i > -1073741835; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test394


  print('begin test 394');

  for (var i = -1073741826; i <= -1073741817; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test79() {
  var x;
  var y;
  var result;
  var check; // Test395

  print('begin test 395');

  for (var i = -1073741826; i >= -1073741835; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test396


  print('begin test 396');

  for (var i = -1073741826; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test397


  print('begin test 397');

  for (var i = 2147483646; i < 2147483655; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test398


  print('begin test 398');

  for (var i = 2147483646; i < 2147483655; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test399


  print('begin test 399');

  for (var i = 2147483646; i > 2147483637; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test80() {
  var x;
  var y;
  var result;
  var check; // Test400

  print('begin test 400');

  for (var i = 2147483646; i > 2147483637; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test401


  print('begin test 401');

  for (var i = 2147483646; i <= 2147483655; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test402


  print('begin test 402');

  for (var i = 2147483646; i <= 2147483655; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test403


  print('begin test 403');

  for (var i = 2147483646; i >= 2147483637; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test404


  print('begin test 404');

  for (var i = 2147483646; i >= 2147483637; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test81() {
  var x;
  var y;
  var result;
  var check; // Test405

  print('begin test 405');

  for (var i = 2147483646; i != 2147483655; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test406


  print('begin test 406');

  for (var i = 2147483646; i != 2147483655; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test407


  print('begin test 407');

  for (var i = 2147483646; i != 2147483637; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test408


  print('begin test 408');

  for (var i = 2147483646; i != 2147483637; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test409


  print('begin test 409');

  for (var i = 2147483646; i < 2147483655; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test82() {
  var x;
  var y;
  var result;
  var check; // Test410

  print('begin test 410');

  for (var i = 2147483646; i > 2147483637; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test411


  print('begin test 411');

  for (var i = 2147483646; i <= 2147483655; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test412


  print('begin test 412');

  for (var i = 2147483646; i >= 2147483637; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test413


  print('begin test 413');

  for (var i = 2147483646; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test414


  print('begin test 414');

  for (var i = 2147483646; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test83() {
  var x;
  var y;
  var result;
  var check; // Test415

  print('begin test 415');

  for (var i = 2147483646; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test416


  print('begin test 416');

  for (var i = 2147483646; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test417


  print('begin test 417');

  for (var i = 2147483646; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test418


  print('begin test 418');

  for (var i = 2147483647; i < 2147483656; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test419


  print('begin test 419');

  for (var i = 2147483647; i < 2147483656; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test84() {
  var x;
  var y;
  var result;
  var check; // Test420

  print('begin test 420');

  for (var i = 2147483647; i > 2147483638; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test421


  print('begin test 421');

  for (var i = 2147483647; i > 2147483638; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test422


  print('begin test 422');

  for (var i = 2147483647; i <= 2147483656; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test423


  print('begin test 423');

  for (var i = 2147483647; i <= 2147483656; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test424


  print('begin test 424');

  for (var i = 2147483647; i >= 2147483638; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test85() {
  var x;
  var y;
  var result;
  var check; // Test425

  print('begin test 425');

  for (var i = 2147483647; i >= 2147483638; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test426


  print('begin test 426');

  for (var i = 2147483647; i != 2147483656; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test427


  print('begin test 427');

  for (var i = 2147483647; i != 2147483656; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test428


  print('begin test 428');

  for (var i = 2147483647; i != 2147483638; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test429


  print('begin test 429');

  for (var i = 2147483647; i != 2147483638; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test86() {
  var x;
  var y;
  var result;
  var check; // Test430

  print('begin test 430');

  for (var i = 2147483647; i < 2147483656; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test431


  print('begin test 431');

  for (var i = 2147483647; i > 2147483638; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test432


  print('begin test 432');

  for (var i = 2147483647; i <= 2147483656; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test433


  print('begin test 433');

  for (var i = 2147483647; i >= 2147483638; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test434


  print('begin test 434');

  for (var i = 2147483647; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test87() {
  var x;
  var y;
  var result;
  var check; // Test435

  print('begin test 435');

  for (var i = 2147483647; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test436


  print('begin test 436');

  for (var i = 2147483647; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test437


  print('begin test 437');

  for (var i = 2147483647; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test438


  print('begin test 438');

  for (var i = 2147483647; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test439


  print('begin test 439');

  for (var i = 2147483648; i < 2147483657; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test88() {
  var x;
  var y;
  var result;
  var check; // Test440

  print('begin test 440');

  for (var i = 2147483648; i < 2147483657; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test441


  print('begin test 441');

  for (var i = 2147483648; i > 2147483639; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test442


  print('begin test 442');

  for (var i = 2147483648; i > 2147483639; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test443


  print('begin test 443');

  for (var i = 2147483648; i <= 2147483657; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test444


  print('begin test 444');

  for (var i = 2147483648; i <= 2147483657; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test89() {
  var x;
  var y;
  var result;
  var check; // Test445

  print('begin test 445');

  for (var i = 2147483648; i >= 2147483639; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test446


  print('begin test 446');

  for (var i = 2147483648; i >= 2147483639; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test447


  print('begin test 447');

  for (var i = 2147483648; i != 2147483657; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test448


  print('begin test 448');

  for (var i = 2147483648; i != 2147483657; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test449


  print('begin test 449');

  for (var i = 2147483648; i != 2147483639; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test90() {
  var x;
  var y;
  var result;
  var check; // Test450

  print('begin test 450');

  for (var i = 2147483648; i != 2147483639; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test451


  print('begin test 451');

  for (var i = 2147483648; i < 2147483657; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test452


  print('begin test 452');

  for (var i = 2147483648; i > 2147483639; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test453


  print('begin test 453');

  for (var i = 2147483648; i <= 2147483657; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test454


  print('begin test 454');

  for (var i = 2147483648; i >= 2147483639; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test91() {
  var x;
  var y;
  var result;
  var check; // Test455

  print('begin test 455');

  for (var i = 2147483648; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test456


  print('begin test 456');

  for (var i = 2147483648; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test457


  print('begin test 457');

  for (var i = 2147483648; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test458


  print('begin test 458');

  for (var i = 2147483648; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test459


  print('begin test 459');

  for (var i = 2147483648; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test92() {
  var x;
  var y;
  var result;
  var check; // Test460

  print('begin test 460');

  for (var i = 2147483649; i < 2147483658; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test461


  print('begin test 461');

  for (var i = 2147483649; i < 2147483658; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test462


  print('begin test 462');

  for (var i = 2147483649; i > 2147483640; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test463


  print('begin test 463');

  for (var i = 2147483649; i > 2147483640; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test464


  print('begin test 464');

  for (var i = 2147483649; i <= 2147483658; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test93() {
  var x;
  var y;
  var result;
  var check; // Test465

  print('begin test 465');

  for (var i = 2147483649; i <= 2147483658; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test466


  print('begin test 466');

  for (var i = 2147483649; i >= 2147483640; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test467


  print('begin test 467');

  for (var i = 2147483649; i >= 2147483640; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test468


  print('begin test 468');

  for (var i = 2147483649; i != 2147483658; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test469


  print('begin test 469');

  for (var i = 2147483649; i != 2147483658; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test94() {
  var x;
  var y;
  var result;
  var check; // Test470

  print('begin test 470');

  for (var i = 2147483649; i != 2147483640; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test471


  print('begin test 471');

  for (var i = 2147483649; i != 2147483640; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test472


  print('begin test 472');

  for (var i = 2147483649; i < 2147483658; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test473


  print('begin test 473');

  for (var i = 2147483649; i > 2147483640; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test474


  print('begin test 474');

  for (var i = 2147483649; i <= 2147483658; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test95() {
  var x;
  var y;
  var result;
  var check; // Test475

  print('begin test 475');

  for (var i = 2147483649; i >= 2147483640; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test476


  print('begin test 476');

  for (var i = 2147483649; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test477


  print('begin test 477');

  for (var i = 2147483649; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test478


  print('begin test 478');

  for (var i = 2147483649; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test479


  print('begin test 479');

  for (var i = 2147483649; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test96() {
  var x;
  var y;
  var result;
  var check; // Test480

  print('begin test 480');

  for (var i = 2147483649; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test481


  print('begin test 481');

  for (var i = -2147483647; i < -2147483638; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test482


  print('begin test 482');

  for (var i = -2147483647; i < -2147483638; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test483


  print('begin test 483');

  for (var i = -2147483647; i > -2147483656; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test484


  print('begin test 484');

  for (var i = -2147483647; i > -2147483656; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test97() {
  var x;
  var y;
  var result;
  var check; // Test485

  print('begin test 485');

  for (var i = -2147483647; i <= -2147483638; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test486


  print('begin test 486');

  for (var i = -2147483647; i <= -2147483638; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test487


  print('begin test 487');

  for (var i = -2147483647; i >= -2147483656; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test488


  print('begin test 488');

  for (var i = -2147483647; i >= -2147483656; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test489


  print('begin test 489');

  for (var i = -2147483647; i != -2147483638; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test98() {
  var x;
  var y;
  var result;
  var check; // Test490

  print('begin test 490');

  for (var i = -2147483647; i != -2147483638; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test491


  print('begin test 491');

  for (var i = -2147483647; i != -2147483656; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test492


  print('begin test 492');

  for (var i = -2147483647; i != -2147483656; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test493


  print('begin test 493');

  for (var i = -2147483647; i < -2147483638; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test494


  print('begin test 494');

  for (var i = -2147483647; i > -2147483656; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test99() {
  var x;
  var y;
  var result;
  var check; // Test495

  print('begin test 495');

  for (var i = -2147483647; i <= -2147483638; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test496


  print('begin test 496');

  for (var i = -2147483647; i >= -2147483656; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test497


  print('begin test 497');

  for (var i = -2147483647; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test498


  print('begin test 498');

  for (var i = -2147483648; i < -2147483639; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test499


  print('begin test 499');

  for (var i = -2147483648; i < -2147483639; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test100() {
  var x;
  var y;
  var result;
  var check; // Test500

  print('begin test 500');

  for (var i = -2147483648; i > -2147483657; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test501


  print('begin test 501');

  for (var i = -2147483648; i > -2147483657; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test502


  print('begin test 502');

  for (var i = -2147483648; i <= -2147483639; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test503


  print('begin test 503');

  for (var i = -2147483648; i <= -2147483639; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test504


  print('begin test 504');

  for (var i = -2147483648; i >= -2147483657; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test101() {
  var x;
  var y;
  var result;
  var check; // Test505

  print('begin test 505');

  for (var i = -2147483648; i >= -2147483657; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test506


  print('begin test 506');

  for (var i = -2147483648; i != -2147483639; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test507


  print('begin test 507');

  for (var i = -2147483648; i != -2147483639; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test508


  print('begin test 508');

  for (var i = -2147483648; i != -2147483657; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test509


  print('begin test 509');

  for (var i = -2147483648; i != -2147483657; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test102() {
  var x;
  var y;
  var result;
  var check; // Test510

  print('begin test 510');

  for (var i = -2147483648; i < -2147483639; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test511


  print('begin test 511');

  for (var i = -2147483648; i > -2147483657; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test512


  print('begin test 512');

  for (var i = -2147483648; i <= -2147483639; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test513


  print('begin test 513');

  for (var i = -2147483648; i >= -2147483657; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test514


  print('begin test 514');

  for (var i = -2147483648; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test103() {
  var x;
  var y;
  var result;
  var check; // Test515

  print('begin test 515');

  for (var i = -2147483649; i < -2147483640; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test516


  print('begin test 516');

  for (var i = -2147483649; i < -2147483640; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test517


  print('begin test 517');

  for (var i = -2147483649; i > -2147483658; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test518


  print('begin test 518');

  for (var i = -2147483649; i > -2147483658; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test519


  print('begin test 519');

  for (var i = -2147483649; i <= -2147483640; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test104() {
  var x;
  var y;
  var result;
  var check; // Test520

  print('begin test 520');

  for (var i = -2147483649; i <= -2147483640; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test521


  print('begin test 521');

  for (var i = -2147483649; i >= -2147483658; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test522


  print('begin test 522');

  for (var i = -2147483649; i >= -2147483658; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test523


  print('begin test 523');

  for (var i = -2147483649; i != -2147483640; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test524


  print('begin test 524');

  for (var i = -2147483649; i != -2147483640; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test105() {
  var x;
  var y;
  var result;
  var check; // Test525

  print('begin test 525');

  for (var i = -2147483649; i != -2147483658; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test526


  print('begin test 526');

  for (var i = -2147483649; i != -2147483658; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test527


  print('begin test 527');

  for (var i = -2147483649; i < -2147483640; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test528


  print('begin test 528');

  for (var i = -2147483649; i > -2147483658; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test529


  print('begin test 529');

  for (var i = -2147483649; i <= -2147483640; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test106() {
  var x;
  var y;
  var result;
  var check; // Test530

  print('begin test 530');

  for (var i = -2147483649; i >= -2147483658; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test531


  print('begin test 531');

  for (var i = -2147483649; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test532


  print('begin test 532');

  for (var i = -2147483650; i < -2147483641; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test533


  print('begin test 533');

  for (var i = -2147483650; i < -2147483641; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test534


  print('begin test 534');

  for (var i = -2147483650; i > -2147483659; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test107() {
  var x;
  var y;
  var result;
  var check; // Test535

  print('begin test 535');

  for (var i = -2147483650; i > -2147483659; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test536


  print('begin test 536');

  for (var i = -2147483650; i <= -2147483641; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test537


  print('begin test 537');

  for (var i = -2147483650; i <= -2147483641; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test538


  print('begin test 538');

  for (var i = -2147483650; i >= -2147483659; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test539


  print('begin test 539');

  for (var i = -2147483650; i >= -2147483659; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test108() {
  var x;
  var y;
  var result;
  var check; // Test540

  print('begin test 540');

  for (var i = -2147483650; i != -2147483641; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test541


  print('begin test 541');

  for (var i = -2147483650; i != -2147483641; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test542


  print('begin test 542');

  for (var i = -2147483650; i != -2147483659; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test543


  print('begin test 543');

  for (var i = -2147483650; i != -2147483659; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test544


  print('begin test 544');

  for (var i = -2147483650; i < -2147483641; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test109() {
  var x;
  var y;
  var result;
  var check; // Test545

  print('begin test 545');

  for (var i = -2147483650; i > -2147483659; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test546


  print('begin test 546');

  for (var i = -2147483650; i <= -2147483641; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test547


  print('begin test 547');

  for (var i = -2147483650; i >= -2147483659; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test548


  print('begin test 548');

  for (var i = -2147483650; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test549


  print('begin test 549');

  for (var i = 4294967295; i < 4294967304; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test110() {
  var x;
  var y;
  var result;
  var check; // Test550

  print('begin test 550');

  for (var i = 4294967295; i < 4294967304; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test551


  print('begin test 551');

  for (var i = 4294967295; i > 4294967286; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test552


  print('begin test 552');

  for (var i = 4294967295; i > 4294967286; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test553


  print('begin test 553');

  for (var i = 4294967295; i <= 4294967304; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test554


  print('begin test 554');

  for (var i = 4294967295; i <= 4294967304; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test111() {
  var x;
  var y;
  var result;
  var check; // Test555

  print('begin test 555');

  for (var i = 4294967295; i >= 4294967286; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test556


  print('begin test 556');

  for (var i = 4294967295; i >= 4294967286; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test557


  print('begin test 557');

  for (var i = 4294967295; i != 4294967304; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test558


  print('begin test 558');

  for (var i = 4294967295; i != 4294967304; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test559


  print('begin test 559');

  for (var i = 4294967295; i != 4294967286; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test112() {
  var x;
  var y;
  var result;
  var check; // Test560

  print('begin test 560');

  for (var i = 4294967295; i != 4294967286; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test561


  print('begin test 561');

  for (var i = 4294967295; i < 4294967304; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test562


  print('begin test 562');

  for (var i = 4294967295; i > 4294967286; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test563


  print('begin test 563');

  for (var i = 4294967295; i <= 4294967304; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test564


  print('begin test 564');

  for (var i = 4294967295; i >= 4294967286; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test113() {
  var x;
  var y;
  var result;
  var check; // Test565

  print('begin test 565');

  for (var i = 4294967295; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test566


  print('begin test 566');

  for (var i = 4294967295; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test567


  print('begin test 567');

  for (var i = 4294967295; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test568


  print('begin test 568');

  for (var i = 4294967295; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test569


  print('begin test 569');

  for (var i = 4294967295; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test114() {
  var x;
  var y;
  var result;
  var check; // Test570

  print('begin test 570');

  for (var i = 4294967296; i < 4294967305; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test571


  print('begin test 571');

  for (var i = 4294967296; i < 4294967305; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test572


  print('begin test 572');

  for (var i = 4294967296; i > 4294967287; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test573


  print('begin test 573');

  for (var i = 4294967296; i > 4294967287; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test574


  print('begin test 574');

  for (var i = 4294967296; i <= 4294967305; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test115() {
  var x;
  var y;
  var result;
  var check; // Test575

  print('begin test 575');

  for (var i = 4294967296; i <= 4294967305; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test576


  print('begin test 576');

  for (var i = 4294967296; i >= 4294967287; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test577


  print('begin test 577');

  for (var i = 4294967296; i >= 4294967287; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test578


  print('begin test 578');

  for (var i = 4294967296; i != 4294967305; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test579


  print('begin test 579');

  for (var i = 4294967296; i != 4294967305; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test116() {
  var x;
  var y;
  var result;
  var check; // Test580

  print('begin test 580');

  for (var i = 4294967296; i != 4294967287; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test581


  print('begin test 581');

  for (var i = 4294967296; i != 4294967287; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test582


  print('begin test 582');

  for (var i = 4294967296; i < 4294967305; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test583


  print('begin test 583');

  for (var i = 4294967296; i > 4294967287; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test584


  print('begin test 584');

  for (var i = 4294967296; i <= 4294967305; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test117() {
  var x;
  var y;
  var result;
  var check; // Test585

  print('begin test 585');

  for (var i = 4294967296; i >= 4294967287; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test586


  print('begin test 586');

  for (var i = 4294967296; i > 0; i >>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test587


  print('begin test 587');

  for (var i = 4294967296; i > 0; i >>>= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test588


  print('begin test 588');

  for (var i = 4294967296; i > 0; i >>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test589


  print('begin test 589');

  for (var i = 4294967296; i > 0; i >>>= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test118() {
  var x;
  var y;
  var result;
  var check; // Test590

  print('begin test 590');

  for (var i = 4294967296; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test591


  print('begin test 591');

  for (var i = -4294967295; i < -4294967286; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test592


  print('begin test 592');

  for (var i = -4294967295; i < -4294967286; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test593


  print('begin test 593');

  for (var i = -4294967295; i > -4294967304; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test594


  print('begin test 594');

  for (var i = -4294967295; i > -4294967304; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test119() {
  var x;
  var y;
  var result;
  var check; // Test595

  print('begin test 595');

  for (var i = -4294967295; i <= -4294967286; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test596


  print('begin test 596');

  for (var i = -4294967295; i <= -4294967286; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test597


  print('begin test 597');

  for (var i = -4294967295; i >= -4294967304; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test598


  print('begin test 598');

  for (var i = -4294967295; i >= -4294967304; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test599


  print('begin test 599');

  for (var i = -4294967295; i != -4294967286; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test120() {
  var x;
  var y;
  var result;
  var check; // Test600

  print('begin test 600');

  for (var i = -4294967295; i != -4294967286; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test601


  print('begin test 601');

  for (var i = -4294967295; i != -4294967304; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test602


  print('begin test 602');

  for (var i = -4294967295; i != -4294967304; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test603


  print('begin test 603');

  for (var i = -4294967295; i < -4294967286; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test604


  print('begin test 604');

  for (var i = -4294967295; i > -4294967304; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test121() {
  var x;
  var y;
  var result;
  var check; // Test605

  print('begin test 605');

  for (var i = -4294967295; i <= -4294967286; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test606


  print('begin test 606');

  for (var i = -4294967295; i >= -4294967304; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test607


  print('begin test 607');

  for (var i = -4294967295; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test608


  print('begin test 608');

  for (var i = -4294967296; i < -4294967287; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test609


  print('begin test 609');

  for (var i = -4294967296; i < -4294967287; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test122() {
  var x;
  var y;
  var result;
  var check; // Test610

  print('begin test 610');

  for (var i = -4294967296; i > -4294967305; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test611


  print('begin test 611');

  for (var i = -4294967296; i > -4294967305; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test612


  print('begin test 612');

  for (var i = -4294967296; i <= -4294967287; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test613


  print('begin test 613');

  for (var i = -4294967296; i <= -4294967287; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test614


  print('begin test 614');

  for (var i = -4294967296; i >= -4294967305; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test123() {
  var x;
  var y;
  var result;
  var check; // Test615

  print('begin test 615');

  for (var i = -4294967296; i >= -4294967305; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test616


  print('begin test 616');

  for (var i = -4294967296; i != -4294967287; ++i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test617


  print('begin test 617');

  for (var i = -4294967296; i != -4294967287; i++) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test618


  print('begin test 618');

  for (var i = -4294967296; i != -4294967305; i--) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test619


  print('begin test 619');

  for (var i = -4294967296; i != -4294967305; --i) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

function test124() {
  var x;
  var y;
  var result;
  var check; // Test620

  print('begin test 620');

  for (var i = -4294967296; i < -4294967287; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test621


  print('begin test 621');

  for (var i = -4294967296; i > -4294967305; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test622


  print('begin test 622');

  for (var i = -4294967296; i <= -4294967287; i += 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test623


  print('begin test 623');

  for (var i = -4294967296; i >= -4294967305; i -= 2) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  } // Test624


  print('begin test 624');

  for (var i = -4294967296; i != 0; i <<= 1) {
    var z = i < 0 ? -i : i;
    print(Math.abs(z) >= 1000000 ? z % 1000000 : z);
  }
}

test0();
test1();
test2();
test3();
test4();
test5();
test6();
test7();
test8();
test9();
test10();
test11();
test12();
test13();
test14();
test15();
test16();
test17();
test18();
test19();
test20();
test21();
test22();
test23();
test24();
test25();
test26();
test27();
test28();
test29();
test30();
test31();
test32();
test33();
test34();
test35();
test36();
test37();
test38();
test39();
test40();
test41();
test42();
test43();
test44();
test45();
test46();
test47();
test48();
test49();
test50();
test51();
test52();
test53();
test54();
test55();
test56();
test57();
test58();
test59();
test60();
test61();
test62();
test63();
test64();
test65();
test66();
test67();
test68();
test69();
test70();
test71();
test72();
test73();
test74();
test75();
test76();
test77();
test78();
test79();
test80();
test81();
test82();
test83();
test84();
test85();
test86();
test87();
test88();
test89();
test90();
test91();
test92();
test93();
test94();
test95();
test96();
test97();
test98();
test99();
test100();
test101();
test102();
test103();
test104();
test105();
test106();
test107();
test108();
test109();
test110();
test111();
test112();
test113();
test114();
test115();
test116();
test117();
test118();
test119();
test120();
test121();
test122();
test123();
test124();
print("done");
