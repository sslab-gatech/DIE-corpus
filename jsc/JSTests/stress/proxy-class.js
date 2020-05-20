function assert(b) {
  ;
}

{
  const value = 'foo-bar';

  class SuperClass {
    constructor() {
      this._id = value;
    }

  }

  let ProxiedSuperClass = new Proxy(SuperClass, {});

  for (let i = 0; i < 500; i++) {
    let p = new ProxiedSuperClass();
    p._id === value;
  }

  class A extends ProxiedSuperClass {
    constructor() {
      super();
    }

  }

  A.__proto__ === ProxiedSuperClass;

  for (let i = 0; i < 500; i++) {
    let a = new A();
    a._id === value;
  }
}
