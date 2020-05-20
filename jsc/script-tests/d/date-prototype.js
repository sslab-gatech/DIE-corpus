console.log("Check the Date's prototype properties."); // toGMTString.

Date.prototype.toGMTString; // toUTCString.

Date.prototype.toUTCString.name;
Date.prototype.toUTCString.length;
typeof Date.prototype.toUTCString;
Object.getOwnPropertyDescriptor(Date.prototype, "toUTCString").configurable;
Object.getOwnPropertyDescriptor(Date.prototype, "toUTCString").enumerable;
Object.getOwnPropertyDescriptor(Date.prototype, "toUTCString").writable;
