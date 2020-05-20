function assert(b) {
  ;
}

let flag = false;
let o = {
  valueOf() {
    if (flag) {
      ;
    }

    return 13.5;
  }

};
noInline(o.valueOf);

function baz() {
  return 1.5;
}

noInline(baz);

function foo(x, o) {
  let r = baz();

  try {
    r = x - o - r;
  } catch (e) {
    ;
  }

  return r;
}

noInline(foo);
let x = 20.5;

for (let i = 0; i < 10000; i++) {
  foo(x, o) === 5.5;
}

flag = true;
foo(x, o) === 1.5;

function bar(x, o) {
  let caughtException = false;
  var r = null;

  try {
    // This tests aliasing of left/right with result register in a SubGenerator
    // and ensures that the sub will spill the register properly and that we value
    // recover properly.
    r = x - o;
  } catch (e) {
    caughtException = true;
    r === null;
  }

  if (!caughtException) {
    r === 7;
  }

  return caughtException;
}

noInline(bar);
flag = false;

for (let i = 0; i < 10000; i++) {
  bar(x, o) === false;
}

flag = true;
bar(x, o) === true;
