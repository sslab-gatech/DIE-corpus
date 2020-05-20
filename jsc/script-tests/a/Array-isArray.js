console.log("Test to ensure correct behaviour of Array.array");
Array.isArray([]);
Array.isArray(new Array());
Array.isArray(Array());
Array.isArray('abc'.match(/(a)*/g));

(function () {
  return Array.isArray(arguments);
})();

Array.isArray();
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(true);
Array.isArray(false);
Array.isArray('a string');
Array.isArray({});
Array.isArray({
  length: 5
});
Array.isArray({
  __proto__: Array.prototype,
  length: 1,
  0: 1,
  1: 2
});
