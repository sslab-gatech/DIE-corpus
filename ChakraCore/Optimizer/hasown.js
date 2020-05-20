//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function Obj1() {
  this[4] = 2;
  this.y = 2;
  this.w = 5;
}

Obj1.prototype.x = 3;

function Obj2() {
  this[5] = 2;
  this.y = 2;
  this.x = 1;
}

Obj2.prototype.x = 3;
Obj2.prototype.z = 4;

function hasOwnUnchanged(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
    } else {
      result += `not: ${prop}, `;
    }
  }

  return result;
}

console.log("hasOwnUnchanged:");
console.log(hasOwnUnchanged(new Obj1()));
console.log(hasOwnUnchanged(new Obj2()));
console.log(hasOwnUnchanged(new Obj1()));
console.log(hasOwnUnchanged(new Obj2()));

function hasOwnDifferentObj(obj1, obj2) {
  let result = "";

  for (let prop in obj1) {
    if (obj2.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
    } else {
      result += `not: ${prop}, `;
    }
  }

  return result;
}

console.log("hasOwnDifferentObj:");
console.log(hasOwnDifferentObj(new Obj2(), new Obj1()));
console.log(hasOwnDifferentObj(new Obj1(), new Obj2()));
console.log(hasOwnDifferentObj(new Obj1(), new Obj1()));
console.log(hasOwnDifferentObj(new Obj2(), new Obj2()));
console.log(hasOwnDifferentObj(new Obj1(), new Obj2()));
console.log(hasOwnDifferentObj(new Obj2(), new Obj1()));

function hasOwnModifyLate(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
    } else {
      result += `not: ${prop}, `;
    }

    obj.x = 1;
  }

  return result;
}

console.log("hasOwnModifyLate:");
console.log(hasOwnModifyLate(new Obj1()));
console.log(hasOwnModifyLate(new Obj2()));
console.log(hasOwnModifyLate(new Obj1()));
console.log(hasOwnModifyLate(new Obj2()));

function hasOwnModifyEarly(obj) {
  let result = "";

  for (let prop in obj) {
    obj.x = 1;

    if (obj.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
    } else {
      result += `not: ${prop}, `;
    }
  }

  return result;
}

console.log("hasOwnModifyEarly:");
console.log(hasOwnModifyEarly(new Obj1()));
console.log(hasOwnModifyEarly(new Obj2()));
console.log(hasOwnModifyEarly(new Obj1()));
console.log(hasOwnModifyEarly(new Obj2()));

function hasOwnDelete(obj) {
  let result = "";

  for (let prop in obj) {
    delete obj.x;

    if (obj.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
    } else {
      result += `not: ${prop}, `;
    }
  }

  return result;
}

console.log("hasOwnDelete:");
console.log(hasOwnDelete(new Obj1()));
console.log(hasOwnDelete(new Obj2()));
console.log(hasOwnDelete(new Obj1()));
console.log(hasOwnDelete(new Obj2()));

function hasOwnDeleteLate(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
    } else {
      result += `not: ${prop}, `;
    }

    delete obj.x;
  }

  return result;
}

console.log("hasOwnDeleteLate:");
console.log(hasOwnDeleteLate(new Obj1()));
console.log(hasOwnDeleteLate(new Obj2()));
console.log(hasOwnDeleteLate(new Obj1()));
console.log(hasOwnDeleteLate(new Obj2()));

function hasOwnModifyOther(obj1, obj2) {
  let result = "";

  for (let prop in obj1) {
    if (obj1.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
    } else {
      result += `not: ${prop}, `;
    }

    obj2.x = "123";
  }

  return result;
}

console.log("hasOwnModifyOther:");
console.log(hasOwnModifyOther(new Obj1(), new Obj1()));
console.log(hasOwnModifyOther(new Obj2(), new Obj2()));
console.log(hasOwnModifyOther(new Obj1(), new Obj1()));
console.log(hasOwnModifyOther(new Obj2(), new Obj2()));
console.log(hasOwnModifyOther(new Obj1(), new Obj2()));
console.log(hasOwnModifyOther(new Obj2(), new Obj1()));
Obj2.prototype["1"] = {
  enumerable: true
};

function hasOwnNumeric(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
      obj["1"] = {
        enumerable: true
      };
    } else {
      result += `not: ${prop}, `;
    }
  }

  return result;
}

console.log("hasOwnNumeric:");
console.log(hasOwnNumeric(new Obj1()));
console.log(hasOwnNumeric(new Obj2()));
console.log(hasOwnNumeric(new Obj1()));
console.log(hasOwnNumeric(new Obj2()));
console.log("hasOwnUnchangedWithNumeric:");
console.log(hasOwnUnchanged(new Obj1()));
console.log(hasOwnUnchanged(new Obj2()));

function hasOwnNumeric2(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
      delete Obj2.prototype["1"];
    } else {
      result += `not: ${prop}, `;
    }
  }

  return result;
}

console.log("hasOwnNumeric2:");
console.log(hasOwnNumeric2(new Obj1()));
Obj2.prototype["1"] = {
  enumerable: true
};
console.log(hasOwnNumeric2(new Obj2()));
Obj2.prototype["1"] = {
  enumerable: true
};
console.log(hasOwnNumeric2(new Obj1()));
Obj2.prototype["1"] = {
  enumerable: true
};
console.log(hasOwnNumeric2(new Obj2()));

function hasOwnNumeric3(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `own: ${prop}, `;
      obj[7] = 1;
    } else {
      result += `not: ${prop}, `;
    }
  }

  return result;
}

Obj2.prototype[7] = 2;
console.log("hasOwnNumeric3:");
console.log(hasOwnNumeric3(new Obj1()));
console.log(hasOwnNumeric3(new Obj2()));
console.log(hasOwnNumeric3(new Obj1()));
console.log(hasOwnNumeric3(new Obj1()));
console.log(hasOwnNumeric3(new Obj2()));
console.log(hasOwnNumeric3(new Obj2()));
