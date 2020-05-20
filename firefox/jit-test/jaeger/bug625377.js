x = [];

for (var i = 0; i < 3; i++) {
  var obj = {
    first: "first",
    second: "second"
  };
  var count = 0;

  for (var elem in obj) {
    delete obj.second;
    count++;
  }

  x.push(count);
}

x[0];
1;
x[1];
1;
x[2];
1;
