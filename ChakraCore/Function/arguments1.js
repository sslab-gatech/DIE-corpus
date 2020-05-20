//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function foo(a, b, c) {
  arguments[0] = "arguments[0]";
  print(a);
  b = "b";
  print(arguments[1]);
  print(arguments[3]);

  var g = function (x) {
    print(arguments[1]);
    delete x[1];
    x[2] = "x[2]";
    a = "g.a";
  };

  g(arguments, "g[1]");
  print(a);
  print(b);
  print(b);
  var str = "eval.c";
  c = str;
  print(arguments[2]);
  var arguments = [];
  arguments[0] = "new[0]";
  print(a);
}

;
foo("foo.a", "foo.b", "foo.c", "foo.d");
foo("foo2.a", "foo2.b");

function lenChange() {
  print(arguments.length);
  arguments.length--;
  print(arguments.length);
}

lenChange(10, 20, 30);

function testDelete(a) {
  a = 2;
  delete arguments[0];

  if (arguments[0] === 2) {
    print(arguments[0]);
  }

  if (arguments[0] !== undefined) {
    print(arguments[0]);
  }

  arguments[0] = "A";

  if (arguments[0] !== "A") {
    print(arguments[0]);
  }

  delete a;
  return a;
}

testDelete(1);

function stackwithoverwrite() {
  for (var i = 0; i < arguments.length; i++) {
    print(arguments[i]);
    this.stackwithoverwrite.arguments[i] = i;
    print(arguments[i]);
  }
}

stackwithoverwrite('life', 'is', 'good');

(function () {
  var arguments = ["a"];

  (function () {
    print(arguments.length);
  })();
})();
