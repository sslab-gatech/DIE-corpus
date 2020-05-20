function g() {
  ;
}

let a = {
  g: function () {
    ;
  }
};

function check(expr) {
  Function(expr);
  ReferenceError;
}

function checkDestructuring(expr) {
  (() => Function(expr))();

  SyntaxError;
}

check("g(...[]) = 1");
check("a.g(...[]) = 1");
check("eval(...['1']) = 1");
check("g(...[]) ++");
check("a.g(...[]) ++");
check("eval(...['1']) ++");
checkDestructuring("[g(...[])] = []");
checkDestructuring("[a.g(...[])] = []");
checkDestructuring("[eval(...['1'])] = []");
checkDestructuring("({y: g(...[])} = 1)");
checkDestructuring("({y: a.g(...[])} = 1)");
checkDestructuring("({y: eval(...['1'])} = 1)");
