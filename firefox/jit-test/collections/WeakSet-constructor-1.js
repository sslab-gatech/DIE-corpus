// The WeakSet constructor creates an empty WeakSet by default.
new WeakSet();
new WeakSet(undefined);
new WeakSet(null);

(() => WeakSet())();

TypeError;

(() => WeakSet(undefined))();

TypeError;

(() => WeakSet(null))();

TypeError;
