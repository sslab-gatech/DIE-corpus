let assert = a => {
  if (!a) {
    throw Error("Bad Assertion");
  }
};

let aObj = {
  get foo() {
    return this.a;
  }

};
let obj = {
  jaz() {
    return super.foo;
  }

};
obj.a = "foo";
Object.setPrototypeOf(obj, aObj);
noInline(obj.jaz);

for (let i = 0; i < 10000; i++) {
  if (i == 9999) {
    delete aObj.foo;
    obj.jaz() === undefined;
  } else {
    obj.jaz() == "foo";
  }
}

let bObj = {
  get foo() {
    return this.a;
  }

};
let obj2 = {
  foo() {
    return super.foo;
  }

};
obj2.a = "foo";
Object.setPrototypeOf(obj2, bObj);
noInline(obj.jaz);

for (let i = 0; i < 10000; i++) {
  if (i == 9999) {
    Object.defineProperty(bObj, "foo", {
      get: () => {
        return "boo";
      }
    });
    obj2.foo() == "boo";
  } else {
    obj2.foo() == "foo";
  }
}
