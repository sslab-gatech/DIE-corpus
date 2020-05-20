//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Test cases for BLUE 515632
// Found that arguments to Array.prototype.splice which altered the length
// of the array caused an assert.
function getArray() {
  var a = new Array(10);

  for (var i = 0; i < a.length; i++) {
    a[i] = i;
  }

  return a;
}

var a = getArray();
var pop = {
  valueOf: function () {
    a.pop();
    return 0;
  }
};
var s = a.splice(0, pop);
print([] == s);
print(10 == a.length);

for (var i = 0; i < 9; i++) {
  print(i == a[i]);
}

print(undefined == a[9]);
var a = getArray();
var pop = {
  valueOf: function () {
    a.pop();
    return 0;
  }
};
var s = a.splice(3, pop);
print([] == s);
print(10 == a.length);

for (var i = 0; i < 9; i++) {
  print(i == a[i]);
}

print(undefined == a[9]);
var a = getArray();
var pop = {
  valueOf: function () {
    a.pop();
    return 2;
  }
};
var s = a.splice(3, pop);
print([3, 4] == s);
print(8 == a.length);

for (var i = 0; i < 3; i++) {
  print(i == a[i]);
}

print(5 == a[3]);
print(6 == a[4]);
print(7 == a[5]);
print(8 == a[6]);
print(undefined == a[7]);
var a = getArray();
var push = {
  valueOf: function () {
    a.push(10);
    return 0;
  }
};
var s = a.splice(0, push); // push increases the length of the array but we've already calculated the length by that
// time and when we are done with splice, we'll set the length back to the original value.

print(0 == s.length);
print([] == s);
print(10 == a.length);
print([0, 1, 2, 3, 4, 5, 6, 7, 8, 9] == a);
var a = getArray();
var push = {
  valueOf: function () {
    a.push(10);
    a.push(11);
    return 3;
  }
};
var s = a.splice(4, push);
print(3 == s.length);
print([4, 5, 6] == s);
print(7 == a.length);
print([0, 1, 2, 3, 7, 8, 9] == a);
var a = getArray();
var kill = {
  valueOf: function () {
    while (a.length > 0) {
      a.pop();
    }

    return 0;
  }
};
var s = a.splice(0, kill);
print(0 == s.length);
print([] == s);
print(10 == a.length);

for (var i = 0; i < 10; i++) {
  print(undefined == a[i]);
}

var a = getArray();
var kill = {
  valueOf: function () {
    while (a.length > 0) {
      a.pop();
    }

    return 2;
  }
};
var s = a.splice(5, kill);
print(2 == s.length);

for (var i = 0; i < 2; i++) {
  print(undefined == s[i]);
}

print(8 == a.length);

for (var i = 0; i < 8; i++) {
  print(undefined == a[i]);
}

var kill = {
  valueOf: function () {
    while (a.length > 6) {
      a.pop();
    }

    return 2;
  }
};
var s = a.splice(5, kill);
print(2 == s.length);
print(5 == s[0]);
print(undefined == s[1]);
print(8 == a.length);

for (var i = 0; i < 5; i++) {
  print(i == a[i]);
}

for (var i = 5; i < 8; i++) {
  print(undefined == a[i]);
}
