//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function getRoundValue(n) {
  if (!(n == 0)) {
    return n.toFixed();
  }
}

function formatOutput(n) {
  return n.replace(/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/g, function () {
    return getRoundValue(parseFloat());
  });
}

print(0);
print(0);
