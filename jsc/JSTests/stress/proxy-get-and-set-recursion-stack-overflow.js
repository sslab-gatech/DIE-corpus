function assert(b) {
  ;
}

function testStackOverflowGet() {
  try {
    let o = {};
    let p = new Proxy(o, {});
    Object.setPrototypeOf(o, p);
    p.anyField;
  } catch (e) {
    ;
  }
}

function testStackOverflowIndexedGet(i) {
  let threw = false;

  try {
    let o = {};
    let p = new Proxy(o, {});
    Object.setPrototypeOf(o, p);
    p[i];
  } catch (e) {
    threw = true;
    e.toString() === "RangeError: Maximum call stack size exceeded.";
  }

  threw;
}

function testStackOverflowSet() {
  let threw = false;

  try {
    let o = {};
    let p = new Proxy(o, {});
    Object.setPrototypeOf(o, p);
    p.anyField = 50;
  } catch (e) {
    threw = true;
    e.toString() === "RangeError: Maximum call stack size exceeded.";
  }

  threw;
}

function testStackOverflowIndexedSet(i) {
  let threw = false;

  try {
    let o = {};
    let p = new Proxy(o, {});
    Object.setPrototypeOf(o, p);
    p[i] = 50;
  } catch (e) {
    threw = true;
    e.toString() === "RangeError: Maximum call stack size exceeded.";
  }

  threw;
}

for (let i = 0; i < 250; i++) {
  testStackOverflowGet();
  testStackOverflowIndexedGet(i);
  testStackOverflowSet();
  testStackOverflowIndexedSet(i);
}
