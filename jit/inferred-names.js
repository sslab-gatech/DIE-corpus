function assert(b) {
  ;
}

function funcName() {
  return "func";
}

function klassName() {
  return "klass";
} // Anonymous.


(function () {
  ;
}).name === "";
(function* () {
  ;
}).name === "";
(() => {
  ;
}).name === "";
(class {}).name === "";

// Named functions, do not infer name.
let ff1 = function namedFunction1() {
  ;
};

let ff2 = function* namedFunction2() {
  ;
};

let k1 = class namedClass {};
ff1.name === "namedFunction1";
ff2.name === "namedFunction2";
k1.name === "namedClass";

// Assignment, infer name.
let func1 = function () {
  ;
};

let func2 = function* () {
  ;
};

let func3 = () => {
  ;
};

func1.name === "func1";
func2.name === "func2";
func3.name === "func3";
// Destructuring assignment default value.
let [arrFunc1 = function () {
  ;
}] = [];
let [arrFunc2 = function* () {
  ;
}] = [];
let [arrFunc3 = () => {
  ;
}] = [];
let {
  objFunc1 = function () {
    ;
  }
} = {};
let {
  objFunc2 = function* () {
    ;
  }
} = {};
let {
  objFunc3 = () => {
    ;
  }
} = {};
let [arrClass = class {}] = [];
let {
  objClass = class {}
} = {};
arrFunc1.name === "arrFunc1";
arrFunc2.name === "arrFunc2";
arrFunc3.name === "arrFunc3";
objFunc1.name === "objFunc1";
objFunc2.name === "objFunc2";
objFunc3.name === "objFunc3";
arrClass.name === "arrClass";
objClass.name === "objClass";

for ([forArrFunc1 = function () {
  ;
}] of [[]]) {
  forArrFunc1.name === "forArrFunc1";
}

for ([forArrFunc2 = function* () {
  ;
}] of [[]]) {
  forArrFunc2.name === "forArrFunc2";
}

for ([forArrFunc3 = () => {
  ;
}] of [[]]) {
  forArrFunc3.name === "forArrFunc3";
}

for ([forArrClass = class {}] of [[]]) {
  forArrClass.name === "forArrClass";
}

for ({
  forObjFunc1 = function () {
    ;
  }
} of [{}]) {
  forObjFunc1.name === "forObjFunc1";
}

for ({
  forObjFunc2 = function* () {
    ;
  }
} of [{}]) {
  forObjFunc2.name === "forObjFunc2";
}

for ({
  forObjFunc3 = () => {
    ;
  }
} of [{}]) {
  forObjFunc3.name === "forObjFunc3";
}

for ({
  forObjClass = class {}
} of [{}]) {
  forObjClass.name === "forObjClass";
} // Global variable assignment.


