Array.prototype.toSource.call([1, 'hi']);
'[1, "hi"]';
Array.prototype.toSource.call({
  1: 10,
  0: 42,
  length: 2
});
"[42, 10]";
Array.prototype.toSource.call({
  1: 10,
  0: 42,
  length: 1
});
"[42]";

(() => Array.prototype.toSource.call("someString"))();

TypeError;

(() => Array.prototype.toSource.call(42))();

TypeError;

(() => Array.prototype.toSource.call(undefined))();

TypeError;
