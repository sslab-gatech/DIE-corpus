// WeakMap constructor should throw when key is nonnull.
var v1 = 42;
var primitive = 10;

(() => new WeakMap([[primitive, v1]]))();

TypeError;
var empty_array = [];

(() => new WeakMap([empty_array]))();

TypeError;
