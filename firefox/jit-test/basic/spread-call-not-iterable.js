(() => Math.sin(...true))();

TypeError;

(() => Math.sin(...false))();

TypeError;

(() => Math.sin(...new Date()))();

TypeError;

(() => Math.sin(...Function("")))();

TypeError;

(() => Math.sin(...function () {
  ;
}))();

TypeError;

(() => Math.sin(...(x => x)))();

TypeError;

(() => Math.sin(...1))();

TypeError;

(() => Math.sin(...{}))();

TypeError;
var foo = {};
foo[Symbol.iterator] = 10;

(() => Math.sin(...foo))();

TypeError;

foo[Symbol.iterator] = function () {
  return undefined;
};

(() => Math.sin(...foo))();

TypeError;

foo[Symbol.iterator] = function () {
  return this;
};

(() => Math.sin(...foo))();

TypeError;

foo[Symbol.iterator] = function () {
  return this;
};

foo.next = function () {
  throw 10;
};

(() => Math.sin(...foo))();

10;

(() => Math.sin(.../a/))();

TypeError;

(() => Math.sin(...new Error()))();

TypeError;
