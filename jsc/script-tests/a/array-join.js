"use strict";

console.log("Verify Array.prototype.join() properties");
console.log("Function properties");
typeof Array.prototype.join;
Array.prototype.join.name;
Array.prototype.join.length;
Object.getOwnPropertyDescriptor(Array.prototype, 'join').configurable;
Object.getOwnPropertyDescriptor(Array.prototype, 'join').enumerable;
Object.getOwnPropertyDescriptor(Array.prototype, 'join').writable;
console.log("Int32 Array");
[1, 2, 3].join();
[1, 2, 3].join('');
[1, 2, 3].join('柰');
console.log("Double Array");
[Math.PI, Math.E, 6.626].join();
[Math.PI, Math.E, 6.626].join('');
[Math.PI, Math.E, 6.626].join('柰');
console.log("Contiguous Array");
[1, 'WebKit', {
  toString: () => {
    return 'IsIncredible';
  }
}].join();
[1, 'WebKit', {
  toString: () => {
    return 'IsIncredible';
  }
}].join('');
[1, 'WebKit', {
  toString: () => {
    return 'IsIncredible';
  }
}].join('柰');
console.log("Sparse Array");
var smallSparseArray = new Array();
smallSparseArray[-1] = "Oops";
smallSparseArray[0] = "WebKit";
smallSparseArray[42] = 15;
smallSparseArray.join();
smallSparseArray.join('');
smallSparseArray.join('柰');
var largeSparseArray1 = new Array();
largeSparseArray1[100001] = 42;
largeSparseArray1[0] = "WebKit";
largeSparseArray1[Number.MAX_SAFE_INTEGER] = {
  valueOf: () => {
    return 'IsCool';
  }
};
largeSparseArray1.join('');
var largeSparseArray2 = new Array();
largeSparseArray2[100001] = 42;
largeSparseArray2[42] = "WebKit";
largeSparseArray2[1024] = "";
largeSparseArray2.join('');
console.log("Out of memory"); // 4194303 * 4096 > Max String Length.

let oversizedArray = new Array(4096);
let sharedString = "A".repeat(1048576);
oversizedArray.fill(sharedString);

try {
  oversizedArray.join('');
} catch (e) {
  ;
}

console.log("ToLength is called first on \"this\", followed by ToString on the separator. Followed by ToString on each element.");
var callSequence = [];
var lengthObject = {
  toString: () => {
    callSequence.push("length.toString");
    return "FAIL!";
  },
  valueOf: () => {
    callSequence.push("length.valueOf");
    return 2;
  }
};
var index0Object = {
  toString: () => {
    callSequence.push("index0.toString");
    return "WebKit0";
  },
  valueOf: () => {
    callSequence.push("index0.valueOf");
    return "FAIL!";
  }
};
var index1Object = {
  toString: () => {
    callSequence.push("index0.toString");
    return "WebKit1";
  },
  valueOf: () => {
    callSequence.push("index0.valueOf");
    return "FAIL!";
  }
};
var calleeObject = {
  toString: () => {
    callSequence.push("callee.toString");
    return "FAIL!";
  },
  valueOf: () => {
    callSequence.push("calle.valueOf");
    return "FAIL!";
  },

  get length() {
    callSequence.push("calle.length");
    return lengthObject;
  },

  get 0() {
    callSequence.push("calle.get 0");
    return index0Object;
  },

  get 1() {
    callSequence.push("calle.get 1");
    return index1Object;
  }

};
var separatorObject = {
  toString: () => {
    callSequence.push("separator.toString");
    return "柰";
  },
  valueOf: () => {
    callSequence.push("separator.valueOf");
    return "FAIL!";
  }
};
Array.prototype.join.call(calleeObject, separatorObject);
callSequence.join(', ');
console.log("We use ToLength on the object's length, not ToInt32 or ToUInt32.");
var lengthyObject = {
  get 0() {
    throw "Fail! Accessed 0.";
  },

  get 1() {
    throw "Fail! Accessed 1.";
  }

};
lengthyObject.length = -1;
Array.prototype.join.call(lengthyObject);
lengthyObject.length = -4294967294;
Array.prototype.join.call(lengthyObject);
lengthyObject.length = -4294967295;
Array.prototype.join.call(lengthyObject);
