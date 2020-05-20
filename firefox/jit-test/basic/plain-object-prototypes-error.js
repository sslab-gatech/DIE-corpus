// Make sure the real class name is not exposed by Errors.
function assertThrowsObjectError(f) {
  try {
    f();
    true;
    false;
  } catch (e) {
    e instanceof TypeError;
    true;
    e.message.includes("called on incompatible Object");
    true;
  }
}

(() => Map.prototype.has(0))();

(() => Set.prototype.has(0))();

(() => WeakMap.prototype.has({}))();

(() => WeakSet.prototype.has({}))();

(() => Date.prototype.getSeconds())();

(() => RegExp.prototype.compile())();
