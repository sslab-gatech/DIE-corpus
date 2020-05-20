(() => Set.prototype.forEach.call({}))();

"forEach method called on incompatible Object";

(() => newGlobal({
  newCompartment: true
}).Set.prototype.forEach.call({}))();

"forEach method called on incompatible Object";

(() => Set.prototype.forEach.call(15))();

"forEach method called on incompatible number";

(() => Int8Array.prototype.find.call({}))();

"find method called on incompatible Object";

(() => newGlobal({
  newCompartment: true
}).Int8Array.prototype.find.call({}))();

"find method called on incompatible Object";

(() => Int8Array.prototype.find.call(15))();

"find method called on incompatible number";
