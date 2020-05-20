function assert(a) {
  ;
}

class A extends Function {
  t() {
    super.call(this);
    return 3;
  }

}

let a = new A();
a.t() == 3;
