console.log("Tests for Array.prototype.findIndex");
Array.prototype.findIndex.length;
Array.prototype.findIndex.name;

function passUndefined(element, index, array) {
  return typeof element === "undefined";
}

function passZero(element, index, array) {
  return element === 0;
}

function passNull(element, index, array) {
  return element === null;
}

function passFalse(element, index, array) {
  return element === false;
}

function passEmptyString(element, index, array) {
  return element === "";
}

function passEven(a) {
  return !(a & 1);
}

function passAfter5(element, index) {
  return index >= 5;
}

function toObject(array) {
  var result = {};
  result.length = array.length;

  for (var i in array) {
    result[i] = array[i];
  }

  result.findIndex = Array.prototype.findIndex;
  return result;
}

function findItemAddedDuringSearch(element, index, array) {
  if (index === 0) {
    array.push(array.length);
  }

  return index === array.length - 1;
}

function findItemRemovedDuringSearch(element, index, array) {
  if (index === 0) {
    array.shift();
  }

  return index === 0 && array[0] === element;
}

var arrayWithHoles = [];
arrayWithHoles[1] = 0;
arrayWithHoles[3] = null;
arrayWithHoles[5] = false;
arrayWithHoles[7] = "";

function numberOfCallbacksInFindIndexInArrayWithHoles() {
  var count = 0;
  arrayWithHoles.find(function (element, index, array) {
    console.log("find callback called with index " + index);
    count++;
  });
  return count;
}

[undefined, 0, null, false, ''].findIndex(passUndefined);
[undefined, 0, null, false, ''].findIndex(passZero);
[undefined, 0, null, false, ''].findIndex(passNull);
[undefined, 0, null, false, ''].findIndex(passFalse);
[undefined, 0, null, false, ''].findIndex(passEmptyString);
[0, null, false, ''].findIndex(passUndefined);
[undefined, 0, false, ''].findIndex(passNull);
[undefined, 0, null, ''].findIndex(passFalse);
[undefined, 0, null, false].findIndex(passEmptyString);
[undefined, null, false, ''].findIndex(passZero);
console.log("Array with holes");
new Array(20).findIndex(passUndefined);
arrayWithHoles.findIndex(passUndefined);
arrayWithHoles.findIndex(passZero);
arrayWithHoles.findIndex(passNull);
arrayWithHoles.findIndex(passFalse);
arrayWithHoles.findIndex(passEmptyString);
arrayWithHoles[0] = {};
arrayWithHoles.findIndex(passUndefined);
console.log("Generic Object");
toObject([undefined, 0, null, false, '']).findIndex(passUndefined);
toObject([undefined, 0, null, false, '']).findIndex(passZero);
toObject([undefined, 0, null, false, '']).findIndex(passNull);
toObject([undefined, 0, null, false, '']).findIndex(passFalse);
toObject([undefined, 0, null, false, '']).findIndex(passEmptyString);
toObject([0, null, false, '']).findIndex(passUndefined);
toObject([undefined, 0, false, '']).findIndex(passNull);
toObject([undefined, 0, null, '']).findIndex(passFalse);
toObject([undefined, 0, null, false]).findIndex(passEmptyString);
toObject([undefined, null, false, '']).findIndex(passZero);
toObject(new Array(20)).findIndex(passUndefined);
console.log("Array-like object with invalid lengths");

var throwError = function throwError() {
  throw new Error("should not reach here");
};

var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: 0
};
Array.prototype.findIndex.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -0
};
Array.prototype.findIndex.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -3
};
Array.prototype.findIndex.call(obj, throwError);
console.log("Modification during search");
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].findIndex(findItemAddedDuringSearch);
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].findIndex(findItemRemovedDuringSearch);
console.log("Exceptions");

try {
  Array.prototype.findIndex.call(undefined, function () {
    ;
  });
} catch (e) {
  ;
}

try {
  Array.prototype.findIndex.call(null, function () {
    ;
  });
} catch (e) {
  ;
}

try {
  [].findIndex(1);
} catch (e) {
  ;
}

try {
  [].findIndex('hello');
} catch (e) {
  ;
}

try {
  [].findIndex([]);
} catch (e) {
  ;
}

try {
  [].findIndex({});
} catch (e) {
  ;
}

try {
  [].findIndex(null);
} catch (e) {
  ;
}

try {
  [].findIndex(undefined);
} catch (e) {
  ;
}

console.log("Callbacks in the expected order and *not* skipping holes");
numberOfCallbacksInFindIndexInArrayWithHoles();
