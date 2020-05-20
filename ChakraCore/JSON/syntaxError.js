//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
try {
  JSON.parse('');
} catch (e) {
  print(e);
}

try {
  JSON.parse('--');
} catch (e) {
  print(e);
}

try {
  JSON.parse('{"asdf  }');
} catch (e) {
  print(e);
}

try {
  JSON.parse('{"asdf" }');
} catch (e) {
  print(e);
}

try {
  JSON.parse('{"asdf":1');
} catch (e) {
  print(e);
}

try {
  JSON.parse("[23");
} catch (e) {
  print(e);
}

try {
  JSON.parse("[23,]");
} catch (e) {
  print(e);
}
