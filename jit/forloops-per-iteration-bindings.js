//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 for/for-in/for-of loops per iteration loop variable bindings tests
function t1() {
  var a = [];
  var i = 0;

  for (let x in {
    a: 1,
    b: 2,
    c: 3
  }) {
    a[i++] = function () {
      return x;
    };
  }

  for (const x in {
    a: 1,
    b: 2,
    c: 3
  }) {
    a[i++] = function () {
      return x;
    };
  }

  for (let x of [1, 2, 3]) {
    a[i++] = function () {
      return x;
    };
  }

  for (const x of [1, 2, 3]) {
    a[i++] = function () {
      return x;
    };
  }

  console.log('a', a[0]());
  console.log('b', a[1]());
  console.log('c', a[2]());
  console.log('a', a[3]());
  console.log('b', a[4]());
  console.log('c', a[5]());
  console.log(1, a[6]());
  console.log(2, a[7]());
  console.log(3, a[8]());
  console.log(1, a[9]());
  console.log(2, a[10]());
  console.log(3, a[11]());
}

t1();

function t2() {
  var a = [];
  var i = 0;

  for (let x in {
    a: 1,
    b: 2,
    c: 3
  }) {
    a[i++] = function () {
      return x;
    };
  }

  for (const x in {
    a: 1,
    b: 2,
    c: 3
  }) {
    a[i++] = function () {
      return x;
    };
  }

  for (let x of [1, 2, 3]) {
    a[i++] = function () {
      return x;
    };
  }

  for (const x of [1, 2, 3]) {
    a[i++] = function () {
      return x;
    };
  }

  console.log('a', a[0]());
  console.log('b', a[1]());
  console.log('c', a[2]());
  console.log('a', a[3]());
  console.log('b', a[4]());
  console.log('c', a[5]());
  console.log(1, a[6]());
  console.log(2, a[7]());
  console.log(3, a[8]());
  console.log(1, a[9]());
  console.log(2, a[10]());
  console.log(3, a[11]());
}

t2();

function t4() {
  try {
    for (let x in {
      a: x
    }) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (const x in {
      a: x
    }) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of [x]) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (const x of [x]) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x in {
      a: (() => x)()
    }) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (const x in {
      a: (() => x)()
    }) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (let x of [(() => x)()]) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (const x of [(() => x)()]) {
      ;
    }
  } catch (e) {
    ;
  }

  var rx0 = null,
      rx1 = null;
  var ry0 = null,
      ry1 = null;

  function registerVars() {
    for (var x in {
      a: rx0 = x
    }) {
      rx1 = x;
    }

    for (var y of [ry0 = y]) {
      ry1 = y;
    }
  }

  registerVars();
  console.log(undefined, rx0);
  console.log('a', rx1);
  console.log(undefined, ry0);
  console.log(undefined, ry1);
  var sax0 = null,
      sax1 = null;
  var say0 = null,
      say1 = null;

  function slotArrayVars() {
    for (var x in {
      a: sax0 = x
    }) {
      sax1 = function () {
        return x;
      }();
    }

    for (var y of [say0 = y]) {
      say1 = function () {
        return y;
      }();
    }
  }

  slotArrayVars();
  console.log(undefined, sax0);
  console.log('a', sax1);
  console.log(undefined, say0);
  console.log(undefined, say1);
  var aox0 = null,
      aox1 = null;
  var aoy0 = null,
      aoy1 = null;

  function activationObjectVars() {
    for (var x in {
      a: aox0 = x
    }) {
      aox1 = x;
    }

    for (var y of [aoy0 = y]) {
      aoy1 = y;
    }
  }

  activationObjectVars();
  console.log(undefined, aox0);
  console.log('a', aox1);
  console.log(undefined, aoy0);
  console.log(undefined, aoy1);
}

t4();

function t6() {
  var a = [];
  var i = 0;

  for (let x = 0; x < 3; x += 1) {
    a[i++] = function () {
      return x;
    };
  }

  console.log(0, a[0]());
  console.log(1, a[1]());
  console.log(2, a[2]());
}

t6();

function t7() {
  var a = [];
  var i = 0;

  for (let x = 0; x < 3; x += 1) {
    a[i++] = function () {
      return x;
    };
  }

  console.log(0, a[0]());
  console.log(1, a[1]());
  console.log(2, a[2]());
}

t7();

function t8() {
  try {
    for (const x = 0; x++ < 3;) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (const x = 0; x < 3; x += 1) {
      ;
    }
  } catch (e) {
    ;
  }

  try {
    for (const x = 0; x < 3;) {
      x += 1;
    }
  } catch (e) {
    ;
  }
}

t8();

function t9() {
  var a = [];

  for (let x = (a[0] = () => x, 0); x < 1; x += 1) {
    x += 1;

    a[1] = () => x;
  }

  console.log(0, a[0]());
  console.log(1, a[1]());
}

t9();

function t10() {
  var t = [],
      ti = 0;
  var b = [],
      bi = 0;
  var i = [],
      ii = 0;
  var s = [],
      si = 0;

  for (let x = 0; // test expression
  t[ti++] = () => x, s[si++] = y => x = y, x < 2; // increment expression
  i[ii++] = () => x, x += 1) {
    // body
    b[bi++] = () => x;
  }

  console.log(0, t[0]());
  console.log(0, b[0]());
  console.log(1, i[0]());
  s[0]('a');
  console.log('a', t[0]());
  console.log('a', b[0]());
  console.log(1, i[0]());
  console.log(1, t[1]());
  console.log(1, b[1]());
  console.log(2, i[1]());
  s[1]('b');
  console.log('b', i[0]());
  console.log('b', t[1]());
  console.log('b', b[1]());
  console.log(2, i[1]());
  console.log(2, t[2]());
  console.log(undefined, b[2]);
  console.log(undefined, i[2]);
  s[2]('c');
  console.log('b', i[0]());
  console.log('b', t[1]());
}

t10();

function t11() {
  var a = [];
  var i = 0;

  for (let [x, y, z] in {
    abc: 0,
    def: 1
  }) {
    a[i++] = [() => x, () => y, () => z];
  }

  for (const {
    x,
    y,
    z
  } of [{
    x: 1,
    y: 2,
    z: 3
  }, {
    x: 4,
    y: 5,
    z: 6
  }]) {
    a[i++] = [() => x, () => y, () => z];
  }

  for (let [x, y, z] = [0, 1, 2]; x < 2; [x, y, z] = [x + 1, y + 2, z + 3]) {
    a[i++] = [() => x, () => y, () => z];
  }

  console.log('a', a[0][0]());
  console.log('b', a[0][1]());
  console.log('c', a[0][2]());
  console.log('d', a[1][0]());
  console.log('e', a[1][1]());
  console.log('f', a[1][2]());
  console.log(1, a[2][0]());
  console.log(2, a[2][1]());
  console.log(3, a[2][2]());
  console.log(4, a[3][0]());
  console.log(5, a[3][1]());
  console.log(6, a[3][2]());
  console.log(0, a[4][0]());
  console.log(1, a[4][1]());
  console.log(2, a[4][2]());
  console.log(1, a[5][0]());
  console.log(3, a[5][1]());
  console.log(5, a[5][2]());
}

t11();
