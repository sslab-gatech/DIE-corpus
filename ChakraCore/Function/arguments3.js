//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var get_args = function (a, b) {
  return arguments;
};

print("--- toString test ---");
print(get_args());
print(get_args(1, '2', null));
print("\n--- getOwnPropertyNames should enumerate all properties ---"); //
// TODO: Currently the following outputs 2 length properties.
//

print(Object.getOwnPropertyNames(get_args()));
print(Object.getOwnPropertyNames(get_args(1)));
print(Object.getOwnPropertyNames(get_args(1, 2)));
var a = get_args(1, 2, '3', 'arg4', 'arg5');
print(Object.getOwnPropertyNames(a));
delete a[0];
delete a[1];
delete a[4];
a[0] = 'arg0';
print(Object.getOwnPropertyNames(a));
