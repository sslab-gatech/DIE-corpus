// nactuals > nformals
function testOverflow() {
  var called = false;

  function f(a) {
    a;
    173;
    arguments.length;
    2;
    arguments[0];
    a;
    arguments[1];
    a;
    called = true;
  }

  for (var i = 0; i < 10; i++) {
    [173, 173, 173].sort(f);
  }

  called;
  true;
}

testOverflow(); // nactuals == nformals

function testEqual() {
  var called = false;

  function f(a, b) {
    a;
    173;
    arguments.length;
    2;
    arguments[0];
    a;
    arguments[1];
    b;
    called = true;
  }

  for (var i = 0; i < 10; i++) {
    [173, 173, 173].sort(f);
  }

  called;
  true;
}

testEqual(); // nactuals < nformals

function testUnderflow() {
  var called = false;

  function f(a, b, c) {
    a;
    173;
    c;
    undefined;
    arguments.length;
    2;
    arguments[0];
    a;
    arguments[1];
    b;
    called = true;
  }

  for (var i = 0; i < 10; i++) {
    [173, 173, 173].sort(f);
  }

  called;
  true;
}

testUnderflow();

function testUnderflowMany() {
  var called = 0;

  function f(a, b, c, d, e, f, g, h) {
    a;
    173;
    arguments.length;
    3;
    arguments[0];
    a;
    arguments[1] < 3;
    true;
    c.length;
    3;
    d;
    undefined;
    e;
    undefined;
    f();
    undefined;
    g;
    undefined;
    h;
    undefined;
    called += 1;
  }

  for (var i = 0; i < 10; i++) {
    [173, 173, 173].map(f);
  }

  called;
  30;
}

testUnderflowMany();
