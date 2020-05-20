//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var r; // Delete locals

function Test1() {
  var p;
  var q = 10;
  print(p);
  r = delete p;
  print(r);
  print(p);
  print(q);
  r = delete q;
  print(r);
  print(q);
}

Test1();
test2_value = 10; // Delete globals

function Test2() {
  test2_local = 20;
  print(test2_value);
  r = delete test2_value;
  print(r);

  try {
    print(test2_value);
  } catch (e) {
    ;
  }

  print(test2_local);
  r = delete test2_local;
  print(r);

  try {
    print(test2_local);
  } catch (e) {
    ;
  }
}

Test2(); // Deleting parameters

function Test3(x, y, z) {
  print(x);
  print(y);
  print(z);
  r = delete x;
  print(r);
  r = delete y;
  print(r);
  r = delete z;
  print(r);
  print(x);
  print(y);
  print(z);
}

Test3(10, "hello"); // Delete arguments[i]

function Test4(x, y, z) {
  print(x);
  print(y);
  print(z);
  print(arguments[0]);
  print(arguments[1]);
  print(arguments[2]);
  r = delete arguments[0];
  print(r);
  r = delete arguments[2];
  print(r);
  print(x);
  print(y);
  print(z);
  print(arguments[0]);
  print(arguments[1]);
  print(arguments[2]);
}

Test4(10, "hello"); // Delete nested function

function Test5() {
  function test5_func() {
    return 100;
  }

  r = delete test5_func;
  print(r);
  print(test5_func());
}

Test5(); // Delete this

function Test6() {
  try {
    r = delete this;
  } catch (e) {
    ;
  }

  print(r);
}

Test6(); // Delete a global function

function test7_value() {
  ;
}

function Test7() {
  r = delete test7_value;
  print(r);
}

Test7(); // Delete arguments

function Test8() {
  r = delete arguments;
  print(r);
}

Test8(); // Delete exception

function Test18() {
  var test18_value = 10;
  var o = {};
  with (o) {
    r = delete test18_value;
  }
  print(r);
  print(test18_value);
}

Test18(); // Delete variable in with

function Test19() {
  var test19_value = 10;
  var o = {
    test19_value: 20
  };
  with (o) {
    r = delete test19_value;
  }
  print(r);
  print(test19_value);
  print(o.test19_value);
}

Test19(); // Delete local variable, not in with inside eval

function Test22() {
  var test22_value = 10;
  var o1 = {
    test22_value: 20
  };
  var o2 = {
    test22_value: 30
  };
  var o3 = {
    test22_value: 40
  };
  var o4 = {
    test22_value: 50
  };
  with (o1) {
    with (o2) {
      with (o3) {
        with (o4) {
          r = delete test22_value;
        }
      }
    }
  }
  print(r);
  print(test22_value);
  print(o1.test22_value);
  print(o2.test22_value);
  print(o3.test22_value);
  print(o4.test22_value);
}

Test22();
var Test24_value = 1;

function Test24() {
  var Test24_value = 10;
  var o = {
    Test24_value: 20
  };
  with (o) {
    r = delete Test24_value;
  }
  print(r);
  print(Test24_value);
  print(o.Test24_value);
}

Test24();
var Test26_value = 1;

function Test26() {
  var o = new Object();
  with (o) {
    r = delete Test26_value;
  }
  print(r);
  print(Test26_value);
  print(o.Test26_value);
}

Test26();
var Test27_value = 1;

function Test27() {
  var o = new Object();
  with (o) {
    r = delete Test27_value;
  }
  print(r);
  print(Test27_value);
  print(o.Test27_value);
}

Test27(); // Function Declaration. And eval with same name
