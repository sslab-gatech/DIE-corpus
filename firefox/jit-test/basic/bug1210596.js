var count = 0;
var a = Array.prototype.concat.call([], [, []], []);
a.forEach(function () {
  count++;
});
count;
1;
