//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
const crossSiteDate = {
  x: function () {
    new Date();
  }
}; // Run every Date method on the cross-site instance

Object.getOwnPropertyNames(Date.prototype).filter(name => !name.match(/^set/)).forEach(name => {
  console.log(name);

  try {
    console.log(Date.prototype[name].call(crossSiteDate));
  } catch (e) {
    // Ignore. Just to catch assertions on debug build.
    ;
  }
});
