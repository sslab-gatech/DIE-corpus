//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function arrayEquals(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  var equals = true;

  for (var i = 0; equals && i < array1.length; ++i) {
    equals = equals && array1[i] === array2[i];
  }

  return equals;
}

function verifyRegExpObjectWhenExecIsNotCallable(propertyName, createRegExp) {
  var re = createRegExp();

  try {
    RegExp.prototype[propertyName].bind(re);
  } catch (e) {
    ;
  }
}

function verifyBuiltInSearchWhenExecIsNotCallable(setUp, cleanUp) {
  cleanUp = cleanUp || function () {
    ;
  };

  var result;
  var re = /search/;

  try {
    setUp(re);
    result = re[Symbol.search]("prefix search suffix");
  } finally {
    cleanUp();
  }

  result === 7;
}

function verifyStringMethodRequiresObjectCoercibleThis(propertyName, thisObj) {
  try {
    String.prototype[propertyName].bind(thisObj);
  } catch (e) {
    ;
  }
}

function verifyBuiltInSymbolMethod(stringPropertyName, additionalArguments, symbolName, symbol, createRegExp) {
  var toStringValue = "string value";
  var string = {
    toString: function () {
      return toStringValue;
    }
  };
  var symbolResult = 123;
  var callCount = 0;
  var passedANewRegEx = false;
  var coercedString = false;
  var passedAdditionalArguments = true;
  var re = createRegExp();
  var methodDescriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, symbol);
  var result;

  try {
    var method = function (stringArg, ...rest) {
      callCount += 1;
      passedANewRegEx = this !== re && this instanceof RegExp;
      coercedString = stringArg === string;
      passedAdditionalArguments = arrayEquals(rest, additionalArguments);
      return symbolResult;
    };

    Object.defineProperty(RegExp.prototype, symbol, {
      value: method
    });
    result = String.prototype[stringPropertyName].apply(string, [re].concat(additionalArguments));
  } finally {
    Object.defineProperty(RegExp.prototype, symbol, methodDescriptor);
  }

  console.log(symbolResult, result);
  console.log(1, callCount);
  console.log(passedANewRegEx);
  console.log(coercedString);
  console.log(passedAdditionalArguments);
}

function verifySymbolMethodExistence(symbol) {
  console.log(symbol in RegExp.prototype);
  var descriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, symbol);
  console.log(descriptor.configurable);
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
}

function verifySymbolMethodName(expectedName, symbol) {
  var func = RegExp.prototype[symbol];
  console.log(expectedName, func.name);
  var descriptor = Object.getOwnPropertyDescriptor(func, "name");
  console.log(descriptor.configurable);
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
}

function verifySymbolMethodLength(expectedLength, symbol) {
  var func = RegExp.prototype[symbol];
  console.log(expectedLength, func.length);
  var descriptor = Object.getOwnPropertyDescriptor(func, "length");
  console.log(descriptor.configurable);
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
}

function verifyMethodRequiresThisToBeObject(propertyName) {
  var nonObject = "string";
  assert.throws(RegExp.prototype[propertyName].bind(nonObject, ""), TypeError);
}

function withObservableRegExp(callback) {
  var originalExec = RegExp.prototype.exec; // helpers.withPropertyDeleted(RegExp.prototype, "exec", function () {

  var exec = function () {
    return originalExec.apply(this, arguments);
  };

  Object.defineProperty(RegExp.prototype, "exec", {
    writable: true,
    value: exec,
    configurable: true
  });
  callback();
}

function verifySymbolSplitResult(assertResult, re, ...args) {
  withObservableRegExp(function () {
    var result = re[Symbol.split](...args);
    console.log(result instanceof Array);
    result;
  });
}

function getFullMethodName(name) {
  return "RegExp.prototype[" + name + "]";
}

function testThisSameRegExp(thisObj, re) {
  return thisObj === re;
}

function testThisNewRegExp(thisObj, re) {
  return thisObj !== re && thisObj instanceof RegExp;
}

function t1() {
  var re = /./;

  var exec = function () {
    return null;
  };

  Object.defineProperty(re, "exec", {
    value: exec
  });
  var result = re.test("");
  console.log(result);
}

t1();

function t2() {
  var re = /./;

  var exec = function () {
    return {};
  };

  Object.defineProperty(re, "exec", {
    value: exec
  });
  var result = re.test("");
  console.log(result);
}

t2();

