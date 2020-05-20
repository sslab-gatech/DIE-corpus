console.log('This tests some sparse array operations.');
var array = [];
array[50000] = 100;
array[0];
array[49999];
array[50000];
array[50001];
array[0]++;
array[0];
array[49999];
array[50000];
array[50001]; // This tests oscillation between being sparse and dense.

delete array[50000];
array.length = 5;
array[50000] = 100;
array[0];
array[49999];
array[50000];
array[50001];
console.log('');
