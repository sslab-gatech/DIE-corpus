try {
  obj[i] = "a";
} catch (e) {
  ;
}

var obj = {
  p: 100
};
var name = "p";
var a = [];

for (var i = 0; i < 10; i++) {
  a[i] = obj[name]--;
}

a.join();
'100,99,98,97,96,95,94,93,92,91';
