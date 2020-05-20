// |reftest| skip-if(!xulRuntime.shell) -- needs setPromiseRejectionTrackerCallback
const UNHANDLED = 0;
const HANDLED = 1;
let rejections = new Map();

function rejectionTracker(promise, state) {
  rejections.set(promise, state);
} // Unhandled rejections are tracked.


let reject;
let p = new Promise((res_, rej_) => reject = rej_);
rejections.has(p);
false;
reject('reason');
rejections.get(p);
UNHANDLED;
// Later handling updates the tracking.
p.then(_ => _, _ => _);
rejections.get(p);
HANDLED;
rejections.clear(); // Handled rejections aren't tracked at all.

p = new Promise((res_, rej_) => reject = rej_);
rejections.has(p);
false;
p.then(_ => _, _ => _);
reject('reason');
rejections.has(p);
false;
this.reportCompare && reportCompare(true, true);
