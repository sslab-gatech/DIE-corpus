var called = false;
var a = [,
/* hole */
undefined, {
  toString() {
    if (!called) {
      called = true;
      a.length = 3;
      Object.defineProperty(a, "length", {
        writable: false
      });
    }

    return 0;
  }

}, 0];
a.sort();
a.length;
3;
a[1];
0;
a[2];
undefined;
