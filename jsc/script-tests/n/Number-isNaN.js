console.log("Test the basic behaviors of Number.isNaN()");
Number.hasOwnProperty("isNaN");
typeof Number.isNaN;
Number.isNaN !== isNaN; // Function properties.

Number.isNaN.length;
Number.isNaN.name;
Object.getOwnPropertyDescriptor(Number, "isNaN").configurable;
Object.getOwnPropertyDescriptor(Number, "isNaN").enumerable;
Object.getOwnPropertyDescriptor(Number, "isNaN").writable; // Some simple cases.

Number.isNaN();
Number.isNaN(NaN);
Number.isNaN(undefined);
Number.isNaN(0);
Number.isNaN(-0);
Number.isNaN(1);
Number.isNaN(-1);
Number.isNaN(42);
Number.isNaN(123.5);
Number.isNaN(-123.5);
Number.isNaN(Number.MAX_VALUE);
Number.isNaN(Number.MIN_VALUE);
Number.isNaN(Number.MAX_SAFE_INTEGER);
Number.isNaN(Number.MIN_SAFE_INTEGER);
Number.isNaN(Math.PI);
Number.isNaN(Math.E);
Number.isNaN(Infinity);
Number.isNaN(-Infinity);
Number.isNaN(null); // Non-numeric.

Number.isNaN({});
Number.isNaN({
  webkit: "awesome"
});
Number.isNaN([]);
Number.isNaN([123]);
Number.isNaN([1, 1]);
Number.isNaN([NaN]);
Number.isNaN("");
Number.isNaN("1");
Number.isNaN("x");
Number.isNaN("NaN");
Number.isNaN("Infinity");
Number.isNaN(true);
Number.isNaN(false);
Number.isNaN(function () {
  ;
});
Number.isNaN(isNaN);
Number.isNaN(Symbol()); // Type conversion, doesn't happen.

var objectWithNumberValueOf = {
  valueOf: function () {
    return 123;
  }
};
var objectWithNaNValueOf = {
  valueOf: function () {
    return NaN;
  }
};
Number.isNaN(objectWithNumberValueOf);
Number.isNaN(objectWithNaNValueOf);
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
Number.isNaN(objectRecordConversionCalls);
objectRecordConversionCalls.callList.length;
