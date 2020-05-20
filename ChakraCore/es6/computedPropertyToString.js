//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  var date = new Date(2011, 10, 30);
  var sym = Symbol("FAZ");

  var name0 = function () {
    var a = 1;
    var b = 2;
    var c = 3;
    return a + c + b;
  };

  var name1 = function () {
    var a = 1;
    var b = "1";
    var c = "b";
    return a + b + c;
  };

  var name2 = function () {
    var a = {};
    var b = date;
    var c = {};
    return a + b + c;
  };

  var name3 = function () {
    return NaN;
  };

  var name4 = function () {
    return undefined;
  };

  var name5 = function () {
    return null;
  };

  var name6 = function () {
    return true;
  };

  var name7 = function () {
    return false;
  };

  var name8 = function () {
    return sym;
  };

  var name9 = function () {
    return date;
  };

  var qux = class {
    [name0()]() {
      ;
    }

    [name1()]() {
      ;
    }

    [name2()]() {
      ;
    }

    [name3()]() {
      ;
    }

    [name4()]() {
      ;
    }

    [name5()]() {
      ;
    }

    [name6()]() {
      ;
    }

    [name7()]() {
      ;
    }

    [name8()]() {
      ;
    }

    [name9()]() {
      ;
    }

  };
  var quxObj = new qux();
  quxObj[name0()].name;
  quxObj[name1()].name;
  quxObj[name2()].name;
  quxObj[name3()].name;
  quxObj[name4()].name;
  quxObj[name5()].name;
  quxObj[name6()].name;
  quxObj[name7()].name;
  quxObj[name8()].name;
  quxObj[name9()].name;
  quxObj[name0()].toString();
  quxObj[name1()].toString();
  quxObj[name2()].toString();
  quxObj[name3()].toString();
  quxObj[name4()].toString();
  quxObj[name5()].toString();
  quxObj[name6()].toString();
  quxObj[name7()].toString();
  quxObj[name8()].toString();
  quxObj[name9()].toString();
}

test1();

function test2() {
  var date = new Date(2011, 10, 30);
  var a = 4;
  var b = 2;
  var c = "c";
  var qux = class {
    [1 + 4]() {
      ;
    }

    [date]() {
      ;
    }

    [a + b]() {
      ;
    }

    [a + c]() {
      ;
    }

    ["foo"]() {
      ;
    }

    ["fo\0o" + "bar"]() {
      ;
    }

  };
  var quxObj = new qux();
  quxObj[5].name;
  quxObj[date].name;
  quxObj[6].name;
  quxObj["4c"].name;
  quxObj["foo"].name;
  quxObj["fo\0obar"].name;
}

test2();
