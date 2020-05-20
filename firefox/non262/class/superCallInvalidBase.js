class instance extends null {
  constructor() {
    super();
  }

}

(() => new instance())();

TypeError;

(() => new class extends null {}())();

TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
