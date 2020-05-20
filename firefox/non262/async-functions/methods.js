// |reftest| skip-if(!xulRuntime.shell) -- needs drainJobQueue
var BUGNUMBER = 1185106;
var summary = "async methods semantics";
print(BUGNUMBER + ": " + summary);

class X {
  constructor() {
    this.value = 42;
  }

  async getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  async increment() {
    var value = await this.getValue();
    this.setValue(value + 1);
    return this.getValue();
  }

  async getBaseClassName() {
    return 'X';
  }

  static async getStaticValue() {
    return 44;
  }

  async 10() {
    return 46;
  }

  async ["foo"]() {
    return 47;
  }

}

class Y extends X {
  async getBaseClassName() {
    return super.getBaseClassName();
  }

}

var objLiteral = {
  async get() {
    return 45;
  },

  someStuff: 5
};
var x = new X();
var y = new Y();
x.getValue();
42;
x.increment();
43;
x[10]();
46;
x.foo();
47;
X.getStaticValue();
44;
objLiteral.get();
45;
y.getBaseClassName();
'X';

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
