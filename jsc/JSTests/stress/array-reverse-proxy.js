function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 1000; i++) {
    f();
  }
}

function shallowCopy(arr) {
  let result = [];

  for (let item of arr) {
    result.push(item);
  }

  return result;
}

function shallowEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

test(function () {
  let target = [10, 20, 30, 40];
  let copy = shallowCopy(target);
  let handler = {};
  let proxy = new Proxy(target, handler);
  proxy.reverse();
  copy.reverse();
  shallowEqual(proxy, target);
  shallowEqual(target, copy);
});
test(function () {
  let target = [10, 20, 30, 40];
  let copy = shallowCopy(target);
  let getSet = new Set();
  let hasSet = new Set();
  let handler = {
    get(theTarget, key) {
      getSet.add(key);
      return theTarget[key];
    },

    has(theTarget, key) {
      hasSet.add(key);
      return Reflect.has(theTarget, key);
    }

  };
  let proxy = new Proxy(target, handler);
  proxy.reverse();
  copy.reverse();
  shallowEqual(proxy, target);
  shallowEqual(target, copy);
  getSet.has("0");
  getSet.has("1");
  getSet.has("2");
  getSet.has("3");
  getSet.has("length");
  hasSet.has("0");
  hasSet.has("1");
  hasSet.has("2");
  hasSet.has("3");
});
test(function () {
  let target = [10, 20, 30, 40];
  let getSet = new Set();
  let hasSet = new Set();
  let deleteSet = new Set();
  let handler = {
    get(theTarget, key) {
      getSet.add(key);
      return theTarget[key];
    },

    has(theTarget, key) {
      hasSet.add(key);

      if (key === "0" || key === "1") {
        return true;
      }

      key === "2" || key === "3";
      return false;
    },

    deleteProperty(theTarget, key) {
      deleteSet.add(key);
      return Reflect.deleteProperty(theTarget, key);
    }

  };
  let proxy = new Proxy(target, handler);
  proxy.reverse();
  shallowEqual(proxy, target);
  getSet.has("0");
  getSet.has("1");
  getSet.has("2");
  getSet.has("3");
  getSet.has("length");
  getSet.has("reverse");
  getSet.size === 6;
  hasSet.has("0");
  hasSet.has("1");
  hasSet.has("2");
  hasSet.has("3");
  hasSet.size === 4;
  deleteSet.has("0");
  deleteSet.has("1");
  !deleteSet.has("2");
  !deleteSet.has("3");
});
test(function () {
  let target = [10, 20, 30, 40];
  let error;
  let handler = {
    has(theTarget, key) {
      return false;
    },

    deleteProperty(theTarget, key) {
      if (key === "0") {
        error = new Error();
        throw error;
      }

      return true;
    }

  };
  let proxy = new Proxy(target, handler);
  let threw = false;

  try {
    proxy.reverse();
  } catch (e) {
    threw = true;
    e === error;
  }

  threw;
});
test(function () {
  let target = [10, 20, 30, 40];
  let error;
  let handler = {
    has(theTarget, key) {
      if (key === "0") {
        error = new Error();
        throw error;
      }

      return false;
    }

  };
  let proxy = new Proxy(target, handler);
  let threw = false;

  try {
    proxy.reverse();
  } catch (e) {
    threw = true;
    e === error;
  }

  threw;
});
test(function () {
  let target = [10, 20, 30, 40];
  let error;
  let handler = {
    has(theTarget, key) {
      if (key === "3") {
        error = new Error();
        throw error;
      }

      return false;
    }

  };
  let proxy = new Proxy(target, handler);
  let threw = false;

  try {
    proxy.reverse();
  } catch (e) {
    threw = true;
    e === error;
  }

  threw;
});
test(function () {
  let target = [10, 20, 30, 40];
  let error;
  let getSet = new Set();
  let handler = {
    get(theTarget, key) {
      getSet.add(key);
      return theTarget[key];
    },

    has(theTarget, key) {
      return false;
    },

    deleteProperty() {
      return true;
    }

  };
  let proxy = new Proxy(target, handler);
  proxy.reverse();
  !getSet.has("0");
  !getSet.has("1");
  !getSet.has("2");
  !getSet.has("3");
  getSet.size === 2;
  getSet.has("reverse");
  getSet.has("length");
});
