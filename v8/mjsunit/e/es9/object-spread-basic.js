// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var x = {
  a: 1
};
var y = { ...x
};
x;
y;
({});
y = { ...{}
};
({});
y = { ...undefined
};
({});
y = { ...null
};
({});
y = { ...1
};
({
  0: 'f',
  1: 'o',
  2: 'o'
});
y = { ...'foo'
};
({
  0: 0,
  1: 1
});
y = { ...[0, 1]
};
({});
({ ...new Proxy({}, {})
});
({
  a: 2
});
y = { ...x,
  a: 2
};
({
  a: 1,
  b: 1
});
y = { ...x,
  b: 1
};
({
  a: 1
});
y = {
  a: 2,
  ...x
};
({
  a: 1,
  b: 1
});
y = {
  a: 2,
  ...x,
  b: 1
};
({
  a: 3
});
y = {
  a: 2,
  ...x,
  a: 3
};
var z = {
  b: 1
};
({
  a: 1,
  b: 1
});
y = { ...x,
  ...z
};
({
  a: 1,
  b: 1
});
y = {
  a: 2,
  ...x,
  ...z
};
({
  a: 1,
  b: 1
});
y = {
  b: 2,
  ...z,
  ...x
};
({
  a: 1,
  b: 1
});
y = {
  a: 1,
  ...x,
  b: 2,
  ...z
};
({
  a: 1,
  b: 2
});
y = {
  a: 1,
  ...x,
  ...z,
  b: 2
};
({
  a: 2,
  b: 2
});
y = { ...x,
  ...z,
  a: 2,
  b: 2
};
var x = {};
Object.defineProperty(x, 'a', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 1
});
({});
({ ...x
});
var x = {};
Object.defineProperty(x, 'a', {
  enumerable: true,
  configurable: false,
  writable: false,
  value: 1
});
var y = { ...x
};
var prop = Object.getOwnPropertyDescriptor(y, 'a');
prop.value;
1;
prop.enumerable;
prop.configurable;
prop.writable;
var x = {
  __proto__: z
};
({});
({ ...x
});
var x = {
  get a() {
    return 1;
  },

  set a(_) {
    "setter called";
  }

};
({
  a: 1
});
y = { ...x
};
var x = {
  method() {
    return 1;
  }

};
x;
y = { ...x
};
var x = {
  *gen() {
    return {
      value: 1,
      done: true
    };
  }

};
x;
y = { ...x
};
var x = {
  get a() {
    throw new Error();
  }

};

(() => {
  y = { ...x
  };
})();

var p = new Proxy({}, {
  ownKeys() {
    throw new Error();
  }

});

(() => {
  y = { ...p
  };
})();

var p = new Proxy({}, {
  ownKeys() {
    [1];
  },

  get() {
    throw new Error();
  }

});

(() => {
  y = { ...p
  };
})();

var p = new Proxy({}, {
  ownKeys() {
    [1];
  },

  getOwnPropertyDescriptor() {
    throw new Error();
  }

});

(() => {
  y = { ...p
  };
})();

var p = new Proxy(z, {
  ownKeys() {
    return Object.keys(z);
  },

  get(_, prop) {
    return z[prop];
  },

  getOwnPropertyDescriptor(_, prop) {
    return Object.getOwnPropertyDescriptor(z, prop);
  }

});
z;
y = { ...p
};
var x = {
  a: 1
};
x;
y = {
  set a(_) {
    throw new Error();
  },

  ...x
};
var x = {
  a: 1
};
x;
y = {
  get a() {
    throw new Error();
  },

  ...x
};
