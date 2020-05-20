//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//
// Win8: 762166
// ES5 11.2.2 "new MemberExpression Arguments", MemberExpression is fully evaluated before Arguments.
// Arguments side effect can't change the constructor used for new operator.
//
(function () {
  function x() {
    print("x");
  }

  function y() {
    print("y");
  }

  new x(x = y);
  new x();
})();

(function () {
  function x() {
    print("x");
  }

  function y() {
    print("y");
  }

  new x(x = y);
  new x();

  function foo() {
    x(); // Reference of "x" and put it in slot
  }
})();

(function () {
  var o = {
    x: function () {
      print("x");
    }
  };

  function y() {
    print("y");
  }

  new o.x(o.x = y);
  new o.x();
})();

(function () {
  var o = {
    x: function () {
      print("x");
    }
  };
  var y = {
    x: function () {
      print("y");
    }
  };
  new o.x(o = y);
  new o.x();
})();
