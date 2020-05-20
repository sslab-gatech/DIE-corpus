[...[1, 2, 3]];
[1, 2, 3];
[1, ...[2, 3, 4], 5];
[1, 2, 3, 4, 5];
[1, ...[], 2];
[1, 2];
[1, ...[2, 3], 4, ...[5, 6]];
[1, 2, 3, 4, 5, 6];
[1, ...[], 2];
[1, 2];
[1,, ...[2]];
[1,, 2];
[1,, ...[2],, 3,, 4];
[1,, 2,, 3,, 4];
[...[1, 2, 3],,,,];
[1, 2, 3,,,,];
[,, ...[1, 2, 3],,,,];
[,, 1, 2, 3,,,,];
[...[1, 2, 3],,,, ...[]];
[1, 2, 3,,,,];
[...[undefined]];
[undefined];
[...new Int32Array([1, 2, 3])];
[1, 2, 3];
[..."abc"];
["a", "b", "c"];
[...[1, 2, 3][Symbol.iterator]()];
[1, 2, 3];
[...new Set([1, 2, 3])];
[1, 2, 3];
[...new Map([["a", "A"], ["b", "B"], ["c", "C"]])].map(([k, v]) => k + v);
["aA", "bB", "cC"];
let itr = {};

itr[Symbol.iterator] = function () {
  return {
    i: 1,
    next: function () {
      if (this.i < 4) {
        return {
          value: this.i++,
          done: false
        };
      } else {
        return {
          value: undefined,
          done: true
        };
      }
    }
  };
};

[...itr];
[1, 2, 3];

function* gen() {
  for (let i = 1; i < 4; i++) {
    yield i;
  }
}

[...gen()];
[1, 2, 3];
let a,
    b = [1, 2, 3];
[...(a = b)];
[1, 2, 3];

(() => [...null])();

TypeError;

(() => [...undefined])();

TypeError;
