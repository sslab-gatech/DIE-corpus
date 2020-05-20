// The cycle check in 9.1.2 [[SetPrototypeOf]] prevents cross-realm cycles
// involving only ordinary objects.
var gw = newGlobal();
var obj = {};
var w = gw.Object.create(obj);

(() => Object.setPrototypeOf(obj, w))();

TypeError;

(() => gw.Object.setPrototypeOf(obj, w))();

gw.TypeError;
reportCompare(0, 0);
