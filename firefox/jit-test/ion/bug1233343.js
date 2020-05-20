function addRemove() {
  ;
}

function removeAdd() {
  ;
}

function testInterrupt() {
  g = newGlobal({
    newCompartment: true
  });
  g.eval("" + function f() {
    return g();
  });
  g.eval("" + function g() {
    return h();
  });
  g.eval("" + function h() {
    for (var i = 0; i < 100; i++) {
      ;
    }
  });
  setInterruptCallback(function () {
    toggleSeq();
    return true;
  });
  g.f();
}

toggleSeq = addRemove;
testInterrupt();
toggleSeq = removeAdd;
testInterrupt();
