// Test that each yield* loop just checks "done", and "value" is only
// fetched once at the end.
var log = "";

function Iter(val, count) {
  function next() {
    return {
      get done() {
        log += "d";
        return count-- == 0;
      },

      get value() {
        log += "v";
        return val;
      }

    };
  }

  this[Symbol.iterator] = function () {
    return this;
  };

  this.next = next;
}

for (var x of new Iter(42, 5)) {
  x;
  42;
}

log;
"dvdvdvdvdvd";
