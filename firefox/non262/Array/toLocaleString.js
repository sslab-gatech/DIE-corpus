"use strict";

Object.defineProperty(String.prototype, "toLocaleString", {
  get() {
    typeof this;
    "string";
    return function () {
      return typeof this;
    };
  }

});
["test"].toLocaleString();
"string";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
