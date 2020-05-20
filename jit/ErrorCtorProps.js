//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var ctors = [Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError];
safeCall(eval, "ctors.push(RegExpError);");
safeCall(eval, "ctors.push(ConversionError);");
var props = ["message", "name", "description", "call", "apply"];

for (var i in ctors) {
  Test(ctors[i]);
}

function Test(ctor) {
  print("---------------------------------");
  print("toString(): " + ctor.toString());

  for (var j in props) {
    var prop = props[j];
    print("Property: '" + prop + "'");
    print("Value: '" + ctor[prop] + "'");
    print("hasOwnProperty: " + ctor.hasOwnProperty(prop));
  }

  print();
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
