class TestClass {
  get getter() {
    ;
  }

  set setter(x) {
    ;
  }

  method() {
    ;
  }

  static get staticGetter() {
    ;
  }

  static set staticSetter(x) {
    ;
  }

  static staticMethod() {
    ;
  }

  get 1() {
    ;
  }

  set 2(v) {
    ;
  }

  3() {
    ;
  }

  static get 4() {
    ;
  }

  static set 5(x) {
    ;
  }

  static 6() {
    ;
  }

}

function name(obj, property, get) {
  let desc = Object.getOwnPropertyDescriptor(obj, property);
  return (get ? desc.get : desc.set).name;
}

name(TestClass.prototype, "getter", true);
"get getter";
name(TestClass.prototype, "setter", false);
"set setter";
TestClass.prototype.method.name;
"method";
name(TestClass, "staticGetter", true);
"get staticGetter";
name(TestClass, "staticSetter", false);
"set staticSetter";
TestClass.staticMethod.name;
"staticMethod";
name(TestClass.prototype, "1", true);
"get 1";
name(TestClass.prototype, "2", false);
"set 2";
TestClass.prototype[3].name;
"3";
name(TestClass, "4", true);
"get 4";
name(TestClass, "5", false);
"set 5";
TestClass[6].name;
"6";
reportCompare(true, true);
