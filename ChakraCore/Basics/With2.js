//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function X() {
  this.x = 1;
}

function Y(s) {
  this[s] = 2;
}

function Z() {
  this.z = 3;
}

Y.prototype = new Z();
X.prototype = new Y("y");
var x = new X();
var y = new Y("yy");
var z = new Z();
with (x) {
  print("x.x = " + x);
  print("x.y = " + y);
  print("x.z = " + z);
  ++z;
  print("x.z = " + z); // refers to x.y

  with (y) {
    print("x.x = " + x);
    print("x.y = " + y);
    print("x.z = " + z);
  }
  y = new Object();
  y.m = 7; // refers to x.y

  with (y) {
    print("x.y.m = " + m);
  }
  y = undefined;

  if (y == undefined) {
    print("OK: y in with scope is undefined");
  }

  Z.prototype.zz = 1;
  print("x.zz = " + zz); // get rid of x.x

  x = undefined;

  if (x == undefined) {
    print("OK: x in with scope is undefined");
  }
}
with (Z.prototype) {
  zz *= 10;
  with (Z) {
    prototype.zz++;
    with (prototype) {
      zz *= 100;
    }
  }
}
var q = new Y("a");
with (x) {
  print("x.x = " + x);
  print("x.y = " + y);
  print("x.z = " + z);
  print("x.zz = " + zz);
}
with (q) {
  with (q) {
    with (q) {
      print("q.a = " + a);
      print("q.zz = " + zz);
    }
  }
}

(function () {
  function a() {
    print("a is called");
  }

  (function () {
    try {
      throw a;
    } catch (x) {
      with ({}) {
        x();
      }
    }
  })();
})();

(function () {
  var o = {};

  var y = function x() {
    with (o) {
      x(o.x = function () {
        ;
      });
    }
  };

  y();
})();
