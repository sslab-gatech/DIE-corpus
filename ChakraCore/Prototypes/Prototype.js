//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function Hat(fabric, color) {
  this.fabric = fabric;
  this.color = color; /// TODO: Remove this line when explicit propagation is added

  return undefined;
}

Hat.prototype.Display = function () {
  print("Hat");
  print(this.fabric);
  print(this.color);
};

var hat = new Hat("felt", "gray");
hat.Display();
