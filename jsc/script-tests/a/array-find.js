console.log("Tests for Array.prototype.find");
Array.prototype.find.length;
Array.prototype.find.name;

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

  result.find = Array.prototype.find;
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

arrayWithHoles = [];
arrayWithHoles[1] = 0;
arrayWithHoles[3] = null;
arrayWithHoles[5] = false;
arrayWithHoles[7] = "";

function numberOfCallbacksInFindInArrayWithHoles() {
  var count = 0;
  arrayWithHoles.find(function (element, index, array) {
    console.log("find callback called with index " + index);
    count++;
  });
  return count;
}

[undefined, 0, null, false, ''].find(passUndefined);
[undefined, 0, null, false, ''].find(passZero);
[undefined, 0, null, false, ''].find(passNull);
[undefined, 0, null, false, ''].find(passFalse);
[undefined, 0, null, false, ''].find(passEmptyString);
[0, null, false, ''].find(passUndefined);
[undefined, 0, false, ''].find(passNull);
[undefined, 0, null, ''].find(passFalse);
[undefined, 0, null, false].find(passEmptyString);
[undefined, null, false, ''].find(passZero);
console.log("Array with holes");
new Array(20).find(passUndefined);
arrayWithHoles.find(passUndefined);
arrayWithHoles.find(passZero);
arrayWithHoles.find(passNull);
arrayWithHoles.find(passFalse);
arrayWithHoles.find(passEmptyString);
console.log("Generic Object");
toObject([undefined, 0, null, false, '']).find(passUndefined);
toObject([undefined, 0, null, false, '']).find(passZero);
toObject([undefined, 0, null, false, '']).find(passNull);
toObject([undefined, 0, null, false, '']).find(passFalse);
toObject([undefined, 0, null, false, '']).find(passEmptyString);
toObject([0, null, false, '']).find(passUndefined);
toObject([undefined, 0, false, '']).find(passNull);
toObject([undefined, 0, null, '']).find(passFalse);
toObject([undefined, 0, null, false]).find(passEmptyString);
toObject([undefined, null, false, '']).find(passZero);
toObject(new Array(20)).find(passUndefined);
console.log("Array-like object with invalid lengths");

var throwError = function throwError() {
  throw new Error("should not reach here");
};

try {
  var obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 0
  };
  Array.prototype.find.call(obj, throwError);
} catch (e) {
  ;
}

try {
  var obj = {
    0: 1,
    1: 2,
    2: 3,
    length: -0
  };
  Array.prototype.find.call(obj, throwError);
} catch (e) {
  ;
}

try {
  var obj = {
    0: 1,
    1: 2,
    2: 3,
    length: -3
  };
  Array.prototype.find.call(obj, throwError);
} catch (e) {
  ;
}

console.log("Modification during search");
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].find(findItemAddedDuringSearch);
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].find(findItemRemovedDuringSearch);
console.log("Exceptions");

try {
  Array.prototype.find.call(undefined, function () {
    ;
  });
} catch (e) {
  ;
}

try {
  Array.prototype.find.call(null, function () {
    ;
  });
} catch (e) {
  ;
}

try {
  [].find(1);
} catch (e) {
  ;
}

try {
  [].find('hello');
} catch (e) {
  ;
}

try {
  [].find([]);
} catch (e) {
  ;
}

try {
  [].find({});
} catch (e) {
  ;
}

try {
  [].find(null);
} catch (e) {
  ;
}

try {
  [].find(undefined);
} catch (e) {
  ;
}

console.log("Callbacks in the expected order and *not* skipping holes");
numberOfCallbacksInFindInArrayWithHoles();
