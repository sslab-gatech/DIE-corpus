//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
Object.defineProperty(RegExp, "fakeProp", {
  value: 101,
  writable: true,
  enumerable: true,
  configurable: true
});
var propertyConstructorArray = ["fakeProp", "$_", "$*", "$&", "$+", "$`", "$'", "input", "lastMatch", "lastParen", "leftContext", "rightContext", "index", "length", "prototype", "constructor"];
var propertyInstanceArray = ["global", "ignoreCase", "lastIndex", "multiline", "source", "sticky"];

function RegexTests(i, propertyArray) {
  print("starting Property[", i, "]: ", propertyArray[i]); //Does the property exist

  var doesPropExist = RegExp.hasOwnProperty(propertyArray[i]);
  print("Does Property exist: ", doesPropExist);

  if (!doesPropExist) {
    return;
  } //Is the property configurable


  var isPropConfig = Object.getOwnPropertyDescriptor(RegExp, propertyArray[i]).configurable;
  print("Is the Property configurable: ", isPropConfig);
  var canRedefine = false;
  var canDelete = false;

  if (isPropConfig) {
    canRedefine = true;
    canDelete = true;
  }

  var propValueBefore = RegExp[propertyArray[i]];

  try {
    Object.defineProperty(RegExp, propertyArray[i], {
      get: function () {
        return 'OVERRIDE';
      }
    });
  } catch (err) {
    if (isPropConfig) {
      print("Fail");
    } else {
      print("PASS, Not Configurable and will not allow redefinition");
    }
  }

  var deleteProp = false;

  if (isPropConfig) {
    if (RegExp[propertyArray[i]] == "OVERRIDE") {
      print("PASS");
    } else {
      print("FAIL, currently equals: ", RegExp[propertyArray[i]]);
    }
  } else {
    if (RegExp[propertyArray[i]] == propValueBefore) {
      print("PASS");
    } else {
      print("FAIL, currently equals: ", RegExp[propertyArray[i]]);
    }
  }

  deleteProp = delete RegExp[propertyArray[i]];
  print("can you delete the property: ", canDelete, "did it actually delete?", deleteProp);

  if (deleteProp == canDelete) {
    print("Pass Delete Test");
  } else {
    print("Fail Delete Test");
  }
}

function RegexInstanceTests(i, propertyArray) {
  var pattern1 = new RegExp("e");
  print("starting Property[", i, "]: ", propertyArray[i]); //Does the property exist

  var doesPropExist = pattern1.hasOwnProperty(propertyArray[i]);
  print("Does Property exist: ", doesPropExist);

  if (!doesPropExist) {
    return;
  }

  var isPropConfig = Object.getOwnPropertyDescriptor(pattern1, propertyArray[i]).configurable;
  print("Is the Property configurable: ", isPropConfig);
  var canRedefine = false;
  var canDelete = false;

  if (isPropConfig) {
    canRedefine = true;
    canDelete = true;
  }

  var propValueBefore = pattern1[propertyArray[i]];

  try {
    Object.defineProperty(pattern1, propertyArray[i], {
      get: function () {
        return 'OVERRIDE';
      }
    });
  } catch (err) {
    if (isPropConfig) {
      print("Fail");
    } else {
      print("PASS, Not Configurable and will not allow redefinition");
    }
  }

  var deleteProp = false;

  if (isPropConfig) {
    if (pattern1[propertyArray[i]] == "OVERRIDE") {
      print("PASS");
    } else {
      print("FAIL, currently equals: ", pattern1[propertyArray[i]]);
    }
  } else {
    if (pattern1[propertyArray[i]] == propValueBefore) {
      print("PASS");
    } else {
      print("FAIL, currently equals: ", pattern1[propertyArray[i]]);
    }
  }

  deleteProp = delete pattern1[propertyArray[i]];
  print("can you delete the property: ", canDelete, "did it actually delete?", deleteProp);

  if (deleteProp == canDelete) {
    print("Pass Delete Test");
  } else {
    print("Fail Delete Test");
  }
}

for (var i = 0; i < propertyConstructorArray.length; i++) {
  RegexTests(i, propertyConstructorArray);
  print("\n");
}

for (var i = 0; i < propertyInstanceArray.length; i++) {
  RegexTests(i, propertyInstanceArray);
  print("\n");
}

for (var i = 0; i < propertyInstanceArray.length; i++) {
  RegexInstanceTests(i, propertyInstanceArray);
  print("\n");
}
