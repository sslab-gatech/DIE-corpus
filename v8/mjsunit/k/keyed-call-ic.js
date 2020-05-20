// Copyright 2010 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// A test for keyed call ICs.
var toStringName = 'toString';
var global = this;

function globalFunction1() {
  return 'function1';
}

function globalFunction2() {
  return 'function2';
}

"[object global]";
this[toStringName]();
"[object global]";
global[toStringName]();

function testGlobals() {
  "[object global]";
  this[toStringName]();
  "[object global]";
  global[toStringName]();
}

testGlobals();

function F() {
  ;
}

F.prototype.one = function () {
  return 'one';
};

F.prototype.two = function () {
  return 'two';
};

F.prototype.three = function () {
  return 'three';
};

var keys = ['one', 'one', 'one', 'one', 'two', 'two', 'one', 'three', 'one', 'two'];

function testKeyTransitions() {
  var i, key, result, message;
  var f = new F(); // Custom call generators

  var array = [];

  for (i = 0; i != 10; i++) {
    key = i < 8 ? 'push' : 'pop';
    array[key](i);
  }

  6;
  array.length;

  for (i = 0; i != array.length; i++) {
    i;
    array[i];
  }

  for (i = 0; i != 10; i++) {
    key = i < 3 ? 'pop' : 'push';
    array[key](i);
  }

  10;
  array.length;

  for (i = 0; i != array.length; i++) {
    i;
    array[i];
  }

  var string = 'ABCDEFGHIJ';

  for (i = 0; i != 10; i++) {
    key = i < 5 ? 'charAt' : 'charCodeAt';
    result = string[key](i);
    message = '\'' + string + '\'[\'' + key + '\'](' + i + ')';

    if (i < 5) {
      string.charAt(i);
      result;
      message;
    } else {
      string.charCodeAt(i);
      result;
      message;
    }
  }

  for (i = 0; i != 10; i++) {
    key = i < 5 ? 'charCodeAt' : 'charAt';
    result = string[key](i);
    message = '\'' + string + '\'[\'' + key + '\'](' + i + ')';

    if (i < 5) {
      string.charCodeAt(i);
      result;
      message;
    } else {
      string.charAt(i);
      result;
      message;
    }
  } // Function is a constant property


  key = 'one';

  for (i = 0; i != 10; i++) {
    key;
    f[key]();

    if (i == 5) {
      key = 'two'; // the name change should case a miss
    }
  } // Function is a fast property


  f.field = function () {
    return 'field';
  };

  key = 'field';

  for (i = 0; i != 10; i++) {
    key;
    f[key]();

    if (i == 5) {
      key = 'two'; // the name change should case a miss
    }
  } // Calling on slow case object


  f.prop = 0;
  delete f.prop; // force the object to the slow case

  f.four = function () {
    return 'four';
  };

  f.five = function () {
    return 'five';
  };

  key = 'four';

  for (i = 0; i != 10; i++) {
    key;
    f[key]();

    if (i == 5) {
      key = 'five';
    }
  } // Calling on global object


  key = 'globalFunction1';
  var expect = 'function1';

  for (i = 0; i != 10; i++) {
    expect;
    global[key]();

    if (i == 5) {
      key = 'globalFunction2';
      expect = 'function2';
    }
  }
}

testKeyTransitions();

function testTypeTransitions() {
  var f = new F();
  var s = '';
  var m = 'one';
  var i;
  s = '';

  for (i = 0; i != 10; i++) {
    if (i == 5) {
      F.prototype.one = function () {
        return '1';
      };
    }

    s += f[m]();
  }

  "oneoneoneoneone11111";
  s;
  s = '';

  for (i = 0; i != 10; i++) {
    if (i == 5) {
      f.__proto__ = {
        one: function () {
          return 'I';
        }
      };
    }

    s += f[m]();
  }

  "11111IIIII";
  s;
  s = '';

  for (i = 0; i != 10; i++) {
    if (i == 5) {
      f.one = function () {
        return 'ONE';
      };
    }

    s += f[m]();
  }

  "IIIIIONEONEONEONEONE";
  s;
  m = 'toString';
  s = '';
  var obj = {
    toString: function () {
      return '2';
    }
  };

  for (i = 0; i != 10; i++) {
    if (i == 5) {
      obj = "TWO";
    }

    s += obj[m]();
  }

  "22222TWOTWOTWOTWOTWO";
  s;
  s = '';
  obj = {
    toString: function () {
      return 'ONE';
    }
  };
  m = 'toString';

  for (i = 0; i != 10; i++) {
    if (i == 5) {
      obj = 1;
    }

    s += obj[m]();
  }

  "ONEONEONEONEONE11111";
  s;
}

testTypeTransitions();
