//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var d = new Date();
d.setDate(12345678);
d.setTime(456789);
print("toISOString : " + d.toISOString());
print("toJSON : " + d.toJSON()); // Test NaN Date value

d = new Date(Number.NaN);

try {
  d.toISOString();
} catch (e) {
  print("NaN Date toISOString: " + e.name + " : " + e.message);
}

print("NaN Date toJSON:: " + d.toJSON()); //
// Test Infinity Date value
//

d = new Date(Infinity);

try {
  d.toISOString();
} catch (e) {
  print("Infinity Date toISOString : " + e.name + " : " + e.message);
}

print("Infinity Date toJSON : " + d.toJSON()); //
// Test Date.prototype.toJSON transferred to an object but toISOString is not callable
//

d = {
  toISOString: 1,
  toJSON: Date.prototype.toJSON
};

try {
  d.toJSON();
} catch (e) {
  print("Object toISOString not callable : " + e.name + " : " + e.message);
} //
// Test Date.prototype.toJSON transferred to an object
//


d = {
  toISOString: function () {
    return "Fake JSON : Object";
  },
  toJSON: Date.prototype.toJSON
};
print("Object toJSON : " + d.toJSON()); //
// Test Date.prototype.toJSON transferred to String
//

String.prototype.toISOString = function () {
  return "Fake JSON : " + this;
};

String.prototype.toJSON = Date.prototype.toJSON;
d = "String";
print("String toJSON : " + d.toJSON()); //
// Test Date.getYear -- ES5 spec B.2.4
//

print("getYear 2000: " + new Date("January 1 2000").getYear());
print("getYear 1899: " + new Date("January 1 1899").getYear());
Object.defineProperty(Date.prototype, "valueOf", {
  get: function () {
    print("get fired");
  }
});
var d = new Date();
d.toJSON();
