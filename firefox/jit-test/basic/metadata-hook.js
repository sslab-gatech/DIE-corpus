function Foo() {
  this.x = 0;
  this.y = 1;
}

function hello() {
  function there() {
    w = new Foo();
    x = [1, 2, 3];
    y = [2, 3, 5];
    z = {
      a: 0,
      b: 1
    };
  }

  callee = there;
  callee();
}

hello();