function t3() {
  var re = /(-)=/g;
  var passedCorrectArguments = false;
  var callCount = 0;
  var string = "a-=b-=c";

  var replace = function (matched, capture1, position, stringArg) {
    callCount += 1;
    passedCorrectArguments = matched === "-=" && capture1 === "-" && (position === 1 || position === 4) && stringArg === string;
    return "*";
  };

  var result = re[Symbol.replace](string, replace);
  console.log(2, callCount);
  console.log(passedCorrectArguments);
  console.log("a*b*c", result);
}

t3();

function t4() {
  var pattern = "(-)=";
  var string = "a-=b-=c";
  var replace = "*$&$1";

  function verify(assertMessagePrefix, expectedResult, flags) {
    var re = new RegExp("(-)=", flags);
    var result = re[Symbol.replace](string, replace);
    console.log(expectedResult, result);
  }

  verify("non-global", "a*-=-b-=c", "");
  verify("global", "a*-=-b*-=-c", "g");
}

t4();

function t5() {
  var re = {
    exec: function () {
      return null;
    }
  };
  var string = '';

  var replace = function () {
    return;
  };

  try {
    RegExp.prototype[Symbol.replace].bind(re, string, replace);
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var pattern = "(-)(=)";
  var string = "a-=b-=c";
  var replace = "*$&$1";

  function verify(assertMessagePrefix, expectedResult, expectedCallCount, flags) {
    withObservableRegExp(function () {
      var passedCorrectArguments = false;
      var callCount = 0;
      var re = new RegExp(pattern, flags);

      var replace = function (matched, capture1, capture2, position, stringArg) {
        callCount += 1;
        passedCorrectArguments = matched === "-=" && capture1 === "-" && capture2 === "=" && (position === 1 || position === 4) && stringArg === string;
        return "*";
      };

      var result = re[Symbol.replace](string, replace);
      console.log(expectedCallCount, callCount);
      console.log(passedCorrectArguments);
      console.log(expectedResult, result);
    });
  }

  verify("non-global", "a*b-=c", 1, "");
  verify("global", "a*b*c", 2, "g");
}

t6();

function t7() {
  var re = /a-/g;
  re.lastIndex = 1; // Will be reset to 0 by RegExp.prototype[@@replace]

  var string = "a-a-ba-";
  var replace = "*";
  var calledGlobal = false;

  var getGlobal = function () {
    calledGlobal = true;
    return true;
  };

  Object.defineProperty(re, "global", {
    get: getGlobal
  });
  var result = re[Symbol.replace](string, replace);
  console.log(calledGlobal);
  console.log("**b*", result);
}

t7();

function t8() {
  var re = /a-/;
  re.lastIndex = 1; // RegExpBuiltinExec will ignore this and start from 0

  var string = "a-a-ba-";
  var replace = "*";
  var result; // helpers.withPropertyDeleted(RegExp.prototype, "global", function () {

  result = re[Symbol.replace](string, replace); // });

  console.log("*a-ba-", result);
}

t8();

function t9() {
  var re = /(?:)/g;
  var string = "";
  var replace = "-";
  var calledUnicode = false;

  var getUnicode = function () {
    calledUnicode = true;
    return true;
  };

  Object.defineProperty(re, "unicode", {
    get: getUnicode
  });
  re[Symbol.replace](string, replace);
  console.log(calledUnicode);
}

t9();

function t10() {
  withObservableRegExp(function () {
    var string = "a-b-c";
    var result = /=/g[Symbol.replace](string, '*');
    console.log(string, result);
  });
}

t10();

function t11() {
  withObservableRegExp(function () {
    var string = "abc";
    var result = /(?:)/g[Symbol.replace](string, '-');
    result;
  });
}

t11();

function t12() {
  withObservableRegExp(function () {
    var string = "a-=b-=c";
    var replace = "*";

    function verify(assertMessagePrefix, expectedResult, flags) {
      var re = new RegExp("-=", flags);
      var result = re[Symbol.replace](string, replace);
      console.log(expectedResult, result);
    }

    verify("non-global", "a*b-=c", "");
    verify("global", "a*b*c", "g");
  });
}

t12();

function t13() {
  withObservableRegExp(function () {
    var re = /-=/g;
    var string = "a-=b-=c";
    var replace = {
      toString: function () {
        return "*";
      }
    };
    var result = re[Symbol.replace](string, replace);
    result;
  });
}

t13();

function t14() {
  withObservableRegExp(function () {
    var re = /(-)(=)/g;
    var string = "a-=b-=c";
    var replace = "*$1$2+";
    var result = re[Symbol.replace](string, replace);
    result;
  });
}

t14(); // Spec leaves this up to the implementations. Since String.prototype.replace keeps a group
// reference as is when it is unknown, RegExp.prototype[@@replace] does the same.

function t15() {
  withObservableRegExp(function () {
    var re = /(-)/g;
    var string = "a-b";
    var replace = "*$2+";
    var result = re[Symbol.replace](string, replace);
    result;
  });
}

t15();

function t16() {
  withObservableRegExp(function () {
    var re = /(-)|(=)/g;
    var string = "a-b";
    var replace = "*$2+";
    var result = re[Symbol.replace](string, replace);
    result;
  });
}

t16();

function t17() {
  withObservableRegExp(function () {
    var re = /-=/g;
    var string = "a-=b-=c";
    var replace = "*$$+";
    var result = re[Symbol.replace](string, replace);
    result;
  });
}

t17();

function t18() {
  withObservableRegExp(function () {
    var re = /-=/g;
    var string = "a-=b-=c";
    var replace = "*$&+";
    var result = re[Symbol.replace](string, replace);
    result;
  });
}

t18();

function t19() {
  withObservableRegExp(function () {
    var re = /-=/g;
    var string = "a-=b-=c";
    var replace = "*$`+";
    var result = re[Symbol.replace](string, replace);
    result;
    ;
  });
}

t19();

function t20() {
  withObservableRegExp(function () {
    var re = /-=/g;
    var string = "a-=b-=c";
    var replace = "*$'+";
    var result = re[Symbol.replace](string, replace);
    result;
    ;
  });
}

t20();

function t21() {
  withObservableRegExp(function () {
    var re = /-=/g;
    var string = "a-=b-=c";
    var replace = "*$x+";
    var result = re[Symbol.replace](string, replace);
    result;
    ;
  });
}

t21();

function t22() {
  withObservableRegExp(function () {
    var re = /-=/;
    var string = "a-=b";
    var replace = "*$1+";

    re.exec = function () {
      return {
        index: 1,
        length: 2,
        0: "-=",
        1: {
          toString: function () {
            return "-";
          }
        }
      };
    };

    var result = re[Symbol.replace](string, replace);
    result;
    ;
  });
}

t22();

function t23() {
  var re = /-=/g;
  var string = "a-b--c";
  var replace = "*";
  var execResults = [{
    index: 3,
    length: 1,
    0: "-"
  }, {
    index: 4,
    length: 1,
    0: "-"
  }, {
    index: 1,
    // 'exec' isn't supposed to go backward
    length: 1,
    0: "-"
  }, null];
  var execResultIndex = 0;
  re.exec = Array.prototype.shift.bind(execResults);
  var result = re[Symbol.replace](string, replace);
  result;
}

t23();

function t24() {
  var execDescriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, "exec");

  var setUp = function () {
    delete RegExp.prototype.exec;
  };

  var cleanUp = function () {
    Object.defineProperty(RegExp.prototype, "exec", execDescriptor);
  };

  verifyBuiltInSearchWhenExecIsNotCallable(setUp, cleanUp);
}

