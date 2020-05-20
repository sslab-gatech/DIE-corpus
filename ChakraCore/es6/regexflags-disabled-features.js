//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
[['sticky', 'y'], ['unicode', 'u'], ['dotAll', 's']].map(function ([propertyName, flag]) {
  var object = {};
  object[propertyName] = true;
  var getFlags = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
  var flags = getFlags.call(object);
  flags.includes(flag);
});
