// Array.prototype.pop does a strict assignment to this.length even if the
// caller is nonstrict. Bug 886087.
// obj.length is read-only
var obj = {
  pop: [].pop,
  0: "zero"
};
Object.defineProperty(obj, "length", {
  configurable: true,
  value: 1,
  writable: false
});


TypeError;
// obj.length has only a getter
obj = {
  pop: [].pop,
  0: "zero",

  get length() {
    return 1;
  }

};


TypeError;
