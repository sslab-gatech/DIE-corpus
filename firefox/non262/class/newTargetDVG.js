function thunk() {
  new.target();
}

thunk();
"new.target";

if (typeof reportCompare === "function") {
  reportCompare(0, 0, "OK");
}
