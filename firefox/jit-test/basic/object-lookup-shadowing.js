var x = {
  get prop() {
    return 2;
  },

  set prop(v) {
    ;
  }

};
var y = {
  __proto__: x,
  prop: 1
};

y.__lookupGetter__("prop");

undefined;

y.__lookupSetter__("prop");

undefined;
