//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 TypedArray extension tests -- verifies the API shape and basic functionality
function t1() {
  console.log(typeof Uint8ClampedArray === 'function');
}

t1();

function t2() {
  function verifyTypedArrayConstructorPropertyValue(constructor, name, type, configurableIsTrue) {
    var descriptor = Object.getOwnPropertyDescriptor(constructor, name);
    var propName = constructor.name + "." + name;
    console.log(descriptor.writable);
    console.log(descriptor.enumerable);
    console.log(configurableIsTrue, descriptor.configurable);
    console.log(type, typeof descriptor.value);
  }

  var typedArrayConstructor = Int8Array.__proto__;
  console.log('function', typeof typedArrayConstructor);
  console.log('TypedArray', typedArrayConstructor.name);
  console.log(3, typedArrayConstructor.length);
  console.log(typedArrayConstructor === Uint8Array.__proto__);
  console.log(typedArrayConstructor === Uint8ClampedArray.__proto__);
  console.log(typedArrayConstructor === Int16Array.__proto__);
  console.log(typedArrayConstructor === Uint16Array.__proto__);
  console.log(typedArrayConstructor === Int32Array.__proto__);
  console.log(typedArrayConstructor === Uint32Array.__proto__);
  console.log(typedArrayConstructor === Float32Array.__proto__);
  console.log(typedArrayConstructor === Float64Array.__proto__);
  verifyTypedArrayConstructorPropertyValue(typedArrayConstructor, 'length', 'number', true);
  verifyTypedArrayConstructorPropertyValue(typedArrayConstructor, 'name', 'string', true);
  console.log(typedArrayConstructor.from === undefined);
  console.log('function', typeof typedArrayConstructor.from);
  console.log(1, typedArrayConstructor.from.length);
  var descriptor = Object.getOwnPropertyDescriptor(typedArrayConstructor, 'from');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log(typedArrayConstructor.of === undefined);
  console.log('function', typeof typedArrayConstructor.of);
  console.log(0, typedArrayConstructor.of.length);
  var descriptor = Object.getOwnPropertyDescriptor(typedArrayConstructor, 'of');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
}

t2();

function t3() {
  function verifyTypedArrayPrototypePropertyAccessor(obj, name, displayName, functionName) {
    functionName = functionName || name;
    var descriptor = Object.getOwnPropertyDescriptor(obj, name);
    console.log(descriptor.enumerable);
    console.log(descriptor.configurable);
    console.log('function', typeof descriptor.get);
    console.log(undefined, descriptor.set);
    console.log(0, descriptor.get.length);
    var actualName = descriptor.get.toString();
    console.log(functionName, actualName);
  }

  function verifyTypedArrayPrototypePropertyFunction(obj, name, len, displayName) {
    var descriptor = Object.getOwnPropertyDescriptor(obj, name);
    console.log(descriptor.writable);
    console.log(descriptor.enumerable);
    console.log(descriptor.configurable);
    console.log('function', typeof descriptor.value);
    console.log(len, descriptor.value.length);
  }

  var typedArrayPrototype = Int8Array.prototype.__proto__;
  console.log('object', typeof typedArrayPrototype);
  console.log(Int8Array.__proto__, typedArrayPrototype.constructor);
  console.log(typedArrayPrototype === Uint8Array.prototype.__proto__);
  console.log(typedArrayPrototype === Uint8ClampedArray.prototype.__proto__);
  console.log(typedArrayPrototype === Int16Array.prototype.__proto__);
  console.log(typedArrayPrototype === Uint16Array.prototype.__proto__);
  console.log(typedArrayPrototype === Int32Array.prototype.__proto__);
  console.log(typedArrayPrototype === Uint32Array.prototype.__proto__);
  console.log(typedArrayPrototype === Float32Array.prototype.__proto__);
  console.log(typedArrayPrototype === Float64Array.prototype.__proto__);
  verifyTypedArrayPrototypePropertyAccessor(typedArrayPrototype, "buffer", "%TypedArrayPrototype%.buffer", "get buffer");
  verifyTypedArrayPrototypePropertyAccessor(typedArrayPrototype, "byteLength", "%TypedArrayPrototype%.byteLength", "get byteLength");
  verifyTypedArrayPrototypePropertyAccessor(typedArrayPrototype, "byteOffset", "%TypedArrayPrototype%.byteOffset", "get byteOffset");
  verifyTypedArrayPrototypePropertyAccessor(typedArrayPrototype, "length", "%TypedArrayPrototype%.length", "get length");
  verifyTypedArrayPrototypePropertyAccessor(typedArrayPrototype, Symbol.toStringTag, "%TypedArrayPrototype%[@@toStringTag]", "get [Symbol.toStringTag]");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "set", 2, "%TypedArrayPrototype%.set");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "subarray", 2, "%TypedArrayPrototype%.subarray");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "copyWithin", 2, "%TypedArrayPrototype%.copyWithin");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "fill", 1, "%TypedArrayPrototype%.fill");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "map", 1, "%TypedArrayPrototype%.map");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "forEach", 1, "%TypedArrayPrototype%.forEach");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "indexOf", 1, "%TypedArrayPrototype%.indexOf");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "includes", 1, "%TypedArrayPrototype%.includes");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "every", 1, "%TypedArrayPrototype%.every");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "filter", 1, "%TypedArrayPrototype%.filter");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "find", 1, "%TypedArrayPrototype%.find");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "findIndex", 1, "%TypedArrayPrototype%.findIndex");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "join", 1, "%TypedArrayPrototype%.join");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "lastIndexOf", 1, "%TypedArrayPrototype%.lastIndexOf");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "reduce", 1, "%TypedArrayPrototype%.reduce");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "reduceRight", 1, "%TypedArrayPrototype%.reduceRight");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "reverse", 0, "%TypedArrayPrototype%.reverse");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "slice", 2, "%TypedArrayPrototype%.slice");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "some", 1, "%TypedArrayPrototype%.some");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, "sort", 1, "%TypedArrayPrototype%.sort");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, 'entries', 0, "%TypedArrayPrototype%.entries");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, 'keys', 0, "%TypedArrayPrototype%.keys");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, 'values', 0, "%TypedArrayPrototype%.values");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, Symbol.iterator, 0, "%TypedArrayPrototype%[@@iterator]");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, 'toString', 0, "%TypedArrayPrototype%.toString");
  verifyTypedArrayPrototypePropertyFunction(typedArrayPrototype, 'toLocaleString', 0, "%TypedArrayPrototype%.toLocaleString");
}

t3();

function t4() {
  function verifyTypedArrayConstructorPropertyValue(constructor, name, type, configurableIsTrue) {
    var descriptor = Object.getOwnPropertyDescriptor(constructor, name);
    var propName = constructor.name + "." + name;
    console.log(descriptor.writable);
    console.log(descriptor.enumerable);
    console.log(configurableIsTrue, descriptor.configurable);
    console.log(type, typeof descriptor.value);
  }

  console.log('Int8Array', Int8Array.name);
  console.log('Uint8Array', Uint8Array.name);
  console.log('Uint8ClampedArray', Uint8ClampedArray.name);
  console.log('Int16Array', Int16Array.name);
  console.log('Uint16Array', Uint16Array.name);
  console.log('Int32Array', Int32Array.name);
  console.log('Uint32Array', Uint32Array.name);
  console.log('Float32Array', Float32Array.name);
  console.log('Float64Array', Float64Array.name);
  verifyTypedArrayConstructorPropertyValue(Int8Array, "name", "string", true);
  verifyTypedArrayConstructorPropertyValue(Uint8Array, "name", "string", true);
  verifyTypedArrayConstructorPropertyValue(Uint8ClampedArray, "name", "string", true);
  verifyTypedArrayConstructorPropertyValue(Int16Array, "name", "string", true);
  verifyTypedArrayConstructorPropertyValue(Uint16Array, "name", "string", true);
  verifyTypedArrayConstructorPropertyValue(Int32Array, "name", "string", true);
  verifyTypedArrayConstructorPropertyValue(Uint32Array, "name", "string", true);
  verifyTypedArrayConstructorPropertyValue(Float32Array, "name", "string", true);
  verifyTypedArrayConstructorPropertyValue(Float64Array, "name", "string", true);
  console.log(1, Int8Array.BYTES_PER_ELEMENT);
  console.log(1, Uint8Array.BYTES_PER_ELEMENT);
  console.log(1, Uint8ClampedArray.BYTES_PER_ELEMENT);
  console.log(2, Int16Array.BYTES_PER_ELEMENT);
  console.log(2, Uint16Array.BYTES_PER_ELEMENT);
  console.log(4, Int32Array.BYTES_PER_ELEMENT);
  console.log(4, Uint32Array.BYTES_PER_ELEMENT);
  console.log(4, Float32Array.BYTES_PER_ELEMENT);
  console.log(8, Float64Array.BYTES_PER_ELEMENT);
  verifyTypedArrayConstructorPropertyValue(Int8Array, "BYTES_PER_ELEMENT", "number", false);
  verifyTypedArrayConstructorPropertyValue(Uint8Array, "BYTES_PER_ELEMENT", "number", false);
  verifyTypedArrayConstructorPropertyValue(Uint8ClampedArray, "BYTES_PER_ELEMENT", "number", false);
  verifyTypedArrayConstructorPropertyValue(Int16Array, "BYTES_PER_ELEMENT", "number", false);
  verifyTypedArrayConstructorPropertyValue(Uint16Array, "BYTES_PER_ELEMENT", "number", false);
  verifyTypedArrayConstructorPropertyValue(Int32Array, "BYTES_PER_ELEMENT", "number", false);
  verifyTypedArrayConstructorPropertyValue(Uint32Array, "BYTES_PER_ELEMENT", "number", false);
  verifyTypedArrayConstructorPropertyValue(Float32Array, "BYTES_PER_ELEMENT", "number", false);
  verifyTypedArrayConstructorPropertyValue(Float64Array, "BYTES_PER_ELEMENT", "number", false);
  console.log(3, Int8Array.length);
  console.log(3, Uint8Array.length);
  console.log(3, Uint8ClampedArray.length);
  console.log(3, Int16Array.length);
  console.log(3, Uint16Array.length);
  console.log(3, Int32Array.length);
  console.log(3, Uint32Array.length);
  console.log(3, Float32Array.length);
  console.log(3, Float64Array.length);
  verifyTypedArrayConstructorPropertyValue(Int8Array, "length", "number", true);
  verifyTypedArrayConstructorPropertyValue(Uint8Array, "length", "number", true);
  verifyTypedArrayConstructorPropertyValue(Uint8ClampedArray, "length", "number", true);
  verifyTypedArrayConstructorPropertyValue(Int16Array, "length", "number", true);
  verifyTypedArrayConstructorPropertyValue(Uint16Array, "length", "number", true);
  verifyTypedArrayConstructorPropertyValue(Int32Array, "length", "number", true);
  verifyTypedArrayConstructorPropertyValue(Uint32Array, "length", "number", true);
  verifyTypedArrayConstructorPropertyValue(Float32Array, "length", "number", true);
  verifyTypedArrayConstructorPropertyValue(Float64Array, "length", "number", true);
  verifyTypedArrayConstructorPropertyValue(Int8Array, "prototype", "object", false);
  verifyTypedArrayConstructorPropertyValue(Uint8Array, "prototype", "object", false);
  verifyTypedArrayConstructorPropertyValue(Uint8ClampedArray, "prototype", "object", false);
  verifyTypedArrayConstructorPropertyValue(Int16Array, "prototype", "object", false);
  verifyTypedArrayConstructorPropertyValue(Uint16Array, "prototype", "object", false);
  verifyTypedArrayConstructorPropertyValue(Int32Array, "prototype", "object", false);
  verifyTypedArrayConstructorPropertyValue(Uint32Array, "prototype", "object", false);
  verifyTypedArrayConstructorPropertyValue(Float32Array, "prototype", "object", false);
  verifyTypedArrayConstructorPropertyValue(Float64Array, "prototype", "object", false);

  function verifyTypedArrayConstructorDoesNotHaveOwnProperty(name, displayName) {
    if (displayName === undefined) {
      displayName = name;
    }

    console.log(Int8Array.hasOwnProperty(name));
    console.log(Uint8Array.hasOwnProperty(name));
    console.log(Uint8ClampedArray.hasOwnProperty(name));
    console.log(Int16Array.hasOwnProperty(name));
    console.log(Uint16Array.hasOwnProperty(name));
    console.log(Int32Array.hasOwnProperty(name));
    console.log(Uint32Array.hasOwnProperty(name));
    console.log(Float32Array.hasOwnProperty(name));
    console.log(Float64Array.hasOwnProperty(name));
  }

  verifyTypedArrayConstructorDoesNotHaveOwnProperty('to');
  verifyTypedArrayConstructorDoesNotHaveOwnProperty('from');
  verifyTypedArrayConstructorDoesNotHaveOwnProperty(Symbol.create, "@@create");
}