t24();

function t25() {
  var setUp = function (re) {
    Object.defineProperty(re, "exec", {
      value: 0
    });
  };

  verifyBuiltInSearchWhenExecIsNotCallable(setUp);
}

t25();

function t26() {
  var re = /./;

  var exec = function (execString) {
    return null;
  };

  Object.defineProperty(re, "exec", {
    value: exec
  });
  var result = re[Symbol.search]();
  console.log(-1, result);
}

t26();

function t27() {
  var re = /./;
  var index = 123;

  var exec = function (execString) {
    return {
      index: index
    };
  };

  Object.defineProperty(re, "exec", {
    value: exec
  });
  var result = re[Symbol.search]();
  console.log(index, result);
}

t27();

function t28() {
  var re = /./;
  re.lastIndex = 100;
  var setLastIndexToZero = false;

  var exec = function (execString) {
    setLastIndexToZero = this.lastIndex === 0;
    return null;
  };

  Object.defineProperty(re, "exec", {
    value: exec
  });
  re[Symbol.search]();
  console.log(setLastIndexToZero);
}

t28();

function t29() {
  var re = /./;
  var initialLastIndex = 100;
  re.lastIndex = initialLastIndex;
  re[Symbol.search]();
  console.log(initialLastIndex, re.lastIndex);
}

