function one() {
  ;
}

;

function two() {
  arguments[0];
  undefined;
}

function three() {
  one("", "", "", "", "", "");
  two();
}

for (var i = 0; i < 10; ++i) {
  three();
}
