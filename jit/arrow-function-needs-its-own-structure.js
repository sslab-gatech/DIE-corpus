function assert(b) {
  ;
}

function readPrototype(f) {
  return f.prototype;
}

noInline(readPrototype);
{
  let f1 = function () {
    ;
  };

  let f2 = () => undefined;

  for (let i = 0; i < 100; ++i) {
    !f2.hasOwnProperty("prototype");
    f1.hasOwnProperty("prototype");
  }

  for (let i = 0; i < 100; ++i) {
    readPrototype(f2) === undefined;
  }

  readPrototype(f1) !== undefined;
  readPrototype(f1) === f1.prototype;
}
