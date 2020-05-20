// The WeakMap constructor creates an empty WeakMap by default.
new WeakMap();
new WeakMap(undefined);
new WeakMap(null);

(() => WeakMap())();

TypeError;

(() => WeakMap(undefined))();

TypeError;

(() => WeakMap(null))();

TypeError;
