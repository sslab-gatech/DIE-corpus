//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 String API extensions tests -- verifies the API shape and basic functionality
function verifyThrowsIfRegExpSearchString(functionName) {
  var f = String.prototype[functionName].bind("abc");
  var re = /./;

  try {
    f.bind(undefined, re);
  } catch (e) {
    ;
  }

  helpers.withPropertyDeleted(RegExp.prototype, Symbol.match, function () {
    try {
      f.bind(undefined, re);
    } catch (e) {
      ;
    }
  });
  re = 1;

  try {
    f.bind(undefined, re);
  } catch (e) {
    ;
  }

  re = {};

  try {
    f.bind(undefined, re);
  } catch (e) {
    ;
  }

  re = {
    [Symbol.match]: true
  };

  try {
    f.bind(undefined, re);
  } catch (e) {
    ;
  }

  re = {
    [Symbol.match]: 'coerced to true'
  };

  try {
    f.bind(undefined, re);
  } catch (e) {
    ;
  }

  re = {
    [Symbol.match]: null
  };

  try {
    f.bind(undefined, re);
  } catch (e) {
    ;
  }
}

function t1() {
  console.log(Array.prototype.hasOwnProperty('find'));
  console.log(Array.prototype.hasOwnProperty('findIndex'));
  console.log(String.prototype.hasOwnProperty('repeat'));
  console.log(String.prototype.hasOwnProperty('startsWith'));
  console.log(String.prototype.hasOwnProperty('endsWith'));
  console.log(String.prototype.hasOwnProperty('includes'));
  console.log(Array.prototype.find.length === 1);
  console.log(Array.prototype.findIndex.length === 1);
  console.log(String.prototype.repeat.length === 1);
  console.log(String.prototype.startsWith.length === 1);
  console.log(String.prototype.endsWith.length === 1);
  console.log(String.prototype.includes.length === 1);
}

t1();

function t2() {
  try {
    Array.prototype.find.call();
  } catch (e) {
    ;
  }

  try {
    Array.prototype.find.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Array.prototype.find.call(undefined, function () {
      return true;
    }, {});
  } catch (e) {
    ;
  }

  try {
    Array.prototype.find.call(null);
  } catch (e) {
    ;
  }

  try {
    Array.prototype.find.call(null, function () {
      return true;
    }, {});
  } catch (e) {
    ;
  }

  var arr = [1, 2, 3]; // Test missing/invalid predicate argument

  try {
    arr.find();
  } catch (e) {
    ;
  }

  try {
    arr.find({});
  } catch (e) {
    ;
  }

  var fakeArrWithLengthGetter = {
    __proto__: Array.prototype,

    get length() {
      throw new Error('getter called');
    }

  };

  try {
    fakeArrWithLengthGetter.find();
  } catch (e) {
    ;
  } // Test simple predicates matching each element


  console.log(1, arr.find(function (v, i, a) {
    return true;
  }));
  console.log(1, arr.find(function (v, i, a) {
    if (i >= 1) {
      assert.fail("shouldn't visit index > 0");
    }

    return v === 1;
  }));
  console.log(2, arr.find(function (v, i, a) {
    if (i >= 2) {
      assert.fail("shouldn't visit index > 1");
    }

    return v === 2;
  }));
  console.log(3, arr.find(function (v, i, a) {
    if (i >= 3) {
      assert.fail("shouldn't visit index > 2");
    }

    return v === 3;
  }));
  console.log(undefined, arr.find(function (v, i, a) {
    if (i >= 3) {
      assert.fail("shouldn't visit index > 2");
    }

    return v === 4;
  }));
  console.log(2, arr.find(function (v, i, a) {
    if (i >= 2) {
      assert.fail("shouldn't visit index > 1");
    }

    return v === 2 || v === 3;
  })); // Test adding elements in predicate function

  console.log(undefined, arr.find(function (v, i, a) {
    if (i >= 3) {
      assert.fail("shouldn't visit index > 2 (initial array length");
    }

    a.push(v + 3);
    return false;
  }));
  console.log([1, 2, 3, 4, 5, 6], arr); // Test deleting elements in predicate function that have not been visited

  function f(v, i, a) {
    if (i % 2 === 1) {
      console.log(undefined, v);
    } else {
      delete a[i + 1];
    }

    return false;
  }

  ;
  console.log(undefined, arr.find(f));
  console.log(1, arr[0]);
  console.log(undefined, arr[1]);
  console.log(3, arr[2]);
  console.log(undefined, arr[3]);
  console.log(5, arr[4]);
  console.log(undefined, arr[5]); // Test deleting elements in predicate function that have already been visited

  console.log(undefined, arr.find(function (v, i, a) {
    delete a[i];
    return false;
  }));
  console.log(undefined, arr[0]);
  console.log(undefined, arr[1]);
  console.log(undefined, arr[2]);
  console.log(undefined, arr[3]);
  console.log(undefined, arr[4]);
  console.log(undefined, arr[5]);
  console.log(6, arr.length); // Test thisArg argument

  var thisArg = {};
  console.log(undefined, arr.find(function (v, i, a) {
    if (this !== thisArg) {
      assert.fail("this is not what was passed to second parameter of find()");
    }

    return false;
  }, thisArg)); // Test and ensure Array.prototype.find calls ToLength
  //    checks lower bound (negative -> zero)
  //    upper bound ( pow(2,53)-1 ) cannot be tested in reasonable time

  var arr = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: -1
  };
  console.log(undefined, Array.prototype.find.call(arr, function (v, i, a) {
    assert.fail("shouldn't visit any element when length is less than zero");
    return true;
  }));
}

