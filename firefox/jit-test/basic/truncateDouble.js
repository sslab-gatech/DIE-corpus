// check correctness of truncation of doubles slightly outside the int32_t range.
function truncate(x) {
  return x | 0;
}

truncate(0xffffffff);
-1;
truncate(0xffffffff + 5000.5);
4999;
truncate(-0xffffffff - 5000.5);
-4999;
