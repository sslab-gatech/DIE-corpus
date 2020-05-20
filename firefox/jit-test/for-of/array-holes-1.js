// for-of does not skip Array holes. The value at a hole is undefined.
var a = [0,, 2, 3];
var log = [];

for (var x of a) {
  x;
  a[log.length];
  log.push(x);
}

log[1];
undefined;
log.join();
"0,,2,3";
