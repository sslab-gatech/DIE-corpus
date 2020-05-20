function assert(b) {
  ;
}

{
  let target = function () {
    ;
  };

  let handler = {
    construct: 45
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      new proxy();
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: 'construct' property of a Proxy's handler should be constructible";
    }

    threw;
  }
}
{
  let target = function () {
    ;
  };

  let handler = {
    construct: "hello"
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      new proxy();
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: 'construct' property of a Proxy's handler should be constructible";
    }

    threw;
  }
}
{
  let target = function () {
    ;
  };

  let error = null;
  let handler = {
    get construct() {
      error = new Error();
      throw error;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      new proxy();
    } catch (e) {
      threw = true;
      e === error;
    }

    threw;
    error = null;
  }
}
{
  let target = function () {
    ;
  };

  let error = null;
  let handler = {
    construct: function () {
      ;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      new proxy();
    } catch (e) {
      threw = true;
      e === error;
    }

    threw;
    error = null;
  }
}
{
  let error = null;

  let target = function () {
    new.target === proxy;
    error = new Error();
    throw error;
  };

  let handler = {};
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      new proxy();
    } catch (e) {
      e === error;
      error = null;
      threw = true;
    }

    threw;
  }
}
{
  let target = function () {
    ;
  };

  let handler = {
    construct: function () {
      return 25;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      new proxy();
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Result from Proxy handler's 'construct' method should be an object";
    }

    threw;
  }
}
{
  let target = function () {
    ;
  };

  let handler = {
    construct: function () {
      return "hello";
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      new proxy();
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Result from Proxy handler's 'construct' method should be an object";
    }

    threw;
  }
}
{
  let target = function () {
    ;
  };

  let handler = {
    construct: function () {
      return Symbol();
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      new proxy();
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Result from Proxy handler's 'construct' method should be an object";
    }

    threw;
  }
}
{
  let a = {};
  let b = {};
  let retValue = null;

  let target = function () {
    return retValue;
  };

  let error = null;
  let handler = {
    construct: function (theTarget, argArray, newTarget) {
      theTarget === target;
      newTarget === proxy;
      return new theTarget(...argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    retValue = i % 2 ? a : b;
    new proxy() === retValue;
  }
}
{
  let a = {};
  let b = {};

  let target = function () {
    new.target === proxy;
    return a;
  };

  let error = null;

  let construct = function (theTarget, argArray, newTarget) {
    theTarget === target;
    newTarget === proxy;
    return b;
  };

  let handler = {};
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    if (i % 2) {
      handler.construct = construct;
    } else {
      handler.construct = null;
    }

    let result = new proxy();

    if (i % 2) {
      result === b;
    } else {
      result === a;
    }
  }
}
{
  let target = function (...args) {
    new.target === target;
    args[0] === 0;
    args[1] === 1;
    args[2] === "foo";
  };

  let error = null;

  let construct = function (theTarget, argArray, newTarget) {
    theTarget === target;
    newTarget === proxy;
    return new target(...argArray);
  };

  let handler = {};
  handler.construct = construct;
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    new proxy(0, 1, "foo");
  }
}
{
  let obj = null;

  let target = function (...args) {
    new.target === target;
    args[0] === 0;
    obj;
    args[1] === obj;
    args[2] === "foo";
  };

  let error = null;

  let construct = function (theTarget, argArray, newTarget) {
    theTarget === target;
    newTarget === proxy;
    return new target(...argArray);
  };

  let handler = {};
  handler.construct = construct;
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    obj = {};
    new proxy(0, obj, "foo");
  }
}
