//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  class myBaseClass {
    construct() {
      console.log(myNewTarget, new.target);
    }

  }

  class myDerivedClass extends myBaseClass {}

  function myNewTarget() {
    ;
  }

  Reflect.construct(myDerivedClass, [], myNewTarget);
}

t1();

function t2() {
  class myBaseClass {
    construct() {
      ;
    }

  }

  class myDerivedClass extends myBaseClass {}

  function myNewTarget() {
    ;
  }

  try {
    Reflect.construct(myDerivedClass, [], undefined);
  } catch (e) {
    ;
  }
}

t2();
