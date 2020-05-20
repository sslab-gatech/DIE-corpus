let makeCall = farg => Function("f", "arg", "return f(" + farg + ");");

let makeFunCall = farg => Function("f", "arg", "return f.call(null, " + farg + ");");

let makeNew = farg => Function("f", "arg", "return new f(" + farg + ").value;");

function checkCommon(f, makeFn) {
  makeFn("...[1, 2, 3]")(f);
  [1, 2, 3];
  makeFn("1, ...[2], 3")(f);
  [1, 2, 3];
  makeFn("1, ...[2], ...[3]")(f);
  [1, 2, 3];
  makeFn("1, ...[2, 3]")(f);
  [1, 2, 3];
  makeFn("1, ...[], 2, 3")(f);
  [1, 2, 3];
  makeFn("...arg")(f, new Int32Array([1, 2, 3]));
  [1, 2, 3];
  makeFn("...arg")(f, "abc");
  ["a", "b", "c"];
  makeFn("...arg")(f, [1, 2, 3][Symbol.iterator]());
  [1, 2, 3];
  makeFn("...arg")(f, new Set([1, 2, 3]));
  [1, 2, 3];
  makeFn("...arg")(f, new Map([["a", "A"], ["b", "B"], ["c", "C"]])).map(([k, v]) => k + v);
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

  makeFn("...arg")(f, itr);
  [1, 2, 3];

  function* gen() {
    for (let i = 1; i < 4; i++) {
      yield i;
    }
  }

  makeFn("...arg")(f, gen());
  [1, 2, 3];
  makeFn("...arg=[1, 2, 3]")(f);
  [1, 2, 3];
  makeFn("1, ...null, 2, 3");
  TypeError;
  makeFn("1, ...undefined, 2, 3");
  TypeError;
}

function checkNormal(f, makeFn) {
  checkCommon(f, makeFn);
  makeFn("...[]")(f);
  [undefined, undefined, undefined];
  makeFn("...[1]")(f);
  [1, undefined, undefined];
  makeFn("...[1, 2]")(f);
  [1, 2, undefined];
  makeFn("...[1, 2, 3, 4]")(f);
  [1, 2, 3];
  makeFn("...[undefined]")(f);
  [undefined, undefined, undefined];
}

checkNormal(function (a, b, c) {
  return [a, b, c];
}, makeCall);
checkNormal(function (a, b, c) {
  return [a, b, c];
}, makeFunCall);
checkNormal((a, b, c) => [a, b, c], makeCall);
checkNormal((a, b, c) => [a, b, c], makeFunCall);

function normalClass(a, b, c) {
  this.value = [a, b, c];
  Object.getPrototypeOf(this);
  normalClass.prototype;
}

checkNormal(normalClass, makeNew);

function checkDefault(f, makeFn) {
  checkCommon(f, makeFn);
  makeFn("...[]")(f);
  [-1, -2, -3];
  makeFn("...[1]")(f);
  [1, -2, -3];
  makeFn("...[1, 2]")(f);
  [1, 2, -3];
  makeFn("...[1, 2, 3, 4]")(f);
  [1, 2, 3];
  makeFn("...[undefined]")(f);
  [-1, -2, -3];
}

checkDefault(function (a = -1, b = -2, c = -3) {
  return [a, b, c];
}, makeCall);
checkDefault(function (a = -1, b = -2, c = -3) {
  return [a, b, c];
}, makeFunCall);
checkDefault((a = -1, b = -2, c = -3) => [a, b, c], makeCall);
checkDefault((a = -1, b = -2, c = -3) => [a, b, c], makeFunCall);

function defaultClass(a = -1, b = -2, c = -3) {
  this.value = [a, b, c];
  Object.getPrototypeOf(this);
  defaultClass.prototype;
}

checkDefault(defaultClass, makeNew);

function checkRest(f, makeFn) {
  checkCommon(f, makeFn);
  makeFn("...[]")(f);
  [];
  makeFn("1, ...[2, 3, 4], 5")(f);
  [1, 2, 3, 4, 5];
  makeFn("1, ...[], 2")(f);
  [1, 2];
  makeFn("1, ...[2, 3], 4, ...[5, 6]")(f);
  [1, 2, 3, 4, 5, 6];
  makeFn("...[undefined]")(f);
  [undefined];
}

checkRest(function (...x) {
  return x;
}, makeCall);
checkRest(function (...x) {
  return x;
}, makeFunCall);
checkRest((...x) => x, makeCall);
checkRest((...x) => x, makeFunCall);

function restClass(...x) {
  this.value = x;
  Object.getPrototypeOf(this);
  restClass.prototype;
}

checkRest(restClass, makeNew);
