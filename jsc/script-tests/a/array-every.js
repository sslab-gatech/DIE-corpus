console.log("This test checks the behavior of the every() method on Array objects.");
Array.prototype.every.length;
Array.prototype.every.name;
console.log("");
console.log("1.0 Single Argument Testing");

function isBigEnough(element, index, array) {
  return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnough);
[12, 54, 18, 130, 44].every(isBigEnough);
console.log("");
console.log("2.0 Two Argument Testing");
var predicate = {
  comparison: 11,
  isBigEnough: function (s) {
    return s >= comparison;
  }
};
[12, 5, 10, 130, 44].every(isBigEnough, predicate);
[12, 54, 18, 130, 44].every(isBigEnough, predicate);
console.log("");
console.log("3.0 Array Mutation Tests");
console.log("");
console.log("3.1 Array Element Removal");

function isBigEnoughAndPop(element, index, array) {
  array.pop();
  return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnoughAndPop);
[12, 54, 18, 130, 44].every(isBigEnoughAndPop);
console.log("");
console.log("3.2 Array Element Changing");

function isBigEnoughAndChange(element, index, array) {
  array[array.length - 1 - index] = 5;
  return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnoughAndChange);
[12, 54, 18, 130, 44].every(isBigEnoughAndChange);
console.log("");
console.log("3.3 Array Element Addition");

function isBigEnoughAndPush(element, index, array) {
  array.push(131);
  return element >= 131;
}

[12, 5, 8, 130, 44].every(isBigEnoughAndPush);
[12, 54, 18, 130, 44].every(isBigEnoughAndPush);
console.log("");
console.log("4.0 Exception Test");

function isBigEnoughAndException(element, index, array) {
  if (index == 1) {
    throw "exception from function";
  }

  return element >= 10;
}

try {
  [12, 5, 8, 130, 44].every(isBigEnoughAndException);
} catch (e) {
  ;
}

try {
  [12, 54, 18, 130, 44].every(isBigEnoughAndException);
} catch (e) {
  ;
}

console.log("");
console.log("5.0 Wrong Type for Callback Test");

try {
  [12, 5, 8, 130, 44].every(5);
} catch (e) {
  ;
}

try {
  [12, 5, 8, 130, 44].every('wrong');
} catch (e) {
  ;
}

try {
  [12, 5, 8, 130, 44].every(new Object());
} catch (e) {
  ;
}

try {
  [12, 5, 8, 130, 44].every(null);
} catch (e) {
  ;
}

try {
  [12, 5, 8, 130, 44].every(undefined);
} catch (e) {
  ;
}

try {
  [12, 5, 8, 130, 44].every();
} catch (e) {
  ;
}

console.log("");
console.log('6.0 Early Exit ("Short Circuiting")');
var accumulator = new Array();

function isBigEnoughShortCircuit(element, index, array) {
  accumulator.push(element);
  return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnoughShortCircuit);
accumulator.toString();
accumulator.length = 0;
[12, 54, 18, 130, 44].every(isBigEnoughShortCircuit);
accumulator.toString();
console.log("");
console.log('7.0 Behavior for Holes in Arrays');
var arr = [5, 5, 5, 5];
delete arr[1];

function isNotUndefined(element, index, array) {
  return typeof element !== "undefined";
}

arr.every(isNotUndefined);
arr = new Array(20);
arr.every(isNotUndefined);
console.log("");
console.log("8.0 Array-like object with invalid lengths");

var throwError = function throwError() {
  throw new Error("should not reach here");
};

var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: 0
};
Array.prototype.every.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -0
};
Array.prototype.every.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -3
};
Array.prototype.every.call(obj, throwError);
console.log("");
