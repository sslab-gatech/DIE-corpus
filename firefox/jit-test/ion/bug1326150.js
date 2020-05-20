this.x = [];
Function.apply(null, this.x);
Object.defineProperty(this, "x", {
  get: valueOf
});
evaluate("this.x;");
this;