t2();

function t3() {
  try {
    Array.prototype.findIndex.call();
  } catch (e) {
    ;
  }

  try {
    Array.prototype.findIndex.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Array.prototype.findIndex.call(undefined, function () {
      return true;
    }, {});
  } catch (e) {
    ;
  }

  try {
    Array.prototype.findIndex.call(null);
  } catch (e) {
    ;
  }

  try {
    Array.prototype.findIndex.call(null, function () {
      return true;
    }, {});
  } catch (e) {
    ;
  }

  var arr = [1, 2, 3]; // Test missing/invalid predicate argument

  try {
    arr.findIndex();
  } catch (e) {
    ;
  }

  try {
    arr.findIndex({});
  } catch (e) {
    ;
  }

  var fakeArrWithLengthGetter = {
    __proto__: Array.prototype,

    get length() {
      throw new Error('getter called');
    }

  };

  try {
    fakeArrWithLengthGetter.findIndex();
  } catch (e) {
    ;
  } // Test simple predicates matching each element


  console.log(0, arr.findIndex(function (v, i, a) {
    return true;
  }));
  console.log(0, arr.findIndex(function (v, i, a) {
    if (i >= 1) {
      assert.fail("shouldn't visit index > 0");
    }

    return v === 1;
  }));
  console.log(1, arr.findIndex(function (v, i, a) {
    if (i >= 2) {
      assert.fail("shouldn't visit index > 1");
    }

    return v === 2;
  }));
  console.log(2, arr.findIndex(function (v, i, a) {
    if (i >= 3) {
      assert.fail("shouldn't visit index > 2");
    }

    return v === 3;
  }));
  console.log(-1, arr.findIndex(function (v, i, a) {
    if (i >= 3) {
      assert.fail("shouldn't visit index > 2");
    }

    return v === 4;
  }));
  console.log(1, arr.findIndex(function (v, i, a) {
    if (i >= 2) {
      assert.fail("shouldn't visit index > 1");
    }

    return v === 2 || v === 3;
  })); // Test adding elements in predicate function

  console.log(-1, arr.findIndex(function (v, i, a) {
    if (i >= 3) {
      assert.fail("shouldn't visit index > 2 (initial array length");
    }

    a.push(v + 3);
    return false;
  }));
  console.log([1, 2, 3, 4, 5, 6], arr); // Test deleting elements in predicate function that have not been visited

  function f(v, i, a) {
    if (i % 2 === 1) {
      console.log(undefined, v);
    } else {
      delete a[i + 1];
    }

    return false;
  }

  console.log(-1, arr.findIndex(f));
  console.log(1, arr[0]);
  console.log(undefined, arr[1]);
  console.log(3, arr[2]);
  console.log(undefined, arr[3]);
  console.log(5, arr[4]);
  console.log(undefined, arr[5]); // Test deleting elements in predicate function that have already been visited

  console.log(-1, arr.findIndex(function (v, i, a) {
    delete a[i];
    return false;
  }));
  console.log(undefined, arr[0]);
  console.log(undefined, arr[1]);
  console.log(undefined, arr[2]);
  console.log(undefined, arr[3]);
  console.log(undefined, arr[4]);
  console.log(undefined, arr[5]);
  console.log(6, arr.length); // Test thisArg argument

  var thisArg = {};
  console.log(-1, arr.findIndex(function (v, i, a) {
    if (this !== thisArg) {
      assert.fail("this is not what was passed to second parameter of findIndex()");
    }

    return false;
  }, thisArg)); // Test and ensure Array.prototype.findIndex calls ToLength
  //    checks lower bound (negative -> zero)
  //    upper bound ( pow(2,53)-1 ) cannot be tested in reasonable time

  var arr = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: -3
  };
  console.log(-1, Array.prototype.findIndex.call(arr, function (v, i, a) {
    assert.fail("shouldn't visit any element when length is less than zero");
    return true;
  }));
}

