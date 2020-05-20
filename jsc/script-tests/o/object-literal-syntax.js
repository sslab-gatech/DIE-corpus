console.log("Make sure that we correctly identify parse errors in object literals");

try {
  ({
    a: 1,

    get a() {
      ;
    }

  });
} catch (e) {
  ;
}

try {
  ({
    a: 1,

    set a(x) {
      ;
    }

  });
} catch (e) {
  ;
}

try {
  ({
    get a() {
      ;
    },

    a: 1
  });
} catch (e) {
  ;
}

try {
  ({
    set a(x) {
      ;
    },

    a: 1
  });
} catch (e) {
  ;
}

try {
  ({
    get a() {
      ;
    },

    get a() {
      ;
    }

  });
} catch (e) {
  ;
}

try {
  ({
    set a(x) {
      ;
    },

    set a(x) {
      ;
    }

  });
} catch (e) {
  ;
}

try {
  ({
    set a(x) {
      ;
    },

    get a() {
      ;
    },

    set a(x) {
      ;
    }

  });
} catch (e) {
  ;
}

try {
  (function () {
    ({
      a: 1,

      get a() {
        ;
      }

    });
  });
} catch (e) {
  ;
}

try {
  (function () {
    ({
      a: 1,

      set a(x) {
        ;
      }

    });
  });
} catch (e) {
  ;
}

try {
  (function () {
    ({
      get a() {
        ;
      },

      a: 1
    });
  });
} catch (e) {
  ;
}

try {
  (function () {
    ({
      set a(x) {
        ;
      },

      a: 1
    });
  });
} catch (e) {
  ;
}

try {
  (function () {
    ({
      get a() {
        ;
      },

      get a() {
        ;
      }

    });
  });
} catch (e) {
  ;
}

try {
  (function () {
    ({
      set a(x) {
        ;
      },

      set a(x) {
        ;
      }

    });
  });
} catch (e) {
  ;
}

try {
  (function () {
    ({
      set a(x) {
        ;
      },

      get a() {
        ;
      },

      set a(x) {
        ;
      }

    });
  });
} catch (e) {
  ;
}

({
  a: 1,
  a: 1,
  a: 1
}), true;
({
  get a() {
    ;
  },

  set a(x) {
    ;
  }

}), true;
({
  set a(x) {
    ;
  },

  get a() {
    ;
  }

}), true;
(function () {
  ({
    a: 1,
    a: 1,
    a: 1
  });
}), true;
(function () {
  ({
    get a() {
      ;
    },

    set a(x) {
      ;
    }

  });
}), true;
(function () {
  ({
    set a(x) {
      ;
    },

    get a() {
      ;
    }

  });
}), true;

try {
  ({
    get a() {
      ;
    }

  });
} catch (e) {
  ;
}

try {
  ({
    set a(x) {
      ;
    }

  });
} catch (e) {
  ;
}

try {
  ({
    set a([x, y]) {
      ;
    }

  });
} catch (e) {
  ;
}

try {
  ({
    set a({
      x,
      y
    }) {
      ;
    }

  });
} catch (e) {
  ;
} // try { ({get a(x){}}); } catch(e) {}
// try { ({b:1, get a(x){}}); } catch(e) {}
// try { ({get a([x]){}}); } catch(e) {}
// try { ({get a({x}){}}); } catch(e) {}
// try { ({set a(){}}); } catch(e) {}
// try { ({b:1, set a(){}}); } catch(e) {}
// try { ({set a(){}}); } catch(e) {}
// try { ({set a(x{}}); } catch(e) {}
// try { ({set a({}}); } catch(e) {}
// try { ({set a((x)){}}); } catch(e) {}
// try { ({set a(x, y){}}); } catch(e) {}
// try { ({set a([x], y){}}); } catch(e) {}
// try { ({set a({x}, y){}}); } catch(e) {}
