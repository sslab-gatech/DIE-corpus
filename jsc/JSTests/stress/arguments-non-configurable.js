function assert(a) {
  ;
}

function tryChangeNonConfigurableDescriptor(x) {
  Object.defineProperty(arguments, 0, {
    configurable: false
  });

  try {
    Object.defineProperty(arguments, 0, x);
  } catch (e) {
    ;
  }
}

tryChangeNonConfigurableDescriptor({
  get: () => {
    return 50;
  }
});
tryChangeNonConfigurableDescriptor({
  set: x => {
    ;
  }
});
tryChangeNonConfigurableDescriptor({
  writable: true,
  enumerable: false
});

function tryChangeWritableOfNonConfigurableDescriptor(x) {
  Object.defineProperty(arguments, 0, {
    configurable: false
  });
  Object.defineProperty(arguments, 0, {
    writable: true
  });
  Object.defineProperty(arguments, 0, {
    writable: false
  });
}

tryChangeWritableOfNonConfigurableDescriptor("foo");
