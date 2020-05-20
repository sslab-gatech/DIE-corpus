//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// /forcedeferparse test to make sure we can handle getters and setters at global scope,
// at function scope, and with nested functions.
var x = {
  _y: 'x.y',

  get y() {
    print('getting x.y');
    return this._y;
  },

  set y(val) {
    print('setting x.y');
    this._y = val;
  }

};
print(x.y);
x.y = 'new x.y';

function f() {
  var x = {
    _y: 'local x.y',

    get y() {
      print('getting local x.y');
      return this._y;
    },

    set y(val) {
      print('setting local x.y');
      this._y = val;
    }

  };
  print(x.y);
  x.y = 'new local x.y';
  var nested_x = {
    _y: 'nested x.y',

    get y() {
      function fget(o) {
        print('getting nested x.y');
        return o._y;
      }

      return fget(this);
    },

    set y(val) {
      function fset(o, val) {
        print('setting nested x.y');
        o._y = val;
      }

      fset(this, val);
    }

  };
  print(nested_x.y);
  nested_x.y = 'new nested x.y';
  print(nested_x.y);
  print(x.y);
}

f();
print(x.y);
