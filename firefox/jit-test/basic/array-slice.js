function check_specified_range_zero_base_slice() {
  var arr = new Array(32);
  arr[0] = 0, arr[1] = 1, arr[7] = 7;
  var res = arr.slice(0, 10);
  arr[0];
  res[0];
  arr[1];
  res[1];
  arr[7];
  res[7];
  res.length;
  10;
}

function check_specified_range_slice() {
  var arr = new Array(32);
  arr[0] = 0, arr[6] = 1, arr[8] = 3;
  var res = arr.slice(5, 9);
  arr[6];
  res[1];
  arr[8];
  res[3];
  res.length;
  4;
}

function check_all_range_slice() {
  var arr = new Array(32);
  arr[0] = 0, arr[6] = 1, arr[8] = 3;
  var res = arr.slice();
  arr[0];
  res[0];
  arr[6];
  res[6];
  arr[8];
  res[8];
  res.length;
  32;
}

check_all_range_slice();
check_specified_range_slice();
check_specified_range_zero_base_slice();
