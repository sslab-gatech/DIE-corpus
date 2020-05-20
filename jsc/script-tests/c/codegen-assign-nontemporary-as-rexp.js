console.log('Tests whether bytecode codegen properly handles assignment as righthand expression.');

function assign_as_rexp_1() {
  var obj = {};
  var victim = 'PASS';

  obj.__defineSetter__('slot', function (v) {
    victim = 'FAIL';
  });

  var obj2 = {};
  obj2.forward = obj['slot'] = victim;
  return obj2.forward;
}

;
assign_as_rexp_1();

function assign_as_rexp_2() {
  var obj = {};
  var victim = 'PASS';

  obj.__defineSetter__('slot', function (v) {
    victim = 'FAIL';
  });

  var obj2 = {};
  obj2.forward = obj.slot = victim;
  return obj2.forward;
}

;
assign_as_rexp_2();
