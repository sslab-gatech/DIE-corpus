var objectProxy = new Proxy({}, {});
var functionProxy = new Proxy(function () {
  ;
}, {});
Object.prototype.toString.call(objectProxy);
'[object Object]';
Object.prototype.toString.call(functionProxy);
'[object Function]';

try {
  Function.prototype.toString.call(objectProxy);
  true;
  false;
} catch (e) {
  !!/incompatible/.exec(e);
  true;
}
