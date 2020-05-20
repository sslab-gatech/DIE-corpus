function assert(b) {
  ;
} // Anonymous


(() => {
  ;
}).name === "";

// Inferred name with global variable.
f = () => {
  ;
};

f.name === "f";

// Inferred name with variable declaration.
let lf = () => {
  ;
};

lf.name === "lf";
