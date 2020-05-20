//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Iterators for-of loop tests -- verifies the for-of loop behavior
var emptyIterator = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return {
          done: true,
          value: 0
        };
      }
    };
  }
};
var simpleIterator = {
  [Symbol.iterator]: function () {
    return {
      i: 0,
      next: function () {
        return {
          done: this.i == 3,
          value: this.i++
        };
      }
    };
  }
};
var infiniteIterator = {
  [Symbol.iterator]: function () {
    return {
      i: 0,
      next: function () {
        return {
          done: false,
          value: this.i++
        };
      }
    };
  }
};

function t1() {
  var i = 0;
  var a = [];
  console.log(undefined, x);

  for (var x of simpleIterator) {
    a.push(x);
    console.log(i++, x);
  }

  console.log([0, 1, 2], a);
  console.log(2, x);
}

t1();

function t2() {
  var i = 0;
  var a = [];

  try {
    x;
  } catch (e) {
    ;
  }

  for (let x of simpleIterator) {
    a.push(x);
    console.log(i++, x);
    x = 5;
    console.log(5, x);
  }

  console.log([0, 1, 2], a);

  try {
    x;
  } catch (e) {
    ;
  }
}

t2();

function t3() {
  var i = 0;
  var a = [];
  var x;

  for (x of simpleIterator) {
    a.push(x);
    console.log(i++, x);
  }

  console.log([0, 1, 2], a);
  console.log(2, x);

  try {
    "use strict";

    for (y of simpleIterator) {
      ;
    }
  } catch (e) {
    ;
  }
}

t3();

function t4() {
  var i = 0;
  var a = [];
  var callCount = 0;
  var o = {
    i: 0,
    f: function () {
      callCount++;
      return this;
    }
  };

  for (o.f().i of simpleIterator) {
    a.push(o.i);
    console.log(i++, o.i);
  }

  console.log([0, 1, 2], a);
  console.log(3, callCount);
  console.log(2, o.i);
}

t4();

function t5() {
  for (let x of emptyIterator) {
    assert.fail("loop body should not execute");
  }
}

t5();

function t6() {
  var iterationCount = 0;
  var nonContinueCount = 0;

  for (var x of infiniteIterator) {
    iterationCount++;

    if (x == 3 || x == 5 || x == 7) {
      continue;
    }

    nonContinueCount++;

    if (x == 9) {
      break;
    }
  }

  console.log(10, iterationCount);
  console.log(7, nonContinueCount);
  console.log(9, x);
}

t6();

function t7() {
  try {
    for (let x of undefined) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of null) {
      ;
    }
  } catch (e) {
    ;
  }
}

t7();

function t8() {
  var iteratorReturnsNull = {
    [Symbol.iterator]: function () {
      return null;
    }
  };
  var iteratorReturnsUndefined = {
    [Symbol.iterator]: function () {
      return undefined;
    }
  };
  var iteratorReturnsBoolean = {
    [Symbol.iterator]: function () {
      return true;
    }
  };
  var iteratorReturnsNumber = {
    [Symbol.iterator]: function () {
      return 10;
    }
  };
  var iteratorReturnsString = {
    [Symbol.iterator]: function () {
      return "hello";
    }
  };
  var iteratorReturnsSymbol = {
    [Symbol.iterator]: function () {
      return Symbol();
    }
  };

  try {
    for (let x of iteratorReturnsNull) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of iteratorReturnsUndefined) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of iteratorReturnsBoolean) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of iteratorReturnsNumber) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of iteratorReturnsString) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of iteratorReturnsSymbol) {
      ;
    }
  } catch (e) {
    ;
  }
}

t8();

function t9() {
  try {
    for (let x of {}) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of {
      [Symbol.iterator]: {}
    }) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of 0) {
      ;
    }
  } catch (e) {
    ;
  }
}

t9();

function t10() {
  var iteratorNoNextMethod = {
    [Symbol.iterator]: function () {
      return {};
    }
  };
  var iteratorResultNotObject = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          return undefined;
        }
      };
    }
  };
  var iteratorNoDoneProperty = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          return {};
        }
      };
    }
  };
  var iteratorNoValuePropertyWhenDoneIsFalse = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          return {
            done: false
          };
        }
      };
    }
  };

  try {
    for (let x of iteratorNoNextMethod) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of iteratorResultNotObject) {
      ;
    }
  } catch (e) {
    ;
  }

  for (let x of iteratorNoDoneProperty) {
    // infinite loop because no done property produces undefined which ToBooleans to false
    console.log(undefined, x);
    break;
  }

  for (let x of iteratorNoValuePropertyWhenDoneIsFalse) {
    console.log(undefined, x);
    break;
  }
}

t10();

function t11() {
  var a = [];
  var i = 0;

  for (let of of simpleIterator) {
    a.push(of);
    console.log(i++, of);
  }

  console.log([0, 1, 2], a);
  a = [];
  i = 0;

  for (let of in {
    a0: 0,
    a1: 0,
    a2: 0
  }) {
    a.push(of);
    console.log('a' + i++, of);
  }

  console.log(['a0', 'a1', 'a2'], a); // These two cases would be ambiguous if the spec allowed 'let' to start
  // the LHSExpression of the LHSExpression form of for-of loops
  //
  // for (let of of [0]) { }
  // for (let of of ([0])) { }

  a = [];
  i = 0;

  for (let of of [0]) {
    a.push(of);
    console.log(i++, of);
  }

  console.log([0], a);
  a = [];
  i = 0;

  for (let of of [0]) {
    a.push(of);
    console.log(i++, of);
  }

  console.log([0], a); // Make sure for loop still works using let to declare of variable

  for (let of; false;) {
    ;
  }

  for (let of, bar; false;) {
    ;
  }

  for (let of = 10; false;) {
    ;
  } // 'let' cannot be used as an identifier name at the beginning of the LHSExpression of a for-of
  // and thus 'for (let of' always parses as a let declaration of a variable named 'of'.


  a = [];
  i = 0;
  var let;

  for (let i of simpleIterator) {
    a.push(let);
    console.log(i++, let);
  }

  console.log([0, 1, 2], a);
  console.log(2, let);
}

t11();

function t12() {
  var iterationCount = 0;
  var nonContinueCount = 0;

  while (true) {
    for (var x of infiniteIterator) {
      iterationCount++;

      if (x == 3 || x == 5 || x == 7) {
        continue;
      }

      nonContinueCount++;

      if (x == 9) {
        break;
      }
    } // non-trivialize the while(true) loop's break
    // to avoid optimizing away the while loop.


    if (infiniteIterator) {
      break;
    }
  }

  console.log(10, iterationCount);
  console.log(7, nonContinueCount);
  console.log(9, x);
  var outerCount = 0;
  var innerCount = 0;

  outer: for (var x of infiniteIterator) {
    outerCount++;

    for (var y of infiniteIterator) {
      innerCount++;

      if (x + y === 0) {
        break;
      }

      if (x + y === 1) {
        continue;
      }

      if (y === 1) {
        continue outer;
      }

      if (x === 2) {
        break outer;
      }
    }
  }

  console.log(3, outerCount);
  console.log(4, innerCount);
  var aCount = 0;
  var bCount = 0;
  var cCount = 0;

  do {
    aCount++;

    for (var x of infiniteIterator) {
      bCount++;

      for (var i = 0; true; i++) {
        cCount++;
        break;
      }

      break;
    }

    break;
  } while (true);

  console.log(1, aCount);
  console.log(1, bCount);
  console.log(1, cCount);
}

t12();
