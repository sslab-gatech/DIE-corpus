//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("new ArrayBuffer without argument");
var a = new ArrayBuffer();
print(a.byteLength);
a.byteLength = 999;
print(a.byteLength);
print("new ArrayBuffer with ulong argument");
var b = new ArrayBuffer(8);
print(b.byteLength);
b.byteLength = 999;
print(b.byteLength);
print("new ArrayBuffer with multiple arguments");
var c = new ArrayBuffer(9, 10, 11);
print(c.byteLength);
c.byteLength = 999;
print(c.byteLength);
print("new ArrayBuffer with string argument");
var d = new ArrayBuffer('20');
print(d.byteLength);
d.byteLength = 999;
print(d.byteLength);
print("new ArrayBuffer with invalid string argument");
var e = new ArrayBuffer('hello');
print(e.byteLength);
e.byteLength = 999;
print(e.byteLength);
print(e.toString());
print("a instanceof ArrayBuffer" + a instanceof ArrayBuffer);

for (i in d) {
  print(i);
}

print("arraybuffer.prototype");
var f = Object.getPrototypeOf(e);
var g = new f.constructor(20);
print(g);
print(g.byteLength);
print(typeof f);
print(ArrayBuffer.prototype[10]);
print(ArrayBuffer.prototype[-1]);
print(ArrayBuffer.prototype[2]);
ArrayBuffer.prototype[2] = 10;
print(ArrayBuffer.prototype[2]);
