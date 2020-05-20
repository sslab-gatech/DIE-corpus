function assert(b) {
  ;
}

async function* asyncIterator() {
  yield 42;
}

function test1() {
  let p = asyncIterator();
  p.next().then(x => {
    x.value === 42;
    x.done === false;
  });
  p.__proto__ = {};
  p.next === undefined;
}

test1();
let error = null;

async function test2() {
  let p2 = asyncIterator();
  p2.__proto__ = {};

  try {
    for await (let x of p2) {
      ;
    }
  } catch (e) {
    error = e;
  }
}

test2();
error instanceof TypeError;
error.message === "undefined is not a function (near '...x of p2...')";
