function assert(b) {
  ;
}

function test1() {
  let boundFunction = function () {
    ;
  }.bind();

  Object.defineProperty(boundFunction, "prototype", {
    get() {
      ;
    }

  });
  let threw = false;

  try {
    Reflect.construct(function () {
      ;
    }, [], boundFunction);
  } catch (e) {
    ;
  }
}

test1();

function test2() {
  let boundFunction = function () {
    ;
  }.bind();

  let counter = 0;
  Object.defineProperty(boundFunction, "prototype", {
    get() {
      ++counter;
      return {};
    }

  });
  const iters = 1000;

  for (let i = 0; i < iters; ++i) {
    Reflect.construct(function () {
      ;
    }, [], boundFunction);
  }

  counter === iters;
}

test2();
