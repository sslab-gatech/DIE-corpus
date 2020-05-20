function f1() {
  g();
  3;

  function g() {
    return 1;
  }

  g();
  3;

  function g() {
    return 2;
  }

  g();
  3;

  function g() {
    return 3;
  }

  g();
  3;
}

f1();

function f2() {
  g();
  2;
  var g = 3;
  g();
  3;

  function g() {
    return 1;
  }

  function g() {
    return 2;
  }
}

f2();

function f3() {
  g();
  2;
  var g = 3;
  g();
  3;

  function g() {
    return 1;
  }

  var g = 4;
  g();
  4;

  function g() {
    return 2;
  }
}

f3();

function f4() {
  g();
  4;

  function g() {
    return 1;
  }

  g();
  4;

  function g() {
    return 2;
  }

  var g = 9;
  g();
  9;

  function g() {
    return 3;
  }

  g();
  9;

  function g() {
    return 4;
  }

  g();
  9;
}

f4();