t29();

function t30() {
  var re = {
    exec: function () {
      return null;
    },

    get lastIndex() {
      return 123;
    }

  };

  try {
    RegExp.prototype[Symbol.search].bind(re);
  } catch (e) {
    ;
  }
}

t30();

function t31() {
  var pattern = "(a)-";
  var nonGlobalRe = new RegExp(pattern);
  var nonGlobalInput = "-a-a-";
  var result = nonGlobalRe[Symbol.match](nonGlobalInput);
  console.log(1, result.index);
  console.log("a-", result[0]);
  console.log("a", result[1]);
  console.log(nonGlobalInput, result.input);
  var globalRe = new RegExp(pattern, "gy");
  globalRe.lastIndex = 1;
  result = globalRe[Symbol.match]("a-a-aba-");
  console.log(2, result.length);
  console.log("a-", result[0]);
  console.log("a-", result[1]);
}

t31();

function t32() {
  var re = /a-/g;
  re.lastIndex = 1; // Will be reset to 0 by RegExp.prototype[@@match]

  var calledGlobal = false;

  var getGlobal = function () {
    calledGlobal = true;
    return true;
  };

  Object.defineProperty(re, "global", {
    get: getGlobal
  });
  var result = re[Symbol.match]("a-a-ba-");
  console.log(calledGlobal);
  console.log(3, result.length);
  console.log("a-", result[0]);
  console.log("a-", result[1]);
  console.log("a-", result[2]);
}

t32();

function t33() {
  var re = /a-/;
  re.lastIndex = 1; // RegExpBuiltinExec will ignore this and start from 0

  var result; // helpers.withPropertyDeleted(RegExp.prototype, "global", function () {

  result = re[Symbol.match]("a-a-ba-"); // });

  console.log(1, result.length);
  console.log("a-", result[0]);
}

t33();

function t34() {
  var re = /(?:)/g;
  var calledUnicode = false;

  var getUnicode = function () {
    calledUnicode = true;
    return true;
  };

  Object.defineProperty(re, "unicode", {
    get: getUnicode
  });
  var result = re[Symbol.match]("12");
  console.log(calledUnicode);
}

t34();

function t35() {
  var re = /./;
  var execResult = {
    dummy: "dummy"
  };

  var exec = function () {
    return execResult;
  };

  re.exec = exec;
  var result = re[Symbol.match]("string");
  console.log(execResult, result);
}

t35();

function t36() {
  var re = /./g;
  var execResults = [{
    0: "result 0"
  }, {
    0: "result 1"
  }, null];
  var execResultIndex = 0;

  var exec = function () {
    var result = execResults[execResultIndex];
    ++execResultIndex;
    return result;
  };

  re.exec = exec;
  var result = re[Symbol.match]("string");
  var expectedResult = execResults.filter(function (x) {
    return x !== null;
  }).map(function (x) {
    return x[0];
  });
  console.log(expectedResult, result);
}

t36();

function t37() {
  var re = /test(.)/; // Force the ES6 logic. Otherwise, we go though the ES5 codepath, which already
  // updates the constructor.

  var getGlobal = function () {
    var getterOnPrototype = Object.getOwnPropertyDescriptor(RegExp.prototype, 'global').get;
    return getterOnPrototype.call(this);
  };

  Object.defineProperty(re, "global", {
    get: getGlobal
  });
  "test1".match(re);
  console.log("test1", RegExp.input);
  console.log("1", RegExp.$1);
}

t37();

function t38() {
  var pattern = "-";
  var input = "-a-b--c-";

  function verify(assertMessagePrefix, re) {
    var result = re[Symbol.split](input);
    console.log(6, result.length);
    console.log("", result[0]);
    console.log("a", result[1]);
    console.log("b", result[2]);
    console.log("", result[3]);
    console.log("c", result[4]);
    console.log("", result[5]);
  }

  verify("non-sticky", new RegExp(pattern));
  verify("sticky", new RegExp(pattern, "y"));
}

t38();

function t39() {
  var re = /-/;
  var calledFlags = false;

  var getFlags = function () {
    calledFlags = true;
    return "";
  };

  Object.defineProperty(re, "flags", {
    get: getFlags
  });
  re[Symbol.split]("");
  console.log(calledFlags);
}

t39();

