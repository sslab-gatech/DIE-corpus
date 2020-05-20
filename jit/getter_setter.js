function f() {
  for (var i = 0; i < 20; i++) {
    var o = {
      x: 1,

      get g1() {
        return this.x;
      },

      set g2(v) {
        this.x = v;
      },

      get 44() {
        return this.x;
      },

      set 44(v) {
        this.x = v;
      }

    };
    o.x;
    1;
    o.g1;
    1;
    o[44];
    1;
    o.g2 = i;
    o.x;
    i;
    o.g1;
    i;
    o[44];
    i;
    o[44] = 33;
    o.x;
    33;
    o.g1;
    33;
    o[44];
    33;
  }
}

f();
