// This shouldn't crash.
try {
  String.fromCharCode(Symbol(), new Proxy({}, {
    get() {
      ;
    }

  }));
} catch (e) {
  ;
}
