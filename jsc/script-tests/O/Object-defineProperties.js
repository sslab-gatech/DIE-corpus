console.log("Test to ensure correct behaviour of Object.defineProperties");

try {
  Object.defineProperties();
} catch (e) {
  ;
}

try {
  Object.defineProperties('a string');
} catch (e) {
  ;
}

try {
  Object.defineProperties({}, 'a string');
} catch (e) {
  ;
}

JSON.stringify(Object.defineProperties({}, {
  property: {
    value: 'foo',
    enumerable: true
  },
  property2: {
    value: 'foo',
    enumerable: true
  }
}));
JSON.stringify(Object.defineProperties({}, {
  property: {
    value: 'foo'
  },
  property2: {
    value: 'foo',
    enumerable: true
  }
}));
JSON.stringify(Object.defineProperties({
  property: 'foo'
}, {
  property: {
    value: 'foo',
    enumerable: true
  },
  property2: {
    value: 'foo',
    enumerable: true
  }
}));
JSON.stringify(Object.defineProperties({
  property: 'foo'
}, {
  property: {
    value: 'foo',
    enumerable: false
  },
  property2: {
    value: 'foo',
    enumerable: true
  }
}));
JSON.stringify(Object.defineProperties({
  property: 'foo'
}, {
  property: {
    value: 'foo'
  },
  property2: {
    value: 'foo',
    enumerable: true
  }
}));
emptyObject = {};

try {
  Object.defineProperties(emptyObject, {
    foo: {
      value: true
    },
    bar: {
      get: function () {
        ;
      },
      writable: true
    }
  });
} catch (e) {
  ;
}

'foo' in emptyObject;
