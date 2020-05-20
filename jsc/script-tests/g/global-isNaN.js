console.log("Test the basic behaviors of global isNaN()");
var globalObject = (1, eval)("this");
globalObject.hasOwnProperty("isNaN");
typeof isNaN; // Function properties.

isNaN.length;
isNaN.name;
Object.getOwnPropertyDescriptor(globalObject, "isNaN").configurable;
Object.getOwnPropertyDescriptor(globalObject, "isNaN").enumerable;
Object.getOwnPropertyDescriptor(globalObject, "isNaN").writable; // Some simple cases.

isNaN();
isNaN(NaN);
isNaN(undefined);
isNaN(0);
isNaN(-0);
isNaN(1);
isNaN(-1);
isNaN(42);
isNaN(123.5);
isNaN(-123.5);
isNaN(Number.MAX_VALUE);
isNaN(Number.MIN_VALUE);
isNaN(Number.MAX_SAFE_INTEGER);
isNaN(Number.MIN_SAFE_INTEGER);
isNaN(Math.PI);
isNaN(Math.E);
isNaN(Infinity);
isNaN(-Infinity);
isNaN(null); // Non-numeric.

isNaN({});
isNaN({
  webkit: "awesome"
});
isNaN([]);
isNaN([123]);
isNaN([1, 1]);
isNaN([NaN]);
isNaN("");
isNaN("1");
isNaN("x");
isNaN("NaN");
isNaN("Infinity");
isNaN(true);
isNaN(false);
isNaN(function () {
  ;
});
isNaN(isNaN);

try {
  isNaN(Symbol());
} catch (e) {
  ;
} // Type conversion.


var objectConvertToString = {
  toString: function () {
    return "42";
  }
};
isNaN(objectConvertToString);
var objectRecordToStringCall = {
  toStringCallCount: 0,
  toString: function () {
    this.toStringCallCount += 1;
    return "42";
  }
};
isNaN(objectRecordToStringCall);
objectRecordToStringCall.toStringCallCount;
var objectThrowOnToString = {
  toString: function () {
    throw "No!";
  }
};

try {
  isNaN(objectThrowOnToString);
} catch (e) {
  ;
}

var objectWithValueOf = {
  valueOf: function () {
    return 1.1;
  }
};
isNaN(objectWithValueOf);
var objectThrowOnValueOf = {
  valueOf: function () {
    throw "Nope!";
  },
  toString: function () {
    return 5;
  }
};

try {
  isNaN(objectThrowOnValueOf);
} catch (e) {
  ;
}

var objectRecordValueOfCall = {
  valueOfCallCount: 0,
  valueOf: function () {
    ++this.valueOfCallCount;
    return NaN;
  }
};
isNaN(objectRecordValueOfCall);
objectRecordValueOfCall.valueOfCallCount;
var objectRecordConversionCalls = {
  callList: [],
  toString: function () {
    this.callList.push("toString");
    return "Bad";
  },
  valueOf: function () {
    this.callList.push("valueOf");
    return 12345;
  }
};
isNaN(objectRecordConversionCalls);
objectRecordConversionCalls.callList.toString();
