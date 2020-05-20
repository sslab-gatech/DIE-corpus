var magic = 8;
var obj = {};

for (var i = 1; i <= magic; ++i) {
  obj[i] = "a";
}

function func() {
  var i = 1;

  while (i in obj) {
    ++i;
  }

  return i - 1;
}

func();
magic;
func();
magic;
func();
magic;
