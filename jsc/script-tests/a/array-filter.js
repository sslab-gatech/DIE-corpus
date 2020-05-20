console.log("Tests for Array.prototype.filter");
Array.prototype.filter.length;
Array.prototype.filter.name;

function passUndefined(element, index, array) {
  return typeof element === "undefined";
}

function passEven(a) {
  return !(a & 1);
}

function passAfter5(element, index) {
  return index >= 5;
}

var sparseArrayLength = 10100;
mixPartialAndFast = new Array(sparseArrayLength);
mixPartialAndFast[sparseArrayLength - 1] = sparseArrayLength - 1;

for (var i = 0; i < 10; i++) {
  mixPartialAndFast[i] = i;
}

function toObject(array) {
  var result = {};
  result.length = array.length;

  for (var i in array) {
    result[i] = array[i];
  }

  result.filter = Array.prototype.filter;
  return result;
}

function reverseInsertionOrder(array) {
  var obj = toObject(array);
  var props = [];

  for (var i in obj) {
    props.push(i);
  }

  var result = {};

  for (var i = props.length - 1; i >= 0; i--) {
    result[props[i]] = obj[props[i]];
  }

  result.filter = Array.prototype.filter;
  return result;
}

function filterLog(f) {
  return function (i, j) {
    try {
      console.log([i, j, arguments[2].toString().substring(0, 20)].toString());
      return f.apply(this, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}

[undefined].filter(passUndefined);
new Array(20).filter(passUndefined);
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(passEven);
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(passAfter5);
mixPartialAndFast.filter(passAfter5);
console.log("Generic Object");
toObject([undefined]).filter(passUndefined);
toObject(new Array(20)).filter(passUndefined);
toObject([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).filter(passEven);
toObject([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).filter(passAfter5);
toObject(mixPartialAndFast).filter(passAfter5);
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
Array.prototype.filter.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -0
};
Array.prototype.filter.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -3
};
Array.prototype.filter.call(obj, throwError);
console.log("Reversed generic Object");
reverseInsertionOrder([undefined]).filter(passUndefined);
reverseInsertionOrder(new Array(20)).filter(passUndefined);
reverseInsertionOrder([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).filter(passEven);
reverseInsertionOrder([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).filter(passAfter5);
reverseInsertionOrder(mixPartialAndFast).filter(passAfter5);
console.log("Log evaluation order");
reverseInsertionOrder([undefined]).filter(filterLog(passUndefined));
reverseInsertionOrder(new Array(20)).filter(filterLog(passUndefined));
reverseInsertionOrder([0, 1, 2, 3, 4]).filter(filterLog(passEven));
reverseInsertionOrder(mixPartialAndFast).filter(filterLog(passAfter5));
[undefined].filter(filterLog(passUndefined));
new Array(20).filter(filterLog(passUndefined));
[0, 1, 2, 3, 4].filter(filterLog(passEven));
mixPartialAndFast.filter(filterLog(passAfter5));
[1, 2, 3].filter(function (i, j, k, l, m) {
  return m = !m;
});
