console.log("This test ensures that properties on an object literal are put directly onto the created object, and don't call setters in the prototype chain.");
({
  a: true
}).a;
({
  __proto__: {
    a: false
  },
  a: true
}).a;
({
  __proto__: {
    set a(x) {
      throw 'Should not call setter';
    }

  },
  a: true
}).a;
({
  __proto__: {
    get a() {
      throw 'Should not reach getter';
    }

  },
  a: true
}).a;
({
  __proto__: {
    get a() {
      throw 'Should not reach getter';
    },

    b: true
  },
  a: true
}).b;
({
  __proto__: {
    __proto__: {
      a: false
    }
  },
  a: true
}).a;
({
  __proto__: {
    __proto__: {
      set a(x) {
        throw 'Should not call setter';
      }

    }
  },
  a: true
}).a;
({
  __proto__: {
    __proto__: {
      get a() {
        throw 'Should not reach getter';
      }

    }
  },
  a: true
}).a;
({
  __proto__: {
    __proto__: {
      get a() {
        throw 'Should not reach getter';
      },

      b: true
    }
  },
  a: true
}).b;
