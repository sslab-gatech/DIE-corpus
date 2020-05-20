function assertProperError(e) {
  if (!(e instanceof TypeError) || e.message.indexOf("Receiver should be a typed array view but was not an object") === -1) {
    false;
  }
}

var tArray;

function testIntTypedArray(TypedArray) {
  tArray = new TypedArray([0, 2, 3]);
  tArray.includes(2);
  !tArray.includes(4);
  !tArray.includes(3, 3);
  tArray.includes(3, -1);
  tArray.includes(3, {
    valueOf: () => -1
  }); // Test non-array-native values

  tArray.includes(2.0);
  !tArray.includes(2.5);
  !tArray.includes("abc");
  !tArray.includes(null);
  !tArray.includes(undefined);
  !tArray.includes({
    1: ''
  });
  !tArray.includes(""); // Testing TypeError handling

  try {
    tArray = new TypedArray([0, 1, 2]);
    tArray.includes.call(null, 2);
  } catch (e) {
    e;
  }

  try {
    tArray = new TypedArray([0, 1, 2]);
    tArray.includes.call(undefined, 2);
  } catch (e) {
    e;
  }
}

testIntTypedArray(Uint8Array);
testIntTypedArray(Int8Array);
testIntTypedArray(Uint8ClampedArray);
testIntTypedArray(Uint16Array);
testIntTypedArray(Int16Array);
testIntTypedArray(Uint32Array);
testIntTypedArray(Int32Array);
var fArray;

function testFloatTypedArray(TypedArray) {
  fArray = new TypedArray([1.0, 2.0, 3.0]);
  fArray.includes(2.0);
  !fArray.includes(4.0);
  !fArray.includes(3.0, 3);
  fArray.includes(3, -1);
  fArray = new TypedArray([NaN]);
  !fArray.includes("abc");
  !fArray.includes(null);
  !fArray.includes(undefined);
  !fArray.includes({
    1: ''
  });
  !fArray.includes(""); // Testing TypeError handling

  try {
    fArray = new TypedArray([0, 1, 2]);
    fArray.includes.call(null, 2);
  } catch (e) {
    e;
  }

  try {
    fArray = new TypedArray([0, 1, 2]);
    fArray.includes.call(undefined, 2);
  } catch (e) {
    e;
  }
} // NaN handling (only true for Float32 and Float64)


!new Uint8Array([NaN]).includes(NaN);
new Float32Array([NaN]).includes(NaN);
new Float64Array([NaN]).includes(NaN);
var descriptor;
var gTypedArray;

function testDescriptor(TypedArray) {
  gTypedArray = TypedArray;
  descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(TypedArray.prototype), "includes");
  descriptor.configurable;
  descriptor.writable;
  !descriptor.enumerable;
  descriptor.get === undefined;
  descriptor.set === undefined;
  Object.getPrototypeOf(gTypedArray.prototype).includes.name === "includes";
  Object.getPrototypeOf(gTypedArray.prototype).includes.length === 1;
}

testDescriptor(Uint8Array);
testDescriptor(Int8Array);
testDescriptor(Uint8ClampedArray);
testDescriptor(Uint16Array);
testDescriptor(Int16Array);
testDescriptor(Uint32Array);
testDescriptor(Int32Array);
testDescriptor(Float32Array);
testDescriptor(Float64Array); // Testing boundaries

var arr = new Uint8Array([0, 254]);
arr.includes(0);
arr.includes(254);
!arr.includes(255);
!arr.includes(-1);
arr = new Int8Array([-128, 127]);
arr.includes(-128);
arr.includes(127);
!arr.includes(128);
!arr.includes(-129);
arr = new Uint8ClampedArray([-128, 256]);
arr.includes(255);
arr.includes(0);
!arr.includes(-128);
!arr.includes(-256);
arr = new Uint16Array([0, 65535]);
arr.includes(0);
arr.includes(65535);
!arr.includes(65536);
!arr.includes(-1);
arr = new Int16Array([-32768, 32767]);
arr.includes(-32768);
arr.includes(32767);
!arr.includes(32768);
!arr.includes(-32769);
arr = new Uint32Array([0, 4294967295]);
arr.includes(0);
arr.includes(4294967295);
!arr.includes(4294967296);
!arr.includes(-1);
arr = new Int32Array([-2147483648, 2147483647]);
arr.includes(-2147483648);
arr.includes(2147483647);
!arr.includes(2147483648);
!arr.includes(-2147483649);
arr = new Float32Array([-3.402820018375656e+38, 3.402820018375656e+38]);
arr.includes(-3.402820018375656e+38);
arr.includes(3.402820018375656e+38);
!arr.includes(3.50282e+38);
!arr.includes(-3.50282e+38);
arr = new Float64Array([-1.79769e+308, 1.79769e+308]);
arr.includes(-1.79769e+308);
arr.includes(1.79769e+308);
!arr.includes(-1.89769e+308);
!arr.includes(1.89769e+308); // Testing Infinity

function testInfinity(TypedArray) {
  arr = new TypedArray([Infinity]);
  arr.includes(Infinity);
  !arr.includes(-Infinity);
  !arr.includes(NaN);
  arr = new TypedArray([-Infinity]);
  arr.includes(-Infinity);
  !arr.includes(Infinity);
  !arr.includes(NaN);
}

testInfinity(Float32Array);
testInfinity(Float64Array); // Test float->double precision

!new Float32Array([2.40282e+38]).includes(2.40282e+38); // Checking spec

var funcCallCount;

function checkingValueOfCall(TypedArray) {
  tArray = new TypedArray([0, 1, 2]);
  funcCallCount = {
    callCount: 0,
    valueOf: function () {
      this.callCount++;
      return 0;
    }
  };
  tArray.includes(0, funcCallCount);
  funcCallCount.callCount === 1;
  tArray.includes("abc", funcCallCount);
  funcCallCount.callCount === 2;
  tArray.includes(null, funcCallCount);
  funcCallCount.callCount === 3;
  tArray.includes(undefined, funcCallCount);
  funcCallCount.callCount === 4;
  tArray.includes({
    1: ''
  }, funcCallCount);
  funcCallCount.callCount === 5;
  tArray.includes("", funcCallCount);
  funcCallCount.callCount === 6;
}

checkingValueOfCall(Uint8Array);
checkingValueOfCall(Int8Array);
checkingValueOfCall(Uint8ClampedArray);
checkingValueOfCall(Uint16Array);
checkingValueOfCall(Int16Array);
checkingValueOfCall(Uint32Array);
checkingValueOfCall(Int32Array);
checkingValueOfCall(Float32Array);
checkingValueOfCall(Float64Array);
