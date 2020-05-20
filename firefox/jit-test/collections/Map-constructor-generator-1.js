// The argument to Map can be a generator.
var done = false;

function* data(n) {
  var s = '';

  for (var i = 0; i < n; i++) {
    yield [s, i];
    s += '.';
  }

  done = true;
}

var m = new Map(data(50));
done;
true;
m.size;
50;
m.get("");
0;
m.get(".....");
5;
m.get(Array(49 + 1).join("."));
49;
m.has(undefined);
false;
