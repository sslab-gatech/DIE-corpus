//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Function unit tests from bugfixes
function test1() {
  function f() {
    ;
  }

  Object.defineProperty(f, 'length', {
    get: function () {
      ;
    }
  });

  try {
    f.length = 1;
  } catch (e) {
    ;
  }
}

test1();

function test2() {
  function g(name) {
    var f = function () {
      ;
    };

    Object.seal(f);
    Object.defineProperty(f, name, {
      get: function () {
        ;
      }
    });
  }

  try {
    g('length');
  } catch (e) {
    ;
  }

  try {
    g('arguments');
  } catch (e) {
    ;
  }

  try {
    g('caller');
  } catch (e) {
    ;
  }
}

test2();

function test3() {
  function g(name) {
    var f = function () {
      ;
    };

    Object.seal(f);
    Object.defineProperty(f, name, {
      value: 0
    });
  }

  try {
    g('length');
  } catch (e) {
    ;
  }

  try {
    g('arguments');
  } catch (e) {
    ;
  }

  try {
    g('caller');
  } catch (e) {
    ;
  }
}

test3();

function test4() {
  function g(name) {
    var f = function () {
      ;
    };

    Object.defineProperty(f, name, {
      get: function () {
        ;
      }
    });
    Object.defineProperty(f, name, {
      writable: false,
      configurable: true
    });
  }

  try {
    g('length');
  } catch (e) {
    ;
  }

  try {
    g('arguments');
  } catch (e) {
    ;
  }

  try {
    g('caller');
  } catch (e) {
    ;
  }
}

test4();
