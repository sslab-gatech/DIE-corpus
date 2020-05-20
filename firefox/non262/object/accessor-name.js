function name(obj, property, get) {
  let desc = Object.getOwnPropertyDescriptor(obj, property);
  return (get ? desc.get : desc.set).name;
}

name({
  get a() {
    ;
  }

}, "a", true);
"get a";
name({
  set a(v) {
    ;
  }

}, "a", false);
"set a";
name({
  get 123() {
    ;
  }

}, "123", true);
"get 123";
name({
  set 123(v) {
    ;
  }

}, "123", false);
"set 123";
name({
  get case() {
    ;
  }

}, "case", true);
"get case";
name({
  set case(v) {
    ;
  }

}, "case", false);
"set case";
name({
  get get() {
    ;
  }

}, "get", true);
"get get";
name({
  set set(v) {
    ;
  }

}, "set", false);
"set set";
let o = {
  get a() {
    ;
  },

  set a(v) {
    ;
  }

};
name(o, "a", true);
"get a";
name(o, "a", false);
"set a";
o = {
  get 123() {
    ;
  },

  set 123(v) {
    ;
  }

};
name(o, "123", true);
"get 123";
name(o, "123", false);
"set 123";
o = {
  get case() {
    ;
  },

  set case(v) {
    ;
  }

};
name(o, "case", true);
"get case";
name(o, "case", false);
"set case";
name({
  get ["a"]() {
    ;
  }

}, "a", true);
"get a";
name({
  get [123]() {
    ;
  }

}, "123", true);
"get 123";
name({
  set ["a"](v) {
    ;
  }

}, "a", false);
"set a";
name({
  set [123](v) {
    ;
  }

}, "123", false);
"set 123";
reportCompare(true, true);
