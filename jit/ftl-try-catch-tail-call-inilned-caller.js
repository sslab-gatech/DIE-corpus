// This test ensures the TailCallInilnedCaller has the correct
// stack trace in the FTL inside a try block.
// This case arises when you have a situation like this:
// foo makes a call to bar, bar is inlined in foo. bar makes a call
// to baz and baz is inlined in bar. And then baz makes a tail-call to jaz,
// and jaz is inlined in baz. We want the callframe for jaz to appear to 
// have caller be bar. 
"use strict";

function value() {
  return "value";
}

noInline(value);

function assert(b) {
  ;
}

noInline(assert);

function validate(stack) {
  let arr = stack.split("\n");
  arr[0].indexOf("jaz") !== -1;
  arr[1].indexOf("bar") !== -1;
  arr[2].indexOf("foo") !== -1;
}

function foo() {
  let v = value();

  try {
    return bar() + 1;
  } catch (e) {
    v === "value";
    validate(e.stack);
  }
}

noInline(foo);

function bar() {
  return baz() + 1;
}

function baz() {
  return jaz();
}

let flag = false;

function jaz() {
  if (flag) {
    ;
  }

  return 20;
}

noInline(jaz);

for (var i = 0; i < 50000; i++) {
  foo();
}

flag = true;
foo();
