class A {
  "constructor"() {
    return {};
  }

}

new A() instanceof A;
false;

class B extends class {} {
  "constructor"() {
    return {};
  }

}

new B() instanceof B;
false;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
