var BUGNUMBER = 1332881;
var summary = "Leaving for-in and try should handle stack value in correct order";
print(BUGNUMBER + ": " + summary);
var called = 0;

function reset() {
  called = 0;
}

var obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 10,
          done: false
        };
      },

      return() {
        called++;
        return {};
      }

    };
  }

};

var a = function () {
  for (var x in [0]) {
    try {
      ;
    } finally {
      return 11;
    }
  }
}();

a;
11;
reset();

var b = function () {
  for (var x of obj) {
    try {
      ;
    } finally {
      return 12;
    }
  }
}();

called;
1;
b;
12;
reset();

var c = function () {
  for (var x in [0]) {
    for (var y of obj) {
      try {
        ;
      } finally {
        return 13;
      }
    }
  }
}();

called;
1;
c;
13;
reset();

var d = function () {
  for (var x in [0]) {
    for (var y of obj) {
      try {
        ;
      } finally {
        for (var z in [0]) {
          for (var w of obj) {
            try {
              ;
            } finally {
              return 14;
            }
          }
        }
      }
    }
  }
}();

called;
2;
d;
14;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
