"use strict";

function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 500; i++) {
    f();
  }
}

{
  let called = false;

  function foo() {
    called = true;

    function bar() {
      return 25;
    }

    bar() === 25;
    {
      function bar() {
        return 30;
      }

      bar() === 30;
    }
    bar() === 25;
  }

  test(foo);
  called;
}
{
  let called = false;

  function foo() {
    called = true;
    bar() === 25;
    {
      bar() === 30;

      function bar() {
        return 30;
      }
    }
    bar() === 25;

    function bar() {
      return 25;
    }
  }

  test(foo);
  called;
}
{
  let called = false;

  function foo() {
    called = true;

    function foo() {
      return bar();
    }

    function bar() {
      return 25;
    }

    bar() === 25;
    foo() === 25;
    {
      function bar() {
        return 30;
      }

      function foo() {
        return 25;
      }

      bar() === 30;
      foo() === 25;
    }
    bar() === 25;
    foo() === 25;
  }

  test(foo);
  called;
}
{
  let called = false;

  function foo() {
    called = true;
    bar() === 25;
    foo() === 25;
    {
      function bar() {
        return 30;
      }

      function foo() {
        return 25;
      }

      bar() === 30;
      foo() === 25;
    }
    bar() === 25;
    foo() === 25;

    function foo() {
      return bar();
    }

    function bar() {
      return 25;
    }
  }

  test(foo);
  called;
}
{
  let called = false;

  function foo() {
    called = true;
    let isDefault = false;

    switch ('foo') {
      case 1:
        function foo() {
          return 25;
        }

        break;

      case 2:
        function bar() {
          return 30;
        }

        break;

      default:
        isDefault = true;
        foo() === 25;
        bar() === 30;
        break;
    }

    isDefault;
  }

  test(foo);
  called;
}
{
  let called = false;

  function foo() {
    called = true;
    let is1 = false;

    switch (1) {
      case 1:
        is1 = true;

        function foo() {
          return 25;
        }

        foo() === 25;
        bar() === 30;
        break;

      case 2:
        function bar() {
          return 30;
        }

        break;
    }

    is1;
  }

  test(foo);
  called;
}
{
  let called = false;

  function foo() {
    called = true;

    function foo() {
      return 25;
    }

    function bar() {
      return "bar";
    }

    let is2 = false;

    switch (2) {
      case 1:
        {
          function foo() {
            return 30;
          }

          break;
        }

      case 2:
        is2 = true;

        function bar() {
          return 30;
        }

        bar() === 30;
        foo() === 25;
        break;
    }

    is2;
    bar() === "bar";
    foo() === 25;
  }

  test(foo);
  called;
}
{
  let called = false;

  function foo() {
    called = true;

    function foo() {
      return 25;
    }

    function bar() {
      return "bar";
    }

    let capture = () => foo + "" + bar;

    let is2 = false;

    switch (2) {
      case 1:
        {
          function foo() {
            return 30;
          }

          break;
        }

      case 2:
        is2 = true;

        function bar() {
          return 30;
        }

        let capture = () => bar;

        bar() === 30;
        foo() === 25;
        break;
    }

    is2;
    bar() === "bar";
    foo() === 25;
  }

  test(foo);
  called;
}
{
  let called = false;

  function foo() {
    called = true;
    let f1;
    let f2 = foo;

    function foo() {
      ;
    }

    if (true) {
      f1 = foo;

      function foo() {
        ;
      }
    }

    !!f1 && !!f2;
    f1 !== f2;
  }

  test(foo);
  called;
}
{
  let called = false;

  function foo() {
    called = true;
    let f1;
    let f2 = foo;

    function foo() {
      ;
    }

    let capture = () => foo;

    if (true) {
      f1 = foo;

      function foo() {
        ;
      }

      let capture = () => foo;
    }

    !!f1 && !!f2;
    f1 !== f2;
  }

  test(foo);
  called;
}
