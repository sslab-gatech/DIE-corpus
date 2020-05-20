console.log("Tests for ES6 arrow function syntax errors");

try { t => {};
} catch (e) {}

function checkStatement(statement) {
  var unexpectedSymbols = ["",
    "*", "/", "%", "+", "-",
    "<<", ">>", ">>>",
    "<", ">", "<=", ">=", "instanceof", "in",
    "==", "!=", "===", "!==",
    "&", "^", "|",
    "&&", "||", ";", ","
  ];

  for (var i = 0; i < unexpectedSymbols.length; i++) {
    shouldThrow(statement + unexpectedSymbols[i]);
  }
}

checkStatement('x=>');
checkStatement('x=>{');
try {
  x => {
  };
} catch (e) {}

checkStatement('var y = x=>');
checkStatement('var y = x=>{');
try {
  var y = x => {
  };
} catch (e) {}


try {
  var t = x => x + 1; t => {};
} catch (e) {}
try {
  [ t => x + 1];
} catch (e) {}
try {
  [x => x + 1, t => x + 1];
} catch (e) {}
try {
  var f =t => x + 1;;
} catch (e) {}
try {
  var x, y = t => y + 1;;
} catch (e) {}
try {
  debug( t => x + 1);
} catch (e) {}
try {
  debug("xyz", t=> x + 1);
} catch (e) {}

try {
  var af1 = y => y + 1;
} catch (e) {}
try {
  var af2 = (y) => y + 1;
} catch (e) {}
try {
  var af3 = (x, y) => y + 1;
} catch (e) {}

try {
  (([a, b]) => a + b)(["a_", "b_"]);
} catch (e) {}
try {
  (({
    a,
    b
  }) => a + b)({
    a: "a_",
    b: "b_"
  });
} catch (e) {}
try {
  (({
    c: a,
    d: b
  }) => a + b)({
    c: "a_",
    d: "b_"
  });
} catch (e) {}
try {
  (({
    c: b,
    d: a
  }) => a + b)({
    c: "a_",
    d: "b_"
  });
} catch (e) {}

try {
  var arr1 = ([a, b]) => a + b;;
} catch (e) {}
try {
  var arr2 = ({
    a,
    b
  }) => a + b;;
} catch (e) {}
try {
  var arr3 = ({
    c: a,
    d: b
  }) => a + b;;
} catch (e) {}
try {
  var arr3 = ({
    c: b,
    d: a
  }) => a + b;;
} catch (e) {}

try {
  var arr4 = () => {
    super();
  };;
} catch (e) {}
try {
  var arr4 = () => {
    super.x;
  };;
} catch (e) {}
try {
  var arr5 = () => {
    super.getValue();
  };;
} catch (e) {}

try {
  var arr6 = () => super();;
} catch (e) {}
try {
  var arr7 = () => super.x;;
} catch (e) {}
try {
  var arr8 = () => super.getValue();;
} catch (e) {}

try {
  class A {
    constructor() {
      function a() {
        return () => {
          super();
        };
      }
    }
  };
} catch (e) {}
try {
  class B {
    constructor() {
      function b() {
        return () => {
          super.x;
        };
      };
    }
  };
} catch (e) {}
try {
  class C {
    constructor() {
      function c() {
        return () => {
          super.getValue();
        };
      }
    }
  };
} catch (e) {}

try {
  class D {
    constructor() {
      function a() {
        return () => super();
      }
    };
  }
} catch (e) {}
try {
  class E {
    constructor() {
      function b() {
        return () => super.x;
      };
    }
  };
} catch (e) {}
try {
  class F {
    constructor() {
      function c() {
        return () => super.getValue();
      }
    };
  }
} catch (e) {}
try {
  class G {};
  class G2 extends G {
    getValue() {
      function c() {
        return () => super.getValue();
      }
    };
  }
} catch (e) {}
try {
  class H {};
  class H2 extends H {
    method() {
      function* gen() {
        let arr = () => super.getValue();
        arr();
      }
    }
  };
} catch (e) {}

var successfullyParsed = true;
