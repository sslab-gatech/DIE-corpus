console.log("This test checks that array accessing doesn't do the wrong thing for negative indices");
var a = [];
a[-5] = true;
a.length;
a["-5"]; // Just some bounds paranoia

a = [1, 2, 3, 4];
a[4];
a = [];

for (var i = 0; i > -1000; i--) {
  a[i] = i;
}
