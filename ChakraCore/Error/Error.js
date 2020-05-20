//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var noMessage = new Error();
var withMessage = Error("I have a message for you...");
print("Error.prototype.name: " + Error.prototype.name);
print("Error.prototype.message: " + Error.prototype.message);
print("Error.prototype.toString(): " + Error.prototype.toString()); //print("Error.prototype.constructor: " + Error.prototype.constructor);

print("noMessage.name: " + noMessage.name);
print("noMessage.message: " + noMessage.message);
print("noMessage.toString(): " + noMessage.toString());
print("withMessage.name: " + withMessage.name);
print("withMessage.message: " + withMessage.message);
print("withMessage.toString(): " + withMessage.toString());
Error.prototype.name = "TryNewName";
print("Changing Error.prototype.name to TryNewName...");
print("Error.prototype.name: " + Error.prototype.name);
print("withMessage.name: " + withMessage.name);

try {
  RangeError.prototype.message = "Range Error's prototype";
  throw RangeError.prototype;
} catch (ex) {
  print("Message: " + ex.message);
}
