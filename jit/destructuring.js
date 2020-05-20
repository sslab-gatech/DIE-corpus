//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  // Single assignments & undefined
  {
    let a1;
    [a1] = [1];
    let [a2] = [1];
    console.log(a1, a2);
    console.log(a1, 1);
    console.log(a2, 1);
  }
  {
    let a1;
    [a1] = [];
    let [a2] = [];
    console.log(a1, a2);
    console.log(a1, undefined);
    console.log(a2, undefined);
    let a3;
    [a3] = [, 1];
    let [a4] = [, 1];
    console.log(a3, a4);
    console.log(a3, undefined);
    console.log(a4, undefined);
  } // Multiple assignments

  {
    let a1, b1, c1, d1, e1;
    [a1, b1, c1, d1, e1] = [1, 2, 3, 4, 5];
    let [a2, b2, c2, d2, e2] = [1, 2, 3, 4, 5];
    console.log([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2]);
    console.log([1, 2, 3, 4, 5], [a1, b1, c1, d1, e1]);
    console.log([1, 2, 3, 4, 5], [a2, b2, c2, d2, e2]);
  }
  {
    let a1, b1, c1, d1, e1;
    [a1, b1, c1, d1, e1] = [1, 2, 3];
    let [a2, b2, c2, d2, e2] = [1, 2, 3];
    console.log([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2]);
    console.log([1, 2, 3, undefined, undefined], [a1, b1, c1, d1, e1]);
    console.log([1, 2, 3, undefined, undefined], [a2, b2, c2, d2, e2]);
  }
  {
    let a1, b1, c1, d1, e1;
    [a1, b1, c1, d1, e1] = [1,, 3,, 5];
    let [a2, b2, c2, d2, e2] = [1,, 3,, 5];
    console.log([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2]);
    console.log([1, undefined, 3, undefined, 5], [a1, b1, c1, d1, e1]);
    console.log([1, undefined, 3, undefined, 5], [a2, b2, c2, d2, e2]);
  } // Rest

  {
    let rest1;
    [...rest1] = [1, 2, 3, 4, 5];
    let [...rest2] = [1, 2, 3, 4, 5];
    console.log(rest1, rest2);
    console.log([1, 2, 3, 4, 5], rest1);
    console.log([1, 2, 3, 4, 5], rest2);
  }
  {
    let a1, b1, c1, d1, e1;
    [a1, b1, c1, ...rest1] = [1, 2, 3, 4, 5];
    let [a2, b2, c2, ...rest2] = [1, 2, 3, 4, 5];
    console.log([a1, b1, c1, rest1], [a2, b2, c2, rest2]);
    console.log([1, 2, 3, [4, 5]], [a1, b1, c1, rest1]);
    console.log([1, 2, 3, [4, 5]], [a2, b2, c2, rest2]);
    let a3, b3, c3, d3, e3;
    [a3, b3, c3, ...rest3] = [1, 2, 3];
    let [a4, b4, c4, ...rest4] = [1, 2, 3];
    console.log([a3, b3, c3, rest3], [a4, b4, c4, rest4]);
    console.log([1, 2, 3, []], [a3, b3, c3, rest3]);
    console.log([1, 2, 3, []], [a4, b4, c4, rest4]);
  }
  {
    let a1, b1;
    [[...a1], ...b1] = [[1, 2, 3, 4], 5, 6, 7, 8];
    let [[...a2], ...b2] = [[1, 2, 3, 4], 5, 6, 7, 8];
    console.log([a1, b1], [a2, b2]);
    console.log([a1, b1], [[1, 2, 3, 4], [5, 6, 7, 8]]);
    console.log([a2, b2], [[1, 2, 3, 4], [5, 6, 7, 8]]);
  } // Default values

  {
    let a1, b1, c1, d1, e1;
    [a1 = 1, b1 = 2, c1 = 3, d1 = 4, e1 = 5] = [];
    let [a2 = 1, b2 = 2, c2 = 3, d2 = 4, e2 = 5] = [];
    console.log([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2]);
    console.log([1, 2, 3, 4, 5], [a1, b1, c1, d1, e1]);
    console.log([1, 2, 3, 4, 5], [a2, b2, c2, d2, e2]);
  }
  {
    let a1, b1, c1, d1, e1;
    [a1 = 1, b1 = 2, c1 = 3, d1 = 4, e1 = 5] = [5,, 3, 2];
    let [a2 = 1, b2 = 2, c2 = 3, d2 = 4, e2 = 5] = [5,, 3, 2];
    console.log([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2]);
    console.log([5, 2, 3, 2, 5], [a1, b1, c1, d1, e1]);
    console.log([5, 2, 3, 2, 5], [a2, b2, c2, d2, e2]);
  } // Identifier references

  {
    let a = {};
    [a.x] = [10];
    console.log(10, a.x);
    [a["x"]] = [20];
    console.log(20, a["x"]);
    var obj = {
      x: 10
    };

    function foo() {
      return obj;
    }

    ;
    [foo().x] = [20];
    console.log(20, foo().x);
    [foo()["x"]] = [30];
    console.log(30, foo()["x"]);
    [...foo().x] = [20];
    console.log([20], foo().x);
    [...foo()["x"]] = [30];
    console.log([30], foo()["x"]);

    class base {
      methodProp() {
        return {};
      }

      methodIndex() {
        return {};
      }

      methodRestProp() {
        return {};
      }

      methodRestIndex() {
        return {};
      }

      get x() {
        return this._x;
      }

      set x(v) {
        this._x = v;
      }

    }

    ;

    class extended extends base {
      methodProp() {
        return [super.x] = [10, 20, 30];
      }

      methodIndex() {
        return [super["x"]] = [40, 50, 60];
      }

      methodRestProp() {
        return [...super.x] = [10, 20, 30];
      }

      methodRestIndex() {
        return [...super.x] = [40, 50, 60];
      }

      getValue() {
        return super.x;
      }

    }

    ;
    let c = new extended();
    console.log(undefined, c.getValue());
    c.methodProp();
    console.log(10, c.getValue());
    c.methodIndex();
    console.log(40, c.getValue());
    c.methodRestProp();
    console.log([10, 20, 30], c.getValue());
    c.methodRestIndex();
    console.log([40, 50, 60], c.getValue());
  } // Nesting

  {
    let a1;
    [[a1]] = [[1]];
    let [[a2]] = [[1]];
    console.log(a1, a2);
    console.log(a1, 1);
    console.log(a2, 1);
  }
  {
    let a1, b1, c1, d1, e1;
    [[a1, b1], c1, [d1, [e1]]] = [[1, 2], 3, [4, [5]]];
    let [[a2, b2], c2, [d2, [e2]]] = [[1, 2], 3, [4, [5]]];
    console.log([a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2]);
    console.log([1, 2, 3, 4, 5], [a1, b1, c1, d1, e1]);
    console.log([1, 2, 3, 4, 5], [a2, b2, c2, d2, e2]);
  }
  {
    let a1;
    [[a1, b1] = [1, 2]] = [];
    let [[a2, b2] = [1, 2]] = [];
    console.log([a1, b1], [a2, b2]);
    console.log([1, 2], [a1, b1]);
    console.log([1, 2], [a2, b2]);
  }
  {
    let a1;
    [[[a1] = [1], [[b1]] = [[2]]] = [, undefined]] = [undefined];
    let [[[a2] = [1], [[b2]] = [[2]]] = [, undefined]] = [undefined];
    console.log([a1, b1], [a2, b2]);
    console.log([1, 2], [a1, b1]);
    console.log([1, 2], [a2, b2]);
  } // Other iterators

  {
    let a1;
    [a1, b1, c1, d1, ...rest1] = "testing";
    let [a2, b2, c2, d2, ...rest2] = "testing";
    console.log([a1, b1, c1, d1, rest1], [a2, b2, c2, d2, rest2]);
    console.log(["t", "e", "s", "t", ["i", "n", "g"]], [a1, b1, c1, d1, rest1]);
    console.log(["t", "e", "s", "t", ["i", "n", "g"]], [a2, b2, c2, d2, rest2]);
  }
  {
    let map = new Map();
    map.set(1, 6);
    map.set(2, 7);
    map.set(3, 8);
    map.set(4, 9);
    map.set(5, 10);
    let a1;
    [a1, b1, c1, d1, ...rest1] = map.entries();
    let [a2, b2, c2, d2, ...rest2] = map.entries();
    console.log([a1, b1, c1, d1, rest1], [a2, b2, c2, d2, rest2]);
    console.log([[1, 6], [2, 7], [3, 8], [4, 9], [[5, 10]]], [a1, b1, c1, d1, rest1]);
    console.log([[1, 6], [2, 7], [3, 8], [4, 9], [[5, 10]]], [a2, b2, c2, d2, rest2]);
  }
  {
    let getIteratorCalledCount = 0;
    let nextCalledCount = 0;
    let doneCalledCount = 0;
    let valueCalledCount = 0;
    let simpleIterator = {
      [Symbol.iterator]: function () {
        ++getIteratorCalledCount;
        return {
          i: 0,
          next: function () {
            ++nextCalledCount;
            var that = this;
            return {
              get done() {
                ++doneCalledCount;
                return that.i == 1;
              },

              get value() {
                ++valueCalledCount;
                return that.i++;
              }

            };
          }
        };
      }
    };
    let [a, b, c] = simpleIterator;
    console.log(1, getIteratorCalledCount);
    console.log(3, nextCalledCount);
    console.log(3, doneCalledCount);
    console.log(1, valueCalledCount);
    [getIteratorCalledCount, nextCalledCount, doneCalledCount, valueCalledCount] = [0, 0, 0, 0];
    let [...rest] = simpleIterator;
    console.log(1, getIteratorCalledCount);
    console.log(2, nextCalledCount);
    console.log(2, doneCalledCount);
    console.log(1, valueCalledCount);
    [getIteratorCalledCount, nextCalledCount, doneCalledCount, valueCalledCount] = [0, 0, 0, 0];
    [a, b, c, ...rest] = simpleIterator;
    console.log(1, getIteratorCalledCount);
    console.log(4, nextCalledCount);
    console.log(4, doneCalledCount);
    console.log(1, valueCalledCount);
  } // Array destructuring in various contexts

  {
    let a, b, c;

    function foo(x = [a, b = 2, ...c] = [1,, 3, 4, 5, 6, 7]) {
      console.log([1, 2, [3, 4, 5, 6, 7]], [a, b, c]);
      console.log([1,, 3, 4, 5, 6, 7], x);
    }

    foo();
    `${[a = 5, b, ...c] = [, 1, 3, 5, 7, 9]}`;
    console.log([5, 1, [3, 5, 7, 9]], [a, b, c]);

    (() => [a,, b, c] = [1, 2, 3])();

    console.log([1, 3, undefined], [a, b, c]);
  } // nested destructuring

  {
    let [[a] = [1]] = [[2]];
    console.log(a, 2);
    [[a] = [1]] = [[]];
    console.log(a, undefined);
    [[a] = [1]] = [];
    console.log(a, 1);
    [[a] = 1] = [[]];
    console.log(a, undefined);
  } // Bug OSG : 4533495

  {
    function foo() {
      for (var [i, j, k] in {
        qux: 1
      }) {
        return i === "q" && j === "u" && k === "x";
      }
    }

    console.log(foo());
  }
  {
    let obj1 = {};

    obj1[Symbol.iterator] = function () {
      return {
        next: function () {
          ;
        }
      };
    }; // Empty slot should not call next on the iterator.


    var [] = obj1;
  }
  {
    let obj1 = {};

    obj1[Symbol.iterator] = function () {
      return {
        next: function () {
          this.counter++;

          if (this.counter > 1) {
            ;
          }

          return {
            value: undefined,
            done: false
          };
        },
        counter: 0
      };
    }; // Second empty slot should not call next on the iterator.


    var [,] = obj1;
  }
}

test1();
