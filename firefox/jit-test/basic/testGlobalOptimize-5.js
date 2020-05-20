var test;

function f() {
  {
    let a = 5;
    with ({
      a: 2
    }) {
      test = function () {
        return a;
      }();
    }
  }
}

f();
test;
2;
