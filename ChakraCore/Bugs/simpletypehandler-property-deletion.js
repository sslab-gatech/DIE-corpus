//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// When a property from SimpleTypeHandler was deleted, we used to
// convert it to NullTypeHandler (even if there are multiple
// properties) and this caused removal of other properties from the
// Object.
// A script function should have a SimpleTypeHandler as its type handler.
function f() {
  ;
}

delete f.name;
var desc = Object.getOwnPropertyDescriptor(f, 'prototype');
print(desc);
