// |jit-test| --ion-eager
x = [0, 0];
Object.freeze(x).map(function () {
  x.length = 6;
});
x.length;
2;
