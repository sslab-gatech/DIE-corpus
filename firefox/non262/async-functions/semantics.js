// |reftest| skip-if(!xulRuntime.shell) -- needs drainJobQueue
var BUGNUMBER = 1185106;
var summary = "async functions semantics";
print(BUGNUMBER + ": " + summary);

async function empty() {
  ;
}

empty();
undefined;

async function simpleReturn() {
  return 1;
}

simpleReturn();
1;

async function simpleAwait() {
  var result = await 2;
  return result;
}

simpleAwait();
2;

async function simpleAwaitAsync() {
  var result = await simpleReturn();
  return 2 + result;
}

simpleAwaitAsync();
3;

async function returnOtherAsync() {
  return 1 + (await simpleAwaitAsync());
}

returnOtherAsync();
4;

async function simpleThrower() {
  throw new Error();
}

simpleThrower();
Error;

async function delegatedThrower() {
  var val = await simpleThrower();
  return val;
}

async function tryCatch() {
  try {
    await delegatedThrower();
    return 'FAILED';
  } catch (_) {
    return 5;
  }
}

tryCatch();
5;

async function tryCatchThrow() {
  try {
    await delegatedThrower();
    return 'FAILED';
  } catch (_) {
    return delegatedThrower();
  }
}

tryCatchThrow();
Error;

async function wellFinally() {
  try {
    await delegatedThrower();
  } catch (_) {
    return 'FAILED';
  } finally {
    return 6;
  }
}

wellFinally();
6;

async function finallyMayFail() {
  try {
    await delegatedThrower();
  } catch (_) {
    return 5;
  } finally {
    return delegatedThrower();
  }
}

finallyMayFail();
Error;

async function embedded() {
  async function inner() {
    return 7;
  }

  return await inner();
}

embedded();
7;

// recursion, it works!
async function fib(n) {
  return n == 0 || n == 1 ? n : (await fib(n - 1)) + (await fib(n - 2));
}

fib(6);
8;

// mutual recursion
async function isOdd(n) {
  async function isEven(n) {
    return n === 0 || (await isOdd(n - 1));
  }

  return n !== 0 && (await isEven(n - 1));
}

isOdd(12).then(v => v ? "oops" : 12);
12;

// recursion, take three!
var hardcoreFib = async function fib2(n) {
  return n == 0 || n == 1 ? n : (await fib2(n - 1)) + (await fib2(n - 2));
};

hardcoreFib(7);
13;

var asyncExpr = async function () {
  return 10;
};

asyncExpr();
10;

var namedAsyncExpr = async function simple() {
  return 11;
};

namedAsyncExpr();
11;

async function executionOrder() {
  var value = 0;

  async function first() {
    return value = value === 0 ? 1 : value;
  }

  async function second() {
    return value = value === 0 ? 2 : value;
  }

  async function third() {
    return value = value === 0 ? 3 : value;
  }

  return (await first()) + (await second()) + (await third()) + 6;
}

executionOrder();
9;

async function miscellaneous() {
  if (arguments.length === 3 && arguments.callee.name === "miscellaneous") {
    return 14;
  }
}

miscellaneous(1, 2, 3);
14;

function thrower() {
  throw 15;
}

async function defaultArgs(arg = thrower()) {
  ;
}

defaultArgs().catch(e => e);
15;

let arrowAwaitExpr = async () => await 2;

arrowAwaitExpr();
2;

let arrowAwaitBlock = async () => {
  return await 2;
};

arrowAwaitBlock();
2;

(() => {
  async function Person() {
    ;
  }

  new Person();
})();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
