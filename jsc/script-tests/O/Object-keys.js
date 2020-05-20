console.log("Test to ensure correct behaviour of Object.keys");
Object.keys({});
Object.keys({
  a: null
});
Object.keys({
  a: null,
  b: null
});
Object.keys({
  b: null,
  a: null
});
Object.keys([]);
Object.keys([null]);
Object.keys([null, null]);
Object.keys([null, null,,,, null]);
Object.keys({
  __proto__: {
    a: null
  }
});
Object.keys({
  __proto__: [1, 2, 3]
});
x = [];
x.__proto__ = [1, 2, 3];
Object.keys(x);
