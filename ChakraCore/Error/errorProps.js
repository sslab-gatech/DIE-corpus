//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function showProperty(x, y) {
  var value = y[x];

  if (x === "stack") {
    value = value && value.replace(/\(.+\\test.Error./ig, "(");
  }

  print("    " + x + "\t  isOwn = " + y.hasOwnProperty(x) + "\t value = " + value);
}

function test(y) {
  print("  ToString = " + y);
  print("  Properties = ");
  showProperty("name", y);
  showProperty("message", y);
  showProperty("stack", y); // Explicitly adding the known non-enumerable members

  showProperty("number", y);
  showProperty("description", y);

  for (x in y) {
    showProperty(x, y);
  }
}

function safeCall(f) {
  var args = [];

  for (var a = 1; a < arguments.length; ++a) {
    args.push(arguments[a]);
  }

  try {
    return f.apply(this, args);
  } catch (ex) {
    print(ex.name + ": " + ex.message);
  }
}

print("Error.prototype");
test(Error.prototype);
print("RangeError.prototype");
test(RangeError.prototype);
safeCall(function () {
  print("ConversionError.prototype");
  test(ConversionError.prototype);
});
print("\nError");
test(Error);
err = new Error();
print("\nnew Error()");
test(err);
err = new Error(undefined);
print("\nnew Error(undefined)");
test(err);
err = new Error(null);
print("\nnew Error(null)");
test(err);
err = new Error("Hello");
print("\nnew Error(\"Hello\")");
test(err);
err = new Error(100, "With a number");
print("\nnew Error(100, \"With a number\")");
test(err);
err = new Error("Hello");
err.name = undefined;
print("\nnew Error(\"Hello\"); name=undefined");
test(err);
err = new ReferenceError("I'm a reference error");
print("\nnew ReferenceError(\"I'm a reference error\")");
test(err);
safeCall(function () {
  err = new RegExpError(22, "This is a RegExp error");
  print("\nnew RegExpError(22, \"This is a RegExp error\")");
  test(err);
});
err = new TypeError();
print("\nnew TypeError()");
test(err);
err = new TypeError(undefined);
print("\nnew TypeError(undefined)");
test(err);
err = new TypeError(null);
print("\nnew TypeError(null)");
test(err);
var undef;
err = new TypeError("With a undef name");
err.name = undef;
print("\nnew TypeError(\"With a undef name\")");
test(err);
print("\nRuntime TypeError()");

try {
  blah = boo;
} catch (err) {
  test(err);
}
