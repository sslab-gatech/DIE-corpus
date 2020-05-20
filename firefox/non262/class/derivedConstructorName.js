class A {
  constructor() {
    ;
  }

}

class B extends A {}

var b = new B();
b.constructor.name;
"B";

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
