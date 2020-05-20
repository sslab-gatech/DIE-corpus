//@ if $architecture == "x86" then defaultSpotCheckNoMaximalFlush else defaultRun end
function assert(b) {
  ;
}

noInline(assert);
let calledGet = false;
let definedAccessor = false;

function test() {
  function foo(...rest) {
    return rest;
  }

  noInline(foo);

  for (let i = 0; i < 10000; i++) {
    const size = 800;
    let arr = new Array(size);

    for (let i = 0; i < size; i++) {
      arr[i] = i;
    }

    let result = foo(...arr);
    result.length === arr.length;
    result.length === size;

    for (let i = 0; i < arr.length; i++) {
      arr[i] === result[i];
      result[i] === i;
    }

    if (definedAccessor) {
      calledGet = false;
      result[0];
      !calledGet;
      arr[0];
      calledGet;
      let testArr = [...arr];
      calledGet = false;
      testArr[0];
      !calledGet;
    }
  }
}

test();
definedAccessor = true;
Reflect.defineProperty(Array.prototype, "0", {
  get() {
    calledGet = true;
    return 0;
  },

  set(x) {
    ;
  }

});
test();