t4();

function t5() {
  function verifyTypedArrayPrototypePropertyValue(constructor, name, type) {
    var descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, name);
    var propName = constructor.name + ".prototype." + name;
    console.log(descriptor.writable);
    console.log(descriptor.enumerable);
    console.log(descriptor.configurable);
    console.log(type, typeof descriptor.value);
  }

  console.log(1, Int8Array.prototype.BYTES_PER_ELEMENT);
  console.log(1, Uint8Array.prototype.BYTES_PER_ELEMENT);
  console.log(1, Uint8ClampedArray.prototype.BYTES_PER_ELEMENT);
  console.log(2, Int16Array.prototype.BYTES_PER_ELEMENT);
  console.log(2, Uint16Array.prototype.BYTES_PER_ELEMENT);
  console.log(4, Int32Array.prototype.BYTES_PER_ELEMENT);
  console.log(4, Uint32Array.prototype.BYTES_PER_ELEMENT);
  console.log(4, Float32Array.prototype.BYTES_PER_ELEMENT);
  console.log(8, Float64Array.prototype.BYTES_PER_ELEMENT);
  verifyTypedArrayPrototypePropertyValue(Int8Array, "BYTES_PER_ELEMENT", "number");
  verifyTypedArrayPrototypePropertyValue(Uint8Array, "BYTES_PER_ELEMENT", "number");
  verifyTypedArrayPrototypePropertyValue(Uint8ClampedArray, "BYTES_PER_ELEMENT", "number");
  verifyTypedArrayPrototypePropertyValue(Int16Array, "BYTES_PER_ELEMENT", "number");
  verifyTypedArrayPrototypePropertyValue(Uint16Array, "BYTES_PER_ELEMENT", "number");
  verifyTypedArrayPrototypePropertyValue(Int32Array, "BYTES_PER_ELEMENT", "number");
  verifyTypedArrayPrototypePropertyValue(Uint32Array, "BYTES_PER_ELEMENT", "number");
  verifyTypedArrayPrototypePropertyValue(Float32Array, "BYTES_PER_ELEMENT", "number");
  verifyTypedArrayPrototypePropertyValue(Float64Array, "BYTES_PER_ELEMENT", "number");
  console.log(Int8Array, Int8Array.prototype.constructor);
  console.log(Uint8Array, Uint8Array.prototype.constructor);
  console.log(Uint8ClampedArray, Uint8ClampedArray.prototype.constructor);
  console.log(Int16Array, Int16Array.prototype.constructor);
  console.log(Uint16Array, Uint16Array.prototype.constructor);
  console.log(Int32Array, Int32Array.prototype.constructor);
  console.log(Uint32Array, Uint32Array.prototype.constructor);
  console.log(Float32Array, Float32Array.prototype.constructor);
  console.log(Float64Array, Float64Array.prototype.constructor);

  function verifyTypedArrayPrototypeDoesNotHaveOwnProperty(name, nameDesc) {
    nameDesc = nameDesc || name;
    console.log(Int8Array.prototype.hasOwnProperty(name));
    console.log(Uint8Array.prototype.hasOwnProperty(name));
    console.log(Uint8ClampedArray.prototype.hasOwnProperty(name));
    console.log(Int16Array.prototype.hasOwnProperty(name));
    console.log(Uint16Array.prototype.hasOwnProperty(name));
    console.log(Int32Array.prototype.hasOwnProperty(name));
    console.log(Uint32Array.prototype.hasOwnProperty(name));
    console.log(Float32Array.prototype.hasOwnProperty(name));
    console.log(Float64Array.prototype.hasOwnProperty(name));
  }

  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('set');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('subarray');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('copyWithin');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('fill');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('map');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('indexOf');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('includes');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('forEach');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('every');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('filter');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('find');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('findIndex');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('join');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('lastIndexOf');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('reduce');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('reduceRight');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('reverse');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('slice');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('some');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('sort');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('buffer');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('byteLength');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('byteOffset');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('length');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty(Symbol.toStringTag, '@@toStringTag');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('entries');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('keys');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('values');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty(Symbol.iterator, '@@iterator');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('toString');
  verifyTypedArrayPrototypeDoesNotHaveOwnProperty('toLocaleString');
}

t5();

function t6() {
  var int8Array = new Int8Array(20);
  var uint8Array = new Uint8Array(20);
  var uint8ClampedArray = new Uint8ClampedArray(20);
  var uint16Array = new Uint16Array(20);
  var int16Array = new Int16Array(20);
  var int32Array = new Int32Array(20);
  var uint32Array = new Uint32Array(20);
  var float32Array = new Float32Array(20);
  var float64Array = new Float64Array(20);

  function verifyInstancesDoNotHaveOwnProperty(propertyName, propertyDesc) {
    propertyDesc = propertyDesc || propertyName;
    console.log(int8Array.hasOwnProperty(propertyName));
    console.log(uint8Array.hasOwnProperty(propertyName));
    console.log(uint8ClampedArray.hasOwnProperty(propertyName));
    console.log(int16Array.hasOwnProperty(propertyName));
    console.log(uint16Array.hasOwnProperty(propertyName));
    console.log(int32Array.hasOwnProperty(propertyName));
    console.log(uint32Array.hasOwnProperty(propertyName));
    console.log(float32Array.hasOwnProperty(propertyName));
    console.log(float64Array.hasOwnProperty(propertyName));
  } // The accessors for buffer, byteLength, byteOffset, and length are inherited from prototype and are not instance properties


  verifyInstancesDoNotHaveOwnProperty('buffer');
  verifyInstancesDoNotHaveOwnProperty('byteLength');
  verifyInstancesDoNotHaveOwnProperty('byteOffset');
  verifyInstancesDoNotHaveOwnProperty('length');
  verifyInstancesDoNotHaveOwnProperty(Symbol.toStringTag, '@@toStringTag');
}

t6();

function t7() {
  var typedArrayPrototype = Int8Array.prototype.__proto__;
  console.log(Array.prototype.toString, typedArrayPrototype.toString);
  console.log(Array.prototype.toLocaleString, typedArrayPrototype.toLocaleString);
}

t7();

function t8() {
  var typedArrayPrototype = Int8Array.prototype.__proto__;
  var descriptor = Object.getOwnPropertyDescriptor(typedArrayPrototype, 'buffer');

  try {
    typedArrayPrototype.buffer;
  } catch (e) {
    ;
  }

  try {
    descriptor.get();
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call();
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call(undefined);
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call([1, 2, 3]);
  } catch (e) {
    ;
  }

  var buf = new ArrayBuffer(100);
  console.log(buf, new Uint8Array(buf).buffer);
  console.log(20, new Uint8Array(20).buffer.byteLength);
  console.log(buf, descriptor.get.call(new Float32Array(buf)));
}

t8();

function t9() {
  var typedArrayPrototype = Int8Array.prototype.__proto__;
  var descriptor = Object.getOwnPropertyDescriptor(typedArrayPrototype, 'byteLength');

  try {
    typedArrayPrototype.byteLength;
  } catch (e) {
    ;
  }

  try {
    descriptor.get();
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call();
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call(undefined);
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call([1, 2, 3]);
  } catch (e) {
    ;
  }

  var buf = new ArrayBuffer(100);
  console.log(100, new Uint8Array(buf).byteLength);
  console.log(80, new Uint32Array(20).byteLength);
  console.log(100, descriptor.get.call(new Float32Array(buf)));
}

t9();

function t10() {
  var typedArrayPrototype = Int8Array.prototype.__proto__;
  var descriptor = Object.getOwnPropertyDescriptor(typedArrayPrototype, 'byteOffset');

  try {
    typedArrayPrototype.byteOffset;
  } catch (e) {
    ;
  }

  try {
    descriptor.get();
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call();
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call(undefined);
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call([1, 2, 3]);
  } catch (e) {
    ;
  }

  var buf = new ArrayBuffer(100);
  console.log(0, new Uint8Array(buf).byteOffset);
  console.log(0, new Uint16Array(20).byteOffset);
  console.log(8, new Uint32Array(buf, 8).byteOffset);
  console.log(0, descriptor.get.call(new Float32Array(buf)));
}

t10();

function t11() {
  var typedArrayPrototype = Int8Array.prototype.__proto__;
  var descriptor = Object.getOwnPropertyDescriptor(typedArrayPrototype, 'length');

  try {
    typedArrayPrototype.length;
  } catch (e) {
    ;
  }

  try {
    descriptor.get();
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call();
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call(undefined);
  } catch (e) {
    ;
  }

  try {
    descriptor.get.call([1, 2, 3]);
  } catch (e) {
    ;
  }

  var buf = new ArrayBuffer(100);
  console.log(100, new Uint8Array(buf).length);
  console.log(20, new Uint32Array(20).length);
  console.log(50, descriptor.get.call(new Uint16Array(buf)));
}

