//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
const view = new DataView(new ArrayBuffer(50));
const zeroView = new DataView(new ArrayBuffer(0));
const smallView = new DataView(new ArrayBuffer(1));
const setters = ["setUint8", "setInt8", "setUint16", "setInt16", "setFloat32", "setInt32", "setUint32", "setFloat64"];
const getters = ["getUint8", "getInt8", "getUint16", "getInt16", "getFloat32", "getInt32", "getUint32", "getFloat64"];

function t1() {
  for (let i = 0; i < setters.length; ++i) {
    try {
      view[setters[i]](-1, 2);
    } catch (e) {
      ;
    }

    try {
      view[setters[i]](-1000000000, 2);
    } catch (e) {
      ;
    }
  }
}

t1();

function t2() {
  for (let i = 0; i < setters.length; ++i) {
    try {
      view[getters[i]](-1);
    } catch (e) {
      ;
    }

    try {
      view[getters[i]](-1000000000);
    } catch (e) {
      ;
    }
  }
}

t2();

function t3() {
  for (let i = 0; i < setters.length; ++i) {
    try {
      zeroView[setters[i]](0, 2);
    } catch (e) {
      ;
    }
  }
}

t3();

function t4() {
  for (let i = 0; i < setters.length; ++i) {
    try {
      zeroView[getters[i]](0);
    } catch (e) {
      ;
    }
  }
}

t4();

function t5() {
  try {
    smallView[setters[0]](0, 3);
  } catch (e) {
    ;
  }

  try {
    smallView[setters[1]](0, 3);
  } catch (e) {
    ;
  }

  for (let i = 2; i < setters.length; ++i) {
    try {
      {
        smallView[setters[i]](0, 2);
      }
    } catch (e) {
      ;
    }

    try {
      {
        smallView[setters[i]](0, 2);
      }
    } catch (e) {
      ;
    }
  }
}

t5();

function t6() {
  try {
    smallView[getters[0]](0);
  } catch (e) {
    ;
  }

  try {
    smallView[getters[1]](0);
  } catch (e) {
    ;
  }

  for (let i = 2; i < setters.length; ++i) {
    try {
      {
        smallView[getters[i]](0);
      }
    } catch (e) {
      ;
    }

    try {
      {
        smallView[getters[i]](0);
      }
    } catch (e) {
      ;
    }
  }
}

t6();