function t40() {
  var re = /./i;
  var ctorCalled = false;
  var ctorThis = undefined;
  var ctorArguments = undefined;
  var ctorResult = /different regexp/i;

  re.constructor = function () {
    ;
  };

  re.constructor[Symbol.species] = function () {
    ctorCalled = true;
    ctorThis = this;
    ctorArguments = arguments;
    return ctorResult;
  };

  re[Symbol.split]("123");
  console.log(ctorCalled);
  console.log(re, ctorArguments[0]);
  console.log("iy", ctorArguments[1]);
}

t40();

function t41() {
  function assertResult(result) {
    console.log(0, result.length);
  }

  var re = /(?:)/;
  var input = "";
  verifySymbolSplitResult(assertResult, re, input);
}

t41();

function t42() {
  function assertResult(result) {
    console.log(1, result.length);
    console.log("", result[0]);
  }

  var re = /./;
  var input = "";
  verifySymbolSplitResult(assertResult, re, input);
}

t42();

function t43() {
  function assertResult(result) {
    console.log(2, result.length);
    console.log("a", result[0]);
    console.log("b", result[1]);
  }

  var re = /(?:)/;
  var input = "ab";
  verifySymbolSplitResult(assertResult, re, input);
}

t43();

function t44() {
  function assertResult(result) {
    console.log(4, result.length);
    console.log("", result[0]);
    console.log("a", result[1]);
    console.log("b", result[2]);
    console.log("", result[3]);
  }

  var re = /-/;
  var input = "-a-b-";
  verifySymbolSplitResult(assertResult, re, input);
}

t44();

function t45() {
  function assertResult(result) {
    console.log(5, result.length);
    console.log("-", result[0]);
    console.log("a", result[1]);
    console.log("b", result[2]);
    console.log("c", result[3]);
    console.log("-", result[4]);
  }

  var re = /(a)(b)(c)/;
  var input = "-abc-";
  verifySymbolSplitResult(assertResult, re, input);
}

t45();

function t46() {
  function assertResult(result) {
    console.log(2, result.length);
    console.log("a", result[0]);
    console.log("b", result[1]);
  }

  var re = /-/;
  var input = "a-b-c";
  var limit = 2;
  verifySymbolSplitResult(assertResult, re, input, limit);
}

t46();

function t47() {
  function assertResult(result) {
    console.log(3, result.length);
    console.log("-", result[0]);
    console.log("a", result[1]);
    console.log("b", result[2]);
  }

  var re = /(a)(b)(c)/;
  var input = "-abc-";
  var limit = 3;
  verifySymbolSplitResult(assertResult, re, input, limit);
}

t47();

function t48() {
  var pattern = "pattern";
  var flags = "g";
  var re = new RegExp(pattern, flags);
  Object.defineProperty(re, "source", {
    value: "overridden source"
  });
  Object.defineProperty(re, "flags", {
    value: "i"
  });
  var newRe = new RegExp(re);
  console.log(pattern, newRe.source);
  console.log(flags, newRe.flags);
}

t48();

function t49() {
  var re = {
    [Symbol.match]: true,
    source: "a(b)+((c))?|123",
    flags: "gi"
  };
  var newRe = new RegExp(re);
  console.log(re.source, newRe.source);
  console.log(re.flags, newRe.flags);
}

t49();

function t50() {
  var re = {
    [Symbol.match]: true,
    flags: "gi"
  };
  var flagsArg = undefined;
  var newRe = new RegExp(re, flagsArg);
  console.log(re.flags, newRe.flags);
}

t50();

function t51() {
  var re = {
    [Symbol.match]: true,
    flags: "g"
  };
  var flagsArg = "i";
  var newRe = new RegExp(re, flagsArg);
  console.log(flagsArg, newRe.flags);
}

t51();

function t52() {
  var re = /./;
  re.constructor = RegExp;
  var newRe = RegExp(re);
  console.log(re, newRe);
}

t52();

function t53() {
  var re = /./;
  re.constructor = Object;
  var newRe = RegExp(re);
  console.log(re, newRe);
  console.log(newRe instanceof RegExp);
}

t53();

function t54() {
  var re = {
    [Symbol.match]: true
  };
  re.constructor = RegExp;
  var newRe = RegExp(re);
  console.log(re, newRe);
}

t54();

function t55() {
  var re = {
    [Symbol.match]: true
  };
  re.constructor = Object;
  var newRe = RegExp(re);
  console.log(re, newRe);
  console.log(newRe instanceof RegExp);
}

t55();
