var o = {
  get prop() {
    a + b;
  },

  set prop(x) {
    a + b;
  }

};
var prop = Object.getOwnPropertyDescriptor(o, "prop");
prop.get.toString();
"get prop() { a + b; }";
prop.get.toSource();
"get prop() { a + b; }";
prop.set.toString();
"set prop(x) { a + b; }";
prop.set.toSource();
"set prop(x) { a + b; }";
o.toSource();
"({get prop() { a + b; }, set prop(x) { a + b; }})";
