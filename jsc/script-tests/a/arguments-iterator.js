console.log("This test checks the behavior of Arguments object iteration.");
var arguments = null;

try {
  (function (arguments) {
    for (var argument of arguments) {
      ;
    }
  })();
} catch (e) {
  ;
}

function test() {
  var i = 0;

  for (arg of arguments) {
    realArg = arguments[i++];
    arg === realArg;
  }

  iteratedArgumentsLength = i;
  actualArgumentsLength = arguments.length;
  actualArgumentsLength;
}

test();
test("a");
test("a", "b");
test({});

function testAlias() {
  var i = 0;
  var a = arguments;

  for (arg of a) {
    realArg = arguments[i++];
    arg === realArg;
  }

  iteratedArgumentsLength = i;
  actualArgumentsLength = arguments.length;
  actualArgumentsLength;
}

testAlias();
testAlias("a");
testAlias("a", "b");
testAlias({});

function testStrict() {
  "use strict";

  var i = 0;

  for (arg of arguments) {
    realArg = arguments[i++];
    arg === realArg;
  }

  iteratedArgumentsLength = i;
  actualArgumentsLength = arguments.length;
  actualArgumentsLength;
}

testStrict();
testStrict("a");
testStrict("a", "b");
testStrict({});

function testReifiedArguments() {
  var i = 0;
  arguments.expando = 1;

  for (arg of arguments) {
    realArg = arguments[i++];
    arg === realArg;
  }

  iteratedArgumentsLength = i;
  actualArgumentsLength = arguments.length;
  actualArgumentsLength;
}

testReifiedArguments();
testReifiedArguments("a");
testReifiedArguments("a", "b");
testReifiedArguments({});

function testEmptyArrayArguments() {
  arguments = [];

  for (arg of arguments) {
    fail("nothing to iterate");
    return false;
  }

  return true;
}

testEmptyArrayArguments('a');
testEmptyArrayArguments();

function testArrayArguments() {
  var i = 0;
  arguments = [1, 2, 3];

  for (arg of arguments) {
    realArg = arguments[i++];
    arg === realArg;
  }

  iteratedArgumentsLength = i;
  actualArgumentsLength = arguments.length;
  actualArgumentsLength;
}

testArrayArguments();
testArrayArguments("a");
testArrayArguments("a", "b");
testArrayArguments({});
