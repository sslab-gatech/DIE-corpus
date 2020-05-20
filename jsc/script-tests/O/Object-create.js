console.log("Test to ensure correct behaviour of Object.defineProperties");

try {
  Object.create();
} catch (e) {
  ;
}

try {
  Object.create('a string');
} catch (e) {
  ;
}

try {
  Object.create({}, 'a string');
} catch (e) {
  ;
}

try {
  Object.create(null, 'a string');
} catch (e) {
  ;
}

JSON.stringify(Object.create(null, {
  property: {
    value: 'foo',
    enumerable: true
  },
  property2: {
    value: 'foo',
    enumerable: true
  }
}));
JSON.stringify(Object.create({}, {
  property: {
    value: 'foo',
    enumerable: true
  },
  property2: {
    value: 'foo',
    enumerable: true
  }
}));
JSON.stringify(Object.create({}, {
  property: {
    value: 'foo'
  },
  property2: {
    value: 'foo',
    enumerable: true
  }
}));
JSON.stringify(Object.create(null, {
  property: {
    value: 'foo'
  },
  property2: {
    value: 'foo',
    enumerable: true
  }
}));
Object.getPrototypeOf(Object.create(Array.prototype));
Object.getPrototypeOf(Object.create(null));

function valueGet() {
  return true;
}

var DescriptorWithValueGetter = {
  foo: Object.create(null, {
    value: {
      get: valueGet
    }
  })
};
var DescriptorWithEnumerableGetter = {
  foo: Object.create(null, {
    value: {
      value: true
    },
    enumerable: {
      get: valueGet
    }
  })
};
var DescriptorWithConfigurableGetter = {
  foo: Object.create(null, {
    value: {
      value: true
    },
    configurable: {
      get: valueGet
    }
  })
};
var DescriptorWithWritableGetter = {
  foo: Object.create(null, {
    value: {
      value: true
    },
    writable: {
      get: valueGet
    }
  })
};
var DescriptorWithGetGetter = {
  foo: Object.create(null, {
    get: {
      get: function () {
        return valueGet;
      }
    }
  })
};
var DescriptorWithSetGetter = {
  foo: Object.create(null, {
    get: {
      value: valueGet
    },
    set: {
      get: function () {
        return valueGet;
      }
    }
  })
};
Object.create(null, DescriptorWithValueGetter).foo;
Object.create(null, DescriptorWithEnumerableGetter).foo;
Object.create(null, DescriptorWithConfigurableGetter).foo;
Object.create(null, DescriptorWithWritableGetter).foo;
Object.create(null, DescriptorWithGetGetter).foo;
Object.create(null, DescriptorWithSetGetter).foo;
