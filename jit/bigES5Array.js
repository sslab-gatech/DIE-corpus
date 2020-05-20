//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("Big simple dictionary type handler -> Big ES5 array type handler");

(function () {
  var obj = [];

  for (var i = 0; i < 0x10001; i++) {
    obj["p" + i] = i;
  }

  print(obj["p0"], obj["p65535"], obj["p65536"]);
  Object.defineProperty(obj, "0", {
    writable: false
  });
  print(obj["p0"], obj["p65535"], obj["p65536"]);
})();

print();
print("Big dictionary type handler -> Big ES5 array type handler");

(function () {
  var obj = [];

  for (var i = 0; i < 0x10001; i++) {
    obj["p" + i] = i;
  }

  Object.defineProperty(obj, "p1", {
    get: function () {
      return "p1";
    },
    configurable: true
  });
  print(obj["p0"], obj["p65535"], obj["p65536"]);
  Object.defineProperty(obj, "0", {
    writable: false
  });
  print(obj["p0"], obj["p65535"], obj["p65536"]);
})();

print();
print("Small ES5 array type handler -> Big ES5 array type handler");

(function () {
  var obj = [];
  Object.defineProperty(obj, "0", {
    get: function () {
      return "i0";
    },
    configurable: true,
    enumerable: true
  });

  for (var i = 0; i < 0xFFFF; i++) {
    obj["p" + i] = i;
  }

  print(obj[0], obj["p0"], obj["p65535"], obj["p65536"]);

  for (var i = 0xFFFF; i < 0x10010; i++) {
    obj["p" + i] = i;
  }

  print(obj[0], obj["p0"], obj["p65535"], obj["p65536"]);
})();
