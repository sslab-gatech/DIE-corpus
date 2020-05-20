function checkCommon(f) {
  f.apply(null, ...[[1, 2, 3]]);
  [1, 2, 3];
  f.apply(...[null], [1, 2, 3]);
  [1, 2, 3];
  f.apply(...[null], ...[[1, 2, 3]]);
  [1, 2, 3];
  f.apply(...[null, [1, 2, 3]]);
  [1, 2, 3];
  f.apply(...new Set([null, [1, 2, 3]]));
  [1, 2, 3];
  f.apply(...[null, [1, 2, 3]][Symbol.iterator]());
  [1, 2, 3];
  let itr = {};

  itr[Symbol.iterator] = function () {
    return {
      i: 0,
      next: function () {
        this.i++;

        if (this.i == 1) {
          return {
            value: null,
            done: false
          };
        } else {
          if (this.i == 2) {
            return {
              value: [1, 2, 3],
              done: false
            };
          } else {
            return {
              value: undefined,
              done: true
            };
          }
        }
      }
    };
  };

  f.apply(...itr);
  [1, 2, 3];

  function* gen() {
    yield null;
    yield [1, 2, 3];
  }

  f.apply(...gen());
  [1, 2, 3];
  let a;
  f.apply(null, ...(a = [[1, 2, 3]]));
  [1, 2, 3];

  (() => f.apply(null, ...null, [1, 2, 3]))();

  TypeError;

  (() => f.apply(null, ...undefined, [1, 2, 3]))();

  TypeError;
}

function checkNormal(f) {
  checkCommon(f);
  f.apply(null, ...[[]]);
  [undefined, undefined, undefined];
  f.apply(null, ...[[1]]);
  [1, undefined, undefined];
  f.apply(null, ...[[1, 2]]);
  [1, 2, undefined];
  f.apply(null, ...[[1, 2, 3, 4]]);
  [1, 2, 3];
  f.apply(null, ...[[undefined]]);
  [undefined, undefined, undefined];
}

checkNormal(function (a, b, c) {
  return [a, b, c];
});
checkNormal((a, b, c) => [a, b, c]);

function checkDefault(f) {
  checkCommon(f);
  f.apply(null, ...[[]]);
  [-1, -2, -3];
  f.apply(null, ...[[1]]);
  [1, -2, -3];
  f.apply(null, ...[[1, 2]]);
  [1, 2, -3];
  f.apply(null, ...[[1, 2, 3, 4]]);
  [1, 2, 3];
  f.apply(null, ...[[undefined]]);
  [-1, -2, -3];
}

checkDefault(function (a = -1, b = -2, c = -3) {
  return [a, b, c];
});
checkDefault((a = -1, b = -2, c = -3) => [a, b, c]);

function checkRest(f) {
  checkCommon(f);
  f.apply(null, ...[[]]);
  [];
  f.apply(null, ...[[1]]);
  [1];
  f.apply(null, ...[[1, 2]]);
  [1, 2];
  f.apply(null, ...[[1, 2, 3, 4]]);
  [1, 2, 3, 4];
  f.apply(null, ...[[undefined]]);
  [undefined];
  f.apply(null, ...new Map([[["a", "A"], ["b", "B"]]])).map(([k, v]) => k + v);
  ["aA", "bB"];
}

checkRest(function (...x) {
  return x;
});
checkRest((...x) => x);
