//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("Test case 1");

try {
  for (var i = 0; i < 10; i++) {
    Object.defineProperty(Array.prototype, i, {
      get: function (i) {
        return function () {
          return "p" + i;
        };
      }(i),
      configurable: true,
      enumerable: true
    });
  }

  var arr = new Array(10);
  var newarr = arr.splice(0, 5, "d1", "d2", "d3", "d4");
  print(arr);
  print(arr.length);
  print(newarr);
  print(newarr.length);

  for (var i = 0; i < 10; i++) {
    delete Array.prototype[i];
  }
} catch (e) {
  ;
}

print("");
print("Test case 2");

for (var i = 0; i < 10; i++) {
  Object.defineProperty(Array.prototype, i, {
    get: function (i) {
      return function () {
        return "p" + i;
      };
    }(i),
    configurable: true,
    enumerable: true
  });
}

var arr = new Array(10);
var newarr = arr.splice(0, 5, "d1", "d2", "d3", "d4", "d5", "d6", "d7");
print(arr);
print(arr.length);
print(newarr);
print(newarr.length);

for (var i = 0; i < 10; i++) {
  delete Array.prototype[i];
}

print("");
print("Test case 3");

for (var i = 0; i < 10; i++) {
  i++;
  Object.defineProperty(Array.prototype, i, {
    get: function (i) {
      return function () {
        return "p" + i;
      };
    }(i),
    configurable: true,
    enumerable: true
  });
}

var arr = new Array(10);
var newarr = arr.splice(0, 5, "d1", "d2", "d3", "d4", "d5", "d6", "d7");
print(arr);
print(arr.length);
print(newarr);
print(newarr.length);

for (var i = 0; i < 10; i++) {
  delete Array.prototype[i];
}

print("");
print("Test case 4");

for (var k = 0; k < 10; k++) {
  Object.defineProperty(Array.prototype, k, {
    get: function (k) {
      return function () {
        return "P" + k;
      };
    }(k),
    configurable: true,
    enumerable: true
  });
}

var arr = new Array(10);
var newarr = arr.splice(3, 5, "d1", "d2", "d3");
print(arr);
print(arr.length);
print(newarr);
print(newarr.length);

for (var k = 0; k < 10; k++) {
  delete Array.prototype[k];
}

print("");
print("Test case 5");

for (var k = 0; k < 10; k++) {
  Object.defineProperty(Array.prototype, k, {
    get: function (k) {
      return function () {
        return "P" + k;
      };
    }(k),
    configurable: true,
    enumerable: true
  });
}

var arr = new Array(10);
var newarr = arr.splice(3, 5, "d1", "d2", "d3");
print(arr);
print(arr.length);
print(newarr);
print(newarr.length);

for (var k = 0; k < 10; k++) {
  delete Array.prototype[k];
}

print("");
print("Test case 6");

for (var k = 0; k < 10; k++) {
  Object.defineProperty(Array.prototype, k, {
    get: function (k) {
      return function () {
        return "P" + k;
      };
    }(k),
    configurable: true,
    enumerable: true
  });
}

var arr = new Array(10);
var newarr = arr.splice(3, 1, "d1", "d2", "d3");
print(arr);
print(arr.length);
print(newarr);
print(newarr.length);

for (var k = 0; k < 10; k++) {
  delete Array.prototype[k];
}

print("");
print("Test case 7");
Object.prototype.shift = Array.prototype.shift;
var obj = new Object();
obj.length = 10;
obj[0] = 101;
obj[1] = "string";
obj[9] = "lastelement";
var res = obj.shift();

for (var i in obj) {
  print("expando:" + i + "=" + obj[i]);
}

delete Object.prototype.shift;
print("");
print("Test case 8");
Object.defineProperty(Object.prototype, 0, {
  get: function () {
    return "hello world";
  },
  configurable: true,
  enumerable: true
});
Object.defineProperty(Array.prototype, 9, {
  get: function () {
    return "p9";
  },
  configurable: true,
  enumerable: true
});
var arr = new Array(10);
arr[1] = 123;
var res = arr.shift();
print(res);
print(res.length);
print(arr);
print(arr.length);
delete Object.prototype[0];
delete Array.prototype[9];
print("");
print("Test case 9");
var arr1 = new Array(2147483649);
arr1[2147483647] = 100;
var newarr = arr1.slice(2147483640, 2147483648);
print(newarr);
print(newarr.length);
print(arr1.length);
var test11arr = new Array(5);
test11arr[2] = 2;
test11arr[3] = 3;
test11arr[4] = 4;
print("");
print("Test case 10");
var arr = [];

for (var i = 1; i < 20; i = i + 3) {
  arr[i] = i;
}

for (var i = 0; i < 20; i = i + 3) {
  Object.defineProperty(Object.prototype, i, {
    get: function (i) {
      return function () {
        return "O" + i;
      };
    }(i),
    configurable: true,
    enumerable: true
  });
}

for (var i = 1; i < 20; i = i + 3) {
  Object.defineProperty(Array.prototype, i, {
    get: function (i) {
      return function () {
        return "a" + i;
      };
    }(i),
    configurable: true,
    enumerable: true
  });
}

arr.shift();
print(arr);
print(arr.length);
arr.unshift(10);
print(arr);
print(arr.length);
var newarr = arr.splice(5, 2, "a", "b");
print(arr);
print(arr.length);
print(newarr);
print(newarr.length);
newarr = arr.splice(7, 6, "a", "b");
print(arr);
print(arr.length);
print(newarr);
print(newarr.length);
newarr = arr.splice(10, 2, "a", "b", "c", "e", "f");
print(arr);
print(arr.length);
print(newarr);
print(newarr.length);
print("");
print("Test case 11");
Object.defineProperty(Object.prototype, 2, {
  get: function () {
    return 10;
  },
  configurable: true,
  enumerable: true
});
var arr = new Array(5);
print(arr);
print(arr.length);
arr.shift();
print(arr);
print(arr.length);
arr.unshift("10", "20");
arr.shift();
print(arr);
arr.shift();
print(arr);
arr.unshift(10, 40);
print(arr);
arr.unshift(50);
print(arr);
arr.shift(50);
print(arr);
var arr = new Array(5);
print(arr);
print(arr.length);
arr.reverse();
print(arr);
print(arr.length);
var arr = test11arr;
print(arr);
print(arr.length);
arr.reverse();
print(arr);
print(arr.length);
var a = [1, 2, 3];
var b = [];
b.length = 3;
print(a.concat(b));