t11();

function t12() {
  var typedArrayPrototype = Int8Array.prototype.__proto__;
  var descriptor = Object.getOwnPropertyDescriptor(typedArrayPrototype, Symbol.toStringTag);

  try {
    typedArrayPrototype.length;
  } catch (e) {
    ;
  }

  console.log(undefined, descriptor.get.call());
  console.log('Int8Array', new Int8Array(10)[Symbol.toStringTag]);
  console.log('Uint8Array', new Uint8Array(10)[Symbol.toStringTag]);
  console.log('Uint8ClampedArray', new Uint8ClampedArray(10)[Symbol.toStringTag]);
  console.log('Int16Array', new Int16Array(10)[Symbol.toStringTag]);
  console.log('Uint16Array', new Uint16Array(10)[Symbol.toStringTag]);
  console.log('Int32Array', new Int32Array(10)[Symbol.toStringTag]);
  console.log('Uint32Array', new Uint32Array(10)[Symbol.toStringTag]);
  console.log('Float32Array', new Float32Array(10)[Symbol.toStringTag]);
  console.log('Float64Array', new Float64Array(10)[Symbol.toStringTag]);
}

t12();

function t13() {
  console.log([0, 1, 2, 3], Uint8Array.from([0, 1, 2, 3]));
  console.log([0, 1, 2, 3], Uint8Array.from({
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4
  }));
}

t13();

function t14() {
  var fromFnc = Uint8Array.__proto__.from;
  var b = fromFnc.call(Float64Array, [1, 2, 3, 4, 5, 6]);
  console.log('object', typeof b);
  console.log([1, 2, 3, 4, 5, 6], b);
  console.log(6, b.length);
  console.log(ArrayBuffer.isView(b) && b instanceof Float64Array);
  var a = {
    0: 0,
    1: 1,
    2: 2,
    length: 5
  };
  var b = fromFnc.call(Uint8Array, a);
  console.log(5, b.length);
  console.log(ArrayBuffer.isView(b));
  console.log(5, b.byteLength);
  console.log([0, 1, 2, 0, 0], b);
  var a = {
    0: 0,
    1: 1,
    2: 2,
    length: 5
  };
  var b = fromFnc.call(Float64Array, a);
  console.log('object', typeof b);
  console.log(5, b.length);
  console.log(ArrayBuffer.isView(b) && b instanceof Float64Array);
  console.log([0, 1, 2, NaN, NaN], b);
  var a = {
    0: 0,
    1: 1
  };
  var b = fromFnc.call(Float64Array, a);
  console.log('object', typeof b);
  console.log(0, b.length);
  console.log(ArrayBuffer.isView(b) && b instanceof Float64Array);
  console.log([], b);

  try {
    fromFnc.call();
  } catch (e) {
    ;
  }

  try {
    fromFnc.call(undefined);
  } catch (e) {
    ;
  }

  try {
    fromFnc.call('string');
  } catch (e) {
    ;
  }

  try {
    fromFnc.call(Math.sin, []);
  } catch (e) {
    ;
  }

  try {
    Uint8Array.from();
  } catch (e) {
    ;
  }

  try {
    Uint8Array.from(undefined);
  } catch (e) {
    ;
  }

  try {
    Uint8Array.from(null);
  } catch (e) {
    ;
  }

  try {
    Uint8Array.from({}, undefined);
  } catch (e) {
    ;
  }

  try {
    Uint8Array.from({}, null);
  } catch (e) {
    ;
  }

  try {
    Uint8Array.from({}, 'string');
  } catch (e) {
    ;
  }

  try {
    Uint8Array.from({}, {});
  } catch (e) {
    ;
  }

  try {
    fromFnc.call(String, [0, 1, 2, 3]);
  } catch (e) {
    ;
  }
}

t14();

function t15() {
  var u = Uint8ClampedArray.from([0, -1, 2, 300]);
  console.log(4, u.length);
  console.log(ArrayBuffer.isView(u));
  console.log(4, u.byteLength);
  console.log([0, 0, 2, 255], u);
}

t15();

function t16() {
  var fromFnc = Uint8Array.__proto__.from;
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        i: 0,
        next: function () {
          return {
            done: this.i == 5,
            value: this.i++
          };
        }
      };
    }
  };
  var b = fromFnc.call(Uint8Array, objectWithIterator);
  console.log(5, b.length);
  console.log(ArrayBuffer.isView(b));
  console.log(5, b.byteLength);
  console.log([0, 1, 2, 3, 4], b);
}

t16();

function t17() {
  var fromFnc = Uint8Array.__proto__.from;
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        i: 0,
        next: function () {
          CollectGarbage();
          return {
            done: this.i == 10,
            value: this.i++
          };
        }
      };
    }
  };
  var b = fromFnc.call(Float64Array, objectWithIterator);
  console.log(10, b.length);

  for (var i = 0; i < b.length; i++) {
    console.log(b[i] !== undefined);
    console.log('number', typeof b[i]);
    console.log(i, b[i]);
  }
}

t17();

function t18() {
  var i = 0;

  function mapFunction(val, k) {
    console.log(i, k);
    console.log(val, k);
    console.log(2, arguments.length); // increment expected index

    i++;
  }

  var objectWithoutIterator = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4
  }; // Verify mapFunction gets called with correct arguments

  Int8Array.from(objectWithoutIterator, mapFunction);
}

t18();

function t19() {
  var thisArg = 'thisArg';

  function mapFunction(val, k) {
    // this will be wrapped as an Object
    console.log(Object(thisArg), this);
  }

  var objectWithoutIterator = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4
  }; // Verify mapFunction gets called with thisArg passed as this

  Int8Array.from(objectWithoutIterator, mapFunction, thisArg);
}

t19();

function t20() {
  var objectWithoutIterator = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    length: 5
  };

  function mapFunction(val, k) {
    switch (k) {
      case 0:
        // change the objectWithoutIterator length value - we should still fetch the rest of the indexed-elements anyway
        objectWithoutIterator.length = 0;
        return val;

      case 1:
        // change the value of the next indexed value - the new value should end up in the return object
        objectWithoutIterator[2] = 200;
        return val;

      case 2:
        // change the value of a previous indexed value - the old value should end up in the return object
        objectWithoutIterator[0] = -100;
        return val;

      case 3:
        // delete the next indexed value - return object should have undefined there
        delete objectWithoutIterator[4];
        return val;
    } // otherwise


    return val;
  }

  console.log([0, 1, 200, 3, 0], Int32Array.from(objectWithoutIterator, mapFunction));
}

t20();

function t21() {
  var j = 0;
  var checkThisArg = false;
  var thisArg = 'string';
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        i: 0,
        next: function () {
          return {
            done: this.i == 5,
            value: this.i++
          };
        }
      };
    }
  };

  function mapFunction(val, k) {
    console.log(j, val);
    console.log(val, val);
    console.log(2, arguments.length); // increment expected value

    j++;

    if (checkThisArg) {
      // this will be wrapped as an Object
      console.log(Object(thisArg), this);
    }
  } // Verify mapFunction gets called with correct arguments


  Int8Array.from(objectWithIterator, mapFunction);
  j = 0;
  checkThisArg = true; // Verify mapFunction gets called with thisArg passed as this

  Int8Array.from(objectWithIterator, mapFunction, thisArg);
}

t21();

function t22() {
  var iterator_val = 0;
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          return {
            done: iterator_val == 5,
            value: iterator_val++
          };
        }
      };
    }
  };
  var reset = false;

  function mapFunction(val, k) {
    if (val == 2 && !reset) {
      reset = true;
      iterator_val = 0;
    }

    return val;
  }

  console.log([0, 1, 2, 3, 4], Int8Array.from(objectWithIterator, mapFunction));
}

t22();

function t23() {
  // Test GetIterator where obj[@@iterator] is not a function
  var objectWithIteratorThatIsNotAFunction = {
    [Symbol.iterator]: 'a string'
  };

  try {
    Int8Array.from(objectWithIteratorThatIsNotAFunction);
  } catch (e) {
    ;
  } // Test GetIterator where obj[@@iterator] is a function which doesn't return an object


  var objectWithIteratorWhichDoesNotReturnObjects = {
    [Symbol.iterator]: function () {
      return undefined;
    }
  };

  try {
    Int8Array.from(objectWithIteratorWhichDoesNotReturnObjects);
  } catch (e) {
    ;
  } // Test IteratorNext where obj[@@iterator].next is not a function


  var objectWithIteratorNextIsNotAFunction = {
    [Symbol.iterator]: function () {
      return {
        next: undefined
      };
    }
  };

  try {
    Int8Array.from(objectWithIteratorNextIsNotAFunction);
  } catch (e) {
    ;
  } // Test IteratorNext where obj[@@iterator].next doesn't return an object


  var objectWithIteratorNextDoesNotReturnObjects = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          return undefined;
        }
      };
    }
  };

  try {
    Int8Array.from(objectWithIteratorNextDoesNotReturnObjects);
  } catch (e) {
    ;
  }
}

t23();

function t24() {
  console.log([], Uint8Array.of());
  console.log([3], Uint8Array.of(3));
  console.log([0, 1, 2, 3], Uint8Array.of(0, 1, 2, 3));
}

t24();

function t25() {
  var ofFnc = Uint8Array.__proto__.of;
  var u = ofFnc.call(Uint8ClampedArray, 0, -1, 2, 300, 4);
  console.log(5, u.length);
  console.log(ArrayBuffer.isView(u));
  console.log(5, u.byteLength);
  console.log([0, 0, 2, 255, 4], u);
  var b = Uint8Array.of();
  console.log(0, b.length);
  console.log(0, b.byteLength);
  console.log(ArrayBuffer.isView(b));
  console.log(Uint8Array, b.constructor);

  try {
    ofFnc.call();
  } catch (e) {
    ;
  }

  try {
    ofFnc.call(undefined);
  } catch (e) {
    ;
  }

  try {
    ofFnc.call('string');
  } catch (e) {
    ;
  }
}

t25();

