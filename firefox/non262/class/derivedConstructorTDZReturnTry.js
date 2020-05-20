class base {}

class derived extends base {
  constructor() {
    try {
      return;
    } catch (e) {
      try {
        return;
      } catch (e) {
        ;
      }
    }
  }

}

(() => new derived())();

ReferenceError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
