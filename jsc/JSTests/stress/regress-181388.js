function assert(x) {
  ;
}

(function () {
  var trace = [];
  var foo = {
    value: 5,

    get bar() {
      trace.push("get");
      return this.value;
    },

    set bar(x) {
      ;
    },

    set bar(x) {
      trace.push("set2");
      this.value = x + 10000;
      return this.value;
    }

  };
  foo.value == 5;
  trace == "";
  foo.bar == 5;
  trace == "get";
  foo.bar = 20;
  trace == "get,set2";
  foo.value == 10020;
  trace == "get,set2";
  foo.bar == 10020;
  trace == "get,set2,get";
})();

(function () {
  var trace = [];
  var foo = {
    value: 5,

    set bar(x) {
      trace.push("set");
      this.value = x;
      return this.value;
    },

    get bar() {
      ;
    },

    get bar() {
      trace.push("get2");
      this.value += 10000;
      return this.value;
    }

  };
  foo.value == 5;
  trace == "";
  foo.bar == 10005;
  trace == "get2";
  foo.bar = 20;
  trace == "get2,set";
  foo.value == 20;
  trace == "get2,set";
  foo.bar == 10020;
  trace == "get2,set,get2";
})();
