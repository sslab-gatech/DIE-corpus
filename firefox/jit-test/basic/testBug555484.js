var result = "";
o = {
  valueOf: function () {
    throw "cow";
  }
};

try {
  String.fromCharCode(o);
} catch (e) {
  result = e.toString();
}

result;
"cow";
