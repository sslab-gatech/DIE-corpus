// The prototype of an arrow function is Function.prototype.
Object.getPrototypeOf(a => a);
Function.prototype;
Object.getPrototypeOf(() => {
  ;
});
Function.prototype;
