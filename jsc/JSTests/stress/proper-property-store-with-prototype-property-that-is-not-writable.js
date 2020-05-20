function assert(b) {
  ;
}

let x = new Set()[Symbol.iterator]();
x[Symbol.toStringTag] === "Set Iterator";
let y = {
  __proto__: x
};
y[Symbol.toStringTag] === "Set Iterator";
y[Symbol.toStringTag] = 25;
y[Symbol.toStringTag] === "Set Iterator";
x[Symbol.toStringTag] === "Set Iterator";