t3();

function t4() {
  var arr = [,,,,,];
  var count = 0;
  arr.find(function () {
    count++;
    return false;
  });
  console.log(arr.length, count);
  count = 0;
  arr.findIndex(function () {
    count++;
    return false;
  });
  console.log(arr.length, count);
  arr = {
    length: 5,
    0: undefined,
    1: undefined,
    3: undefined
  };
  count = 0;
  Array.prototype.find.call(arr, function () {
    count++;
    return false;
  });
  console.log(arr.length, count);
  count = 0;
  Array.prototype.findIndex.call(arr, function () {
    count++;
    return false;
  });
  console.log(arr.length, count);
}

t4();

function t5() {
  try {
    String.prototype.repeat.call();
  } catch (e) {
    ;
  }

  try {
    String.prototype.repeat.call(undefined);
  } catch (e) {
    ;
  }

  try {
    String.prototype.repeat.call(undefined, "", 0);
  } catch (e) {
    ;
  }

  try {
    String.prototype.repeat.call(null);
  } catch (e) {
    ;
  }

  try {
    String.prototype.repeat.call(null, "", 0);
  } catch (e) {
    ;
  }

  var s;
  s = "";
  console.log("", s.repeat(0));
  console.log("", s.repeat(NaN));
  console.log("", s.repeat(1));
  console.log("", s.repeat(2));
  console.log("", s.repeat(50));
  s = "a";
  console.log("", s.repeat(0));
  console.log("", s.repeat(NaN));
  console.log("a", s.repeat(1));
  console.log("aa", s.repeat(2));
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", s.repeat(50));
  s = "abc";
  console.log("", s.repeat(0));
  console.log("", s.repeat(NaN));
  console.log("abc", s.repeat(1));
  console.log("abcabc", s.repeat(2));
  console.log("abcabcabcabcabcabcabcabcabcabc", s.repeat(10));

  try {
    s.repeat(-1);
  } catch (e) {
    ;
  }

  try {
    s.repeat(-Infinity);
  } catch (e) {
    ;
  }

  try {
    s.repeat(Infinity);
  } catch (e) {
    ;
  }

  console.log("\0\0\0\0", "\0".repeat(4));
  console.log("a\0ba\0ba\0b", "a\0b".repeat(3));
  console.log("\0abc\0\0abc\0\0abc\0", "\0abc\0".repeat(3));
}

t5();

function t6() {
  try {
    String.prototype.startsWith.call();
  } catch (e) {
    ;
  }

  try {
    String.prototype.startsWith.call(undefined);
  } catch (e) {
    ;
  }

  try {
    String.prototype.startsWith.call(undefined, "", 0);
  } catch (e) {
    ;
  }

  try {
    String.prototype.startsWith.call(null);
  } catch (e) {
    ;
  }

  try {
    String.prototype.startsWith.call(null, "", 0);
  } catch (e) {
    ;
  }

  var s;
  s = "";
  console.log(s.startsWith(""));
  console.log(s.startsWith("anything"));
  console.log(s.startsWith("", 1));
  console.log(s.startsWith("", Infinity));
  s = "abcdefghijklmnopqrstuvwxyz";
  console.log(s.startsWith(""));
  console.log(s.startsWith("a"));
  console.log(s.startsWith("abc"));
  console.log(s.startsWith("abcdefghijklm"));
  console.log(s.startsWith("abcdefghijklmnopqrstuvwxyz"));
  console.log(s.startsWith("bcd"));
  console.log(s.startsWith("mnopqrstuv"));
  console.log(s.startsWith("xyz"));
  console.log(s.startsWith("abczzz"));
  console.log(s.startsWith("", 3));
  console.log(s.startsWith("", 26));
  console.log(s.startsWith("", Infinity));
  console.log(s.startsWith("abcd", -Infinity));
  console.log(s.startsWith("bcd", 1));
  console.log(s.startsWith("mnopqrstuv", 12));
  console.log(s.startsWith("xyz", 23));
  console.log(s.startsWith("z", 25));
  console.log(s.startsWith("z", 26));
  s = "abc\0def";
  console.log(s.startsWith("abc\0def"));
  console.log(s.startsWith("abc\0d"));
  console.log(s.startsWith("abc\0"));
  console.log(s.startsWith("abc\0abc"));
  console.log(s.startsWith("def\0abc"));
  console.log(s.startsWith("\0def", 3));
  var n = 12345;
  console.log(String.prototype.startsWith.call(n, "123"));
  console.log(String.prototype.startsWith.call(n, "45"));
}

