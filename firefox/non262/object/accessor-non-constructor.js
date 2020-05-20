var obj = {
  get a() {
    return 1;
  }

};

(() => {
  new Object.getOwnPropertyDescriptor(obj, "a").get;
})();

TypeError;
obj = {
  set a(b) {
    ;
  }

};

(() => {
  new Object.getOwnPropertyDescriptor(obj, "a").set;
})();

TypeError;
obj = {
  get a() {
    return 1;
  },

  set a(b) {
    ;
  }

};

(() => {
  new Object.getOwnPropertyDescriptor(obj, "a").get;
})();

TypeError;

(() => {
  new Object.getOwnPropertyDescriptor(obj, "a").set;
})();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
