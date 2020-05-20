console.log("Test the basic behaviors of Math.clz32()");
Math.hasOwnProperty("clz32");
typeof Math.clz32;
Object.getPrototypeOf(Math).clz32; // Function properties.

Math.clz32.length;
Math.clz32.name;
Object.getOwnPropertyDescriptor(Math, "clz32").configurable;
Object.getOwnPropertyDescriptor(Math, "clz32").enumerable;
Object.getOwnPropertyDescriptor(Math, "clz32").writable; // Some simple cases.

Math.clz32(0);
Math.clz32(-0);
Math.clz32(1);
Math.clz32(-1);
Math.clz32(42);
Math.clz32(-2147483648);
Math.clz32(2147483647);
Math.clz32(Number.MAX_VALUE);
Math.clz32(Number.MIN_VALUE);
Math.clz32(Number.MAX_SAFE_INTEGER);
Math.clz32(Number.MIN_SAFE_INTEGER);
Math.clz32(Math.PI);
Math.clz32(Math.E);
Math.clz32(NaN);
Math.clz32(Number.POSITIVE_INFINITY);
Math.clz32(Number.NEGATIVE_INFINITY);
Math.clz32();
Math.clz32(undefined);
Math.clz32(null);
Math.clz32("WebKit");

try {
  Math.clz32(Symbol("WebKit"));
} catch (e) {
  ;
}

Math.clz32({
  webkit: "awesome"
}); // Type conversion.

var objectConvertToString = {
  toString: function () {
    return "66";
  }
};
Math.clz32(objectConvertToString);
var objectRecordToStringCall = {
  toStringCallCount: 0,
  toString: function () {
    this.toStringCallCount += 1;
    return "9";
  }
};
Math.clz32(objectRecordToStringCall);
objectRecordToStringCall.toStringCallCount;
var objectThrowOnToString = {
  toString: function () {
    throw "No!";
  }
};

try {
  Math.clz32(objectThrowOnToString);
} catch (e) {
  ;
}

var objectWithValueOf = {
  valueOf: function () {
    return 95014;
  }
};
Math.clz32(objectWithValueOf);
var objectThrowOnValueOf = {
  valueOf: function () {
    throw "Nope!";
  },
  toString: function () {
    return 5;
  }
};

try {
  Math.clz32(objectThrowOnValueOf);
} catch (e) {
  ;
}

var objectRecordValueOfCall = {
  valueOfCallCount: 0,
  valueOf: function () {
    ++this.valueOfCallCount;
    return 436;
  }
};
Math.clz32(objectRecordValueOfCall);
objectRecordValueOfCall.valueOfCallCount;
var objectRecordConversionCalls = {
  callList: [],
  toString: function () {
    this.callList.push("toString");
    return "Uh?";
  },
  valueOf: function () {
    this.callList.push("valueOf");
    return 87665;
  }
};
Math.clz32(objectRecordConversionCalls);
objectRecordConversionCalls.callList.toString();
