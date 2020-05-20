//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function access(o) {
  return o.p;
} // Access 'o.p' (property on the object) from a different script context


var o = [{
  p: "000"
}, {
  p: "001",
  q: 0
}, {
  p: "002"
}, {
  p: "003",
  q: 0
}];

for (var i = 0; i < o.length; ++i) {
  print(access(o[i]));
} // Access 'o.p' (property on the prototype object) from a different script context


var proto = o;
o = [];

for (var i = 0; i < proto.length; ++i) {
  o.push(Object.create(proto[i]));
}

for (var i = 0; i < o.length; ++i) {
  o[i].p;
}

for (var i = 0; i < o.length; ++i) {
  print(access(o[i]));
}
