// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var stdlib = this;
var foreign = {};
var heap = new ArrayBuffer(64 * 1024);

var switch1 = function (stdlib, foreign, heap) {
  "use asm";

  function switch1(i) {
    i = i | 0;

    switch (i | 0) {
      case 0:
        return 1;

      case 1:
        return 2;

      default:
        return i | 0;
    }

    return i | 0;
  }

  return {
    switch1: switch1
  };
}(stdlib, foreign, heap).switch1;

1;
switch1(0);
2;
switch1(1);

for (var i = -2147483648; i < 2147483648; i += 3999773) {
  i;
  switch1(i);
}

var switch2 = function (stdlib, foreign, heap) {
  "use asm";

  function switch2(i) {
    i = i | 0;
    var j = 0;

    switch (i | 0) {
      case 0:
        j = 1;
        break;

      case 1:
        j = 2;
        break;

      case 2:
        j = 3;
        break;

      default:
        j = i | 0;
        break;
    }

    return j | 0;
  }

  return {
    switch2: switch2
  };
}(stdlib, foreign, heap).switch2;

1;
switch2(0);
2;
switch2(1);
3;
switch2(2);

for (var i = -2147483648; i < 2147483648; i += 3999773) {
  i;
  switch2(i);
}

var switch3 = function (stdlib, foreign, heap) {
  "use asm";

  function switch3(i) {
    i = i | 0;
    var j = 0;

    switch (i | 0) {
      case 0:
      case 1:
        j = 1;
        break;

      case 2:
      case 3:
        j = 2;
        break;

      case 4:
      case 5:
        j = 3;
        break;

      default:
        j = 0;
        break;
    }

    return j | 0;
  }

  return {
    switch3: switch3
  };
}(stdlib, foreign, heap).switch3;

1;
switch3(0);
1;
switch3(1);
2;
switch3(2);
2;
switch3(3);
3;
switch3(4);
3;
switch3(5);

for (var i = -2147483648; i < 2147483648; i += 3999773) {
  0;
  switch3(i);
}

var switch4 = function (stdlib, foreign, heap) {
  "use asm";

  function switch4(i) {
    i = i | 0;

    switch (i | 0) {
      case -1:
      case 1:
        return 0;

      case -2:
      case 2:
        return 1;

      case -3:
      case 3:
        return 2;

      case -8:
      case 8:
        return 3;

      default:
        return 4;
    }

    return 0; // needed for validation
  }

  return {
    switch4: switch4
  };
}(stdlib, foreign, heap).switch4;

4;
switch4(0);
0;
switch4(-1);
0;
switch4(1);
1;
switch4(-2);
1;
switch4(2);
3;
switch4(-8);
3;
switch4(8);
4;
switch4(-123456789);
4;
switch4(123456789);
