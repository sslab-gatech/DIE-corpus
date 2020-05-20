//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test() {
  var r = /a/;
  var r2 = r;
  var str = "a";
  print(r.exec(str));
  print(r === r2);
}

test();
test();
var g;
var oldExec = RegExp.prototype.exec;

RegExp.prototype.exec = function (str) {
  g = this;
};

test();
print(oldExec.call(g, "a"));