function t26() {
  function getTypedArray() {
    var t = new Int8Array(10);

    for (var i = 0; i < t.length; i++) {
      t[i] = i + 1;
    }

    return t;
  }

  function getRegularArray() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  function getObjectArray() {
    return {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 6,
      6: 7,
      7: 8,
      8: 9,
      9: 10,
      length: 10
    };
  }

  function testMethod(copyWithinFn, getDataFn) {
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn()));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 0));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 0, 0));
    console.log([6, 7, 8, 9, 10, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 0, 5));
    console.log([6, 7, 8, 9, 10, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 0, 5, 10));
    console.log([6, 7, 8, 9, 10, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 0, 5, 11));
    console.log([6, 2, 3, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), -50, 5, 6));
    console.log([6, 7, 3, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), -10, 5, 7));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 0, 5, 3));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 0, 5, 5));
    console.log([6, 7, 8, 9, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 0, 5, 9));
    console.log([6, 7, 8, 9, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 0, 5, -1));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 6], copyWithinFn.call(getDataFn(), -1, 5));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), -5, 5, -1));
    console.log([1, 6, 7, 8, 9, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 1, -5, -1));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 1, 0, -10));
    console.log([1, 1, 2, 4, 5, 6, 7, 8, 9, 10], copyWithinFn.call(getDataFn(), 1, -100, 2));
    console.log([2, 3, 4, 5, 6, 7, 8, 9, 10, 10], copyWithinFn.call(getDataFn(), 0, -9));
  }

  testMethod(Uint8Array.prototype.__proto__.copyWithin, getTypedArray);
  testMethod(Array.prototype.copyWithin, getRegularArray);
  testMethod(Array.prototype.copyWithin, getTypedArray);
  var copyWithinFn = Uint8Array.prototype.__proto__.copyWithin;
  console.log(ArrayBuffer.isView(copyWithinFn.call(getTypedArray(), 0, 0)));
  console.log("Int8Array", copyWithinFn.call(getTypedArray(), 0, 0)[Symbol.toStringTag]);
  console.log(ArrayBuffer.isView(Array.prototype.copyWithin.call(getTypedArray(), 0, 0)));
  console.log(ArrayBuffer.isView(Array.prototype.copyWithin.call(getRegularArray(), 0, 0)));
  console.log(ArrayBuffer.isView(Array.prototype.copyWithin.call(getObjectArray(), 0, 0)));

  try {
    copyWithinFn.call();
  } catch (e) {
    ;
  }

  try {
    copyWithinFn.call(undefined);
  } catch (e) {
    ;
  }

  try {
    copyWithinFn.call('string');
  } catch (e) {
    ;
  }

  try {
    copyWithinFn.call(getRegularArray());
  } catch (e) {
    ;
  }

  try {
    copyWithinFn.call(getObjectArray());
  } catch (e) {
    ;
  }

  {
    let buffer = new ArrayBuffer(0x1000);
    let u32 = new Uint32Array(buffer);
    let t = {
      valueOf: function () {
        ArrayBuffer.detach(buffer);
        return 3;
      }
    };

    try {
      u32.copyWithin(3, 0, t);
    } catch (e) {
      ;
    }
  }
}

t26();

function t27() {
  var fill = Uint8Array.prototype.__proto__.fill;

  function getTypedArray() {
    var t = new Int8Array(10);

    for (var i = 0; i < t.length; i++) {
      t[i] = i + 1;
    }

    return t;
  }

  function testMethod(getDataFn) {
    console.log([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], fill.call(getDataFn(), 0));
    console.log([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], fill.call(getDataFn(), 0, undefined));
    console.log([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], fill.call(getDataFn(), 0, 0));
    console.log([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], fill.call(getDataFn(), 0, 0, 100));
    console.log([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], fill.call(getDataFn(), 0, -50));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fill.call(getDataFn(), 0, 100));
    console.log([1, 2, 3, 4, 5, 0, 0, 0, 0, 0], fill.call(getDataFn(), 0, 5));
    console.log([0, 0, 0, 0, 0, 6, 7, 8, 9, 10], fill.call(getDataFn(), 0, 0, 5));
    console.log([1, 2, 3, 0, 5, 6, 7, 8, 9, 10], fill.call(getDataFn(), 0, 3, 4));
    console.log([1, 2, 3, 4, 5, 6, 7, 0, 0, 10], fill.call(getDataFn(), 0, -3, -1));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], fill.call(getDataFn(), 0, -1));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fill.call(getDataFn(), 0, 5, 4));
    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fill.call(getDataFn(), 0, 4, 4));
  }

  testMethod(getTypedArray);

  try {
    fill.call();
  } catch (e) {
    ;
  }

  try {
    fill.call(undefined);
  } catch (e) {
    ;
  }

  try {
    fill.call('string');
  } catch (e) {
    ;
  }
}

t27();

