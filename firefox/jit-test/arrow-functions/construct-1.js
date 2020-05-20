// Arrow functions are not constructors.
var f = a => {
  this.a = a;
};

(() => f())();

TypeError;

(() => f(1, 2))();

TypeError;
