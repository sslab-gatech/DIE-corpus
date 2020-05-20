//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("-------Named Type Test Start------------------");
var obj = JSON.parse('{"2a":"foo"}', function (key, value) {
  print(key, ':', value);
  return value;
});
print(obj["2a"]);
print("-------Named Type Test End--------------------");
print("-------Simple Numeral Type Test Start---------");
var obj2 = JSON.parse('{"2":"foo"}', function (key, value) {
  print(key, ':', value);
  return value;
});
print(obj2["2"]);
print("-------Simple  Numeral Type Test End----------");
print("-------Complex Numeral Type Test Start--------");
var obj3 = JSON.parse('{"3":{"1":"foo"}}', function (key, value) {
  print(key, ':', value);
  return value;
});
print(obj3["3"]);
print("-------Complex Numeral Type Test End----------");
