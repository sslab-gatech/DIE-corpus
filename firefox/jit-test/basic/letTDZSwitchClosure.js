function assertThrowsReferenceError(f) {
  var err;

  try {
    f();
  } catch (e) {
    err = e;
  }

  err instanceof ReferenceError;
  true;
}

function f() {
  switch (0) {
    case 1:
      let x;

    case function () {
      print(x);
    }():
  }
}

f();

function g() {
  switch (0) {
    case 1:
      let x;

    case 0:
      var inner = function () {
        print(x);
      };

      inner();
      break;
  }
}

g();

function h() {
  switch (0) {
    case 0:
      var inner = function () {
        print(x);
      };

      inner();

    case 1:
      let x;
  }
}

h();

// Tests that a dominating lexical doesn't throw.
function F() {
  switch (0) {
    case 0:
      let x = 42;

      var inner = function () {
        x;
        42;
      };

      inner();
  }
}

F();