function t28() {
  var mapFn = Int8Array.prototype.__proto__.map;
  var counter = 0;
  var t;
  var thisArg = 'a string';

  function getTypedArray() {
    // Reset the counter var here
    counter = 0; // Save the latest array in t for use by the mapping function

    t = new Int8Array(10);

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  function mappingFn(elem, index, arr) {
    console.log(index, counter);
    console.log(elem, index);
    console.log(arr === t);
    console.log(Object(thisArg), this); // Increment counter var for the next index

    counter++;
    return -1 * elem;
  }

  function testMethod(testFn, getDataFn, isReturnTypedArray) {
    console.log([0, -1, -2, -3, -4, -5, -6, -7, -8, -9], testFn.call(getDataFn(), mappingFn, thisArg));

    if (isReturnTypedArray) {
      console.log(ArrayBuffer.isView(testFn.call(getDataFn(), mappingFn, thisArg)));
      console.log("Int8Array", testFn.call(getDataFn(), mappingFn, thisArg)[Symbol.toStringTag]);
    } else {
      console.log(ArrayBuffer.isView(testFn.call(getDataFn(), mappingFn, thisArg)));
    }
  }

  testMethod(mapFn, getTypedArray, true);
  testMethod(Array.prototype.map, getTypedArray, false); // %TypedArray%.prototype.map loads the constructor property from the this parameter and uses that to construct the return value.
  // If we set the constructor property of some TypedArray to Array built-in constructor, we should get an array object out.

  var u = getTypedArray();
  u.constructor = Array;

  try {
    u.map(mappingFn, thisArg);
  } catch (e) {
    ;
  }

  u.constructor = Int16Array;
  var r = u.map(mappingFn, thisArg);
  console.log([0, -1, -2, -3, -4, -5, -6, -7, -8, -9], r);
  console.log(ArrayBuffer.isView(r) && r instanceof Int16Array); // %TypedArray%.prototype.map loads the constructor property from the this parameter and uses that to construct the return value.
  // If we set the constructor property of some TypedArray to a non-constructor, it should throw.

  var u = getTypedArray();
  u.constructor = undefined;

  try {
    u.map(mappingFn, thisArg);
  } catch (e) {
    ;
  }

  try {
    mapFn.call();
  } catch (e) {
    ;
  }

  try {
    mapFn.call(undefined);
  } catch (e) {
    ;
  }

  try {
    mapFn.call('string');
  } catch (e) {
    ;
  }

  try {
    mapFn.call(new Uint8Array(10));
  } catch (e) {
    ;
  }

  try {
    mapFn.call(new Uint8Array(10), undefined);
  } catch (e) {
    ;
  }

  try {
    mapFn.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }
}

t28();

function t29() {
  // We have to make sure that we don't rely on the TypedArray internal length slot when passing a TypedArray object
  // to Array.prototype.map as the this argument. The object might lie about the length property.
  var mapFn = Array.prototype.map;
  var counter = 0;
  var t;
  var thisArg = 'a string';

  function getTypedArray() {
    // Reset the counter var here
    counter = 0; // Save the latest array in t for use by the mapping function

    t = new Int8Array(10);

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  function mappingFn(elem, index, arr) {
    console.log(index, counter);
    console.log(elem, index);
    console.log(arr === t);
    console.log(Object(thisArg), this); // Increment counter var for the next index

    counter++;
    return -1 * elem;
  } // This object lies and says it has length of 5 (while the internal length slot is 10)


  var ui8 = new getTypedArray();
  Object.defineProperty(ui8, 'length', {
    value: 5
  }); // Since Array.prototype.map doesn't care about TypedArrays and always gets the length property,
  // result array should only have 5 elements.

  var res = mapFn.call(ui8, mappingFn, thisArg);
  console.log([0, -1, -2, -3, -4], res);
  console.log(ArrayBuffer.isView(res));
}

t29();

function t30() {
  var counter = 0;

  var fn = function (elem) {
    counter++;
    return elem;
  }; // Validating how many times the map function is called.


  [[-1, 0], [2, 2], [100, 8], [2 ** 31, 8]].forEach(function ([len, expectedCounter]) {
    var v = new Int8Array(8);
    counter = 0;
    Object.defineProperty(v, 'length', {
      value: len
    });
    Array.prototype.map.call(v, fn);
    console.log(counter, expectedCounter);
  });
}

t30();

function t31() {
  var counter = 0;

  var fn = function (elem) {
    counter++;
    return elem;
  }; // Validating how many times the find function is called.


  [[-1, 0], [2, 2], [100, 100]].forEach(function ([len, expectedCounter]) {
    var v = new Int8Array(8);
    counter = 0;
    Object.defineProperty(v, 'length', {
      value: len
    });
    Array.prototype.find.call(v, fn);
    console.log(counter, expectedCounter);
  });
}

t31();

function t32() {
  var forEachFn = Int8Array.prototype.__proto__.forEach;
  var counter = 0;
  var t;
  var thisArg = 'a string';
  var verifyThisArg = true;

  function callbackFn(val, k, arr) {
    console.log(counter, val);
    console.log(k, val);
    console.log(t === arr);

    if (verifyThisArg) {
      console.log(Object(thisArg), this);
    }

    counter++;
  }

  function getTypedArray() {
    // Reset the counter var here
    counter = 0; // Save the latest array in t for use by the callback function

    t = new Int8Array(10);

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  console.log(undefined, forEachFn.call(getTypedArray(), callbackFn, thisArg));
  console.log(10, counter);
  verifyThisArg = false;
  console.log(undefined, forEachFn.call(getTypedArray(), callbackFn));
  console.log(10, counter);

  try {
    forEachFn.call();
  } catch (e) {
    ;
  }

  try {
    forEachFn.call(undefined);
  } catch (e) {
    ;
  }

  try {
    forEachFn.call('string');
  } catch (e) {
    ;
  }

  try {
    forEachFn.call(new Uint8Array(10));
  } catch (e) {
    ;
  }

  try {
    forEachFn.call(new Uint8Array(10), undefined);
  } catch (e) {
    ;
  }

  try {
    forEachFn.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }
}

t32();

function t33() {
  var indexOfFn = Int8Array.prototype.__proto__.indexOf;

  function getTypedArray() {
    var t = new Int8Array(10);

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  console.log(-1, indexOfFn.call(getTypedArray(), undefined));
  console.log(0, indexOfFn.call(getTypedArray(), 0));
  console.log(9, indexOfFn.call(getTypedArray(), 9));
  console.log(-1, indexOfFn.call(getTypedArray(), 0, 1));
  console.log(-1, indexOfFn.call(getTypedArray(), 0, 11));
  console.log(0, indexOfFn.call(getTypedArray(), 0, -10));
  console.log(5, indexOfFn.call(getTypedArray(), 5, -5)); // If we use Array.prototype.indexOf but pass TypedArray objects, make sure the property named length is used instead of the internal TypedArray length slot

  var u = getTypedArray();
  Object.defineProperty(u, 'length', {
    value: 0
  });
  console.log(-1, Array.prototype.indexOf.call(u, 0));
  var u = getTypedArray();
  Object.defineProperty(u, 'length', {
    value: 5
  });
  console.log(-1, Array.prototype.indexOf.call(u, 6));

  try {
    indexOfFn.call();
  } catch (e) {
    ;
  }

  try {
    indexOfFn.call(undefined);
  } catch (e) {
    ;
  }

  try {
    indexOfFn.call('string');
  } catch (e) {
    ;
  }
}

t33();

function t34() {
  var includesFn = Int8Array.prototype.__proto__.includes;

  function getTypedArray() {
    var t = new Int8Array(10);

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  console.log(includesFn.call(getTypedArray(), undefined));
  console.log(includesFn.call(getTypedArray(), 0));
  console.log(includesFn.call(getTypedArray(), 9));
  console.log(includesFn.call(getTypedArray(), 0, 1));
  console.log(includesFn.call(getTypedArray(), 0, 11));
  console.log(includesFn.call(getTypedArray(), 0, -10));
  console.log(includesFn.call(getTypedArray(), 5, -5)); // If we use Array.prototype.includes but pass TypedArray objects, make sure the property named length is used instead of the internal TypedArray length slot

  var u = getTypedArray();
  Object.defineProperty(u, 'length', {
    value: 0
  });
  console.log(Array.prototype.includes.call(u, 0));
  var u = getTypedArray();
  Object.defineProperty(u, 'length', {
    value: 5
  });
  console.log(Array.prototype.includes.call(u, 6));

  try {
    includesFn.call();
  } catch (e) {
    ;
  }

  try {
    includesFn.call(undefined);
  } catch (e) {
    ;
  }

  try {
    includesFn.call('string');
  } catch (e) {
    ;
  }
}

t34();

function t35() {
  var lastIndexOf = Int8Array.prototype.__proto__.lastIndexOf;

  function getTypedArray() {
    var t = new Int8Array(10);

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  console.log(-1, lastIndexOf.call(getTypedArray(), undefined));
  console.log(0, lastIndexOf.call(getTypedArray(), 0));
  console.log(9, lastIndexOf.call(getTypedArray(), 9));
  console.log(-1, lastIndexOf.call(getTypedArray(), 9, -2));
  console.log(-1, lastIndexOf.call(getTypedArray(), 4, 2));
  console.log(0, lastIndexOf.call(getTypedArray(), 0, -10));
  console.log(5, lastIndexOf.call(getTypedArray(), 5, -5));
  var u = getTypedArray();
  u[3] = 2;
  u[4] = 2;
  u[5] = 2;
  console.log(5, lastIndexOf.call(u, 2));
  Object.defineProperty(u, 'length', {
    value: 4
  });
  console.log(3, Array.prototype.lastIndexOf.call(u, 2));
  var u = getTypedArray();
  Object.defineProperty(u, 'length', {
    value: 0
  });
  console.log(-1, Array.prototype.lastIndexOf.call(u, 0));

  try {
    lastIndexOf.call();
  } catch (e) {
    ;
  }

  try {
    lastIndexOf.call(undefined);
  } catch (e) {
    ;
  }

  try {
    lastIndexOf.call('string');
  } catch (e) {
    ;
  }
}

t35();

function t36() {
  var reverse = Int8Array.prototype.__proto__.reverse;

  function getTypedArray() {
    var t = new Int8Array(10);

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  console.log([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], reverse.call(getTypedArray()));
  var u = getTypedArray();
  console.log(u, reverse.call(u));
  console.log(u === reverse.call(u));
  var u = new Uint8Array(3);
  u[0] = 1;
  u[1] = 2;
  u[2] = 3;
  console.log([3, 2, 1], reverse.call(u));
  var u = new Uint8Array(1);
  u[0] = 1;
  console.log([1], reverse.call(u));
  var u = new Uint8Array(0);
  console.log([], reverse.call(u)); // Call Array.prototype.reverse passing a TypedArray that lies about length. We should only reverse the part of it less than the indicated length.

  u = getTypedArray();
  Object.defineProperty(u, 'length', {
    value: 5
  });
  console.log([4, 3, 2, 1, 0, 5, 6, 7, 8, 9], Array.prototype.reverse.call(u)); // Call Array.prototype.reverse passing a TypedArray that lies about length. TypedArrays do not support delete so we will throw if indicated length is longer than actual.

  u = getTypedArray();
  Object.defineProperty(u, 'length', {
    value: 20
  });

  try {
    Array.prototype.reverse.call(u);
  } catch (e) {
    ;
  }

  try {
    reverse.call();
  } catch (e) {
    ;
  }

  try {
    reverse.call(undefined);
  } catch (e) {
    ;
  }

  try {
    reverse.call('string');
  } catch (e) {
    ;
  }
}

t36();

function t37() {
  var slice = Int8Array.prototype.__proto__.slice;

  function getTypedArray(n) {
    var t = new Int8Array(n);

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  var u = getTypedArray(10);
  console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], slice.call(u));
  console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], slice.call(u, 0));
  console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], slice.call(u, undefined));
  console.log([5, 6, 7, 8, 9], slice.call(u, 5));
  console.log([8, 9], slice.call(u, -2));
  console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], slice.call(u, -100));
  console.log([], slice.call(u, 100));
  console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], slice.call(u, 0, 50));
  console.log([0, 1], slice.call(u, 0, 2));
  console.log([8, 9], slice.call(u, 8, 10));
  console.log([6, 7, 8], slice.call(u, 6, -1));
  console.log([6, 7, 8], slice.call(u, -4, -1));
  console.log([5], slice.call(u, 5, 6));
  console.log([], slice.call(u, 5, 2));
  console.log([], slice.call(u, 100, 2));
  console.log([], slice.call(u, 100, -100));
  var r = u.slice();
  console.log(u !== r);
  console.log(ArrayBuffer.isView(r));
  console.log(u[Symbol.toStringTag], r[Symbol.toStringTag]);
  u.constructor = Float32Array;
  var r = u.slice();
  console.log(ArrayBuffer.isView(r));
  console.log("Float32Array", r[Symbol.toStringTag]);
  u.constructor = String;
  var r = u.slice();
  console.log(ArrayBuffer.isView(r));
  console.log(0, r[0]);
  console.log(1, r[1]);
  console.log(2, r[2]);
  console.log(3, r[3]);
  console.log(8, r[8]);
  console.log(9, r[9]);
  console.log(10, r.length);
  u.constructor = Array;

  try {
    u.slice();
  } catch (e) {
    ;
  }

  try {
    slice.call();
  } catch (e) {
    ;
  }

  try {
    slice.call(undefined);
  } catch (e) {
    ;
  }

  try {
    slice.call('string');
  } catch (e) {
    ;
  }

  u.constructor = Math.sin;

  try {
    slice.call(u);
  } catch (e) {
    ;
  }
}

t37();

function t38() {
  var sort = Int8Array.prototype.__proto__.sort;

  function getTypedArray(n) {
    var t = new Int8Array(n);

    for (var i = 0; i < t.length; i++) {
      t[i] = n - i;
    }

    return t;
  }

  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], getTypedArray(10).sort());
  console.log([], getTypedArray(0).sort());
  console.log([1], getTypedArray(1).sort());
  console.log([1, 2], getTypedArray(2).sort());
  var u = new Uint8Array(6);
  u[0] = 200;
  u[1] = 150;
  u[2] = u[3] = u[4] = 100;
  u[5] = 0;
  console.log([0, 100, 100, 100, 150, 200], u.sort());
  var f = new Float64Array(5);
  f[0] = 100.0;
  f[1] = 99.999999999999;
  f[2] = 99.9999;
  f[3] = 99.99999;
  f[4] = 99.9999;
  console.log([99.9999, 99.9999, 99.99999, 99.999999999999, 100], f.sort());

  function sortCallbackReverse(x, y) {
    if (x < y) {
      return 1;
    } else {
      if (x > y) {
        return -1;
      }
    }

    return 0;
  }

  function sortCallback(x, y) {
    if (x < y) {
      return -1;
    } else {
      if (x > y) {
        return 1;
      }
    }

    return 0;
  }

  function sortCallbackHate5(x, y) {
    if (x == 5) {
      return -1;
    }

    if (y == 5) {
      return 1;
    }

    return sortCallback(x, y);
  }

  function sortCallbackMalformed(x, y) {
    switch (x) {
      case 1:
        return 0;

      case 2:
        return -10.5;

      case 3:
        return 'a string';

      case 4:
        return {
          foo: 'another string'
        };

      case 5:
        return function foo() {
          return 90;
        };

      case 6:
        return 12.99999999999;
    }

    return undefined;
  }

  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], getTypedArray(10).sort(sortCallback));
  console.log([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], getTypedArray(10).sort(sortCallbackReverse));
  console.log([5, 1, 2, 3, 4, 6, 7, 8, 9, 10], getTypedArray(10).sort(sortCallbackHate5));
  console.log([2, 9, 10, 8, 7, 5, 4, 3, 6, 1], getTypedArray(10).sort(sortCallbackMalformed));

  try {
    sort.call();
  } catch (e) {
    ;
  }

  try {
    sort.call(undefined);
  } catch (e) {
    ;
  }

  try {
    sort.call('string');
  } catch (e) {
    ;
  }

  try {
    sort.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }
}

t38();

