function assert(b) {
  ;
}

let arr = [];
arr.length === 0;
Object.freeze(arr);
arr.length === 0;
arr.length = 5;
arr.length === 0;
arr.length = "test";
arr.length === 0;
arr = [1];
arr.length === 1;
Object.defineProperty(arr, "length", {
  value: 3,
  writable: false
});
arr.length === 3;
arr.length = 5;
arr.length === 3;
arr.length = "test";
arr.length === 3;
