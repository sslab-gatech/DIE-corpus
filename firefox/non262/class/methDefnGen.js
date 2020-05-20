var BUGNUMBER = 924672;
var summary = 'Method Definitions - Generators';
print(BUGNUMBER + ": " + summary); // Function definitions.

function syntaxError(script) {
  try {
    Function(script);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return;
    }
  }

  throw new Error('Expected syntax error: ' + script);
} // Tests begin.


syntaxError("{*a(){}}");
syntaxError("b = {*(){}");
syntaxError("b = {*{}");
syntaxError("b = {*){}");
syntaxError("b = {*({}");
syntaxError("b = {*(){");
syntaxError("b = {*()}");
syntaxError("b = {*a(");
syntaxError("b = {*a)");
syntaxError("b = {*a(}");
syntaxError("b = {*a)}");
syntaxError("b = {*a()");
syntaxError("b = {*a()}");
syntaxError("b = {*a(){}");
syntaxError("b = {*a){}");
syntaxError("b = {*a}}");
syntaxError("b = {*a{}}");
syntaxError("b = {*a({}}");
syntaxError("b = {*a@(){}}");
syntaxError("b = {*@(){}}");
syntaxError("b = {*get a(){}}");
syntaxError("b = {get *a(){}}");
syntaxError("b = {get a*(){}}");
syntaxError("b = {*set a(c){}}");
syntaxError("b = {set *a(c){}}");
syntaxError("b = {set a*(c){}}");
syntaxError("b = {*a : 1}");
syntaxError("b = {a* : 1}");
syntaxError("b = {a :* 1}");
syntaxError("b = {a*(){}}"); // Generator methods.

b = {
  *g() {
    var a = {
      [yield 1]: 2,
      [yield 2]: 3
    };
    return a;
  }

};
var it = b.g();
var next = it.next();
next.done;
false;
next.value;
1;
next = it.next("hello");
next.done;
false;
next.value;
2;
next = it.next("world");
next.done;
true;
next.value.hello;
2;
next.value.world;
3;
b.g.hasOwnProperty("prototype");
true;
// Strict mode
a = {
  *b(c) {
    "use strict";

    yield c;
  }

};
a.b(1).next().value;
1;
a = {
  *["b"](c) {
    "use strict";

    return c;
  }

};
a.b(1).next().value;
1;
// Generators should not have [[Construct]]
a = {
  *g() {
    yield 1;
  }

};

(() => {
  new a.g();
})();

TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "ok");
}
