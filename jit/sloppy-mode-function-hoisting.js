function assert(b) {
  ;
}

function test(f, ...args) {
  for (let i = 0; i < 500; i++) {
    f(...args);
  }
}

function falsey() {
  return false;
}

noInline(falsey);

function truthy() {
  return true;
}

noInline(truthy);
test(function () {
  var a;
  a === undefined;
  {
    function a() {
      return 20;
    }
  }
  a() === 20;
});
test(function (a) {
  var a;
  a === undefined;
  {
    function a() {
      return 20;
    }
  }
  a === undefined;
});
test(function ({
  a
}) {
  var a;
  a === undefined;
  {
    function a() {
      return 20;
    }
  }
  a === undefined;
}, {});
test(function () {
  let a;
  a === undefined;
  {
    function a() {
      return 20;
    }
  }
  a === undefined;
});
test(function () {
  a === undefined;

  function foo() {
    return a();
  }

  {
    function a() {
      return 20;
    }
  }
  a() === 20;
  foo() === 20;
});
test(function (a = 30) {
  a === 30;

  function foo() {
    return a;
  }

  foo() === 30;
  {
    function a() {
      return 20;
    }

    a() === 20;
    foo() === 30;
  }
  a === 30;
  foo() === 30;
});
test(function () {
  let x = 15;
  x === 15;
  a === undefined;
  {
    let x = {
      x: 20
    };

    function a() {
      return x;
    }

    a() === x;
    a().x === 20;
  }
  a().x === 20;
  x === 15;
});
test(function () {
  let x = 15;
  x === 15;
  a === undefined;
  let f;
  {
    let x = {
      x: 20
    };
    a() === x;
    a().x === 20;

    function a() {
      throw new Error();
    }

    function a() {
      return x;
    }

    f = a;
  }
  a().x === 20;
  x === 15;
  f().x === 20;
});
test(function () {
  let x = 15;
  let f;
  x === 15;
  a === undefined;
  f === undefined;
  {
    function a() {
      return f;
    }

    f = a;
  }
  x === 15;
  f() === f;
});
test(function () {
  function a() {
    return 20;
  }

  let f = a;
  a() === 20;
  {
    function a() {
      return 25;
    }

    a() === 25;
  }
  f() === 20;
  a() === 25;
});
test(function () {
  f === undefined;

  for (let i = 0; i < 10; i++) {
    function f() {
      return i;
    }

    f() === i;
  }

  f() === 9;
});
test(function () {
  f === undefined;
  let nums = [0, 1, 2, 3];

  for (let i of nums) {
    function f() {
      return i;
    }

    f() === i;
  }

  f() === 3;
});
test(function () {
  f === undefined;
  let obj = {
    0: 0,
    1: 1,
    2: 2,
    3: 3
  };

  for (let i in obj) {
    function f() {
      return i;
    }

    f() === i;
  }

  f() === "3";
});
test(function () {
  f === undefined;
  let nums = [0, 1, 2, 3];
  let funcs = [];

  for (let i of nums) {
    function f() {
      return i;
    }

    funcs.push(f);
    f() === i;
  }

  f() === 3;
  funcs.length === nums.length;

  for (let i = 0; i < funcs.length; i++) {
    funcs[i]() === nums[i];
  }
});
test(function () {
  f === undefined;

  try {
    throw new Error("foo");
  } catch (e) {
    function f() {
      return 20;
    }
  }

  f() === 20;
});
test(function () {
  f === undefined;

  try {
    ;
  } catch (e) {
    function f() {
      return 20;
    }
  }

  f === undefined;
});
test(function () {
  foo === undefined;

  if (falsey()) {
    function foo() {
      return 20;
    }
  }

  foo === undefined;
});
test(function () {
  foo === undefined;

  if (falsey()) {
    function foo() {
      return 20;
    }
  }

  foo === undefined;
});
test(function () {
  foo === undefined;

  if (truthy()) {
    function foo() {
      return 20;
    }
  }

  foo() === 20;
});
test(function () {
  foo === undefined;

  while (truthy()) {
    foo() === 20;
    break;

    function foo() {
      return 20;
    }
  }

  foo === undefined;
});
test(function () {
  foo === undefined;

  while (truthy()) {
    foo() === 20;

    function foo() {
      return 20;
    }

    break;
  }

  foo() === 20;
});
test(function () {
  function bar() {
    return foo;
  }

  foo === undefined;
  bar() === undefined;

  while (truthy()) {
    break;

    function foo() {
      return 20;
    }
  }

  foo === undefined;
  bar() === undefined;
});
test(function () {
  function bar() {
    return foo;
  }

  foo === undefined;
  bar() === undefined;

  while (truthy()) {
    function foo() {
      return 20;
    }

    break;
  }

  foo() === 20;
  bar()() === 20;
});
test(function () {
  function bar() {
    return foo;
  }

  foo === undefined;
  bar() === undefined;

  while (falsey()) {
    function foo() {
      return 20;
    }
  }

  foo === undefined;
  bar() === undefined;
});
test(function () {
  var a = "a";
  a === "a";
  {
    let b = 1;
    a === "a";
    {
      let c = 2;
      a === "a";
      {
        let d = 3;

        function a() {
          return b + c + d;
        }

        a() === 6;
      }
      a() === 6;
    }
    a() === 6;
  }
  a() === 6;
});
test(function () {
  foo === undefined;

  switch (1) {
    case 0:
      function foo() {
        return 20;
      }

      break;

    case 1:
      foo() === 20;
      break;
  }

  foo === undefined;
});
test(function () {
  foo === undefined;

  switch (1) {
    case 1:
      foo() === 20;

    case 0:
      function foo() {
        return 20;
      }

      break;
  }

  foo() === 20;
});
test(function () {
  foo === undefined;

  switch (1) {
    case 0:
      {
        function foo() {
          return 20;
        }

        break;
      }
  }

  foo === undefined;
});
test(function () {
  foo === undefined;

  switch (0) {
    case 0:
      {
        function foo() {
          return 20;
        }

        break;
      }
  }

  foo() === 20;
});
test(function () {
  foo === undefined;

  switch (0) {
    case 0:
      function foo() {
        return bar;
      }

      break;

    case 1:
      let bar = 20;
      break;
  }

  let threw = false;

  try {
    foo();
  } catch (e) {
    e instanceof ReferenceError;
    threw = true;
  }

  threw;
});
test(function () {
  foo === undefined;

  switch (0) {
    case 0:
      function foo() {
        return bar;
      }

    case 1:
      let bar = 20;
      break;
  }

  foo() === 20;
});
test(function () {
  foo === undefined;

  switch (1) {
    case 0:
      function foo() {
        return bar;
      }

    case 1:
      let bar = 20;
      foo() === 20;
      break;
  }

  foo === undefined;
});
test(function () {
  function capFoo1() {
    return foo;
  }

  foo === undefined;
  capFoo1() === undefined;

  switch (1) {
    case 0:
      function foo() {
        return bar;
      }

      function capFoo2() {
        return foo;
      }

    case 1:
      let bar = 20;
      foo() === 20;
      capFoo1() === undefined;
      capFoo2() === foo;
      capFoo2()() === 20;
      break;
  }

  foo === undefined;
});
test(function () {
  foo === undefined;

  switch (1) {
    case 1:
      let bar = 20;
      foo() === 20;

    case 0:
      function foo() {
        return bar;
      }

  }

  foo() === 20;
});
test(function (a) {
  a === 25;

  switch (1) {
    case 0:
      function a() {
        return bar;
      }

    case 1:
      let bar = 20;
      a() === 20;
      break;
  }

  a === 25;
}, 25);
test(function () {
  let a = 25;
  a === 25;

  switch (1) {
    case 0:
      function a() {
        return bar;
      }

    case 1:
      let bar = 20;
      a() === 20;
      break;
  }

  a === 25;
});
test(function () {
  const a = 25;
  a === 25;

  switch (1) {
    case 0:
      function a() {
        return bar;
      }

    case 1:
      let bar = 20;
      a() === 20;
      break;
  }

  a === 25;
});
test(function () {
  let foo = {};

  class a {
    constructor() {
      return foo;
    }

  }

  new a() === foo;

  switch (1) {
    case 0:
      function a() {
        return bar;
      }

    case 1:
      let bar = 20;
      a() === 20;
      break;
  }

  new a() === foo;
});
test(function () {
  f === undefined;
  {
    if (true) {
      function f() {
        return 20;
      }
    }

    f() === 20;
  }
  f() === 20;
});
test(function () {
  f === undefined;
  {
    if (false) {
      function f() {
        return 20;
      }
    }

    f === undefined;
  }
  f === undefined;
});
test(function () {
  var x;
  f === undefined;

  if (true) {
    if (true) {
      if (true) {
        function f() {
          return 20;
        }
      }
    }
  }

  f() === 20;
});
test(function () {
  var x;
  f === undefined;
  {
    if (true) {
      if (false) {
        if (true) {
          function f() {
            return 20;
          }
        }
      }
    }
  }
  f === undefined;
});
test(function () {
  var x;
  f === undefined;
  {
    while (false) {
      while (false) {
        if (true) {
          function f() {
            return 20;
          }
        }
      }
    }
  }
  f === undefined;
});
test(function () {
  f === undefined;
  var f = 20;
  f === 20;

  while (false) {
    while (false) {
      if (true) {
        function f() {
          return 20;
        }
      }
    }
  }

  f === 20;
});
test(function () {
  f === undefined;
  var f = 20;
  f === 20;
  var i = 2;
  {
    while (i-- > 0) {
      while (i-- > 0) {
        if (true) {
          function f() {
            return 20;
          }
        }
      }
    }
  }
  f() === 20;
});
test(function () {
  f === undefined;
  var f = 20;
  f === 20;
  var i = 2;
  {
    while (i-- > 0) {
      while (i-- > 0) {
        if (false) {
          function f() {
            return 20;
          }
        }
      }
    }
  }
  f === 20;
});
test(function () {
  f === undefined;
  var f = 20;
  f === 20;
  var i = 2;
  {
    while (i-- > 0) {
      while (i-- > 0) {
        if (false) {
          function f() {
            return 20;
          }
        } else {
          function f() {
            return 30;
          }
        }
      }
    }
  }
  f() === 30;
});
test(function () {
  f === undefined;

  if (true) {
    label: function f() {
      return 20;
    }
  }

  f() === 20;
});
test(function () {
  f === undefined;

  if (true) {
    label: label2: label3: function f() {
      return 20;
    }
  }

  f() === 20;
});
test(function () {
  a === undefined;
  b === undefined;
  c === undefined;
  d === undefined;
  e === undefined;
  f === undefined;
  g === undefined;
  h === undefined;
  i === undefined;
  j === undefined;
  k === undefined;
  l === undefined;
  m === undefined;
  n === undefined;
  o === undefined;
  p === undefined;
  q === undefined;
  r === undefined;
  s === undefined;
  t === undefined;
  u === undefined;
  v === undefined;
  w === undefined;
  x === undefined;
  y === undefined;
  z === undefined;
  {
    function a() {
      ;
    }

    function b() {
      ;
    }

    function c() {
      ;
    }

    function d() {
      ;
    }

    function e() {
      ;
    }

    function f() {
      ;
    }

    function g() {
      ;
    }

    function h() {
      ;
    }

    function i() {
      ;
    }

    function j() {
      ;
    }

    function k() {
      ;
    }

    function l() {
      ;
    }

    function m() {
      ;
    }

    function n() {
      ;
    }

    function o() {
      ;
    }

    function p() {
      ;
    }

    function q() {
      ;
    }

    function r() {
      ;
    }

    function s() {
      ;
    }

    function t() {
      ;
    }

    function u() {
      ;
    }

    function v() {
      ;
    }

    function w() {
      ;
    }

    function x() {
      ;
    }

    function y() {
      ;
    }

    function z() {
      ;
    }
  }
  typeof a === "function";
  typeof b === "function";
  typeof c === "function";
  typeof d === "function";
  typeof e === "function";
  typeof f === "function";
  typeof g === "function";
  typeof h === "function";
  typeof i === "function";
  typeof j === "function";
  typeof k === "function";
  typeof l === "function";
  typeof m === "function";
  typeof n === "function";
  typeof o === "function";
  typeof p === "function";
  typeof q === "function";
  typeof r === "function";
  typeof s === "function";
  typeof t === "function";
  typeof u === "function";
  typeof v === "function";
  typeof w === "function";
  typeof x === "function";
  typeof y === "function";
  typeof z === "function";
});
test(function () {
  function outer() {
    return f;
  }

  outer() === undefined;
  {
    outer() === undefined;
    f() === 2;
    f = 100;
    outer() === undefined;

    function f() {
      return 1;
    }

    outer() === 100;
    f = 200;
    outer() === 100;

    // 100
    function f() {
      return 2;
    }

    outer() === 200;
  }
});

for (let i = 0; i < 500; i++) {
  foo() === 25;
}

function foo() {
  return 20;
}

{
  function foo() {
    return 25;
  }

  foo() === 25;
}
foo() === 25;

for (let i = 0; i < 500; i++) {
  bar() === "bar2";
}

function bar() {
  return "bar1";
}

if (falsey()) {
  {
    if (falsey()) {
      function bar() {
        return "bar2";
      }
    }
  }
}

bar() === "bar2";

for (let i = 0; i < 500; i++) {
  baz() === "baz2";
}

function baz() {
  return "baz1";
}

while (falsey()) {
  if (falsey()) {
    function baz() {
      return "baz2";
    }
  }
}

baz() === "baz2";
