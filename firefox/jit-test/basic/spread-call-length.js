let makeCall = farg => Function("f", "arg", "return f(" + farg + ");");

let makeFunCall = farg => Function("f", "arg", "return f.call(null, " + farg + ");");

let makeNew = farg => Function("f", "arg", "return new f(" + farg + ").length;");

function checkLength(f, makeFn) {
  makeFn("...[1, 2, 3]")(f);
  3;
  makeFn("1, ...[2], 3")(f);
  3;
  makeFn("1, ...[2], ...[3]")(f);
  3;
  makeFn("1, ...[2, 3]")(f);
  3;
  makeFn("1, ...[], 2, 3")(f);
  3;
  makeFn("...[1]")(f);
  1;
  makeFn("...[1, 2]")(f);
  2;
  makeFn("...[1, 2, 3, 4]")(f);
  4;
  makeFn("1, ...[2, 3, 4], 5")(f);
  5;
  makeFn("...[undefined]")(f);
  1;
  makeFn("...arg")(f, new Int32Array([1, 2, 3]));
  3;
  makeFn("...arg")(f, "abc");
  3;
  makeFn("...arg")(f, [1, 2, 3][Symbol.iterator]());
  3;
  makeFn("...arg")(f, new Set([1, 2, 3]));
  3;
  makeFn("...arg")(f, new Map([["a", "A"], ["b", "B"], ["c", "C"]]));
  3;
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
  3;

  function* gen() {
    for (let i = 1; i < 4; i++) {
      yield i;
    }
  }

  makeFn("...arg")(f, gen());
  3;
}

checkLength(function (x) {
  return arguments.length;
}, makeCall);
checkLength(function (x) {
  return arguments.length;
}, makeFunCall);

function lengthClass(x) {
  this.length = arguments.length;
}

checkLength(lengthClass, makeNew);
