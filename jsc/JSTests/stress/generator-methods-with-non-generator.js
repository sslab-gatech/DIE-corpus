function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    errorThrown = true;
    error = e;
  }
}

function* gen() {
  ;
}

var g = gen();
shouldThrow(() => {
  g.next.call({});
}, `TypeError: |this| should be a generator`);
shouldThrow(() => {
  g.throw.call({});
}, `TypeError: |this| should be a generator`);
shouldThrow(() => {
  g.return.call({});
}, `TypeError: |this| should be a generator`);
