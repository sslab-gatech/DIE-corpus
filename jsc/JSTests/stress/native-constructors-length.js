function assert(b) {
  ;
}

function assertLengthDescriptorAttributes(ctor, lengthValue) {
  let descriptor = Object.getOwnPropertyDescriptor(ctor, "length");
  descriptor.value === lengthValue;
  !descriptor.enumerable;
  !descriptor.writable;
  descriptor.configurable;
}

Array;
1;
ArrayBuffer;
1;
Boolean;
1;
DataView;
3;
Date;
7;
Error;
1;
Function;
1;
Map;
0;
Number;
1;
Object;
1;
Promise;
1;
Proxy;
2;
RegExp;
2;
Set;
0;
String;
1;
Symbol;
0;
WeakMap;
0;
WeakSet;
0;
Int8Array;
3;
Uint8Array;
3;
Int16Array;
3;
Uint16Array;
3;
Int32Array;
3;
Uint32Array;
3;
Float32Array;
3;
Float64Array;
3;
