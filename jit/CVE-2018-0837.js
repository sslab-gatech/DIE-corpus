function opt(arr) {
  arr[0] = 1.1;
  this[0] = {};
  arr[0] = 2.3023e-320;
}

function main() {
  let arr = [1.1];

  for (let i = 0; i < 10000; i++) {
    opt.call({}, arr);
  }

  opt.call(arr, arr);
  print(arr);
}

main();
