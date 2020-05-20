function AsmModule(stdlib, foreign, heap) {
  "use asm";

  var ffi = foreign.t;

  function doTest() {
    ffi();
  }

  function test() {
    doTest();
  }

  return {
    test: test
  };
}

let stack;

function tester() {
  stack = saveStack();
}

const buf = new ArrayBuffer(1024 * 8);
const module = AsmModule(this, {
  t: tester
}, buf);
module.test();
print(stack);
stack.functionDisplayName;
"tester";
stack.parent.functionDisplayName;
"doTest";
stack.parent.line;
6;
stack.parent.parent.functionDisplayName;
"test";
stack.parent.parent.line;
10;
stack.parent.parent.parent.line;
24;
stack.parent.parent.parent.parent;
null;
