function assert(b) {
  ;
}

{
  let target = function foo(...args) {
    args[0] === 10;
    args[1] === 20;
    return "foo";
  };

  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      theTarget === target;
      argArray[0] === 10;
      argArray[1] === 20;
      return theTarget.apply(thisArg, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy(10, 20) === "foo";
  }
}
{
  let target = function foo() {
    ;
  };

  let error = null;
  let handler = {
    get apply() {
      error = new Error();
      throw error;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      proxy(10, 20);
    } catch (e) {
      e === error;
      threw = true;
    }

    threw;
  }
}
{
  let called = false;
  let globalThis = this;

  let target = function foo() {
    this === globalThis;
    called = true;
  };

  let handler = {
    apply: null
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy();
    called;
    called = false;
  }
}
{
  let called = false;
  let globalThis = this;

  let target = function foo() {
    this === globalThis;
    called = true;
  };

  let handler = {
    apply: undefined
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy();
    called;
    called = false;
  }
}
{
  let called = false;
  let thisValue = {};

  let target = function foo(x, y, z) {
    this === thisValue;
    x === 20;
    y === 45;
    z === "foo";
    called = true;
  };

  let handler = {
    apply: undefined
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy.call(thisValue, 20, 45, "foo");
    called;
    called = false;
    proxy.apply(thisValue, [20, 45, "foo"]);
    called;
    called = false;
  }
}
{
  let called = false;
  let thisValue = {};

  let target = function foo(x, y, z) {
    this === thisValue;
    x === 20;
    y === 45;
    z === "foo";
    called = true;
    return this;
  };

  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      theTarget === target;
      argArray[0] === 20;
      argArray[1] === 45;
      argArray[2] === "foo";
      thisArg === thisValue;
      return theTarget.apply(thisArg, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy.call(thisValue, 20, 45, "foo") === thisValue;
    called;
    called = false;
    proxy.apply(thisValue, [20, 45, "foo"]) === thisValue;
    called;
    called = false;
  }
}
{
  let called = false;
  let target = Error;
  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      called = true;
      theTarget === Error;
      return theTarget.apply(thisArg, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let error = proxy();
    !!error.stack;
    called = false;
  }
}
{
  let called = false;
  let self = this;

  let target = x => {
    called = true;
    this === self;
    return x;
  };

  let handler = {};
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = proxy(i);
    result === i;
    called = false;
  }
}
{
  let called = false;
  let self = this;

  let target = x => {
    this === self;
    return x;
  };

  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      called = true;
      theTarget === target;
      return theTarget.apply(thisArg, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = proxy(i);
    result === i;
    called = false;
  }
}
{
  let called = false;
  let self = this;

  let target = x => {
    this === self;
    return x;
  };

  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      called = true;
      theTarget === target;
      return theTarget.apply(null, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = proxy(i);
    called;
    result === i;
    called = false;
  }
}
{
  let called = false;

  let target = x => {
    ;
  };

  let error = null;
  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      error = new Error();
      throw error;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      proxy();
    } catch (e) {
      e === error;
      threw = true;
    }

    threw;
  }
}
{
  let called = false;
  let error = null;

  let target = x => {
    error = new Error();
    throw error;
  };

  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      theTarget === target;
      return theTarget.apply(null, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      proxy();
    } catch (e) {
      e === error;
      threw = true;
    }

    threw;
  }
}
{
  let called = false;
  let error = null;
  let target = new Proxy(x => x, {});
  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      theTarget === target;
      called = true;
      return theTarget.apply(null, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy(i) === i;
    called;
    called = false;
  }
}
{
  let target = x => x;

  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      return theTarget.apply(thisArg, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    typeof proxy === "function";
  }
}
{
  let target = function () {
    ;
  };

  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      return theTarget.apply(thisArg, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    typeof proxy === "function";
  }
}
{
  let target = Error;
  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      return theTarget.apply(thisArg, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    typeof proxy === "function";
  }
}
{
  let target = function foo() {
    ;
  }.bind({});

  let handler = {
    apply: function (theTarget, thisArg, argArray) {
      return theTarget.apply(thisArg, argArray);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    typeof proxy === "function";
  }
}
{
  let target = function () {
    ;
  };

  let handler = {};
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    typeof proxy === "function";
  }
}
{
  let target = {};
  let handler = {};
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    typeof proxy === "object";
  }
}
{
  let target = [];
  let handler = {};
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    typeof proxy === "object";
  }
}
{
  let target = new String("foo");
  let handler = {};
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    typeof proxy === "object";
  }
}
