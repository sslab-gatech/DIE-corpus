//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function Ctor() {
  ;
}

Ctor.prototype.blah = function () {
  for (var i = 0; i < 10; i++) {
    this.blahnum = 1000;
  }
};

var a = new Ctor();
a.blah();
print(a.blahnum);
var o = {
  f: function (a, b, c) {
    print(a, b, c);
  },
  g: function () {
    for (var i = 0; i < 1; ++i) {
      this.f.apply(this, arguments);
    }
  }
};
o.g(1, 2, 3);

function f() {
  for (var i = 0; i < 1; i++) {
    var g_args = g.arguments;
    print(g_args === f.caller.arguments);
    print(g_args.callee === f.caller);
  }
}

function g() {
  for (var i = 0; i < 1; i++) {
    f();
  }
}

g('hi');

function test() {
  with ({
    x: "x"
  }) {
    while (function () {
      return x;
    }()) {
      print(x);
      break;
    }
  }
}

test();

function retval() {
  for (var i = 0; i < 1; i++) {
    if (i > 1) {
      return i;
    }
  }

  return 0;
}

retval();

for (var z = 0; z < 0; ++z) {
  1 in 2;
}

function test_bail() {
  var obj0 = {};
  var obj1 = {};

  var func0 = function () {
    ;
  };

  var func1 = function (p0, p1, p2) {
    var __loopvar2 = 0;

    for (; __loopvar2 < 3 && p2 < 1; __loopvar2++, 14) {
      var __loopvar3 = 0;

      do {
        __loopvar3++;
        obj0.prop0 <<= ary[8] - ((obj2.prop3 ^= ++obj1.prop1) ? 1701746938.1 : this.prop2);
        var obj4 = 1;
      } while (1 && __loopvar3 < 3);
    }

    var obj4 = func0(2147483647, new RegExp("xyz"), 1.1, 1, 7 ? -970342005 : 1);
  };

  var func2 = function () {
    if (ui8[1073741824]) {
      -2;
      var __loopvar3 = 0;

      for (var strvar0 in obj0) {
        if (__loopvar3++ > 3) {
          break;
        }

        var fPolyProp = function (o) {
          if (o !== undefined) {
            print(o.prop0 + ' ' + o.prop1 + ' ' + o.prop2);
          }
        };

        fPolyProp(litObj0);
        fPolyProp(litObj1);
        fPolyProp(litObj2);
        obj2.prop5 = 2147483647;
      }
    }

    for (var __loopvar2 = 0; __loopvar2 < 3; __loopvar2++) {
      ;
    }
  };

  obj0.method0 = func2;
  var ui8 = new Uint8Array(256);
  var __loopvar1 = 0;

  do {
    __loopvar1++;

    (function (p0, p1, p2, p3) {
      var obj5 = obj0;
      obj4 = new obj5.method0();
    })();
  } while (1 && __loopvar1 < 3);

  if (func1(1, 1)) {
    ;
  }
}

; // generate profile

test_bail(); // run JITted code

test_bail();
print('done');
