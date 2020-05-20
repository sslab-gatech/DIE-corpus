let g = newGlobal();
let error = g.eval("Error()"); // This should not throw.

typeof error.stack;
"string";
g.error = Error(); // Nor should this.

g.eval("typeof error.stack");
"string";
