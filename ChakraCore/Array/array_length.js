//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var arr = new Array(2);
arr[0] = 1;
arr.length = "";
print(arr.length);
arr.length = null;
print(arr.length);
arr.length = 4294967295;
print(arr.length.toString());

try {
  arr.length = "-1";
} catch (e) {
  print(e.message);
}

try {
  arr.length = 4294967296;
} catch (e) {
  print(e.message);
}

try {
  Array.length = 10;
  print(Array.length);
} catch (e) {
  print(e.message);
}

try {
  x = [];
  x.length = true;
  print(x.length);
} catch (e) {
  print(e.message);
}

try {
  Object.prototype.length = function () {
    return this;
  };

  (function () {
    ;

    for (var y in [void 0]) {
      y.length();
    }
  })();
} catch (e) {
  print(e.message);
}

try {
  Object.prototype.length = function () {
    return this;
  };

  var a = [10, 20, 24];
  print("prop = " + a.length);
  print("method = " + a.length());
} catch (e) {
  print(e.message);
}

var a = {
  length: 10
};
var b = Object.freeze(a);
var c = Object.create(b);
c.length = 88;
print(c.length);
print(b.length);
var o = Object.freeze([]);
var p = Object.create(o);
p.length = 5;
print(p.length);
print(o.length);
var x = [];
var y = Object.create(x);
y.length = 7;
print(y.length);
print(x.length);
var z = [];
z.length = 3;
print(z.length);
Object.defineProperty(Object.prototype, "length", {
  set: function () {
    print("setter");
  },
  configurable: true
});
var a = [];
var b = Object.create(a);
b.length = 5;
print(b.length);

function foo() {
  var arr = new Array(10);
  var x = arr.length--;
  arr[arr.length + 1] = 20;
  var y = --arr.length;
  return y;
}

print(foo());
