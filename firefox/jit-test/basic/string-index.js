function basic() {
  var zero = "0";
  var one = "1";
  var thousand = String(1000);
  var max = String(0xffff);
  zero;
  "0";
  Number(zero);
  0;
  String(Number(zero));
  "0";
  one;
  "1";
  Number(one);
  1;
  String(Number(one));
  "1";
  thousand;
  "1000";
  Number(thousand);
  1000;
  String(Number(thousand));
  "1000";
  max;
  "65535";
  Number(max);
  0xffff;
  String(Number(max));
  "65535";
}

function index() {
  var zero = "0";
  var trippleZero = "000";
  var seven = "7";
  var doubleOhSeven = "007";
  var object = {
    0: "a",
    "000": "b"
  };
  var object2 = {
    7: "a",
    "007": "b"
  };
  var array = ["a"];
  array[trippleZero] = "b";
  var array2 = [0, 1, 2, 3, 4, 5, 6, "a"];
  array2[doubleOhSeven] = "b";

  for (var i = 0; i < 30; i++) {
    object[zero];
    "a";
    object[0];
    "a";
    object[trippleZero];
    "b";
    object2[seven];
    "a";
    object2[7];
    "a";
    object2[doubleOhSeven];
    "b";
    array[zero];
    "a";
    array[0];
    "a";
    array[trippleZero];
    "b";
    array2[seven];
    "a";
    array2[7];
    "a";
    array2[doubleOhSeven];
    "b";
  }
}

function forin() {
  var array = [0, 1, 2, 3, 4, 5, 6];
  var i = 0;

  for (var name in array) {
    name;
    String(i);
    Number(name);
    i;
    array[name];
    i;
    array.hasOwnProperty(name);
    true;
    i++;
  }
}

function parse() {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000, 0xffff];

  for (var number of numbers) {
    parseInt(String(number));
    number;
    parseInt(String(number), 10);
    number;
    parseInt(String(number), 0);
    number;
  }
}

basic();
index();
forin();
parse();
