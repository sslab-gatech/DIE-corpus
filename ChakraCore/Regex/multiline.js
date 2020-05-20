//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var str = "a b\nc d\ne f";
print(str.replace(/^a/g, "replaced"));
print();
print(str.replace(/^a/gm, "replaced"));
print();
print(str.replace(/b$/g, "replaced"));
print();
print(str.replace(/b$/gm, "replaced"));
print();
print(str.replace(/^c d$/g, "replaced"));
print();
print(str.replace(/^c d$/gm, "replaced"));
print();
print(str.replace(/^e/g, "replaced"));
print();
print(str.replace(/^e/gm, "replaced"));
print();
print(str.replace(/f$/g, "replaced"));
print();
print(str.replace(/f$/gm, "replaced"));
