//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function SetArrayIndex(a, i) {
  a[i] = "blah";
}

function test_obj_proto(proto) {
  var obj = Object.create(proto); //var obj = {};

  obj[0] = 0;
  SetArrayIndex(obj, 0);
  SetArrayIndex(obj, 1);
  print(obj[1]);
}

var obj = {};
Object.defineProperty(obj, "1", {
  value: "const",
  writable: false
});
test_obj_proto(obj);
