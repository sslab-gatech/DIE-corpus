//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function def_prop_array() {
  var array = [];
  Object.defineProperty(array, 0, {
    get: function () {
      print("array[0]");
    }
  });
  var sum = 0;

  for (var i = 0; i < 3; i++) {
    sum += array[0];
  }
}

function def_prop_object() {
  var object = {};
  Object.defineProperty(object, "sum", {
    get: function () {
      print("sum");
    }
  });
  var sum = 0;

  for (var i = 0; i < 3; i++) {
    sum += object.sum;
  }
}

function def_props_array() {
  var array = [];
  Object.defineProperties(array, {
    0: {
      get: function () {
        print("array[0]");
      }
    },
    1: {
      get: function () {
        print("array[1]");
      }
    }
  });
  var sum = 0;

  for (var i = 0; i < 3; i++) {
    sum += array[0];
  }
}

function def_props_object() {
  var object = {};
  Object.defineProperties(object, {
    sum1: {
      get: function () {
        print("sum1");
      }
    },
    sum2: {
      get: function () {
        print("sum2");
      }
    }
  });
  var sum = 0;

  for (var i = 0; i < 3; i++) {
    sum += object.sum1;
  }
}

function def_props_number() {
  function diag() {
    print("Type: " + typeof this);
    print("  Is Object: " + (this instanceof Object));
    print("  Is Number: " + (this instanceof Number));
  }

  Object.defineProperty(Number.prototype, "foo", {
    set: diag
  });
  Object.defineProperty(Number.prototype, "42", {
    set: diag
  });

  var runTests = function (obj) {
    print("** Testing property 'foo'");
    obj.foo = {};
    print("");
    print("** Testing property 42");
    obj[42] = {};
    print("");
  };

  var i = 3;
  runTests(i);
  var d = 3.14;
  runTests(d);
}

function main() {
  def_prop_array();
  def_prop_object();
  def_props_array();
  def_props_object();
  def_props_number();
}

main();
