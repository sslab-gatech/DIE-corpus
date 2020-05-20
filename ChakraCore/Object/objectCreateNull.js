//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var objects = [Object.create({}), new Boolean(), Object.create(Promise.prototype), Function(""), new Number(), new String()];

for (var i = 1; i < objects.length; ++i) {
  var o = objects[i];
  print(undefined, o[0], "NullTypeHandler object with no properties returns undefined");
  print(o.hasOwnProperty('0'));
  print(o.propertyIsEnumerable('0'));

  for (var a in o) {
    print("Enumerating an empty object"); // Unreachable
  }

  o[0] = "str";
  print("str", o[0], "NullTypeHandler object with index property returns property correctly");
  print("str", o['0'], "NullTypeHandler object with index property returns property correctly");
  print(o.hasOwnProperty('0'));
  print(o.propertyIsEnumerable('0'));
  delete o[0];
  print(undefined, o[0], "NullTypeHandler objectwith deleted property returns undefined");
  print(undefined, o['0'], "NullTypeHandler objectwith deleted property returns undefined");
  print(o.hasOwnProperty('0'));
  print(o.propertyIsEnumerable('0'));

  for (var a in o) {
    print("Enumerating an empty object"); // Unreachable
  }

  o[0] = "str2";
  print("str2", o[0], "NullTypeHandler object with readded index property returns property correctly");
  print("str2", o['0'], "NullTypeHandler object with readded index property returns property correctly");
  print(o.hasOwnProperty('0'), "NullTypeHandler object with readded index property returns true for hasOwnProperty");
  print(o.propertyIsEnumerable('0'), "NullTypeHandler object readded with index property returns true for propertyIsEnumerable");
}

var obj1 = Object.create({});
var obj2 = Object.create(null);
var numProperties = 3;

for (var i = 0; i < numProperties; ++i) {
  obj1[i] = i;
  print(obj1[i], i, "NullTypeHandler first enumeration object with index " + i + " equal to " + i);
  print(obj1.hasOwnProperty(i), "NullTypeHandler first enumeration object with index " + i + " returns true for hasOwnProperty");
  print(obj1.propertyIsEnumerable(i), "NullTypeHandler object first enumeration with index " + i + " returns true for propertyIsEnumerable");
  obj2[i] = i;
  print(obj2[i], i, "NullTypeHandler second enumeration object with index " + i + " equal to " + i);
  print(Object.prototype.hasOwnProperty.call(obj2, i), "NullTypeHandler first enumeration object with index " + i + " returns true for hasOwnProperty");
  print(Object.prototype.propertyIsEnumerable.call(obj2, i), "NullTypeHandler object first enumeration with index " + i + " returns true for propertyIsEnumerable");
}

var j = 0;

for (var k in obj1) {
  ++j;
}

print(j, numProperties, "NullTypeHandler first enumeration object gives same number of properties");
j = 0;

for (var k in obj2) {
  ++j;
}

print(j, numProperties, "NullTypeHandler second enumeration object gives same number of properties");