t6();
verifyThrowsIfRegExpSearchString.bind(undefined, "startsWith");

function t7() {
  try {
    String.prototype.endsWith.call();
  } catch (e) {
    ;
  }

  try {
    String.prototype.endsWith.call(undefined);
  } catch (e) {
    ;
  }

  try {
    String.prototype.endsWith.call(undefined, "", 0);
  } catch (e) {
    ;
  }

  try {
    String.prototype.endsWith.call(null);
  } catch (e) {
    ;
  }

  try {
    String.prototype.endsWith.call(null, "", 0);
  } catch (e) {
    ;
  }

  var s;
  s = "";
  console.log(s.endsWith(""));
  console.log(s.endsWith("anything"));
  console.log(s.endsWith("", -1));
  console.log(s.endsWith("", Infinity));
  s = "abcdefghijklmnopqrstuvwxyz";
  console.log(s.endsWith(""));
  console.log(s.endsWith("z"));
  console.log(s.endsWith("xyz"));
  console.log(s.endsWith("nopqrstuvwxyz"));
  console.log(s.endsWith("abcdefghijklmnopqrstuvwxyz"));
  console.log(s.endsWith("wxy"));
  console.log(s.endsWith("mnopqrstuv"));
  console.log(s.endsWith("abc"));
  console.log(s.endsWith("aaaxyz"));
  console.log(s.endsWith("", 23));
  console.log(s.endsWith("", 0));
  console.log(s.endsWith("wxyz", Infinity));
  console.log(s.endsWith("", -Infinity));
  console.log(s.endsWith("wxy", 25));
  console.log(s.endsWith("mnopqrstuv", 22));
  console.log(s.endsWith("abc", 3));
  console.log(s.endsWith("a", 1));
  console.log(s.endsWith("a", 0));
  s = "abc\0def";
  console.log(s.endsWith("abc\0def"));
  console.log(s.endsWith("c\0def"));
  console.log(s.endsWith("\0def"));
  console.log(s.endsWith("abc\0abc"));
  console.log(s.endsWith("def\0abc"));
  console.log(s.endsWith("abc\0", 4));
  var n = 12345;
  console.log(String.prototype.endsWith.call(n, "345"));
  console.log(String.prototype.endsWith.call(n, "12"));
}

t7();
verifyThrowsIfRegExpSearchString.bind(undefined, "endsWith");

function t8() {
  try {
    String.prototype.includes.call();
  } catch (e) {
    ;
  }

  try {
    String.prototype.includes.call(undefined);
  } catch (e) {
    ;
  }

  try {
    String.prototype.includes.call(undefined, "", 0);
  } catch (e) {
    ;
  }

  try {
    String.prototype.includes.call(null);
  } catch (e) {
    ;
  }

  try {
    String.prototype.includes.call(null, "", 0);
  } catch (e) {
    ;
  }

  var s;
  s = "";
  console.log(s.includes(""));
  console.log(s.includes("anything"));
  console.log(s.includes("", 1));
  console.log(s.includes("", Infinity));
  s = "abcdefghijklmnopqrstuvwxyz";
  console.log(s.includes(""));
  console.log(s.includes("abc"));
  console.log(s.includes("xyz"));
  console.log(s.includes("z"));
  console.log(s.includes("ijklmno"));
  console.log(s.includes("abczzz"));
  console.log(s.includes("xyzaaa"));
  console.log(s.includes("zaaa"));
  console.log(s.includes("ijklxyz"));
  console.log(s.includes("", 26));
  console.log(s.includes("", Infinity));
  console.log(s.includes("abc", -Infinity));
  console.log(s.includes("z", 26));
  console.log(s.includes("z", 25));
  console.log(s.includes("y", 25));
  console.log(s.includes("abc", 1));
  console.log(s.includes("mnop", 5));
  console.log(s.includes("efg", 4));
  s = "abc\0def";
  console.log(s.includes("abc\0def"));
  console.log(s.includes("abc\0d"));
  console.log(s.includes("abc\0"));
  console.log(s.includes("\0def"));
  console.log(s.includes("abc\0abc"));
  console.log(s.includes("def\0abc"));
  console.log(s.includes("\0def", 3));
  var n = 12345;
  console.log(String.prototype.includes.call(n, "34"));
  console.log(String.prototype.includes.call(n, "7"));
}

t8();
verifyThrowsIfRegExpSearchString.bind(undefined, "includes");

function t9() {
  console.log(1, String.fromCodePoint.length);
}

t9();
