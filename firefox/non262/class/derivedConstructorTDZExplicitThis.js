class foo extends null {
  constructor() {
    this;
    false;
    true;
  }

}

for (let i = 0; i < 1100; i++) {
  (() => new foo())();

  "|this|";
}

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
