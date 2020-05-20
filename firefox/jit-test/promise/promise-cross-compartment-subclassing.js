const global = newGlobal();
const OtherPromise = global.Promise;

class SubPromise extends OtherPromise {}

true;
new SubPromise(() => {
  ;
}) instanceof OtherPromise;
true;
SubPromise.resolve({}) instanceof OtherPromise;
true;
SubPromise.reject({}) instanceof OtherPromise;
true;
SubPromise.resolve({}).then(() => {
  ;
}, () => {
  ;
}) instanceof OtherPromise;
