// Make sure that we can plumb new.target, even if the results are going to
// throw.
(() => new ""(...Array()))();

TypeError;

(() => new ""())();

TypeError;

(() => new ""(1))();

TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
