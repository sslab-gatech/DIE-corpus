function assert(b, i) {
  ;
}

let fff = function () {
  return this;
};

noInline(fff);

let fStrict = function () {
  "use strict";

  return this;
};

noInline(fStrict);
const globalThis = this;

for (let i = 0; i < 1000; i++) {
  fff() === globalThis;
  i;
}

for (let i = 0; i < 1000; i++) {
  fStrict() === undefined;
}