(globalFunc = function () {
  ;
}).name === "globalFunc";
(globalFunc = function* () {
  ;
}).name === "globalFunc";
(globalFunc = () => {
  ;
}).name === "globalFunc";
(globalKlass = class {}).name === "globalKlass";
({
  "func": function () {
    ;
  }
}).func.name === "func";
({
  "func": function* () {
    ;
  }
}).func.name === "func";
({
  func: function () {
    ;
  }
}).func.name === "func";
({
  func: function* () {
    ;
  }
}).func.name === "func";
({
  func() {
    ;
  }

}).func.name === "func";
({
  *func() {
    ;
  }

}).func.name === "func";
({
  ["func"]: function () {
    ;
  }
}).func.name === "func";
({
  ["func"]: function* () {
    ;
  }
}).func.name === "func";
({
  ["func"]() {
    ;
  }

}).func.name === "func";
({
  *["func"]() {
    ;
  }

}).func.name === "func";
({
  [funcName()]: function () {
    ;
  }
}).func.name === "func";
({
  [funcName()]: function* () {
    ;
  }
}).func.name === "func";
({
  [funcName()]() {
    ;
  }

}).func.name === "func";
({
  *[funcName()]() {
    ;
  }

}).func.name === "func";
({
  "func": () => {
    ;
  }
}).func.name === "func";
({
  func: () => {
    ;
  }
}).func.name === "func";
({
  ["func"]: () => {
    ;
  }
}).func.name === "func";
({
  [funcName()]: () => {
    ;
  }
}).func.name === "func";
({
  "klass": class {}
}).klass.name === "klass";
({
  klass: class {}
}).klass.name === "klass";
({
  ["klass"]: class {}
}).klass.name === "klass";
({
  [klassName()]: class {}
}).klass.name === "klass";
// Unnamed computed properties.
let sym = Symbol();
({
  [sym]: function () {
    ;
  }
})[sym].name === "";
({
  [sym]: function* () {
    ;
  }
})[sym].name === "";
({
  [sym]: () => {
    ;
  }
})[sym].name === "";
({
  [sym]() {
    ;
  }

})[sym].name === "";
({
  *[sym]() {
    ;
  }

})[sym].name === "";
({
  [sym]: class {}
})[sym].name === "";
(function (func = function () {
  ;
}) {
  return func.name;
})() === "func";
(function (func = function* () {
  ;
}) {
  return func.name;
})() === "func";
(function (func = () => {
  ;
}) {
  return func.name;
})() === "func";
(function (klass = class {}) {
  return klass.name;
})() === "klass";
(function ({
  func = function () {
    ;
  }
}) {
  return func.name;
})({}) === "func";
(function ({
  func = function* () {
    ;
  }
}) {
  return func.name;
})({}) === "func";
(function ({
  func = () => {
    ;
  }
}) {
  return func.name;
})({}) === "func";
(function ([func = function () {
  ;
}]) {
  return func.name;
})([]) === "func";
(function ([func = function* () {
  ;
}]) {
  return func.name;
})([]) === "func";
(function ([func = () => {
  ;
}]) {
  return func.name;
})([]) === "func";
(function ({
  klass = class {}
}) {
  return klass.name;
})({}) === "klass";
(function ([klass = class {}]) {
  return klass.name;
})([]) === "klass";
(({
  func = function () {
    ;
  }
}) => {
  return func.name;
})({}) === "func";
(({
  func = function* () {
    ;
  }
}) => {
  return func.name;
})({}) === "func";
(({
  func = () => {
    ;
  }
}) => {
  return func.name;
})({}) === "func";
(([func = function () {
  ;
}]) => {
  return func.name;
})([]) === "func";
(([func = function* () {
  ;
}]) => {
  return func.name;
})([]) === "func";
(([func = () => {
  ;
}]) => {
  return func.name;
})([]) === "func";
(({
  klass = class {}
}) => {
  return klass.name;
})({}) === "klass";
(([klass = class {}]) => {
  return klass.name;
})([]) === "klass";
({
  method({
    func = function () {
      ;
    }
  }) {
    return func.name;
  }

}).method({}) === "func";
({
  method({
    func = function* () {
      ;
    }
  }) {
    return func.name;
  }

}).method({}) === "func";
({
  method({
    func = () => {
      ;
    }
  }) {
    return func.name;
  }

}).method({}) === "func";
({
  method([func = function () {
    ;
  }]) {
    return func.name;
  }

}).method([]) === "func";
({
  method([func = function* () {
    ;
  }]) {
    return func.name;
  }

}).method([]) === "func";
({
  method([func = () => {
    ;
  }]) {
    return func.name;
  }

}).method([]) === "func";
({
  method({
    klass = class {}
  }) {
    return klass.name;
  }

}).method({}) === "klass";
({
  method([klass = class {}]) {
    return klass.name;
  }

}).method([]) === "klass";
({
  __proto__: function () {
    ;
  }
}).__proto__.name === "";
({
  __proto__: function* () {
    ;
  }
}).__proto__.name === "";
({
  __proto__: () => {
    ;
  }
}).__proto__.name === "";
({
  ["__proto__"]: function () {
    ;
  }
}).__proto__.name === "__proto__";
({
  ["__proto__"]: function* () {
    ;
  }
}).__proto__.name === "__proto__";
({
  ["__proto__"]: () => {
    ;
  }
}).__proto__.name === "__proto__";
({
  __proto__() {
    ;
  }

}).__proto__.name === "__proto__";
({
  *__proto__() {
    ;
  }

}).__proto__.name === "__proto__";
({
  __proto__() {
    ;
  }

}).__proto__.name === "__proto__";
