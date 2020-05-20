function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 500; i++) {
    f();
  }
}

test(function () {
  let foo = "hello";
  let threw = false;

  try {
    foo.endsWith(/foo/);
  } catch (e) {
    e.toString() === "TypeError: Argument to String.prototype.endsWith cannot be a RegExp";
    threw = true;
  }

  threw;
});
test(function () {
  let foo = "hello";
  let threw = false;

  try {
    foo.startsWith(/foo/);
  } catch (e) {
    e.toString() === "TypeError: Argument to String.prototype.startsWith cannot be a RegExp";
    threw = true;
  }

  threw;
});
test(function () {
  let foo = "hello";
  let threw = false;

  try {
    foo.includes(/foo/);
  } catch (e) {
    e.toString() === "TypeError: Argument to String.prototype.includes cannot be a RegExp";
    threw = true;
  }

  threw;
});
test(function () {
  let props = [];
  let proxy = new Proxy(/foo/, {
    get(theTarget, prop) {
      props.push(prop);
      return theTarget[prop];
    }

  });
  let foo = "hello";
  let threw = false;

  try {
    foo.endsWith(proxy);
  } catch (e) {
    e.toString() === "TypeError: Argument to String.prototype.endsWith cannot be a RegExp";
    threw = true;
  }

  threw;
  props.length === 1;
  props[0] === Symbol.match;
});
test(function () {
  let props = [];
  let proxy = new Proxy(/foo/, {
    get(theTarget, prop) {
      props.push(prop);
      return theTarget[prop];
    }

  });
  let foo = "hello";
  let threw = false;

  try {
    foo.startsWith(proxy);
  } catch (e) {
    e.toString() === "TypeError: Argument to String.prototype.startsWith cannot be a RegExp";
    threw = true;
  }

  threw;
  props.length === 1;
  props[0] === Symbol.match;
});
test(function () {
  let props = [];
  let proxy = new Proxy(/foo/, {
    get(theTarget, prop) {
      props.push(prop);
      return theTarget[prop];
    }

  });
  let foo = "hello";
  let threw = false;

  try {
    foo.includes(proxy);
  } catch (e) {
    e.toString() === "TypeError: Argument to String.prototype.includes cannot be a RegExp";
    threw = true;
  }

  threw;
  props.length === 1;
  props[0] === Symbol.match;
});
test(function () {
  let props = [];
  let proxy = new Proxy(/foo/, {
    get(theTarget, prop) {
      props.push(prop);

      if (prop === Symbol.match) {
        return undefined;
      }

      return theTarget[prop];
    }

  });
  let foo = "/foo/";
  let threw = false;
  let result = foo.includes(proxy);
  result;
  props.length === 5;
  props[0] === Symbol.match;
  props[1] === Symbol.toPrimitive;
  props[2] === "toString";
  props[3] === "source";
  props[4] === "flags";
});
test(function () {
  let props = [];
  let proxy = new Proxy(/foo/, {
    get(theTarget, prop) {
      props.push(prop);

      if (prop === Symbol.match) {
        return undefined;
      }

      return theTarget[prop];
    }

  });
  let foo = "/foo/";
  let threw = false;
  let result = foo.startsWith(proxy);
  result;
  props.length === 5;
  props[0] === Symbol.match;
  props[1] === Symbol.toPrimitive;
  props[2] === "toString";
  props[3] === "source";
  props[4] === "flags";
});
test(function () {
  let props = [];
  let proxy = new Proxy(/foo/, {
    get(theTarget, prop) {
      props.push(prop);

      if (prop === Symbol.match) {
        return undefined;
      }

      return theTarget[prop];
    }

  });
  let foo = "/foo/";
  let threw = false;
  let result = foo.endsWith(proxy);
  result;
  props.length === 5;
  props[0] === Symbol.match;
  props[1] === Symbol.toPrimitive;
  props[2] === "toString";
  props[3] === "source";
  props[4] === "flags";
});
