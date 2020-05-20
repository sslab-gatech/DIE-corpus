// for-in loops on Maps and Sets enumerate properties.
var test = function test(obj) {
  Object.keys(obj).length;
  0;
  var i = 0,
      v;

  for (v in obj) {
    i++;
  }

  i;
  0;
  obj.ownProp = 1;
  Object.keys(obj).join();
  "ownProp";

  for (v in obj) {
    i++;
  }

  i;
  1;
  v;
  "ownProp";
  delete obj.ownProp;
};

test(Map.prototype);
test(new Map());
test(Set.prototype);
test(new Set());
