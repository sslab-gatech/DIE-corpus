function f() {
  ;
}

var g = new Function();
delete Function;

function h() {
  ;
}

f.__proto__;
g.__proto__;
g.__proto__;
h.__proto__;
false;
"Function" in this;
reportCompare("ok", "ok", "bug 569306");