function t39() {
  var findFn = Int8Array.prototype.__proto__.find;
  var thisArg = 'value';
  var t;
  var counter;

  function getTypedArray(n) {
    // Also remember t for use in verifying in the callback
    t = new Int8Array(n); // Reset counter

    counter = 0;

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  function assertCallbackBehavior(val, k, arr, _that) {
    console.log(counter, k);
    console.log(val, k);
    console.log(Object(thisArg), _that);
    console.log(t, arr);
  }

  var expectedValue = 5;

  function callbackFalseOnExpectedValue(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;

    if (expectedValue === val) {
      return true;
    }

    return false;
  }

  function callbackAlwaysFalse(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;
    return false;
  }

  console.log(undefined, findFn.call(getTypedArray(10), callbackAlwaysFalse, thisArg));
  console.log(10, counter);
  console.log(expectedValue, findFn.call(getTypedArray(10), callbackFalseOnExpectedValue, thisArg));
  console.log(6, counter);
  expectedValue = 0;
  console.log(expectedValue, findFn.call(getTypedArray(10), callbackFalseOnExpectedValue, thisArg));
  console.log(1, counter);
  expectedValue = 9;
  console.log(expectedValue, findFn.call(getTypedArray(10), callbackFalseOnExpectedValue, thisArg));
  console.log(10, counter);

  try {
    findFn.call();
  } catch (e) {
    ;
  }

  try {
    findFn.call(undefined);
  } catch (e) {
    ;
  }

  try {
    findFn.call('string');
  } catch (e) {
    ;
  }

  try {
    findFn.call(new Uint8Array(10));
  } catch (e) {
    ;
  }

  try {
    findFn.call(new Uint8Array(10), undefined);
  } catch (e) {
    ;
  }

  try {
    findFn.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }
}

t39();

function t40() {
  var findIndex = Int8Array.prototype.__proto__.findIndex;
  var thisArg = 'value';
  var t;
  var counter;

  function getTypedArray(n) {
    // Also remember t for use in verifying in the callback
    t = new Int8Array(n); // Reset counter

    counter = 0;

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  function assertCallbackBehavior(val, k, arr, _that) {
    console.log(counter, k);
    console.log(val, k);
    console.log(Object(thisArg), _that);
    console.log(t, arr);
  }

  var expectedValue = 5;

  function callbackFalseOnExpectedValue(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;

    if (expectedValue === val) {
      return true;
    }

    return false;
  }

  function callbackAlwaysFalse(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;
    return false;
  }

  console.log(-1, findIndex.call(getTypedArray(10), callbackAlwaysFalse, thisArg));
  console.log(10, counter);
  console.log(expectedValue, findIndex.call(getTypedArray(10), callbackFalseOnExpectedValue, thisArg));
  console.log(6, counter);
  expectedValue = 0;
  console.log(expectedValue, findIndex.call(getTypedArray(10), callbackFalseOnExpectedValue, thisArg));
  console.log(1, counter);
  expectedValue = 9;
  console.log(expectedValue, findIndex.call(getTypedArray(10), callbackFalseOnExpectedValue, thisArg));
  console.log(10, counter);

  try {
    findIndex.call();
  } catch (e) {
    ;
  }

  try {
    findIndex.call(undefined);
  } catch (e) {
    ;
  }

  try {
    findIndex.call('string');
  } catch (e) {
    ;
  }

  try {
    findIndex.call(new Uint8Array(10));
  } catch (e) {
    ;
  }

  try {
    findIndex.call(new Uint8Array(10), undefined);
  } catch (e) {
    ;
  }

  try {
    findIndex.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }
}

t40();

function t41() {
  var filter = Int8Array.prototype.__proto__.filter;
  var thisArg = 'value';
  var t;
  var counter;

  function getTypedArray(n) {
    // Also remember t for use in verifying in the callback
    t = new Int8Array(n); // Reset counter

    counter = 0;

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  function assertCallbackBehavior(val, k, arr, _that) {
    console.log(counter, k);
    console.log(val, k);
    console.log(Object(thisArg), _that);
    console.log(t, arr);
  }

  function selectOddNumbers(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;

    if (val % 2 != 0) {
      return true;
    }

    return false;
  }

  function selectNone(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;
    return false;
  }

  function selectAll(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;
    return true;
  }

  var counter = 0;
  var res = filter.call(getTypedArray(10), selectOddNumbers, thisArg);
  console.log([1, 3, 5, 7, 9], res);
  console.log(ArrayBuffer.isView(res));
  console.log("Int8Array", res[Symbol.toStringTag]);
  console.log(10, counter);
  console.log([], filter.call(getTypedArray(10), selectNone, thisArg));
  console.log(10, counter);
  console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], filter.call(getTypedArray(10), selectAll, thisArg));
  console.log(10, counter);
  var u = getTypedArray(10);
  u.constructor = Int16Array;
  counter = 0;
  var res = filter.call(u, selectOddNumbers, thisArg);
  console.log([1, 3, 5, 7, 9], res);
  console.log(ArrayBuffer.isView(res) && res instanceof Int16Array);
  console.log("Int16Array", res[Symbol.toStringTag]);
  console.log(10, counter);
  u.constructor = Math.sin;
  counter = 0;

  try {
    filter.call(u, selectOddNumbers, thisArg);
  } catch (e) {
    ;
  }

  try {
    filter.call();
  } catch (e) {
    ;
  }

  try {
    filter.call(undefined);
  } catch (e) {
    ;
  }

  try {
    filter.call('string');
  } catch (e) {
    ;
  }

  try {
    filter.call(new Uint8Array(10));
  } catch (e) {
    ;
  }

  try {
    filter.call(new Uint8Array(10), undefined);
  } catch (e) {
    ;
  }

  try {
    filter.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }
}

t41();

function t42() {
  var every = Int8Array.prototype.__proto__.every;
  var thisArg = 'value';
  var t;
  var counter;

  function getTypedArray(n) {
    // Also remember t for use in verifying in the callback
    t = new Int8Array(n); // Reset counter

    counter = 0;

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  function assertCallbackBehavior(val, k, arr, _that) {
    console.log(counter, k);
    console.log(val, k);
    console.log(Object(thisArg), _that);
    console.log(t, arr);
  }

  var expectedValue = 5;

  function callbackFalseOnExpectedValue(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;

    if (expectedValue === val) {
      return false;
    }

    return true;
  }

  function callbackAlwaysTrue(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;
    return true;
  }

  console.log(every.call(getTypedArray(10), callbackAlwaysTrue, thisArg));
  console.log(10, counter);
  console.log(every.call(getTypedArray(10), callbackFalseOnExpectedValue, thisArg));
  console.log(6, counter);

  try {
    every.call();
  } catch (e) {
    ;
  }

  try {
    every.call(undefined);
  } catch (e) {
    ;
  }

  try {
    every.call('string');
  } catch (e) {
    ;
  }

  try {
    every.call(new Uint8Array(10));
  } catch (e) {
    ;
  }

  try {
    every.call(new Uint8Array(10), undefined);
  } catch (e) {
    ;
  }

  try {
    every.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }
}

t42();

function t43() {
  var some = Int8Array.prototype.__proto__.some;
  var thisArg = 'value';
  var t;
  var counter;

  function getTypedArray(n) {
    // Also remember t for use in verifying in the callback
    t = new Int8Array(n); // Reset counter

    counter = 0;

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  function assertCallbackBehavior(val, k, arr, _that) {
    console.log(counter, k);
    console.log(val, k);
    console.log(Object(thisArg), _that);
    console.log(t, arr);
  }

  var expectedValue = 5;

  function callbackTrueOnExpectedValue(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;

    if (expectedValue === val) {
      return true;
    }

    return false;
  }

  function callbackAlwaysFalse(val, k, arr) {
    val;
    k;
    arr;
    this;
    counter++;
    return false;
  }

  console.log(some.call(getTypedArray(10), callbackAlwaysFalse, thisArg));
  console.log(10, counter);
  console.log(some.call(getTypedArray(10), callbackTrueOnExpectedValue, thisArg));
  console.log(6, counter);

  try {
    some.call();
  } catch (e) {
    ;
  }

  try {
    some.call(undefined);
  } catch (e) {
    ;
  }

  try {
    some.call('string');
  } catch (e) {
    ;
  }

  try {
    some.call(new Uint8Array(10));
  } catch (e) {
    ;
  }

  try {
    some.call(new Uint8Array(10), undefined);
  } catch (e) {
    ;
  }

  try {
    some.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }
}

t43();

function t44() {
  var join = Int8Array.prototype.__proto__.join;

  function getTypedArray(n) {
    var t = new Int8Array(n);

    for (var i = 0; i < t.length; i++) {
      t[i] = i + 1;
    }

    return t;
  }

  console.log('1,2,3,4,5,6,7,8,9,10', join.call(getTypedArray(10)));
  console.log('', join.call(getTypedArray(0)));
  console.log('1', join.call(getTypedArray(1)));
  console.log('1,2', join.call(getTypedArray(2)));
  console.log('1,2,3', join.call(getTypedArray(3)));

  try {
    join.call();
  } catch (e) {
    ;
  }

  try {
    join.call(undefined);
  } catch (e) {
    ;
  }

  try {
    join.call('string');
  } catch (e) {
    ;
  }
}

t44();

function t45() {
  var reduce = Int8Array.prototype.__proto__.reduce;
  var t;
  var counter;
  var thisArg = Object(this);

  function getTypedArray(n) {
    t = new Int8Array(n);
    counter = 0;

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  function sumItemsCallback(accumulator, val, k, arr) {
    console.log(counter, k);
    console.log(val, k);
    console.log(thisArg, this);
    console.log(t, arr);
    counter++;
    return accumulator + val;
  }

  console.log(45, reduce.call(getTypedArray(10), sumItemsCallback, 0));
  console.log(10, counter);
  console.log(100, reduce.call(getTypedArray(0), sumItemsCallback, 100));
  console.log(0, counter);
  var u = getTypedArray(10);
  counter = 1;
  console.log(45, reduce.call(u, sumItemsCallback));
  console.log(10, counter);

  try {
    reduce.call();
  } catch (e) {
    ;
  }

  try {
    reduce.call(undefined);
  } catch (e) {
    ;
  }

  try {
    reduce.call('string');
  } catch (e) {
    ;
  }

  try {
    reduce.call(new Uint8Array(10));
  } catch (e) {
    ;
  }

  try {
    reduce.call(new Uint8Array(10), undefined);
  } catch (e) {
    ;
  }

  try {
    reduce.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }

  try {
    reduce.call(getTypedArray(0), sumItemsCallback);
  } catch (e) {
    ;
  }
}

t45();

function t46() {
  var reduceRight = Int8Array.prototype.__proto__.reduceRight;
  var t;
  var counter;
  var thisArg = Object(this);

  function getTypedArray(n) {
    t = new Int8Array(n); // counter starts at the end for reduceRight (last index == n-1)

    counter = n - 1;

    for (var i = 0; i < t.length; i++) {
      t[i] = i;
    }

    return t;
  }

  function sumItemsCallback(accumulator, val, k, arr) {
    console.log(counter, k);
    console.log(val, k);
    console.log(thisArg, this);
    console.log(t, arr);
    counter--;
    return accumulator + val;
  }

  console.log(45, reduceRight.call(getTypedArray(10), sumItemsCallback, 0));
  console.log(-1, counter);
  console.log(100, reduceRight.call(getTypedArray(0), sumItemsCallback, 100));
  console.log(-1, counter);
  var u = getTypedArray(10);
  counter = 8; // second-to-last index

  console.log(45, reduceRight.call(u, sumItemsCallback));
  console.log(-1, counter);

  try {
    reduceRight.call();
  } catch (e) {
    ;
  }

  try {
    reduceRight.call(undefined);
  } catch (e) {
    ;
  }

  try {
    reduceRight.call('string');
  } catch (e) {
    ;
  }

  try {
    reduceRight.call(new Uint8Array(10));
  } catch (e) {
    ;
  }

  try {
    reduceRight.call(new Uint8Array(10), undefined);
  } catch (e) {
    ;
  }

  try {
    reduceRight.call(new Uint8Array(10), 'string');
  } catch (e) {
    ;
  }

  try {
    reduceRight.call(getTypedArray(0), sumItemsCallback);
  } catch (e) {
    ;
  }
}

t46();

function t47() {
  console.log(ArrayBuffer.isView === undefined);
  console.log('function', typeof ArrayBuffer.isView);
  console.log(1, ArrayBuffer.isView.length);
  var descriptor = Object.getOwnPropertyDescriptor(ArrayBuffer, 'isView');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
}

t47();

function t48() {
  // All of the TypedArray prototypes should be ordinary objects and should return false when passed to ArrayBuffer.isView.
  console.log(ArrayBuffer.isView(ArrayBuffer.prototype));
  console.log(ArrayBuffer.isView(DataView.prototype));
  console.log(ArrayBuffer.isView(Uint8Array.prototype));
  console.log(ArrayBuffer.isView(Uint16Array.prototype));
  console.log(ArrayBuffer.isView(Uint32Array.prototype));
  console.log(ArrayBuffer.isView(Int8Array.prototype));
  console.log(ArrayBuffer.isView(Int16Array.prototype));
  console.log(ArrayBuffer.isView(Int32Array.prototype));
  console.log(ArrayBuffer.isView(Uint8ClampedArray.prototype));
  console.log(ArrayBuffer.isView(Float32Array.prototype));
  console.log(ArrayBuffer.isView(Float64Array.prototype));
  console.log(ArrayBuffer.isView(new DataView(new ArrayBuffer(20))));
  console.log(ArrayBuffer.isView(new Uint8Array(10)));
  console.log(ArrayBuffer.isView(new Uint16Array(10)));
  console.log(ArrayBuffer.isView(new Uint32Array(10)));
  console.log(ArrayBuffer.isView(new Int8Array(10)));
  console.log(ArrayBuffer.isView(new Int16Array(10)));
  console.log(ArrayBuffer.isView(new Int32Array(10)));
  console.log(ArrayBuffer.isView(new Uint8ClampedArray(10)));
  console.log(ArrayBuffer.isView(new Float32Array(10)));
  console.log(ArrayBuffer.isView(new Float64Array(10)));
  console.log(ArrayBuffer.isView(undefined));
  console.log(ArrayBuffer.isView(null));
  console.log(ArrayBuffer.isView());
  console.log(ArrayBuffer.isView(new ArrayBuffer(20)));
  console.log(ArrayBuffer.isView({
    buffer: [0, 1, 2],
    byteLength: 12,
    byteOffset: 0
  }));
  console.log(ArrayBuffer.isView([1, 2, 3]));
  console.log(ArrayBuffer.isView(true));
  console.log(ArrayBuffer.isView(false));
  console.log(ArrayBuffer.isView(0));
  console.log(ArrayBuffer.isView(1));
  console.log(ArrayBuffer.isView(1.0));
  console.log(ArrayBuffer.isView('string'));
  console.log(ArrayBuffer.isView({}));
  console.log(ArrayBuffer.isView(function () {
    ;
  }));
  console.log(ArrayBuffer.isView(new Array(1)));
}

t48();

function t49() {
  console.log(ArrayBuffer.prototype.slice === undefined);
  console.log('function', typeof ArrayBuffer.prototype.slice);
  console.log(2, ArrayBuffer.prototype.slice.length);
}

t49();

function t50() {
  try {
    ArrayBuffer.prototype.slice.apply('string');
  } catch (e) {
    ;
  }

  try {
    ArrayBuffer.prototype.slice.apply();
  } catch (e) {
    ;
  }

  try {
    ArrayBuffer.prototype.slice.call();
  } catch (e) {
    ;
  }

  try {
    ArrayBuffer.prototype.slice.call(undefined);
  } catch (e) {
    ;
  }

  try {
    ArrayBuffer.prototype.slice();
  } catch (e) {
    ;
  }

  try {
    ArrayBuffer.prototype.slice(undefined);
  } catch (e) {
    ;
  }
}

t50();

function t51() {
  [ArrayBuffer, SharedArrayBuffer].forEach(function (bufferType) {
    var len = 10;
    var buf = new bufferType(len);
    var u8 = new Uint8Array(buf);

    for (var i = 0; i < u8.length; i++) {
      u8[i] = i + 1;
    }

    var sliced = buf.slice();
    var slicedArray = new Uint8Array(sliced);
    console.log(u8, slicedArray);
    console.log(buf === sliced);
    console.log(buf.byteLength, sliced.byteLength);
    var sliced = buf.slice(0);
    var slicedArray = new Uint8Array(sliced);
    console.log(u8, slicedArray);
    console.log(buf === sliced);
    console.log(buf.byteLength, sliced.byteLength);
    var sliced = buf.slice(5);
    var slicedArray = new Uint8Array(sliced);
    console.log([6, 7, 8, 9, 10], slicedArray);
    console.log(buf === sliced);
    console.log(5, sliced.byteLength);
    var sliced = buf.slice(9);
    var slicedArray = new Uint8Array(sliced);
    console.log([10], slicedArray);
    console.log(buf === sliced);
    console.log(1, sliced.byteLength);
    var sliced = buf.slice(10);
    var slicedArray = new Uint8Array(sliced);
    console.log([], slicedArray);
    console.log(buf === sliced);
    console.log(0, sliced.byteLength);
    var sliced = buf.slice(15);
    var slicedArray = new Uint8Array(sliced);
    console.log([], slicedArray);
    console.log(buf === sliced);
    console.log(0, sliced.byteLength);
    var sliced = buf.slice(100);
    var slicedArray = new Uint8Array(sliced);
    console.log([], slicedArray);
    console.log(buf === sliced);
    console.log(0, sliced.byteLength);
  });
}

t51();

function t52() {
  [ArrayBuffer, SharedArrayBuffer].forEach(function (bufferType) {
    var len = 10;
    var buf = new bufferType(len);
    var u8 = new Uint8Array(buf);

    for (var i = 0; i < u8.length; i++) {
      u8[i] = i + 1;
    }

    var sliced = buf.slice(-4);
    var slicedArray = new Uint8Array(sliced);
    console.log([7, 8, 9, 10], slicedArray);
    console.log(buf === sliced);
    console.log(4, sliced.byteLength);
    var sliced = buf.slice(-5);
    var slicedArray = new Uint8Array(sliced);
    console.log([6, 7, 8, 9, 10], slicedArray);
    console.log(buf === sliced);
    console.log(5, sliced.byteLength);
    var sliced = buf.slice(-9);
    var slicedArray = new Uint8Array(sliced);
    console.log([2, 3, 4, 5, 6, 7, 8, 9, 10], slicedArray);
    console.log(buf === sliced);
    console.log(9, sliced.byteLength);
    var sliced = buf.slice(-10);
    var slicedArray = new Uint8Array(sliced);
    console.log(u8, slicedArray);
    console.log(buf === sliced);
    console.log(buf.byteLength, sliced.byteLength);
    var sliced = buf.slice(-15);
    var slicedArray = new Uint8Array(sliced);
    console.log(u8, slicedArray);
    console.log(buf === sliced);
    console.log(buf.byteLength, sliced.byteLength);
    var sliced = buf.slice(-100);
    var slicedArray = new Uint8Array(sliced);
    console.log(u8, slicedArray);
    console.log(buf === sliced);
    console.log(buf.byteLength, sliced.byteLength);
  });
}

t52();

function t53() {
  [ArrayBuffer, SharedArrayBuffer].forEach(function (bufferType) {
    var len = 10;
    var buf = new bufferType(len);
    var u8 = new Uint8Array(buf);

    for (var i = 0; i < u8.length; i++) {
      u8[i] = i + 1;
    }

    var sliced = buf.slice(0, len);
    var slicedArray = new Uint8Array(sliced);
    console.log(u8, slicedArray);
    console.log(buf === sliced);
    console.log(buf.byteLength, sliced.byteLength);
    var sliced = buf.slice(0, len * 10);
    var slicedArray = new Uint8Array(sliced);
    console.log(u8, slicedArray);
    console.log(buf === sliced);
    console.log(buf.byteLength, sliced.byteLength);
    var sliced = buf.slice(0, 5);
    var slicedArray = new Uint8Array(sliced);
    console.log([1, 2, 3, 4, 5], slicedArray);
    console.log(buf === sliced);
    console.log(5, sliced.byteLength);
    var sliced = buf.slice(1, 1);
    var slicedArray = new Uint8Array(sliced);
    console.log([], slicedArray);
    console.log(buf === sliced);
    console.log(0, sliced.byteLength);
    var sliced = buf.slice(5, 10);
    var slicedArray = new Uint8Array(sliced);
    console.log([6, 7, 8, 9, 10], slicedArray);
    console.log(buf === sliced);
    console.log(5, sliced.byteLength);
    var sliced = buf.slice(9, 10);
    var slicedArray = new Uint8Array(sliced);
    console.log([10], slicedArray);
    console.log(buf === sliced);
    console.log(1, sliced.byteLength);
    var sliced = buf.slice(7, 5);
    var slicedArray = new Uint8Array(sliced);
    console.log([], slicedArray);
    console.log(buf === sliced);
    console.log(0, sliced.byteLength);
  });
}

t53();

function t54() {
  var len = 10;
  var buf = new ArrayBuffer(len);
  var u8 = new Uint8Array(buf);

  for (var i = 0; i < u8.length; i++) {
    u8[i] = i + 1;
  }

  var sliced = buf.slice(5, -2);
  var slicedArray = new Uint8Array(sliced);
  console.log([6, 7, 8], slicedArray);
  console.log(buf === sliced);
  console.log(3, sliced.byteLength);
  var sliced = buf.slice(-5, 8);
  var slicedArray = new Uint8Array(sliced);
  console.log([6, 7, 8], slicedArray);
  console.log(buf === sliced);
  console.log(3, sliced.byteLength);
  var sliced = buf.slice(-10, buf.byteLength);
  var slicedArray = new Uint8Array(sliced);
  console.log(u8, slicedArray);
  console.log(buf === sliced);
  console.log(buf.byteLength, sliced.byteLength);
  var sliced = buf.slice(-20, buf.byteLength * 2);
  var slicedArray = new Uint8Array(sliced);
  console.log(u8, slicedArray);
  console.log(buf === sliced);
  console.log(buf.byteLength, sliced.byteLength);
  var sliced = buf.slice(-7, -3);
  var slicedArray = new Uint8Array(sliced);
  console.log([4, 5, 6, 7], slicedArray);
  console.log(buf === sliced);
  console.log(4, sliced.byteLength);
  var sliced = buf.slice(-3, -7);
  var slicedArray = new Uint8Array(sliced);
  console.log([], slicedArray);
  console.log(buf === sliced);
  console.log(0, sliced.byteLength);
}

t54();

function t55() {
  console.log(DataView.prototype.hasOwnProperty('buffer'));
  descriptor = Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer');
  console.log(descriptor !== undefined);
  console.log(descriptor.get !== undefined);
  console.log(typeof descriptor.get === 'function');
  console.log(0, descriptor.get.length);
  console.log(descriptor.set === undefined);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
}

t55();

function t56() {
  var buf = new ArrayBuffer(10);
  var view = new DataView(buf);
  console.log(buf === view.buffer); // Assignment has no effect since view.buffer does not have a setter

  view.buffer = undefined;
  console.log(buf === view.buffer);
  descriptor = Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer');

  try {
    descriptor.get();
  } catch (e) {
    ;
  }

  console.log(buf === descriptor.get.call(view));

  try {
    descriptor.get.apply(DataView.prototype);
  } catch (e) {
    ;
  }

  try {
    DataView.prototype.buffer;
  } catch (e) {
    ;
  }

  Object.defineProperty(DataView.prototype, "buffer", {
    value: 'something'
  });
  console.log('string', typeof DataView.prototype.buffer);
  console.log('something', DataView.prototype.buffer);
  console.log('something', view.buffer);
}

t56();

function t57() {
  console.log(DataView.prototype.hasOwnProperty('byteOffset'));
  descriptor = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset');
  console.log(descriptor !== undefined);
  console.log(descriptor.get !== undefined);
  console.log(typeof descriptor.get === 'function');
  console.log(0, descriptor.get.length);
  console.log(descriptor.set === undefined);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
}

t57();

function t58() {
  var buf = new ArrayBuffer(10);
  var view = new DataView(buf);
  console.log(0, view.byteOffset); // Assignment has no effect since view.byteOffset does not have a setter

  view.byteOffset = -1;
  console.log(0, view.byteOffset);
  descriptor = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset');

  try {
    descriptor.get();
  } catch (e) {
    ;
  }

  console.log(0, descriptor.get.call(view));

  try {
    descriptor.get.apply(DataView.prototype);
  } catch (e) {
    ;
  }

  try {
    DataView.prototype.byteOffset;
  } catch (e) {
    ;
  }

  Object.defineProperty(DataView.prototype, "byteOffset", {
    value: 'something'
  });
  console.log('string', typeof DataView.prototype.byteOffset);
  console.log('something', DataView.prototype.byteOffset);
  console.log('something', view.byteOffset);
}

t58();

function t59() {
  console.log(DataView.prototype.hasOwnProperty('byteLength'));
  descriptor = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength');
  console.log(descriptor !== undefined);
  console.log(descriptor.get !== undefined);
  console.log(typeof descriptor.get === 'function');
  console.log(0, descriptor.get.length);
  console.log(descriptor.set === undefined);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
}

t59();

function t60() {
  var buf = new ArrayBuffer(10);
  var view = new DataView(buf);
  console.log(10, view.byteLength); // Assignment has no effect since view.byteLength does not have a setter

  view.byteLength = -1;
  console.log(10, view.byteLength);
  descriptor = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength');

  try {
    descriptor.get();
  } catch (e) {
    ;
  }

  console.log(10, descriptor.get.call(view));

  try {
    descriptor.get.apply(DataView.prototype);
  } catch (e) {
    ;
  }

  try {
    DataView.prototype.byteLength;
  } catch (e) {
    ;
  }

  Object.defineProperty(DataView.prototype, "byteLength", {
    value: 'something'
  });
  console.log('string', typeof DataView.prototype.byteLength);
  console.log('something', DataView.prototype.byteLength);
  console.log('something', view.byteLength);
}

t60();

function t61() {
  [ArrayBuffer, SharedArrayBuffer].forEach(function (bufferType) {
    var len = 5;
    var buf = new bufferType(len);
    var u8 = new Uint8ClampedArray(buf);

    for (var i = 0; i < u8.length; i++) {
      u8[i] = i + 1;
    }

    var sliced = buf.slice(3, undefined);
    var slicedArray = new Uint8Array(sliced);
    console.log([4, 5], slicedArray);
    console.log(buf === sliced);
    console.log(2, sliced.byteLength);
    var sliced = buf.slice(Number.POSITIVE_INFINITY, 3);
    var slicedArray = new Uint8Array(sliced);
    console.log([], slicedArray);
    console.log(buf === sliced);
    console.log(0, sliced.byteLength);
    var sliced = buf.slice(2, Number.POSITIVE_INFINITY);
    var slicedArray = new Uint8Array(sliced);
    console.log([3, 4, 5], slicedArray);
    console.log(buf === sliced);
    console.log(3, sliced.byteLength);
    var sliced = buf.slice(NaN);
    var slicedArray = new Uint8Array(sliced);
    console.log([1, 2, 3, 4, 5], slicedArray);
    console.log(buf === sliced);
    console.log(5, sliced.byteLength);
    var sliced = buf.slice(Number.NEGATIVE_INFINITY);
    var slicedArray = new Uint8Array(sliced);
    console.log([1, 2, 3, 4, 5], slicedArray);
    console.log(buf === sliced);
    console.log(5, sliced.byteLength);
    var sliced = buf.slice(len - 1, len);
    var slicedArray = new Uint8Array(sliced);
    console.log([5], slicedArray);
    console.log(buf === sliced);
    console.log(1, sliced.byteLength);
    var sliced = buf.slice(len, len);
    var slicedArray = new Uint8Array(sliced);
    console.log([], slicedArray);
    console.log(buf === sliced);
    console.log(0, sliced.byteLength);
  });
}

t61();

function t62() {
  console.log(ArrayBuffer.prototype.hasOwnProperty('byteLength'));
  var descriptor = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');
  console.log(descriptor !== undefined);
  console.log(descriptor.get !== undefined);
  console.log(typeof descriptor.get === 'function');
  console.log(0, descriptor.get.length);
  console.log(descriptor.set === undefined);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
}

t62();

function t63() {
  var buf = new ArrayBuffer(10);
  console.log(10, buf.byteLength); // Assignment has no effect since buf.byteLength does not have a setter

  buf.byteLength = -1;
  console.log(10, buf.byteLength);
  var descriptor = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

  try {
    descriptor.get();
  } catch (e) {
    ;
  }

  console.log(10, descriptor.get.call(buf));

  try {
    descriptor.get.apply(ArrayBuffer.prototype);
  } catch (e) {
    ;
  }

  try {
    ArrayBuffer.prototype.byteLength;
  } catch (e) {
    ;
  }

  Object.defineProperty(ArrayBuffer.prototype, "byteLength", {
    value: 'something'
  });
  console.log('string', typeof ArrayBuffer.prototype.byteLength);
  console.log('something', ArrayBuffer.prototype.byteLength);
  console.log('something', buf.byteLength);
  Object.defineProperty(ArrayBuffer.prototype, "byteLength", {
    get: descriptor.get
  });
}

t63();

function t64() {
  var arr = new Uint8Array(10);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = i;
  }

  console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], arr.subarray());
}

t64();

function t65() {
  var arr = new Uint8Array(10);
  arr.constructor = undefined;

  try {
    arr.subarray();
  } catch (e) {
    ;
  }

  arr.constructor = null;

  try {
    arr.subarray();
  } catch (e) {
    ;
  }

  arr.constructor = 'some string';

  try {
    arr.subarray();
  } catch (e) {
    ;
  }

  arr.constructor = Math.sin;

  try {
    arr.subarray();
  } catch (e) {
    ;
  }
}

t65();

function t66() {
  var arr = new ArrayBuffer(10);
  arr.constructor = Array;

  try {
    arr.slice();
  } catch (e) {
    ;
  }

  arr.constructor = function (newLen) {
    return arr;
  };

  console.log(arr, arr.slice());

  arr.constructor = function (newLen) {
    return new ArrayBuffer(5);
  };

  try {
    arr.slice();
  } catch (e) {
    ;
  }

  arr.constructor = function (newLen) {
    return new ArrayBuffer(newLen);
  };

  var o = arr.slice();
  console.log(10, o.byteLength);

  arr.constructor = function (newLen) {
    return new ArrayBuffer(20);
  };

  var o = arr.slice();
  console.log(10, o.byteLength);
}

t66();

function t67() {
  var arr = new ArrayBuffer(10);
  arr.constructor = undefined;

  try {
    arr.slice();
  } catch (e) {
    ;
  }

  console.log(10, arr.slice().byteLength);
  arr.constructor = null;

  try {
    arr.slice();
  } catch (e) {
    ;
  }

  arr.constructor = 'some string';

  try {
    arr.slice();
  } catch (e) {
    ;
  }

  arr.constructor = Math.sin;

  try {
    arr.slice();
  } catch (e) {
    ;
  }

  console.log(10, arr.slice().byteLength);
}

t67();

function t68() {
  var arr = new ArrayBuffer(10);

  arr.constructor = function () {
    ;
  };

  arr.constructor[Symbol.species] = undefined;

  try {
    arr.slice();
  } catch (e) {
    ;
  }

  console.log(10, arr.slice().byteLength);
  arr.constructor[Symbol.species] = null;

  try {
    arr.slice();
  } catch (e) {
    ;
  }

  console.log(10, arr.slice().byteLength);
  arr.constructor[Symbol.species] = {};

  try {
    arr.slice();
  } catch (e) {
    ;
  }
}

t68();

function t69() {
  try {
    Int8Array(64);
  } catch (e) {
    ;
  }

  try {
    Uint8Array(64);
  } catch (e) {
    ;
  }

  try {
    Uint8ClampedArray(64);
  } catch (e) {
    ;
  }

  try {
    Int16Array(64);
  } catch (e) {
    ;
  }

  try {
    Uint16Array(64);
  } catch (e) {
    ;
  }

  try {
    Int32Array(64);
  } catch (e) {
    ;
  }

  try {
    Uint32Array(64);
  } catch (e) {
    ;
  }

  try {
    Float32Array(64);
  } catch (e) {
    ;
  }

  try {
    Float64Array(64);
  } catch (e) {
    ;
  }

  try {
    ArrayBuffer(64);
  } catch (e) {
    ;
  }

  try {
    DataView(64);
  } catch (e) {
    ;
  }
}

t69();
