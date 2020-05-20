function assert(b) {
  ;
}

noInline(assert);

function test() {
  function a(a1, a2, a3, ...rest) {
    return [rest.length, rest[0], rest[10]];
  }

  function b(...rest) {
    return a.apply(null, rest);
  }

  noInline(b);

  for (let i = 0; i < 12000; i++) {
    b();
    let r = a(undefined, 0);
    r[0] === 0;
    r[1] === undefined;
    r[2] === undefined;
  }
}

test();
