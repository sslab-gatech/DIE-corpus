//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Subclassable async tests -- verifies subclass async behaviors
function t1(testNum, testName) {
  var s = "";

  class P extends Promise {}

  var p1 = new P(function (resolve, reject) {
    resolve("foo");
  });
  var p2 = new P(function (resolve, reject) {
    reject("quux");
  });
  s += "a";
  console.log(p1 instanceof P);

  function thenFn(result) {
    assert.isTrue(result === "foo");
    s += 'b';
  }

  function catchFn(result) {
    assert.isTrue(result === "quux");
    s += 'c';
  }

  function shouldNotRun(result) {
    assert.isTrue(false);
  }

  p1.then(thenFn, shouldNotRun);
  p2.then(shouldNotRun, catchFn);
  p1.catch(shouldNotRun);
  p2.catch(catchFn);
  p1.then(function () {
    // P.prototype.then() should return a new P
    console.log(p1.then() instanceof P && p1.then() !== p1);
    s += 'd';
    check();
  });

  function check() {
    console.log("Result of test #" + testNum + " " + testName);
    console.log(s);
  }
}

t1(1, "1");

function t2(testNum, testName) {
  var s = "";

  class P extends Promise {}

  var fulfills = P.all([new Promise(function (resolve) {
    resolve("foo");
  }), new Promise(function (resolve) {
    resolve("foo");
  })]);
  s += "a";
  var rejects = P.all([new Promise(function (_, reject) {
    reject("bar");
  }), new Promise(function (_, reject) {
    reject("bar");
  })]);
  console.log(fulfills instanceof P);
  fulfills.then(function (result) {
    console.log(result + "" === "foo,foo");
    s += 'b';
  });
  rejects.catch(function (result) {
    console.log(result === "bar");
    s += 'c';
    check();
  });

  function check() {
    console.log("Result of test #" + testNum + " " + testName);
    console.log(s);
  }
}

t2(2, "2");

function t3(testNum, testName) {
  var s = "";

  class P extends Promise {}

  var fulfills = P.race([new Promise(function (resolve) {
    resolve("foo");
  }), new Promise(function (_, reject) {
    reject("bar");
  })]);
  s += "a";
  var rejects = P.race([new Promise(function (_, reject) {
    reject("baz");
  }), new Promise(function (resolve) {
    resolve("qux");
  })]);
  console.log(fulfills instanceof P);
  fulfills.then(function (result) {
    console.log(result === "foo");
    s += 'b';
  });
  rejects.catch(function (result) {
    console.log(result === "baz");
    s += 'c';
    check();
  });

  function check() {
    console.log("Result of test #" + testNum + " " + testName);
    console.log(s);
  }
}

t3(3, "3");
