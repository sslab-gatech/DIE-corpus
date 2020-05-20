/*
 * Most of these test cases are adapted from:
 * http://johnjbarton.github.com/nonymous/index.html
 */
function assertName(fn, name) {
  displayName(fn);
  name;
}
/* simple names */


var a = function b() {
  ;
};

function c() {
  ;
}

;
a;
'b';
c();
'c';

var a = function () {
  ;
},
    b = function () {
  ;
};

a;
'a';
b();
'b';

/* nested names */
var main = function () {
  function Foo(a) {
    a;
    'main/foo<';
  }

  var foo = new Foo(function () {
    ;
  });
};

main;
'main';
main();
/* duplicated */

var Baz = Bar = function () {
  ;
};

Baz;
'Bar';
Bar;
'Bar';

/* returned from an immediate function */
var Foo = function () {
  arguments.callee;
  'Foo<';
  return function () {
    ;
  };
}();

Foo();
'Foo</<';

/* various properties and such */
var x = {
  fox: {
    bax: function () {
      ;
    }
  }
};
x.fox.bax;
'bax';
var foo = {
  foo: {
    foo: {}
  }
};

foo.foo.foo = function () {
  ;
};

foo.foo.foo;
'foo.foo.foo';
var z = {
  foz: function () {
    var baz = function () {
      var y = {
        bay: function () {
          ;
        }
      };
      y.bay;
      'bay';
    };

    baz;
    'baz';
    baz();
  }
};
z.foz;
'foz';
z.foz();

var outer = function () {
  x.fox.bax.nx = function () {
    ;
  };

  var w = {
    fow: {
      baw: function () {
        ;
      }
    }
  };
  x.fox.bax.nx;
  'outer/x.fox.bax.nx';
  w.fow.baw;
  'baw';
};

outer;
'outer';
outer();

function Fuz() {
  ;
}

;
Fuz.prototype = {
  add: function () {
    ;
  }
};
Fuz.prototype.add;
'add';
var x = 1;

x = function () {
  ;
};

x;
'x';
var a = {
  b: {}
};

a.b.c = function () {
  arguments.callee;
  'a.b.c<';
}();

a.b = function () {
  function foo(f) {
    f();
    'a.b/<';
  }

  ;
  return foo(function () {
    ;
  });
};

a.b();
var bar = 'bar';

a.b[bar] = function () {
  ;
};

a.b.bar;
'a.b[bar]';

a.b = function () {
  arguments.callee;
  'a.b<';
  return {
    a: function () {
      ;
    }
  };
}();

a.b.a;
'a';
a = {
  b: function (a) {
    if (a) {
      return function () {
        ;
      };
    } else {
      return function () {
        ;
      };
    }
  }
};
a.b;
'b';
a.b(true);
'b/<';
a.b(false);
'b/<';

function f(g) {
  g();
  'x<';
  return g();
}

var x = f(function () {
  return function () {
    ;
  };
});
x;
'x</<';
var a = {
  'b': function () {
    ;
  }
};
a.b;
'b';

function g(f) {
  f();
  '';
}

label: g(function () {
  ;
});

var z = [function () {
  ;
}];
z[0];
'z<';

/* fuzz bug from 785089 */
odeURIL: (function () {
  ;
});

a = {
  1: function () {
    ;
  }
};
a[1];
'1';
a = {
  "embedded spaces": function () {
    ;
  },
  "dots.look.like.property.references": function () {
    ;
  },
  "\"\'quotes\'\"": function () {
    ;
  },
  "!@#$%": function () {
    ;
  }
};
a["embedded spaces"];
'embedded spaces';
a["dots.look.like.property.references"];
'dots.look.like.property.references';
a["\"\'quotes\'\""];
'"\'quotes\'"';
a["!@#$%"];
'!@#$%';
a.b = {};
a.b.c = {};
a.b["c"]["d e"] = {
  f: {
    1: {
      "g": {
        "h i": function () {
          ;
        }
      }
    }
  }
};
a.b.c["d e"].f[1].g["h i"];
'h i';

this.m = function () {
  ;
};

m;
"this.m";

function N() {
  this.o = function () {
    ;
  };
}

let n = new N();
n.o;
"N/this.o";
