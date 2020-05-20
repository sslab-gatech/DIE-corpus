var obj = {
  method() {
    ;
  }

};

(() => {
  new obj.method();
})();

TypeError;
obj = {
  constructor() {
    ;
  }

};

(() => {
  new obj.constructor();
})();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
